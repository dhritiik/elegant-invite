import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import InvitationCard from "@/components/InvitationCard";

const backgroundAudio = "https://n7kwk6h7z8gkdqba.public.blob.vercel-storage.com/intro-audio.mp3";

const Index = () => {
  // Rename state to 'showEnvelope' for clarity
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Update mute state of audio element
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    // Ensure background matches the card's background color (Cream/White)
    <div className="relative min-h-screen bg-[#FDFBF7] overflow-hidden">
      {/* Background audio that plays throughout */}
      <audio
        ref={audioRef}
        src={backgroundAudio}
        loop
        playsInline
      />
      
      {/* 1. The Invitation Card sits in the background (z-0).
           It is present but covered by the envelope initially.
      */}
      <div className="absolute inset-0 z-0">
        <InvitationCard 
          isVisible={!showEnvelope}
          isMuted={isMuted}
          onMuteChange={setIsMuted}
          audioRef={audioRef}
        />
      </div>

      {/* 2. The Envelope sits on top (z-50 defined in Envelope.tsx).
           AnimatePresence allows the 'exit' animation (Zoom In) to play 
           before the component is removed from the DOM.
      */}
      <AnimatePresence>
        {showEnvelope && (
          <Envelope 
            onOpen={() => setShowEnvelope(false)}
            isMuted={isMuted}
            onMuteChange={setIsMuted}
            audioRef={audioRef}
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Index;