import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/casaviva/Reveal';

const ENV = [
  {
    title: 'Salão principal',
    desc: 'Para 200 convidados, pé-direito alto e luz natural que percorre o dia todo.',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/f25456810_generated_55fd3c73.jpg',
    tag: '200 convidados'
  },
  {
    title: 'Jardim & Piscina',
    desc: 'Área externa integrada, ideal para cerimônias ao ar livre.',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/fc6cb43f3_generated_94c9ca55.jpg',
    tag: 'Área Externa'
  },
  {
    title: 'Lounge & Bar',
    desc: 'Para recepções intimistas e after com pegada mais quente.',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/3ad87640b_generated_ad5ffb20.jpg',
    tag: 'Intimista'
  },
];

export default function Environments() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % ENV.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + ENV.length) % ENV.length);

  return (
    <section className="relative bg-cream py-24 lg:py-36 section-anchor overflow-hidden" id="espacos">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <Reveal><p className="label-eyebrow text-terracotta mb-4">Os ambientes</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display fs-h1 text-ink" style={{ fontWeight: 350, letterSpacing: '-0.01em' }}>
                Uma casa com vários lugares para celebrar.
              </h2>
            </Reveal>
          </div>

          <div className="flex items-end justify-between lg:justify-end gap-8 w-full lg:w-auto">
            <Reveal delay={0.1}>
              <p className="max-w-xs text-ink-soft leading-relaxed hidden sm:block">
                Cada ambiente tem papel próprio — e todos se conectam organicamente.
              </p>
            </Reveal>

            {/* Controles do Carrossel */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors"
                aria-label="Anterior"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors"
                aria-label="Próximo"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Lenticular / Accordion Carousel */}
        <div className="flex flex-col lg:flex-row gap-4 h-[550px] w-full">
          {ENV.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={item.title}
                onClick={() => setActiveIndex(idx)}
                className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
                  isActive ? 'lg:flex-[3] flex-[2]' : 'lg:flex-[1] flex-[0.6] grayscale hover:grayscale-0'
                }`}
              >
                {/* Imagem de Fundo do Card */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradiente Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' : 'bg-black/40 hover:bg-black/20'
                }`} />

                {/* Efeito Lenticular */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-15"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 4px)'
                  }}
                />

                {/* Badge/Tag no Topo */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1 rounded-full text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {item.tag}
                  </span>
                </div>

                {/* Informações do Item Ativo */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 z-10 text-white">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-display text-2xl lg:text-3xl" style={{ fontWeight: 400 }}>
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-md text-white/80 text-sm lg:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-display text-lg lg:text-xl text-white/90 truncate"
                      >
                        {item.title}
                      </motion.h3>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicadores de Paginação */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {ENV.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-terracotta' : 'w-2 bg-ink/20'
              }`}
              aria-label={`Ir para item ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15 9H3M7 14l-5-5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9h12M11 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}