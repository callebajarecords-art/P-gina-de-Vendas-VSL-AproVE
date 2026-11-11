'use client';

import React from 'react';
import CTAButton from '@/components/CTAButton';
import { X, Check, ArrowRight, ShieldAlert } from 'lucide-react';

export default function BeforeAfterSection() {
  const beforeItems = [
    'Estudar sem organização e com materiais dispersos.',
    'Não saber por onde começar nem o que priorizar.',
    'Ter dificuldade em testar os conhecimentos de forma prática.',
    'Não ter uma rotina de preparação com metas claras.',
    'Sentir insegurança sobre os assuntos que realmente dominas.',
  ];

  const afterItems = [
    'Preparação mais organizada, estruturada passo a passo.',
    'Conteúdos estruturados e organizados por módulos claros.',
    'Possibilidade de praticar com exercícios e testes comentados.',
    'Maior disciplina nos estudos com acompanhamento diário.',
    'Mais clareza sobre o progresso real da tua preparação.',
  ];

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-[#060B14]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            VÊ A DIFERENÇA QUE UMA <span className="text-amber-400">PREPARAÇÃO ORGANIZADA</span> PODE FAZER
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3">
            O método e as ferramentas que utilizas definem a segurança e a consistência da tua caminhada
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 2-Column Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Column 1: ANTES (Red) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-red-950/20 border border-red-900/40 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-red-900/40">
                <div className="w-9 h-9 rounded-xl bg-red-900/40 text-red-400 flex items-center justify-center border border-red-700/50">
                  <X className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-400">Situação Atual</span>
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                    ANTES DE UTILIZAR O APROVE
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {beforeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/20">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-900/30 text-xs text-red-300/80 italic">
              Resultados de estudar sem método ou direção definida.
            </div>
          </div>

          {/* Column 2: DEPOIS (Green / Gold) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border-2 border-emerald-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Top highlight ribbon */}
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] uppercase font-black px-4 py-1 rounded-bl-xl tracking-wider">
              Recomendado
            </div>

            <div>
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-emerald-900/40">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Nova Rotina</span>
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                    COM O APOIO DO APROVE
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {afterItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-100 font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-900/30 text-xs text-emerald-300 font-medium">
              Preparação consistente, foco no essencial e rotina produtiva.
            </div>
          </div>
        </div>

        {/* Responsible Disclaimer Box */}
        <div className="mt-8 p-4 bg-slate-900/60 border border-slate-800 rounded-xl max-w-3xl mx-auto flex items-center gap-3 text-xs text-slate-400 text-center sm:text-left">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 hidden sm:block" />
          <p>
            <strong className="text-slate-300">Aviso transparente:</strong> O AproVE é uma ferramenta de apoio ao estudo. A admissão e os resultados dependem exclusivamente do esforço individual do candidato e do cumprimento dos requisitos oficiais de cada concurso.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <CTAButton 
            text="QUERO TRANSFORMAR A MINHA PREPARAÇÃO"
            subtext="Acede agora ao AproVE e estuda com uma rotina organizada"
          />
        </div>
      </div>
    </section>
  );
}
