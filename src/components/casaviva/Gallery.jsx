import React from 'react';
import { Image } from '@/components/ui/image';
import Reveal from './Reveal';

const SHOTS = [
  {
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/a9e89dd96_generated_f28ddd51.jpg',
    caption: 'Marina & Rafael — casamento, outubro de 2024',
  },
  {
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/58a00d349_generated_9b3af956.jpg',
    caption: 'Helena faz 50 — aniversário, maio de 2024',
  },
  {
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/1ad64469b_generated_87775c7a.jpg',
    caption: 'Happy hour de encerramento — corporativo, março de 2026',
  },
  {
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/f25456810_generated_55fd3c73.jpg',
    caption: 'Celebração ao entardecer — novembro de 2024',
  },
  {
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/fc6cb43f3_generated_94c9ca55.jpg',
    caption: 'Cerimônia ao ar livre — janeiro de 2025',
  },
];

// Duplicamos a lista para criar a transição infinita perfeita
const INFINITE_SHOTS = [...SHOTS, ...SHOTS];

export default function Gallery() {
  return (
    <section className="bg-cream py-24 lg:py-36 section-anchor overflow-hidden" id="eventos">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <Reveal><p className="label-eyebrow text-terracotta mb-4">Eventos reais</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display fs-h1 text-ink" style={{ fontWeight: 350, letterSpacing: '-0.01em' }}>
                Dias que já aconteceram aqui.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-ink-soft leading-relaxed">
              Uma amostra de celebrações que viraram memória. O álbum completo tem mais de 300 fotos.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Infinite Gallery Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Máscara de Fade nas bordas laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-cream to-transparent z-10" />

        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {INFINITE_SHOTS.map((s, i) => (
            <figure
              key={i}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] overflow-hidden rounded-2xl bg-black/5"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={s.img}
                  alt={s.caption}
                  fittingType="fill"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay no Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <figcaption className="text-white text-sm font-medium leading-snug">
                    {s.caption}
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Animação CSS inline do Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}