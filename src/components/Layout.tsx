import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from '../context/ModalContext';
import ContactModal from './ContactModal';
import FaqModal from './FaqModal';
import BackgroundAnimations from './BackgroundAnimations';

export default function Layout() {
  return (
    <ModalProvider>
      <div className="relative flex flex-col min-h-screen selection:bg-lava selection:text-dark">
        <BackgroundAnimations />
        <div className="noise-layer"></div>
        <Header />
        <main className="flex-grow z-10 relative">
          <Outlet />
        </main>
        <Footer />
        <ContactModal />
        <FaqModal />
      </div>
    </ModalProvider>
  );
}
