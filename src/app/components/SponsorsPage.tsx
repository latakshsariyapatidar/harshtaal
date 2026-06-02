import { motion } from "motion/react";

const sponsors = {
  platinum: [
    { name: "SBI", desc: "Premier banking partner supporting cultural initiatives across India", logo: "SBI", category: "Finance" },
    { name: "Tata Motors", desc: "Driving innovation and bringing communities together", logo: "TATA", category: "Automotive" },
  ],
  gold: [
    { name: "Sony Music India", desc: "Bringing the biggest names in music to the main stage", logo: "SONY", category: "Music" },
    { name: "Red Bull", desc: "Energizing the participants and powering the festival", logo: "RB", category: "Beverage" },
    { name: "Indigo", desc: "Official travel partner connecting festival-goers", logo: "6E", category: "Travel" },
  ],
  silver: [
    { name: "Zomato", desc: "Signature food experiences across the campus", logo: "Z", category: "Food" },
    { name: "Canva", desc: "Official design partner", logo: "C", category: "Design" },
    { name: "Nikon", desc: "Immersive photographic installations and workshops", logo: "N", category: "Photography" },
    { name: "Boat", desc: "Premium audio experiences for all stages", logo: "B", category: "Audio" },
  ],
};

function SponsorCard({ name, desc, logo, category, size, index }: { name: string; desc: string; logo: string; category: string; size: "lg" | "md" | "sm", index: number }) {
  const paddings = { lg: "p-10", md: "p-8", sm: "p-6" };
  const logoSizes = { lg: "text-4xl", md: "text-3xl", sm: "text-2xl" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`bg-white border border-stone-100 ${paddings[size]} flex flex-col items-center text-center hover:border-stone-300 hover:shadow-xl transition-all duration-500 group`}
    >
      <div
        className={`${logoSizes[size]} text-[#c62828] mb-4 w-16 h-16 flex items-center justify-center border border-stone-100 group-hover:border-[#c62828] group-hover:bg-[#c62828] group-hover:text-white transition-all duration-500`}
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        {logo}
      </div>
      <p className="text-stone-400 text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>{category}</p>
      <h3 className="text-stone-900 mb-3" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 400 }}>{name}</h3>
      <p className="text-stone-500 text-sm leading-relaxed font-light" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>{desc}</p>
    </motion.div>
  );
}

export function SponsorsPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-24">
      {/* Hero */}
      <div className="relative py-32 px-6 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-20 grayscale"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1496307653780-42ee777d4833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-stone-50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4 font-medium" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>スポンサー</p>
            <h1
              className="text-stone-900 mb-6 leading-tight"
              style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300 }}
            >
              Our Sponsors
            </h1>
            <p className="text-stone-600 leading-relaxed text-lg font-light" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>
              Harshtaal is made possible by the generous support of our partners — visionary organisations who share our passion for celebrating culture and bringing communities together.
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
          className="mb-20 border border-stone-200 bg-white p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
        >
          <div>
            <p className="text-[#c62828] text-[10px] tracking-widest uppercase mb-2 font-medium" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>Partner With Us</p>
            <h2 className="text-stone-900 mb-3" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.8rem", fontWeight: 300 }}>Become a Sponsor</h2>
            <p className="text-stone-500 text-sm font-light" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>
              Reach thousands of passionate students and connect with the vibrant community at IIT Dharwad.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="shrink-0 px-8 py-4 bg-stone-900 text-white tracking-widest uppercase text-xs hover:bg-stone-800 transition-colors duration-300"
            style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
          >
            Enquire Now
          </motion.a>
        </motion.div>

        {/* Platinum */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-stone-200 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="text-stone-400 text-xs">✦</span>
              <p className="text-stone-500 tracking-[0.4em] uppercase text-xs" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>Title Sponsors</p>
              <span className="text-stone-400 text-xs">✦</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-stone-200 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsors.platinum.map((s, i) => (
              <SponsorCard key={s.name} {...s} size="lg" index={i} />
            ))}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-stone-200 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="text-stone-300 text-xs">✦</span>
              <p className="text-stone-400 tracking-[0.4em] uppercase text-xs" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>Co-Sponsors</p>
              <span className="text-stone-300 text-xs">✦</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-stone-200 to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.gold.map((s, i) => (
              <SponsorCard key={s.name} {...s} size="md" index={i} />
            ))}
          </div>
        </div>

        {/* Silver */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-stone-100 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="text-stone-200 text-xs">✦</span>
              <p className="text-stone-300 tracking-[0.4em] uppercase text-xs" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>Partners</p>
              <span className="text-stone-200 text-xs">✦</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-stone-100 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.silver.map((s, i) => (
              <SponsorCard key={s.name} {...s} size="sm" index={i} />
            ))}
          </div>
        </div>

        {/* Sponsor packages */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>スポンサーシップ</p>
            <h2 className="text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300 }}>
              Sponsorship Packages
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Partner", tierJp: "パートナー", color: "text-stone-500", border: "border-stone-200",
                price: "₹50,000",
                perks: ["Logo on festival programme", "Complimentary entry passes", "Social media mention", "Banner placement"],
              },
              {
                tier: "Co-Sponsor", tierJp: "共同スポンサー", color: "text-stone-700", border: "border-stone-300",
                price: "₹1,50,000",
                perks: ["All Partner benefits", "Branded exhibition booth", "VIP access", "Stage announcements", "Email newsletter feature"],
                highlight: true,
              },
              {
                tier: "Title Sponsor", tierJp: "タイトルスポンサー", color: "text-[#c62828]", border: "border-[#c62828]/30",
                price: "₹4,00,000",
                perks: ["All Co-Sponsor benefits", "Named stage sponsorship", "Hospitality suite", "Co-branded official merchandise", "Press conference participation"],
              },
            ].map((pkg, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                key={pkg.tier} 
                className={`bg-white p-10 border transition-all duration-300 ${pkg.border} ${pkg.highlight ? "shadow-xl shadow-stone-200/50 scale-105 z-10" : "hover:shadow-lg hover:border-stone-300"}`}
              >
                <p className={`text-xs mb-2 ${pkg.color}`} style={{ fontFamily: "'Noto Serif JP', serif" }}>{pkg.tierJp}</p>
                <h3 className="text-stone-900 mb-2" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.2rem" }}>{pkg.tier}</h3>
                <p className={`mb-8 ${pkg.color}`} style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "2rem", fontWeight: 300 }}>{pkg.price}</p>
                <ul className="space-y-4 mb-10 min-h-[200px]">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-stone-600 text-sm font-light" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>
                      <span className={`${pkg.color} mt-0.5 shrink-0 text-[10px]`}>✦</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-4 tracking-widest uppercase text-xs transition-colors duration-300 border ${
                    pkg.highlight 
                      ? "bg-stone-900 text-white border-stone-900 hover:bg-stone-800"
                      : "border-stone-200 text-stone-700 hover:bg-stone-50"
                  }`}
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  Apply
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}