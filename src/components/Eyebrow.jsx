export default function Eyebrow({ children, centered = false }) {
  return (
    <p className={`eyebrow${centered ? ' eyebrow-center' : ''}`}>
      <span className="eyebrow-line" aria-hidden="true" />
      <span className="eyebrow-copy">{children}</span>
    </p>
  )
}
