import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Clients() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const clients = ['AVITO', 'YANDEX', 'SBER', 'T-BANK', 'VK', 'OZON'];
  const hiddenClients = ['MAIL.RU', 'MTS', 'MEGAFON', 'TELE2', 'KASPERSKY', 'ALFA'];

  return (
    <section className="bg-dark flex flex-col justify-center relative z-10 px-6 md:px-12 mb-[10vh] md:mb-[15vh] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, #0f0f0f 20%, #0f0f0f 80%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, #0f0f0f 20%, #0f0f0f 80%, transparent)' }}></div>

      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,6vw,90px)] font-black uppercase text-beige tracking-tighter mb-12 md:mb-20 text-center leading-none"
        >
          {t('clients.title1')}<span className="text-lava">{t('clients.title2')}</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-6 w-full">
          {clients.map((client, i) => (
            <motion.div 
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square bg-dark border border-beige/20 flex items-center justify-center hover:border-lava/50 hover:bg-beige/[0.02] hover:shadow-[0_0_20px_rgba(255,77,0,0.1)] transition-all duration-300 group cursor-default backdrop-blur-sm"
            >
              <span className="font-black text-sm sm:text-base text-beige/50 uppercase tracking-widest group-hover:text-beige transition-colors">{client}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-6 w-full overflow-hidden mt-4 sm:mt-6 md:mt-6"
        >
          {hiddenClients.map((client) => (
            <div key={client} className="aspect-square bg-dark border border-beige/20 flex items-center justify-center hover:border-lava/50 hover:bg-beige/[0.02] hover:shadow-[0_0_20px_rgba(255,77,0,0.1)] transition-all duration-300 group cursor-default backdrop-blur-sm">
              <span className="font-black text-sm sm:text-base text-beige/50 uppercase tracking-widest group-hover:text-beige transition-colors">{client}</span>
            </div>
          ))}
        </motion.div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="mt-12 md:mt-16 w-14 h-14 md:w-16 md:h-16 border border-beige/20 flex items-center justify-center text-beige/50 hover:text-lava hover:border-lava transition-all duration-500 cursor-pointer bg-transparent outline-none group hover:shadow-[0_0_20px_rgba(255,77,0,0.2)]"
        >
          <ChevronDown size={32} className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
        </button>
      </div>
    </section>
  );
}
