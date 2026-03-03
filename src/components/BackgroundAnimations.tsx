import { motion, useScroll, useTransform } from 'motion/react';

export default function BackgroundAnimations() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-[10%] left-[5%] opacity-[0.03] text-beige"
      >
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
          <path d="M50 0V100M0 50H100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
        </svg>
      </motion.div>

      <motion.div 
        style={{ y: y2, rotate: useTransform(rotate, r => -r) }}
        className="absolute top-[40%] right-[10%] opacity-[0.02] text-lava"
      >
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4"/>
          <path d="M10 10L90 90M10 90L90 10" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[20%] left-[20%] opacity-[0.03] text-beige"
      >
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,5 95,95 5,95" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <polygon points="50,20 80,80 20,80" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 2"/>
        </svg>
      </motion.div>
    </div>
  );
}
