import { motion } from 'motion/react';

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
    <section className="border-y border-beige/10 relative overflow-hidden flex flex-col bg-dark mb-[25vh]">
      <div className="bg-lava relative overflow-hidden py-4 border-b border-dark/20 flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex w-max select-none"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {topItems.map((item, j) => (
                <div key={j} className="flex items-center shrink-0">
                  <span className={`text-[clamp(2.5rem,6vw,4rem)] font-black uppercase tracking-tighter shrink-0 px-8 md:px-16 ${item.stroke ? 'text-transparent text-stroke-dark' : 'text-dark'}`}>
                    {item.text}
                  </span>
                  <span className="text-dark/40 text-[clamp(2rem,5vw,3rem)] font-black uppercase shrink-0">///</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="bg-dark relative overflow-hidden py-4 flex">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex w-max select-none"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {bottomItems.map((item, j) => (
                <div key={j} className="flex items-center shrink-0">
                  <span className="font-mono text-[clamp(0.8rem,2vw,1.125rem)] font-bold text-beige/50 uppercase tracking-[0.1em] shrink-0 px-12 md:px-20">
                    {item}
                  </span>
                  <span className="text-lava/50 text-xl shrink-0">•</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
