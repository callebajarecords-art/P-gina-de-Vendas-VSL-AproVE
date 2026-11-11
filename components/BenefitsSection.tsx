'use client';

import React from 'react';
import CTAButton from '@/components/CTAButton';
import { 
  FolderCheck, 
  Lightbulb, 
  CheckCircle, 
  Clock, 
  Flame, 
  LineChart 
} from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: FolderCheck,
      title: 'Preparação organizada',
      description: 'Organiza os teus estudos e segue uma estrutura de preparação clara e progressiva.',
    },
    {
      icon: Lightbulb,
      title: 'Aprendizagem prática',
      description: 'Estuda através de conteúdos apresentados de forma acessível, directa e objectiva.',
    },
    {
      icon: CheckCircle,
      title: 'Testa os teus conhecimentos',
      description: 'Pratica e verifica aquilo que já aprendeste com perguntas e simulados de fixação.',
    },
    {
      icon: Clock,
      title: 'Estuda ao teu ritmo',
      description: 'Organiza o teu tempo de estudo de acordo com a tua disponibilidade diária e profissional.',
    },
    {
      icon: Flame,
      title: 'Mais disciplina',
      description: 'Desenvolve uma rotina de preparação consistente através de metas e lembretes diários.',
    },
    {
      icon: LineChart,
      title: 'Acompanha a tua evolução',
      description: 'Identifica os teus pontos fortes e os assuntos que precisas de melhorar, conforme as funcionalidades disponíveis na aplicação.',
    },
  ];

  return (
    <section id="beneficios" className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-[#0B1528] border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            BENEFÍCIOS QUE VAIS ENCONTRAR NO <span className="text-amber-400">APROVE</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3">
            Tudo o que precisas para transformar estudo disperso numa preparação sólida e focada
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) matching the reference screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Gold Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold opacity-80 group-hover:opacity-100">
                  <span>Benefício #{index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <CTAButton 
            text="QUERO TER ACESSO AO APROVE"
            subtext="Começa a tua rotina de preparação com o apoio da aplicação"
          />
        </div>
      </div>
    </section>
  );
}
