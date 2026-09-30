import React, { useRef, useEffect } from 'react';
import Reveal from './Reveal';

// URL do Cloudinary com transformações de performance (formato automático, qualidade otimizada)
const MANIFESTO_VIDEO = 'https://res.cloudinary.com/xiupvhfs/video/upload/f_auto,q_auto/v1790736894/d3bcbef07490fa5736ebab11def7ef91.mp4';

export default function Manifesto() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Detecta se é mobile (largura de tela menor que 1024px)
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Trata eventual bloqueio de autoplay pelo navegador
      });
    }
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024 && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024 && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative bg-wine text-ink-inverse py-24 lg:py-36 overflow-hidden section-anchor" id="sobre">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Texto col 1-7 */}
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <p className="label-eyebrow text-gold mb-8">A casa</p>
          </Reveal>
          <div className="max-w-[60ch]">
            <Reveal delay={0.05}>
              <p className="font-display text-ink-inverse fs-h2" style={{ fontWeight: 350, lineHeight: 1.2 }}>
                A CASA VIVA nasceu de uma ideia simples: celebrar bem é celebrar em um lugar que respira.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed" style={{ color: 'rgba(244,239,230,0.78)' }}>
                Salão, jardim, piscina e lounge conversam entre si — como uma casa de família que abre as portas para os melhores dias. Cada canto foi pensado para que a celebração aconteça sem pressa, sem barulho, sem improvisos.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Card do Vídeo col 8-12 */}
        <div className="col-span-12 lg:col-span-5 relative mt-10 lg:mt-0">
          <Reveal delay={0.2}>
            <div
              className="relative w-full max-w-[420px] max-h-[600px] w-full ml-auto overflow-hidden rounded-lg aspect-radio"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <video
                ref={videoRef}
                src={MANIFESTO_VIDEO}
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Círculo + linha dourada decorativa */}
            <div className="absolute -left-4 lg:-left-10 bottom-12 flex items-center gap-3 pointer-events-none" aria-hidden="true">
              <span className="block w-3 h-3 rounded-full" style={{ background: 'var(--brand-gold)' }} />
              <span className="block w-16 h-px" style={{ background: 'var(--brand-gold)', opacity: 0.5 }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}