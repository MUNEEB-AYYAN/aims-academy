# AIMS Academy website
React 18 + Vite + Tailwind + Framer Motion + lucide-react.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

## Edit content
Everything (phone, WhatsApp number, founders' photos, batches, text) is in `src/data/content.js`.
Replace the `0000000000` placeholders. Put founder photos in `public/` and set `photo: '/name.jpg'`.

## Motion
Presets live in `src/animations/variants.js`. `MotionConfig reducedMotion="user"` in `main.jsx`
turns off movement for visitors who prefer reduced motion.
