import { motion } from "framer-motion";
import React, { useState, useMemo, useRef, useEffect, useImperativeHandle } from "react";
import { ThemeType } from "./AmbientBackground";

interface TimelineEvent {
  id: number;
  title: string;
  time: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  venue?: string;
  style?: 'horizontal' | 'vertical';
  image?: string;
  mapsUrl?: string;
}

const events: TimelineEvent[] = [
  {
    id: 1,
    title: "mandap muhurat",
    time: "9:00 AM",
    date: "Sunday, 8th March",
    description: "Seeking the Blessings of Lord Ganesha for a Joyous Beginning\n (Alongside Mehendi)",
    venue: "Kandivali Recreation Club (KRC), Shantilal Modi Road, Kandivali West",
    style: "horizontal",
    image: "/madamandup.png",
    mapsUrl: "https://maps.google.com/?q=Kandivali+Recreation+Club+KRC,+Shantilal+Modi+Road,+Kandivali+West,+Mumbai",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "mameru",
    time: "10:30 AM ",
    date: "Sunday, 8th March",
    description: "With Blessings from the Maternal Family:\n Late Yashomatiben Pravinchandra Gopani \n Smt. Rupaben Nileshbhai Gopani\n Smt. Alpaben Yogeshbhai Gopani\n \n \n(Followed by Lunch)",
    venue: "Kandivali Recreation Club (KRC), Shantilal Modi Road, Kandivali West",
    style: "horizontal",
    image: "/mameru.jpg",
    mapsUrl: "https://maps.google.com/?q=Kandivali+Recreation+Club+KRC,+Shantilal+Modi+Road,+Kandivali+West,+Mumbai",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="7" />
        <path d="M14 14l5 5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "haldi",
    time: "11:30 AM",
    date: "Sunday, 8th March",
    description: "As turmeric’s golden hues meet the glow of love, the day blossoms into beautiful shades of sunshine, laughter and memories that will last a lifetime",
    venue: "Kandivali Recreation Club (KRC), Shantilal Modi Road, Kandivali West",
    style: "horizontal",
    image: "/haldi.jpg",
    mapsUrl: "https://maps.google.com/?q=Kandivali+Recreation+Club+KRC,+Shantilal+Modi+Road,+Kandivali+West,+Mumbai",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="7" />
        <path d="M14 14l5 5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "bhakti sandhya",
    time: "7:30 PM",
    date: "Sunday, 8th March",
    description: "An evening of Devotional Music, Blessings and Spiritual togetherness\n (5:30 to 7:00 PM - Dinner)",
    venue: "Kandivali Recreation Club (KRC), Shantilal Modi Road, Kandivali West",
    style: "vertical",
    image: "/bhakti.jpg",
    mapsUrl: "https://maps.google.com/?q=Kandivali+Recreation+Club+KRC,+Shantilal+Modi+Road,+Kandivali+West,+Mumbai",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5L21 3V16" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "jaan aagman",
    time: "2:00 PM",
    date: "Tuesday, 10th March",
    description: "A grand ceremonial procession marking the groom’s joyous arrival, filled with music, celebration and blessings as he walks toward the sacred union",
    venue: "Arcadia Banquet Hall, Sumer Nagar, Borivali West, Mumbai",
    style: "horizontal",
    image: "/baaraat.jpg",
    mapsUrl: "https://maps.google.com/?q=Arcadia+Banquet+Hall,+Sumer+Nagar,+Borivali+West,+Mumbai",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "hast melap",
    time: "4:05 PM ",
    date: "Tuesday, 10th March",
    description: "A sacred and soulful ritual where two hands are joined, two hearts are united and two families are bound together in love, blessings and lifelong togetherness",
    venue: "Arcadia Banquet Hall, Sumer Nagar, Borivali West, Mumbai",
    style: "vertical",
    image: "/wedding.jpg",
    mapsUrl: "https://maps.google.com/?q=Arcadia+Banquet+Hall,+Sumer+Nagar,+Borivali+West,+Mumbai",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "reception",
    time: "6:30 PM onwards",
    date: "Tuesday, 10th March",
    description: "A grand celebration honoring love, togetherness and new beginnings\nChauvihar Facility Available\n (Followed by Dinner)",
    venue: "Arcadia Banquet Hall, Sumer Nagar, Borivali West, Mumbai",
    style: "vertical",
    image: "/reception.jpg",
    mapsUrl: "https://maps.google.com/?q=Arcadia+Banquet+Hall,+Sumer+Nagar,+Borivali+West,+Mumbai",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const getTitleStyles = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('mandap')) return 'bg-[#f74862] text-white';
  if (t.includes('mameru')) return 'bg-[#9d56f5] text-white';
  if (t.includes('haldi')) return 'bg-[#FACC15] text-white'; 
  if (t.includes('bhakti')) return 'bg-[#6a9dfc] text-white';
  if (t.includes('jaan') || t.includes('wedding') || t.includes('hast melap')) {
    return 'bg-gradient-to-r from-[#FACC15] to-[#E11D48] text-white';
  }
  return 'bg-[#0c0f4a] text-[#FDFBF7]'; 
};

