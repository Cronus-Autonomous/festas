import React, { useState } from 'react';
import Reveal from './Reveal';

const WA_NUMBER = '5511999999999';
const WA_TEXT = encodeURIComponent('Olá! Vim pelo site da CASA VIVA e gostaria de conversar sobre um evento.');

export default function FinalCTA() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', tipo: '', data: '' });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.telefone) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    // simulated lead capture
    await new Promise((r) => setTimeout(r, 1100));
    setStatus('success');
  };

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
        <div className="lg:col-span-6">
          <Reveal><p className="label-eyebrow text-gold mb-6">Vamos conversar</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display fs-display text-ink-inverse" style={{ fontWeight: 350, letterSpacing: '-0.02em', fontSize: 'clamp(2.75rem, 6vw, 5.5rem)' }}>
              Vamos desenhar o seu evento.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md leading-relaxed" style={{ color: 'rgba(244,239,230,0.78)' }}>
              Conte a sua ideia. A gente volta com um lugar, um plano e um caminho para o seu dia acontecer do jeito que você imagina.
            </p>
          </Reveal>
        </div>

        {/* Right form */}
        <div className="lg:col-span-6">
          {status === 'success' ? (
            <div className="flex items-start gap-4 py-8">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--brand-gold)" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 14l6 6 12-13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="font-display text-2xl text-ink-inverse" style={{ fontWeight: 400 }}>Recebemos.</p>
                <p className="mt-2" style={{ color: 'rgba(244,239,230,0.7)' }}>Em breve entramos em contato pelo WhatsApp.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              <Field label="Nome" id="nome">
                <input id="nome" className="input-line" placeholder="Seu nome" value={form.nome} onChange={update('nome')} autoComplete="name" />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <Field label="E-mail" id="email">
                  <input id="email" type="email" className="input-line" placeholder="vo@email.com" value={form.email} onChange={update('email')} autoComplete="email" />
                </Field>
                <Field label="Telefone / WhatsApp" id="telefone">
                  <input id="telefone" className="input-line" placeholder="(11) 99999-9999" value={form.telefone} onChange={update('telefone')} autoComplete="tel" />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <Field label="Tipo de evento" id="tipo">
                  <div className="relative">
                    <select id="tipo" className="input-line appearance-none pr-6 cursor-pointer" value={form.tipo} onChange={update('tipo')}>
                      <option value="" style={{ color: '#171512' }}>Selecione</option>
                      <option style={{ color: '#171512' }}>Casamento</option>
                      <option style={{ color: '#171512' }}>Aniversário</option>
                      <option style={{ color: '#171512' }}>Formatura</option>
                      <option style={{ color: '#171512' }}>Corporativo</option>
                      <option style={{ color: '#171512' }}>Happy hour</option>
                      <option style={{ color: '#171512' }}>Batizado</option>
                      <option style={{ color: '#171512' }}>Outro</option>
                    </select>
                    <svg className="absolute right-0 bottom-3 w-3 h-3 pointer-events-none" style={{ color: 'rgba(244,239,230,0.5)' }} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2 4l4 4 4-4" strokeLinecap="round" /></svg>
                  </div>
                </Field>
                <Field label="Data aproximada" id="data">
                  <input id="data" className="input-line" placeholder="mês / ano" value={form.data} onChange={update('data')} />
                </Field>
              </div>

              {status === 'error' && (
                <p className="text-sm" style={{ color: 'var(--brand-terracotta)' }}>Preencha nome, e-mail e telefone para enviarmos.</p>
              )}

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-spin" aria-hidden="true">
                        <path d="M8 2a6 6 0 100 12" strokeLinecap="round" />
                      </svg>
                      Enviando
                    </>
                  ) : 'Enviar'}
                </button>
                <a href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`} target="_blank" rel="noopener noreferrer" className="btn-wa">
                  <WaIcon />
                  Falar no WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, children }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="label-eyebrow block mb-2" style={{ color: 'rgba(244,239,230,0.55)' }}>{label}</label>
      {children}
    </div>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M9 1.5a7.4 7.4 0 00-6.3 11.3L1.5 16.5l3.8-1.2A7.4 7.4 0 109 1.5zm0 13.4a6 6 0 01-3.1-.85l-.22-.13-2.25.72.74-2.2-.15-.23A6 6 0 119 14.9zm3.3-4.5c-.18-.09-1.06-.52-1.22-.58s-.28-.09-.4.09-.46.58-.56.7-.2.13-.38.04a4.8 4.8 0 01-1.42-.88 5.3 5.3 0 01-1-1.24c-.1-.18 0-.27.08-.36s.18-.2.27-.3.13-.18.2-.3.02-.22-.02-.3-.4-.97-.55-1.33-.15-.35-.27-.3-.2 0-.34 0l-.46.01a.9.9 0 00-.66.3 3.4 3.4 0 00-1.06 2.5 5.9 5.9 0 001.24 3.1 13.5 13.5 0 005.2 4.6c.73.31 1.3.5 1.74.64a3.2 3.2 0 001.47.1c.45-.07 1.38-.56 1.58-1.1s.2-1 .14-1.1-.18-.13-.38-.23z" />
    </svg>
  );
}