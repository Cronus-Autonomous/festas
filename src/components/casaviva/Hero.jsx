import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const HERO_BG = 'https://res.cloudinary.com/xiupvhfs/image/upload/v1790734772/83afa7ad6fe3191252f413e7703782eb.jpg';

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '20%']);

  return (
    <section id="topo" ref={ref} className="relative min-h-[80vh] flex items-center pt-28 lg:pt-32 pb-24 lg:pb-40 overflow-hidden bg-ink">
      {/* Background Image com Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        style={{ y }}
      >
        <img
          src={HERO_BG}
          alt="CASA VIVA"
          className="w-full h-full object-cover"
        />
        {/* Overlay para leitura dos textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      </motion.div>

      {/* Linha dourada inferior */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px z-10" style={{ background: 'linear-gradient(90deg, transparent, var(--brand-gold), transparent)' }} aria-hidden="true" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 w-full">
        <div className="max-w-2xl">
          <motion.p
            className="label-eyebrow text-terracotta mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Espaço de festas · Londrina
          </motion.p>
          <motion.h1
            className="font-display fs-display text-white"
            style={{ fontWeight: 350, letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            Onde a sua{' '}
            <span className="italic" style={{ fontWeight: 300 }}>história</span>{' '}
            merece um lugar à altura.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-md text-white/80 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Casamentos, aniversários, formaturas e encontros que merecem mais do que um salão. Merecem um lugar com alma.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="#contato" className="btn-primary">
              Agendar visita
              <ArrowRight />
            </a>
            <a href="#espacos" className="link-editorial text-white/90">
              Ver espaços
              <ArrowRight small />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ small }) {
  return (
    <svg width={small ? 14 : 18} height={small ? 14 : 18} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 9h12M11 4l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}