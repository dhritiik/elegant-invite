import { motion } from "framer-motion";

interface WaxSealProps {
  initials?: string;
  className?: string;
}

const WaxSeal = ({ initials = "S&J", className = "" }: WaxSealProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer organic shape - Ivory/Cream Color */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#fdfbf7] shadow-[0_6px_16px_rgba(0,0,0,0.15),inset_-2px_-4px_6px_rgba(0,0,0,0.05)] flex items-center justify-center transform rotate-12">
        
        {/* Middle Groove */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[3px] border-[#f4f1ea] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
          
          {/* Inner Stamp Area */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#fdfbf7] flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.05)]">
            
            {/* Initials - Using a classic serif font */}
            <span className="font-serif italic text-3xl md:text-4xl text-[#d4c5a9] tracking-widest select-none" style={{ fontFamily: 'Times New Roman, serif' }}>
              {initials}
            </span>
          </div>
        </div>
      </div>
      
      {/* Glossy highlight for wax effect */}
      <div className="absolute top-6 left-8 w-10 h-6 bg-white opacity-40 blur-md rounded-full pointer-events-none" />
    </motion.div>
  );
};

export default WaxSeal;