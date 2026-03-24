const base = import.meta.env.BASE_URL

export default function Strategy() {
  return (
    <iframe
      src={`${base}NP_Strategy_2026.html`}
      title="New Products 2026 Strategy"
      className="w-full border-0"
      style={{ minHeight: 'calc(100vh - 52px)', overflow: 'hidden' }}
    />
  )
}