const EventCard = React.forwardRef(function EventCard(
  { 
    event, 
    guestCountSuffix, 
    onUserInteraction 
  }: { 
    event: TimelineEvent; 
    guestCountSuffix: string | null;
    onUserInteraction: (id: number) => void 
  },
  ref: any
) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  useImperativeHandle(ref, () => ({
    setFlippedState: (val: boolean) => setIsFlipped(val),
  }), []);
  
  const isMameru = event.title.toLowerCase().includes('mameru');

  const handleVenueClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (event.mapsUrl) {
      window.open(event.mapsUrl, '_blank');
    }
  };

  const [venueName, ...venueAddressParts] = event.venue ? event.venue.split(',') : ["", ""];
  const venueAddress = venueAddressParts.join(',').trim();

  return (
    <motion.div
      className={`${isMameru ? 'w-80 h-[32rem] md:w-96 md:h-[32rem]' : 'w-80 h-[30rem] md:w-96 md:h-[30rem]'} z-10 cursor-pointer`}
      onClick={() => {
        setIsFlipped(!isFlipped);
        onUserInteraction(event.id);
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front side */}
        <motion.div
          className="absolute w-full h-full bg-cream rounded-lg overflow-hidden invitation-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover object-bottom"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gold/20 to-sage/20 flex items-center justify-center">
              <p className="text-center text-muted-foreground font-display">{event.title}</p>
            </div>
          )}
        </motion.div>

        {/* Back side */}
        <motion.div
          className="absolute w-full h-full bg-cream rounded-lg p-6 invitation-shadow flex flex-col overflow-y-auto"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <span className="font-display text-black text-md mb-1">{event.date}</span>
            <div className="text-black text-md font-display font-bold">
              {event.time}
            </div>
          </div>
          
          <div className="flex justify-center mb-3">
            <motion.h3 
              className={`font-display text-xl md:text-2xl px-6 py-2 rounded-full shadow-sm text-center ${getTitleStyles(event.title)}`}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {event.title}
            </motion.h3>
          </div>
          
          <div className="font-body text-black leading-snug text-base flex-grow text-center flex flex-col justify-center">
             {event.description.split('\n').map((line, i) => {
               const trimmed = line.trim();
               if (trimmed.toLowerCase().includes('dinner') && trimmed.includes('-')) {
                  const [timePart, labelPart] = trimmed.split('-');
                  return (
                      <p key={i} className="mt-1 flex items-baseline justify-center gap-2">
                          <span className="lining-nums">{timePart.trim()}</span>
                          <span className="not-italic font-sans" style={{ fontStyle: "normal" }}>-</span>
                          <span>{labelPart.trim()}</span>
                      </p>
                  );
               }
               return (
                 <p key={i} className={i > 0 ? "mt-1" : ""}>{trimmed}</p>
               );
             })}
          </div>

          {guestCountSuffix && 
           !event.title.toLowerCase().includes("jaan") && 
           !event.title.toLowerCase().includes("haldi") && (
            <div className="mt-2 mb-1 text-center">
              <span className="block text-yellow-600 font-display text-sm">
                looking forward to welcome
              </span>
              <span className="block text-yellow-600 font-display text-sm mt-1 font-bold">
                {guestCountSuffix}
              </span>
            </div>
          )}

          {event.venue && (
            <div className="w-full flex flex-col items-center gap-1 font-body text-sage-dark italic border-t border-sage/20 pt-3 mt-auto">
              <motion.button
                onClick={handleVenueClick}
                className="w-full flex flex-col items-center gap-1 hover:text-gold transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-1 text-center leading-tight">
                    <span className="text-xl">📍</span>
                    <span className="text-lg font-bold font-display not-italic">{venueName}</span>
                </div>
                {venueAddress && (
                    <span className="text-sm opacity-90 font-semibold font-body italic">{venueAddress}</span>
                )}
              </motion.button>
              <div className="text-center font-body text-sm text-sage-dark italic -mt-2 pt-0">
                <p>(Tap Above for the Google Maps.)</p>
                <p className="mt-2 text-sm opacity-90 font-semibold font-body italic">(Valet Parking Available)</p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
});
EventCard.displayName = 'EventCard';


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
    if (title.includes("bhakti")) {
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

  const getThemeForGroup = (groupTitle: string): ThemeType => {
    const t = groupTitle.toLowerCase();
    if (t.includes('mandap') || t.includes('mameru')) return 'mayra';
    if (t.includes('bhakti')) return 'bhakti';
    if (t.includes('wedding')) return 'wedding';
    if (t.includes('reception')) return 'reception';
    return 'default';
  };

  const visibleGroups = useMemo(() => {
    const baseGroups = [
      {
        title: "mandap muhurat, mameru, haldi & mehendi",
        bgColor: "bg-cream-light",
        events: events.slice(0, 3), 
      },
      {
        title: "bhakti sandhya",
        bgColor: "bg-cream-light",
        events: events.slice(3, 4), 
      },
      {
        title: "wedding",
        bgColor: "bg-cream-light",
        events: events.slice(4, 6), 
      },
      {
        title: "reception",
        bgColor: "bg-cream-light",
        events: events.slice(6, 7), 
      },
    ];

    if (!filteredEventName || filteredEventName.trim() === "") {
      return baseGroups;
    }

    const searchStr = filteredEventName.toLowerCase();
    const isWedding = searchStr.includes("wedding") || searchStr.includes("lagan") || searchStr.includes("shaadi");
    const isMayra = searchStr.includes("mayra") || searchStr.includes("mameru");
    const isReception = searchStr.includes("reception");
    const isBhakti = searchStr.includes("bhakti") || searchStr.includes("sandhya");

    return baseGroups.map(group => {
      const filteredEvents = group.events.filter(event => {
        const titleLower = event.title.toLowerCase();
        let shouldShow = false; 

        if (isWedding && (titleLower.includes("hast melap") || titleLower.includes("jaan"))) shouldShow = true;
        if (isMayra && (titleLower.includes("mameru") || titleLower.includes("mandap") || titleLower.includes("haldi"))) shouldShow = true;
        if (isReception && titleLower.includes("reception")) shouldShow = true;
        if (isBhakti && titleLower.includes("bhakti")) shouldShow = true;
        
        if (!isWedding && !isMayra && !isReception && !isBhakti) {
            if (titleLower.includes(searchStr) || searchStr.includes(titleLower)) {
                shouldShow = true;
            }
        }
        return shouldShow;
      });

      return { ...group, events: filteredEvents };
    }).filter(group => group.events.length > 0);
  }, [filteredEventName]);

  const elementRefs = useRef<Record<number, HTMLElement | null>>({});
  const cardApiRefs = useRef<Record<number, React.RefObject<any>>>({});
  const lastInteractionRef = useRef<Record<number, number>>({});
  const timersRef = useRef<Record<number, ReturnType<typeof setTimeout>>>({});
  const intersectionRatiosRef = useRef<Record<number, number>>({});
  const activeCardIdRef = useRef<number | null>(null);

  const handleUserInteraction = (id: number) => {
    lastInteractionRef.current[id] = Date.now();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idStr = (entry.target as HTMLElement).dataset.eventId;
          if (idStr) {
            intersectionRatiosRef.current[Number(idStr)] = entry.intersectionRatio;
          }
        });

        let bestId: number | null = null;
        let maxRatio = 0;

        Object.entries(intersectionRatiosRef.current).forEach(([idStr, ratio]) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestId = Number(idStr);
          }
        });

        if (maxRatio < 0.4) {
          bestId = null;
        }

        if (activeCardIdRef.current !== bestId) {
          const prevId = activeCardIdRef.current;
          activeCardIdRef.current = bestId;

          // Gently unflip the previous card
          if (prevId !== null) {
            const prevApi = cardApiRefs.current[prevId]?.current;
            clearTimeout(timersRef.current[prevId]);
            if (prevApi) {
              timersRef.current[prevId] = setTimeout(() => {
                prevApi.setFlippedState(false);
              }, 600); 
            }
          }

          // Flip the new focus card with a 2-second delay
          if (bestId !== null) {
            const nextApi = cardApiRefs.current[bestId]?.current;
            clearTimeout(timersRef.current[bestId]);
            if (nextApi) {
              timersRef.current[bestId] = setTimeout(() => {
                const lastInt = lastInteractionRef.current[bestId!] || 0;
                if (Date.now() - lastInt > 2000) {
                  nextApi.setFlippedState(true);
                }
              }, 2000); // Changed from 150 to 2000 for a 2-second delay
            }
          }
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    Object.values(elementRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, [visibleGroups]);

  return (
    <div className="relative">
      {visibleGroups.length > 0 ? (
        visibleGroups.map((group, groupIndex) => (
          <motion.div 
            key={groupIndex} 
            className="pt-0 pb-20 md:pt-4 md:pb-32 relative overflow-hidden"
            onViewportEnter={() => onThemeChange(getThemeForGroup(group.title))}
            viewport={{ amount: 0.3 }}
          >
            <div className="relative z-10 w-full flex flex-col items-center">
              <motion.h3 
                className={`text-center font-display text-2xl md:text-3xl mb-8 transition-colors duration-500 ${
                  getThemeForGroup(group.title) === 'reception' ? 'text-white' : 'text-foreground'
                }`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {group.title}
              </motion.h3>

              <div className="relative w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
                <div className="space-y-12 md:space-y-20 w-full flex flex-col items-center">
                  {group.events.map((event, eventIndex) => {
                    if (!cardApiRefs.current[event.id]) cardApiRefs.current[event.id] = React.createRef();
                    
                    const guestCountRaw = getEventSpecificGuestCount(event.title);
                    const guestCountSuffix = getGuestCountText(guestCountRaw);

                    return (
                      <div key={event.id} className="w-full flex flex-col items-center">
                        <motion.div
                          className={`relative flex items-center justify-center gap-6 md:gap-0 ${
                            eventIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                          }`}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: eventIndex * 0.15 }}
                        >
                          <div
                            data-event-id={event.id}
                            ref={(el) => (elementRefs.current[event.id] = el)}
                            className={`w-80 md:w-96 z-10 relative mx-auto ${
                              eventIndex % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                            }`}
                          >
                            <EventCard 
                              ref={cardApiRefs.current[event.id]} 
                              event={event} 
                              guestCountSuffix={guestCountSuffix}
                              onUserInteraction={handleUserInteraction} 
                            />
                            <motion.p
                              className={`text-center font-bold font-body text-sm mt-3 italic transition-colors duration-500 ${
                                  getThemeForGroup(group.title) === 'reception' ? 'text-white/60' : 'text-muted-foreground'
                              }`}
                              animate={{ opacity: [0.6, 1, 0.6] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Tap Above to Flip
                            </motion.p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Section Break */}
            {groupIndex < visibleGroups.length - 1 && (
              <motion.div 
                className="flex items-center justify-center gap-4 mt-20 relative z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="h-px w-12 bg-gold/50" />
                <span className="text-gold text-2xl">✦</span>
                <div className="h-px w-12 bg-gold/50" />
              </motion.div>
            )}
          </motion.div>
        ))
      ) : (
         <div className="py-20 text-center text-muted-foreground">
            <p className="font-display text-xl">Event details will be shared soon.</p>
         </div>
      )}
    </div>
  );
};

export default EventTimeline;