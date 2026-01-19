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
      className="relative cursor-pointer"
      onClick={onOpen}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Envelope body */}
      <motion.div
        className="relative w-80 h-[28rem] md:w-96 md:h-[32rem] bg-sage rounded-lg envelope-shadow overflow-hidden"
        animate={isOpen ? { opacity: 0, scale: 0.8 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ perspective: "1000px" }}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture opacity-30" />
        
        {/* Floral pattern overlay */}
        <FloralPattern className="absolute inset-0 w-full h-full text-sage-dark" />
        
        {/* Top flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/3 origin-top"
          style={{ transformStyle: "preserve-3d" }}
          animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Front of flap */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-sage-dark/20 to-transparent"
            style={{ backfaceVisibility: "hidden" }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 384 170"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0 L192 140 L384 0 L384 170 L0 170 Z"
                fill="hsl(95 25% 52%)"
                opacity="0.3"
              />
            </svg>
          </div>
          
          {/* Back of flap (visible when opened) */}
          <div 
            className="absolute inset-0 bg-sage-light"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateX(180deg)"
            }}
          />
        </motion.div>
        
        {/* Bottom flap decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <svg
            className="w-full h-full"
            viewBox="0 0 384 170"
            preserveAspectRatio="none"
          >
            <path
              d="M0 170 L192 30 L384 170 L0 170 Z"
              fill="hsl(95 25% 50%)"
              opacity="0.2"
            />
          </svg>
        </div>
        
        {/* Wax seal */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <WaxSeal />
        </motion.div>
        
        {/* Exclusive text */}
        <motion.p
          className="absolute bottom-16 left-0 right-0 text-center font-body text-lg italic text-cream-light/90"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          This invitation is<br />exclusive for you
        </motion.p>
      </motion.div>
      
      {/* Click hint */}
      <motion.p
        className="absolute -bottom-12 left-0 right-0 text-center text-sm text-muted-foreground font-body"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Click to open
      </motion.p>
    </motion.div>
  );
};

export default Envelope;
