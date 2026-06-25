import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "./components/Envelope";
import InvitationCard from "./components/InvitationCard";

const backgroundAudio = "https://n7kwk6h7z8gkdqba.public.blob.vercel-storage.com/intro-audio.mp3";

const WeddingNewIndex = () => {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative min-h-screen bg-[#fae9ec] font-body text-foreground overflow-hidden">
      <audio
        ref={audioRef}
        src={backgroundAudio}
        loop
        playsInline
      />

      {/* 1. Invitation Card sits in background (z-0) */}
      <div className="absolute inset-0 z-0">
        <InvitationCard 
          isVisible={!showEnvelope} 
          isMuted={isMuted}
          onMuteChange={setIsMuted}
          audioRef={audioRef}
        />
      </div>

      {/* 2. Envelope sits on top */}
      <AnimatePresence>
        {showEnvelope && (
          <Envelope
            key="envelope"
            onOpen={() => setShowEnvelope(false)}
            audioRef={audioRef}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WeddingNewIndex;
