const base = import.meta.env.BASE_URL

export default function Charter() {
  return (
    <iframe
      src={`${base}NP_Team_Charter.html`}
      title="New Products 2026 Team Charter"
      className="w-full border-0"
      style={{ minHeight: 'calc(100vh - 52px)', overflow: 'hidden' }}
    />
  )
}
