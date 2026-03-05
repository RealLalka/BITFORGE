import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { useModal } from '../context/ModalContext';
import { useState, useEffect } from 'react';

export default function Hero({ loading, onLoadingComplete }: { loading?: boolean, onLoadingComplete?: () => void }) {
  const { t } = useTranslation();
  const { openModal } = useModal();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete'>(loading ? 'loading' : 'complete');

  useEffect(() => {
    if (!loading) return;
    
    const duration = 2500;
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - t, 3);
      const p = easeOut * 100;
      
      setProgress(p);
      
      if (t >= 1) {
        clearInterval(interval);
        setPhase('complete');
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 500);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [loading, onLoadingComplete]);

  return (
    <header className="relative min-h-[80svh] md:min-h-[100svh] pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden mb-0 md:mb-[10vh] px-4 w-full">
      <motion.div 
        className="grid-bg" 
        style={{ height: '150vh' }}
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ clipPath: phase === 'complete' ? 'circle(150% at 50% 50%)' : `circle(${progress * 1.5}% at 50% 50%)` }}
        transition={{ duration: phase === 'complete' ? 0.5 : 0.1, ease: "easeOut" }}
      ></motion.div>
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.06),transparent_70%)] pointer-events-none"></motion.div>

      <div className="flex flex-col items-center z-10 relative w-full text-center my-auto">
        
        {/* Typing Text and Loading Elements */}
        <div className="relative flex items-center justify-center">
          <motion.h1 
            className="relative z-[101] text-[clamp(4rem,18vw,240px)] font-black leading-[0.75] tracking-tighter uppercase text-beige select-none pl-[0.05em]"
            style={{ originY: 0.5 }}
            initial={{ scale: loading ? 0.5 : 1 }}
            animate={{ scale: phase === 'complete' ? 1 : 0.5 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {phase === 'complete' ? t('hero.title') : t('hero.title').split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.15, duration: 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <AnimatePresence>
            {phase === 'loading' && (
              <motion.div 
                className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                {/* SVG Drawing */}
                <motion.div 
                  className="w-64 h-32 mt-8 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.svg 
                    id="a" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 210.5 103.7"
                    className="w-full h-full"
                  >
                    <motion.path 
                      fill="transparent"
                      stroke="#ff4d00"
                      strokeWidth="1"
                      initial={{ pathLength: 0, fill: "transparent" }}
                      animate={{ 
                        pathLength: progress / 100,
                        fill: "transparent"
                      }}
                      transition={{ 
                        pathLength: { duration: 0.1, ease: "linear" }
                      }}
                      d="M112.8,51.9c0,13.3,0,26.6,0,39.8-.3,2.2-2.8,3.4-4,5.1-2.1,2.1-4.2,4.1-6.2,6.3-.4.4-.7.6-1.2.6-12.2,0-24.5,0-36.7,0-10.7,0-21.5,0-32.2,0-.6,0-.9-.1-.9-.8,0-6.6,0-13.3,0-19.9,0-.3.1-.6.5-.7,4.8-2.5,9.8-4.7,14.1-8,.2-.2.4-.6.4-1,0-5.7,0-11.3,0-17,0-9.8,0-19.6,0-29.4.3-19.5-3-12.2,10.4-26.2C57.2.2,57.6,0,58,0c14.3,0,28.7,0,43,0,.4,0,.8.1,1.1.5,2,2.1,4,4,6.1,6.1,1.3,1.7,4.1,3,4.5,5.2,0,13.3,0,26.7,0,40h0ZM68.7,21.6c0,19.8,0,39.6,0,59.4,0,.7.2.9.9.9,6.8,0,13.6,0,20.5,0,.6,0,.8-.2.8-.8,0-19.5.1-38.9,0-58.4,0-1,0-1-1-1-7,0-14,0-21,0Z"
                    />
                    <motion.path 
                      fill="transparent"
                      stroke="#ff4d00"
                      strokeWidth="1"
                      initial={{ pathLength: 0, fill: "transparent" }}
                      animate={{ 
                        pathLength: progress / 100,
                        fill: "transparent"
                      }}
                      transition={{ 
                        pathLength: { duration: 0.1, ease: "linear" }
                      }}
                      d="M155.7,32c3-7.9,8.8-24.6,8.8-24.6h46.1c0,0-8.7,13.1-14.7,18.3-4.6,3.8-9.2,7.6-14.6,10.1-5.9,3.1-12,5.5-18.2,7.9-2.1.9-4.2,1.7-6.3,2.8-6.8,3.5-8,12.6-8,14.6s0,7.9,3.2,10.4c5.8,4.6,11.5,7.9,17.9,10.8.5.3.5,1,.5,1.5,0,6.3,0,12.7,0,19,0,1,0,1-1,1-16.3,0-32.6.1-48.9,0,0-7,0-13.8,0-20.8,0-.9,0-.9.9-.9,3.6,0,7.2,0,10.8,0,1,0,1,0,1-1,0-17.9,0-35.8,0-53.7,0-.6-.2-.7-.8-.7-3.7,0-7.4,0-11.1,0-.6,0-.8-.2-.7-.8,0-4.1,0-8.2,0-12.3,0-.4.2-.8.4-1,1-1,2-1.9,3-2.9,2.7-2.9,5.5-5.5,8.2-8.4.8-.8,1.5-1.1,2.6-1,6.6,0,13.1,0,19.7,0,.9,0,1,0,1,1,0,10.3,0,20.6,0,30.9,0,0,.2,0,.2,0Z"
                    />
                    <motion.path 
                      fill="transparent"
                      stroke="#ff4d00"
                      strokeWidth="1"
                      initial={{ pathLength: 0, fill: "transparent" }}
                      animate={{ 
                        pathLength: progress / 100,
                        fill: "transparent"
                      }}
                      transition={{ 
                        pathLength: { duration: 0.1, ease: "linear" }
                      }}
                      d="M38.9,34.6C10,15.1-1.5,34.9.2,0h47c-1.7,2.5-8.5,7.1-8.3,9.6.3,8.3,0,16.7,0,25Z"
                    />
                  </motion.svg>
                </motion.div>

                {/* Progress Bar */}
                <div className="mt-12 flex flex-col items-center w-64">
                  <div className="flex justify-between w-full mb-3 font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-beige/50">
                    <span>Loading</span>
                    <span className="text-lava">{Math.floor(progress)}%</span>
                  </div>
                  <div className="w-full h-[2px] bg-beige/10 relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-lava shadow-[0_0_10px_#ff4d00]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subtitle and Button (Only shown when complete) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: phase === 'complete' ? 1 : 0, y: phase === 'complete' ? 0 : 40 }}
          transition={{ duration: 1, delay: phase === 'complete' ? 0.6 : 0, ease: [0.16, 1, 0.3, 1] }}
          className={`space-y-4 pt-6 md:pt-8 ${phase === 'complete' ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <h2 className="text-[clamp(1.2rem,4vw,3rem)] font-black uppercase tracking-tight leading-tight">
            <span className="text-beige">{t('hero.subtitle1')}</span><span className="text-lava">{t('hero.subtitle2')}</span><br/>
            <span className="text-lava">{t('hero.subtitle3')}</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: phase === 'complete' ? 1 : 0, y: phase === 'complete' ? 0 : 40 }}
          transition={{ duration: 1, delay: phase === 'complete' ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] }}
          className={`pt-12 md:pt-16 flex flex-col items-center gap-10 w-full ${phase === 'complete' ? 'pointer-events-auto' : 'pointer-events-none'}`}
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
