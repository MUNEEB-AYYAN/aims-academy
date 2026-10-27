import { useId } from 'react'
export default function Logo({ size = 64, className = '' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label="AIMS Academy logo" className={className}>
      <defs>
        <path id={`t${id}`} d="M30 100a70 70 0 0 1 140 0" />
        <path id={`b${id}`} d="M18 100a82 82 0 0 0 164 0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="#0B4A2E" />
      <circle cx="100" cy="100" r="89" fill="none" stroke="#E3A818" strokeWidth="2" />
      <circle cx="100" cy="100" r="58" fill="#FAF8F2" />
      <g fill="#FAF8F2" fontSize="14" fontWeight="700" letterSpacing="2" fontFamily="Poppins, sans-serif">
        <text><textPath href={`#t${id}`} startOffset="50%" textAnchor="middle">ALL INDIA MERIT SEEKERS</textPath></text>
        <text fontSize="11"><textPath href={`#b${id}`} startOffset="50%" textAnchor="middle">JAVEED SIR MUDKHEDKAR’S</textPath></text>
      </g>
      <g fill="#E3A818"><rect x="116" y="82" width="8" height="14" /><rect x="127" y="72" width="8" height="24" /><rect x="138" y="62" width="8" height="34" /></g>
      <circle cx="100" cy="68" r="7" fill="#0B4A2E" />
      <path d="M88 96c2-12 22-12 24 0z" fill="#0B4A2E" />
      <text x="100" y="128" textAnchor="middle" fontFamily="Playfair Display, serif" fontWeight="900" fontSize="30" fill="#0B4A2E">AIMS</text>
      <text x="100" y="142" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="8" letterSpacing="3" fill="#0B4A2E">ACADEMY</text>
    </svg>
  )
}
