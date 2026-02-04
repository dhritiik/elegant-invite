"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envelopeImage from "/bg.png"; // Ensure this path is correct

const envelopeVideo = "https://n7kwk6h7z8gkdqba.public.blob.vercel-storage.com/intro.mp4";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  // videoReady controls the image fade. 
  // We only set this true when the video actually starts playing.
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 1. Force Autoplay immediately on mount
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Mobile requires muted to autoplay
          videoRef.current.muted = true; 
          await videoRef.current.play();
        } catch (err) {
          console.log("Autoplay failed:", err);
        }
      }
    };

    playVideo();

    // 2. The "Redirect" Timer
    // Regardless of what happens, after 5 seconds, we go to the next page.
    const redirectTimer = setTimeout(() => {
      onOpen();
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [onOpen]);

  // 3. This function runs ONLY when the video actually creates the first frame
  const handleVideoPlaying = () => {
    setVideoReady(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#FDFBF7] cursor-pointer"
      onClick={onOpen} // User can click to skip immediately
    >
      {/* VIDEO LAYER 
         - playsInline & muted are MANDATORY for iOS/Android autoplay
         - onPlaying is the secret sauce: it tells us "I am running now"
      */}
      <video
        ref={videoRef}
        src={envelopeVideo}
        className="w-full h-full object-cover"
        playsInline
        webkit-playsinline="true"
        muted
        autoPlay
        preload="auto"
        onPlaying={handleVideoPlaying} 
        onEnded={onOpen}
      />

      {/* IMAGE LAYER
         - This sits on top.
         - It ONLY disappears when 'videoReady' is true.
         - This prevents the white flash.
      */}
      <AnimatePresence>
        {!videoReady && (
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={envelopeImage}
              alt="Loading..."
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Envelope;