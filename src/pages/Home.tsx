import Hero from '../components/Hero';
import Ribbons from '../components/Ribbons';
import CasesPreview from '../components/CasesPreview';
import Metrics from '../components/Metrics';
import Clients from '../components/Clients';
import Expertise from '../components/Expertise';
import Pipeline from '../components/Pipeline';
import Team from '../components/Team';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <Ribbons />
      <CasesPreview />
      
      <section className="bg-dark py-24 md:py-48 relative z-10 flex flex-col items-center justify-center px-4 text-center mb-[15vh] md:mb-[20vh]">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,6vw,90px)] font-black uppercase text-beige tracking-tighter mb-8 md:mb-12 cursor-default leading-[1.1]"
        >
          {t('cta.title1')}<br/><span className="text-lava">{t('cta.title2')}</span>
        </motion.h2>
        <div className="w-16 md:w-24 h-px bg-lava/50 mb-8 md:mb-12"></div>
        <Link to="/portfolio" className="linear-btn bg-transparent">
          {t('cta.btn')}
        </Link>
      </section>

      <Metrics />
      <Clients />
      <Expertise />
      <Pipeline />
      <Team />
    </>
  );
}
