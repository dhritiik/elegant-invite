import { motion } from "framer-motion";

interface WaxSealProps {
  initials?: string;
  className?: string;
}

const WaxSeal = ({ initials = "S&A", className = "" }: WaxSealProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Outer ring with texture */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cream to-wax wax-seal-shadow flex items-center justify-center">
        {/* Inner decorative ring */}
        <div className="w-20 h-20 rounded-full border-2 border-cream-light/50 flex items-center justify-center">
          {/* Inner circle */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cream-light to-cream flex items-center justify-center">
            {/* Initials */}
            <span className="font-display text-lg text-sage-dark tracking-wide italic">
              {initials}
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default WaxSeal;
