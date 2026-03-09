import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactModal() {
  const { t } = useTranslation();
  const { activeModal, closeModal } = useModal();

  return (
    <AnimatePresence>
      {activeModal === 'contact' && (
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

            <div className="mb-4 sm:mb-8 pr-8 text-left mt-1 sm:mt-2 border-b border-beige/10 pb-4 sm:pb-6">
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-beige tracking-tighter leading-none mb-2 sm:mb-3">
                {t('contact.modalTitle')}
              </h2>
              <p className="font-mono text-beige/80 text-[10px] sm:text-xs uppercase tracking-widest">
                {t('contact.modalSubtitle')}
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2 relative group">
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/70 font-bold group-focus-within:text-lava transition-colors">{t('contact.form.name')}</label>
                  <input type="text" className="w-full bg-transparent border-b border-beige/30 focus:border-lava text-beige px-0 py-2 sm:py-3 outline-none transition-colors font-mono text-xs sm:text-sm placeholder:text-beige/50" placeholder={t('contact.form.namePlaceholder')} required />
                </div>
                <div className="space-y-1 sm:space-y-2 relative group">
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/70 font-bold group-focus-within:text-lava transition-colors">{t('contact.form.phone')}</label>
                  <input type="tel" className="w-full bg-transparent border-b border-beige/30 focus:border-lava text-beige px-0 py-2 sm:py-3 outline-none transition-colors font-mono text-xs sm:text-sm placeholder:text-beige/50" placeholder={t('contact.form.phonePlaceholder')} required />
                </div>
              </div>
              
              <div className="space-y-1 sm:space-y-2 relative group">
                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/70 font-bold group-focus-within:text-lava transition-colors">{t('contact.form.email')}</label>
                <input type="email" className="w-full bg-transparent border-b border-beige/30 focus:border-lava text-beige px-0 py-2 sm:py-3 outline-none transition-colors font-mono text-xs sm:text-sm placeholder:text-beige/50" placeholder={t('contact.form.emailPlaceholder')} required />
              </div>

              <div className="space-y-1 sm:space-y-2 relative group">
                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/70 font-bold group-focus-within:text-lava transition-colors">{t('contact.form.task')}</label>
                <textarea className="w-full bg-transparent border-b border-beige/30 focus:border-lava text-beige px-0 py-2 sm:py-3 outline-none transition-colors font-mono text-xs sm:text-sm resize-none h-16 sm:h-24 placeholder:text-beige/50" placeholder={t('contact.form.taskPlaceholder')} required></textarea>
              </div>

              <button type="submit" className="w-full bg-lava hover:bg-[#e64500] text-dark hover:shadow-[0_0_30px_rgba(255,77,0,0.4)] font-black text-xs uppercase tracking-[0.1em] py-3 sm:py-5 transition-all duration-300 mt-2 sm:mt-4 text-center cursor-pointer relative overflow-hidden group">
                <span className="relative z-10">{t('contact.form.submit')}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <p className="text-center font-mono text-[8px] text-beige/60 uppercase tracking-widest mx-auto pt-1 sm:pt-2 leading-relaxed">
                {t('contact.form.privacy')}
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
