import { useState, useEffect } from "react";
import { motion } from "motion/react";

const sponsors = {
  platinum: [],
  gold: [],
  silver: [
    {
      name: "WOWNEWS24X7",
      category: "Media Partner",
      desc: "Official Media Partner of HarSHTal.",
      logo: "/sponsors/wownews24x7-white.png",
    },
  ],
};

function SponsorCard({ name, desc, logo, category, size }) {
  const paddings = { lg: "p-10", md: "p-8", sm: "p-6" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      variants={{
        hover: {
          y: -10,
          scale: 1.02,
          borderColor: "rgba(198,40,40,.45)",
          boxShadow:
            "0 30px 60px rgba(0,0,0,.55), 0 0 30px rgba(198,40,40,.12)",
        },
      }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className={`group relative overflow-hidden rounded-2xl bg-[#161817] border border-white/10 ${paddings[size]} flex flex-col transition-all duration-500`}
    >
      {/* Japanese inspired background texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_right,white_0%,transparent_60%)]" />

      {/* Red glow */}
      <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#c62828]/10 blur-3xl group-hover:bg-[#c62828]/20 transition-all duration-700" />

      {/* Logo */}
      <motion.div
        variants={{
          hover: {
            scale: 1.02,
          },
        }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111] aspect-[16/9] mb-8"
      >
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c62828] to-transparent" />
      </motion.div>

      {/* Category */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c62828]/70" />

        <motion.span
          variants={{
            hover: {
              color: "#ff6666",
            },
          }}
          className="uppercase tracking-[0.35em] text-[11px] text-stone-500"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {category}
        </motion.span>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c62828]/70" />
      </div>

      {/* Sponsor Name */}
      <motion.h3
        variants={{
          hover: {
            letterSpacing: "0.08em",
          },
        }}
        className="text-white text-2xl font-black uppercase text-center mb-5"
        style={{ fontFamily: "'Josefin Sans', sans-serif" }}
      >
        {name}
      </motion.h3>

      {/* Decorative divider */}
      <div className="flex justify-center items-center gap-2 mb-5">
        <div className="w-8 h-px bg-[#c62828]" />
        <div className="w-2 h-2 rounded-full bg-[#ff4d4d]" />
        <div className="w-8 h-px bg-[#c62828]" />
      </div>

      {/* Description */}
      <p
        className="text-stone-400 text-sm leading-7 text-center"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        {desc}
      </p>

      {/* Bottom hover line */}
      <motion.div
        variants={{
          hover: {
            scaleX: 1,
            opacity: 1,
          },
        }}
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        className="absolute bottom-0 left-0 origin-center w-full h-[2px] bg-[#c62828]"
      />
    </motion.div>
  );
}

export function SponsorsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 300, 1);

  return (
    <div className="relative min-h-screen bg-[#0e100f] text-stone-200 overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-75 ease-out scale-120"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/db69ffwwa/image/upload/v1780758929/SponsorsPage_pxypu1.png')",

            filter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
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

      <div className="relative pt-36 pb-24 px-6 z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-stone-500/80 tracking-[0.4em] uppercase text-[10px] mb-3 font-semibold"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            スポンサー | sponsors
          </p>
          <h1
            className="text-white mb-6 leading-tight font-extrabold font-sans uppercase tracking-wide"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Our Sponsors
          </h1>
          <p
            className="text-stone-400 leading-relaxed text-md font-light max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Harshtal is made possible by the generous support of our partners —
            visionary organisations who share our passion for celebrating
            culture and bringing communities together.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 bg-[#0e100f] py-16 border-t border-white/5 shadow-[0_-30px_50px_rgba(14,16,15,0.95)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.4)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
            }}
            className="mb-20 border border-white/5 bg-[#161817] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md"
          >
            <div>
              <p
                className="text-stone-500/80 text-[10px] tracking-widest uppercase mb-2 font-semibold"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                Partner With Us
              </p>
              <h2
                className="text-white mb-3 font-extrabold font-sans uppercase tracking-wide"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "1.8rem",
                }}
              >
                Become a Sponsor
              </h2>
              <p
                className="text-stone-400/90 text-sm font-light"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                Reach thousands of passionate students and connect with the
                vibrant community at IIT Dharwad.
              </p>
            </div>
            <motion.a
              whileHover={{
                scale: 1.06,
                boxShadow: "0 10px 25px rgba(198, 40, 40, 0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="shrink-0 px-8 py-4 bg-[#c62828] text-white tracking-widest uppercase text-xs hover:bg-[#a01f1f] transition-all duration-300 shadow-md shadow-red-950/20 block"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              Enquire Now
            </motion.a>
          </motion.div>

          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <div className="flex items-center gap-3">
                <span className="text-stone-500 text-xs">✦</span>
                <p
                  className="text-stone-300 font-extrabold tracking-[0.2em] uppercase text-xs font-sans"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  Title Sponsors
                </p>
                <span className="text-stone-500 text-xs">✦</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {sponsors.platinum.length > 0 ? (
                sponsors.platinum.map((s) => (
                  <SponsorCard key={s.name} {...s} size="lg" />
                ))
              ) : (
                <div
                  className="col-span-2 text-center py-16 border border-dashed border-white/10 bg-[#161817]/30 text-stone-500 font-light text-sm tracking-widest uppercase"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  To be announced
                </div>
              )}
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <div className="flex items-center gap-3">
                <span className="text-stone-500 text-xs">✦</span>
                <p
                  className="text-stone-300 font-extrabold tracking-[0.2em] uppercase text-xs font-sans"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  Co-Sponsors
                </p>
                <span className="text-stone-500 text-xs">✦</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {sponsors.gold.length > 0 ? (
                sponsors.gold.map((s) => (
                  <SponsorCard key={s.name} {...s} size="md" />
                ))
              ) : (
                <div
                  className="col-span-3 text-center py-16 border border-dashed border-white/10 bg-[#161817]/30 text-stone-500 font-light text-sm tracking-widest uppercase"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  To be announced
                </div>
              )}
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-white/5 to-transparent" />
              <div className="flex items-center gap-3">
                <span className="text-stone-600 text-xs">✦</span>
                <p
                  className="text-stone-400/80 font-extrabold tracking-[0.2em] uppercase text-xs font-sans"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  Partners
                </p>
                <span className="text-stone-600 text-xs">✦</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-white/5 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sponsors.silver.length > 0 ? (
                sponsors.silver.map((s) => (
                  <SponsorCard key={s.name} {...s} size="sm" />
                ))
              ) : (
                <div
                  className="col-span-2 lg:col-span-4 text-center py-16 border border-dashed border-white/10 bg-[#161817]/30 text-stone-500 font-light text-sm tracking-widest uppercase"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  To be announced
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
