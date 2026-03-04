import React, { useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform, PanInfo } from 'motion/react';

function DraggableRibbon({ children, baseVelocity = -0.05, className = "" }: { children: React.ReactNode, baseVelocity?: number, className?: string }) {
  const baseX = useMotionValue(0);
  const direction = useRef(baseVelocity > 0 ? 1 : -1);
  const speed = Math.abs(baseVelocity);
  const isDragging = useRef(false);

  useAnimationFrame((t, delta) => {
    if (isDragging.current) return;
    let moveBy = direction.current * speed * (delta / 16);
    let next = baseX.get() + moveBy;
    if (next <= -50) next += 50;
    if (next > 0) next -= 50;
    baseX.set(next);
  });

  const handlePanStart = () => {
    isDragging.current = true;
  };

  const handlePan = (e: any, info: PanInfo) => {
    const percentDelta = (info.delta.x / window.innerWidth) * 20;
    let next = baseX.get() + percentDelta;
    if (next <= -50) next += 50;
    if (next > 0) next -= 50;
    baseX.set(next);
  };

  const handlePanEnd = (e: any, info: PanInfo) => {
    isDragging.current = false;
    if (info.velocity.x > 100) direction.current = 1;
    else if (info.velocity.x < -100) direction.current = -1;
  };

  const x = useTransform(baseX, v => `${v}%`);

  return (
    <div className={`relative overflow-hidden flex ${className}`}>
      <motion.div 
        className="flex w-max select-none cursor-grab active:cursor-grabbing"
        style={{ x }}
        onPanStart={handlePanStart}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Ribbons() {
  const topItems = [
    { text: "MOBILE", stroke: false },
    { text: "WEB", stroke: true },
    { text: "AI/ML", stroke: false },
    { text: "BRANDING", stroke: true }
  ];

  const bottomItems = [
    "PYTHON", "DOCKER", "KUBERNETES", "REACT", "POSTGRESQL", "GOLANG"
  ];

  return (
    <section className="border-y border-beige/10 relative overflow-hidden flex flex-col bg-dark mb-[15vh]">
      <DraggableRibbon baseVelocity={-0.02} className="bg-lava py-4 border-b border-dark/20">
        {topItems.map((item, j) => (
          <div key={j} className="flex items-center shrink-0">
            <span className={`text-[clamp(2.5rem,6vw,4rem)] font-black uppercase tracking-tighter shrink-0 px-8 md:px-16 ${item.stroke ? 'text-transparent text-stroke-dark' : 'text-dark'}`}>
              {item.text}
            </span>
            <span className="text-dark/40 text-[clamp(2rem,5vw,3rem)] font-black uppercase shrink-0">///</span>
          </div>
        ))}
      </DraggableRibbon>

      <DraggableRibbon baseVelocity={0.015} className="bg-dark py-4">
        {bottomItems.map((item, j) => (
          <div key={j} className="flex items-center shrink-0">
            <span className="font-mono text-[clamp(0.8rem,2vw,1.125rem)] font-bold text-beige/80 uppercase tracking-[0.1em] shrink-0 px-12 md:px-20">
              {item}
            </span>
            <span className="text-lava/80 text-xl shrink-0">•</span>
          </div>
        ))}
      </DraggableRibbon>
    </section>
  );
}
