import React from 'react';
import Reveal from './Reveal';

const STEPS = [
  { n: '01', title: 'Visita ao espaço', desc: 'Você conhece a casa, sente o fluxo e tira todas as dúvidas.' },
  { n: '02', title: 'Proposta personalizada', desc: 'Montamos um plano sob medida para o seu evento e orçamento.' },
  { n: '03', title: 'Personalização', desc: 'Nossa equipe desenha layout, som, luz e detalhes com você.' },
  { n: '04', title: 'O grande dia', desc: 'Você chega e celebra. O resto fica por nossa conta.' },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24 lg:py-36 section-anchor" id="como-funciona">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <Reveal><p className="label-eyebrow text-terracotta mb-4">Como funciona a locação</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display fs-h1 text-ink" style={{ fontWeight: 350, letterSpacing: '-0.01em' }}>
              Do primeiro olhar ao último brinde.
            </h2>
          </Reveal>
        </div>

        {/* Wavy SVG line connecting steps */}
        <div className="relative">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1200 360"
            preserveAspectRatio="none"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M40 280 C 200 80, 360 80, 500 200 S 760 320, 900 140 S 1080 60, 1160 200" strokeLinecap="round" />
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="lg:text-center">
                <div className={`lg:flex lg:flex-col lg:items-center ${i % 2 === 0 ? '' : 'lg:mt-32'}`}>
                  <span className="font-display italic text-5xl lg:text-6xl text-terracotta block mb-4" style={{ fontWeight: 300 }}>
                    {s.n}
                  </span>
                  <h3 className="font-display fs-h3 text-ink mb-2" style={{ fontWeight: 450 }}>{s.title}</h3>
                  <p className="text-ink-soft leading-relaxed lg:max-w-[16rem]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}