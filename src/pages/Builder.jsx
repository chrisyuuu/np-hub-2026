const base = import.meta.env.BASE_URL

export default function Builder() {
  return (
    <iframe
      src={`${base}NP_Product_Builder.html`}
      title="What is the Product Builder?"
      className="w-full border-0"
      style={{ minHeight: 'calc(100vh - 52px)', overflow: 'hidden' }}
    />
  )
}
