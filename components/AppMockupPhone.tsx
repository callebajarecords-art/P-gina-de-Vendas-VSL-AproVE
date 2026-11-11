'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  TrendingUp, 
  Award, 
  HelpCircle, 
  Clock, 
  Shield, 
  ChevronRight, 
  FileText, 
  BarChart3,
  Sparkles,
  Smartphone
} from 'lucide-react';

export default function AppMockupPhone() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'modules' | 'exercises' | 'tests' | 'progress'>('home');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const screens = [
    { id: 'home', label: 'Ecrã Inicial' },
    { id: 'modules', label: 'Disciplinas' },
    { id: 'exercises', label: 'Exercícios' },
    { id: 'tests', label: 'Testes' },
    { id: 'progress', label: 'Progresso' },
  ] as const;

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      {/* Navigation tabs for the mockup demonstration */}
      <div className="w-full flex items-center justify-between p-1 bg-slate-900/90 border border-slate-700/80 rounded-xl mb-4 overflow-x-auto">
        {screens.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveScreen(tab.id);
              setSelectedAnswer(null);
            }}
            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeScreen === tab.id
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Realistic Smartphone Frame */}
      <div className="relative w-full aspect-[9/18.5] max-h-[640px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl border-4 border-slate-700 ring-1 ring-amber-400/30 overflow-hidden flex flex-col">
        {/* Phone Speaker & Dynamic Island Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-slate-900 mr-2 border border-slate-800" />
          <div className="w-10 h-1.5 bg-slate-900 rounded-full" />
        </div>

        {/* Screen Content Wrapper */}
        <div className="w-full h-full bg-[#0A1224] rounded-[34px] overflow-hidden flex flex-col text-slate-100 pt-7 pb-2 px-3 relative select-none">
          
          {/* App Header inside phone */}
          <div className="flex items-center justify-between py-2 border-b border-slate-800/80 mb-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs">
                <Shield className="w-3.5 h-3.5 fill-slate-950" />
              </div>
              <span className="font-extrabold text-xs tracking-tight text-white">
                Apro<span className="text-amber-400">VE</span>
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Preparação Activa</span>
            </div>
          </div>

          {/* SCREEN 1: HOME */}
          {activeScreen === 'home' && (
            <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto pr-0.5">
              {/* Daily study greeting */}
              <div className="bg-gradient-to-r from-blue-950/80 to-slate-900 p-3 rounded-xl border border-blue-800/40">
                <span className="text-[10px] uppercase font-semibold text-amber-400 tracking-wider">
                  Plano Diário de Preparação
                </span>
                <p className="text-xs font-bold text-white mt-0.5">
                  Continua o teu estudo de hoje
                </p>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-amber-400 h-full w-[68%]" />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                  <span>Meta diária: 68% concluída</span>
                  <span className="text-amber-300 font-semibold">24 / 35 questões</span>
                </div>
              </div>

              {/* Quick Modules Shortcuts */}
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                Módulos em Destaque
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div 
                  onClick={() => setActiveScreen('modules')} 
                  className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 hover:border-amber-400/50 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-amber-400 mb-1" />
                  <p className="text-[11px] font-bold text-white leading-tight">Legislação MININT</p>
                  <p className="text-[9px] text-slate-400">6 tópicos essenciais</p>
                </div>
                <div 
                  onClick={() => setActiveScreen('exercises')} 
                  className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 hover:border-amber-400/50 transition-all cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-emerald-400 mb-1" />
                  <p className="text-[11px] font-bold text-white leading-tight">Exercícios Rápidos</p>
                  <p className="text-[9px] text-slate-400">Prática diária</p>
                </div>
                <div 
                  onClick={() => setActiveScreen('tests')} 
                  className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 hover:border-amber-400/50 transition-all cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-sky-400 mb-1" />
                  <p className="text-[11px] font-bold text-white leading-tight">Simulados</p>
                  <p className="text-[9px] text-slate-400">Tempo cronometrado</p>
                </div>
                <div 
                  onClick={() => setActiveScreen('progress')} 
                  className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 hover:border-amber-400/50 transition-all cursor-pointer"
                >
                  <TrendingUp className="w-4 h-4 text-purple-400 mb-1" />
                  <p className="text-[11px] font-bold text-white leading-tight">O Meu Progresso</p>
                  <p className="text-[9px] text-slate-400">Evolução e notas</p>
                </div>
              </div>

              {/* Study advice card */}
              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 text-[10px] text-slate-300">
                <p className="font-semibold text-amber-300 mb-0.5">Dica de Preparação:</p>
                Revê os princípios gerais de actuação e ética institucional antes de iniciar o teu simulado de hoje.
              </div>
            </div>
          )}

          {/* SCREEN 2: MODULES / DISCIPLINAS */}
          {activeScreen === 'modules' && (
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-0.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                Módulos de Preparação
              </span>
              
              {[
                { title: 'Legislação e Estrutura Orgânica', lessons: '8 Módulos • 120 Exercícios', prog: '75%' },
                { title: 'Conhecimentos Gerais & Cidadania', lessons: '6 Módulos • 95 Exercícios', prog: '60%' },
                { title: 'Língua Portuguesa & Redacção', lessons: '7 Módulos • 110 Exercícios', prog: '80%' },
                { title: 'Ética e Deontologia Profissional', lessons: '5 Módulos • 85 Exercícios', prog: '50%' },
                { title: 'Raciocínio Lógico & Solução de Problemas', lessons: '6 Módulos • 90 Exercícios', prog: '45%' },
              ].map((m, i) => (
                <div key={i} className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-white">{m.title}</p>
                    <p className="text-[9px] text-slate-400">{m.lessons}</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {m.prog}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* SCREEN 3: EXERCISES */}
          {activeScreen === 'exercises' && (
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase text-amber-400">
                  Exercício Prático #42
                </span>
                <span className="text-[9px] text-slate-400 font-mono">Legislação MININT</span>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 text-[11px] leading-relaxed text-slate-200">
                Qual é a principal missão das forças dependentes do Ministério do Interior no âmbito da segurança pública?
              </div>

              <div className="flex flex-col gap-1.5 mt-1">
                {[
                  { text: 'A) Garantir a ordem e tranquilidade pública interna.', correct: true },
                  { text: 'B) Exclusivamente a gestão de aduanas externas.', correct: false },
                  { text: 'C) Emissão de legislação financeira nacional.', correct: false },
                ].map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAnswer(idx)}
                    className={`p-2 rounded-lg text-left text-[10px] font-medium transition-all border cursor-pointer ${
                      selectedAnswer === idx
                        ? opt.correct
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                          : 'bg-red-950/80 border-red-500 text-red-200'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>

              {selectedAnswer !== null && (
                <div className="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-[9px] text-emerald-300">
                  <span className="font-bold">Explicação:</span> As forças de segurança interna zelam pela manutenção da ordem, segurança das populações e protecção dos bens públicos e privados.
                </div>
              )}
            </div>
          )}

          {/* SCREEN 4: TESTS & SIMULADOS */}
          {activeScreen === 'tests' && (
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-0.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                Testes & Simulados
              </span>

              <div className="bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 p-3 rounded-xl border border-amber-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-400">Simulado Geral #01</span>
                  <span className="text-[9px] font-mono text-slate-400">45 minutos</span>
                </div>
                <p className="text-xs font-bold text-white mt-1">30 Perguntas Multidisciplinares</p>
                <div className="flex items-center gap-2 text-[9px] text-slate-300 mt-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pontuação anterior: 84% de acertos</span>
                </div>
                <button className="w-full mt-2.5 py-1.5 bg-amber-400 text-slate-950 font-bold text-[10px] rounded-lg shadow cursor-pointer hover:bg-amber-300">
                  Iniciar Novo Teste
                </button>
              </div>

              <div className="bg-slate-900/70 p-2.5 rounded-xl border border-slate-800">
                <p className="text-[10px] font-bold text-white">Simulado Específico de Português</p>
                <p className="text-[9px] text-slate-400">20 questões de gramática e interpretação</p>
              </div>
            </div>
          )}

          {/* SCREEN 5: PROGRESS */}
          {activeScreen === 'progress' && (
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-0.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                A Minha Evolução
              </span>

              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[9px] uppercase tracking-wider text-slate-400">Taxa Média de Acerto</span>
                <p className="text-2xl font-black text-amber-400 font-mono my-0.5">78.5%</p>
                <span className="text-[9px] text-emerald-400 font-medium">+12% de melhoria nas últimas 2 semanas</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-slate-900/70 p-2 rounded-xl border border-slate-800">
                  <p className="text-xs font-bold font-mono text-white">340</p>
                  <p className="text-[8px] text-slate-400 uppercase">Questões Feitas</p>
                </div>
                <div className="bg-slate-900/70 p-2 rounded-xl border border-slate-800">
                  <p className="text-xs font-bold font-mono text-white">28h</p>
                  <p className="text-[8px] text-slate-400 uppercase">Tempo de Estudo</p>
                </div>
              </div>

              <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800 text-[9px] text-slate-300">
                <span className="font-semibold text-amber-300">Ponto a Reforçar:</span> Raciocínio Lógico (62% acerto). Sugerimos 15 minutos extras de exercícios hoje.
              </div>
            </div>
          )}

          {/* Smartphone Bottom Home Bar */}
          <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
        </div>
      </div>

      <p className="text-[11px] text-slate-500 mt-3 text-center italic">
        * Representação ilustrativa das áreas de estudo e prática do aplicativo AproVE.
      </p>
    </div>
  );
}
