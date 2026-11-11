'use client';

import React, { useState } from 'react';
import { Shield, Mail, FileText, Lock, X } from 'lucide-react';

export default function Footer() {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  return (
    <footer className="w-full bg-[#050A12] text-slate-400 py-12 px-4 sm:px-6 border-t border-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black">
              <Shield className="w-4 h-4 fill-slate-950" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              Apro<span className="text-amber-400">VE</span>
            </span>
          </div>
          <p className="text-sm font-medium text-slate-300">
            AproVE — Preparação inteligente para o teu futuro.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400 border-y border-slate-900 py-4">
          <button
            type="button"
            onClick={() => setModalType('terms')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Termos e Condições
          </button>
          <span className="text-slate-700">·</span>
          <button
            type="button"
            onClick={() => setModalType('privacy')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
          <span className="text-slate-700">·</span>
          <button
            type="button"
            onClick={() => setModalType('contact')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Contacto e Suporte
          </button>
        </div>

        {/* Legal Disclaimer Required by Prompt */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            &ldquo;O AproVE é uma ferramenta independente de preparação e não representa, não pertence e não possui afiliação oficial com o Ministério do Interior. A utilização da aplicação não garante aprovação, recrutamento ou ingresso em qualquer instituição.&rdquo;
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-slate-600">
          <p>© 2026 AproVE. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modal Dialog for Links */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">Termos e Condições de Uso</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                  <p>
                    <strong>1. Objeto do Serviço:</strong> O AproVE é uma plataforma digital de auxílio e estudo que disponibiliza ferramentas didáticas, exercícios e conteúdos de revisão para os candidatos ao Ministério do Interior.
                  </p>
                  <p>
                    <strong>2. Independência Institucional:</strong> Esta plataforma não possui qualquer ligação governamental ou institucional com o Ministério do Interior de Angola. Todo o material tem carácter formativo e preparatório.
                  </p>
                  <p>
                    <strong>3. Acesso à Plataforma:</strong> O acesso é concedido individualmente ao comprador mediante confirmação de pagamento através do checkout oficial.
                  </p>
                  <p>
                    <strong>4. Garantia:</strong> O utilizador dispõe de 30 dias de garantia nos termos descritos na política de aquisição.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <Lock className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">Política de Privacidade</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                  <p>
                    <strong>1. Protecção de Dados:</strong> Os seus dados pessoais recolhidos durante o processo de adesão são tratados de forma segura e confidencial.
                  </p>
                  <p>
                    <strong>2. Transações Seguras:</strong> Todos os pagamentos são processados por plataforma encriptada e certificada. Não armazenamos informações de cartões ou contas bancárias.
                  </p>
                  <p>
                    <strong>3. Comunicações:</strong> O seu correio eletrónico é utilizado estritamente para envio dos acessos e suporte relativo à sua preparação.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'contact' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sky-400 mb-2">
                  <Mail className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">Contacto e Apoio ao Aluno</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                  <p>
                    Tens alguma dúvida sobre a tua preparação ou sobre a tua adesão ao AproVE? A nossa equipa de apoio está disponível para te ajudar.
                  </p>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                    <p className="text-white font-bold">Email de Suporte:</p>
                    <p className="text-amber-400 font-mono">suporte@aprove.ao</p>
                  </div>
                  <p className="text-slate-400 text-xs">
                    Horário de atendimento: Segunda a Sexta, das 08h00 às 18h00 (Horário de Luanda).
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
