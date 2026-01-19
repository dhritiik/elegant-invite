import { motion } from "framer-motion";

interface TimelineEvent {
  id: number;
  title: string;
  time: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const events: TimelineEvent[] = [
  {
    id: 1,
    title: "Mara Mandup",
    time: "4:00 PM",
    date: "December 13, 2026",
    description: "The sacred wedding pavilion ceremony marking the beginning of our celebrations",
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
    title: "Satsang Shaam",
    time: "7:00 PM",
    date: "December 13, 2026",
    description: "An evening of devotional music, blessings, and spiritual togetherness",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5L21 3V16" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Carnival",
    time: "8:00 PM",
    date: "December 14, 2026",
    description: "A night of joy, dance, and celebration under the stars",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Wedding",
    time: "11:00 AM",
    date: "December 15, 2026",
    description: "The sacred union ceremony followed by blessings and festivities",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const EventTimeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />
      
      {/* Events */}
      <div className="space-y-12 md:space-y-16">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className={`relative flex items-start gap-6 md:gap-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon circle */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
              <motion.div
                className="w-16 h-16 rounded-full bg-cream-light border-2 border-gold flex items-center justify-center text-sage-dark invitation-shadow"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {event.icon}
              </motion.div>
            </div>
            
            {/* Content card */}
            <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
              index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
            }`}>
              <motion.div
                className="bg-cream rounded-lg p-6 invitation-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-gold font-display text-xs tracking-[0.2em] uppercase mb-1">
                  {event.date}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="font-body text-lg text-sage-dark font-medium mb-3">
                  {event.time}
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            </div>
            
            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-[calc(50%-3rem)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;
