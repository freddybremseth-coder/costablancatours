
function ToursPage({ setPage, setTourId }) {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = React.useState('All');
  const filterLabel = t.tours.filter;
  const cats = [filterLabel, ...CATEGORIES.slice(1)];
  const filtered = activeCategory === filterLabel || activeCategory === 'All'
    ? TOURS
    : TOURS.filter(tr => tr.category === activeCategory);

  return (
    <div style={{ background: '#080c18', minHeight: '100vh', paddingTop: 72 }}>
      <div style={{ background: '#0a1020', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.tours.eyebrow}</div>
          <h1 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1.15 }}>{t.tours.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '1rem', lineHeight: 1.7, maxWidth: 600, margin: 0 }}>{t.tours.subtitle}</p>
        </div>
      </div>

      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0a0f1c', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', gap: 0 }}>
          {cats.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'DM Sans', fontSize: '0.78rem', letterSpacing: '0.05em',
              textTransform: 'uppercase', fontWeight: 500, whiteSpace: 'nowrap',
              padding: '1.1rem 1.25rem',
              color: activeCategory === cat ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
              borderBottom: activeCategory === cat ? '2px solid var(--gold)' : '2px solid transparent',
              transition: 'all 0.2s',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        <div style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans', fontSize: '0.85rem' }}>
          {filtered.length} {filtered.length === 1 ? t.tours.count1 : t.tours.countN}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((tour, i) => (
            <Reveal key={tour.id} delay={i * 60}>
              <TourCard tour={tour} setPage={setPage} setTourId={setTourId} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function TourDetailPage({ tourId, setPage, setTourId }) {
  const { t } = useLang();
  const tour = TOURS.find(tr => tr.id === tourId) || TOURS[0];
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div style={{ background: '#080c18', minHeight: '100vh', paddingTop: 72 }}>
      <div style={{ position: 'relative', height: '65vh', minHeight: 420, overflow: 'hidden' }}>
        <img src={tour.image} alt={tour.name} onLoad={() => setImgLoaded(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.6s' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,24,1) 0%, rgba(8,12,24,0.5) 40%, rgba(8,12,24,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '0 2rem 3rem' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
            <button onClick={() => setPage('tours')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem', padding: 0 }}>
              {t.detail.backBtn}
            </button>
            <span style={{ background: 'var(--gold)', color: '#0a0f1c', fontFamily: 'DM Sans', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 2, display: 'inline-block', marginBottom: '1rem' }}>{tour.category}</span>
            <h1 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, margin: '0 0 0.5rem', lineHeight: 1.15 }}>{tour.name}</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'DM Sans', fontSize: '1rem', margin: 0, fontStyle: 'italic' }}>{tour.tagline}</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 6rem', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '4rem', alignItems: 'start' }} className="detail-grid">
        <div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[
              { label: t.detail.duration, value: tour.duration },
              { label: t.detail.maxGuests, value: `${tour.maxGuests}` },
              { label: t.detail.transport, value: tour.transport },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 2, padding: '0.875rem 1.25rem' }}>
                <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                <div style={{ color: 'white', fontFamily: 'DM Sans', fontSize: '0.9rem', fontWeight: 500 }}>{value}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>{t.detail.aboutTitle}</h2>
          {tour.fullDesc.split('\n\n').map((para, i) => (
            <p key={i} style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'DM Sans', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>{para}</p>
          ))}

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4 }}>
            <h3 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>{t.detail.highlightsTitle}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {tour.highlights.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>◆</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans', fontSize: '0.875rem' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'sticky', top: 92 }}>
          <div style={{ background: '#0d1525', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '2rem' }}>
            <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>{t.detail.priceLabel}</div>
              <div style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>{tour.price}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontSize: '0.8rem', marginTop: 6 }}>{t.detail.allInclusive} {tour.maxGuests}</div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              {t.detail.included.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 0' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans', fontSize: '0.85rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setPage('booking')} style={{
              width: '100%', background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: 'pointer',
              fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '1rem', borderRadius: 2, marginBottom: '0.75rem',
            }}>{t.detail.reserveBtn}</button>
            <button onClick={() => setPage('contact')} style={{
              width: '100%', background: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
              fontFamily: 'DM Sans', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase',
              padding: '0.875rem', borderRadius: 2,
            }}>{t.detail.questionBtn}</button>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans', fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>
              {t.detail.cancelNote}
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.detail.otherTitle}</div>
            {TOURS.filter(tr => tr.id !== tourId).slice(0, 3).map(tr => (
              <div key={tr.id}
                style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', alignItems: 'center' }}
                onClick={() => { window.__setTourId(tr.id); window.scrollTo(0,0); }}
              >
                <img src={tr.image} alt={tr.name} style={{ width: 60, height: 44, objectFit: 'cover', borderRadius: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'DM Sans', fontSize: '0.825rem', fontWeight: 500, lineHeight: 1.3 }}>{tr.name}</div>
                  <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.75rem', marginTop: 3 }}>{tr.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ToursPage, TourDetailPage });
