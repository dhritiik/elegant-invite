import { motion } from "framer-motion";
import heroBackground from "/hero-background.jpg";
import EventTimeline from "./EventTimeline";
import { useEffect, useState } from "react";

interface InvitationCardProps {
  isVisible: boolean;
}

const InvitationCard = ({ isVisible }: InvitationCardProps) => {
  // State to hold URL parameters
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    guests: "",      // Global default
    event: "",
    // Specific event counts
    guestsMayra: "",
    guestsBhakti: "",
    guestsWedding: "",
    guestsReception: ""
  });

  // Effect to parse URL parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestDetails({
      // Replaces underscores with spaces for cleaner URLs (e.g. The_Gupta_Family -> The Gupta Family)
      name: params.get("name")?.replace(/_/g, " ") || "",
      guests: params.get("guests") || "", 
      event: params.get("event")?.replace(/_/g, " ") || "",
      
      // Parse specific event guests
      guestsMayra: params.get("guests_mayra") || "",
      guestsBhakti: params.get("guests_bhakti") || "",
      guestsWedding: params.get("guests_wedding") || "",
      guestsReception: params.get("guests_reception") || ""
    });
  }, []);

  // Helper to format guest text for the main card (Global fallback display)
  const getMainGuestText = (count: string) => {
    if (!count) return null;
    const c = count.toLowerCase();
    if (c === 'family') return <span className="block text-base italic opacity-80">(and Family)</span>;
    if (c === '2' || c === 'couple') return <span className="block text-base italic opacity-80">2 seats reserved for you</span>;
    return <span className="block text-base italic opacity-80">(Guests: {count})</span>;
  };

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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/25 via-foreground/12 to-foreground/30" />
          
          {/* Animated floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
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
            className="text-black/90 font-display text-sm tracking-[0.3em] uppercase mb-8"
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
            <motion.h1 
              className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-black mb-2 tracking-wide"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.3)",
                  "0 0 30px rgba(255, 215, 0, 0.5)",
                  "0 0 20px rgba(255, 215, 0, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Saloni
            </motion.h1>
            <motion.span
              className="block text-3xl md:text-4xl black-text font-body italic my-4"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3,
                rotate: { duration: 0.5, repeat: Infinity, repeatDelay: 4 }
              }}
            >
              &
            </motion.span>
            <motion.h1 
              className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-black tracking-wide"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.3)",
                  "0 0 30px rgba(255, 215, 0, 0.5)",
                  "0 0 20px rgba(255, 215, 0, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Jay
            </motion.h1>
          </motion.div>
          
          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-4 my-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.div 
              className="h-px w-16 md:w-24 bg-gold/60"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.svg
              className="w-6 h-6 text-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </motion.svg>
            <motion.div 
              className="h-px w-16 md:w-24 bg-gold/60"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
          
          {/* Date */}
          <motion.p
            className="font-body text-xl md:text-2xl text-black italic"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            10 March, 2026
          </motion.p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { 
            opacity: 1, 
            y: [0, 10, 0],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{ 
            opacity: { duration: 0.8, delay: 2.5 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
            scale: { duration: 2, repeat: Infinity, delay: 2.5 }
          }}
        >
          <motion.p
            className="text-cream-light/80 font-display text-xs tracking-[0.2em] uppercase mb-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll for details
          </motion.p>
          <motion.svg
            className="w-6 h-6 mx-auto text-cream-light/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </section>
      
      {/* Family Blessing Section */}
      <section className="relative bg-cream-light paper-texture py-16 md:py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border border-gold/20 rounded-full"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity }
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 border border-sage/20 rounded-full"
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity }
            }}
          />
        </div>
        
        <div className="container max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Top decorative divider */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="h-px w-16 md:w-24 bg-gold/50"
                animate={{ scaleX: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.span 
                className="text-gold text-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.span>
              <motion.div 
                className="h-px w-16 md:w-24 bg-gold/50"
                animate={{ scaleX: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
            
            <motion.p 
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 10px rgba(43, 75, 50, 0.3)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
            >
              With the blessings and happiness, Vora Family warmly welcomes<br />
              <br />
              to the sacred union of 
            </motion.p>
            
            <motion.h3 
              className="font-display text-3xl md:text-4xl text-foreground mb-6 font-bold italic"
              style={{ fontFamily: "cursive" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 15px rgba(43, 75, 50, 0.4)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
            >
              Saloni & Jay
            </motion.h3>
            
            <motion.div 
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              cordially invite
              
              {/* DYNAMIC INVITATION LOGIC START */}
              {guestDetails.name ? (
                <div className="my-6">
                  {/* Invited Person Name */}
                  <span className="block font-display text-2xl md:text-3xl text-gold mb-2">
                    {guestDetails.name}
                  </span>
                  
                  {/* Global Guest Count Fallback for main card */}
                  {getMainGuestText(guestDetails.guests)}
                </div>
              ) : (
                " you "
              )}

              {/* Event Name Logic */}
              to attend {guestDetails.event ? (
                <span className="text-foreground font-semibold"> {guestDetails.event} </span>
              ) : (
                " the following functions "
              )} 
              celebrating our union
              {/* DYNAMIC INVITATION LOGIC END */}

            </motion.div>
            
            {/* Bottom decorative divider */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="h-px w-16 md:w-24 bg-gold/50"
                animate={{ scaleX: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              <motion.span 
                className="text-gold text-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                ✦
              </motion.span>
              <motion.div 
                className="h-px w-16 md:w-24 bg-gold/50"
                animate={{ scaleX: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="relative bg-sage/10 paper-texture py-20 md:py-32 overflow-hidden">
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <p className="text-sage font-display text-sm tracking-[0.3em] uppercase mb-4">The Celebration</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Our Wedding Journey</h2>
           </div>
           
           {/* PASS ALL GUEST CONFIGS TO TIMELINE */}
           <EventTimeline 
             filteredEventName={guestDetails.event}
             guestCounts={{
               global: guestDetails.guests,
               mayra: guestDetails.guestsMayra,
               bhakti: guestDetails.guestsBhakti,
               wedding: guestDetails.guestsWedding,
               reception: guestDetails.guestsReception
             }}
           />
        </div>
      </section>
      
      <footer className="bg-sage py-12 relative overflow-hidden">
        <div className="text-center relative z-10">
          <p className="font-display text-2xl text-cream-light mb-2">S & J</p>
          <p className="font-body text-cream-light/70 text-sm">10 March, 2026</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default InvitationCard;