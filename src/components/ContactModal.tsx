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
            className="relative w-full max-w-xl bg-[#0a0a0a] border border-beige/10 p-8 sm:p-10 shadow-[0_0_80px_rgba(255,77,0,0.15)] max-h-[90vh] overflow-y-auto hide-scrollbar flex flex-col box-border"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lava to-transparent opacity-50"></div>
            
            <button 
              className="absolute top-4 right-4 text-beige/30 hover:text-lava hover:rotate-90 transition-all duration-300 p-2" 
              aria-label="Закрыть" 
              onClick={closeModal}
            >
              <X size={24} className="pointer-events-none" />
            </button>

            <div className="mb-8 pr-8 text-left mt-2 border-b border-beige/10 pb-6">
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-beige tracking-tighter leading-none mb-3">
                ОБСУДИМ ПРОЕКТ
              </h2>
              <p className="font-mono text-beige/50 text-xs uppercase tracking-widest">
                Оставьте заявку — наш аналитик свяжется с вами в течение 15 минут.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative group">
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/40 font-bold group-focus-within:text-lava transition-colors">ИМЯ</label>
                  <input type="text" className="w-full bg-transparent border-b border-beige/20 focus:border-lava text-beige px-0 py-3 outline-none transition-colors font-mono text-sm placeholder:text-beige/20" placeholder="Ваше имя" required />
                </div>
                <div className="space-y-2 relative group">
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/40 font-bold group-focus-within:text-lava transition-colors">ТЕЛЕФОН</label>
                  <input type="tel" className="w-full bg-transparent border-b border-beige/20 focus:border-lava text-beige px-0 py-3 outline-none transition-colors font-mono text-sm placeholder:text-beige/20" placeholder="+7 (999) 123-45-67" required />
                </div>
              </div>
              
              <div className="space-y-2 relative group">
                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/40 font-bold group-focus-within:text-lava transition-colors">EMAIL</label>
                <input type="email" className="w-full bg-transparent border-b border-beige/20 focus:border-lava text-beige px-0 py-3 outline-none transition-colors font-mono text-sm placeholder:text-beige/20" placeholder="hello@mail.com" required />
              </div>

              <div className="space-y-2 relative group">
                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/40 font-bold group-focus-within:text-lava transition-colors">ЗАДАЧА</label>
                <textarea className="w-full bg-transparent border-b border-beige/20 focus:border-lava text-beige px-0 py-3 outline-none transition-colors font-mono text-sm resize-none h-24 placeholder:text-beige/20" placeholder="Коротко о проекте..." required></textarea>
              </div>

              <button type="submit" className="w-full bg-lava hover:bg-[#e64500] text-dark hover:shadow-[0_0_30px_rgba(255,77,0,0.4)] rounded-none font-black text-xs uppercase tracking-[0.1em] py-5 transition-all duration-300 mt-4 text-center cursor-pointer relative overflow-hidden group">
                <span className="relative z-10">ОТПРАВИТЬ ЗАЯВКУ</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <p className="text-center font-mono text-[8px] text-beige/30 uppercase tracking-widest mx-auto pt-2 leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
