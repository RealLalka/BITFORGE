import { useTranslation } from 'react-i18next';
import { X, Plus } from 'lucide-react';
import { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqModal() {
  const { t } = useTranslation();
  const { activeModal, closeModal, openModal } = useModal();
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = t('faq.items', { returnObjects: true }) as { q: string; a: string }[];

  return (
    <AnimatePresence>
      {activeModal === 'faq' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" aria-modal="true" role="dialog">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark/95 backdrop-blur-md cursor-pointer" 
            onClick={closeModal}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#0a0a0a] border border-beige/10 p-5 sm:p-10 shadow-[0_0_80px_rgba(255,77,0,0.15)] max-h-[85svh] overflow-y-auto hide-scrollbar flex flex-col box-border"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lava to-transparent opacity-50"></div>
            
            <button 
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-beige/50 hover:text-lava hover:bg-white/5 transition-colors duration-300 p-2" 
              aria-label={t('ui.close')} 
              onClick={closeModal}
            >
              <X size={24} className="pointer-events-none" />
            </button>

            <div className="mb-4 sm:mb-8 text-left mt-1 sm:mt-2 border-b border-beige/10 pb-4 sm:pb-6">
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-beige tracking-tighter leading-none mb-2 sm:mb-3">{t('faq.modalTitle')}</h2>
              <p className="font-mono text-beige/80 text-[10px] sm:text-xs uppercase tracking-widest">{t('faq.modalSubtitle')}</p>
            </div>

            <div className="space-y-2 sm:space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-beige/20 bg-dark hover:border-lava/50 transition-colors duration-300 group"
                >
                  <button
                    className="flex justify-between items-center w-full p-3 sm:p-5 text-left outline-none"
                    onClick={() => setOpenItem(openItem === idx ? null : idx)}
                    aria-expanded={openItem === idx}
                  >
                    <h3 className="font-bold text-beige text-[10px] sm:text-sm uppercase tracking-tight pr-4 leading-relaxed group-hover:text-lava transition-colors">{faq.q}</h3>
                    <Plus size={16} className={`text-lava transition-transform duration-300 shrink-0 sm:w-[18px] sm:h-[18px] ${openItem === idx ? 'rotate-45' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openItem === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 sm:p-5 pt-0 border-t border-beige/10 mt-1 sm:mt-2">
                          <p className="font-mono text-beige/90 text-[10px] sm:text-xs leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="mt-4 sm:mt-8 text-center pt-4 sm:pt-6 border-t border-beige/10">
              <div className="flex flex-col gap-2 sm:gap-3 items-center mb-4 sm:mb-6">
                <a href="mailto:Mail@bitforge.digital" className="text-lava hover:text-white transition-colors font-mono text-xs sm:text-sm uppercase tracking-widest">Mail@bitforge.digital</a>
                <a href="tel:+79660847799" className="text-lava hover:text-white transition-colors font-mono text-xs sm:text-sm uppercase tracking-widest">+7 (966) 084-77-99</a>
              </div>
              <button 
                className="text-beige/70 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest font-bold hover:text-lava transition-colors duration-300" 
                onClick={() => openModal('contact')}
              >
                {t('faq.stillQuestions')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
