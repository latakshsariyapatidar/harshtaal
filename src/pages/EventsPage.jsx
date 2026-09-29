import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { clubsData } from "../data/eventsData";
import ImageTrail from "../components/ImageTrail";










function EventCard({ event, onSelect }) {
  const hasBgImage = event.image && !event.image.includes("_club");

  return (
    <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover="hover"
    variants={{
      hover: {
        y: -6,
        borderColor: hasBgImage ? "rgba(198, 40, 40, 0.6)" : "rgba(198, 40, 40, 0.4)",
        boxShadow: hasBgImage ?
        "0 25px 40px rgba(198, 40, 40, 0.15), 0 15px 30px rgba(0,0,0,0.6)" :
        "0 15px 30px rgba(0,0,0,0.5)"
      }
    }}
    onClick={() => onSelect(event.id)}
    className="relative overflow-hidden bg-[#121413]/55 border border-white/5 p-6 rounded-2xl flex flex-col justify-between min-h-[280px] transition-all duration-500 cursor-pointer group">

      
      {hasBgImage &&
      <>
          <div
        className="absolute -inset-2 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 blur-[4px]"
        style={{ backgroundImage: `url('${event.image}')` }} />

          
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-[#0e100f]/80 to-black/30 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 z-10 bg-[#0e100f]/20 mix-blend-overlay pointer-events-none" />
        </>}


      
      <div className="relative z-20 flex flex-col h-full justify-between flex-1">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider font-sans group-hover:text-stone-200 transition-colors duration-300">
              {event.time.split(",")[0]}
            </span>
            <span className="text-[10px] text-[#c62828] font-bold uppercase tracking-wider font-sans group-hover:text-red-400 transition-colors duration-300">
              {event.venue.split("(")[1]?.replace(")", "") || event.venue}
            </span>
          </div>

          <h4 className="text-white text-2xl font-black font-sans group-hover:text-[#c62828] transition-colors duration-300 tracking-wide uppercase leading-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {event.title}
          </h4>
          <p className="text-stone-300/90 text-xs mt-3 font-light line-clamp-3 leading-relaxed transition-colors duration-300 group-hover:text-stone-200" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {event.tagline}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
          <span className="text-[9px] text-stone-400/80 font-medium uppercase tracking-widest" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            Prizes
          </span>
          <span className="text-[#c62828] text-base font-black font-sans group-hover:text-red-400 transition-colors duration-300">
            {event.prize.replace("Prizes worth ", "")}
          </span>
        </div>
      </div>

      
      {hasBgImage &&
      <div className="absolute bottom-0 right-0 w-24 h-1 bg-gradient-to-r from-transparent to-[#c62828] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}

    </motion.div>);

}

export function EventsPage({ selectedClub, onSelectEvent }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedClub) {

      const timer = setTimeout(() => {
        const el = document.getElementById(selectedClub);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedClub]);

  const scrollProgress = Math.min(scrollY / 300, 1);

  const handleQuickScroll = (e, clubId) => {
    e.preventDefault();
    const el = document.getElementById(clubId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0e100f] text-stone-200 overflow-x-hidden">
      <ImageTrail
        items={[
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758824/Sakura_1_afhgla.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758824/Sakura_2_zvr61f.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758825/Sakura_3_aanapp.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758826/Sakura_4_il7dmw.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758824/Sakura_1_afhgla.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758824/Sakura_2_zvr61f.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758825/Sakura_3_aanapp.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758826/Sakura_4_il7dmw.svg",
        ]}
        variant={5}
        size={15}
      />
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-75 ease-out scale-120"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/fnwlsbqw/image/upload/v1786889748/harshtal-events-bg.jpg.png')",
            filter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
            WebkitFilter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
            opacity: 0.35 - scrollProgress * 0.25,
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-72 pointer-events-none z-10"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0e100f]/40 via-[#0e100f]/60 to-[#0e100f] z-10" />

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0e100f] to-transparent z-20 pointer-events-none" />
      </div>

      <div className="relative pt-36 pb-12 px-6 z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-stone-500/80 tracking-[0.4em] uppercase text-[10px] mb-3 font-semibold"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            イベント | events
          </p>
          <h1
            className="text-white mb-6 leading-tight font-extrabold font-sans uppercase tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Cultural Events
          </h1>
          <p
            className="text-stone-400 leading-relaxed text-md font-light mb-8"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Explore competitions, workshops, and exhibitions arranged by the
            official cultural clubs of IIT Dharwad.
          </p>
        </motion.div>
      </div>

      <div className="sticky top-20 z-30 w-full flex justify-center py-4 px-6 bg-[#0e100f]/80 backdrop-blur-md border-y border-white/5">
        <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar max-w-full">
          {clubsData.map((club) => (
            <button
              key={club.id}
              onClick={(e) => handleQuickScroll(e, club.id)}
              className="text-stone-400 hover:text-white hover:border-b hover:border-[#c62828] pb-1 transition-colors duration-300 text-[10px] md:text-xs tracking-[0.15em] uppercase font-bold whitespace-nowrap"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {club.name.replace(" Club", "")}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-[#0e100f] py-16 px-6 pb-32 border-t border-white/5 shadow-[0_-30px_50px_rgba(14,16,15,0.95)]">
        <div className="max-w-6xl mx-auto">
          {clubsData.map((club) => (
            <div key={club.id} id={club.id} className="scroll-mt-36 mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10 flex flex-col justify-start border-l-2 border-[#c62828] pl-5"
              >
                <span
                  className="text-[9px] text-stone-600/75 font-medium uppercase tracking-widest mb-1.5"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {club.nameJp}
                </span>
                <h3
                  className="text-white text-3xl font-extrabold font-sans tracking-wide uppercase"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  {club.name}
                </h3>
                <p
                  className="text-stone-400 text-sm font-light mt-2 max-w-2xl leading-relaxed"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {club.description}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {club.events.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onSelect={onSelectEvent}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}