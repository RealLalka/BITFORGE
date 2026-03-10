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
    },
    {
      id: 6,
      assetFolder: 'wave-messenger',
      tag1: t('cases.case6.tag1'),
      tag2: t('cases.case6.tag2'),
      title: t('cases.case6.title').split(' ').map((w, i) => i === 1 ? <span key={i}><br/>{w}</span> : ` ${w}`),
      desc: t('cases.case6.desc'),
      bg: 'bg-[#0c0c0c]',
      align: 'end'
    }
  ];

  return (
    <section className="bg-dark relative mb-[15vh] border-t border-beige/10">
      <div className="flex flex-col w-full">
        {cases.map((c, idx) => (
          <motion.div 
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-beige/10 min-h-0 lg:min-h-[80vh] relative group"
          >
            <Link to={`/case/${c.id}`} className="absolute inset-0 z-20"></Link>
            
            {/* Image Side */}
            <div className={`col-span-1 lg:col-span-7 relative overflow-hidden bg-[#050505] min-h-[300px] md:min-h-[400px] lg:min-h-0 ${c.align === 'end' ? 'lg:order-last lg:border-l border-beige/10' : 'lg:border-r border-beige/10'}`}>
              <img 
                src={`/assets/cases/${c.assetFolder}/hero-screenshot.png`}
                alt={c.title.toString()}
                className="absolute inset-0 w-full h-full object-cover opacity-100 lg:opacity-80 lg:group-hover:opacity-100 grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/case${c.id}/1200/800`;
                }}
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Logo Placeholder */}
              <div className="absolute top-8 right-8 w-16 h-16 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10">
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

            {/* Text Side */}
            <div className={`col-span-1 lg:col-span-5 flex flex-col justify-center p-6 md:p-12 lg:p-20 bg-dark relative z-10 ${c.align === 'end' ? 'lg:items-end lg:text-right' : ''}`}>
              <div className={`w-12 h-[2px] bg-lava mb-6 lg:mb-8 group-hover:w-full transition-all duration-700 ${c.align === 'end' ? 'ml-auto' : ''}`}></div>
              
              <div className={`flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8 ${c.align === 'end' ? 'lg:justify-end' : ''}`}>
                <span className="text-lava text-[9px] lg:text-[10px] font-mono uppercase tracking-widest border border-lava/30 px-2 lg:px-3 py-1">{c.tag1}</span>
                <span className="text-lava text-[9px] lg:text-[10px] font-mono uppercase tracking-widest border border-lava/30 px-2 lg:px-3 py-1">{c.tag2}</span>
              </div>
              
              <h3 className="text-[clamp(2rem,5vw,80px)] font-black text-beige uppercase leading-[0.9] tracking-tighter mb-6 lg:mb-8 group-hover:text-lava transition-colors duration-500">
                {c.title}
              </h3>
              
              <p className="font-mono text-beige/60 text-xs md:text-sm lg:text-base leading-relaxed max-w-lg">
                {c.desc}
              </p>
              
              <div className={`mt-8 lg:mt-12 flex items-center gap-4 text-lava font-mono text-xs lg:text-sm font-bold uppercase tracking-widest opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 ${c.align === 'end' ? 'lg:flex-row-reverse' : ''}`}>
                <span>{t('cases.viewProject', 'View Project')}</span>
                <span className={`text-xl ${c.align === 'end' ? 'rotate-180' : ''}`}>→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
