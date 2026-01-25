import { motion } from "framer-motion";
import { useState, useMemo } from "react";
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
    title: "Mandap Muhurat",
    time: "9:00 AM",
    date: "Sunday, 8th March",
    description: "Invoking the Blessings of Lord Ganesha for a Joyous Beginning",
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
    title: "Mameru",
    time: "10:30 AM ",
    date: "Sunday, 8th March",
    description: "A Shower of Blessings and Love from the Maternal Family",
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
    title: "Haldi & Mehendi ",
    time: "11:30 AM onwards",
    date: "Sunday, 8th March",
    description: "Hues of Turmeric + Glow of Love = Shades of Sunshine",
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
    title: "Bhakti Sandhya",
    time: "7:30 PM",
    date: "Sunday, 8th March",
    description: "An evening of devotional music, blessings, and spiritual togetherness\n Choviyaar Compulsory",
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
    title: "Baraat Prasthan",
    time: "2:30 PM",
    date: "Tuesday, 10th March",
    description: "The ceremonial procession marking the arrival of the groom",
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
    title: "Hast Melap",
    time: "4:05 PM ",
    date: "Tuesday, 10th March",
    description: "The sacred union where two hands, two hearts, and two families come together",
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
    title: "Reception",
    time: "7:30 PM onwards",
    date: "Tuesday, 10th March",
    description: "A grand celebration honoring love, togetherness and new beginnings\nChoviyaar Facility Available",
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
    if (title.includes("baraat") || title.includes("hast melap") || title.includes("wedding")) {
      return guestCounts.wedding || guestCounts.global;
    }
    if (title.includes("reception")) {
      return guestCounts.reception || guestCounts.global;
    }
    
    return guestCounts.global;
  };

  const getGuestDisplayString = (countStr: string) => {
    if (!countStr) return null;
    const c = countStr.toLowerCase();
    if (c === 'family') return "Looking forward to welcome your Family ";
    if (c === '2' || c === 'couple') return "Looking forward to welcome 2 guests";
    if (c === '1' || c === 'couple') return "Looking forward to welcome 1 guest";
    if (!isNaN(Number(countStr))) return `Looking forward to welcome ${countStr} guests`;
    return `${countStr} Invited`;
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
        title: "madamandap, mameru, haldi & mehendi",
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

        if (isWedding) {
          if (titleLower.includes("hast melap") || titleLower.includes("baraat")) {
            shouldShow = true;
          }
        }
        if (isMayra) {
          if (titleLower.includes("mameru") || titleLower.includes("mandap") || titleLower.includes("haldi")) {
            shouldShow = true;
          }
        }
        if (isReception) {
          if (titleLower.includes("reception")) {
            shouldShow = true;
          }
        }
        if (isBhakti) {
          if (titleLower.includes("bhakti")) {
            shouldShow = true;
          }
        }
        
        if (!isWedding && !isMayra && !isReception && !isBhakti) {
            if (titleLower.includes(searchStr) || searchStr.includes(titleLower)) {
                shouldShow = true;
            }
        }

        return shouldShow;
      });

      return {
        ...group,
        events: filteredEvents
      };
    }).filter(group => group.events.length > 0);
  }, [filteredEventName]);

  const EventCard = ({ event }: { event: TimelineEvent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const guestCountRaw = getEventSpecificGuestCount(event.title);
    const guestCountDisplay = getGuestDisplayString(guestCountRaw);

    const handleVenueClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (event.mapsUrl) {
        window.open(event.mapsUrl, '_blank');
      }
    };

    return (
      <motion.div
        className="w-80 h-96 md:w-96 md:h-[28rem] z-10 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
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
            <motion.div
              className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-white font-display text-sm">Click to flip</p>
            </motion.div>
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
              <span className="font-display text-sage-dark text-md mb-1">{event.date}</span>
              <motion.div
                className="bg-sage-dark text-cream-light px-4 py-2 rounded-full text-md font-display font-bold"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {event.time}
              </motion.div>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 text-center">
              {event.title}
            </h3>
            
            <div className="font-body text-muted-foreground leading-relaxed mb-4 text-base flex-grow text-center">
               {event.description.split('\n').map((line, i) => (
                 <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
               ))}
            </div>

            {guestCountDisplay && (
              <div className="mb-3 text-center">
                <span className="text-black font-display italic text-base border-b border-black/30 pb-1">
                  {guestCountDisplay}
                </span>
              </div>
            )}

            {event.venue && (
              <motion.button
                onClick={handleVenueClick}
                className="font-body text-base md:text-base text-sage italic border-t border-sage/20 pt-3 mt-auto hover:text-gold transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                📍 {event.venue}
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="relative">
      {visibleGroups.length > 0 ? (
        visibleGroups.map((group, groupIndex) => (
          <motion.div 
            key={groupIndex} 
            // Removed group.bgColor so transparency works for the ambient background
            className="py-20 md:py-32 relative overflow-hidden"
            onViewportEnter={() => onThemeChange(getThemeForGroup(group.title))}
            viewport={{ amount: 0.3 }}
          >
            {/* Removed Animated background circles */}

            <div className="relative z-10 w-full flex flex-col items-center">
              <motion.h3 
                // Dynamic text color for reception theme
                className={`text-center font-display text-2xl md:text-3xl mb-16 transition-colors duration-500 ${
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
                  {group.events.map((event, eventIndex) => (
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
                        <div className={`w-80 md:w-96 z-10 relative mx-auto ${
                            eventIndex % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                        }`}>
                          <EventCard event={event} />
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
                  ))}
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