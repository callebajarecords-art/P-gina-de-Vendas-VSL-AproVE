'use client';

import React from 'react';
import { Gift, FileText, Compass, Database, CheckCircle2 } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

interface BonusItem {
  number: string;
  badge: string;
  title: string;
  description: string;
  format: string;
}

export default function BonusSection() {
  const bonuses: BonusItem[] = [
    {
      number: 'BÓNUS 1',
      badge: 'MATERIAL DE APOIO',
      title: 'Material de Apoio e Resumos Essenciais',
      description: 'Esquemas de síntese em formato PDF para revisão rápida e memorização dos pontos-chave de legislação antes das provas.',
      format: 'Documento Digital (PDF)',
    },
    {
      number: 'BÓNUS 2',
      badge: 'GUIA DE PREPARAÇÃO',
      title: 'Guia Estratégico de Estudos',
      description: 'Roteiro de planeamento semanal com divisão prática de matérias para gerir o teu tempo de estudo com antecedência e disciplina.',
      format: 'Plano de Estudos Passo a Passo',
    },
    {
      number: 'BÓNUS 3',
      badge: 'RECURSO EXTRA',
      title: 'Banco Suplementar de Questões Práticas',
      description: 'Compilação extra de exercícios comentados para reforçar o treino das disciplinas com maior peso e critérios eliminatórios.',
      format: 'Módulo Prático na Aplicação',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-[#070D18]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Recursos Adicionais Incluídos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            E AINDA <span className="text-amber-400">NÃO ACABOU...</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Ao adquirires o AproVE, terás acesso imediato aos materiais e recursos adicionais incluídos na oferta.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 3 Bonus Cards matching Afiliaze reference template style */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {bonuses.map((b, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0B1528] border border-slate-800 hover:border-amber-400/40 transition-all shadow-xl flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group"
            >
              {/* Bonus Graphic Icon Box */}
              <div className="w-full md:w-44 h-32 md:h-36 rounded-xl bg-gradient-to-br from-slate-900 to-[#101D36] border border-slate-700/80 flex flex-col items-center justify-center text-center p-3 shrink-0 shadow-inner group-hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-400/15 text-amber-400 flex items-center justify-center mb-2">
                  {idx === 0 && <FileText className="w-5 h-5" />}
                  {idx === 1 && <Compass className="w-5 h-5" />}
                  {idx === 2 && <Database className="w-5 h-5" />}
                </div>
                <span className="text-xs font-bold text-white tracking-wide uppercase">
                  {b.number}
                </span>
                <span className="text-[10px] text-amber-400 font-semibold mt-0.5">
                  {b.badge}
                </span>
              </div>

              {/* Bonus Text & Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {b.badge}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                    100% Gratuito
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {b.description}
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{b.format}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <CTAButton 
            text="QUERO O APROVE E TODOS OS RECURSOS"
            subtext="Acesso completo disponível de imediato após a adesão"
          />
        </div>
      </div>
    </section>
  );
}
