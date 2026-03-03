import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait a bit before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] bg-dark flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-8">
        <div className="w-full h-[2px] bg-beige/10 relative overflow-hidden mb-8">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-lava"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
          />
        </div>
        
        <div className="flex justify-between w-full font-mono text-xs uppercase tracking-[0.3em] font-bold">
          <span className="text-beige/50">SYSTEM INITIALIZATION</span>
          <span className="text-lava">{Math.round(progress)}%</span>
        </div>
        
        <div className="mt-16 relative w-32 h-32 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-beige/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute inset-4 border border-lava/30 rounded-full"
          />
          <span className="font-black text-2xl tracking-tighter text-beige">AIS</span>
        </div>
      </div>
    </motion.div>
  );
}
