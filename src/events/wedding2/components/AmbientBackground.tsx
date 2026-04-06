import { motion, AnimatePresence } from "framer-motion";

export type ThemeType = 'default' | 'mayra' | 'bhakti' | 'wedding' | 'reception';

interface AmbientBackgroundProps {
  currentTheme: ThemeType;
}

// ---------------------------------------------------------
// 1. MAYRA: Floating Marigolds (Using marigold.png)
// ---------------------------------------------------------
const PetalsEffect = () => {
  const petals = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,      
    duration: 5 + Math.random() * 5, 
    size: 15 + Math.random() * 20, 
    rotateStart: Math.random() * 360 
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <motion.img
          key={petal.id}
          src="/marigold.png"
          alt="falling marigold"
          className="absolute object-contain opacity-90"
          style={{ 
            left: petal.left, 
            top: -60, 
            width: petal.size,
            height: petal.size
          }}
          animate={{
            y: ["0vh", "105vh"], 
            rotate: [petal.rotateStart, petal.rotateStart + 360], 
            x: [0, Math.random() * 60 - 30] 
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            ease: "linear",
            delay: petal.delay
          }}
        />
      ))}
    </div>
  );
};

// ---------------------------------------------------------
// 2. BHAKTI: Rising Diya Lights
// ---------------------------------------------------------
const BhaktiEffect = () => {
  const lights = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 6 + Math.random() * 4,
    delay: Math.random() * 5,
    size: 4 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-purple-100/30 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute rounded-full bg-amber-200"
          style={{
            left: light.left,
            width: light.size,
            height: light.size,
            boxShadow: "0 0 15px 2px rgba(251, 191, 36, 0.6)"
          }}
          initial={{ y: "105vh", opacity: 0 }}
          animate={{
            y: "-10vh", 
            opacity: [0, 1, 0], 
            scale: [1, 1.5, 1], 
            x: [0, Math.random() * 20 - 10] 
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: light.delay
          }}
        />
      ))}
    </div>
  );
};

// ---------------------------------------------------------
// 3. WEDDING: Roses & Rice (Aksat)
// ---------------------------------------------------------
const WeddingEffect = () => {
  // 1. RICE GRAINS (Aksat)
  const rice = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 2, // Fall faster
    delay: Math.random() * 3,
  }));

  // 2. ROSES (Using rose.png) - Similar logic to Mayra
  const roses = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,      
    duration: 6 + Math.random() * 3, 
    // Roses might be slightly larger than marigolds
    size: 20 + Math.random() * 20, // 20px to 45px
    rotateStart: Math.random() * 360 
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* RICE GRAINS (White pills) */}
      {rice.map((r) => (
        <motion.div
          key={`rice-${r.id}`}
          className="absolute bg-white/90 rounded-full"
          style={{
            left: r.left,
            top: -20,
            width: "5px",
            height: "8px", 
          }}
          animate={{
            y: ["0vh", "105vh"],
            rotateX: [0, 360], 
            rotateZ: [0, 45, 0] 
          }}
          transition={{
            duration: r.duration,
            repeat: Infinity,
            ease: "linear",
            delay: r.delay
          }}
        />
      ))}

      {/* FALLING ROSES */}
      {roses.map((rose) => (
        <motion.img
          key={`rose-${rose.id}`}
          src="/rose.png" // Uses your new Rose image
          alt="falling rose"
          className="absolute object-contain opacity-90"
          style={{ 
            left: rose.left, 
            top: -60, 
            width: rose.size,
            height: rose.size
          }}
          animate={{
            y: ["0vh", "105vh"], 
            rotate: [rose.rotateStart, rose.rotateStart + 360], 
            x: [0, Math.random() * 60 - 30] 
          }}
          transition={{
            duration: rose.duration,
            repeat: Infinity,
            ease: "linear",
            delay: rose.delay
          }}
        />
      ))}
    </div>
  );
};

// ---------------------------------------------------------
// 4. RECEPTION: Twinkling White Stars (Small & Delicate)
// ---------------------------------------------------------
const StarryEffect = () => {
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    // REDUCED SIZE: 7px to 17px (Previous was 15-35px)
    size: 7 + Math.random() * 10, 
    duration: 1.5 + Math.random() * 3, 
    delay: Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <motion.img
          key={s.id}
          src="/star.png" 
          alt="star"
          className="absolute object-contain"
          style={{ 
            left: s.left, 
            top: s.top, 
            width: s.size, 
            height: s.size,
            // Inverts black png to white star
            filter: "brightness(0) invert(1)" 
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2], 
            scale: [0.8, 1.1, 0.8], 
            rotate: [0, 30, 0]
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay
          }}
        />
      ))}
    </div>
  );
};

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
export const AmbientBackground = ({ currentTheme }: AmbientBackgroundProps) => {
  const getBgClass = () => {
    switch (currentTheme) {
      case 'mayra': return "bg-gradient-to-br from-amber-50 to-orange-100";
      case 'bhakti': return "bg-gradient-to-b from-slate-50 to-purple-100"; 
      case 'wedding': return "bg-gradient-to-br from-red-50 via-rose-50 to-amber-50"; 
      case 'reception': return "bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900";
      default: return "bg-white";
    }
  };

  return (
    <motion.div 
      className={`fixed inset-0 -z-10 transition-colors duration-1000 ${getBgClass()}`}
      initial={false}
      animate={{ 
        backgroundColor: currentTheme === 'reception' ? '#0f172a' : '#ffffff' 
      }}
    >
      {/* Dark overlay for reception to make stars pop */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${currentTheme === 'reception' ? 'opacity-0' : 'opacity-40 bg-white/50'}`} />

      <AnimatePresence mode="wait">
        {currentTheme === 'mayra' && (
          <motion.div key="mayra" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <PetalsEffect />
          </motion.div>
        )}
        {currentTheme === 'bhakti' && (
          <motion.div key="bhakti" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <BhaktiEffect />
          </motion.div>
        )}
        {currentTheme === 'wedding' && (
          <motion.div key="wedding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <WeddingEffect />
          </motion.div>
        )}
        {currentTheme === 'reception' && (
          <motion.div key="reception" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <StarryEffect />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};