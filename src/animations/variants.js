// Shared motion presets (~40% intensity: short distances, 0.4–0.7s, easeOut)
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
export const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
export const cardHover = { y: -5, boxShadow: '0 12px 28px rgba(227,168,24,0.28)', transition: { duration: 0.25, ease: 'easeOut' } }
export const buttonMotion = { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } }
export const ribbonReveal = {
  hidden: { clipPath: 'inset(0 50% 0 50%)' },
  show: { clipPath: 'inset(0 0% 0 0%)', transition: { duration: 0.7, ease: 'easeOut' } },
}
export const viewOnce = { once: true, amount: 0.2 }
