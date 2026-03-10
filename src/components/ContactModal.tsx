import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion, AnimatePresence } from 'motion/react';
import SuccessModal from './SuccessModal';

const InlineError = ({ error }: { error?: string }) => (
  <AnimatePresence>
    {error && (
      <motion.div
        initial={{ opacity: 0, y: -5, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -5, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-1.5 sm:mt-2 z-20"
      >
        <div className="bg-lava text-dark text-[10px] sm:text-xs font-mono px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-sm shadow-lg w-max max-w-[calc(100vw-4rem)] sm:max-w-sm whitespace-normal leading-tight relative">
          {error}
          <div className="absolute -top-1 left-4 w-2 h-2 bg-lava rotate-45"></div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function ContactModal() {
  const { t } = useTranslation();
  const { activeModal, closeModal } = useModal();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    task: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = t('validation.required');
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = t('validation.email');
    } else if (name === 'phone' && !/^\+?[\d\s-]{10,}$/.test(value)) {
      error = t('validation.phone');
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      task: true
    });

    if (isValid) {
      setIsSuccessOpen(true);
      setFormData({ name: '', phone: '', email: '', task: '' });
      setTouched({});
      setErrors({});
    }
  };

  return (
    <>
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
              className="relative w-full max-w-xl bg-[#0a0a0a] border border-beige/10 p-5 sm:p-8 shadow-[0_0_80px_rgba(255,77,0,0.15)] max-h-[85svh] md:max-h-none overflow-y-auto md:overflow-y-visible hide-scrollbar flex flex-col box-border"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lava to-transparent opacity-50"></div>
              
              <button 
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-beige/50 hover:text-lava hover:bg-white/5 transition-colors duration-300 p-2" 
                aria-label={t('ui.close')} 
                onClick={closeModal}
              >
                <X size={24} className="pointer-events-none" />
              </button>

              <div className="mb-4 sm:mb-6 pr-8 text-left mt-1 sm:mt-2 border-b border-beige/10 pb-4 sm:pb-5">
                <h2 className="text-2xl sm:text-4xl font-black uppercase text-beige tracking-tighter leading-none mb-2 sm:mb-3">
                  {t('contact.modalTitle')}
                </h2>
                <p className="font-mono text-beige/80 text-[10px] sm:text-xs uppercase tracking-widest">
                  {t('contact.modalSubtitle')}
                </p>
              </div>

              <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1 sm:space-y-1.5 relative group">
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/70 font-bold group-focus-within:text-lava transition-colors">{t('contact.form.name')}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-transparent border-b ${errors.name ? 'border-lava' : 'border-beige/30 focus:border-lava'} text-beige px-0 py-2 sm:py-2.5 outline-none transition-colors font-mono text-xs sm:text-sm placeholder:text-beige/50`} placeholder={t('contact.form.namePlaceholder')} />
                    <InlineError error={errors.name} />
                  </div>
                  <div className="space-y-1 sm:space-y-1.5 relative group">
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/70 font-bold group-focus-within:text-lava transition-colors">{t('contact.form.phone')}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-transparent border-b ${errors.phone ? 'border-lava' : 'border-beige/30 focus:border-lava'} text-beige px-0 py-2 sm:py-2.5 outline-none transition-colors font-mono text-xs sm:text-sm placeholder:text-beige/50`} placeholder={t('contact.form.phonePlaceholder')} />
                    <InlineError error={errors.phone} />
                  </div>
                </div>
                
                <div className="space-y-1 sm:space-y-1.5 relative group">
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/70 font-bold group-focus-within:text-lava transition-colors">{t('contact.form.email')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-transparent border-b ${errors.email ? 'border-lava' : 'border-beige/30 focus:border-lava'} text-beige px-0 py-2 sm:py-2.5 outline-none transition-colors font-mono text-xs sm:text-sm placeholder:text-beige/50`} placeholder={t('contact.form.emailPlaceholder')} />
                  <InlineError error={errors.email} />
                </div>

                <div className="space-y-1 sm:space-y-1.5 relative group">
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige/70 font-bold group-focus-within:text-lava transition-colors">{t('contact.form.task')}</label>
                  <textarea name="task" value={formData.task} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-transparent border-b ${errors.task ? 'border-lava' : 'border-beige/30 focus:border-lava'} text-beige px-0 py-2 sm:py-2.5 outline-none transition-colors font-mono text-xs sm:text-sm resize-none h-16 sm:h-20 placeholder:text-beige/50`} placeholder={t('contact.form.taskPlaceholder')}></textarea>
                  <InlineError error={errors.task} />
                </div>

                <button type="submit" className="w-full bg-lava hover:bg-[#e64500] text-dark hover:shadow-[0_0_30px_rgba(255,77,0,0.4)] font-black text-xs uppercase tracking-[0.1em] py-3 sm:py-4 transition-all duration-300 mt-2 sm:mt-4 text-center cursor-pointer relative overflow-hidden group">
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
      <SuccessModal isOpen={isSuccessOpen} onClose={() => { setIsSuccessOpen(false); closeModal(); }} />
    </>
  );
}
