'use client';

import React from 'react';
import { ShieldCheck, Award, Lock, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

interface CTAButtonProps {
  text?: string;
  subtext?: string;
  showTrustBadges?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
  href?: string;
}

export default function CTAButton({
  text = 'EU QUERO AGORA',
  subtext = 'Recebe o teu acesso imediato após confirmação do pagamento',
  showTrustBadges = true,
  className = '',
  variant = 'primary',
  href = '#oferta',
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const isExternal = href.startsWith('http');

  return (
    <div className={`flex flex-col items-center text-center my-6 ${className}`}>
      <a
        href={href}
        onClick={handleClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="group relative inline-flex items-center justify-center gap-3 w-full max-w-md sm:max-w-lg px-8 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wide text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 border-b-4 border-amber-600 animate-gold-glow cursor-pointer"
      >
        <span>{text}</span>
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 transition-transform group-hover:translate-x-1" />
      </a>

      {subtext && (
        <p className="text-xs sm:text-sm text-slate-400 mt-2.5 font-medium">
          {subtext}
        </p>
      )}

      {showTrustBadges && (
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-3 text-[11px] sm:text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Compra Segura</span>
          </div>
          <span className="text-slate-600">·</span>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Satisfação Garantida</span>
          </div>
          <span className="text-slate-600">·</span>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Privacidade Protegida</span>
          </div>
        </div>
      )}
    </div>
  );
}
