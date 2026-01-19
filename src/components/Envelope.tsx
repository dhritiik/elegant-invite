import { motion } from "framer-motion";
import FloralPattern from "./FloralPattern";
import WaxSeal from "./WaxSeal";

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

const Envelope = ({ isOpen, onOpen }: EnvelopeProps) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{ pointerEvents: isOpen ? "none" : "auto" }}
    >
      {/* Full screen sage green background */}
      <div className="absolute inset-0 bg-sage">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture opacity-40" />
      </div>

      {/* Embossed floral patterns scattered across */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left flowers */}
        <FloralPattern className="absolute -top-10 -left-10 w-64 h-80 text-sage-dark/30" />
        
        {/* Top right flowers */}
        <FloralPattern className="absolute -top-10 -right-10 w-64 h-80 text-sage-dark/30 scale-x-[-1]" />
        
        {/* Bottom left flowers */}
        <FloralPattern className="absolute -bottom-10 -left-10 w-64 h-80 text-sage-dark/30 rotate-180" />
        
        {/* Bottom right flowers */}
        <FloralPattern className="absolute -bottom-10 -right-10 w-64 h-80 text-sage-dark/30 scale-x-[-1] rotate-180" />
        
        {/* Center decorative flowers */}
        <FloralPattern className="absolute top-1/4 left-1/4 w-48 h-64 text-sage-dark/20" />
        <FloralPattern className="absolute top-1/4 right-1/4 w-48 h-64 text-sage-dark/20 scale-x-[-1]" />
      </div>

      {/* Diagonal fold lines creating diamond pattern */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* Top-left to center diagonal */}
        <line 
          x1="0" y1="0" 
          x2="50%" y2="50%" 
          stroke="hsl(95 25% 45%)" 
          strokeWidth="2"
          opacity="0.4"
        />
        {/* Top-right to center diagonal */}
        <line 
          x1="100%" y1="0" 
          x2="50%" y2="50%" 
          stroke="hsl(95 25% 45%)" 
          strokeWidth="2"
          opacity="0.4"
        />
        {/* Bottom-left to center diagonal */}
        <line 
          x1="0" y1="100%" 
          x2="50%" y2="50%" 
          stroke="hsl(95 25% 45%)" 
          strokeWidth="2"
          opacity="0.4"
        />
        {/* Bottom-right to center diagonal */}
        <line 
          x1="100%" y1="100%" 
          x2="50%" y2="50%" 
          stroke="hsl(95 25% 45%)" 
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>

      {/* Subtle shadow along fold lines */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-sage-dark/10 pointer-events-none" />

      {/* Center content - Wax Seal */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="cursor-pointer"
          onClick={onOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={isOpen ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <WaxSeal initials="S&A" />
        </motion.div>

        {/* Exclusive text below seal */}
        <motion.p
          className="mt-8 text-center font-display text-xl md:text-2xl italic text-cream-light/90 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          This invitation is<br />exclusive for you
        </motion.p>

        {/* Subtle click hint */}
        <motion.p
          className="mt-6 text-sm text-cream-light/60 font-body"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Tap the seal to open
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Envelope;
