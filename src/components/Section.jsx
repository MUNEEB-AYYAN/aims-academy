import { motion } from 'framer-motion'
import { fadeUp, ribbonReveal, viewOnce } from '../animations/variants'

export function Ribbon({ children, className = '' }) {
  return (
    <motion.div variants={ribbonReveal} initial="hidden" whileInView="show" viewport={viewOnce}
      className={`inline-block bg-gradient-to-r from-gold/70 via-gold to-gold/70 px-8 py-2 [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)] ${className}`}>
      <span className="font-display text-xl font-bold text-ink sm:text-2xl">{children}</span>
    </motion.div>
  )
}
export function Reveal({ children, className = '' }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewOnce} className={className}>{children}</motion.div>
}
export default function Section({ id, title, children, dark = false }) {
  return (
    <section id={id} className={`px-4 py-16 sm:py-20 ${dark ? 'bg-forest text-cream' : ''}`}>
      <div className="mx-auto max-w-6xl">
        {title && <div className="mb-10 text-center"><Ribbon>{title}</Ribbon></div>}
        {children}
      </div>
    </section>
  )
}
