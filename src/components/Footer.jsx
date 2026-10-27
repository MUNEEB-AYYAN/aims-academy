import Logo from './Logo'
import { site, nav } from '../data/content'
export default function Footer() {
  return (
    <footer className="bg-forest px-4 py-10 text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="flex items-center gap-3"><Logo size={64} /><div><p className="font-display text-xl font-black">AIMS Academy</p><p className="text-sm opacity-80">{site.owner} {site.tagline}</p></div></div>
        <ul className="grid grid-cols-2 gap-2 text-sm">{nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}</ul>
        <address className="text-sm not-italic opacity-90">{site.address}</address>
      </div>
      <p className="mt-8 text-center text-xs opacity-70">© {new Date().getFullYear()} AIMS Academy, Nanded. All rights reserved.</p>
    </footer>
  )
}
