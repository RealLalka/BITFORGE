import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { t } = useTranslation();
  const { openModal } = useModal();

  return (
    <header className="relative min-h-[100svh] pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden mb-[10vh] md:mb-[15vh] px-4 w-full">
      <div className="grid-bg grid-bg-animated" style={{ height: '150vh' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.06),transparent_70%)] pointer-events-none"></div>

      <div className="flex flex-col items-center z-10 relative w-full text-center my-auto">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
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

          <div className="flex flex-col items-center justify-center gap-4 opacity-50 hover:opacity-100 transition-opacity cursor-default hidden md:flex">
            <div className="w-[28px] h-[46px] border-[2px] border-beige/40 rounded-[20px] flex justify-center pt-[8px]">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-3 bg-lava rounded-full"
              ></motion.div>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-beige/50 font-bold">{t('hero.scroll')}</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
