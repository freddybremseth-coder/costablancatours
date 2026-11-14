// Parse every inline JavaScript / JSX block of the static production entrypoints.
// Vercel serves these files directly: a successful static deploy alone does not
// guarantee Babel-in-the-browser can parse the JSX.
const fs = require("node:fs");
const parser = require("@babel/parser");

function check(file) {
  const html = fs.readFileSync(file,"utf8");
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)];
  let parsed = 0;
  for (const [,attrs,source] of scripts) {
    if (/\bsrc\s*=/.test(attrs)) continue;
    const type = attrs.match(/\btype=["']([^"']+)["']/i)?.[1] || "";
    if (type.includes("json")) {
      JSON.parse(source);
      parsed += 1;
      continue;
    }
    if (type && type !== "text/babel" && type !== "text/javascript" && type !== "module") continue;
    parser.parse(source, {
      sourceType: type === "module" ? "module" : "script",
      plugins: ["jsx"]
    });
    parsed += 1;
  }
  if (parsed < 3) throw new Error(file + ": suspiciously few scripts parsed ("+parsed+")");
  console.log(file + ": " + parsed + " inline script blocks parsed successfully");
}
for (const file of ["index.html","public/index.html"]) check(file);
