import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Replace these with your actual asset imports
import envelopeImage from "/bg.png"; 

const envelopeVideo = "https://n7kwk6h7z8gkdqba.public.blob.vercel-storage.com/intro.mp4";

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

  // Auto-start after 5s if user doesn't click
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPlaying) {
        handleStart();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 z-50 cursor-pointer bg-[#FDFBF7]">
      {/* 1. The Video Layer - render only after user starts to avoid preloading */}
      
      <video
        ref={videoRef}
        src={envelopeVideo}
        className="w-full h-full object-cover"
        playsInline
        preload="auto"
        muted
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
            transition={{ duration: 0.5 }}
            onClick={handleStart}
          >
            <img
              src={envelopeImage}
              alt="Envelope Cover"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Envelope;