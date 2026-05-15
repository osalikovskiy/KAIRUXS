import { useCountUp } from "../../lib/useCountUp";

export default function CountUpValue({ value, className }) {
  const [ref, display] = useCountUp(value);
  return <span ref={ref} className={className}>{display}</span>;
}
