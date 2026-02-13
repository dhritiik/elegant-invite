import { motion } from "framer-motion";
import heroBackground from "/hero-background.jpg";
import logo from "/logo_sj.png"; 
import EventTimeline from "./EventTimeline";
import { useEffect, useState, useRef } from "react";
import { AmbientBackground, ThemeType } from "./AmbientBackground";

interface InvitationCardProps {
  isVisible: boolean;
}

const InvitationCard = ({ isVisible }: InvitationCardProps) => {
  const [guestDetails, setGuestDetails] = useState({
    name: "",
    guests: "",
    event: "",
    guestsMayra: "",
    guestsBhakti: "",
    guestsWedding: "",
    guestsReception: ""
  });

  const [currentTheme, setCurrentTheme] = useState<ThemeType>('default');
  
  // Ref to control the scrolling container
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestDetails({
      name: params.get("name")?.replace(/_/g, " ") || "",
      guests: params.get("guests") || "", 
      event: params.get("event")?.replace(/_/g, " ") || "",
      guestsMayra: params.get("guests_mayra") || "",
      guestsBhakti: params.get("guests_bhakti") || "",
      guestsWedding: params.get("guests_wedding") || "",
      guestsReception: params.get("guests_reception") || ""
    });
  }, []);

// Auto-scroll logic
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const container = containerRef.current;
      // Check if container exists and user hasn't scrolled down yet (buffer of 50px)
      if (container && container.scrollTop < 50) {
        const start = container.scrollTop;
        const target = window.innerHeight * 0.3; // Target: 30% down the viewport
        const distance = target - start;
        const duration = 2500; // 2.5 seconds (Much slower and smoother)
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          // Ease-in-out Cubic function: Starts slow, speeds up slightly, slows down at end
          const ease = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          container.scrollTop = start + (distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [isVisible]);


  const getMainGuestText = (count: string) => {
    if (!count) return null;
    const c = count.toLowerCase();
    if (c === 'family') return <span className="block text-sm text-sage-dark italic opacity-80 mt-1">(and Family)</span>;
    if (c === '2' || c === 'couple') return <span className="block text-sm text-sage-dark italic opacity-80 mt-1">2 seats reserved for you</span>;
    return <span className="block text-sm text-sage-dark italic opacity-80 mt-1">(Guests: {count})</span>;
  };

  return (
    <>
    <AmbientBackground currentTheme={currentTheme} />
    
    <motion.div
      ref={containerRef} // Attached ref here to control scrolling
      className="fixed inset-0 overflow-y-auto overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 1.2, delay: 0.8 }}
      onScroll={(e) => {
        const target = e.target as HTMLElement;
        if (target.scrollTop < 500) {
          if (currentTheme !== 'default') setCurrentTheme('default');
        }
      }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pb-20 md:pb-24 pt-10">
        {/* Background Image - REMOVED WHITE TINT OVERLAY */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
            {/* The gradient overlay div has been removed here */}
        </div>
        
        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-4 md:px-6 flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* LOGO SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
            className="mb-0 md:mb-12 -mt-80 md:mt-0" 
          >
            <img 
              src={logo} 
              alt="S&J Wedding Logo" 
              className="w-64 h-64 md:w-72 md:h-72 object-contain mx-auto drop-shadow-lg" 
            />
          </motion.div>

          {/* Names Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
            className="w-full text-center mt-2 md:mt-0"
          >
            {/* Saloni & Jay Combined with smaller Ampersand */}
            <motion.h1 
              className="font-imperial text-red-700 mb-0 tracking-wide leading-none [text-shadow:0.5px_0_0_currentColor]"
              animate={{ 
                textShadow: [
                  "0.5px 0 0 currentColor", 
                  "0.5px 0 0 currentColor, 0 0 15px rgba(255, 215, 0, 0.3)", 
                  "0.5px 0 0 currentColor"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Name Size */}
              <span className="text-6xl md:text-8xl lg:text-[9rem]">Saloni </span>
              
              {/* Ampersand Size (Smaller) */}
              <span className="text-4xl md:text-6xl lg:text-[6rem] px-2"> &  </span>
              
              {/* Name Size */}
              <span className="text-6xl md:text-8xl lg:text-[9rem]"> Jay </span>
            </motion.h1>
            
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          // UPDATED: Added 'left-0 right-0' for perfect centering
          // Increased 'bottom-10' to prevent it from being cut off on mobile screens
          className="absolute bottom-10 md:bottom-14 left-0 right-0 flex flex-col items-center justify-center gap-1 z-20"
          initial={{ opacity: 0 }}
          animate={isVisible ? { 
            opacity: 1, 
            y: [0, 10, 0],
          } : {}}
          transition={{ 
            opacity: { duration: 0.8, delay: 2.5 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
          }}
        >
          <motion.p
            // UPDATED: Text is now Black, Bold, and Larger (text-xl on mobile, 2xl on desktop)
            className="text-black font-bold text-xl md:text-2xl tracking-widest uppercase"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Scroll for more
          </motion.p>
          
          <motion.svg
            // UPDATED: Icon is Black and slightly larger
            className="w-6 h-6 md:w-8 md:h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 3, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </section>
      
      {/* Family Blessing Section */}
      <section className="relative bg-white/90 backdrop-blur-sm py-16 md:py-24 overflow-hidden transition-colors duration-700">
        
        <div className="container max-w-3xl mx-auto px-2 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Top decorative divider - REDUCED MARGIN BOTTOM */}
            <motion.div 
              className="flex items-center justify-center gap-2 mt-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="h-px w-16 md:w-24 bg-gold/50" />
              <span className="text-gold text-xl">✦</span>
              <div className="h-px w-16 md:w-24 bg-gold/50" />
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
              className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">
                With the divine grace & blessings of,
              </span>

              <span className="block font-bold">
                Smt. Kokilaben Lalitbhai Vora & Family
              </span>


              <span className="block">
                we warmly seek your gracious presence and blessings as we celebrate the union of two hearts and families.
              </span>
            </motion.p>

            
            {/* 3. DYNAMIC INVITATION */}
            <motion.div 
              className="font-body text-xl md:text-2xl text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We cordially invite
              
              {guestDetails.name ? (
                <div className="mt-1 mb-4">
                  <span className="block font-display font-bold text-1xl md:text-2xl text-sage-dark mb-1">
                    {guestDetails.name}
                  </span>
                  {getMainGuestText(guestDetails.guests)}
                </div>
              ) : (
                <span className="font-display font-bold text-sage-dark px-2"> You </span>
              )}
            </motion.div>

           {/* 4. EVENT CONTEXT */}
            <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed mb-3 max-w-xl mx-auto italic">
              to grace the wedding ceremony of
            </p>

            {/* 5. BRIDE & GROOM SECTION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6"
            >
              <p className="font-body font-black text-base md:text-base uppercase tracking-wide mb-1">
                (D/O Smt. Sejalben & Shri Piyushbhai Lalitbhai Vora)
              </p>

              {/* SALONI */}
              <h2 className="font-imperial text-7xl md:text-7xl text-gold mb-0 tracking-wide leading-none">
                Saloni
              </h2>

              <div className="my-2">
                <span className="font-display text-5xl text-sage-dark/60">&</span>
              </div>

              {/* JAY */}
              <h2 className="font-imperial text-7xl md:text-7xl text-gold mb-1 tracking-wide leading-none">
                Jay
              </h2>

              <p className="font-body font-black text-base md:text-base uppercase tracking-wide mt-2 mb-2">
                (S/O Late Leenaben & Shri Alpeshbhai Jeevanlal Shah)
              </p>
            </motion.div>

            {/* 6. CLOSING TEXT */}
            <motion.p 
              className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed mt-4 mb-10 max-w-xl mx-auto italic"
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
              <p className="font-display text-sage-dark text-md mb-1">With Best Compliments</p>
              <p className="font-display text-gold text-xl md:text-lg font-bold">
                <span className="block">Smt. Sejal Piyush Vora</span>
                <span className="block">Smt. Anjali Paras Vora</span>
                <span className="block mb-3">Smt. Monika Milanbhai Kothari</span>
              </p>

              <p className="font-display text-sage-dark text-md mb-1">With Love</p>
              <p className="font-display text-gold text-xl md:text-lg font-bold">
                <span className="block">Nisarg - Rahil - Jash </span>
              </p>

            </motion.div>
            
            {/* Bottom decorative divider - REDUCED MARGIN TOP */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-6"
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
           <div className="text-center mb-2">
              <h2 className={`font-display text-3xl md:text-5xl mb-2 transition-colors duration-500 ${currentTheme === 'reception' ? 'text-white' : 'text-foreground'}`}>
                the celebration
              </h2>
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
             onThemeChange={setCurrentTheme}
           />
        </div>
      </section>

      {/* Additional Details Section (tightened spacing & reduced height) */}
      <section className="relative bg-cream-light paper-texture py-8 md:py-8 overflow-hidden">
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Divider (reduced spacing) */}
            <motion.div 
              className="flex items-center justify-center gap-3 mt-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="h-px w-12 md:w-20 bg-gold/50" />
              <span className="text-gold text-xl">✦</span>
              <div className="h-px w-12 md:w-20 bg-gold/50" />
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="font-body font-black text-lg text-black leading-relaxed">
                <p>Your Blessings are the Only Gift We Desire</p>
              </div>
            </motion.div>

            {/* Bottom Divider (reduced spacing) */}
            <motion.div 
              className="flex items-center justify-center gap-3 "
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="h-px w-12 md:w-20 bg-gold/50" />
              <span className="text-gold text-xl">✦</span>
              <div className="h-px w-12 md:w-20 bg-gold/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <footer className="bg-sage pt-4 pb-12 md:pt-6 md:pb-16 relative overflow-hidden">
        <div className="text-center relative z-10 flex flex-col items-center">
          {/* Logo instead of Text */}
          <img 
             src={logo} 
             alt="S & J Logo" 
             className="w-56 h-56 md:w-74 md:h-74 object-contain mb-4 opacity-90 drop-shadow-md"
          />
          <p className="font-body text-cream-light/70 text-sm">Saloni & Jay</p>
        </div>
      </footer>
    </motion.div>
    </>
  );
};

export default InvitationCard;