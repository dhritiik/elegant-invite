import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";
import { ThemeType } from "./AmbientBackground";

interface TimelineEvent {
  id: number;
  title: string;
  time: string;
  date: string;
  description: string;
  venue?: string;
  mapsUrl?: string;
}

const events: TimelineEvent[] = [
  {
    id: 1,
    title: "mandap muhurat",
    time: "9:00 AM",
    date: "Sunday, 8th March",
    description: "Seeking the Blessings of Lord Ganesha for a Joyous Beginning (Alongside Mehendi)",
    venue: "The Taj Mahal Palace, Mumbai",
    mapsUrl: "https://maps.google.com/?q=The+Taj+Mahal+Palace,+Mumbai",
  },
  {
    id: 2,
    title: "mameru",
    time: "10:30 AM",
    date: "Sunday, 8th March",
    description: "With Blessings from the Maternal Family experience the joyous celebration of Mameru (Followed by Lunch)",
    venue: "The St. Regis Mumbai, Lower Parel",
    mapsUrl: "https://maps.google.com/?q=The+St.+Regis+Mumbai",
  },
  {
    id: 3,
    title: "haldi",
    time: "11:30 AM",
    date: "Sunday, 8th March",
    description: "As turmeric’s golden hues meet the glow of love, the day blossoms into beautiful shades of sunshine, laughter and memories that will last a lifetime",
    venue: "The St. Regis Mumbai, Lower Parel",
    mapsUrl: "https://maps.google.com/?q=The+St.+Regis+Mumbai",
  },
  {
    id: 4,
    title: "sangeet sandhya",
    time: "7:30 PM",
    date: "Sunday, 8th March",
    description: "An evening of Music, Dance and Celebration",
    venue: "Jio World Convention Centre, BKC, Mumbai",
    mapsUrl: "https://maps.google.com/?q=Jio+World+Convention+Centre",
  },
  {
    id: 5,
    title: "jaan aagman",
    time: "2:00 PM",
    date: "Tuesday, 10th March",
    description: "A grand ceremonial procession marking the groom’s joyous arrival, filled with music, celebration and blessings as he walks toward the sacred union",
    venue: "The Taj Mahal Palace, Colaba, Mumbai",
    mapsUrl: "https://maps.google.com/?q=The+Taj+Mahal+Palace,+Mumbai",
  },
  {
    id: 6,
    title: "hast melap",
    time: "4:05 PM",
    date: "Tuesday, 10th March",
    description: "A sacred and soulful ritual where two hands are joined, two hearts are united and two families are bound together in love, blessings and lifelong togetherness",
    venue: "The Taj Mahal Palace, Colaba, Mumbai",
    mapsUrl: "https://maps.google.com/?q=The+Taj+Mahal+Palace,+Mumbai",
  },
  {
    id: 7,
    title: "reception",
    time: "6:30 PM onwards",
    date: "Tuesday, 10th March",
    description: "A grand celebration honoring love, togetherness and new beginnings (Followed by Dinner)",
    venue: "The Taj Mahal Palace, Colaba, Mumbai",
    mapsUrl: "https://maps.google.com/?q=The+Taj+Mahal+Palace,+Mumbai",
  },
];

// ─── Motif Icon Helper ────────────────────────────────────────────────────────
const getMotifIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('mehendi')) return "https://pub-1cc0f6e993214be9a36badeeb631f4b6.r2.dev/templates/template09/assets/event/pn-evt-ico-mehendi-x-v01.webp";
  if (t.includes('haldi')) return "https://pub-1cc0f6e993214be9a36badeeb631f4b6.r2.dev/templates/template09/assets/event/pn-evt-ico-haldi-x-v01.webp";
  if (t.includes('sangeet') || t.includes('bhakti')) return "https://pub-1cc0f6e993214be9a36badeeb631f4b6.r2.dev/templates/template09/assets/event/pn-evt-ico-sangeet-x-v01.webp";
  if (t.includes('reception')) return "https://pub-1cc0f6e993214be9a36badeeb631f4b6.r2.dev/templates/template09/assets/event/pn-evt-ico-reception-x-v01.webp";
  if (t.includes('vidaai')) return "https://pub-1cc0f6e993214be9a36badeeb631f4b6.r2.dev/templates/template09/assets/event/pn-evt-ico-vidaai-x-v01.webp";
  return "https://pub-1cc0f6e993214be9a36badeeb631f4b6.r2.dev/templates/template09/assets/event/pn-evt-ico-shaadi-x-v01.webp";
};

