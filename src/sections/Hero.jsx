import { motion } from 'framer-motion'
import { GraduationCap, Phone } from 'lucide-react'
import Logo from '../components/Logo'
import { Ribbon } from '../components/Section'
import { site } from '../data/content'
import { fadeUp, staggerContainer, buttonMotion } from '../animations/variants'

export default function Hero() {
  return (
    <section id="home" className="px-4 pb-16 pt-28 sm:pt-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="shrink-0">
          <Logo size={224} className="h-44 w-44 sm:h-56 sm:w-56" />
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="text-center md:text-left">
          <motion.p variants={fadeUp} className="font-display text-xl font-bold sm:text-2xl">{site.owner}</motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-6xl font-black leading-none text-forest sm:text-8xl">AIMS</motion.h1>
          <motion.p variants={fadeUp} className="mt-1 font-display text-2xl tracking-[0.3em] text-forest sm:text-3xl">ACADEMY</motion.p>
          <motion.p variants={fadeUp} className="mt-2 font-medium">{site.tagline}</motion.p>
          <motion.div variants={fadeUp} className="mt-6"><Ribbon>{site.admission}</Ribbon></motion.div>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <motion.a {...buttonMotion} href="#enroll" className="rounded-full bg-forest px-7 py-3 font-semibold text-cream">Enroll Now</motion.a>
            <motion.a {...buttonMotion} href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-full border-2 border-gold bg-cream px-7 py-3 font-semibold"><Phone size={18} /> Call Us</motion.a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold bg-cream px-5 py-2">
            <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><GraduationCap className="text-forest" /></motion.span>
            <span className="font-semibold"><b className="font-display text-2xl">{site.years}+</b> years of teaching experience</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
