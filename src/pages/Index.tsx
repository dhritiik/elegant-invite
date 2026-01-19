import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import InvitationCard from "@/components/InvitationCard";

const Index = () => {
  // Rename state to 'showEnvelope' for clarity
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    // Ensure background matches the card's background color (Cream/White)
    <div className="relative min-h-screen bg-[#FDFBF7] overflow-hidden">
      
      {/* 1. The Invitation Card sits in the background (z-0).
           It is present but covered by the envelope initially.
      */}
      <div className="absolute inset-0 z-0">
        <InvitationCard isVisible={!showEnvelope} />
      </div>

      {/* 2. The Envelope sits on top (z-50 defined in Envelope.tsx).
           AnimatePresence allows the 'exit' animation (Zoom In) to play 
           before the component is removed from the DOM.
      */}
      <AnimatePresence>
        {showEnvelope && (
          <Envelope onOpen={() => setShowEnvelope(false)} />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Index;