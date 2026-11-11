'use client';

import React from 'react';
import CTAButton from '@/lib/../components/CTAButton';
import { Sparkles } from 'lucide-react';

export default function ContentUnlockBanner() {
  return (
    <div id="unlocked-content" className="w-full pt-10 pb-8 text-center scroll-mt-20">
      {/* Golden Accent Line */}
      <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 mx-auto rounded-full mb-6" />

      {/* Main Unlocked Headline */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Oportunidade de Preparação Desbloqueada</span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight max-w-4xl mx-auto leading-tight px-4">
        AGORA É HORA DE LEVAR A TUA <span className="text-amber-400">PREPARAÇÃO A SÉRIO!</span>
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mt-4 px-4 leading-relaxed">
        Descobre como o <strong className="text-white">AproVE</strong> pode ajudar-te a preparar-te melhor para os desafios do ingresso.
      </p>

      {/* Primary CTA */}
      <div className="mt-4">
        <CTAButton 
          text="QUERO COMEÇAR A MINHA PREPARAÇÃO"
          subtext="Acesso imediato e seguro através da plataforma oficial"
        />
      </div>
    </div>
  );
}
