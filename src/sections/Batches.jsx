import { motion } from 'framer-motion'
import { Sunrise, Clock, Users, MoonStar } from 'lucide-react'
import Section from '../components/Section'
import { batches } from '../data/content'
import { fadeUp, staggerContainer, cardHover, viewOnce } from '../animations/variants'

const icons = { Sunrise, Clock, Users, MoonStar }
const entrance = { // one-time icon entrance: sun rises, moon fades in, others pop softly
  Sunrise: { initial: { y: 14, opacity: 0 }, whileInView: { y: 0, opacity: 1 } },
  MoonStar: { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 } },
  Clock: { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 } },
  Users: { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 } },
}
export default function Batches() {
  return (
    <Section id="batches" title="Batch Timings">
      <motion.ul variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewOnce} className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {batches.map((b) => {
          const Icon = icons[b.icon]
          return (
            <motion.li key={b.name} variants={fadeUp} whileHover={cardHover} className="flex flex-col items-center gap-3 rounded-2xl border-2 border-gold bg-cream p-6 text-center">
              <motion.span {...entrance[b.icon]} viewport={viewOnce} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }} className="text-forest"><Icon size={44} strokeWidth={1.6} /></motion.span>
              <span className="font-semibold">{b.name}</span>
            </motion.li>
          )
        })}
      </motion.ul>
    </Section>
  )
}
