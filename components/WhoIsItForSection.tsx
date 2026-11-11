'use client';

import React from 'react';
import CTAButton from '@/components/CTAButton';
import { CheckCircle2, HelpCircle, Check, Sparkles } from 'lucide-react';

export default function WhoIsItForSection() {
  const targetList = [
    'Para quem deseja ingressar no Ministério do Interior.',
    'Para quem quer organizar melhor os seus estudos.',
    'Para quem deseja testar e reforçar os seus conhecimentos.',
    'Para quem procura uma forma prática de se preparar.',
    'Para quem quer estudar ao seu próprio ritmo.',
    'Para quem pretende acompanhar a sua evolução.',
  ];

  const objectionCards = [
    {
      question: 'Queres preparar-te, mas não sabes por onde começar?',
      answer: 'O AproVE pode ajudar-te a organizar a tua preparação.',
    },
    {
      question: 'Queres testar aquilo que já aprendeste?',
      answer: 'Com o AproVE, podes praticar e identificar os assuntos que precisam de mais atenção.',
    },
    {
      question: 'Tens pouco tempo livre durante o dia?',
      answer: 'A aplicação permite-te estudar em pequenos blocos de 15 a 30 minutos, directamente no teu telemóvel.',
    },
    {
      question: 'Sentias-te inseguro sobre o teu real nível de preparação?',
      answer: 'Com simulados estruturados, sabes exactamente em que matérias estás mais forte e onde precisas de rever.',
    },
  ];

  return (
    <section id="para-quem" className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-[#070D18]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            O APROVE <span className="text-amber-400">É PARA TI?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3">
            Vê se te identificas com os perfis de candidatos que mais beneficiam da aplicação
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 2 Columns: Checkmark list on left, Objection Cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Green checkmark list */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0B1528] border border-slate-800 shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-6 text-emerald-400">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                  Este aplicativo foi desenhado para ti se:
                </h3>
              </div>

              <div className="space-y-4">
                {targetList.map((item, index) => (
                  <div key={index} className="flex items-start gap-3.5 group">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-200 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
              <span className="text-amber-400 font-semibold">Nota:</span> Uma preparação disciplinada e antecipada é o primeiro passo para enfrentar qualquer processo seletivo com serenidade.
            </div>
          </div>

          {/* Right Column: Objection Cards with questions and answers */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {objectionCards.map((card, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 transition-all shadow-md group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/20">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                      &ldquo;{card.question}&rdquo;
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {card.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12">
          <CTAButton 
            text="SIM! O APROVE É PARA MIM"
            subtext="Junta-te a quem já está a levar a sua preparação a sério"
          />
        </div>
      </div>
    </section>
  );
}
