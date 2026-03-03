import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const { t } = useTranslation();

  const cases = [
    {
      id: 1,
      assetFolder: 'young-design',
      tag1: t('cases.case1.tag1'),
      tag2: t('cases.case1.tag2'),
      title: t('cases.case1.title'),
      desc: t('cases.case1.desc')
    },
    {
      id: 2,
      assetFolder: 'salavpay',
      tag1: t('cases.case2.tag1'),
      tag2: t('cases.case2.tag2'),
      title: t('cases.case2.title'),
      desc: t('cases.case2.desc')
    },
    {
      id: 3,
      assetFolder: 'pandora',
      tag1: t('cases.case3.tag1'),
      tag2: t('cases.case3.tag2'),
      title: t('cases.case3.title'),
      desc: t('cases.case3.desc')
    },
    {
      id: 4,
      assetFolder: 'forex-binary',
      tag1: t('cases.case4.tag1'),
      tag2: t('cases.case4.tag2'),
      title: t('cases.case4.title'),
      desc: t('cases.case4.desc')
    },
    {
      id: 5,
      assetFolder: 'financial-dashboard',
      tag1: t('cases.case5.tag1'),
      tag2: t('cases.case5.tag2'),
      title: t('cases.case5.title'),
      desc: t('cases.case5.desc')
    },
    {
      id: 6,
      assetFolder: 'wave-messenger',
      tag1: t('cases.case6.tag1'),
      tag2: t('cases.case6.tag2'),
      title: t('cases.case6.title'),
      desc: t('cases.case6.desc')
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 md:mb-24 text-center"
      >
        <h1 className="text-[clamp(3rem,8vw,120px)] font-black uppercase text-beige tracking-tighter leading-none mb-4">
          {t('portfolio.title')}
        </h1>
        <p className="font-mono text-beige/50 text-sm md:text-base uppercase tracking-widest">
          {t('portfolio.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {cases.map((c, idx) => (
          <motion.div 
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={`/case/${c.id}`} className="block group">
              <div className="aspect-[4/3] bg-[#0a0a0a] border border-beige/10 mb-6 relative overflow-hidden group-hover:border-lava/50 transition-colors duration-500">
                <img 
                  src={`/assets/cases/${c.assetFolder}/hero-screenshot.png`}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/case${c.id}/800/600`;
                  }}
                />
                
                {/* Logo Placeholder */}
                <div className="absolute top-6 right-6 w-12 h-12 opacity-100 transition-opacity duration-500 z-20">
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
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-lava text-[9px] font-mono uppercase tracking-widest border border-lava/30 px-2 py-1">{c.tag1}</span>
                <span className="text-lava text-[9px] font-mono uppercase tracking-widest border border-lava/30 px-2 py-1">{c.tag2}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-beige uppercase leading-tight tracking-tighter mb-3 group-hover:text-lava transition-colors duration-300">
                {c.title}
              </h3>
              
              <p className="font-mono text-beige/60 text-xs md:text-sm leading-relaxed line-clamp-3">
                {c.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
