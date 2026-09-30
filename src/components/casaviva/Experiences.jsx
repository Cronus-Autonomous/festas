import React from 'react';
import Reveal from './Reveal';

const EXP = [
  { n: '01', title: 'Casamento', desc: 'Cerimônia ao ar livre e recepção que estende a noite sem pressa.' },
  { n: '02', title: 'Aniversário', desc: 'Mesa longa, luz baixa e gente que importa por perto.' },
  { n: '03', title: 'Formatura', desc: 'Espaço para turma inteira, pista e cantinho de respiro.' },
  { n: '04', title: 'Corporativo', desc: 'Happy hour, lançamento ou confraternização com tom de casa.' },
  { n: '05', title: 'Happy hour', desc: 'Lounge aberto ao fim de tarde, drinques e conversa solta.' },
  { n: '06', title: 'Batizado', desc: 'Encontro íntimo de família, do salão ao jardim.' },
];

export default function Experiences() {
  return (
    <section className="bg-sand py-24 lg:py-36 section-anchor" id="experiencias">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left editorial */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <Reveal><p className="label-eyebrow text-terracotta mb-4">Experiências</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display fs-h1 text-ink" style={{ fontWeight: 350, letterSpacing: '-0.01em' }}>
              Cada evento pede uma atmosfera diferente.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink-soft leading-relaxed max-w-md">
              Não existe pacote pronto. Existe um lugar que se ajusta ao tom da sua celebração — do casamento mais cuidado ao happy hour mais leve. A casa vira o que o seu evento precisa ser.
            </p>
          </Reveal>
        </div>

        {/* Right list with vertical line */}
        <div className="lg:col-span-7 relative">
          <div className="absolute left-0 top-2 bottom-2 w-px hidden lg:block" style={{ background: 'var(--line)' }} aria-hidden="true" />
          <ul className="lg:pl-10">
            {EXP.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <li className="group flex items-baseline gap-6 lg:gap-10 py-6 border-b border-line">
                  <span className="font-display italic text-2xl lg:text-3xl text-ink-soft group-hover:text-terracotta transition-colors min-w-[3rem]" style={{ fontWeight: 300 }}>
                    {e.n}
                  </span>
                  <div className="flex-1 flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 lg:gap-8">
                    <h3 className="font-display fs-h3 text-ink" style={{ fontWeight: 450 }}>{e.title}</h3>
                    <p className="text-ink-soft text-sm lg:text-base lg:text-right max-w-xs leading-relaxed">{e.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}