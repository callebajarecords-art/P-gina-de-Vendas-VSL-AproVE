'use client';

import React from 'react';
import AppMockupPhone from '@/components/AppMockupPhone';
import CTAButton from '@/components/CTAButton';
import { Target, Layers, CheckCircle2, TrendingUp, Shield } from 'lucide-react';

export default function AboutAppSection() {
  return (
    <section id="o-que-e" className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-[#0B1528] border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Ferramenta de Apoio ao Candidato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            O QUE É O <span className="text-amber-400">APROVE?</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 2-Column Split: App Mockup on Left + Copy on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <AppMockupPhone />
          </div>

          {/* Right Column: Persuasive text and feature breakdown */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-slate-200">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-300">
              <p>
                O <strong className="text-white font-bold">AproVE</strong> é uma aplicação criada para apoiar candidatos que desejam preparar-se para ingressar no Ministério do Interior.
              </p>
              <p>
                Através de uma experiência organizada e prática, o utilizador pode aceder a conteúdos de preparação, realizar exercícios, testar os seus conhecimentos e acompanhar a sua evolução.
              </p>
              <p className="p-4 bg-slate-900/80 border-l-4 border-amber-400 rounded-r-xl text-slate-100 italic">
                &ldquo;Mais do que estudar sem direção, o AproVE ajuda-te a transformar a tua preparação numa rotina mais organizada e produtiva.&rdquo;
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Foco Direcionado</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Conteúdos selecionados com base nos tópicos comuns aos processos de ingresso.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Estrutura em Módulos</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Divide a tua aprendizagem passo a passo, sem sobrecarga ou confusão.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Prática com Questões</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Testa os teus conhecimentos com exercícios e simulados comentados.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Métricas de Evolução</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Acompanha a tua percentagem de acerto e sabe onde deves reforçar.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <CTAButton 
                text="SIM, QUERO CONHECER O APROVE"
                subtext="Garante já o teu acesso e estuda pelo teu smartphone ou computador"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
