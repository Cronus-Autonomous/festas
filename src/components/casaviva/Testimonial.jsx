import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    quote:
      'Escolhemos a CASA VIVA pelo espaço. Ficamos porque a equipe entendeu tudo o que a gente queria antes de a gente saber explicar. Nosso casamento foi exatamente como sonhamos.',
    name: 'Marina & Rafael',
    role: 'Casamento · outubro de 2024',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/94109b5d4_generated_c078e243.jpg',
  },
  {
    quote:
      'Foi o aniversário mais elogiado que já fiz. O jardim ao pôr do sol virou a foto que todo mundo quer. Sem stress, sem correria — só celebração.',
    name: 'Helena Brandão',
    role: 'Aniversário · maio de 2024',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/94109b5d4_generated_c078e243.jpg',
  },
  {
    quote:
      'O evento corporativo de fim de ano da nossa empresa precisava de um tom acolhedor e ao mesmo tempo sofisticado. A integração entre o salão e a piscina foi perfeita.',
    name: 'Carlos & Aretuza',
    role: 'Evento Corporativo · dezembro de 2024',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/94109b5d4_generated_c078e243.jpg',
  },
  {
    quote:
      'Comemorar meus 50 anos na CASA VIVA foi inesquecível. A gastronomia, a iluminação do lounge e a atenção dos monitores com as crianças fizeram toda a diferença.',
    name: 'Roberto Silveira',
    role: 'Aniversário · janeiro de 2026',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/94109b5d4_generated_c078e243.jpg',
  },
  {
    quote:
      'Fazer a cerimônia de renovação de votos no jardim foi mágica pura. O fluxo natural do espaço permitiu que a festa transicionasse suavemente do fim de tarde para a noite.',
    name: 'Patricia & Lucas',
    role: 'Renovação de Votos · março de 2026',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/94109b5d4_generated_c078e243.jpg',
  },
  {
    quote:
      'A formatura da nossa turma precisava de um ambiente versátil que combinasse jantar formal e um lounge animado depois. A equipe entregou muito além da expectativa.',
    name: 'Beatriz Lima',
    role: 'Formatura Medicina · novembro de 2024',
    img: 'https://media.base44.com/images/public/6abc65146a3590419d888666/94109b5d4_generated_c078e243.jpg',
  },
];

export default function Testimonial() {
  const [page, setPage] = useState(0);

  // Divide os 6 depoimentos em páginas de 2 itens
  const ITEMS_PER_PAGE = 2;
  const totalPages = Math.ceil(TESTIMONIALS.length / ITEMS_PER_PAGE);
  const currentTestimonials = TESTIMONIALS.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-forest text-ink-inverse py-24 lg:py-36 section-anchor" id="depoimento">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal><p className="label-eyebrow text-gold mb-12">Quem celebrou</p></Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
          >
            {currentTestimonials.map((t, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 mask-circle overflow-hidden">
                  <Image src={t.img} alt={t.name} fittingType="fill" className="w-full h-full" />
                </div>
                <blockquote className="flex-1">
                  <p className="font-display italic text-ink-inverse text-xl lg:text-2xl leading-snug" style={{ fontWeight: 300 }}>
                    “{t.quote}”
                  </p>
                  <footer className="mt-6">
                    <p className="label-eyebrow text-gold">{t.name}</p>
                    <p className="mt-1 text-sm" style={{ color: 'rgba(244,239,230,0.6)' }}>{t.role}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Indicadores de Paginação */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Página de depoimentos ${i + 1}`}
              className="p-2"
            >
              <span
                className="block h-px transition-all duration-300"
                style={{
                  width: i === page ? '2.5rem' : '1.5rem',
                  background: i === page ? 'var(--brand-gold)' : 'var(--line-inverse)',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}