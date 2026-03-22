const base = import.meta.env.BASE_URL

export default function Deck() {
  return (
    <iframe
      src={`${base}NP_Strategy_2026_Deck.html`}
      title="New Products 2026 Slide Deck"
      className="flex-1 w-full border-0"
      style={{ minHeight: 'calc(100vh - 48px)' }}
    />
  )
}
