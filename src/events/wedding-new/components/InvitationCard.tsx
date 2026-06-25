import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AmbientBackground, ThemeType } from "./AmbientBackground";
import EventTimeline from "./EventTimeline";

// ─── Asset paths (all in /public) ────────────────────────────────────────────
const courtyardLit = "/wedding-new-courtyard-lit-m-v03.webp";
const floralLeft = "/wedding-new-floral-lefttop.webp";
const floralRight = "/wedding-new-floral-righttop.webp";
const elephant = "/wedding-new-elephant-main.webp";
const peacock = "/wedding-new-peacock.png";
const menuBg = "/wedding-new-Menu_background.webp";
const chhatri = "/wedding-new-chhatri-ornate.webp";
const compass_icon = "/wedding-new-compass.webp";
const music_icon = "/wedding-new-music_icon.webp";
const ARCH_BG = "/wedding-new-inv-fr-card-m-v01.webp";

// ─── Guest-details shape ──────────────────────────────────────────────────────
interface GuestDetails {
  name: string;
  guests: string;
  event: string;
  guestsMayra: string;
  guestsBhakti: string;
  guestsWedding: string;
  guestsReception: string;
}

interface InvitationCardProps {
  isVisible: boolean;
  isMuted?: boolean;
  onMuteChange?: (muted: boolean) => void;
  audioRef?: React.RefObject<HTMLAudioElement>;
}

// ─── Helper: turn a raw guest-count string into readable text ─────────────────
const formatGuestCount = (count: string): React.ReactNode | null => {
  if (!count) return null;
  const c = count.toLowerCase();
  if (c === "family") return <span className="block text-sm italic opacity-80 mt-1">(and Family)</span>;
  if (c === "2" || c === "couple") return <span className="block text-sm italic opacity-80 mt-1">2 seats reserved for you</span>;
  if (c === "1") return <span className="block text-sm italic opacity-80 mt-1">1 seat reserved for you</span>;
  return <span className="block text-sm italic opacity-80 mt-1">({count} seats reserved)</span>;
};

