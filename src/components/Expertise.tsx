import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function Expertise() {
  const { t } = useTranslation();
  const items = t('expertise.items', { returnObjects: true }) as Array<{title: string, desc: string}>;
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <section className="bg-dark relative mb-[10vh] md:mb-[15vh]">
      <div className="hidden md:flex sticky top-0 h-screen items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="text-[clamp(4rem,16vw,260px)] font-black uppercase text-beige/[0.04] select-none text-center leading-[0.8] tracking-tighter w-full whitespace-nowrap">
          {t('expertise.title')}
        </h2>
      </div>
      
      <div className="md:hidden text-center mb-16 px-6">
        <h2 className="text-[clamp(2.5rem,10vw,60px)] font-black uppercase text-beige tracking-tighter">{t('expertise.title')}</h2>
      </div>

      <div className="relative z-10 md:-mt-[100vh]">
        {safeItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="min-h-[70svh] md:min-h-[100svh] w-full flex items-center justify-center text-center px-4 relative group"
          >
            <div className="relative z-10 max-w-4xl w-full mx-auto p-0 cursor-default">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(150px,35vw,400px)] font-black text-lava/[0.08] leading-none select-none z-[-1] pointer-events-none group-hover:scale-105 transition-transform duration-700 w-full">
                0{idx + 1}
              </div>
              
              <h3 className="text-[clamp(2.5rem,6vw,90px)] font-black uppercase text-beige mb-6 md:mb-8 tracking-tighter leading-none transition-colors duration-500">
                {item.title}
              </h3>
              <p className="font-mono text-beige/70 text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
