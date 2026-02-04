import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envelopeImage from "/bg.png";

const envelopeVideo = "https://n7kwk6h7z8gkdqba.public.blob.vercel-storage.com/intro.mp4";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [videoReady, setVideoReady] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 10s timeout: if user hasn't clicked, trigger autoplay and redirect
    const autoplayTimer = setTimeout(() => {
      if (!hasClicked && videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch((err) => {
          console.log("Autoplay failed:", err);
        });
      }
    }, 10000);

    // Redirect after 15s (gives video time to play if autoplay triggers at 15s)
    const redirectTimer = setTimeout(() => {
      onOpen();
    }, 15000);

    return () => {
      clearTimeout(autoplayTimer);
      clearTimeout(redirectTimer);
    };
  }, [hasClicked, onOpen]);

  const handleVideoPlaying = () => {
    setVideoReady(true);
  };

  const handleClick = () => {
    setHasClicked(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Play failed:", err);
      });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#FDFBF7] cursor-pointer"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={envelopeVideo}
        className="w-full h-full object-cover"
        playsInline
        webkit-playsinline="true"
        muted
        preload="auto"
        onPlaying={handleVideoPlaying} 
        onEnded={onOpen}
      />

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