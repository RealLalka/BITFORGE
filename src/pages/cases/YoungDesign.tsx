import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function YoungDesign({ caseData, assetFolder }: { caseData: any, assetFolder: string }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden selection:bg-lava selection:text-white">
      {/* Animated Sun Background */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] opacity-20 pointer-events-none mix-blend-screen"
      >
        <img 
          src={`/assets/cases/${assetFolder}/sun.png`} 
          alt="Sun Background" 
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </motion.div>

      {/* Purple Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-lava mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-lava mix-blend-screen filter blur-[200px] opacity-10"></div>
      </div>

      <div className="pt-32 pb-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-beige/50 hover:text-lava font-mono text-xs uppercase tracking-widest mb-12 transition-colors">
            <ArrowLeft size={16} /> {t('case.back')}
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-lava text-[10px] font-mono uppercase tracking-widest border border-lava/30 px-3 py-1.5 backdrop-blur-sm bg-lava/5">{caseData.tag1}</span>
              <span className="text-lava text-[10px] font-mono uppercase tracking-widest border border-lava/30 px-3 py-1.5 backdrop-blur-sm bg-lava/5">{caseData.tag2}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
              <img 
                src={`/assets/cases/${assetFolder}/logo.png`} 
                alt="Young Design Logo" 
                className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,77,0,0.3)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `/assets/cases/${assetFolder}/logo.svg`;
                }}
              />
              <h1 className="text-[clamp(2.5rem,6vw,80px)] font-black uppercase text-white tracking-tighter leading-[1] drop-shadow-lg">
                {caseData.title}
              </h1>
            </div>
            <p className="font-mono text-beige/80 text-sm md:text-xl leading-relaxed max-w-3xl border-l-2 border-lava pl-6">
              {caseData.desc}
            </p>
          </motion.div>
        </div>

        {/* Floating Video Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-[1400px] mx-auto px-4 md:px-8 mb-32"
        >
          <div className="w-full aspect-video md:aspect-[21/9] bg-[#0a0a0a] border border-white/5 relative overflow-hidden shadow-[0_30px_100px_rgba(255,77,0,0.15)] group">
            <video 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
              autoPlay 
              loop 
              muted 
              playsInline
              src={`/assets/cases/${assetFolder}/demo-video.mp4`}
              onError={(e) => {
                const target = e.target as HTMLVideoElement;
                target.style.display = 'none';
                const img = document.createElement('img');
                img.src = `/assets/cases/${assetFolder}/hero-screenshot.png`;
                img.className = "absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105";
                target.parentNode?.insertBefore(img, target);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-3 space-y-16">
            <section>
              <h2 className="text-3xl font-black uppercase text-white tracking-tight mb-8 flex items-center gap-4">
                <span className="w-12 h-[3px] bg-lava shadow-[0_0_15px_rgba(255,77,0,0.5)]"></span>
                {t('case.overview')}
              </h2>
              <div className="font-mono text-beige/70 text-base leading-relaxed space-y-8">
                {caseData.challenge && (
                  <div className="bg-white/[0.02] border border-white/5 p-8 hover:border-lava/30 transition-colors">
                    <h4 className="text-lava font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-lava animate-pulse"></span>
                      {t('case.challenge')}
                    </h4>
                    <p>{caseData.challenge}</p>
                  </div>
                )}
                {caseData.solution && (
                  <div className="bg-white/[0.02] border border-white/5 p-8 hover:border-lava/30 transition-colors">
                    <h4 className="text-lava font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-lava"></span>
                      {t('case.solution')}
                    </h4>
                    <p>{caseData.solution}</p>
                  </div>
                )}
                {caseData.result && (
                  <div className="bg-white/[0.02] border border-white/5 p-8 hover:border-lava/30 transition-colors">
                    <h4 className="text-lava font-bold uppercase tracking-widest mb-3 text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-lava"></span>
                      {t('case.result')}
                    </h4>
                    <p>{caseData.result}</p>
                  </div>
                )}
                {caseData.overview && (
                  <div className="mt-12 pt-12 border-t border-white/10">
                    <h3 className="text-xl font-black uppercase text-white tracking-tight mb-6">{t('case.tech')}</h3>
                    <div className="whitespace-pre-line text-beige/60">{caseData.overview}</div>
                  </div>
                )}
              </div>
            </section>


          </div>

          <div className="space-y-12">
            <section className="bg-white/[0.02] border border-white/5 p-8 sticky top-32 backdrop-blur-md">
              <h3 className="text-xl font-black uppercase text-white tracking-tight mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-lava"></span>
                {t('case.stack')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis'].map((tech) => (
                  <span key={tech} className="font-mono text-xs text-beige/80 uppercase tracking-widest border border-white/10 px-4 py-2 bg-black/50 hover:border-lava hover:text-lava transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
