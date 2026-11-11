'use client';

import React from 'react';
import { ShieldCheck, Check, Sparkles, Smartphone, Award, Lock } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

export default function PricingSection() {
  const features = [
    'Acesso ao AproVE conforme as condições do produto.',
    'Recursos de preparação disponíveis na aplicação.',
    'Ferramentas de estudo disponíveis (exercícios e módulos).',
    'Garantia incondicional de 30 dias.',
  ];

  return (
    <section id="oferta" className="w-full py-20 px-4 sm:px-6 bg-[#080E1C] relative overflow-hidden border-t border-slate-800 scroll-mt-20">
      {/* Subtle gold radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Title */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Acesso Oficial Liberado</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight max-w-3xl mx-auto leading-tight">
          COMEÇA HOJE A TUA PREPARAÇÃO COM O <span className="text-amber-400">APROVE!</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-xl mx-auto">
          Um investimento acessível para organizar a tua rotina e estudar com foco
        </p>

        {/* Central Pricing Card with Gold Border & Ambient Glow */}
        <div className="mt-10 sm:mt-12 max-w-xl mx-auto bg-gradient-to-b from-[#0F1B33] to-[#0A1224] rounded-3xl p-7 sm:p-10 border-2 border-amber-400/80 shadow-2xl relative text-left group">
          {/* Top Banner Flag */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase px-5 py-1.5 rounded-full shadow-lg tracking-wider whitespace-nowrap">
            Acesso à Aplicação de Preparação
          </div>

          {/* Product Header */}
          <div className="text-center pt-2 pb-6 border-b border-slate-800">
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center justify-center gap-2">
              Apro<span className="text-amber-400">VE</span>
            </h3>
            <p className="text-sm text-slate-300 mt-1 font-medium">
              Acesso à aplicação de preparação para ingresso no Ministério do Interior
            </p>
          </div>

          {/* Included Features List */}
          <div className="py-6 space-y-3.5">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              O QUE ESTÁ INCLUÍDO:
            </p>
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-slate-200 font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Price Box */}
          <div className="py-6 px-4 bg-slate-950/70 rounded-2xl border border-amber-400/30 text-center my-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">
              POR APENAS
            </span>
            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-amber-400 tracking-tight font-mono my-1 drop-shadow-md">
              6.500 Kz
            </div>
            <span className="text-xs text-slate-400">
              Pagamento único • Sem mensalidades ocultas
            </span>
          </div>

          {/* Big Golden CTA Button */}
          <div className="pt-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-lg sm:text-xl uppercase tracking-wider shadow-2xl flex items-center justify-center gap-3 transition-all duration-200 border-b-4 border-amber-600 animate-gold-glow cursor-pointer"
            >
              <span>EU QUERO AGORA</span>
            </a>

            <p className="text-xs text-slate-400 text-center mt-3">
              Recebe o teu acesso imediato após confirmação do pagamento
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-slate-800 text-center">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                <span className="text-[11px] font-semibold text-slate-300">Compra Segura</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-5 h-5 text-amber-400 mb-1" />
                <span className="text-[11px] font-semibold text-slate-300">Satisfação Garantida</span>
              </div>
              <div className="flex flex-col items-center">
                <Lock className="w-5 h-5 text-emerald-400 mb-1" />
                <span className="text-[11px] font-semibold text-slate-300">Privacidade Protegida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
