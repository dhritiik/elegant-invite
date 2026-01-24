import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Replace these with your actual asset imports
import envelopeImage from "/bg.png"; 
import envelopeVideo from "/intro.mp4";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    // Optional: Add a small delay before unmounting for smoothness
    setTimeout(() => {
      onOpen();
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 cursor-pointer bg-[#FDFBF7]">
      {/* 1. The Video Layer (Always present at the bottom) */}
      <video
        ref={videoRef}
        src={envelopeVideo}
        className="w-full h-full object-cover"
        playsInline
        preload="auto"
        muted // Muted often helps autoplay policies, but remove if sound is needed
        onEnded={handleVideoEnd}
      />

      {/* 2. The Static Image Layer (Sits on top) */}
      {/* We use AnimatePresence to smoothly fade this out when isPlaying becomes true */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Smooth fade into video
            onClick={handleStart}
          >
            <img
              src={envelopeImage}
              alt="Envelope Cover"
              className="w-full h-full object-cover"
            />
            
            {/* Optional: Overlay Text/Seal if it's not baked into the image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pb-12">
               {/* You can place a clickable 'invisible' div here or just let the whole image trigger it */}
               <div className="mt-40 animate-pulse text-cream-light/60 text-sm">
                 Tap to open
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Envelope;