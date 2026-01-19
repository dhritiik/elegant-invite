import { motion } from "framer-motion";

interface TimelineEvent {
  id: number;
  title: string;
  time: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  venue?: string;
  style?: 'horizontal' | 'vertical';
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
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="7" />
        <path d="M14 14l5 5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Haldi & Mehendi alongside.",
    time: "11:00 AM onwards",
    date: "Sunday, 8th March",
    description: "Haldi ceremony & Mehendi alongside. Lunch to follow.",
    venue: "Kandivali Recreation Club (KRC), Shantilal Modi Road, Kandivali West",
    style: "horizontal",
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
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const EventTimeline = () => {
  return (
    <div className="relative py-12">
      {/* Main vertical timeline line - runs through all events */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-sage-dark to-gold md:-translate-x-px z-0" />

      <div className="space-y-20">
        {/* ===== SUNDAY 8TH MARCH MORNING - Horizontal Timeline ===== */}
        <div className="relative">
          <motion.h3 
            className="text-center font-display text-2xl text-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sunday, 8th March - Morning Celebrations
          </motion.h3>

          {/* Horizontal Events Container */}
          <div className="relative overflow-x-auto">
            <div className="flex items-center gap-8 pb-8 min-w-min px-4 md:px-0 md:justify-center">
              {/* Horizontal connecting line for this section */}
              <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

              {events.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  className="flex flex-col items-center w-64 flex-shrink-0 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Icon circle */}
                  <motion.div
                    className="w-20 h-20 rounded-full bg-cream-light border-2 border-gold flex items-center justify-center text-sage-dark invitation-shadow mb-6 relative z-20"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 rgba(43, 75, 50, 0)",
                        "0 0 20px rgba(43, 75, 50, 0.3)",
                        "0 0 0 rgba(43, 75, 50, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "linear" }}
                    >
                      {event.icon}
                    </motion.div>
                  </motion.div>

                  {/* Time badge */}
                  <motion.div
                    className="bg-sage-dark text-cream-light px-4 py-2 rounded-full text-sm font-display font-bold mb-4"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {event.time}
                  </motion.div>

                  {/* Event details card */}
                  <motion.div
                    className="bg-cream rounded-lg p-5 invitation-shadow text-center w-full hover:shadow-lg transition-all"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    whileHover={{ y: -3 }}
                  >
                    <h4 className="font-display text-lg text-foreground mb-2">{event.title}</h4>
                    <p className="text-xs text-gold tracking-wide mb-3 font-semibold">{event.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{event.description}</p>
                    {event.venue && (
                      <p className="text-xs text-sage italic border-t border-sage/20 pt-3 mt-3">📍 {event.venue}</p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SUNDAY 8TH MARCH EVENING - Vertical Timeline ===== */}
        <div className="relative pt-8">
          <motion.h3 
            className="text-center font-display text-2xl text-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sunday, 8th March - Evening Celebration
          </motion.h3>

          <div className="space-y-12 md:space-y-16">
            {events.slice(3, 4).map((event, index) => (
              <motion.div
                key={event.id}
                className={`relative flex items-center gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icon circle - positioned on line */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-cream-light border-2 border-gold flex items-center justify-center text-sage-dark invitation-shadow"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                    }}
                    animate={{ 
                      boxShadow: [
                        "0 20px 40px -15px rgba(0, 0, 0, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1)",
                        "0 25px 50px -12px rgba(43, 75, 50, 0.2), 0 10px 20px -8px rgba(43, 75, 50, 0.1)",
                        "0 20px 40px -15px rgba(0, 0, 0, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1)"
                      ]
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      boxShadow: { duration: 3, repeat: Infinity }
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10 + index * 2, repeat: Infinity, ease: "linear" }}
                    >
                      {event.icon}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-72 z-10 ${
                  index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                }`}>
                  <motion.div
                    className="bg-cream rounded-lg p-6 invitation-shadow backdrop-blur-sm hover:shadow-lg transition-all h-full flex flex-col"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <motion.div
                        className="bg-sage-dark text-cream-light px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {event.time}
                      </motion.div>
                      <p className="text-gold font-display text-xs tracking-[0.2em] uppercase">
                        {event.date}
                      </p>
                    </div>
                    
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground leading-relaxed mb-3 flex-grow">
                      {event.description}
                    </p>

                    {event.venue && (
                      <motion.p
                        className="font-body text-sm text-sage italic border-t border-sage/20 pt-3 mt-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        📍 {event.venue}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== TUESDAY 10TH MARCH MORNING - Horizontal Timeline ===== */}
        <div className="relative pt-8">
          <motion.h3 
            className="text-center font-display text-2xl text-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Tuesday, 10th March - Wedding Ceremonies
          </motion.h3>

          {/* Horizontal Events Container */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-stretch gap-8 relative md:mx-auto">
            {/* Horizontal connecting line for this section (desktop only) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none z-0" />

            {events.slice(4, 6).map((event, index) => (
              <motion.div
                key={event.id}
                className="flex flex-col items-center w-full md:w-72 flex-shrink-0 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Icon circle */}
                <motion.div
                  className="w-20 h-20 rounded-full bg-cream-light border-2 border-gold flex items-center justify-center text-sage-dark invitation-shadow mb-6 relative z-20 flex-shrink-0"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 rgba(43, 75, 50, 0)",
                      "0 0 20px rgba(43, 75, 50, 0.3)",
                      "0 0 0 rgba(43, 75, 50, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.15 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "linear" }}
                  >
                    {event.icon}
                  </motion.div>
                </motion.div>

                {/* Time badge */}
                <motion.div
                  className="bg-sage-dark text-cream-light px-4 py-2 rounded-full text-sm font-display font-bold mb-4 whitespace-nowrap"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {event.time}
                </motion.div>

                {/* Event details card */}
                <motion.div
                  className="bg-cream rounded-lg p-5 invitation-shadow text-center w-full hover:shadow-lg transition-all flex-1 flex flex-col z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  whileHover={{ y: -3 }}
                >
                  <h4 className="font-display text-lg text-foreground mb-2">{event.title}</h4>
                  <p className="text-xs text-gold tracking-wide mb-3 font-semibold">{event.date}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-grow">{event.description}</p>
                  {event.venue && (
                    <p className="text-xs text-sage italic border-t border-sage/20 pt-3 mt-3">{event.venue}</p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== TUESDAY 10TH MARCH EVENING - Vertical Timeline ===== */}
        <div className="relative pt-8">
          <motion.h3 
            className="text-center font-display text-2xl text-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Tuesday, 10th March - Reception
          </motion.h3>

          <div className="space-y-12 md:space-y-16">
            {events.slice(6, 7).map((event, index) => (
              <motion.div
                key={event.id}
                className={`relative flex items-center gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icon circle - positioned on line */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-cream-light border-2 border-gold flex items-center justify-center text-sage-dark invitation-shadow"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                    }}
                    animate={{ 
                      boxShadow: [
                        "0 20px 40px -15px rgba(0, 0, 0, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1)",
                        "0 25px 50px -12px rgba(43, 75, 50, 0.2), 0 10px 20px -8px rgba(43, 75, 50, 0.1)",
                        "0 20px 40px -15px rgba(0, 0, 0, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1)"
                      ]
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      boxShadow: { duration: 3, repeat: Infinity }
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10 + index * 2, repeat: Infinity, ease: "linear" }}
                    >
                      {event.icon}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-72 z-10 ${
                  index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                }`}>
                  <motion.div
                    className="bg-cream rounded-lg p-6 invitation-shadow backdrop-blur-sm hover:shadow-lg transition-all h-full flex flex-col"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <motion.div
                        className="bg-sage-dark text-cream-light px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {event.time}
                      </motion.div>
                      <p className="text-gold font-display text-xs tracking-[0.2em] uppercase">
                        {event.date}
                      </p>
                    </div>
                    
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground leading-relaxed mb-3 flex-grow">
                      {event.description}
                    </p>

                    {event.venue && (
                      <motion.p
                        className="font-body text-sm text-sage italic border-t border-sage/20 pt-3 mt-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        📍 {event.venue}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
