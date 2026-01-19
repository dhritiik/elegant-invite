import { motion } from "framer-motion";

interface WaxSealProps {
  initials?: string;
  className?: string;
}

const WaxSeal = ({ initials = "S&A", className = "" }: WaxSealProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Outer cream/ivory circle with subtle shadow */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cream via-cream-light to-wax shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center">
        {/* Middle ring */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-cream-dark/20 flex items-center justify-center">
          {/* Inner circle with initials */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cream-light via-cream to-wax border border-cream-dark/10 flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)]">
            {/* Initials with elegant script styling */}
            <span className="font-display text-2xl md:text-3xl text-sage-dark/80 tracking-wide italic select-none">
              {initials}
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle top shine effect */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-6 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none blur-sm" />
    </motion.div>
  );
};

export default WaxSeal;