// ─── Main Component ───────────────────────────────────────────────────────────
const InvitationCard = ({ isVisible, isMuted = false, onMuteChange, audioRef }: InvitationCardProps) => {
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    name: "",
    guests: "",
    event: "",
    guestsMayra: "",
    guestsBhakti: "",
    guestsWedding: "",
    guestsReception: "",
  });

  const [currentTheme, setCurrentTheme] = useState<ThemeType>("default");
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse URL query params for personalisation
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setGuestDetails({
      name: p.get("name")?.replace(/_/g, " ") || "",
      guests: p.get("guests") || "",
      event: p.get("event")?.replace(/_/g, " ") || "",
      guestsMayra: p.get("guests_mayra") || "",
      guestsBhakti: p.get("guests_bhakti") || "",
      guestsWedding: p.get("guests_wedding") || "",
      guestsReception: p.get("guests_reception") || "",
    });
  }, []);

  // Auto-scroll after envelope opens
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (container && container.scrollTop < 50) {
        const start = container.scrollTop;
        const target = window.innerHeight * 0.3;
        const distance = target - start;
        const duration = 2500;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          container.scrollTop = start + distance * ease;
          if (elapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-[#fae9ec]"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8 }}
      onScroll={(e) => {
        const target = e.target as HTMLElement;
        if (target.scrollTop < 500 && currentTheme !== "default") {
          setCurrentTheme("default");
        }
      }}
    >
      <AmbientBackground currentTheme={currentTheme} />

      {/* ══════════════════════════════════════════════════════════
          INVITE SECTION (Perfectly Centered Oversized Arch)
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center py-4 bg-cover bg-center bg-no-repeat overflow-hidden"
        id="invite"
        style={{ backgroundImage: "url('/wedding-new-bg-panel-m-v01.webp')" }}
      >
        {/* Scoped CSS Style Tag with optimized scaling & centering fixes */}
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Base layout defaults (< 385px) */
          .arch-container { 
            width: 125vw; 
            max-width: 850px; 
            flex-shrink: 0; /* FIX: Forces perfect symmetry without negative margin bugs */
          }
          .font-div-blessings { font-size: 0.85rem; }
          .font-div-name-g { font-size: 3.4rem; }
          .font-div-name-b { font-size: 2.9rem; }
          .font-div-parents { font-size: 0.8rem; }
          .font-div-invite-label { font-size: 0.85rem; }
          .font-div-guest-target { font-size: 1.4rem; }
          .font-div-date-stamp { font-size: 1.9rem; }
          .btn-div-cta { padding: 12px 40px; font-size: 0.8rem; }
          .safe-zone-content { gap: 1rem; }

          /* TARGETED ALIGNMENT FIX: 385px - 640px viewports */
          @media (min-width: 385px) and (max-width: 640px) {
            .arch-container {
              width: 95vw !important;
            }
            .font-div-blessings { font-size: calc(0.75rem + 0.5vw) !important; }
            .font-div-name-g { font-size: calc(2.6rem + 1vw) !important; }
            .font-div-name-b { font-size: calc(2.2rem + 1vw) !important; }
            .font-div-parents { font-size: calc(0.68rem + 0.4vw) !important; }
            .font-div-invite-label { font-size: calc(0.72rem + 0.4vw) !important; }
            .font-div-guest-target { font-size: calc(1.15rem + 0.6vw) !important; }
            .font-div-date-stamp { font-size: calc(1.6rem + 0.8vw) !important; }
            .btn-div-cta { 
              padding: 10px 36px !important; 
              font-size: calc(0.72rem + 0.3vw) !important; 
            }
            .safe-zone-content { 
              gap: 0.5rem !important; 
              padding-top: 4% !important;
            }
          }

          /* Desktop / Tablet Breakpoints (> 640px) */
          @media (min-width: 641px) {
            .arch-container { 
              width: 95vw !important; 
              max-width: 850px !important; 
            }
            .font-div-blessings { font-size: 1.15rem; }
            .font-div-name-g { font-size: 4.8rem; }
            .font-div-name-b { font-size: 4rem; }
            .font-div-parents { font-size: 1.05rem; }
            .font-div-invite-label { font-size: 1.05rem; }
            .font-div-guest-target { font-size: 2rem; }
            .font-div-date-stamp { font-size: 2.6rem; }
            .btn-div-cta { padding: 16px 52px; font-size: 0.95rem; }
            .safe-zone-content { gap: 1.5rem; }
          }
        `}} />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 pointer-events-none">
          {onMuteChange && (
            <button
              onClick={() => onMuteChange(!isMuted)}
              className="w-12 h-12 rounded-full bg-[#fdfbf7] shadow-lg border border-[#e5d9c5] flex items-center justify-center hover:scale-105 transition-all relative pointer-events-auto cursor-pointer"
              title={isMuted ? "Unmute Music" : "Mute Music"}
            >
              <img src={music_icon} alt="Music" className="w-6 h-6 object-contain" />
              {isMuted && <div className="absolute w-8 h-[2px] bg-[#863745] rotate-45" />}
            </button>
          )}
          <a
            href="#events"
            className="w-14 h-14 rounded-full bg-[#fdfbf7] shadow-lg border border-[#e5d9c5] flex items-center justify-center hover:scale-105 transition-transform pointer-events-auto"
            title="View Events"
          >
            <img src={compass_icon} alt="Menu" className="w-full h-full object-contain scale-110" />
          </a>
        </div>

        {/* Arch Asset Layer container (flex-shrink-0 ensures perfect centering) */}
        <div className="arch-container relative aspect-[1/1.65] drop-shadow-2xl shrink-0">
          <img
            src={ARCH_BG}
            alt="Floral Arch"
            className="absolute inset-0 w-full h-full object-fill z-10 pointer-events-none"
          />

          {/* 
            SAFE ZONE BLOCK: 
            Centered internally using flex-col justify-center. 
          */}
          <motion.div
            className="absolute z-20 flex flex-col items-center justify-center text-center"
            style={{
              top: '28.5%',
              bottom: '23%',
              left: '16%',
              right: '16%'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center safe-zone-content">

              <p className="font-serif italic text-[#4f5348] font-div-blessings leading-tight m-0">
                With the blessings of the divine<br />and the love of our families
              </p>

              <div className="w-[65%] h-[1px] bg-[#d8c29d] opacity-40" />

              {/* Names Block */}
              <div className="flex flex-col items-center leading-none">
                <h1 className="font-imperial italic font-div-name-g text-[#c79b4a] mb-0.5">Arjun</h1>
                <h1 className="font-imperial italic font-div-name-b text-[#c79b4a]">&amp; Meera</h1>
              </div>

              <div className="w-[65%] h-[1px] bg-[#d8c29d] opacity-40" />

              {/* Parents Block */}
              <div className="space-y-0.5 text-center w-full">
                <p className="font-serif text-[#4f5348] font-div-parents italic leading-tight m-0">
                  D/O Shri Mahendrabhai &amp; Smt. Sandhyaben Patel
                </p>
                <p className="font-serif text-[#4f5348] font-div-parents italic leading-tight m-0">
                  S/O Shri Rameshbhai &amp; Smt. Sumitraben Sharma
                </p>
              </div>

              {/* Personalised Invite Target Context Block */}
              {guestDetails.name ? (
                <div className="flex flex-col items-center text-center">
                  <p className="font-serif text-[#4f5348] font-div-invite-label italic m-0">cordially invite</p>
                  <span className="block font-serif font-bold font-div-guest-target text-[#8b1a1a] mt-0.5 leading-tight">
                    {guestDetails.name}
                  </span>
                  {guestDetails.guests && (
                    <span className="block font-serif text-[0.65rem] sm:text-xs text-[#7a5c3a] italic mt-0.5">
                      {formatGuestCount(guestDetails.guests)}
                    </span>
                  )}
                  <p className="font-serif text-[#4f5348] font-div-invite-label italic mt-0.5 m-0">
                    to celebrate their wedding
                  </p>
                </div>
              ) : (
                <p className="font-serif text-[#4f5348] font-div-invite-label italic m-0">
                  invite you to celebrate their wedding
                </p>
              )}

              {/* CTA Action Trigger Link */}
              <a
                href="#events"
                className="bg-[#3b4435] text-[#d8c29d] btn-div-cta tracking-[0.2em] uppercase hover:bg-[#2c3326] transition-colors z-30 shadow-md font-bold"
              >
                View Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════
          EVENTS TIMELINE
      ══════════════════════════════════════════════════════════ */}
      <section
        id="events"
        className="relative py-20 bg-[#1e132a]" // Dark violet background
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#c79b4a] uppercase tracking-widest text-xs mb-2 font-bold">Celebration Journey</p>
            <h2 className="font-serif text-4xl text-[#fdfbf7] italic">Our Events</h2>
          </div>
          <EventTimeline
            filteredEventName={guestDetails.event}
            guestCounts={{
              global: guestDetails.guests,
              mayra: guestDetails.guestsMayra,
              bhakti: guestDetails.guestsBhakti,
              wedding: guestDetails.guestsWedding,
              reception: guestDetails.guestsReception,
            }}
            onThemeChange={setCurrentTheme}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMPLIMENTS SECTION
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/wedding-new-bg-secret-garden-m-v01.webp')" }}
      >
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <motion.div
            className="bg-[#fdfbf7]/85 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[#e5d9c5] shadow-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#d8c29d]" />
              <span className="text-[#c79b4a] text-lg">✦</span>
              <div className="h-px w-10 bg-[#d8c29d]" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-serif text-[#7a5c3a] text-xs uppercase tracking-widest mb-2 font-bold">With Best Compliments</p>
                <p className="font-serif text-[#4f5348] text-sm md:text-base leading-relaxed italic">
                  Smt. Kamlaben &amp; Shri Nareshbhai Sharma<br />
                  Smt. Induben &amp; Shri Bhaveshbhai Patel
                </p>
              </div>

              <div>
                <p className="font-serif text-[#7a5c3a] text-xs uppercase tracking-widest mb-2 font-bold">With Love</p>
                <p className="font-serif text-[#4f5348] text-sm md:text-base italic">
                  Riya · Karan · Priti
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-10 bg-[#d8c29d]" />
              <span className="text-[#c79b4a] text-lg">✦</span>
              <div className="h-px w-10 bg-[#d8c29d]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BLESSINGS STRIP
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative py-10 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/wedding-new-bg-secret-garden-m-v01.webp')" }}
      >
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c79b4a]" />
              <span className="text-[#c79b4a] text-sm">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c79b4a]" />
            </div>

            <p className="font-serif text-[#863745] text-lg italic tracking-wide">
              Your Blessings are the Only Gift We Desire
            </p>

            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c79b4a]" />
              <span className="text-[#c79b4a] text-sm">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c79b4a]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer className="bg-[#2c1a0e] pt-8 pb-20 relative overflow-hidden">
        <img
          src={peacock}
          alt=""
          className="absolute right-0 bottom-0 w-32 md:w-48 opacity-10 pointer-events-none select-none"
        />
        <img
          src={peacock}
          alt=""
          className="absolute left-0 bottom-0 w-32 md:w-48 opacity-10 pointer-events-none select-none"
          style={{ transform: "scaleX(-1)" }}
        />

        <div className="text-center relative z-10 flex flex-col items-center gap-3">
          <img
            src={menuBg}
            alt="A & M"
            className="w-28 h-28 md:w-40 md:h-40 object-contain opacity-90 drop-shadow-lg"
          />
          <p className="font-serif text-[#e8b4b8]/70 text-sm tracking-widest">
            Arjun &amp; Meera
          </p>
          <p className="font-serif text-[#c79b4a]/50 text-xs tracking-widest uppercase">
            With Love &amp; Joy
          </p>
        </div>
      </footer>

    </motion.div>
  );
};

export default InvitationCard;
