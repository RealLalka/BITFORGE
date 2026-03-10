import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import React, { useRef } from 'react';

const KineticTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden mb-16 md:mb-24">
      <motion.h2 
        initial={{ y: "100%", opacity: 0, rotateZ: 5 }}
        whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(1.75rem,8vw,100px)] md:text-[clamp(3rem,8vw,100px)] font-black uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 origin-left"
      >
        {children}
      </motion.h2>
    </div>
  );
};

const ContentSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`py-24 md:py-40 border-t border-white/10 ${className}`}>
    {children}
  </div>
);

const ColorSwatch = ({ color, name, hex }: { color: string, name: string, hex: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "50px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col gap-4 group cursor-pointer"
  >
    <div className={`h-32 md:h-48 rounded-[20px] ${color} shadow-2xl relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
    </div>
    <div>
      <div className="text-white font-bold text-lg transition-colors group-hover:text-[#D900FF]">{name}</div>
      <div className="text-white/50 font-mono text-sm uppercase transition-colors group-hover:text-white/80">{hex}</div>
    </div>
  </motion.div>
);

const ImageShowcase = ({ src, title, desc, reverse = false }: { src: string, title: string, desc: string, reverse?: boolean }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], [50, -50]);
  const imgY = useTransform(smoothProgress, [0, 1], [-30, 30]);

  return (
    <div className={`py-24 md:py-32 relative border-t border-white/10 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
      <div ref={ref} className="relative w-full lg:w-1/2 flex items-center justify-center overflow-visible">
        <motion.img 
          style={{ y: imgY }} 
          src={src} 
          alt="Showcase" 
          className="w-full max-w-lg h-auto object-contain mix-blend-screen opacity-90" 
        />
      </div>
      <motion.div 
        style={{ y }}
        className="relative z-20 w-full lg:w-1/2"
      >
        <h3 className="text-[clamp(1.5rem,6vw,60px)] font-black uppercase tracking-tighter mb-6 font-neue">{title}</h3>
        <p className="text-white/70 text-lg md:text-2xl font-light leading-relaxed">{desc}</p>
      </motion.div>
    </div>
  );
};

export default function YoungDesign({ caseData, assetFolder }: { caseData: any, assetFolder: string }) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Flower - Top Right, moves up slowly
  const y1 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, 90]);
  const scale1 = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 0.9, 1]);

  // Bolt - Middle Left, moves down slowly
  const y2 = useTransform(smoothProgress, [0, 1], [0, 400]);
  const x2 = useTransform(smoothProgress, [0, 1], [0, 100]);
  const scale2 = useTransform(smoothProgress, [0, 0.5, 1], [0.7, 0.8, 0.9]);

  // Sun - Bottom Right, rotates in place and moves up slightly
  const y3 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const scale3 = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#000000] text-white relative overflow-hidden selection:bg-[#D900FF] selection:text-white font-sans">
      
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#800AF7] mix-blend-screen filter blur-[150px] opacity-20 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#0089F7] mix-blend-screen filter blur-[200px] opacity-10 rounded-full"></div>
      </div>

      {/* Floating Assets */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.img style={{ y: y1, rotate: rotate1, scale: scale1 }} src={`/assets/cases/${assetFolder}/Flower.png`} alt="" className="absolute top-[10%] right-[5%] w-[25vw] max-w-[350px] opacity-30 mix-blend-screen filter blur-[1px]" />
        <motion.img style={{ y: y2, x: x2, scale: scale2 }} src={`/assets/cases/${assetFolder}/New-Bolt-2-scaled.png`} alt="" className="absolute top-[40%] left-[2%] w-[20vw] max-w-[250px] opacity-20 mix-blend-screen" />
        <motion.img style={{ y: y3, scale: scale3 }} animate={{ rotate: 360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }} src={`/assets/cases/${assetFolder}/Sun.png`} alt="" className="absolute bottom-[-10%] right-[-10%] w-[35vw] max-w-[500px] opacity-15 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="max-w-5xl">
            <Link to="/portfolio" className="inline-flex items-center gap-3 text-white font-mono text-xs md:text-sm uppercase tracking-widest hover:text-[#D900FF] transition-colors px-6 py-3 border border-white/20 hover:border-[#D900FF]/50 bg-[#000000]/50 backdrop-blur-sm mb-16 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> <span className="hidden sm:inline">{t('case.back')}</span><span className="sm:hidden">{t('ui.back')}</span>
            </Link>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-row items-center gap-6 mb-8">
                <img src={`/assets/cases/${assetFolder}/logo.png`} alt="Young Design" className="h-16 md:h-24 w-auto object-contain" />
                <h1 className="text-[clamp(2.5rem,6vw,90px)] font-black uppercase tracking-tighter leading-[0.9] m-0 font-neue">
                  Young <span className="text-[#D900FF]">Design</span>
                </h1>
              </div>
              <p className="text-xl md:text-3xl text-white/60 font-light max-w-3xl leading-relaxed">
                {t('cases.youngDesign.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Hero Video/Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-[1600px] mx-auto px-6 md:px-12 mb-32"
        >
          <div className="relative rounded-[30px] overflow-hidden border border-white/20 shadow-[0_20px_80px_rgba(217,0,255,0.15)] aspect-[3/4] md:aspect-video bg-[#101015]">
            <video 
              className="absolute inset-0 w-full h-full object-cover scale-110"
              autoPlay loop muted playsInline
              src={`/assets/cases/${assetFolder}/demo-video.mp4`}
              onError={(e) => {
                const target = e.target as HTMLVideoElement;
                target.style.display = 'none';
                const img = document.createElement('img');
                img.src = `/assets/cases/${assetFolder}/hero-screenshot.png`;
                img.className = "absolute inset-0 w-full h-full object-cover";
                target.parentNode?.insertBefore(img, target);
              }}
            />
            <div className="absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          {/* 1. Tech Stack */}
          <ContentSection>
            <KineticTitle>{t('cases.youngDesign.tech.title')}</KineticTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-12 text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                <div className="group transition-colors duration-300 hover:text-white">
                  <h4 className="text-xl md:text-3xl text-white block mb-4 font-bold group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.tech.core')}</h4> 
                  <p>{t('cases.youngDesign.tech.coreDesc')}</p>
                </div>
                <div className="group transition-colors duration-300 hover:text-white">
                  <h4 className="text-xl md:text-3xl text-white block mb-4 font-bold group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.tech.framework')}</h4> 
                  <p>{t('cases.youngDesign.tech.frameworkDesc')}</p>
                </div>
                <div className="group transition-colors duration-300 hover:text-white">
                  <h4 className="text-xl md:text-3xl text-white block mb-4 font-bold group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.tech.integrations')}</h4> 
                  <p>{t('cases.youngDesign.tech.integrationsDesc')}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 content-start">
                {['WordPress', 'BeTheme', 'Glassmorphism', 'CSS Variables'].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-6 py-3 rounded-full border border-white/20 text-sm font-mono uppercase tracking-widest bg-white/5 hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ContentSection>

          {/* 2. Visual Language */}
          <ContentSection>
            <KineticTitle>{t('cases.youngDesign.visual.title')}</KineticTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-12 text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                <div className="group hover:text-white transition-colors duration-300">
                  <h4 className="text-lg md:text-3xl text-white block mb-4 font-bold group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.visual.glassmorphism')}</h4> 
                  <p className="text-base md:text-2xl">{t('cases.youngDesign.visual.glassmorphismDesc')}</p>
                </div>
                <div className="group hover:text-white transition-colors duration-300">
                  <h4 className="text-lg md:text-3xl text-white block mb-4 font-bold group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.visual.darkLinear')}</h4> 
                  <p className="text-base md:text-2xl">{t('cases.youngDesign.visual.darkLinearDesc')}</p>
                </div>
              </div>
              <div className="space-y-12 text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                <div className="group hover:text-white transition-colors duration-300">
                  <h4 className="text-lg md:text-3xl text-white block mb-4 font-bold group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.visual.floatingUI')}</h4> 
                  <p className="text-base md:text-2xl">{t('cases.youngDesign.visual.floatingUIDesc')}</p>
                </div>
                <div className="group hover:text-white transition-colors duration-300">
                  <h4 className="text-lg md:text-3xl text-white block mb-4 font-bold group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.visual.negativeSpace')}</h4> 
                  <p className="text-base md:text-2xl">{t('cases.youngDesign.visual.negativeSpaceDesc')}</p>
                </div>
              </div>
            </div>
          </ContentSection>

          <ImageShowcase 
            src={`/assets/cases/${assetFolder}/Glass-Materials-1-1904x992-1.png`}
            title={t('cases.youngDesign.details.title')}
            desc={t('cases.youngDesign.details.desc')}
          />

          {/* 3. Colors */}
          <ContentSection>
            <KineticTitle>{t('cases.youngDesign.colors.title')}</KineticTitle>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
              <ColorSwatch color="bg-[#000000]" name="Primary Dark" hex="#000000" />
              <ColorSwatch color="bg-[#101015]" name="Surface Dark" hex="#101015" />
              <ColorSwatch color="bg-[#D900FF]" name="Magenta Accent" hex="#D900FF" />
              <ColorSwatch color="bg-[#800AF7]" name="Purple Action" hex="#800AF7" />
              <ColorSwatch color="bg-[#0089F7]" name="Electric Blue" hex="#0089F7" />
            </div>
          </ContentSection>

          {/* 4. Typography */}
          <ContentSection>
            <KineticTitle>{t('cases.youngDesign.typography.title')}</KineticTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div className="group cursor-default">
                <div className="text-sm text-white/50 font-mono uppercase tracking-widest mb-4 group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.typography.display')}</div>
                <div className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-6 group-hover:scale-[1.02] origin-left transition-transform duration-500 font-neue">Neue Machina</div>
                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors">{t('cases.youngDesign.typography.displayDesc')}</p>
              </div>
              <div className="group cursor-default">
                <div className="text-sm text-white/50 font-mono uppercase tracking-widest mb-4 group-hover:text-[#0089F7] transition-colors">{t('cases.youngDesign.typography.body')}</div>
                <div className="text-3xl md:text-5xl font-sans font-medium mb-6 group-hover:scale-[1.02] origin-left transition-transform duration-500">Golos Text</div>
                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors">{t('cases.youngDesign.typography.bodyDesc')}</p>
              </div>
            </div>
          </ContentSection>

          <ImageShowcase 
            src={`/assets/cases/${assetFolder}/Thunderbolt-1.png`}
            title={t('cases.youngDesign.uiux.title')}
            desc={t('cases.youngDesign.uiux.microDesc')}
            reverse={true}
          />

          {/* 5. UI/UX */}
          <ContentSection>
            <KineticTitle>{t('cases.youngDesign.uiux.title')}</KineticTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4 p-8 rounded-[24px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.uiux.forms')}</h4>
                <p className="text-white/70 text-lg font-light leading-relaxed group-hover:text-white/90 transition-colors">{t('cases.youngDesign.uiux.formsDesc')}</p>
              </div>
              <div className="space-y-4 p-8 rounded-[24px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.uiux.micro')}</h4>
                <p className="text-white/70 text-lg font-light leading-relaxed group-hover:text-white/90 transition-colors">{t('cases.youngDesign.uiux.microDesc')}</p>
              </div>
              <div className="space-y-4 p-8 rounded-[24px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-[#D900FF] transition-colors">{t('cases.youngDesign.uiux.nav')}</h4>
                <p className="text-white/70 text-lg font-light leading-relaxed group-hover:text-white/90 transition-colors">{t('cases.youngDesign.uiux.navDesc')}</p>
              </div>
            </div>
          </ContentSection>

        </div>

      </div>
    </div>
  );
}
