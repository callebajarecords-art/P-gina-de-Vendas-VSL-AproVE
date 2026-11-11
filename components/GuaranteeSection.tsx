'use client';

import React from 'react';
import { ShieldCheck, Award, RefreshCw, CheckCircle2 } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-slate-100 text-slate-900 border-y border-slate-300">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Golden Seal Badge (30 Dias) */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-1.5 shadow-2xl flex items-center justify-center">
              {/* Inner dashed ring */}
              <div className="w-full h-full rounded-full border-2 border-dashed border-amber-950/40 flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100/90 text-slate-950 text-center p-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-900">
                  SATISFAÇÃO
                </span>
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-amber-800 leading-none my-0.5">
                  30
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-amber-950">
                  DIAS
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-amber-800 mt-0.5">
                  DE GARANTIA
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-amber-800 font-bold mt-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Sem Risco</span>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>Compromisso e Confiança</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tight">
              GARANTIA DE 30 DIAS
            </h2>

            <p className="text-base sm:text-lg font-bold text-amber-700 uppercase tracking-wide">
              EXPERIMENTA O APROVE SEM RECEIO!
            </p>

            <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                A tua satisfação é importante.
              </p>
              <p>
                Ao adquirires o AproVE, tens uma garantia de 30 dias, de acordo com as condições de reembolso aplicáveis à compra.
              </p>
              <p>
                Se não estiveres satisfeito, poderás solicitar o reembolso dentro do prazo de garantia, respeitando as condições estabelecidas.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Processo transparente</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Suporte dedicado</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA within Guarantee Section */}
        <div className="mt-8 text-center">
          <CTAButton 
            text="TESTAR O APROVE POR 30 DIAS"
            subtext="Acesso seguro com garantia de 30 dias"
            className="my-2"
          />
        </div>
      </div>
    </section>
  );
}
