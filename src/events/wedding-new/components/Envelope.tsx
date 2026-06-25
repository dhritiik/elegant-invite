import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

// ── Assets ───────────────────────────────────────────────────────────────────
const DARK_BG = "/wedding-new-courtyard-dark-m-v03.webp";
const LIT_BG = "/wedding-new-courtyard-lit-m-v03.webp";
const ROPE_IMG = "/wedding-newrope-hemp-pull-x-v01.webp";
const FLORAL_L = "/wedding-new-floral-lefttop.webp";
const FLORAL_R = "/wedding-new-floral-righttop.webp";

const PULL_THRESHOLD = 90;
const MAX_PULL = 160;

interface EnvelopeProps {
  onOpen: () => void;
  audioRef?: React.RefObject<HTMLAudioElement>;
}

const Envelope = ({ onOpen, audioRef }: EnvelopeProps) => {
  const [stage, setStage] = useState<"idle" | "lit" | "done">("idle");
  const pullY = useMotionValue(0);
  const ropeRotate = useTransform(pullY, [0, MAX_PULL], [0, 3]);
  const bgProgress = useTransform(pullY, [0, PULL_THRESHOLD], [0, 1]);

  const dragStartY = useRef<number>(0);
  const isDragging = useRef(false);
  const triggered = useRef(false);

  const triggerLight = useCallback(() => {
    if (triggered.current) return;
    triggered.current = true;

    // Play audio when light is triggered
    if (audioRef && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch((err) => {
        console.log("Audio play failed:", err);
      });
    }

    animate(pullY, MAX_PULL, { type: "spring", stiffness: 300, damping: 20 });
    setTimeout(() => {
      animate(pullY, 0, { type: "spring", stiffness: 120, damping: 18 });
    }, 400);

    setStage("lit");
    setTimeout(() => {
      onOpen();
    }, 1000);
  }, [pullY, onOpen, audioRef]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (stage !== "idle") return;
    isDragging.current = true;
    dragStartY.current = e.clientY;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || stage !== "idle") return;
    const delta = Math.max(0, Math.min(e.clientY - dragStartY.current, MAX_PULL));
    pullY.set(delta);
    if (delta >= PULL_THRESHOLD) triggerLight();
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (stage === "idle") {
      animate(pullY, 0, { type: "spring", stiffness: 200, damping: 20 });
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden select-none bg-[#0a0a0a]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Backgrounds */}
      <img src={DARK_BG} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <motion.img
        src={LIT_BG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        style={{ opacity: stage === "idle" ? bgProgress : 1 }}
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center pointer-events-none">
        {/* Rope */}
        <motion.div
          className="relative flex flex-col items-center cursor-grab active:cursor-grabbing"
          style={{ y: pullY, rotate: ropeRotate, transformOrigin: "50% 0%", touchAction: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClick={() => { if (stage === "idle") triggerLight(); }}
          {...{ style: { pointerEvents: stage === "idle" ? "auto" : "none", y: pullY, rotate: ropeRotate, transformOrigin: "50% 0%", touchAction: "none" } }}
        >
          <img
            src={ROPE_IMG}
            alt="Pull the rope"
            draggable={false}
            className="w-[240px] md:w-[350px] object-contain drop-shadow-2xl"
            style={{
              marginTop: "-60vh",
              height: "150vh",
              minHeight: "900px"
            }}
          />
        </motion.div>

        {/* Text Area */}
        <AnimatePresence>
          {stage === "idle" && (
            <motion.div
              className="absolute bottom-[28%] flex flex-col items-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-serif italic text-[#e6d5b8] text-2xl md:text-3xl tracking-wider drop-shadow-md">
                Pull to light us up
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip Intro */}
      <button
        onClick={onOpen}
        className="absolute bottom-8 right-8 z-30 text-[#8c8c8c] hover:text-[#e6d5b8] text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
};

export default Envelope;