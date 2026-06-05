import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TicketCardProps {
  name: string;
  description: string;
  nameJp: string;
  price: string;
  features: string[];
  highlight: boolean;
}

function TicketCard({ name, description, nameJp, price, features, highlight }: TicketCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.015,
        borderColor: highlight ? "rgba(198, 40, 40, 1)" : "rgba(255, 255, 255, 0.25)",
        boxShadow: highlight
          ? "0 25px 50px rgba(198, 40, 40, 0.2)"
          : "0 25px 50px rgba(0, 0, 0, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative flex flex-col rounded-3xl overflow-hidden border min-h-[540px] bg-[#121413]/70 backdrop-blur-xl cursor-pointer group ${
        highlight ? "border-[#c62828]/40" : "border-white/5"
      }`}
      style={{
        boxShadow: highlight
          ? "0 10px 30px rgba(198, 40, 40, 0.05)"
          : "0 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Subtle Pass Background Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8 group-hover:opacity-15 group-hover:scale-105 transition-all duration-700 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/PassBackground.png')",
        }}
      />
      {/* Dark gradient overlay to preserve high readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/75 z-0 pointer-events-none" />

      {/* Top Highlight border line for recommended card */}
      {highlight && (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#c62828] to-transparent z-10" />
      )}

      {/* Pulse recommended badge */}
      {highlight && (
        <div
          className="absolute top-5 right-5 bg-[#c62828]/15 border border-[#c62828]/35 text-[#c62828] text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(198,40,40,0.15)] z-20"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c62828] animate-pulse" />
          Recommended
        </div>
      )}

      {/* Header Portion: Branding & Metadata */}
      <div className="relative z-10 p-8 pb-4 flex flex-col justify-start pointer-events-none">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-white/40 font-semibold text-[9px] tracking-[0.3em]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>HARSHTAL</p>
            <p className="text-[#c62828]/50 text-[8px] tracking-[0.3em] mt-0.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>ハルシュタール</p>
          </div>
          <span className="text-[9px] text-[#c62828]/60 font-semibold tracking-widest" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>2026</span>
        </div>

        {/* Tier Titles and Description */}
        <div className="mt-4">
          <p
            className="text-[#c62828]/60 text-[9px] tracking-[0.2em] font-medium uppercase mb-1.5"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {nameJp}
          </p>
          <h3
            className="text-white text-3xl font-extrabold tracking-wide font-sans"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            {name}
          </h3>
          <p className="text-stone-400/90 text-xs mt-2 font-light leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {description}
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative z-10 px-8 pb-2">
        <div className="h-px bg-white/5 mb-5" />
        <div className="flex items-baseline justify-between">
          <span className="text-stone-500/80 text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Pass Price</span>
          <span
            className="text-white font-extrabold group-hover:text-[#c62828] transition-colors duration-300"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "2.5rem",
              letterSpacing: "-0.02em"
            }}
          >
            {price}
          </span>
        </div>
      </div>

      {/* Features & Call To Action */}
      <div className="relative z-10 px-8 pb-8 flex-1 flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-start">
          <div className="h-px bg-white/5 my-5" />
          <span className="text-stone-500/80 text-[9px] tracking-[0.2em] uppercase font-bold mb-3 block" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Privileges</span>
          <ul className="space-y-3 mb-6">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-stone-300 text-[13px] font-light"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                <span className="text-[#c62828] text-xs shrink-0 select-none">✦</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.01, backgroundColor: "#a01f1f" }}
          whileTap={{ scale: 0.99 }}
          className={`w-full py-4 tracking-[0.2em] uppercase text-xs font-bold rounded-xl cursor-pointer transition-colors duration-300 ${
            highlight
              ? "bg-[#c62828] text-white shadow-lg shadow-red-950/20"
              : "border border-white/10 text-stone-200 bg-white/5 hover:border-white/20 hover:text-white"
          }`}
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          Register Pass
        </motion.button>
      </div>
    </motion.div>
  );
}

export function TicketsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 300, 1);

  const passes = [
    {
      name: "Viewer",
      description: "External visitors seeking to witness the cultural extravaganza.",
      nameJp: "観客",
      price: "TBA",
      features: ["Main stage access", "Food stalls & lounges", "Exhibitions entry"],
      highlight: false,
    },
    {
      name: "Participant",
      description: "External students competing in culturals, workshops, and games.",
      nameJp: "参加者",
      price: "TBA",
      features: [
        "Competition entries",
        "Priority event seating",
        "Event participation certificate",
        "Welcome kit & goodies",
      ],
      highlight: true,
    },
    {
      name: "IITD Pass",
      description: "Dedicated access pass for IIT Dharwad students.",
      nameJp: "学内参加者",
      price: "TBA",
      features: [
        "All event access",
        "Competition entries",
        "Priority event seating",
        "Participation certificate",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0e100f] text-stone-200 overflow-x-hidden">
      {/* Background Image Container - fixed position at the top */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-75 ease-out scale-120"
          style={{
            backgroundImage: "url('/PassBackground.png')",
            filter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
            WebkitFilter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
            opacity: 0.4 - scrollProgress * 0.25,
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

      {/* Hero Header */}
      <div className="relative pt-36 pb-24 px-6 z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-stone-500/80 tracking-[0.4em] uppercase text-[10px] mb-3 font-semibold" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>チケット | passes</p>
          <h1
            className="text-white mb-6 leading-tight font-extrabold font-sans uppercase tracking-wide"
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Entry Passes
          </h1>
          <p className="text-stone-400 leading-relaxed text-md font-light max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            Secure your access to Harshtal 2026. Choose your pass tier to experience the vibrant blend of modern design and cultural performance.
          </p>
        </motion.div>
      </div>

      {/* Main content area */}
      <div className="relative z-10 bg-[#0e100f] py-12 px-6 border-t border-white/5 shadow-[0_-30px_50px_rgba(14,16,15,0.95)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {passes.map((tier) => (
              <TicketCard key={tier.name} {...tier} />
            ))}
          </div>

          {/* Refund policy footer info */}
          <div className="mt-20 text-center text-stone-500 text-xs tracking-wide max-w-xl mx-auto leading-relaxed">
            <p style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              * Passes are non-transferable and require a valid student ID card (where applicable) at the entry check-point. Refund policies and details will be shared upon official price announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
