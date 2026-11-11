'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FaqItem[] = [
    {
      question: 'O que é o AproVE?',
      answer: 'O AproVE é uma aplicação desenvolvida para ajudar candidatos a organizarem a sua preparação para ingressar no Ministério do Interior.',
    },
    {
      question: 'Para quem é indicado o aplicativo?',
      answer: 'É indicado para pessoas que desejam preparar-se para os desafios dos processos de ingresso no Ministério do Interior.',
    },
    {
      question: 'Quanto custa o AproVE?',
      answer: 'O acesso custa apenas 6.500 Kz.',
    },
    {
      question: 'Como faço para adquirir?',
      answer: 'Clica em qualquer botão "EU QUERO AGORA", conclui o pagamento através do checkout e segue as instruções de acesso.',
    },
    {
      question: 'O pagamento é seguro?',
      answer: 'O pagamento é realizado através da página de checkout disponibilizada para a compra.',
    },
    {
      question: 'Tenho garantia?',
      answer: 'Sim. A compra possui garantia de 30 dias, de acordo com as condições aplicáveis.',
    },
    {
      question: 'O AproVE garante que vou ingressar no Ministério do Interior?',
      answer: 'Não. O AproVE é uma ferramenta de apoio à preparação. A aprovação e o ingresso dependem dos critérios, requisitos e procedimentos oficiais de recrutamento.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-[#0B1528] border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-amber-400 font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Esclarecimentos Importantes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            DÚVIDAS <span className="text-amber-400">FREQUENTES</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Clica em cada pergunta para consultar a respectiva resposta
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-slate-900/90 border border-slate-800 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-amber-400/10 text-amber-400 font-mono text-xs flex items-center justify-center shrink-0 border border-amber-400/20">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 bg-slate-950/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="mt-12">
          <CTAButton 
            text="COMEÇAR A MINHA PREPARAÇÃO AGORA"
            subtext="Junta-te aos candidatos que já estão a estudar com o AproVE"
          />
        </div>
      </div>
    </section>
  );
}
