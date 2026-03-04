import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { t } = useTranslation();
  const { openModal } = useModal();

  return (
    <header className="relative min-h-[100svh] pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden mb-[6vh] md:mb-[10vh] px-4 w-full">
      <motion.div layoutId="hero-grid" className="grid-bg" style={{ height: '150vh' }}></motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.06),transparent_70%)] pointer-events-none"></div>

      <div className="flex flex-col items-center z-10 relative w-full text-center my-auto">
        <motion.h1 
          layoutId="hero-title"
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(4rem,18vw,240px)] font-black leading-[0.75] tracking-tighter uppercase text-beige select-none pl-[0.05em]"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 pt-6 md:pt-8 pointer-events-none"
        >
          <h2 className="text-[clamp(1.2rem,4vw,3rem)] font-black uppercase tracking-tight leading-tight">
            <span className="text-beige">{t('hero.subtitle1')}</span><span className="text-lava">{t('hero.subtitle2')}</span><br/>
            <span className="text-lava">{t('hero.subtitle3')}</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 md:pt-16 flex flex-col items-center gap-10 w-full"
        >
          <button 
            onClick={() => openModal('contact')}
            className="linear-btn bg-dark/50 backdrop-blur-sm hidden md:inline-flex"
          >
            {t('hero.start')}
          </button>
        </motion.div>
      </div>
    </header>
  );
}
