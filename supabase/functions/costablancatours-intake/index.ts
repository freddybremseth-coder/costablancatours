// Costa Blanca Tours public inquiry intake.
// Real storage and honest confirmation; never processes payment or confirms a tour.
const ALLOWED_ORIGINS = new Set([
  "https://www.costablancatours.pro",
  "https://costablancatours.pro",
  "https://costablancatours-web.vercel.app"
]);
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const NOTIFY_TO = Deno.env.get("TOURS_NOTIFICATION_EMAIL") || "freddy@zenecohomes.com";
const FROM_EMAIL = Deno.env.get("TOURS_FROM_EMAIL") || "";
const RESEND_KEY = Deno.env.get("RESEND_API_KEY") || "";
const TOURS = new Set([
  "villajoyosa-chocolate", "sierra-nevada", "juan-gil-wine",
  "ibiza-escape", "altea-charm", "dona-anna", "markedet-tour",
  "guadalest-valley", "romantisk-tur", "solnedgang-sunset",
  "relleu-olive-oil"
]);
function respond(body: unknown, status: number, origin: string, extra: Record<string,string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "vary": "Origin",
      ...(ALLOWED_ORIGINS.has(origin) ? {"access-control-allow-origin": origin} : {}),
      ...extra
    }
  });
}
function pick(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
function uuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
async function sha256(value: string) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(d), x => x.toString(16).padStart(2,"0")).join("");
}
async function db(path: string, payload: unknown, prefer: string) {
  const response = await fetch(SUPABASE_URL + "/rest/v1/" + path, {
    method: "POST",
    headers: {
      "apikey": SERVICE_KEY,
      "authorization": "Bearer " + SERVICE_KEY,
      "content-type": "application/json",
      "prefer": prefer
    },
    body: JSON.stringify(payload)
  });
  const raw = await response.text();
  let data: any = null;
  try { data = raw ? JSON.parse(raw) : null; } catch { /* Invalid JSON remains an error. */ }
  return { ok: response.ok, status: response.status, data };
}
Deno.serve(async (request: Request) => {
  const origin = request.headers.get("origin") || "";
  if (request.method === "OPTIONS") {
    if (!ALLOWED_ORIGINS.has(origin)) return respond({error: "origin_not_allowed"}, 403, origin);
    return new Response(null, {
      status: 204,
      headers: {
        "access-control-allow-origin": origin,
        "access-control-allow-methods": "POST, OPTIONS",
        "access-control-allow-headers": "content-type, apikey, authorization, x-client-info",
        "access-control-max-age": "600",
        "vary": "Origin"
      }
    });
  }
  if (request.method !== "POST") return respond({error:"method_not_allowed"},405,origin);
  if (!ALLOWED_ORIGINS.has(origin)) return respond({error:"origin_not_allowed"},403,origin);
  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error("[cbt-intake] missing Supabase function environment");
    return respond({error:"temporarily_unavailable"},503,origin);
  }
  if (!(request.headers.get("content-type") || "").toLowerCase().includes("application/json")) {
    return respond({error:"expected_json"},415,origin);
  }
  let input: Record<string,any>;
  try {
    const raw = await request.text();
    if (raw.length > 10000) return respond({error:"payload_too_large"},413,origin);
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid");
    input = parsed;
  } catch {
    return respond({error:"invalid_payload"},400,origin);
  }
  // Honeypot is deliberately not visible in the user interface.
  if (pick(input.website,200)) return respond({ok:true,accepted:false},200,origin);
  const started = Number(input.started_at || 0);
  if (started && Date.now() >= started && Date.now() - started < 800) {
    return respond({error:"please_try_again"},429,origin);
  }
  const guestName = pick(input.name,160);
  const email = pick(input.email,320).toLowerCase();
  const phone = pick(input.phone,90);
  const notes = pick(input.message || input.notes,3000);
  const tourId = pick(input.tour_id,100);
  const tourName = pick(input.tour_name,200);
  const pickup = pick(input.pickup_area,200);
  const locale = pick(input.locale,10) || "en";
  const type = pick(input.form_type,30);
  const validTypes = new Set(["contact","private_tour","tour_request"]);
  const guests = input.guests === null || input.guests === undefined || input.guests === "" ? null : Number(input.guests);
  const desiredDate = pick(input.preferred_date,10);
  const idem = pick(input.idempotency_key,80);
  if (!validTypes.has(type) || guestName.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
     || input.privacy_consent !== true || !["en","no","es","de","fr","sv","ru"].includes(locale)
     || (type !== "contact" && !TOURS.has(tourId))
     || (guests !== null && (!Number.isInteger(guests) || guests < 1 || guests > 4))
     || !uuid(idem) || (type === "contact" && notes.length < 5)) {
    return respond({error:"invalid_fields"},400,origin);
  }
  if (desiredDate) {
    const d = new Date(desiredDate + "T00:00:00.000Z");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(desiredDate) || Number.isNaN(d.getTime()) || d.toISOString().slice(0,10) !== desiredDate || d.getTime() < Date.now()-86400000) {
      return respond({error:"invalid_date"},400,origin);
    }
  }
  // Cross-origin browser request is not proof of origin, so rate-limit by hashed connection identity.
  const clientIp = pick(request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("cf-connecting-ip") || "anonymous",100);
  const identityHash = await sha256("cbt-inquiry:v1:" + clientIp);
  const rate = await db("rpc/try_take_donaanna_inquiry_slot",{
    p_identity_hash: identityHash,p_limit: 6,p_window_seconds: 900
  },"");
  if (!rate.ok) {
    console.error("[cbt-intake] rate guard unavailable",rate.status);
    return respond({error:"temporarily_unavailable"},503,origin);
  }
  if (rate.data !== true) return respond({error:"rate_limited"},429,origin,{"retry-after":"900"});

  const row = {
    form_type: type,
    tour_id: tourId || null,
    tour_name: tourName || null,
    preferred_date: desiredDate || null,
    guests,
    guest_name: guestName,email,phone:phone || null,
    pickup_area: pickup || null,message:notes || null,
    locale,source_page: pick(input.source_page,500) || null,
    idempotency_key: idem,
    privacy_consent: true
  };
  const write = await db("costablancatours_inquiries?on_conflict=idempotency_key",row,
    "resolution=ignore-duplicates,return=representation");
  if (!write.ok) {
    console.error("[cbt-intake] insert failed",write.status);
    return respond({error:"temporarily_unavailable"},503,origin);
  }
  const inserted = Array.isArray(write.data) && write.data.length ? write.data[0] : null;
  if (!inserted) {
    // An idempotent resubmission cannot generate another mail or double-book.
    return respond({ok:true,accepted:true,duplicate:true},200,origin);
  }

  // Optional mail notification if an explicitly configured verified sender exists.
  // Customer-facing confirmation depends on successful persistence, not on mail delivery.
  if (RESEND_KEY && FROM_EMAIL) {
    const body = [
      "New Costa Blanca Tours enquiry", "Reference: "+ inserted.id,
      "Type: "+type, "Tour: "+(tourName||tourId||"general"),
      "Date: "+(desiredDate||"not set"), "Guests: "+(guests??"not set"),
      "Name: "+guestName, "Email: "+email, "Phone: "+(phone||"not set"),
      "Pickup area: "+(pickup||"not set"), "Notes: "+notes
    ].join("\n");
    try {
      const mail = await fetch("https://api.resend.com/emails",{
        method:"POST",
        headers:{"authorization":"Bearer "+RESEND_KEY,"content-type":"application/json"},
        body:JSON.stringify({from:FROM_EMAIL,to:[NOTIFY_TO],
          subject:"Costa Blanca Tours enquiry – "+(tourName||tourId||"Contact"),
          text:body,reply_to:email})
      });
      const ok = mail.ok;
      const change=await fetch(SUPABASE_URL + "/rest/v1/costablancatours_inquiries?id=eq."+inserted.id,{
        method:"PATCH",
        headers:{"apikey":SERVICE_KEY,"authorization":"Bearer "+SERVICE_KEY,"content-type":"application/json"},
        body:JSON.stringify({notification_status:ok?"sent":"failed",notified_at:ok?new Date().toISOString():null})
      });
      if (!change.ok || !ok) console.warn("[cbt-intake] email notification failed or state not saved",mail.status,change.status);
    } catch {
      console.warn("[cbt-intake] email notification attempt failed");
    }
  }
  return respond({ok:true,accepted:true,reference:inserted.id},201,origin);
});
