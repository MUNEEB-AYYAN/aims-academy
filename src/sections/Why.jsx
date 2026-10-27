import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Section from '../components/Section'
import { reasons, site } from '../data/content'
import { fadeUp, staggerContainer, viewOnce } from '../animations/variants'

function Counter({ to }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n}+</span>
}
export default function Why() {
  return (
    <Section id="about" title="Why Choose AIMS" dark>
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="text-center">
          <p className="font-display text-8xl font-black text-gold"><Counter to={site.years} /></p>
          <p className="text-lg">years of teaching experience</p>
        </div>
        <motion.ul variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewOnce} className="space-y-4">
          {reasons.map((r) => (
            <motion.li key={r} variants={fadeUp} className="flex items-start gap-3 text-lg"><CheckCircle2 className="mt-1 shrink-0 text-gold" />{r}</motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
