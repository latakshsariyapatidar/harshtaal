import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { getEventById, EventModel } from "../data/eventsData";

interface EventDetailPageProps {
  eventId: string | null;
  onBack: () => void;
  onNavigateToTickets: () => void;
}

export function EventDetailPage({ eventId, onBack, onNavigateToTickets }: EventDetailPageProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 300, 1);

  if (!eventId) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-white text-2xl font-bold mb-4">No Event Selected</h2>
        <button onClick={onBack} className="px-6 py-2 bg-[#c62828] text-white rounded-full text-sm font-semibold uppercase tracking-widest">
          Go to Events
        </button>
      </div>
    );
  }

  const event = getEventById(eventId);

  if (!event) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-white text-2xl font-bold mb-4">Event Not Found</h2>
        <button onClick={onBack} className="px-6 py-2 bg-[#c62828] text-white rounded-full text-sm font-semibold uppercase tracking-widest">
          Go to Events
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0e100f] text-stone-200 overflow-x-hidden">
      {/* Background Image Container - fixed position at the top */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-75 ease-out scale-120"
          style={{
            backgroundImage: `url('${event.image && !event.image.includes("_club") ? event.image : "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758917/ContactPage_jmrhei.png"}')`,
            filter: `grayscale(${scrollProgress * 100}%) contrast(1.15) blur(${event.image && !event.image.includes("_club") ? "3px" : "0px"})`,
            WebkitFilter: `grayscale(${scrollProgress * 100}%) contrast(1.15) blur(${event.image && !event.image.includes("_club") ? "3px" : "0px"})`,
            opacity: 0.35 - scrollProgress * 0.25,
          }}
          {...{ "data-scroll": "", "data-scroll-speed": "0.08" }}
        />
        {/* Progressive blur transition */}
        <div 
          className="absolute inset-x-0 bottom-0 h-72 pointer-events-none z-10"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)"
          }}
        />
        {/* Soft dark vignette over the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e100f]/40 via-[#0e100f]/60 to-[#0e100f] z-10" />
        {/* Smooth bottom gradient overlay to solid background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0e100f] to-transparent z-20 pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-32">
        {/* Back Link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="group flex items-center gap-2 text-stone-400 hover:text-[#c62828] transition-colors duration-300 text-xs tracking-[0.15em] uppercase font-bold mb-10 cursor-pointer"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          <span className="text-sm group-hover:-translate-x-1.5 transition-transform duration-300">←</span>
          <span>Back to Events</span>
        </motion.button>

        {/* Hero Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-start border-l-2 border-[#c62828] pl-6"
        >
          <span className="text-[10px] text-stone-500/80 font-semibold uppercase tracking-[0.4em] mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            詳細 | Event Details
          </span>
          <h1
            className="text-white mb-4 leading-none font-extrabold font-sans uppercase tracking-wide"
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {event.title}
          </h1>
          <p className="text-stone-400 leading-relaxed text-md font-light max-w-2xl" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {event.tagline}
          </p>
        </motion.div>

        {/* Quick Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 p-8 bg-[#121413]/60 border border-white/5 rounded-3xl backdrop-blur-xl mb-12"
        >
          <div>
            <span className="text-stone-500/80 text-[9px] tracking-widest uppercase font-bold block mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              Date & Time
            </span>
            <span className="text-white text-lg md:text-xl font-extrabold font-sans uppercase tracking-wide block" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              {event.time}
            </span>
          </div>
          <div>
            <span className="text-stone-500/80 text-[9px] tracking-widest uppercase font-bold block mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              Venue
            </span>
            <span className="text-white text-lg md:text-xl font-extrabold font-sans uppercase tracking-wide block" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              {event.venue}
            </span>
          </div>
          <div>
            <span className="text-stone-500/80 text-[9px] tracking-widest uppercase font-bold block mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              Prize Pool
            </span>
            <span className="text-[#c62828] text-lg md:text-xl font-extrabold font-sans uppercase tracking-wide block animate-pulse" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              {event.prize}
            </span>
          </div>
        </motion.div>

        {/* Detailed Content */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left: Rules & Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-2 flex flex-col justify-start"
          >
            <h3 className="text-white text-xl font-extrabold font-sans mb-6 pb-2 border-b border-white/5 uppercase tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Rules & Guidelines
            </h3>
            <ul className="space-y-4">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex gap-4 text-stone-300 text-[15px] font-light leading-relaxed">
                  <span className="text-[#c62828] text-xs select-none mt-1">✦</span>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Register Sidebar Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="bg-[#121413]/40 border border-white/5 p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h4 className="text-white text-lg font-extrabold font-sans mb-3 uppercase tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Participate
              </h4>
              <p className="text-stone-400/95 text-xs font-light leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                To register and participate in Harshtal cultural competitions, you will need a valid registration pass.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.01, backgroundColor: "#a01f1f" }}
              whileTap={{ scale: 0.99 }}
              onClick={onNavigateToTickets}
              className="w-full py-4 bg-[#c62828] text-white rounded-xl text-xs tracking-[0.2em] font-bold uppercase transition-colors duration-300 cursor-pointer shadow-lg shadow-red-950/20"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              Get Entry Pass
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
