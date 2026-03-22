const base = import.meta.env.BASE_URL

export default function Engineer() {
  return (
    <iframe
      src={`${base}NP_Engineer_Persona.html`}
      title="Engineering Persona Deep Dive"
      className="flex-1 w-full border-0"
      style={{ minHeight: 'calc(100vh - 52px)' }}
    />
  )
}
