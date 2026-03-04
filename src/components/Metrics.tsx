import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export default function Metrics() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [m1, setM1] = useState(0);
  const [m2, setM2] = useState(0);
  const [m3, setM3] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      const start = performance.now();
      
      const animate = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setM1(Math.floor(50 * ease));
        setM2(99.9 * ease);
        setM3(Math.floor(15 * ease));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="bg-beige text-dark py-12 md:py-24 relative z-10 mb-[10vh] md:mb-[15vh]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col items-center py-10 md:py-12 border-b md:border-b-0 md:border-r border-dark/20 relative px-4 text-center hover:bg-dark/[0.03] transition-colors duration-500"
        >
          <div className="flex items-baseline mb-2">
            <span className="text-[clamp(4rem,8vw,120px)] font-black leading-none tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>{m1}</span>
            <span className="text-[clamp(2rem,4vw,60px)] font-mono font-black text-lava leading-none ml-1 md:ml-2">+</span>
          </div>
          <p className="font-mono font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-dark/80 mt-2 md:mt-4">{t('metrics.m1')}</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
          className="flex flex-col items-center py-10 md:py-12 border-b md:border-b-0 md:border-r border-dark/20 relative px-4 text-center hover:bg-dark/[0.03] transition-colors duration-500"
        >
          <div className="flex items-baseline mb-2">
            <span className="text-[clamp(4rem,8vw,120px)] font-black leading-none tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>{m2.toFixed(1)}</span>
            <span className="text-[clamp(2rem,4vw,60px)] font-mono font-black text-lava leading-none ml-1 md:ml-2">%</span>
          </div>
          <p className="font-mono font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-dark/80 mt-2 md:mt-4">{t('metrics.m2')}</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center py-10 md:py-12 relative px-4 text-center hover:bg-dark/[0.03] transition-colors duration-500"
        >
          <div className="flex items-baseline mb-2">
            <span className="text-[clamp(4rem,8vw,120px)] font-black leading-none tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>{m3}</span>
            <span className="text-[clamp(2rem,4vw,60px)] font-mono font-black text-lava leading-none ml-1 md:ml-2">M+</span>
          </div>
          <p className="font-mono font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-dark/80 mt-2 md:mt-4">{t('metrics.m3')}</p>
        </motion.div>
      </div>
    </section>
  );
}
