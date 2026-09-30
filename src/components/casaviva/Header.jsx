import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { label: 'Espaços', href: '#espacos' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-wine focus:text-ink-inverse focus:px-4 focus:py-2 focus:rounded-md"
      >
        Pular para conteúdo
      </a>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(244,239,230,0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#topo" className="flex items-center gap-2.5 group" aria-label="CASA VIVA">
            <img src="https://res.cloudinary.com/xiupvhfs/image/upload/v1790775733/2026-09-30_10-40-removebg-preview.png" alt="" className="w-12 h-12"/>
            <span className={`font-display text-xl tracking-tight ${scrolled ? "text-ink" : "text-ink-inverse"}`} style={{ fontWeight: 500 }}>
              casa viva
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Principal">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm font-medium ${scrolled ? "text-ink" : "text-ink-inverse"} hover:text-rose transition-colors relative py-1`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contato" className="btn-primary hidden sm:inline-flex text-sm" style={{ padding: '11px 22px' }}>
              Agendar visita
            </a>
            <button
              className="lg:hidden p-2 -mr-2 text-ink"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M3 7h20M3 13h20M3 19h20" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-cream lg:hidden flex flex-col"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between h-20 px-6">
              <span className="font-display text-xl text-ink" style={{ fontWeight: 500 }}>casa viva</span>
              <button className="p-2 -mr-2 text-ink" aria-label="Fechar menu" onClick={() => setOpen(false)}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M5 5l16 16M21 5L5 21" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-6 mt-6 gap-1" aria-label="Mobile">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ink py-3 border-b border-line"
                  style={{ fontWeight: 400 }}
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="px-6 mt-auto mb-10">
              <a href="#contato" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">Agendar visita</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ArchMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 26V12a10 10 0 0120 0v14" strokeLinecap="round" />
      <path d="M9 26V13a5 5 0 0110 0v13" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}