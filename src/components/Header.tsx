import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, ChevronLeft } from 'lucide-react';
import { useModal } from '../context/ModalContext';

type ServiceItem = { id: string; title: string; description: string; steps: { title: string; desc: string }[] };
type ServiceCategory = { id: string; title: string; desc: string; items: ServiceItem[] };

export default function Header() {
  const { t, i18n } = useTranslation();
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const servicesData = t('servicesData', { returnObjects: true }) as ServiceCategory[];
  
  // Desktop mega menu state
  const [activeCategory, setActiveCategory] = useState(servicesData[0]?.id || 'dev');
  
  // Mobile menu state
  const [mobileMenuLevel, setMobileMenuLevel] = useState<'main' | 'categories' | 'services'>('main');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  return (
    <>
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 h-20 items-center px-12 justify-between transition-all duration-500 ${
          scrolled ? 'bg-dark/85 backdrop-blur-lg shadow-[0_1px_15px_1px_rgba(255,77,0,0.6)] border-b border-lava' : 'bg-transparent backdrop-blur-none'
        }`}
      >
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <img src="/assets/logo/logo.svg" alt="Bitforge" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
        </Link>

        <div className="flex items-center gap-10 lg:gap-14">
          <div 
            className="relative group h-20 flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-beige/70 transition-colors duration-300 group-hover:text-lava flex items-center gap-1">
              {t('nav.services')} <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`fixed top-20 left-0 right-0 transition-all duration-300 flex justify-center ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="bg-dark border-b border-beige/10 shadow-[0_20px_40px_rgba(15,15,15,0.9)] relative w-full px-12 py-12">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-lava/50"></div>
                <div className="max-w-[1200px] mx-auto flex gap-12">
                  {/* Categories Column */}
                  <div className="w-1/3 flex flex-col gap-2 border-r border-beige/10 pr-8">
                    {servicesData.map((category) => (
                      <button 
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        className={`text-left p-4 transition-all duration-300 border-l-2 ${activeCategory === category.id ? 'border-lava bg-lava/5 text-lava' : 'border-transparent text-beige/60 hover:text-beige hover:bg-beige/[0.02]'}`}
                      >
                        <h4 className="font-black text-sm uppercase tracking-widest mb-1">{category.title}</h4>
                        <p className="font-mono text-[10px] opacity-70 line-clamp-2">{category.desc}</p>
                      </button>
                    ))}
                  </div>
                  
                  {/* Services Column */}
                  <div className="w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-3 content-start max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {servicesData.find(c => c.id === activeCategory)?.items.map((item) => (
                      <Link 
                        key={item.id} 
                        to={`/services/${item.id}`} 
                        onClick={() => setServicesOpen(false)}
                        className="group/card block p-4 border border-beige/5 hover:border-lava/50 bg-beige/[0.02] hover:bg-lava/5 transition-all duration-300 flex flex-col h-full"
                      >
                        <h4 className="font-black text-beige text-[11px] uppercase tracking-widest mb-2 group-hover/card:text-lava transition-colors leading-tight">{item.title}</h4>
                        <p className="font-mono text-[9px] text-beige/50 leading-relaxed mb-3 line-clamp-2 flex-grow">{item.description}</p>
                        <div className="flex items-center gap-1.5 font-mono text-[9px] text-lava uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity mt-auto">
                          {t('ui.more')} <ArrowRight size={10} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/portfolio" className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-beige/70 transition-colors duration-300 hover:text-lava h-20 flex items-center">
            {t('nav.portfolio')}
          </Link>
          <button 
            onClick={() => openModal('faq')}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-beige/70 transition-colors duration-300 hover:text-lava h-20 flex items-center"
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
            <button className="px-2 py-1 text-beige/60 font-mono text-[10px] transition-colors duration-300 hover:text-lava cursor-pointer select-none flex items-center gap-1 font-bold">
              [{i18n.language}] <ChevronDown size={14} className={`transition-transform duration-500 ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-300 min-w-[80px] ${langOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <div className="bg-dark border border-beige/20 flex flex-col shadow-[0_10px_40px_rgba(15,15,15,0.9)] relative mt-2 overflow-hidden">
                {['RU', 'EN', 'TR'].map((lang) => (
                  <button key={lang} onClick={() => changeLang(lang)} className="font-mono text-[10px] font-bold uppercase tracking-widest text-beige/80 transition-colors duration-300 hover:text-lava hover:bg-beige/[0.05] px-4 py-3 border-b border-beige/10 last:border-b-0">
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

      {/* Mobile Floating UI - Single Burger Button (Top Right) */}
      <div className="md:hidden fixed top-4 right-4 z-[60] flex items-center justify-end pointer-events-none">
        <button 
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            if (mobileMenuOpen) {
              // Reset submenu state when closing
              setTimeout(() => setMobileMenuLevel('main'), 300);
            }
          }}
          className="w-12 h-12 bg-lava flex items-center justify-center shadow-[0_4px_20px_rgba(255,77,0,0.4)] transition-all duration-300 hover:bg-[#e64500] active:scale-95 pointer-events-auto border border-beige/20 group" 
          aria-label="Меню"
        >
          <div className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
            {mobileMenuOpen ? <X size={24} className="text-dark" /> : <Menu size={24} className="text-dark" />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-dark/98 backdrop-blur-2xl z-50 transition-all duration-500 flex flex-col pt-24 px-6 overflow-hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Main Menu */}
        <div className={`absolute inset-0 px-6 flex flex-col justify-center items-center transition-transform duration-500 ${mobileMenuLevel !== 'main' ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className="flex flex-col gap-8 items-center w-full max-w-sm">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-black text-3xl uppercase tracking-tighter text-beige transition-colors duration-300 hover:text-lava">
              Bitforge
            </Link>
            <button onClick={() => setMobileMenuLevel('categories')} className="font-black text-3xl uppercase tracking-tighter text-beige transition-colors duration-300 hover:text-lava flex items-center gap-2 group">
              {t('nav.services')} <ArrowRight size={24} className="text-lava transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="font-black text-3xl uppercase tracking-tighter text-beige transition-colors duration-300 hover:text-lava">
              {t('nav.portfolio')}
            </Link>
            <button onClick={() => { setMobileMenuOpen(false); openModal('faq'); }} className="font-black text-3xl uppercase tracking-tighter text-beige transition-colors duration-300 hover:text-lava">
              {t('nav.faq')}
            </button>
            <button onClick={() => { setMobileMenuOpen(false); openModal('contact'); }} className="font-black text-3xl uppercase tracking-tighter text-lava mt-4 transition-transform duration-300 hover:scale-105">
              {t('nav.discuss')}
            </button>

            <div className="flex gap-4 mt-8">
              {['RU', 'EN', 'TR'].map((lang) => (
                <button 
                  key={lang} 
                  onClick={() => { changeLang(lang); setMobileMenuOpen(false); }} 
                  className={`font-mono text-sm font-bold uppercase tracking-widest px-4 py-2 border transition-colors duration-300 ${i18n.language === lang ? 'border-lava text-lava' : 'border-beige/20 text-beige/50 hover:border-lava/50 hover:text-beige'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Submenu */}
        <div className={`absolute inset-0 pt-24 px-6 flex flex-col transition-transform duration-500 bg-dark/98 ${mobileMenuLevel === 'categories' ? 'translate-x-0' : (mobileMenuLevel === 'services' ? '-translate-x-full' : 'translate-x-full')}`}>
          <button 
            onClick={() => setMobileMenuLevel('main')}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-beige/50 hover:text-lava mb-8"
          >
            <ChevronLeft size={16} /> {t('ui.mainMenu')}
          </button>
          
          <h3 className="font-black text-2xl uppercase tracking-tighter text-lava mb-8">{t('ui.categories')}</h3>
          
          <div className="flex flex-col gap-4 overflow-y-auto pb-24 hide-scrollbar">
            {servicesData.map((category) => (
              <button 
                key={category.id} 
                onClick={() => { setSelectedCategory(category.id); setMobileMenuLevel('services'); }}
                className="text-left p-5 border border-beige/10 bg-beige/[0.02] active:bg-lava/10 transition-colors flex flex-col"
              >
                <h4 className="font-black text-beige text-sm uppercase tracking-widest mb-2 flex justify-between items-center w-full">
                  {category.title} <ArrowRight size={16} className="text-lava" />
                </h4>
                <p className="font-mono text-[10px] text-beige/50 leading-relaxed">{category.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Services Submenu */}
        <div className={`absolute inset-0 pt-24 px-6 flex flex-col transition-transform duration-500 bg-dark/98 ${mobileMenuLevel === 'services' ? 'translate-x-0' : 'translate-x-full'}`}>
          <button 
            onClick={() => setMobileMenuLevel('categories')}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-beige/50 hover:text-lava mb-8"
          >
            <ChevronLeft size={16} /> {t('ui.categories')}
          </button>
          
          <h3 className="font-black text-xl uppercase tracking-tighter text-lava mb-6">
            {servicesData.find(c => c.id === selectedCategory)?.title}
          </h3>
          
          <div className="flex flex-col gap-4 overflow-y-auto pb-24 hide-scrollbar">
            {servicesData.find(c => c.id === selectedCategory)?.items.map((item) => (
              <Link 
                key={item.id} 
                to={`/services/${item.id}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="p-5 border border-beige/10 bg-beige/[0.02] active:bg-lava/10 transition-colors"
              >
                <h4 className="font-black text-beige text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                <p className="font-mono text-[10px] text-beige/50 leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-2 font-mono text-[10px] text-lava uppercase tracking-widest">
                  {t('ui.more')} <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
