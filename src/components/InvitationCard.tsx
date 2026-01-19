import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";
import EventTimeline from "./EventTimeline";

interface InvitationCardProps {
  isVisible: boolean;
}

const InvitationCard = ({ isVisible }: InvitationCardProps) => {
  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 1.2, delay: 0.8 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/30" />
        </div>
        
        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Pre-title */}
          <motion.p
            className="text-cream-light/90 font-display text-sm tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            We're Getting Married
          </motion.p>
          
          {/* Names */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream-light mb-2 tracking-wide">
              Saloni
            </h1>
            <motion.span
              className="block text-3xl md:text-4xl gold-text font-body italic my-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              &
            </motion.span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream-light tracking-wide">
              Jay
            </h1>
          </motion.div>
          
          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-4 my-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="h-px w-16 md:w-24 bg-gold/60" />
            <motion.svg
              className="w-6 h-6 text-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </motion.svg>
            <div className="h-px w-16 md:w-24 bg-gold/60" />
          </motion.div>
          
          {/* Date */}
          <motion.p
            className="font-body text-xl md:text-2xl text-cream-light italic"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            December 15, 2026
          </motion.p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1, y: [0, 10, 0] } : {}}
          transition={{ 
            opacity: { duration: 0.8, delay: 2.5 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
          }}
        >
          <p className="text-cream-light/80 font-display text-xs tracking-[0.2em] uppercase mb-2">
            Scroll for details
          </p>
          <svg
            className="w-6 h-6 mx-auto text-cream-light/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>
      
      {/* Family Blessing Section */}
      <section className="relative bg-cream-light paper-texture py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Top decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-16 md:w-24 bg-gold/50" />
              <span className="text-gold text-xl">✦</span>
              <div className="h-px w-16 md:w-24 bg-gold/50" />
            </div>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              With the blessings of our families, we,
            </p>
            
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Saloni & Jay
            </h3>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              cordially invite you to attend the following functions celebrating our union
            </p>
            
            {/* Bottom decorative divider */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-16 md:w-24 bg-gold/50" />
              <span className="text-gold text-xl">✦</span>
              <div className="h-px w-16 md:w-24 bg-gold/50" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="relative bg-sage/10 paper-texture py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sage font-display text-sm tracking-[0.3em] uppercase mb-4">
              The Celebration
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              Our Wedding Journey
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold/50" />
              <div className="w-2 h-2 rounded-full bg-gold" />
              <div className="h-px w-12 bg-gold/50" />
            </div>
          </motion.div>
          
          <EventTimeline />
        </div>
      </section>
      
      {/* Venue Section */}
      <section className="relative bg-sage/10 paper-texture py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-4">
              The Venue
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Raas Jodhpur
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Tunwarji Ka Jhalra, Makrana Mohalla<br />
              Jodhpur, Rajasthan 342001
            </p>
            
            <div className="mt-12 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gold/40" />
              <span className="text-gold text-2xl">✦</span>
              <div className="h-px w-16 bg-gold/40" />
            </div>
            
            <p className="font-body text-base text-muted-foreground mt-8 italic">
              We can't wait to celebrate with you
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-sage py-12">
        <div className="text-center">
          <p className="font-display text-2xl text-cream-light mb-2">
            S & J
          </p>
          <p className="font-body text-cream-light/70 text-sm">
            December 15, 2026
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default InvitationCard;
