
function AboutPage({ setPage }) {
  const { t } = useLang();
  const ab = t.about;
  return (
    <div style={{ background: '#080c18', minHeight: '100vh', paddingTop: 72 }}>
      <div style={{ position: 'relative', padding: '6rem 2rem 5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1600) center/cover no-repeat` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,22,0.82)' }} />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>{ab.eyebrow}</div>
          <h1 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, margin: '0 0 1.5rem', lineHeight: 1.15 }}>
            {ab.heroTitle}<br/><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{ab.heroItalic}</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'DM Sans', fontSize: '1.1rem', lineHeight: 1.75 }}>{ab.heroSubtitle}</p>
        </div>
      </div>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
          <Reveal>
            <div>
              <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>{ab.philEyebrow}</div>
              <h2 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.25 }}>{ab.philTitle}</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>{ab.phil1}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>{ab.phil2}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans', fontSize: '0.95rem', lineHeight: 1.8 }}>{ab.phil3}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800" alt="Local market" style={{ width: '100%', borderRadius: 4, display: 'block' }} />
              <div style={{ position: 'absolute', bottom: -24, right: -24, background: '#0d1525', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '1.5rem', maxWidth: 200 }}>
                <div style={{ fontFamily: 'Playfair Display', color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>4</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans', fontSize: '0.8rem', marginTop: 6, lineHeight: 1.4 }}>{ab.values[0].title}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: '#0a0f1c', padding: '5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>{ab.valuesTitle}</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {ab.values.map(({ title, desc }, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '2rem' }}>
                  <div style={{ color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1rem' }}>{'◈◉◎◐'[i]}</div>
                  <h3 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>{title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>{ab.ctaTitle}</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'DM Sans', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2rem' }}>{ab.ctaText}</p>
            <button onClick={() => setPage('tours')} style={{
              background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: 'pointer',
              fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '1rem 2.5rem', borderRadius: 2,
            }}>{ab.ctaBtn}</button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', message: '', tour: '' });
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  const inputStyle = { width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 2, padding: '0.875rem 1rem', color: 'white', fontFamily: 'DM Sans', fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none' };
  const labelStyle = { display: 'block', color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 };

  return (
    <div style={{ background: '#080c18', minHeight: '100vh', paddingTop: 72 }}>
      <div style={{ background: '#0a1020', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>{c.eyebrow}</div>
          <h1 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 1rem' }}>{c.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>{c.subtitle}</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem 6rem', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '4rem', alignItems: 'start' }} className="contact-grid">
        <div>
          {sent ? (
            <div style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 4, padding: '3rem', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '1rem' }}>◆</div>
              <h3 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{c.successTitle}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans', fontSize: '0.9rem', lineHeight: 1.7 }}>{c.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>{c.nameLabel}</label>
                  <input type="text" placeholder={c.namePlaceholder} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inputStyle} required />
                </div>
                <div>
                  <label style={labelStyle}>{c.emailLabel}</label>
                  <input type="email" placeholder={c.emailPlaceholder} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle} required />
                </div>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>{c.tourLabel}</label>
                <select value={form.tour} onChange={e => setForm(f => ({ ...f, tour: e.target.value }))} style={{ ...inputStyle, color: form.tour ? 'white' : 'rgba(255,255,255,0.35)' }}>
                  <option value="">{c.tourPlaceholder}</option>
                  {TOURS.map(tr => <option key={tr.id} value={tr.id}>{tr.name}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={labelStyle}>{c.messageLabel}</label>
                <textarea placeholder={c.messagePlaceholder} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={6} required style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" disabled={sending} style={{
                background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: sending ? 'wait' : 'pointer',
                fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '1rem 2.5rem', borderRadius: 2, opacity: sending ? 0.7 : 1,
              }}>{sending ? c.sendingBtn : c.sendBtn}</button>
            </form>
          )}
        </div>

        <div>
          <div style={{ background: '#0d1525', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '2rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.5rem' }}>{c.eyebrow}</h3>
            {[
              { label: 'Website', val: 'cbt.freddybremseth.com' },
              { label: 'Email', val: 'info@costablancatours.com' },
              { label: 'Phone', val: '+34 600 000 000' },
              { label: 'Location', val: 'Alicante, Costa Blanca, Spain' },
            ].map(({ label, val }) => (
              <div key={label} style={{ padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans', fontSize: '0.875rem' }}>{val}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 4, padding: '1.5rem' }}>
            <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{c.responseTitle}</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{c.responseText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingPage({ setPage }) {
  const { t } = useLang();
  const b = t.booking;
  const [form, setForm] = React.useState({ tour: '', date: '', guests: 2, name: '', email: '', phone: '', notes: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [ref] = React.useState(() => 'CBT-' + Math.random().toString(36).slice(2,8).toUpperCase());

  const selectedTour = TOURS.find(tr => tr.id === form.tour);
  const total = selectedTour ? (parseInt(selectedTour.priceNum) * form.guests) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setDone(true); }, 1400);
  };

  const inputStyle = { width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 2, padding: '0.875rem 1rem', color: 'white', fontFamily: 'DM Sans', fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none' };
  const labelStyle = { display: 'block', color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 };

  if (done) {
    return (
      <div style={{ background: '#080c18', minHeight: '100vh', paddingTop: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 540, textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '2rem', color: 'var(--gold)' }}>◆</div>
          <h1 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>{b.successTitle}</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'DM Sans', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {typeof b.successText === 'function' ? b.successText(form.name, form.email) : b.successText}
          </p>
          <div style={{ background: '#0d1525', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '1.5rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            {[
              [b.refLabel, ref],
              [b.tourLabel2, selectedTour?.name],
              [b.dateLabel2, form.date],
              [b.guestsLabel2, `${form.guests}`],
              [b.totalLabel2, `€${total}`],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontSize: '0.8rem' }}>{k}</span>
                <span style={{ color: 'white', fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setPage('tours')} style={{
            background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: 'pointer',
            fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '1rem 2.5rem', borderRadius: 2,
          }}>{b.exploreBtn}</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#080c18', minHeight: '100vh', paddingTop: 72 }}>
      <div style={{ background: '#0a1020', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>{b.eyebrow}</div>
          <h1 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 0.75rem' }}>{b.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{b.subtitle}</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem 6rem', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '4rem', alignItems: 'start' }} className="booking-grid">
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: 'var(--gold)', color: '#0a0f1c', fontSize: '0.7rem', fontWeight: 700 }}>1</span>
              {b.step1}
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>{b.tourLabel}</label>
              <select value={form.tour} onChange={e => setForm(f => ({ ...f, tour: e.target.value }))} required style={{ ...inputStyle, color: form.tour ? 'white' : 'rgba(255,255,255,0.35)' }}>
                <option value="">{b.tourPlaceholder}</option>
                {TOURS.map(tr => <option key={tr.id} value={tr.id}>{tr.name} — {tr.price}</option>)}
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>{b.dateLabel}</label>
                <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} required style={{ ...inputStyle, colorScheme: 'dark' }} />
              </div>
              <div>
                <label style={labelStyle}>{b.guestsLabel}</label>
                <select value={form.guests} onChange={e => setForm(f => ({ ...f, guests: parseInt(e.target.value) }))} style={inputStyle}>
                  {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: 'var(--gold)', color: '#0a0f1c', fontSize: '0.7rem', fontWeight: 700 }}>2</span>
              {b.step2}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>{b.nameLabel}</label>
                <input type="text" placeholder={b.namePlaceholder} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>{b.emailLabel}</label>
                <input type="email" placeholder={b.emailPlaceholder} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required style={inputStyle} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>{b.phoneLabel}</label>
                <input type="tel" placeholder={b.phonePlaceholder} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>{b.notesLabel}</label>
              <textarea placeholder={b.notesPlaceholder} value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
          </div>

          <button type="submit" disabled={submitting} style={{
            background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: submitting ? 'wait' : 'pointer',
            fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '1.1rem 3rem', borderRadius: 2, opacity: submitting ? 0.7 : 1,
          }}>{submitting ? b.processingBtn : b.submitBtn}</button>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans', fontSize: '0.8rem', marginTop: '1rem' }}>{b.cancelNote}</p>
        </form>

        <div style={{ position: 'sticky', top: 92 }}>
          <div style={{ background: '#0d1525', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '2rem' }}>
            <h3 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>{b.summaryTitle}</h3>
            {selectedTour ? (
              <>
                <img src={selectedTour.image} alt={selectedTour.name} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 2, marginBottom: '1.25rem' }} />
                <div style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>{selectedTour.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontSize: '0.8rem', marginBottom: '1.5rem' }}>{selectedTour.duration}</div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '0.875rem' }}>{selectedTour.price} × {form.guests}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ color: 'white', fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 700 }}>{b.totalLabel}</span>
                    <span style={{ color: 'var(--gold)', fontFamily: 'Playfair Display', fontSize: '1.4rem', fontWeight: 700 }}>€{total}</span>
                  </div>
                </div>
              </>
            ) : (
              <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans', fontSize: '0.875rem', textAlign: 'center', padding: '2rem 0' }}>{b.selectTour}</p>
            )}
          </div>
          <div style={{ marginTop: '1.25rem', padding: '1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4 }}>
            {b.whyItems.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 0' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '0.8rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AboutPage, ContactPage, BookingPage });
