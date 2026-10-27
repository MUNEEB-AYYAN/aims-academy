import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav } from '../data/content'
import { buttonMotion } from '../animations/variants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/80 py-1 shadow-md backdrop-blur-md' : 'bg-transparent py-3'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-black text-forest">
          <Logo size={scrolled ? 40 : 48} /> AIMS
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {nav.map(([l, h]) => (
            <li key={h}><a href={h} className="text-sm font-medium hover:text-gold">{l}</a></li>
          ))}
          <li><motion.a {...buttonMotion} href="#enroll" className="inline-block rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink">Enroll Now</motion.a></li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <motion.ul initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mx-4 mt-2 space-y-1 rounded-2xl bg-cream p-4 shadow-lg md:hidden">
          {nav.map(([l, h]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2 font-medium">{l}</a></li>
          ))}
          <li><a href="#enroll" onClick={() => setOpen(false)} className="block rounded-full bg-gold py-2 text-center font-semibold">Enroll Now</a></li>
        </motion.ul>
      )}
    </header>
  )
}
