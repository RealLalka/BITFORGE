import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] md:w-[400px] bg-dark border border-beige/20 p-8 z-[101] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-black text-2xl text-beige mb-4">{t('success.title')}</h3>
            <p className="font-mono text-sm text-beige/80 mb-8">{t('success.text')}</p>
            <button
              onClick={onClose}
              className="linear-btn w-full !py-3 !text-xs"
            >
              {t('success.close')}
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
