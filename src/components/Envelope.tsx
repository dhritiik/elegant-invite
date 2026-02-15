import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envelopeImage from "/bg.png";

const envelopeVideo = "https://n7kwk6h7z8gkdqba.public.blob.vercel-storage.com/intro.mp4";

interface EnvelopeProps {
  onOpen: () => void;
  isMuted?: boolean;
  onMuteChange?: (muted: boolean) => void;
  audioRef?: React.RefObject<HTMLAudioElement>;
}

const Envelope = ({ onOpen, isMuted = false, onMuteChange, audioRef }: EnvelopeProps) => {
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
    // Play audio on user click
    if (audioRef && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch((err) => {
        console.log("Audio play failed:", err);
      });
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    if (onMuteChange) {
      onMuteChange(newMutedState);
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

      {/* Mute Button */}
      <motion.button
        onClick={handleMuteToggle}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          /* Proper Muted Icon with Slash */
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          /* Standard Speaker Icon */
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </motion.button>



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