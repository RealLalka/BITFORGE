import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';

const assetFolderMap: Record<string, string> = {
  '1': 'financial-dashboard',
  '2': 'forex-binary',
  '3': 'pandora',
  '4': 'salavpay',
  '5': 'young-design',
  '6': 'financial-dashboard' // fallback
};

export default function CaseStudy() {
  const { t } = useTranslation();
  const { id } = useParams();
  
  const caseId = id || '1';
  const caseData = t(`cases.case${caseId}`, { returnObjects: true }) as any;
  const assetFolder = assetFolderMap[caseId] || 'financial-dashboard';

  if (!caseData || typeof caseData === 'string' || !caseData.title) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-black uppercase text-beige tracking-tighter mb-6">Кейс не найден</h1>
        <Link to="/portfolio" className="linear-btn">
          {t('case.back')}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-beige/50 hover:text-lava font-mono text-xs uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft size={16} /> {t('case.back')}
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-lava text-[10px] font-mono uppercase tracking-widest border border-lava/30 px-3 py-1.5">{caseData.tag1}</span>
            <span className="text-lava text-[10px] font-mono uppercase tracking-widest border border-lava/30 px-3 py-1.5">{caseData.tag2}</span>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <img 
              src={`/assets/cases/${assetFolder}/logo.svg`} 
              alt="Logo" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <h1 className="text-[clamp(2.5rem,6vw,80px)] font-black uppercase text-beige tracking-tighter leading-[1.1]">
              {caseData.title}
            </h1>
          </div>
          <p className="font-mono text-beige/70 text-sm md:text-lg leading-relaxed max-w-3xl">
            {caseData.desc}
          </p>
        </motion.div>
      </div>

      {/* Main Video/Image Area */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full aspect-video md:aspect-[21/9] bg-[#0a0a0a] border-y border-beige/10 relative overflow-hidden mb-24 flex items-center justify-center group"
      >
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          autoPlay 
          loop 
          muted 
          playsInline
          src={`/assets/cases/${assetFolder}/demo-video.mp4`}
          onError={(e) => {
            // Fallback to image if video fails
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            const img = document.createElement('img');
            img.src = `/assets/cases/${assetFolder}/hero-screenshot.png`;
            img.className = "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500";
            img.onerror = () => { img.src = `https://picsum.photos/seed/case${caseId}/1920/1080`; };
            target.parentNode?.insertBefore(img, target);
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-beige/20 pointer-events-none">
          <div className="w-20 h-20 rounded-full border border-beige/20 flex items-center justify-center group-hover:border-lava group-hover:text-lava transition-all duration-500 backdrop-blur-sm">
            <Play size={32} className="ml-2" />
          </div>
          <span className="mt-4 font-mono text-xs uppercase tracking-widest font-bold">{t('case.video')}</span>
        </div>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-black uppercase text-beige tracking-tight mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-lava"></span>
              {t('case.overview')}
            </h2>
            <div className="font-mono text-beige/60 text-sm leading-relaxed space-y-6">
              {caseData.challenge && (
                <div>
                  <h4 className="text-lava font-bold uppercase tracking-widest mb-2 text-xs">Задача:</h4>
                  <p>{caseData.challenge}</p>
                </div>
              )}
              {caseData.solution && (
                <div>
                  <h4 className="text-lava font-bold uppercase tracking-widest mb-2 text-xs">Решение:</h4>
                  <p>{caseData.solution}</p>
                </div>
              )}
              {caseData.result && (
                <div>
                  <h4 className="text-lava font-bold uppercase tracking-widest mb-2 text-xs">Результат:</h4>
                  <p>{caseData.result}</p>
                </div>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-beige tracking-tight mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-lava"></span>
              {t('case.gallery')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[4/3] bg-[#0a0a0a] border border-beige/10 relative overflow-hidden hover:border-lava/50 transition-colors duration-300 group">
                  <img 
                    src={i === 1 ? `/assets/cases/${assetFolder}/hero-screenshot.png` : `https://picsum.photos/seed/case${caseId}-${i}/800/600`}
                    alt={`Gallery ${i}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/case${caseId}-${i}/800/600`;
                    }}
                  />
                  <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section className="linear-card !p-8">
            <h3 className="text-lg font-black uppercase text-beige tracking-tight mb-6">{t('case.stack')}</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis'].map((tech) => (
                <span key={tech} className="font-mono text-[10px] text-beige/70 uppercase tracking-widest border border-beige/20 px-3 py-1.5 bg-dark">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
