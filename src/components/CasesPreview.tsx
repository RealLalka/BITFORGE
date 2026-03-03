import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CasesPreview() {
  const { t } = useTranslation();

  const cases = [
    {
      id: 1,
      assetFolder: 'young-design',
      tag1: t('cases.case1.tag1'),
      tag2: t('cases.case1.tag2'),
      title: t('cases.case1.title').split(' ').map((w, i) => i === 1 ? <span key={i}><br/>{w}</span> : ` ${w}`),
      desc: t('cases.case1.desc'),
      bg: 'bg-dark',
      align: 'start'
    },
    {
      id: 2,
      assetFolder: 'salavpay',
      tag1: t('cases.case2.tag1'),
      tag2: t('cases.case2.tag2'),
      title: t('cases.case2.title').split(' ').map((w, i) => i === 1 ? <span key={i}><br/>{w}</span> : ` ${w}`),
      desc: t('cases.case2.desc'),
      bg: 'bg-[#0c0c0c]',
      align: 'end'
    },
    {
      id: 3,
      assetFolder: 'pandora',
      tag1: t('cases.case3.tag1'),
      tag2: t('cases.case3.tag2'),
      title: t('cases.case3.title').split(' ').map((w, i) => i === 1 ? <span key={i}><br/>{w}</span> : ` ${w}`),
      desc: t('cases.case3.desc'),
      bg: 'bg-dark',
      align: 'start'
    },
    {
      id: 4,
      assetFolder: 'forex-binary',
      tag1: t('cases.case4.tag1'),
      tag2: t('cases.case4.tag2'),
      title: t('cases.case4.title').split(' ').map((w, i) => i === 1 ? <span key={i}><br/>{w}</span> : ` ${w}`),
      desc: t('cases.case4.desc'),
      bg: 'bg-[#0c0c0c]',
      align: 'end'
    },
    {
      id: 5,
      assetFolder: 'financial-dashboard',
      tag1: t('cases.case5.tag1'),
      tag2: t('cases.case5.tag2'),
      title: t('cases.case5.title').split(' ').map((w, i) => i === 1 ? <span key={i}><br/>{w}</span> : ` ${w}`),
      desc: t('cases.case5.desc'),
      bg: 'bg-dark',
      align: 'start'
    }
  ];

  return (
    <section className="bg-dark relative mb-[25vh]">
      <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar gap-4 px-6 md:px-0 pb-12 md:pb-0">
        {cases.map((c, idx) => (
          <motion.div 
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: idx * 0.1 }}
            className={`md:sticky md:top-0 flex-none w-[90vw] md:w-full snap-center bg-transparent md:${c.bg} relative h-[75vh] md:h-[100svh] flex items-center justify-center p-0 border-t border-beige/5 shadow-[0_-20px_40px_rgba(15,15,15,0.95)]`}
            style={{ zIndex: idx + 1 }}
          >
            <div className={`w-full h-full md:px-12 lg:px-20 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center ${c.align === 'start' ? 'justify-start' : 'justify-end'} relative`}>
              
              <div className={`absolute inset-0 ${c.align === 'start' ? 'md:left-[35%] lg:left-[40%] md:right-12 lg:right-20' : 'md:right-[35%] lg:right-[40%] md:left-12 lg:left-20'} md:top-12 md:bottom-12 bg-[#0a0a0a] border border-beige/10 overflow-hidden group-hover:border-lava/40 transition-colors duration-500 z-0 shadow-2xl rounded-sm`}>
                <img 
                  src={`/assets/cases/${c.assetFolder}/hero-screenshot.png`}
                  alt={c.title.toString()}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/case${c.id}/1200/800`;
                  }}
                />
                
                {/* Logo Placeholder */}
                <div className="absolute top-8 right-8 w-16 h-16 opacity-100 transition-opacity duration-500 z-20">
                  <img 
                    src={`/assets/cases/${c.assetFolder}/logo.svg`} 
                    alt="Logo" 
                    className="w-full h-full object-contain drop-shadow-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>

              <Link to={`/case/${c.id}`} className={`relative z-10 w-full md:w-[50%] lg:w-[45%] linear-card bg-dark/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] mt-auto md:mt-0 mb-6 md:mb-0 group ${c.align === 'end' ? 'md:text-right flex flex-col md:items-end' : ''}`}>
                <div className="w-12 h-[2px] bg-lava mb-4 md:mb-6 group-hover:w-24 transition-all duration-500"></div>
                <div className="space-y-4 md:space-y-6 w-full">
                  <div className={`flex flex-wrap gap-2 md:gap-3 ${c.align === 'end' ? 'md:justify-end' : ''}`}>
                    <span className="text-lava text-[9px] md:text-[10px] font-mono uppercase tracking-widest border border-lava/30 px-2 py-1">{c.tag1}</span>
                    <span className="text-lava text-[9px] md:text-[10px] font-mono uppercase tracking-widest border border-lava/30 px-2 py-1">{c.tag2}</span>
                  </div>
                  <h3 className="text-[clamp(2rem,4vw,60px)] font-black text-beige uppercase leading-[1.1] tracking-tighter">{c.title}</h3>
                  <p className={`font-mono text-beige/60 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed ${c.align === 'end' ? 'md:ml-auto' : ''}`}>{c.desc}</p>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
