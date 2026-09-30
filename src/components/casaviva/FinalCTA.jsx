import React from 'react';
import Reveal from './Reveal';

const WA_NUMBER = '5511999999999';
const WA_TEXT = encodeURIComponent('Olá! Vim pelo site da CASA VIVA e gostaria de conversar sobre um evento.');

export default function FinalCTA() {
  return (
    <section className="relative bg-wine text-ink-inverse py-24 lg:py-36 overflow-hidden section-anchor" id="contato">
      {/* hollow arch cutting section vertically */}
      <svg
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[680px] h-[680px] hidden lg:block"
        viewBox="0 0 400 400"
        fill="none"
        stroke="var(--line-inverse)"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M40 400V160a160 160 0 01320 0v240" />
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left text */}
        <div className="lg:col-span-7">
          <Reveal><p className="label-eyebrow text-gold mb-6">Vamos conversar</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display fs-display text-ink-inverse" style={{ fontWeight: 350, letterSpacing: '-0.02em', fontSize: 'clamp(2.75rem, 6vw, 5.5rem)' }}>
              Vamos desenhar o seu evento.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg leading-relaxed text-lg" style={{ color: 'rgba(244,239,230,0.78)' }}>
              Conte a sua ideia. A gente volta com um lugar, um plano e um caminho para o seu dia acontecer do jeito que você imagina.
            </p>
          </Reveal>
        </div>

        {/* Right CTA Button */}
        <div className="lg:col-span-5 flex lg:justify-end">
          <Reveal delay={0.15}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-5 rounded-full text-white font-medium bg-[#25D366] hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-xl"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.403 5.638A8.955 8.955 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.125 1.2 4.484L3 21l4.704-1.233a8.941 8.941 0 0 0 4.348 1.127h.004c4.947 0 8.976-4.027 8.978-8.977 0-2.398-.934-4.653-2.631-6.279zM12.053 19.42h-.003a7.458 7.458 0 0 1-3.799-1.042l-.272-.162-2.824.74.753-2.753-.177-.282a7.455 7.455 0 0 1-1.144-3.966c.002-4.118 3.352-7.468 7.47-7.468 1.994.001 3.869.778 5.277 2.188 1.408 1.41 2.184 3.285 2.183 5.281-.002 4.119-3.352 7.47-7.464 7.472zm4.097-5.593c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.113-.15.224-.58.73-.711.879-.131.15-.262.169-.487.056-.225-.113-.949-.35-1.808-1.115-.668-.595-1.12-1.33-1.251-1.555-.131-.225-.014-.347.098-.459.101-.101.225-.262.338-.393.113-.131.15-.225.225-.375.075-.15.038-.281-.019-.393-.056-.113-.504-1.217-.691-1.667-.182-.438-.367-.378-.504-.385-.13-.007-.28-.007-.431-.007-.15 0-.394.056-.6.281-.206.225-.787.769-.787 1.875 0 1.106.806 2.174.918 2.324.113.15 1.586 2.421 3.843 3.396.537.232.956.37 1.282.474.539.171 1.03.147 1.417.089.432-.064 1.327-.543 1.514-1.068.187-.525.187-.974.131-1.068-.056-.094-.206-.15-.431-.263z"
                  fill="#FFFFFF"
                />
              </svg>
              <span className="text-lg">Conversar no WhatsApp</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}