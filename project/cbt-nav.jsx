
function CbtLogo({ size = 54, color = 'var(--gold)' }) {
  const w = size;
  const h = size * (190 / 180);
  return (
    <svg width={w} height={h} viewBox="0 0 180 190" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.35))' }}>
      <circle cx="90" cy="72" r="9" fill={color} opacity="0.18"/>
      <circle cx="90" cy="72" r="18" stroke={color} strokeWidth="2"/>
      <line x1="90" y1="43" x2="90" y2="36" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="90" y1="101" x2="90" y2="108" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="61" y1="72" x2="54" y2="72" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="119" y1="72" x2="126" y2="72" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="69.5" y1="51.5" x2="64.5" y2="46.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="110.5" y1="51.5" x2="115.5" y2="46.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="69.5" y1="92.5" x2="64.5" y2="97.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="110.5" y1="92.5" x2="115.5" y2="97.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="32" y1="108" x2="148" y2="108" stroke={color} strokeWidth="1.4"/>
      <path d="M32 118 Q50 112 68 118 Q86 124 104 118 Q122 112 148 118" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M38 128 Q56 122 74 128 Q92 134 110 128 Q128 122 142 128" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M46 137 Q62 131 78 137 Q94 143 110 137 Q126 131 134 137" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
      <text x="90" y="156" textAnchor="middle" fill={color}
        fontFamily="Cormorant Garamond, Playfair Display, serif"
        fontSize="14" fontWeight="600" letterSpacing="4.5">COSTA BLANCA</text>
      <line x1="52" y1="161" x2="128" y2="161" stroke={color} strokeWidth="0.7" opacity="0.4"/>
      <text x="90" y="173" textAnchor="middle" fill={color}
        fontFamily="DM Sans, sans-serif"
        fontSize="8" fontWeight="400" letterSpacing="7" opacity="0.75">TOURS</text>
    </svg>
  );
}

function LangSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = React.useState(false);
  const langs = Object.entries(LANG_FLAGS);

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)} style={{
        background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 2, cursor: 'pointer', color: 'white',
        fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', fontWeight: 600,
        letterSpacing: '0.06em', padding: '0.35rem 0.65rem',
        display: 'flex', alignItems: 'center', gap: '0.35rem',
        transition: 'all 0.2s',
      }}>
        <span>{LANG_FLAGS[lang]?.flag}</span>
        <span>{LANG_FLAGS[lang]?.label}</span>
        <span style={{ opacity: 0.5, fontSize: '0.6rem' }}>▼</span>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', right: 0,
          background: 'rgba(13,21,37,0.98)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 4, overflow: 'hidden', zIndex: 200,
          boxShadow: '0 12px 40px rgba(0,0,0,0.6)', minWidth: 100,
        }}>
          {langs.map(([code, { flag, label }]) => (
            <button key={code} onClick={() => { setLang(code); setOpen(false); }} style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              width: '100%', background: lang === code ? 'rgba(201,168,76,0.12)' : 'transparent',
              border: 'none', cursor: 'pointer',
              color: lang === code ? 'var(--gold)' : 'rgba(255,255,255,0.7)',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: lang === code ? 700 : 400,
              padding: '0.6rem 1rem', textAlign: 'left',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => { if (lang !== code) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={e => { if (lang !== code) e.currentTarget.style.background = 'transparent'; }}
            >
              <span>{flag}</span><span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header({ page, setPage }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { t, lang } = useLang();
  const isHero = page === 'home';

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => { setMenuOpen(false); }, [page]);

  const nav = [
    { id: 'home', label: t.nav.home },
    { id: 'tours', label: t.nav.tours },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const frosted = scrolled || !isHero || menuOpen;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s ease',
      background: frosted ? 'rgba(10,15,28,0.92)' : 'transparent',
      backdropFilter: frosted ? 'blur(16px)' : 'none',
      borderBottom: frosted ? '1px solid rgba(255,255,255,0.07)' : 'none',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0 0 0' }}>
          <CbtLogo size={54} />
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {nav.map(n => (
            <button key={n.id} onClick={() => setPage(n.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: page === n.id ? 'var(--gold)' : 'rgba(255,255,255,0.82)',
              fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              borderBottom: page === n.id ? '1px solid var(--gold)' : '1px solid transparent',
              paddingBottom: 2, transition: 'all 0.2s',
            }}>{n.label}</button>
          ))}
          <LangSwitcher />
          <button onClick={() => setPage('booking')} style={{
            background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.6rem 1.5rem',
            borderRadius: 2, transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background='var(--gold-light)'}
          onMouseLeave={e => e.currentTarget.style.background='var(--gold)'}
          >{t.nav.bookNow}</button>
        </nav>

        {/* Mobile */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="mobile-controls">
          <LangSwitcher />
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: 22,
          }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: 'rgba(10,15,28,0.97)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 2rem 2rem' }}>
          {nav.map(n => (
            <button key={n.id} onClick={() => { setPage(n.id); setMenuOpen(false); }} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              color: page === n.id ? 'var(--gold)' : 'rgba(255,255,255,0.85)',
              fontFamily: 'DM Sans, sans-serif', fontSize: '1.1rem', fontWeight: 500,
              padding: '0.9rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>{n.label}</button>
          ))}
          <button onClick={() => { setPage('booking'); setMenuOpen(false); }} style={{
            display: 'block', width: '100%', marginTop: '1.5rem',
            background: 'var(--gold)', color: '#0a0f1c', border: 'none', cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.9rem 1.5rem', borderRadius: 2,
          }}>{t.nav.bookNow}</button>
        </div>
      )}
    </header>
  );
}

function Footer({ setPage }) {
  const { t } = useLang();
  return (
    <footer style={{ background: '#080c18', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <CbtLogo size={110} />
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 280, marginTop: '0.5rem' }}>
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'DM Sans', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.footer.experiences}</h4>
            {['Culinary & Culture', 'Wine & Gastronomy', 'Adventure & Sports', 'Romance & Luxury', 'Nature & Relaxation'].map(c => (
              <button key={c} onClick={() => setPage('tours')} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans', fontSize: '0.875rem', padding: '0.25rem 0', textAlign: 'left', transition: 'color 0.2s' }}
              onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
              onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}
              >{c}</button>
            ))}
          </div>
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'DM Sans', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.footer.quickLinks}</h4>
            {[['home', t.nav.home],['tours', t.nav.tours],['about', t.nav.about],['contact', t.nav.contact],['booking', t.nav.bookNow]].map(([id,label]) => (
              <button key={id} onClick={() => setPage(id)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans', fontSize: '0.875rem', padding: '0.25rem 0', textAlign: 'left', transition: 'color 0.2s' }}
              onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
              onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}
              >{label}</button>
            ))}
          </div>
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'DM Sans', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.footer.contact}</h4>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.8 }}>
              cbt.freddybremseth.com<br/>
              info@costablancatours.com<br/>
              +34 600 000 000<br/>
              Alicante, Spain
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontFamily: 'DM Sans' }}>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CbtLogo, LangSwitcher, Header, Footer });
