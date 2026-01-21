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
      // Replaces underscores with spaces for cleaner URLs
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
    if (c === 'family') return <span className="block text-base text-sage-dark italic opacity-80 mt-1">(and Family)</span>;
    if (c === '2' || c === 'couple') return <span className="block text-base text-sage-dark italic opacity-80 mt-1">2 seats reserved for you</span>;
    return <span className="block text-base text-sage-dark italic opacity-80 mt-1">(Guests: {count})</span>;
  };

  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 1.2, delay: 0.8 }}
    >
      {/* Hero Section */}
      {/* Added pb-24 to shift the visual center upwards */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pb-24">
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
            className="text-black/90 font-display text-sm tracking-[0.3em] uppercase mb-4"
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
          
          {/* Date */}
          <motion.p
            className="font-display text-2xl font-bold md:text-2xl text-black italic mt-8"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            10 MARCH, 2026
          </motion.p>
        </motion.div>
        
        {/* Scroll indicator - Centered Absolutely */}
        <motion.div
          className="absolute bottom-8 "
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
            className="text-cream-light/80 font-display text-xs text-center tracking-[0.2em] uppercase mb-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Scroll for more
          </motion.p>
          <motion.svg
            className="w-6 h-6 text-cream-light/80"
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
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 border border-sage/20 rounded-full"
            animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
            transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
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
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div className="h-px w-12 md:w-20 bg-gold/50" animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} />
              <span className="text-gold text-xl">✦</span>
              <motion.div className="h-px w-12 md:w-20 bg-gold/50" animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
            </motion.div>
            
            {/* 1. RELIGIOUS HEADER */}
            <motion.p 
              className="font-display font-bold text-sage-dark/80 text-xs md:text-sm tracking-widest mb-8 leading-loose uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              || Shree Ganeshay Namah || <br className="md:hidden"/> || Shree Neminathay Namah || <br className="md:hidden"/> || Shree Chamunda Bhavani Matay Namah ||
            </motion.p>

            {/* 2. INTRO TEXT */}
            <motion.p 
              className="font-body text-lg text-muted-foreground leading-relaxed mb-8 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With divine grace and blessings, Vora Family seeks your gracious presence and blessings to celebrate the union of hearts and families.
            </motion.p>
            
            {/* 3. DYNAMIC INVITATION */}
            <motion.div 
              className="font-body text-xl md:text-2xl text-sage-dark mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We cordially invite
              
              {guestDetails.name ? (
                <div className="my-4">
                  <span className="block font-display text-3xl md:text-4xl text-sage-dark mb-1">
                    {guestDetails.name}
                  </span>
                  {getMainGuestText(guestDetails.guests)}
                </div>
              ) : (
                <span className="font-display text-sage-dark px-2"> You </span>
              )}
            </motion.div>

            {/* 4. EVENT CONTEXT */}
            <p className="font-body text-muted-foreground mb-8">
              {guestDetails.event ? (
                 <>to attend <span className="text-foreground font-semibold">{guestDetails.event}</span> of</>
              ) : (
                 "at the wedding ceremony of"
              )}
            </p>

            {/* 5. BRIDE & GROOM SECTION */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="mb-8"
            >
                {/* SALONI */}
                <h2 className="font-cursive font-bold text-4xl md:text-5xl text-gold mb-2 tracking-wide">SALONI</h2>
                <p className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
                  (D/O of Mrs. Sejal & Mr. Piyush Lalitkumar Vora)
                </p>

                <div className="my-6">
                  <span className="font-display text-3xl text-sage-dark/60">&</span>
                </div>

                {/* JAY */}
                <h2 className="font-display font-bold text-4xl md:text-5xl text-gold mb-2 tracking-wide">JAY</h2>
                <p className="font-body text-sm md:text-sm text-muted-foreground uppercase tracking-wide">
                  (S/O of Lt. Leena & Mr. Alpesh Jeevanlal Shah)
                </p>
            </motion.div>

            {/* 6. CLOSING TEXT */}
            <motion.p 
              className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              As they embark on their journey of love and togetherness, your presence will make their special day even more memorable.
            </motion.p>

            {/* 7. SIGN OFF */}
            <motion.div 
              className="border-t border-gold/30 pt-8 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="font-display text-sage-dark text-md mb-1">With Love & Best Compliments</p>
              {/* Reduced font size as requested */}
              <p className="font-display text-gold text-base md:text-lg font-bold">Smt. Kokilaben Lalitkumar Vora & Family</p>
            </motion.div>
            
            {/* Bottom decorative divider */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-12"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="h-px w-16 md:w-24 bg-gold/50" />
              <span className="text-gold text-xl">✦</span>
              <div className="h-px w-16 md:w-24 bg-gold/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="relative bg-sage/10 paper-texture py-20 md:py-32 overflow-hidden">
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">the celebration</h2>
           </div>
           
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

      {/* Additional Details Section */}
      <section className="relative bg-cream-light paper-texture py-16 md:py-24 overflow-hidden">
        <div className="container max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div className="h-px w-12 md:w-20 bg-gold/50" animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} />
              <span className="text-gold text-xl">✦</span>
              <motion.div className="h-px w-12 md:w-20 bg-gold/50" animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
            </motion.div>

            <motion.h2 
              className="font-display text-3xl md:text-4xl text-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Additional Details
            </motion.h2>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="font-body text-lg text-muted-foreground leading-relaxed">
                <p className="mb-4">✦ No Gifts Please</p>
                <p>✦ Valet Parking is available at all locations</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center gap-4 mt-12"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="h-px w-16 md:w-24 bg-gold/50" />
              <span className="text-gold text-xl">✦</span>
              <div className="h-px w-16 md:w-24 bg-gold/50" />
            </motion.div>
          </motion.div>
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