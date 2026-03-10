import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Clients() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const allClients = [
    { name: 'Da Vinci Consult', logo: '/assets/clients/Da Vinci Consult.svg' },
    { name: 'SmartTechno', logo: '/assets/clients/SmartTechno.svg' }
  ];

  const visibleClients = allClients.slice(0, 6);
  const hiddenClients = allClients.slice(6);

  return (
    <section className="bg-dark flex flex-col justify-center relative z-10 px-6 md:px-12 mb-16 md:mb-32 overflow-hidden">
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
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-6 w-full">
          {visibleClients.map((client, i) => (
            <motion.div 
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(16.666%-1.25rem)] aspect-square bg-dark border border-beige/20 flex items-center justify-center hover:border-lava/50 hover:bg-beige/[0.02] hover:shadow-[0_0_20px_rgba(255,77,0,0.1)] transition-all duration-300 group cursor-default backdrop-blur-sm p-6"
            >
              <div 
                className="w-full h-full bg-beige/50 group-hover:bg-beige transition-colors duration-300"
                style={{
                  WebkitMaskImage: `url('${encodeURI(client.logo)}')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('${encodeURI(client.logo)}')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
                title={client.name}
              />
            </motion.div>
          ))}
        </div>

        {hiddenClients.length > 0 && (
          <>
            <motion.div 
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-6 w-full overflow-hidden mt-4 sm:mt-6 md:mt-6"
            >
              {hiddenClients.map((client) => (
                <div key={client.name} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(16.666%-1.25rem)] aspect-square bg-dark border border-beige/20 flex items-center justify-center hover:border-lava/50 hover:bg-beige/[0.02] hover:shadow-[0_0_20px_rgba(255,77,0,0.1)] transition-all duration-300 group cursor-default backdrop-blur-sm p-6">
                  <div 
                    className="w-full h-full bg-beige/50 group-hover:bg-beige transition-colors duration-300"
                    style={{
                      WebkitMaskImage: `url('${encodeURI(client.logo)}')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('${encodeURI(client.logo)}')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                    title={client.name}
                  />
                </div>
              ))}
            </motion.div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="mt-12 md:mt-16 w-14 h-14 md:w-16 md:h-16 border border-beige/20 flex items-center justify-center text-beige/50 hover:text-lava hover:border-lava transition-all duration-500 cursor-pointer bg-transparent outline-none group hover:shadow-[0_0_20px_rgba(255,77,0,0.2)]"
            >
              <ChevronDown size={32} className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
