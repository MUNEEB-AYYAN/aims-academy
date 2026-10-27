import { motion } from 'framer-motion'
import Section from '../components/Section'
import { courses, mediums } from '../data/content'
import { fadeUp, staggerContainer, cardHover, viewOnce } from '../animations/variants'

export default function Courses() {
  return (
    <Section id="courses" title="State Board & CBSE">
      <motion.ul variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewOnce} className="mb-10 flex flex-wrap justify-center gap-3">
        {mediums.map((m) => <motion.li key={m} variants={fadeUp} className="rounded-full border border-gold bg-cream px-5 py-2 text-sm font-medium">{m}</motion.li>)}
      </motion.ul>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewOnce} className="grid gap-6 md:grid-cols-2">
        {courses.map((c) => (
          <motion.article key={c.title} variants={fadeUp} whileHover={cardHover} className="overflow-hidden rounded-2xl border-2 border-gold bg-cream">
            <h3 className="bg-forest py-4 text-center font-display text-2xl font-bold text-cream">{c.title}</h3>
            <ul className="flex flex-wrap justify-center gap-2 p-6">
              {c.points.map((p) => <li key={p} className="rounded-lg bg-gold/25 px-4 py-2 font-medium">{p}</li>)}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
