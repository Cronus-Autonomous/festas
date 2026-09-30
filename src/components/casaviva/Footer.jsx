import React from 'react';
import { ArchMark } from './Header';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="bg-cream pt-20 pb-10 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <ArchMark className="w-10 h-10 text-terracotta" />
              <span className="font-display text-2xl text-ink" style={{ fontWeight: 500 }}>casa viva</span>
            </div>
            <Reveal>
              <p className="font-display text-ink-soft leading-tight" style={{ fontWeight: 350, fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                Um lugar para celebrar.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <nav className="flex flex-col gap-3" aria-label="Rodapé">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link-editorial text-ink-soft">Instagram</a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="link-editorial text-ink-soft">WhatsApp</a>
              <a href="#contato" className="link-editorial text-ink-soft">Mapa</a>
              <a href="#" className="link-editorial text-ink-soft">Política de privacidade</a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-ink-soft">
          <p>© 2026 CASA VIVA — Londrina, Brasil</p>
          <p className="sm:text-right">Visitas sob agendamento · sábados, 10h às 18h</p>
        </div>
      </div>

      {/* small decorative arch */}
      <svg className="absolute right-6 bottom-6 w-16 h-16 opacity-30 pointer-events-none" viewBox="0 0 64 64" fill="none" stroke="var(--brand-terracotta)" strokeWidth="1.2" aria-hidden="true">
        <path d="M8 64V28a24 24 0 0148 0v36" />
      </svg>
    </footer>
  );
}