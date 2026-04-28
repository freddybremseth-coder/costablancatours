
function useReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      ...style
    }}>{children}</div>
  );
}

function TourCard({ tour, setPage, setTourId, compact }) {
  const { t } = useLang();
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => { setTourId(tour.id); setPage('tour-detail'); window.scrollTo(0,0); }}
      style={{
        cursor: 'pointer', borderRadius: 4, overflow: 'hidden',
        background: '#111827',
        boxShadow: hov ? '0 24px 60px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hov ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.35s ease',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', paddingTop: compact ? '56%' : '66%', overflow: 'hidden' }}>
        <img src={tour.image} alt={tour.name} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transform: hov ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,24,0.85) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', top: 14, left: 14 }}>
          <span style={{
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.9)', fontFamily: 'DM Sans', fontSize: '0.7rem',
            letterSpacing: '0.07em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2,
          }}>{tour.category}</span>
        </div>
        <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
          <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>{tour.duration}</div>
          <h3 style={{ color: 'white', fontFamily: 'Playfair Display', fontSize: compact ? '1.1rem' : '1.3rem', fontWeight: 700, margin: 0, lineHeight: 1.25, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{tour.name}</h3>
        </div>
      </div>
      <div style={{ padding: '1.25rem 1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'DM Sans', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{tour.shortDesc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans', fontSize: '0.7rem', display: 'block', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t.tours.from}</span>
            <span style={{ color: 'white', fontFamily: 'Playfair Display', fontSize: '1.4rem', fontWeight: 700 }}>{tour.price}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontSize: '0.75rem' }}>{t.tours.perPerson}</span>
          </div>
          <div style={{
            background: hov ? 'var(--gold)' : 'transparent',
            border: '1px solid',
            borderColor: hov ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
            color: hov ? '#0a0f1c' : 'rgba(255,255,255,0.8)',
            fontFamily: 'DM Sans', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '0.5rem 1rem', borderRadius: 2,
            transition: 'all 0.25s',
          }}>{t.tours.viewDetails}</div>
        </div>
      </div>
    </div>
  );
}

function HomePage({ setPage, setTourId, showStats }) {
  const { t } = useLang();
  const featuredTours = TOURS.filter(tr => tr.featured);
  const [heroLoaded, setHeroLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => setHeroLoaded(true);
    img.src = window.HERO_IMG || HERO_IMG;
  }, []);

  const heroImg = window.HERO_IMG || HERO_IMG;

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', height: '100dvh', minHeight: 600, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: heroLoaded ? `url(${heroImg}) center/cover no-repeat` : '#0a1628',
          transition: 'opacity 0.8s ease',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,10,22,0.82) 0%, rgba(5,10,22,0.45) 60%, rgba(5,10,22,0.65) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />

        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <div style={{ maxWidth: 720, opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 1s ease 0.2s' }}>
            <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--gold)' }} />
              {t.hero.eyebrow}
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display', color: 'white', fontWeight: 700,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.1, margin: '0 0 1.5rem',
              letterSpacing: '-0.01em',
            }}>
              {t.hero.title1}<br/>
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{t.hero.titleItalic}</em> {t.hero.title2}<br/>
              {t.hero.title3}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontFamily: 'DM Sans', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 520 }}>
              {t.hero.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => setPage('tours')} style={{
                background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: 'pointer',
                fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '1rem 2.5rem', borderRadius: 2,
              }}>{t.hero.exploreBtn}</button>
              <button onClick={() => setPage('about')} style={{
                background: 'transparent', color: 'white',
                border: '1px solid rgba(255,255,255,0.4)',
                cursor: 'pointer', fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase', padding: '1rem 2rem', borderRadius: 2,
              }}>{t.hero.storyBtn}</button>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, var(--gold))', margin: '0 auto 8px' }} />
          <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.hero.scroll}</span>
        </div>
      </section>

      {/* STATS */}
      {showStats !== false && (
        <section style={{ background: '#0d1525', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="stats-grid">
            {[
              { num: '10+', label: t.stats.tours },
              { num: '4', label: t.stats.guests },
              { num: '100%', label: t.stats.inclusive },
              { num: '5★', label: t.stats.rating },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ fontFamily: 'Playfair Display', color: 'var(--gold)', fontSize: '2rem', fontWeight: 700 }}>{num}</div>
                <div style={{ fontFamily: 'DM Sans', color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WHY US */}
      <section style={{ background: '#0a0f1c', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.why.eyebrow}</div>
              <h2 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, margin: 0 }}>{t.why.title}</h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {['◈','◉','◎','◐'].map((icon, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '2.5rem 2rem' }}>
                  <div style={{ color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>{icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{t.why.items[i].title}</h3>
                  <p style={{ fontFamily: 'DM Sans', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{t.why.items[i].desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: '#080c18', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.featured.eyebrow}</div>
                <h2 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, margin: 0 }}>{t.featured.title}</h2>
              </div>
              <button onClick={() => setPage('tours')} style={{
                background: 'none', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
                color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans', fontSize: '0.8rem',
                letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.6rem 1.5rem', borderRadius: 2,
              }}>{t.featured.viewAll}</button>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {featuredTours.map((tour, i) => (
              <Reveal key={tour.id} delay={i * 100}>
                <TourCard tour={tour} setPage={setPage} setTourId={setTourId} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', padding: '7rem 2rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600) center/cover no-repeat` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,22,0.78)' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <div style={{ color: 'var(--gold)', fontFamily: 'DM Sans', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cta.eyebrow}</div>
            <h2 style={{ fontFamily: 'Playfair Display', color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem' }}>{t.cta.title}</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'DM Sans', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>{t.cta.subtitle}</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setPage('booking')} style={{
                background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: 'pointer',
                fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '1rem 2.5rem', borderRadius: 2,
              }}>{t.cta.reserveBtn}</button>
              <button onClick={() => setPage('contact')} style={{
                background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)',
                cursor: 'pointer', fontFamily: 'DM Sans', fontSize: '0.875rem', fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase', padding: '1rem 2rem', borderRadius: 2,
              }}>{t.cta.questionBtn}</button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, TourCard, Reveal, useReveal });
