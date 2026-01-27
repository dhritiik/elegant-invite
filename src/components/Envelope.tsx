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
            
            {/* UPDATED: justify-center aligns it to the middle. 
                mt-[13.5rem] is approx "mt-54" (custom value), placing it exactly between 52 and 56. */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
               <div className="mt-[11.5 rem] animate-pulse text-black text-lg md:text-xl font-bold tracking-widest uppercase">
                 Tap to Open
               </div>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Envelope;