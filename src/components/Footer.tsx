import { useTranslation } from 'react-i18next';
import { useModal } from '../context/ModalContext';

export default function Footer() {
  const { t } = useTranslation();
  const { openModal } = useModal();

  return (
    <footer className="bg-dark relative overflow-hidden pt-24 md:pt-32 pb-24 md:pb-12 px-6 md:px-12 mt-auto min-h-[80vh] flex flex-col justify-end border-t border-beige/10 z-10">
      <div className="absolute inset-0 bg-dark z-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0f0f0f 80%)' }}></div>

      <div className="absolute bottom-10 md:bottom-10 left-0 w-full text-center pointer-events-none opacity-[0.03] select-none flex flex-col justify-end h-full overflow-hidden z-0" style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 60%)', maskImage: 'linear-gradient(to top, transparent 0%, black 60%)' }}>
        <span className="text-[clamp(4rem,25vw,350px)] font-black font-sans leading-[0.7] text-beige block tracking-tighter">BITFORGE</span>
      </div>
      
      <div className="max-w-[1600px] mx-auto relative z-20 flex flex-col lg:flex-row justify-between items-start gap-16 md:gap-20 mb-20 md:mb-32 w-full">
        <div className="max-w-4xl text-left w-full lg:w-auto">
          <h2 className="text-[clamp(3rem,12vw,150px)] font-black uppercase leading-[0.8] tracking-tighter mb-10 md:mb-12 cursor-default">
            <span className="text-beige block">{t('footer.title1')}</span>
            <span className="text-lava block">{t('footer.title2')}</span>
          </h2>
          <button 
            onClick={() => openModal('contact')}
            className="linear-btn bg-transparent hover:bg-lava !border-beige/30 hover:!border-lava text-beige hover:text-dark"
          >
            {t('footer.btn')}
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-24 w-full lg:w-auto mt-12 lg:mt-8">
          <div className="space-y-4 md:space-y-6">
            <p className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-beige/30 mb-4 md:mb-8">{t('footer.contacts')}</p>
            <a className="block font-mono font-bold text-xs sm:text-sm md:text-base text-beige hover:text-lava transition-colors break-all" href="mailto:Mail@bitforge.digital">Mail@bitforge.digital</a>
            <a className="block font-mono font-bold text-xs sm:text-sm md:text-base text-beige hover:text-lava transition-colors" href="tel:+79660847799">+7 (966) 084-77-99</a>
            <button 
              onClick={() => openModal('faq')}
              className="block font-mono font-bold text-[9px] md:text-[11px] uppercase tracking-widest text-lava mt-8 md:mt-12 hover:underline underline-offset-4 cursor-pointer bg-transparent border-none text-left"
            >
              {t('footer.faq')}
            </button>
          </div>
          <div className="space-y-4 md:space-y-6">
            <p className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-beige/30 mb-4 md:mb-8">{t('footer.social')}</p>
            <a className="block font-mono font-bold text-[9px] md:text-[11px] uppercase tracking-widest text-beige/80 hover:text-lava transition-colors" href="#">TELEGRAM</a>
            <a className="block font-mono font-bold text-[9px] md:text-[11px] uppercase tracking-widest text-beige/80 hover:text-lava transition-colors" href="#">GITHUB</a>
            <a className="block font-mono font-bold text-[9px] md:text-[11px] uppercase tracking-widest text-beige/80 hover:text-lava transition-colors" href="#">BEHANCE</a>
          </div>
        </div>
      </div>
      
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
    </footer>
  );
}
