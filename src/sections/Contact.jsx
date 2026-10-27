import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import Section, { Reveal } from '../components/Section'
import { site } from '../data/content'
import { buttonMotion } from '../animations/variants'

export default function Contact() {
  return (
    <Section id="contact" title="Contact & Location">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="flex flex-col justify-center gap-5 rounded-2xl bg-forest p-8 text-cream">
          <p className="flex gap-3"><MapPin className="shrink-0 text-gold" />{site.address}</p>
          <div className="flex flex-wrap gap-3">
            <motion.a {...buttonMotion} href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-ink"><Phone size={18} />Call</motion.a>
            <motion.a {...buttonMotion} href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-6 py-3 font-semibold"><MessageCircle size={18} />WhatsApp</motion.a>
          </div>
        </Reveal>
        <Reveal className="overflow-hidden rounded-2xl border-2 border-gold">
          <iframe title="AIMS Academy location on Google Maps" loading="lazy" className="h-72 w-full md:h-full md:min-h-72"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} />
        </Reveal>
      </div>
    </Section>
  )
}
