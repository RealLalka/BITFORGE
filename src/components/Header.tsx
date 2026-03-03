import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const { t, i18n } = useTranslation();
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  const services = [
    {
      category: "1. Проектирование и разработка",
      items: [
        "Создание IT-продуктов «под ключ»",
        "Разработка мобильных и веб-клиентов",
        "Frontend и Backend инжиниринг",
        "Интеграция искусственного интеллекта",
        "RPA-разработка",
        "Внедрение и кастомизация систем Битрикс",
        "Проектирование визуальных интерфейсов"
      ]
    },
    {
      category: "2. Команды и поддержка",
      items: [
        "IT-аутсорсинг",
        "Аутстаффинг",
        "Техническая поддержка с SLA",
        "Внедрение и администрирование Jira Service"
      ]
    },
    {
      category: "3. Рефакторинг и доработка",
      items: [
        "Модернизация легаси-систем",
        "Антикризисный инжиниринг",
        "Обеспечение качества (QA) и SDET",
        "DevOps-сопровождение"
      ]
    },
    {
      category: "4. Аналитика, аудит и консалтинг",
      items: [
        "Discovery Phase",
        "Проектирование IT-архитектуры",
        "Бизнес-анализ и системный анализ",
        "IT-консалтинг и QA-аудит",
        "UX-аудит",
        "Разработка финансовых методологий"
      ]
    }
  ];

  return (
    <>
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 h-20 items-center px-12 justify-between transition-all duration-500 ${
          scrolled ? 'bg-dark/85 backdrop-blur-lg shadow-[0_1px_15px_1px_rgba(255,77,0,0.6)] border-b border-lava' : 'bg-transparent backdrop-blur-none'
        }`}
      >
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-8 h-8 bg-lava flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(255,77,0,0.2)]">
            <span className="font-black text-dark text-xl relative z-10">B</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl uppercase tracking-tighter text-beige">
              Bitforge<span className="text-lava">_</span>
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-10 lg:gap-14">
          <div 
            className="relative group h-20 flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-beige/70 group-hover:text-lava transition-colors flex items-center gap-1">
              {t('nav.services')} <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`fixed top-20 left-0 right-0 transition-all duration-300 flex justify-center ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="bg-dark border-b border-beige/10 shadow-[0_20px_40px_rgba(15,15,15,0.9)] relative w-full px-12 py-12">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-lava/50"></div>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                  {services.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                      <h4 className="font-black text-lava text-xs uppercase tracking-widest border-b border-beige/10 pb-4">{section.category}</h4>
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="group/item">
                            <a href="#" className="font-mono text-[11px] text-beige/60 hover:text-beige transition-colors block leading-relaxed flex items-start gap-2">
                              <span className="text-lava opacity-0 group-hover/item:opacity-100 transition-opacity mt-0.5">›</span>
                              <span className="group-hover/item:translate-x-1 transition-transform">{item}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link to="/portfolio" className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-beige/70 hover:text-lava transition-colors h-20 flex items-center">
            {t('nav.portfolio')}
          </Link>
          <button 
            onClick={() => openModal('faq')}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-beige/70 hover:text-lava transition-colors h-20 flex items-center"
          >
            {t('nav.faq')}
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div 
            className="relative group h-20 flex items-center"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="px-2 py-1 text-beige/40 font-mono text-[10px] hover:text-lava transition-colors cursor-pointer select-none flex items-center gap-1 font-bold">
              [{i18n.language}] <ChevronDown size={14} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-300 min-w-[80px] ${langOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <div className="bg-dark border border-beige/10 flex flex-col shadow-[0_10px_40px_rgba(15,15,15,0.9)] relative mt-2">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-lava"></div>
                {['RU', 'EN', 'TR'].map((lang) => (
                  <button key={lang} onClick={() => changeLang(lang)} className="font-mono text-[10px] font-bold uppercase tracking-widest text-beige/70 hover:text-lava hover:bg-beige/[0.02] px-4 py-3 border-b border-beige/5 transition-colors">
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button 
            onClick={() => openModal('contact')}
            className="linear-btn !py-3 !px-6 !text-[10px]"
          >
            {t('nav.discuss')}
          </button>
        </div>
      </nav>

      {/* Mobile Floating UI - Single Burger Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-end pointer-events-none">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-14 h-14 bg-lava flex items-center justify-center shadow-[0_8px_30px_rgba(255,77,0,0.4)] hover:shadow-[0_8px_40px_rgba(255,77,0,0.6)] active:scale-90 transition-all duration-300 pointer-events-auto border border-beige/20 rounded-full" 
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X size={24} className="text-dark" /> : <Menu size={24} className="text-dark" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 transition-all duration-500 flex flex-col pt-24 px-6 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-8 items-center text-center">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-black text-2xl uppercase tracking-tighter text-beige">
            Главная
          </Link>
          <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="font-black text-2xl uppercase tracking-tighter text-beige">
            {t('nav.portfolio')}
          </Link>
          <button onClick={() => { setMobileMenuOpen(false); openModal('faq'); }} className="font-black text-2xl uppercase tracking-tighter text-beige">
            {t('nav.faq')}
          </button>
          <button onClick={() => { setMobileMenuOpen(false); openModal('contact'); }} className="font-black text-2xl uppercase tracking-tighter text-lava">
            {t('nav.discuss')}
          </button>

          <div className="flex gap-4 mt-8">
            {['RU', 'EN', 'TR'].map((lang) => (
              <button 
                key={lang} 
                onClick={() => { changeLang(lang); setMobileMenuOpen(false); }} 
                className={`font-mono text-sm font-bold uppercase tracking-widest px-4 py-2 border ${i18n.language === lang ? 'border-lava text-lava' : 'border-beige/20 text-beige/50'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
