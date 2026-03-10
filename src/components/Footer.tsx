import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';
import { useLocation, Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const { openModal } = useModal();
  const location = useLocation();
  const isServicePage = location.pathname.includes('/services/');
  const isCompact = location.pathname.includes('/case/') || location.pathname === '/portfolio' || isServicePage;

  return (
    <footer className={`bg-dark relative overflow-hidden px-6 md:px-12 mt-auto flex flex-col justify-end border-t border-beige/10 z-10 ${isServicePage ? 'pt-8 md:pt-12 pb-8 min-h-[20vh]' : isCompact ? 'pt-12 md:pt-16 pb-12 min-h-[40vh]' : 'pt-16 md:pt-32 pb-16 md:pb-12 min-h-[60vh] md:min-h-[80vh]'}`}>
      <div className="absolute inset-0 bg-dark z-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0f0f0f 80%)' }}></div>

      <div className={`absolute left-0 w-full text-center pointer-events-none opacity-[0.03] select-none flex flex-col justify-end h-full overflow-hidden z-0 ${isCompact ? 'bottom-0' : 'bottom-10 md:bottom-10'}`} style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 60%)', maskImage: 'linear-gradient(to top, transparent 0%, black 60%)' }}>
        <span className={`font-black font-sans leading-[0.7] text-beige block tracking-tighter ${isCompact ? 'text-[clamp(2rem,15vw,200px)]' : 'text-[clamp(4rem,25vw,350px)]'}`}>BITFORGE</span>
      </div>
      
      <div className={`max-w-[1600px] mx-auto relative z-20 flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-20 w-full ${isCompact ? 'mb-10 md:mb-16' : 'mb-16 md:mb-32'}`}>
        {!isServicePage && (
          <div className="max-w-4xl text-center md:text-left w-full lg:w-auto flex flex-col items-center md:items-start">
            <h2 className={`font-black uppercase leading-[0.85] tracking-tighter cursor-default ${isCompact ? 'text-[clamp(2.5rem,8vw,100px)] mb-6 md:mb-8' : 'text-[clamp(3.5rem,12vw,150px)] mb-8 md:mb-12'}`}>
              <span className="text-beige block">{t('footer.title1')}</span>
              <span className="text-lava block">{t('footer.title2')}</span>
            </h2>
            <button 
              onClick={() => openModal('contact')}
              className="linear-btn bg-transparent hover:bg-lava !border-beige/30 hover:!border-lava text-beige hover:text-dark w-[80%] max-w-[280px] sm:w-auto sm:max-w-none text-center justify-center !text-xs md:!text-sm !py-3 md:!py-5 !px-6 md:!px-10"
            >
              {t('footer.btn')}
            </button>
          </div>
        )}
        
        <div className={`grid ${isServicePage ? 'grid-cols-2 md:grid-cols-3 w-full' : 'grid-cols-2 w-full lg:w-auto'} gap-x-4 gap-y-12 md:gap-24 mt-8 lg:mt-0 ${!isServicePage ? 'border-t border-beige/10 pt-8 lg:border-t-0 lg:pt-0' : ''}`}>
          {isServicePage && (
            <div className="col-span-2 md:col-span-1 order-last md:order-first flex flex-col h-full bg-dark border border-beige/10 p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-lava to-transparent opacity-70"></div>
              <p className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-beige/30 mb-6 md:mb-8">{t('footer.company')}</p>
              <div className="flex flex-col gap-4 md:gap-6 flex-grow">
                <p className="font-mono text-[10px] sm:text-sm md:text-base uppercase text-beige font-bold">{t('footer.inn')}</p>
                <p className="font-mono text-[10px] sm:text-sm md:text-base uppercase text-beige font-bold">{t('footer.ogrn')}</p>
                <p className="font-mono text-[10px] sm:text-sm md:text-base uppercase text-beige/70 leading-relaxed max-w-sm">
                  {t('footer.address')}
                </p>
                <div className="mt-auto pt-6 border-t border-beige/10 w-full">
                  <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-beige/40">{t('footer.copyright')}</p>
                </div>
              </div>
            </div>
          )}

          <div className={`flex flex-col ${isServicePage ? 'col-span-1 order-1 md:order-2 md:py-8' : ''}`}>
            <p className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-beige/30 mb-6 md:mb-8">{t('footer.contacts')}</p>
            <div className="flex flex-col gap-4 md:gap-6">
              <a className="block font-mono font-bold text-[10px] sm:text-sm md:text-base text-beige hover:text-lava transition-colors uppercase tracking-widest whitespace-nowrap" href="mailto:Mail@bitforge.digital">Mail@bitforge.digital</a>
              <a className="block font-mono font-bold text-[10px] sm:text-sm md:text-base text-beige hover:text-lava transition-colors uppercase tracking-widest whitespace-nowrap" href="tel:+79660847799">+7 (966) 084-77-99</a>
              <button 
                onClick={() => openModal('faq')}
                className="block font-mono font-bold text-[10px] sm:text-sm md:text-base uppercase tracking-widest text-lava hover:underline underline-offset-4 cursor-pointer bg-transparent border-none text-left"
              >
                {t('footer.faq')}
              </button>
            </div>
          </div>
          <div className={`flex flex-col ${isServicePage ? 'col-span-1 order-2 md:order-3 md:py-8' : 'items-end text-right md:items-start md:text-left'}`}>
            <p className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-beige/30 mb-6 md:mb-8">{t('footer.social')}</p>
            <div className="flex flex-col gap-4 md:gap-6 items-end md:items-start">
              <a className="block font-mono font-bold text-[10px] sm:text-sm md:text-base text-beige hover:text-lava transition-colors uppercase tracking-widest" href="#">TELEGRAM</a>
              <a className="block font-mono font-bold text-[10px] sm:text-sm md:text-base text-beige hover:text-lava transition-colors uppercase tracking-widest" href="#">GITHUB</a>
              <a className="block font-mono font-bold text-[10px] sm:text-sm md:text-base text-beige hover:text-lava transition-colors uppercase tracking-widest" href="#">BEHANCE</a>
            </div>
          </div>
        </div>
      </div>
      
      {!isServicePage && (
        <div className="max-w-[1600px] mx-auto relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 text-left border-t border-beige/10 pt-8 md:pt-10 w-full">
          <div className="space-y-3">
            <p className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-beige">{t('footer.company')}</p>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
              <p className="font-mono text-[9px] md:text-[10px] uppercase text-beige/50">{t('footer.inn')}</p>
              <p className="font-mono text-[9px] md:text-[10px] uppercase text-beige/50">{t('footer.ogrn')}</p>
            </div>
            <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-beige/30 max-w-2xl mt-1 md:mt-2 leading-relaxed">
              {t('footer.address')}
            </p>
          </div>
          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-beige/40 shrink-0">{t('footer.copyright')}</p>
        </div>
      )}
    </footer>
  );
}
