import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "./components/Envelope";
import InvitationCard from "./components/InvitationCard";

const Index = () => {
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] font-body text-foreground overflow-hidden">
      
      {/* 1. The Invitation Card sits in the background (z-0). */}
      <div className="absolute inset-0 z-0">
        <InvitationCard 
          isVisible={!showEnvelope} 
        />
      </div>

      {/* 2. The Envelope sits on top */}
      <AnimatePresence>
        {showEnvelope && (
          <Envelope 
            key="envelope" 
            onOpen={() => setShowEnvelope(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;