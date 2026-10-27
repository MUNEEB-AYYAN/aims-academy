import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { site } from '../data/content'
import { buttonMotion } from '../animations/variants'

const opts = {
  standard: ['1st–7th', '8th', '9th', '10th'],
  board: ['State Board', 'CBSE'],
  medium: ['English', 'Semi-English', 'Urdu'],
  batch: ['Morning', 'Afternoon', 'Evening', 'Girls’ Batch'],
}
const init = { student: '', parent: '', phone: '', standard: '', board: '', medium: '', batch: '', message: '' }
const cls = 'w-full rounded-lg border border-forest/30 bg-white px-4 py-3 focus:border-gold'

export default function Enquiry() {
  const [f, setF] = useState(init)
  const [err, setErr] = useState({})
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    const x = {}
    if (f.student.trim().length < 2) x.student = 'Enter the student’s name'
    if (f.parent.trim().length < 2) x.parent = 'Enter the parent’s name'
    if (!/^[6-9]\d{9}$/.test(f.phone)) x.phone = 'Enter a 10-digit mobile number'
    ;['standard', 'board', 'medium', 'batch'].forEach((k) => { if (!f[k]) x[k] = 'Please choose one' })
    setErr(x)
    if (Object.keys(x).length) return
    const text = `Admission enquiry – AIMS Academy (2027–28)\nStudent: ${f.student}\nParent: ${f.parent}\nPhone: ${f.phone}\nStandard: ${f.standard}\nBoard: ${f.board}\nMedium: ${f.medium}\nBatch: ${f.batch}\nMessage: ${f.message}`
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }
  // Rendered as a plain function (not a component) so inputs keep focus while typing
  const field = ({ k, label, type = 'text', select, area }) => (
    <div key={k} className={area ? 'md:col-span-2' : ''}>
      <label htmlFor={k} className="mb-1 block text-sm font-medium">{label}</label>
      {select ? (
        <select id={k} value={f[k]} onChange={set(k)} className={cls} aria-invalid={!!err[k]}>
          <option value="">Select</option>{opts[k].map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : area ? (
        <textarea id={k} rows="3" value={f[k]} onChange={set(k)} className={cls} />
      ) : (
        <input id={k} type={type} value={f[k]} onChange={set(k)} className={cls} aria-invalid={!!err[k]} />
      )}
      {err[k] && <p role="alert" className="mt-1 text-sm text-red-700">{err[k]}</p>}
    </div>
  )
  return (
    <Section id="enroll" title="Admission Enquiry">
      <form onSubmit={submit} noValidate className="mx-auto grid max-w-3xl gap-4 rounded-2xl border-2 border-gold bg-cream p-6 md:grid-cols-2">
        {field({ k: 'student', label: 'Student name' })}
        {field({ k: 'parent', label: 'Parent name' })}
        {field({ k: 'phone', label: 'Phone number', type: 'tel' })}
        {field({ k: 'standard', label: 'Standard', select: true })}
        {field({ k: 'board', label: 'Board', select: true })}
        {field({ k: 'medium', label: 'Medium', select: true })}
        {field({ k: 'batch', label: 'Preferred batch', select: true })}
        {field({ k: 'message', label: 'Message (optional)', area: true })}
        <motion.button {...buttonMotion} type="submit" className="rounded-full bg-forest py-3 font-semibold text-cream md:col-span-2">Send enquiry on WhatsApp</motion.button>
      </form>
    </Section>
  )
}
