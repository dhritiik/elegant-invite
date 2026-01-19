import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import InvitationCard from "@/components/InvitationCard";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-cream-light paper-texture overflow-hidden">
      {/* Landing State - Full Screen Envelope */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <Envelope isOpen={isEnvelopeOpen} onOpen={handleOpenEnvelope} />
        )}
      </AnimatePresence>

      {/* Invitation Card - Revealed after opening */}
      <InvitationCard isVisible={isEnvelopeOpen} />
    </div>
  );
};

export default Index;