// ─── Individual Scroll Stop Component ─────────────────────────────────────────
const FarmanStop = ({
  event,
  isLeft,
  guestCountSuffix,
  onThemeChange,
}: {
  event: TimelineEvent;
  isLeft: boolean;
  guestCountSuffix: string | null;
  onThemeChange: (theme: ThemeType) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const getThemeForEvent = (eventTitle: string): ThemeType => {
    const t = eventTitle.toLowerCase();
    if (t.includes('mandap') || t.includes('mameru') || t.includes('haldi')) return 'mayra';
    if (t.includes('bhakti') || t.includes('sangeet')) return 'bhakti';
    if (t.includes('jaan') || t.includes('hast melap') || t.includes('wedding')) return 'wedding';
    if (t.includes('reception')) return 'reception';
    return 'default';
  };

  const motif = getMotifIcon(event.title);

  return (
    <motion.article
      className={`farman-stop ${isLeft ? 'farman-left' : 'farman-right'} ${isOpen ? 'is-open' : ''}`}
      onViewportEnter={() => {
        setIsOpen(true);
        onThemeChange(getThemeForEvent(event.title));
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Rolled State (Visible before viewport enter, fades out when unrolling starts) */}
      {!isOpen && (
        <div className="farman-rolled-wrap">
          <img
            className="farman-rolled-img"
            src="/wedding-new-farman-rolled-x-v01.webp"
            alt=""
            draggable="false"
          />
        </div>
      )}

      {/* Open Parchment Wrapper (unrolls downwards) */}
      <motion.div
        className="farman-open-wrap"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isOpen ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        style={{ transformOrigin: "top" }}
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        <img
          className="farman-parchment-img"
          src="/wedding-new-farman-open-x-v01.webp"
          alt=""
          aria-hidden="true"
          draggable="false"
        />

        <img
          className="farman-peacock"
          src="/wedding-new-peacock.png"
          alt=""
          aria-hidden="true"
          draggable="false"
        />

        {/* Dust Layer Overlay */}
        <div className="farman-dust-layer" aria-hidden="true">
          <div className="farman-dust-dot dot-1"></div>
          <div className="farman-dust-dot dot-2"></div>
          <div className="farman-dust-dot dot-3"></div>
          <div className="farman-dust-dot dot-4"></div>
        </div>

        {/* Scroll Content (fades in once unrolled) */}
        <motion.div
          className="farman-content"
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          aria-label={`${event.title} details`}
        >
          <img className="farman-motif" src={motif} alt="motif" />
          <h3 className="farman-name">{event.title}</h3>
          <div className="farman-rule" aria-hidden="true"></div>
          <p className="farman-datetime">{event.date} · {event.time}</p>
          <p className="farman-venue">{event.venue}</p>

          <div className="farman-note">
            {event.description.split('\n').map((line, i) => (
              <p key={i} className={i > 0 ? "mt-1" : ""}>{line.trim()}</p>
            ))}
          </div>

          {guestCountSuffix && (
            <p className="farman-guest-count">
              looking forward to welcome: {guestCountSuffix}
            </p>
          )}

          {event.mapsUrl && (
            <a className="farman-map" href={event.mapsUrl} target="_blank" rel="noreferrer">
              <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                <path d="M5.5 0C2.46 0 0 2.46 0 5.5c0 4.12 5.5 8.5 5.5 8.5S11 9.62 11 5.5C11 2.46 8.54 0 5.5 0Z" fill="currentColor" opacity=".72"></path>
                <circle cx="5.5" cy="5.5" r="2" fill="#fff" opacity=".88"></circle>
              </svg>Open in Maps
            </a>
          )}
          <div className="farman-map-rule" aria-hidden="true"></div>
        </motion.div>

        {/* Roller effect at bottom edge (slides down with the bottom as container scales) */}
        {!animationComplete && (
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full flex justify-center"
            style={{ marginBottom: '-10px' }}
          >
            <img
              src="/wedding-new-farman-rolled-x-v01.webp"
              alt=""
              style={{
                width: '70%',
                maxWidth: '220px',
                height: 'auto'
              }}
            />
          </div>
        )}
      </motion.div>
    </motion.article>
  );
};

// ─── Main Timeline Component ─────────────────────────────────────────────────
interface EventTimelineProps {
  filteredEventName?: string;
  guestCounts?: {
    global: string;
    mayra: string;
    bhakti: string;
    wedding: string;
    reception: string;
  };
  onThemeChange: (theme: ThemeType) => void;
}

const EventTimeline = ({ filteredEventName, guestCounts, onThemeChange }: EventTimelineProps) => {
  const getEventSpecificGuestCount = (eventTitle: string) => {
    if (!guestCounts) return "";
    const title = eventTitle.toLowerCase();
    if (title.includes("mandap") || title.includes("mameru") || title.includes("haldi")) {
      return guestCounts.mayra || guestCounts.global;
    }
    if (title.includes("bhakti") || title.includes("sangeet")) {
      return guestCounts.bhakti || guestCounts.global;
    }
    if (title.includes("jaan") || title.includes("hast melap") || title.includes("wedding")) {
      return guestCounts.wedding || guestCounts.global;
    }
    if (title.includes("reception")) {
      return guestCounts.reception || guestCounts.global;
    }
    return guestCounts.global;
  };

  const getGuestCountText = (countStr: string) => {
    if (!countStr) return null;
    const c = countStr.toLowerCase();
    if (c === 'family') return "your family";
    if (c === '2' || c === 'couple') return "2 guests";
    if (c === '1') return "1 guest";
    if (!isNaN(Number(countStr))) return `${countStr} guests`;
    return `${countStr}`;
  };

  const activeEvents = useMemo(() => {
    if (!filteredEventName || filteredEventName.trim() === "") {
      return events;
    }

    const searchStr = filteredEventName.toLowerCase();
    const isWedding = searchStr.includes("wedding") || searchStr.includes("lagan") || searchStr.includes("shaadi");
    const isMayra = searchStr.includes("mayra") || searchStr.includes("mameru");
    const isReception = searchStr.includes("reception");
    const isBhakti = searchStr.includes("bhakti") || searchStr.includes("sandhya") || searchStr.includes("sangeet");

    return events.filter(event => {
      const titleLower = event.title.toLowerCase();
      let shouldShow = false;

      if (isWedding && (titleLower.includes("hast melap") || titleLower.includes("jaan"))) shouldShow = true;
      if (isMayra && (titleLower.includes("mameru") || titleLower.includes("mandap") || titleLower.includes("haldi"))) shouldShow = true;
      if (isReception && titleLower.includes("reception")) shouldShow = true;
      if (isBhakti && (titleLower.includes("bhakti") || titleLower.includes("sangeet"))) shouldShow = true;

      if (!isWedding && !isMayra && !isReception && !isBhakti) {
        if (titleLower.includes(searchStr) || searchStr.includes(titleLower)) {
          shouldShow = true;
        }
      }
      return shouldShow;
    });
  }, [filteredEventName]);

  return (
    <div className="evt-journey">
      {/* Self-contained styling for the Farman / scroll stops timeline */}
      {/* Self-contained styling for the Farman / scroll stops timeline */}
      <style>{`
        .evt-journey {
          position: relative;
          width: 100%;
          padding: 40px 0;
        }

        .evt-path-wrap {
          display: none;
        }

        .evt-stops {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 60px;
          width: 100%;
        }

        .farman-stop {
          position: relative;
          width: 98%;
          max-width: 520px;
          margin: 0 auto; /* Centers perfectly on mobile */
          z-index: 5;
        }

        /* Desktop Layout stays alternating */
        @media (min-width: 768px) {
          .farman-left {
            margin-right: calc(50% + 20px);
            margin-left: auto;
          }
          .farman-right {
            margin-left: calc(50% + 20px);
            margin-right: auto;
          }
        }

        .farman-rolled-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
        }

        .farman-rolled-img {
          width: 85%;
          max-width: 280px;
          height: auto;
        }

        .farman-open-wrap {
          position: relative;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.18);
        }

        .farman-parchment-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          border-radius: 12px;
          z-index: 1;
        }

        .farman-peacock {
          position: absolute;
          top: -40px;
          right: -10px;
          width: 120px;
          height: auto;
          z-index: 15;
          pointer-events: none;
          opacity: 0.95;
        }

        @media (min-width: 768px) {
          .farman-peacock {
            width: 160px;
            top: -50px;
            right: -20px;
          }
        }

        .farman-content {
          position: relative;
          z-index: 10;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .farman-motif {
          width: 75px;
          height: auto;
          margin-bottom: 18px;
        }

        .farman-name {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #863745;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .farman-rule {
          width: 80px;
          height: 1px;
          background-color: #d8c29d;
          margin-bottom: 14px;
        }

        .farman-datetime {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #3b4435;
          margin-bottom: 8px;
        }

        .farman-venue {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #4f5348;
          margin-bottom: 12px;
        }

        .farman-note {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-style: italic;
          color: #4f5348;
          line-height: 1.45;
          margin-bottom: 22px;
          max-width: 95%;
        }

        .farman-guest-count {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: #863745;
          font-weight: 700;
          margin-top: -6px;
          margin-bottom: 18px;
          font-style: italic;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .farman-map {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #c79b4a;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: color 0.2s;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .farman-map:hover {
          color: #863745;
        }

        .farman-map-rule {
          width: 60px;
          height: 1px;
          background-color: #e5d9c5;
          margin-top: 10px;
        }

        .farman-inter {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 15px 0;
          position: relative;
          z-index: 5;
        }

        @media (min-width: 768px) {
          .farman-inter {
            margin: 20px 0;
          }
        }

        .farman-inter--lotus img {
          width: 120px;
          max-width: 160px;
          height: auto;
          opacity: 0.85;
          display: block;
        }

        @media (min-width: 768px) {
          .farman-inter--lotus img {
            width: 160px;
            max-width: 200px;
          }
        }

        .farman-dust-layer {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }

        .farman-dust-dot {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(216, 169, 87, 0.4);
          animation: floatDust 6s infinite ease-in-out;
        }

        .dot-1 {
          width: 3px;
          height: 3px;
          left: 20%;
          bottom: 25%;
          animation-duration: 5s;
          animation-delay: 1s;
        }

        .dot-2 {
          width: 4px;
          height: 4px;
          right: 25%;
          top: 30%;
          animation-duration: 7s;
          animation-delay: 2s;
        }

        .dot-3 {
          width: 2.5px;
          height: 2.5px;
          left: 60%;
          top: 40%;
          animation-duration: 6s;
          animation-delay: 0.5s;
        }

        .dot-4 {
          width: 3.5px;
          height: 3.5px;
          right: 40%;
          bottom: 35%;
          animation-duration: 8s;
          animation-delay: 3s;
        }

        @keyframes floatDust {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 0.8;
          }
        }
      `}</style>

      {activeEvents.length > 0 ? (
        <>
          <div className="evt-stops" role="list">
            {activeEvents.map((event, index) => {
              const guestCountRaw = getEventSpecificGuestCount(event.title);
              const guestCountSuffix = getGuestCountText(guestCountRaw);
              const isLeft = index % 2 === 0;

              return (
                <React.Fragment key={event.id}>
                  <FarmanStop
                    event={event}
                    isLeft={isLeft}
                    guestCountSuffix={guestCountSuffix}
                    onThemeChange={onThemeChange}
                  />

                  {/* Inter-stop Divider */}
                  {index < activeEvents.length - 1 && (
                    index === 2 ? (
                      <div className="farman-inter farman-inter--lotus" aria-hidden="true">
                        <img
                          src="https://pub-1cc0f6e993214be9a36badeeb631f4b6.r2.dev/templates/template09/assets/invite/pn-inv-div-lotus-divider-x-v01.webp"
                          alt=""
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="farman-inter" aria-hidden="true">
                        <svg width="88" height="18" viewBox="0 0 88 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id={`fgl-${event.id}`} x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="rgba(216,169,87,0)"></stop>
                              <stop offset="100%" stopColor="rgba(216,169,87,.48)"></stop>
                            </linearGradient>
                            <linearGradient id={`fgr-${event.id}`} x1="56" y1="0" x2="88" y2="0" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="rgba(216,169,87,.48)"></stop>
                              <stop offset="100%" stopColor="rgba(216,169,87,0)"></stop>
                            </linearGradient>
                          </defs>
                          <line x1="0" y1="9" x2="32" y2="9" stroke={`url(#fgl-${event.id})`} strokeWidth="1"></line>
                          <circle cx="37" cy="9" r="1.8" fill="rgba(216,169,87,.38)"></circle>
                          <circle cx="44" cy="9" r="3.2" fill="rgba(216,169,87,.58)"></circle>
                          <circle cx="51" cy="9" r="1.8" fill="rgba(216,169,87,.38)"></circle>
                          <line x1="56" y1="9" x2="88" y2="9" stroke={`url(#fgr-${event.id})`} strokeWidth="1"></line>
                        </svg>
                      </div>
                    )
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </>
      ) : (
        <div className="py-20 text-center text-[#4f5348] italic font-serif">
          <p className="text-xl">Event details will be shared soon.</p>
        </div>
      )}
    </div>
  );
};

export default EventTimeline;