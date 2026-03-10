import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from '../context/ModalContext';
import ContactModal from './ContactModal';
import FaqModal from './FaqModal';
import CookieConsent from './CookieConsent';
import { useScrollLock } from '../context/ScrollLockContext';
import { motion } from 'motion/react';

export default function Layout() {
  const { scrollLocked } = useScrollLock();

  return (
    <ModalProvider>
      <div className="relative flex flex-col min-h-screen selection:bg-lava selection:text-dark">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollLocked ? 0 : 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={scrollLocked ? "pointer-events-none" : ""}
        >
          <Header />
        </motion.div>
        <main className="flex-grow relative">
          <Outlet />
        </main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollLocked ? 0 : 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={scrollLocked ? "pointer-events-none" : ""}
        >
          <Footer />
        </motion.div>
        <ContactModal />
        <FaqModal />
        <CookieConsent />
      </div>
    </ModalProvider>
  );
}
