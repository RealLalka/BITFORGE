import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function Pipeline() {
  const { t } = useTranslation();
  const steps = t('pipeline.steps', { returnObjects: true }) as Array<{title: string, desc: string}>;
  const safeSteps = Array.isArray(steps) ? steps : [];

  return (
    <section className="bg-dark px-6 md:px-12 relative z-10 flex items-center justify-center mb-16 md:mb-32 py-12 md:py-24">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-40 items-start w-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3 lg:sticky lg:top-40"
        >
          <h2 className="text-[clamp(2rem,5vw,75px)] font-black uppercase leading-[0.9] text-beige tracking-tighter mb-6 md:mb-8 cursor-default">
            {t('pipeline.title1')} <br className="hidden md:block"/>{t('pipeline.title2')}
          </h2>
          <p className="font-mono text-beige/50 text-xs sm:text-sm leading-relaxed max-w-sm">
            {t('pipeline.desc')}
          </p>
        </motion.div>
        
        <div className="lg:w-2/3 relative mt-8 lg:mt-0">
          <div className="absolute left-[15px] top-6 bottom-6 w-px bg-lava/20"></div>
          
          <div className="space-y-32 md:space-y-64">
            {safeSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                className="relative flex items-start pl-16 md:pl-24 group"
              >
                <div className="absolute left-[-1px] top-0 flex items-center justify-center bg-dark py-1">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#ff4d00" strokeWidth="1.5">
                    <motion.circle 
                      cx="16" cy="16" r="14" 
                      initial={{ strokeDashoffset: 100, strokeDasharray: 100 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.circle 
                      cx="16" cy="16" r="4" fill="#ff4d00" 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3 md:mb-4">
                    <span className="bg-lava text-dark px-2 py-1 text-[9px] md:text-[10px] font-black uppercase shadow-[0_0_15px_rgba(255,77,0,0.2)]">0{idx + 1}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-beige tracking-tighter transition-colors duration-300">{step.title}</h3>
                  </div>
                  <p className="font-mono text-beige/60 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
