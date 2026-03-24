const base = import.meta.env.BASE_URL

export default function DeckLight() {
  return (
    <iframe
      src={`${base}NP_Strategy_2026_Deck_Light.html`}
      title="New Products 2026 Slide Deck (Light)"
      className="flex-1 w-full border-0"
      style={{ minHeight: 'calc(100vh - 52px)' }}
    />
  )
}
