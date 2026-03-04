import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { User } from 'lucide-react';

export default function Team() {
  const { t } = useTranslation();
  const members = t('team.members', { returnObjects: true }) as Array<{name: string, role: string}>;
  const safeMembers = Array.isArray(members) ? members : [];

  return (
    <section className="bg-dark px-0 md:px-12 flex flex-col justify-center relative z-10 mb-[6vh] md:mb-[10vh]">
      <div className="max-w-[1400px] mx-auto text-left md:text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24 px-6 md:px-0"
        >
          <h2 className="text-[clamp(2.5rem,6vw,90px)] font-black uppercase text-beige tracking-tighter leading-none cursor-default mb-4">
            {t('team.title')}
          </h2>
          <p className="font-mono text-lava text-sm md:text-base uppercase tracking-widest font-bold">
            {t('team.subtitle')}
          </p>
        </motion.div>
        
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar gap-6 md:gap-12 w-full px-6 md:px-0 pb-8 md:pb-0">
          {safeMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-start md:items-center flex-none w-[75vw] sm:w-[45vw] md:w-auto snap-center group cursor-default"
            >
              <div className="aspect-[3/4] w-full border border-dashed border-beige/20 flex items-center justify-center mb-6 bg-dark group-hover:border-lava/50 group-hover:shadow-[0_0_20px_rgba(255,77,0,0.1)] transition-all duration-500">
                <User size={48} className="text-beige/20 transition-colors duration-500 group-hover:scale-110 group-hover:text-lava/50" />
              </div>
              <h3 className="text-base md:text-xl font-black uppercase text-beige tracking-tight transition-colors duration-300">{member.name}</h3>
              <p className="font-mono text-lava text-[10px] md:text-xs uppercase tracking-widest mt-1.5 md:mt-2 font-bold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
