import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import InvitationCard from "@/components/InvitationCard";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-cream-light paper-texture overflow-hidden">
      {/* Landing State - Envelope */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-cream via-cream-light to-secondary z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-sage/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-gold/5"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-sage-light/20"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <Envelope isOpen={isEnvelopeOpen} onOpen={handleOpenEnvelope} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Invitation Card - Revealed after opening */}
      <InvitationCard isVisible={isEnvelopeOpen} />
    </div>
  );
};

export default Index;
