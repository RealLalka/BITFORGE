import { useTranslation } from 'react-i18next';
import { X, Plus } from 'lucide-react';
import { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqModal() {
  const { t } = useTranslation();
  const { activeModal, closeModal, openModal } = useModal();
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      q: "Как быстро вы можете начать проект?",
      a: "После первичного созвона и подписания NDA, формирование команды и старт Discovery-фазы занимает от 3 до 7 рабочих дней в зависимости от сложности архитектуры."
    },
    {
      q: "Работаете ли вы по NDA?",
      a: "Да. Изоляция и конфиденциальность корпоративных данных — наш базовый стандарт. NDA подписывается до начала любого обмена технической информацией."
    },
    {
      q: "Какие методологии вы используете?",
      a: "Используем Agile-фреймворки (Scrum/Kanban) для продуктовой разработки, обеспечивая детерминированные спринты и транспарентность процессов через таск-трекеры."
    }
  ];

  return (
    <AnimatePresence>
      {activeModal === 'faq' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" aria-modal="true" role="dialog">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark/95 backdrop-blur-md cursor-pointer" 
            onClick={closeModal}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#0a0a0a] border border-beige/10 p-8 sm:p-10 shadow-[0_0_80px_rgba(255,77,0,0.15)] max-h-[90vh] overflow-y-auto hide-scrollbar flex flex-col box-border"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lava to-transparent opacity-50"></div>
            
            <button 
              className="absolute top-4 right-4 text-beige/30 hover:text-lava hover:rotate-90 transition-all duration-300 p-2" 
              aria-label="Закрыть" 
              onClick={closeModal}
            >
              <X size={24} className="pointer-events-none" />
            </button>

            <div className="mb-8 text-left mt-2 border-b border-beige/10 pb-6">
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-beige tracking-tighter leading-none mb-3">ЧАСТЫЕ ВОПРОСЫ</h2>
              <p className="font-mono text-beige/50 text-xs uppercase tracking-widest">Отвечаем на главное</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-beige/10 bg-dark p-5 hover:border-lava/50 transition-colors duration-300 cursor-pointer faq-item group"
                  onClick={() => setOpenItem(openItem === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center w-full outline-none">
                    <h3 className="font-bold text-beige text-xs md:text-sm uppercase tracking-tight text-left pr-4 leading-relaxed group-hover:text-lava transition-colors">{faq.q}</h3>
                    <Plus size={18} className={`text-lava transition-transform duration-300 ${openItem === idx ? 'rotate-45' : ''}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openItem === idx ? 'max-h-40 opacity-100 mt-4 border-t border-beige/10 pt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="font-mono text-beige/60 text-xs leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center pt-6 border-t border-beige/10">
              <button 
                className="text-lava font-mono text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors duration-300" 
                onClick={() => openModal('contact')}
              >
                ОСТАЛИСЬ ВОПРОСЫ? НАПИШИТЕ НАМ
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
