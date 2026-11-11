'use client';

import { useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TopNoticeBar from '@/components/TopNoticeBar';
import HeroSection from '@/components/HeroSection';
import ContentUnlockBanner from '@/components/ContentUnlockBanner';
import AboutAppSection from '@/components/AboutAppSection';
import WhoIsItForSection from '@/components/WhoIsItForSection';
import BenefitsSection from '@/components/BenefitsSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BonusSection from '@/components/BonusSection';
import PricingSection from '@/components/PricingSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingStickyCTA from '@/components/FloatingStickyCTA';
import { 
  subscribeUnlock, 
  getUnlockSnapshot, 
  getUnlockServerSnapshot, 
  setUnlockStorage 
} from '@/lib/unlock-store';
import { Sparkles, Eye, Lock } from 'lucide-react';

export default function SalesPage() {
  const isUnlocked = useSyncExternalStore(
    subscribeUnlock,
    getUnlockSnapshot,
    getUnlockServerSnapshot
  );
  const [hasScrolledToUnlock, setHasScrolledToUnlock] = useState(false);

  const handleUnlock = () => {
    setUnlockStorage(true);

    // Smooth scroll to the unlocked section without abrupt jumps
    if (!hasScrolledToUnlock) {
      setHasScrolledToUnlock(true);
      setTimeout(() => {
        const target = document.getElementById('unlocked-content');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  const toggleUnlockForTesting = () => {
    setUnlockStorage(!isUnlocked);
    if (!isUnlocked && !hasScrolledToUnlock) {
      setHasScrolledToUnlock(true);
      setTimeout(() => {
        const target = document.getElementById('unlocked-content');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* Institutional Top Navigation */}
      <TopNoticeBar isUnlocked={isUnlocked} />

      {/* Main Hero & VSL Video Section (Always visible) */}
      <main className="flex-1">
        <HeroSection onUnlock={handleUnlock} isUnlocked={isUnlocked} />

        {/* Sales Sections: Initially Hidden, Unlocks at 02:45 (165s) */}
        <AnimatePresence>
          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* Section 4: Unlocked Welcome Banner & CTA */}
              <ContentUnlockBanner />

              {/* Section 5: O que é o AproVE? (Interactive Phone Mockup & Copy) */}
              <AboutAppSection />

              {/* Section 6: O AproVE é para ti? */}
              <WhoIsItForSection />

              {/* Section 7: Benefícios que vais encontrar no AproVE */}
              <BenefitsSection />

              {/* Section 8: Antes e Depois */}
              <BeforeAfterSection />

              {/* Section 9: Resultados e Experiências (Prepared WhatsApp Feedback Prints) */}
              <TestimonialsSection />

              {/* Section 10: Bónus Exclusivos */}
              <BonusSection />

              {/* Section 11: Oferta e Preço (6.500 Kz) */}
              <PricingSection />

              {/* Section 12: Garantia de 30 Dias */}
              <GuaranteeSection />

              {/* Section 13: Dúvidas Frequentes (FAQ Accordion) */}
              <FaqSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer with Mandatory Disclaimers and Terms Modals */}
      <Footer />

      {/* Floating CTA bar (appears when unlocked and scrolled) */}
      <FloatingStickyCTA isUnlocked={isUnlocked} />

      {/* Testing / Quick Access bar for the page owner / review */}
      <aside aria-label="Ferramenta de visualização" className="w-full bg-slate-950/90 border-t border-slate-800 py-2 px-4 text-center text-[11px] text-slate-400">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <span className="flex items-center gap-1.5 text-slate-400">
            {isUnlocked ? (
              <span className="flex items-center gap-1 text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" /> Estado: Conteúdo Desbloqueado
              </span>
            ) : (
              <span className="flex items-center gap-1 text-amber-400">
                <Lock className="w-3.5 h-3.5" /> Estado: Conteúdo Oculto (aguardando 02:45 do vídeo)
              </span>
            )}
          </span>
          <button
            type="button"
            onClick={toggleUnlockForTesting}
            className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer transition-colors"
          >
            <Eye className="w-3 h-3" />
            <span>{isUnlocked ? 'Simular estado Bloqueado' : 'Desbloquear Conteúdo Agora (Pré-visualização)'}</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
