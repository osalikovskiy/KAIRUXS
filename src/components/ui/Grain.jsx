// Fixed, full-viewport film-grain texture. Pure CSS/SVG — no images, no JS
// cost. Sits above the background gradients but below content interaction
// (pointer-events: none) to give the flat pink surfaces some tactile depth.
export default function Grain() {
  return <div className="grain-overlay" aria-hidden="true" />;
}
