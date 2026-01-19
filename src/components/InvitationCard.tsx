import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";
import EventTimeline from "./EventTimeline";
import { useEffect, useState } from "react";

interface InvitationCardProps {
  isVisible: boolean;
}

const InvitationCard = ({ isVisible }: InvitationCardProps) => {
  // State to hold URL parameters
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    guests: "",
    event: ""
  });

  // Effect to parse URL parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestDetails({
      // Replaces underscores with spaces for cleaner URLs
      name: params.get("name")?.replace(/_/g, " ") || "",
      guests: params.get("guests") || "", // 'family', '2', etc.
      event: params.get("event")?.replace(/_/g, " ") || ""
    });
  }, []);

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
            {/* Overlay for readability - slightly reduced intensity for the hero image */}
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
            <motion.h1 
              className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-cream-light mb-2 tracking-wide"
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
              className="block text-3xl md:text-4xl gold-text font-body italic my-4"
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
              className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-cream-light tracking-wide"
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
              transition={{ duration: 4, repeat: Infinity }}
            >
              With the blessings of our families, we,
            </motion.p>
            
            <motion.h3 
              className="font-display text-3xl md:text-4xl text-foreground mb-6"
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
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
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
              
              {/* DYNAMIC INVITATION LOGIC */}
              {guestDetails.name ? (
                <div className="my-6">
                  <span className="block font-display text-2xl md:text-3xl text-gold mb-2">
                    {guestDetails.name}
                  </span>
                  {/* Handle "Family" vs "2" Guests option */}
                  {guestDetails.guests.toLowerCase() === 'family' && (
                    <span className="block text-base italic opacity-80">(and Family)</span>
                  )}
                  {(guestDetails.guests === '2' || guestDetails.guests.toLowerCase() === 'couple') && (
                    <span className="block text-base italic opacity-80">(Admit 2)</span>
                  )}
                  {/* Generic catch-all if they type a number */}
                  {(!['family', '2', 'couple'].includes(guestDetails.guests.toLowerCase()) && guestDetails.guests) && (
                    <span className="block text-base italic opacity-80">(Guests: {guestDetails.guests})</span>
                  )}
                </div>
              ) : (
                " you "
              )}

              to attend {guestDetails.event ? (
                <span className="text-foreground font-semibold"> {guestDetails.event} </span>
              ) : (
                " the following functions "
              )} 
              celebrating our union
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
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border-2 border-gold/10 rounded-full"
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity }
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 border border-sage/15 rounded-full"
            animate={{ 
              rotate: [360, 180, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, delay: 1 }
            }}
          />
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold/20 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-sage font-display text-sm tracking-[0.3em] uppercase mb-4"
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 8px rgba(95, 25, 85, 0.4)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              The Celebration
            </motion.p>
            <motion.h2 
              className="font-display text-3xl md:text-5xl text-foreground mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Wedding Journey
            </motion.h2>
            <motion.div 
              className="flex items-center justify-center gap-3"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="h-px w-12 bg-gold/50"
                animate={{ scaleX: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-gold"
                animate={{ 
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 rgba(43, 75, 50, 0)",
                    "0 0 15px rgba(43, 75, 50, 0.6)",
                    "0 0 0 rgba(43, 75, 50, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="h-px w-12 bg-gold/50"
                animate={{ scaleX: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
          
          <EventTimeline />
        </div>
      </section>
      
      {/* Venue Section */}
      <section className="relative bg-sage/10 paper-texture py-20 md:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-16 left-16 w-28 h-28 border border-gold/15 rounded-full"
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity }
            }}
          />
          <motion.div
            className="absolute bottom-16 right-16 w-20 h-20 border-2 border-sage/20 rounded-full"
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, delay: 0.5 }
            }}
          />
        </div>
        
        <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-4"
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 10px rgba(43, 75, 50, 0.5)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              The Venue
            </motion.p>
            <motion.h2 
              className="font-display text-3xl md:text-4xl text-foreground mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 15px rgba(43, 75, 50, 0.3)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
            >
              Raas Jodhpur
            </motion.h2>
            <motion.p 
              className="font-body text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Tunwarji Ka Jhalra, Makrana Mohalla<br />
              Jodhpur, Rajasthan 342001
            </motion.p>
            
            <motion.div 
              className="mt-12 flex items-center justify-center gap-3"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="h-px w-16 bg-gold/40"
                animate={{ scaleX: [1, 1.4, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.span 
                className="text-gold text-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.span>
              <motion.div 
                className="h-px w-16 bg-gold/40"
                animate={{ scaleX: [1, 1.4, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </motion.div>
            
            <motion.p 
              className="font-body text-base text-muted-foreground mt-8 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 8px rgba(43, 75, 50, 0.2)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
            >
              We can't wait to celebrate with you
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-sage py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-4 left-4 w-12 h-12 border border-cream-light/20 rounded-full"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity }
            }}
          />
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-8 border border-cream-light/15 rounded-full"
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, delay: 0.5 }
            }}
          />
        </div>
        
        <div className="text-center relative z-10">
          <motion.p 
            className="font-display text-2xl text-cream-light mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            animate={{ 
              textShadow: [
                "0 0 0 rgba(0,0,0,0)",
                "0 0 12px rgba(255, 248, 220, 0.4)",
                "0 0 0 rgba(0,0,0,0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            S & J
          </motion.p>
          <motion.p 
            className="font-body text-cream-light/70 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            December 15, 2026
          </motion.p>
        </div>
      </footer>
    </motion.div>
  );
};

export default InvitationCard;