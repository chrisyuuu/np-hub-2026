import { Link } from 'react-router-dom'

const items = [
  {
    to: '/strategy',
    title: 'Strategy Narrative',
    desc: 'Full landing page — two personas, three bets, one plan. The complete 2026 strategy narrative for New Products.',
    accent: '#FF6200',
    headerBg: '#FFF4EE',
    headerColor: '#C74A00',
    tag: 'Landing Page',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    to: '/deck-light',
    title: 'Strategy Deck',
    desc: '8-slide interactive deck with table of contents, right-side navigation, and full keyboard controls.',
    accent: '#00C2A8',
    headerBg: '#E6FAF8',
    headerColor: '#007A6A',
    tag: 'Slide Deck',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    to: '/charter',
    title: 'Team Charter',
    desc: 'Product organization and scope — two personas built on a shared foundation.',
    accent: '#6B46FF',
    headerBg: '#EDEBFF',
    headerColor: '#3B28CC',
    tag: 'Team Charter',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    to: '/builder',
    title: 'What is the Product Builder?',
    desc: 'The builder thesis — six archetypes, the workflow loop, unmet needs, and why this persona changes everything about how tools get built and bought.',
    accent: '#F59E0B',
    headerBg: '#FFFBEB',
    headerColor: '#B45309',
    tag: 'Persona Guide',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    to: '/engineer',
    title: 'Engineering Persona Deep Dive',
    desc: 'Why the engineer ships for a living — five archetypes, daily workflow, evaluation criteria, the Statsig void, and the AI engineer opportunity.',
    accent: '#0EA5E9',
    headerBg: '#F0F9FF',
    headerColor: '#0369A1',
    tag: 'Deep Dive',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
]

export default function Hub() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: 'var(--amp-dark)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120, right: -120,
            width: 480, height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,98,0,0.22) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180, left: -60,
            width: 400, height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(107,70,255,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1440,
            margin: '0 auto',
            padding: '72px 40px 56px',
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FF6200',
              marginBottom: 20,
            }}
          >
            New Products &nbsp;·&nbsp; 2026
          </div>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 20,
              maxWidth: 580,
            }}
          >
            Content <span style={{ color: '#FF6200' }}>Hub</span>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: '#94A3B8',
              maxWidth: 520,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            All strategy docs, decks, and pages in one place.
          </p>
        </div>
      </div>

      {/* Content grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          maxWidth: 1440,
          margin: '0 auto',
          padding: '40px 40px 60px',
        }}
      >
        {items.map(({ to, title, desc, accent, headerBg, headerColor, tag, icon }) => (
          <Link
            key={to}
            to={to}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              background: '#fff',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.08), 0 8px 28px rgba(0,0,0,0.08)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div
              style={{
                padding: '16px 24px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: headerBg,
                color: headerColor,
              }}
            >
              <span
                style={{
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: accent,
                  flexShrink: 0,
                }}
              />
              {tag}
            </div>

            <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 36, height: 36,
                    borderRadius: 8,
                    background: headerBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: accent,
                  }}
                >
                  {icon}
                </div>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#111827',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {title}
                </span>
              </div>

              <p
                style={{
                  fontSize: 12.5,
                  color: '#6B7280',
                  lineHeight: 1.65,
                  margin: 0,
                  flex: 1,
                }}
              >
                {desc}
              </p>

              <div
                style={{
                  marginTop: 18,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: accent,
                }}
              >
                Open
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: 28,
          fontSize: 11.5,
          color: '#475569',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'var(--amp-dark)',
          marginTop: 'auto',
        }}
      >
        Confidential &nbsp;·&nbsp; Amplitude Inc. &nbsp;·&nbsp; March 2026
      </footer>
    </>
  )
}
