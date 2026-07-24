import { useRef } from "react";
import { useMagnetic } from "../../lib/useMagnetic";

// Thin wrapper around a <button> that adds the magnetic-hover pull. Kept
// separate from raw <button className="btn-primary"> usage so call sites
// stay declarative — swap the tag, keep the same className/children API.
export default function MagneticButton({ className, children, strength, ...props }) {
  const ref = useRef(null);
  useMagnetic(ref, strength ? { strength } : undefined);

  return (
    <button ref={ref} className={className} {...props}>
      {children}
    </button>
  );
}
