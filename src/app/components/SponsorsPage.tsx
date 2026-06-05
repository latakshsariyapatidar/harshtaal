import { motion } from "motion/react";

const sponsors = {
  platinum: [] as any[],
  gold: [] as any[],
  silver: [] as any[],
};

function SponsorCard({ name, desc, logo, category, size, index }: { name: string; desc: string; logo: string; category: string; size: "lg" | "md" | "sm", index: number }) {
  const paddings = { lg: "p-10", md: "p-8", sm: "p-6" };
  const logoSizes = { lg: "text-4xl", md: "text-3xl", sm: "text-2xl" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      variants={{
        hover: { y: -8, scale: 1.03, borderColor: "rgba(198, 40, 40, 0.5)", boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`bg-[#161817] border border-white/5 ${paddings[size]} flex flex-col items-center text-center transition-all duration-500 cursor-pointer`}
    >
      <motion.div
        className={`${logoSizes[size]} text-[#c62828] mb-4 w-16 h-16 flex items-center justify-center border border-white/10 font-light`}
        style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        variants={{
          hover: { scale: 1.15, backgroundColor: "#c62828", borderColor: "#c62828", color: "#ffffff", boxShadow: "0 10px 20px rgba(198, 40, 40, 0.3)" }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {logo}
      </motion.div>
      <motion.p 
        className="text-stone-500 text-[10px] tracking-widest uppercase mb-2 font-medium transition-colors duration-300" 
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        variants={{
          hover: { color: "#c62828" }
        }}
      >
        {category}
      </motion.p>
      <motion.h3 
        className="text-white mb-3 font-light transition-colors duration-300" 
        style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        variants={{
          hover: { color: "#ffffff" }
        }}
      >
        {name}
      </motion.h3>
      <p className="text-stone-300 text-sm leading-relaxed font-light" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{desc}</p>
    </motion.div>
  );
}

export function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#0e100f] pt-24 pb-24 text-stone-200">
      {/* Hero */}
      <div className="relative py-32 px-6 overflow-hidden bg-[#0e100f]">
        <div
          className="absolute inset-0 opacity-15 grayscale contrast-125 mix-blend-lighten"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1496307653780-42ee777d4833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e100f]/90 via-[#0e100f]/50 to-[#0e100f]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4 font-medium" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>スポンサー</p>
            <h1
              className="text-white mb-6 leading-tight font-light"
              style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Our Sponsors
            </h1>
            <p className="text-stone-300 leading-relaxed text-lg font-light" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              Harshtal is made possible by the generous support of our partners — visionary organisations who share our passion for celebrating culture and bringing communities together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10">
        {/* Become a sponsor CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            borderColor: "rgba(255, 255, 255, 0.4)", 
            boxShadow: "0 15px 35px rgba(0,0,0,0.4)" 
          }}
          className="mb-20 border border-white/5 bg-[#161817] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md "
        >
          <div>
            <p className="text-[#c62828] text-[10px] tracking-widest uppercase mb-2 font-medium" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Partner With Us</p>
            <h2 className="text-white mb-3 font-light" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "1.8rem" }}>Become a Sponsor</h2>
            <p className="text-stone-400 text-sm font-light" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              Reach thousands of passionate students and connect with the vibrant community at IIT Dharwad.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.06, boxShadow: "0 10px 25px rgba(198, 40, 40, 0.45)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="shrink-0 px-8 py-4 bg-[#c62828] text-white tracking-widest uppercase text-xs hover:bg-[#a01f1f] transition-all duration-300 shadow-md shadow-red-950/20 block"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Enquire Now
          </motion.a>
        </motion.div>

        {/* Platinum */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="text-stone-500 text-xs">✦</span>
              <p className="text-stone-400 tracking-[0.4em] uppercase text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Title Sponsors</p>
              <span className="text-stone-500 text-xs">✦</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsors.platinum.length > 0 ? (
              sponsors.platinum.map((s, i) => (
                <SponsorCard key={s.name} {...s} size="lg" index={i} />
              ))
            ) : (
              <div className="col-span-2 text-center py-16 border border-dashed border-white/10 bg-[#161817]/30 text-stone-500 font-light text-sm tracking-widest uppercase" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                To be announced
              </div>
            )}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="text-stone-500 text-xs">✦</span>
              <p className="text-stone-400 tracking-[0.4em] uppercase text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Co-Sponsors</p>
              <span className="text-stone-500 text-xs">✦</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.gold.length > 0 ? (
              sponsors.gold.map((s, i) => (
                <SponsorCard key={s.name} {...s} size="md" index={i} />
              ))
            ) : (
              <div className="col-span-3 text-center py-16 border border-dashed border-white/10 bg-[#161817]/30 text-stone-500 font-light text-sm tracking-widest uppercase" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                To be announced
              </div>
            )}
          </div>
        </div>

        {/* Silver */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-white/5 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="text-stone-600 text-xs">✦</span>
              <p className="text-stone-500 tracking-[0.4em] uppercase text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Partners</p>
              <span className="text-stone-600 text-xs">✦</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-white/5 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.silver.length > 0 ? (
              sponsors.silver.map((s, i) => (
                <SponsorCard key={s.name} {...s} size="sm" index={i} />
              ))
            ) : (
              <div className="col-span-2 lg:col-span-4 text-center py-16 border border-dashed border-white/10 bg-[#161817]/30 text-stone-500 font-light text-sm tracking-widest uppercase" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                To be announced
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}