import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Section from '../components/Section'
import { founders } from '../data/content'
import { fadeUp, staggerContainer, cardHover, viewOnce } from '../animations/variants'

export default function Founders() {
  return (
    <Section id="founders" title="Our Founders">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewOnce} className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
        {founders.map((f) => (
          <motion.article key={f.name} variants={fadeUp} whileHover={cardHover} className="flex flex-col items-center rounded-2xl border-2 border-gold bg-cream p-6 text-center">
            {f.photo
              ? <img src={f.photo} alt={f.name} loading="lazy" className="h-32 w-32 rounded-full border-4 border-gold object-cover" />
              : <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-gold bg-forest text-cream" role="img" aria-label={`${f.name} photo placeholder`}><User size={56} /></div>}
            <p className="mt-4 rounded-full bg-gold px-4 py-1 text-xs font-bold">{f.role}</p>
            <h3 className="mt-3 font-display text-xl font-bold">{f.name}</h3>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
