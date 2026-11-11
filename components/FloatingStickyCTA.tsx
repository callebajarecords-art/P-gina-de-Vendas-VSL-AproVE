'use client';

import React, { useEffect, useState } from 'react';
import { CHECKOUT_URL } from '@/lib/constants';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FloatingStickyCTAProps {
  isUnlocked: boolean;
}

export default function FloatingStickyCTA({ isUnlocked }: FloatingStickyCTAProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 650px
      setIsScrolled(window.scrollY > 650);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isUnlocked || !isScrolled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 bg-[#080E1C]/95 backdrop-blur-md border-t border-amber-500/30 shadow-2xl transition-all duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 px-2">
        <div className="hidden sm:flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white leading-tight">
              Apro<span className="text-amber-400">VE</span> • Preparação MININT
            </span>
            <span className="text-[10px] text-slate-400">
              Garantia de 30 dias • Pagamento seguro
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between w-full sm:w-auto gap-3">
          <div className="sm:hidden text-left">
            <span className="text-[10px] uppercase text-slate-400 font-bold block">Adesão Oficial</span>
            <span className="text-sm font-black text-amber-400 font-mono">6.500 Kz</span>
          </div>

          <a
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('oferta');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="flex-1 sm:flex-initial py-2.5 px-5 sm:px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Ver Oferta (6.500 Kz)</span>
            <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
