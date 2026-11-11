'use client';

import React from 'react';
import { Shield, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

interface TopNoticeBarProps {
  isUnlocked?: boolean;
}

export default function TopNoticeBar({ isUnlocked = false }: TopNoticeBarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#080E1C]/95 backdrop-blur-md border-b border-slate-800/80">
      {/* Upper informational strip */}
      <div className="w-full bg-gradient-to-r from-slate-900 via-[#0B1528] to-slate-900 py-1.5 px-4 border-b border-amber-500/20 text-center">
        <p className="text-[11px] sm:text-xs text-amber-300 font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Preparação Oficial AproVE • Ministério do Interior • Angola 2026</span>
          <Sparkles className="w-3 h-3 text-amber-400" />
        </p>
      </div>

      {/* Main navigation row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-slate-950 fill-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
              Apro<span className="text-amber-400">VE</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-medium leading-tight">
              Ingresso MININT
            </span>
          </div>
        </a>

        {/* Quick Anchor links (when unlocked or general) */}
        {isUnlocked && (
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#o-que-e" className="hover:text-amber-400 transition-colors whitespace-nowrap">
              O que é
            </a>
            <a href="#para-quem" className="hover:text-amber-400 transition-colors whitespace-nowrap">
              Para quem é
            </a>
            <a href="#beneficios" className="hover:text-amber-400 transition-colors whitespace-nowrap">
              Benefícios
            </a>
            <a href="#oferta" className="hover:text-amber-400 transition-colors whitespace-nowrap">
              Oferta Especial
            </a>
            <a href="#garantia" className="hover:text-amber-400 transition-colors whitespace-nowrap">
              Garantia
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap">
              Dúvidas
            </a>
          </nav>
        )}

        {/* Primary CTA in header */}
        <div className="flex items-center gap-3">
          <a
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('oferta');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
          >
            Aceder à Oferta
          </a>
        </div>
      </div>
    </header>
  );
}
