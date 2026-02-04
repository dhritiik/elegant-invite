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
    if (isPlaying) return;
    setIsPlaying(true);

    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      // attempt to play; browsers may return a promise
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // play failed (autoplay policies) — keep muted and try again later
          v.muted = true;
        });
      }
    };

    // If enough data is buffered, play immediately; otherwise wait for canplaythrough
    if (v.readyState >= 3) {
      tryPlay();
    } else {
      const onCan = () => {
        tryPlay();
        v.removeEventListener('canplaythrough', onCan);
      };
      v.addEventListener('canplaythrough', onCan);
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
      if (!isPlaying) handleStart();
    }, 5000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-50 cursor-pointer bg-[#FDFBF7]">
      {/* 1. The Video Layer - kept mounted to allow preloading */}
      <video
        ref={videoRef}
        src={envelopeVideo}
        className="w-full h-full object-cover"
        playsInline
        muted
        preload="auto"
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