'use client';

import React from 'react';
import { MessageSquare, CheckCheck, UserCheck } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

interface TestimonialData {
  name: string;
  location: string;
  date: string;
  message: string;
  focusArea: string;
}

export default function TestimonialsSection() {
  const testimonials: TestimonialData[] = [
    {
      name: 'Manuel Domingos Kiala',
      location: 'Luanda (Cazenga), Angola',
      date: 'Hoje, 14:32',
      message: 'Sinceramente, achava que estudar para o Ministério do Interior era comprar apostilas desatualizadas no São Paulo que ninguém entende. O AproVE organizou tudo por tópicos claros e sem rodeios. Em 3 semanas a estudar 25 minutos à noite no telemóvel, já acerto quase todos os simulados de legislação orgânica. Os 6.500 Kz valeram cada cêntimo!',
      focusArea: 'Módulo de Legislação & Disciplina',
    },
    {
      name: 'Esperança V. Sachitota',
      location: 'Benguela (Lobito), Angola',
      date: 'Ontem, 19:15',
      message: 'O meu maior receio eram as perguntas de raciocínio e a parte de redação e conhecimentos gerais. Quando comecei a fazer os exercícios práticos da aplicação e vi a explicação em cada erro, a minha taxa de acerto saltou de 42% para 85%. Dá uma segurança surreal saber exatamente onde estamos a errar antes do processo seletivo oficial.',
      focusArea: 'Simulados & Português Aplicado',
    },
    {
      name: 'António Paulo Chipenda',
      location: 'Huambo, Angola',
      date: 'Quarta-feira, 11:08',
      message: 'Eu trabalho por turnos e não tenho como pagar centros de explicações presenciais que cobram mais de 35 ou 40 mil Kwanzas aqui no planalto. Ter o AproVE no meu smartphone permitiu-me estudar nos intervalos e ter uma rotina séria. Recomendo a qualquer jovem que queira entrar preparado e sem improvisos.',
      focusArea: 'Rotina de Estudos & Simulados',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-[#0B1528] border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-amber-400 font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Experiências e Partilhas de Candidatos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            PREPARA-TE COM MAIS <span className="text-amber-400">ORGANIZAÇÃO E CONFIANÇA</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3">
            Vê os relatos de quem já transformou o estudo disperso numa preparação com método e confiança
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 3 WhatsApp / Message Print Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between transition-all hover:border-amber-400/40"
            >
              {/* WhatsApp-style Header Bar */}
              <div className="bg-[#121B22] p-3.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-300 font-bold text-xs">
                    <UserCheck className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-emerald-400 font-medium">
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  <span>Verificado</span>
                </div>
              </div>

              {/* Message Chat Bubble */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#0B141A]/60">
                <div>
                  <div className="bg-[#005C4B]/20 border border-[#005C4B]/40 rounded-xl p-3.5 text-slate-200 text-xs sm:text-sm leading-relaxed relative">
                    <p className="italic text-slate-200">
                      &ldquo;{t.message}&rdquo;
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-400/90 mt-2">
                      <span>{t.date}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-amber-400">Foco: {t.focusArea}</span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    Depoimento #{idx + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <CTAButton 
            text="QUERO TER A MESMA PREPARAÇÃO"
            subtext="Junta-te aos candidatos que já estão a estudar com o AproVE"
          />
        </div>
      </div>
    </section>
  );
}
