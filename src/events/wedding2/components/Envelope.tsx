import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const envelopeImage = "/envelope-wedding2.png";
interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (!hasClicked) onOpen();
    }, 15000);
    return () => clearTimeout(redirectTimer);
  }, [hasClicked, onOpen]);

  const handleClick = () => {
    setHasClicked(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!hasClicked && (
        <motion.div 
          className="fixed inset-0 z-50 bg-[#FDFBF7] cursor-pointer"
          onClick={handleClick}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={envelopeImage}
            alt="Open Invitation"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-x-0 bottom-24 flex flex-col items-center justify-center p-4">
             <motion.p className="text-white/80 uppercase tracking-widest text-sm font-semibold glass-box px-6 py-2 rounded-full backdrop-blur-md bg-black/30 border border-white/20 animate-pulse">Tap anywhere to open</motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;