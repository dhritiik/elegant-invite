import { motion } from "framer-motion";
import { useState, useMemo } from "react";

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
    description: "Sacred wedding pavilion ceremony marking the beginning of our celebrations",
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
    description: "Mameru ceremony",
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
    time: "11:00 AM onwards",
    date: "Sunday, 8th March",
    description: "Haldi ceremony & Mehendi alongside. Lunch to follow.",
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
    description: "An evening of devotional music, blessings, and spiritual togetherness. Choviyaar Compulsory.",
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
    title: "Baarat Prasthan",
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
    description: "The sacred union ceremony followed by reception & dinner. Choviyaar facility available.",
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
    description: "The sacred union ceremony followed by reception & dinner. Choviyaar facility available.",
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
}

const EventTimeline = ({ filteredEventName }: EventTimelineProps) => {
  // We use useMemo to calculate the visible groups based on the URL parameter
  const visibleGroups = useMemo(() => {
    // 1. Define the base groups (structure)
    const baseGroups = [
      {
        title: "Sunday, 8th March - Morning Celebrations",
        bgColor: "bg-cream-light",
        events: events.slice(0, 3), // Mandap, Mameru, Haldi
      },
      {
        title: "Sunday, 8th March - Evening Celebration",
        bgColor: "bg-cream-light",
        events: events.slice(3, 4), // Bhakti Sandhya
      },
      {
        title: "Tuesday, 10th March - Wedding Ceremonies",
        bgColor: "bg-cream-light",
        events: events.slice(4, 6), // Baarat, Hast Melap
      },
      {
        title: "Tuesday, 10th March - Reception",
        bgColor: "bg-cream-light",
        events: events.slice(6, 7), // Reception
      },
    ];

    // 2. If no filter is applied, return all groups
    if (!filteredEventName || filteredEventName.trim() === "") {
      return baseGroups;
    }

    const searchStr = filteredEventName.toLowerCase();

    // 3. Define Keywords to map URL text to Timeline Events
    const isWedding = searchStr.includes("wedding") || searchStr.includes("lagan") || searchStr.includes("shaadi");
    const isMayra = searchStr.includes("mayra") || searchStr.includes("mameru");
    const isReception = searchStr.includes("reception");
    const isBhakti = searchStr.includes("bhakti") || searchStr.includes("sandhya");

    // 4. Filter the groups
    return baseGroups.map(group => {
      // Filter events inside this group
      const filteredEvents = group.events.filter(event => {
        const titleLower = event.title.toLowerCase();

        // Specific Mapping Logic
        if (isWedding) {
          // If URL says Wedding, show Baarat (5) & Hast Melap (6)
          return titleLower.includes("hast melap") || titleLower.includes("baarat");
        }
        if (isMayra) {
          // If URL says Mayra, show Mameru (2) (and Mandap/Haldi if you prefer, but strict mapping is below)
          return titleLower.includes("mameru") || titleLower.includes("mandap") || titleLower.includes("haldi");
        }
        if (isReception) {
          return titleLower.includes("reception");
        }
        if (isBhakti) {
          return titleLower.includes("bhakti");
        }
        
        // Fallback: simple text match (e.g. "Haldi" matches "Haldi")
        return titleLower.includes(searchStr) || searchStr.includes(titleLower);
      });

      // Return the group with the new filtered events list
      return {
        ...group,
        events: filteredEvents
      };
    }).filter(group => group.events.length > 0); // Remove groups that became empty
  }, [filteredEventName]);

  // Flip Card Component
  const EventCard = ({ event }: { event: TimelineEvent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleVenueClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (event.mapsUrl) {
        window.open(event.mapsUrl, '_blank');
      }
    };

    return (
      <motion.div
        className="w-80 h-80 md:w-96 md:h-96 z-10 cursor-pointer"
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
          {/* Front side - Image */}
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
            {/* Click indicator on front */}
            <motion.div
              className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-white font-display text-sm">Click to flip</p>
            </motion.div>
          </motion.div>

          {/* Back side - Content */}
          <motion.div
            className="absolute w-full h-full bg-cream rounded-lg p-6 invitation-shadow flex flex-col overflow-y-auto"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="bg-sage-dark text-cream-light px-4 py-2 rounded-full text-sm font-display font-bold"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {event.time}
              </motion.div>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 text-center">
              {event.title}
            </h3>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-4 text-base flex-grow">
              {event.description}
            </p>

            {event.venue && (
              <motion.button
                onClick={handleVenueClick}
                className="font-body text-sm text-sage italic border-t border-sage/20 pt-3 mt-auto hover:text-gold transition-colors cursor-pointer"
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
          <div key={groupIndex} className={`${group.bgColor} py-20 md:py-32 relative overflow-hidden`}>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 border border-gold/15 rounded-full"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity }
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-16 h-16 border border-sage/20 rounded-full"
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, delay: 0.5 }
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Section Title */}
              <motion.h3 
                className="text-center font-display text-2xl md:text-3xl text-foreground mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {group.title}
              </motion.h3>

              {/* Vertical Timeline for this group */}
              <div className="relative max-w-4xl mx-auto px-6">
                <div className="space-y-12 md:space-y-20">
                  {group.events.map((event, eventIndex) => (
                    <div key={event.id}>
                      <motion.div
                        className={`relative flex items-center gap-6 md:gap-0 ${
                          eventIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                        initial={{ opacity: 0, x: eventIndex % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: eventIndex * 0.15 }}
                      >
                        {/* Flip Card Content */}
                        <div className={`w-80 md:w-96 z-10 ${
                          eventIndex % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                        }`}>
                          <EventCard event={event} />
                        </div>
                      </motion.div>

                      {/* Divider between events */}
                      {eventIndex < group.events.length - 1 && (
                        <motion.div 
                          className="flex items-center justify-center gap-4 mt-20 relative z-20"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <motion.div 
                            className="h-px w-12 bg-gold/50"
                            animate={{ scaleX: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.span 
                            className="text-gold text-2xl"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            ✦
                          </motion.span>
                          <motion.div 
                            className="h-px w-12 bg-gold/50"
                            animate={{ scaleX: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Break divider between sections */}
            {groupIndex < visibleGroups.length - 1 && (
              <motion.div 
                className="flex items-center justify-center gap-4 mt-20 relative z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="h-px w-12 bg-gold/50"
                  animate={{ scaleX: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.span 
                  className="text-gold text-2xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.span>
                <motion.div 
                  className="h-px w-12 bg-gold/50"
                  animate={{ scaleX: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            )}
          </div>
        ))
      ) : (
         // Fallback if no matching events found
         <div className="py-20 text-center text-muted-foreground">
            <p className="font-display text-xl">Event details will be shared soon.</p>
         </div>
      )}
    </div>
  );
};

export default EventTimeline;