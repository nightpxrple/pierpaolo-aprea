import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles, Brain, Music, Palette, Dumbbell } from "lucide-react";

const nav = [
  { id: "hero", label: "Home" },
  { id: "about", label: "Chi Sono" },
  { id: "contenuti", label: "Argomenti" },
  { id: "galleria", label: "Galleria" },
  { id: "contatti", label: "Contatti" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2 font-bold text-lg">
      <Sparkles className="w-6 h-6" />
      <span>PIERPAOLO APREA</span>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/80 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm hover:opacity-80">
              {item.label}
            </a>
          ))}
          <a href="#contatti" className="px-4 py-2 rounded-2xl shadow-sm border hover:shadow">Collaboriamo</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contatti" className="px-4 py-2 rounded-2xl shadow-sm border text-center" onClick={() => setOpen(false)}>
              Collaboriamo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Crescita, Musica e Movimento
          </h1>
          <p className="mt-4 text-slate-600 text-lg">Esplora psicologia, disciplina, creatività e sport per sviluppare mente e corpo.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contenuti" className="px-5 py-3 rounded-2xl bg-black text-white">Scopri di più</a>
            <a href="#galleria" className="px-5 py-3 rounded-2xl border">Galleria</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border">
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1200&auto=format&fit=crop"
              alt="Crescita, musica e movimento"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contenuti() {
  return (
    <section id="contenuti" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center">
          <Brain className="w-12 h-12 mb-4 text-indigo-500" />
          <h3 className="text-xl font-semibold mb-2">Psicologia</h3>
          <p>Strategie e riflessioni per comprendere la mente e migliorare la disciplina personale.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Music className="w-12 h-12 mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Musica & Pianoforte</h3>
          <p>Scopri la musica come strumento di espressione e crescita creativa.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Dumbbell className="w-12 h-12 mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">Forza Mentale e Corpo</h3>
          <p>Allenamenti e calisthenics per rafforzare mente e fisico insieme.</p>
        </div>
      </div>
    </section>
  );
}

export default function Website() {
  return (
    <div className="font-sans antialiased text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Contenuti />
        {/* Sezioni About, Galleria e Contatti da definire */}
      </main>
      <footer className="border-t py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} PIERPAOLO APREA — Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
