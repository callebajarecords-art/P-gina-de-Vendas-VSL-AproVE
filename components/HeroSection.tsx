'use client';

import React from 'react';
import VSLPlayer from '@/components/VSLPlayer';
import { Shield, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

export default function HeroSection({ onUnlock, isUnlocked }: HeroSectionProps) {
  return (
    <section className="relative w-full pt-8 pb-14 sm:pt-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#0A1128] via-[#070D18] to-[#070D18] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Subtle Institutional Pre-headline Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg mb-5">
          <Shield className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
          <span>Preparação Estruturada para Candidatos</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.15] max-w-4xl">
          QUERES PREPARAR-TE MELHOR PARA INGRESSAR NO{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            MINISTÉRIO DO INTERIOR
          </span>
          ?
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
          Conhece o <strong className="text-white font-bold">AproVE</strong>, a aplicação que te ajuda a organizar os estudos, testar os teus conhecimentos e preparar-te com mais confiança para os desafios do processo de ingresso.
        </p>

        {/* VSL Video Container */}
        <div className="w-full mt-7 sm:mt-9">
          <VSLPlayer onUnlock={onUnlock} isUnlocked={isUnlocked} />
        </div>
      </div>
    </section>
  );
}
