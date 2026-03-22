import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/strategy', label: 'Strategy' },
  { to: '/deck-light', label: 'Strategy Deck' },
  { to: '/charter', label: 'Team Charter' },
  { to: '/builder', label: 'Builder Persona' },
  { to: '/engineer', label: 'Engineer Deep Dive' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(19, 17, 26, 0.72)',
        backdropFilter: 'blur(18px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1440, padding: '0 80px', height: 52 }}
      >
        <Link to="/" className="flex items-center gap-[9px]" style={{ opacity: 0.85 }}>
          <svg
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="#FF6200" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span className="text-[13px] font-semibold tracking-[0.01em] text-white">
            New Products
          </span>
        </Link>

        <ul className="flex items-center gap-[2px] list-none m-0 p-0">
          {links.map(({ to, label }) => {
            const active = pathname === to
            return (
              <li
                key={to}
                className="relative flex items-center"
                style={{ height: 52 }}
              >
                <Link
                  to={to}
                  className="inline-block rounded-[6px] transition-colors duration-150"
                  style={{
                    padding: '6px 14px',
                    fontSize: 13,
                    fontWeight: active ? 600 : 500,
                    color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.01em',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {label}
                </Link>
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 8,
                    right: 8,
                    height: 2,
                    borderRadius: '2px 2px 0 0',
                    background: '#FF6200',
                    transform: active ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: active ? 1 : 0,
                    transition: 'transform 0.2s ease, opacity 0.2s ease',
                  }}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
