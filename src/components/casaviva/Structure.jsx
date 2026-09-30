import React from 'react';
import Reveal from './Reveal';

const ITEMS = [
  { label: 'Cozinha equipada', icon: true },
  { label: 'Som profissional' },
  { label: 'Iluminação cênica', icon: true },
  { label: 'Valet' },
  { label: 'Gerador' },
  { label: 'Segurança', icon: true },
  { label: 'Mobiliário' },
  { label: 'Cobertura permanente', icon: true },
];

function MiniIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" className="text-terracotta" aria-hidden="true">
      <path d="M3 9l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Structure() {
  return (
    <section className="bg-sand py-24 lg:py-36 section-anchor" id="estrutura">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <Reveal><p className="label-eyebrow text-terracotta mb-4">Estrutura</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display fs-h1 text-ink" style={{ fontWeight: 350, letterSpacing: '-0.01em' }}>
                Tudo incluso, sem surpresa.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-ink-soft leading-relaxed">
                A infraestrutura que faz a celebração acontecer sem perrengue. Da cozinha à segurança, está tudo resolvido — você cuida dos convidados, nós cuidamos do resto.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Non-uniform grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-14">
          {ITEMS.map((it, i) => (
            <Reveal key={it.label} delay={(i % 4) * 0.06} className={i % 4 === 1 ? 'md:mt-10' : i % 4 === 3 ? 'md:mt-6' : ''}>
              <div className="flex items-start gap-3">
                {it.icon && <MiniIcon />}
                <span className="font-display text-lg text-ink leading-snug" style={{ fontWeight: 450 }}>{it.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}