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
            className="relative w-full max-w-xl bg-[#0a0a0a] border border-beige/10 p-8 sm:p-10 shadow-[0_0_80px_rgba(255,77,0,0.15)] max-h-[90vh] overflow-y-auto hide-scrollbar flex flex-col box-border"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lava to-transparent opacity-50"></div>
            
            <button 
              className="absolute top-4 right-4 text-beige/50 hover:text-lava hover:bg-white/5 rounded-full transition-colors duration-300 p-2" 
              aria-label={t('ui.close')} 
              onClick={closeModal}
            >
              <X size={24} className="pointer-events-none" />
            </button>

            <div className="mb-8 text-left mt-2 border-b border-beige/10 pb-6">
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-beige tracking-tighter leading-none mb-3">{t('faq.modalTitle')}</h2>
              <p className="font-mono text-beige/80 text-xs uppercase tracking-widest">{t('faq.modalSubtitle')}</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-beige/20 bg-dark p-5 hover:border-lava/50 transition-colors duration-300 cursor-pointer faq-item group"
                  onClick={() => setOpenItem(openItem === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center w-full outline-none">
                    <h3 className="font-bold text-beige text-xs md:text-sm uppercase tracking-tight text-left pr-4 leading-relaxed group-hover:text-lava transition-colors">{faq.q}</h3>
                    <Plus size={18} className={`text-lava transition-transform duration-300 ${openItem === idx ? 'rotate-45' : ''}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openItem === idx ? 'max-h-40 opacity-100 mt-4 border-t border-beige/20 pt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="font-mono text-beige/90 text-xs leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center pt-6 border-t border-beige/10">
              <div className="flex flex-col gap-3 items-center mb-6">
                <a href="mailto:Mail@bitforge.digital" className="text-lava hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">Mail@bitforge.digital</a>
                <a href="tel:+79660847799" className="text-lava hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">+7 (966) 084-77-99</a>
              </div>
              <button 
                className="text-beige/70 font-mono text-[10px] uppercase tracking-widest font-bold hover:text-lava transition-colors duration-300" 
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
