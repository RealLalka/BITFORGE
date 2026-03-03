import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import { useTranslation } from 'react-i18next';

type ServiceItem = { id: string; title: string; description: string; steps: { title: string; desc: string }[] };
type ServiceCategory = { id: string; title: string; desc: string; items: ServiceItem[] };

export default function ServicePage() {
  const { id } = useParams();
  const { openModal } = useModal();
  const { t } = useTranslation();
  
  const servicesData = t('servicesData', { returnObjects: true }) as ServiceCategory[];
  
  // Find the service
  let service: ServiceItem | null = null;
  let category: ServiceCategory | null = null;
  
  for (const cat of servicesData) {
    const found = cat.items.find(item => item.id === id);
    if (found) {
      service = found;
      category = cat;
      break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center text-beige font-mono">
        <div className="text-center">
          <h1 className="text-4xl font-black text-lava mb-4">404</h1>
          <p className="mb-8">{t('ui.notFound')}</p>
          <Link to="/" className="text-lava hover:underline">{t('ui.backHome')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-beige/50 hover:text-lava mb-12 transition-colors">
          <ArrowLeft size={16} /> {t('ui.back')}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-lava text-sm mb-4">{category?.title}</div>
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-beige mb-8 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-beige/70 leading-relaxed mb-16 max-w-3xl">
            {service.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-beige mb-10 flex items-center gap-4">
            <span className="w-8 h-8 bg-lava text-dark flex items-center justify-center text-sm">#</span>
            {t('ui.steps')}
          </h2>
          
          <div className="space-y-6">
            {service.steps.map((step, index) => (
              <div key={index} className="flex gap-6 p-6 border border-beige/10 bg-beige/[0.02] hover:border-lava/30 transition-colors">
                <div className="font-mono text-lava text-xl font-bold">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-black text-lg text-beige uppercase tracking-wide mb-2">{step.title}</h3>
                  <p className="text-beige/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 p-8 md:p-12 border border-lava/30 bg-lava/5 text-center"
        >
          <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-beige mb-4">{t('ui.ready')}</h3>
          <p className="text-beige/60 mb-8 max-w-xl mx-auto">{t('ui.leaveReq')}</p>
          <button onClick={() => openModal('contact')} className="linear-btn !py-4 !px-8 text-sm">
            {t('ui.contactUs')}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
