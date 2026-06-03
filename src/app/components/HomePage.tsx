import { motion } from "motion/react";

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage:
              // "url(https://images.unsplash.com/photo-1610687274720-bda24a3515a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)",
              "url('/background_home.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-stone-50/20 to-stone-50" />
        </div>

        {/* Vertical Japanese text decoration */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-stone-300 text-sm tracking-widest"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "'Noto Serif JP', serif",
          }}
        >
          文化と芸術の祭典
        </div>
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-stone-300 text-sm tracking-widest"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "'Noto Serif JP', serif",
          }}
        >
          静寂の中の鼓動
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p
              className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4 font-medium"
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              Cultural Festival
            </p>
            <h1
              className="text-stone-900 mb-4 leading-none"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              Harshtal
            </h1>
            <h2
              className="text-stone-400 mb-8 tracking-[0.4em] uppercase"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1rem, 3vw, 2rem)",
              }}
            >
              ハルシュタール
            </h2>
            <p
              className="text-stone-600 mb-10 max-w-lg mx-auto leading-relaxed text-sm md:text-base"
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              A convergence of art, rhythm, frame, and design. Experience the
              pulse of culture in a space inspired by minimalist harmony and
              negative space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#tickets"
                className="px-8 py-3 bg-[#c62828] text-white tracking-widest uppercase text-xs hover:bg-[#a01f1f] transition-colors duration-300 shadow-lg shadow-red-900/10"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                Register Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="px-8 py-3 border border-stone-200 text-stone-600 tracking-widest uppercase text-xs hover:bg-stone-100 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                Discover More
              </motion.a>
            </div>
          </motion.div>

          {/* Date & Venue badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-20 flex flex-col md:flex-row justify-center gap-10 md:gap-20 border-t border-stone-200 pt-8"
          >
            {[
              { label: "Date & Time", value: "To be announced" },
              { label: "Venue", value: "IIT Dharwad Permanent Campus" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p
                  className="text-stone-400 tracking-widest uppercase text-[10px] mb-2"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-stone-800 text-sm md:text-base font-medium"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-32 px-6 bg-white relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(198,40,40,0.1) 60px, rgba(198,40,40,0.1) 61px)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-20"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-stone-200" />
            <p
              className="text-[#c62828] tracking-[0.5em] uppercase text-xs"
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              について
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-stone-200" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-stone-900 mb-8 leading-tight"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 300,
                }}
              >
                About Harshtal
              </h2>
              <p
                className="text-stone-600 leading-relaxed mb-6 font-light text-lg"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                Harshtal is the annual cultural festival of IIT Dharwad,
                bringing together students, artists, performers, and enthusiasts
                from across the country for a celebration of creativity, talent,
                and community.

                Over the years, Harshtal has grown into a vibrant platform that showcases a diverse range of events, including music, dance, drama, literature, fine arts, and cultural competitions. The festival provides an opportunity for participants to express themselves, learn from one another, and create lasting memories through shared experiences.
              </p>
              <p
                className="text-stone-500 leading-relaxed mb-10 text-sm"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                Hosted on the campus of IIT Dharwad, Harshtal reflects the spirit of innovation, inclusivity, and artistic excellence. Whether through electrifying performances, engaging competitions, interactive workshops, or unforgettable cultural nights, the festival aims to inspire, connect, and celebrate the many forms of human expression.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "5+", label: "Clubs" },
                  { num: "15+", label: "Events" },
                  { num: "200+", label: "Participants" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border-l border-stone-200 pl-4"
                  >
                    <p
                      className="text-stone-900 text-2xl mb-1"
                      style={{ fontFamily: "'Cinzel Decorative', serif" }}
                    >
                      {stat.num}
                    </p>
                    <p
                      className="text-stone-400 text-[10px] tracking-widest uppercase"
                      style={{
                        fontFamily: "'Zen Kaku Gothic New', sans-serif",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-100 p-2">
                <img
                  src="/background_about.png"
                  alt="Minimal Japanese Architecture"
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-stone-200 -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#c62828]/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Clubs section */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p
              className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              文化クラブ
            </p>
            <h2
              className="text-stone-900"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
              }}
            >
              Cultural Clubs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "",
                title: "Music Club",
                desc: "Discover harmonious melodies, classical ragas, and modern beats. A space where voices and instruments unite in minimal perfection.",
                tag: "Acoustic & Vocal",
              },
              {
                icon: "",
                title: "Dance Club",
                desc: "Expressive movements set to rhythm. From classical Indian dance to contemporary styles, watch the stage come alive.",
                tag: "Movement",
              },
              {
                icon: "",
                title: "Drama Club",
                desc: "Compelling narratives and theatrical brilliance. Experience stories that resonate in the silence of negative space.",
                tag: "Theatrics",
              },
              {
                icon: "",
                title: "Photography Club",
                desc: "Capturing fleeting moments and finding beauty in the mundane. A celebration of perspective and framing.",
                tag: "Visual Arts",
              },
              {
                icon: "",
                title: "Design Club",
                desc: "Where creativity meets structure. Showcasing minimalist aesthetics, UI/UX, and graphic design masterpieces.",
                tag: "Creativity",
              },
              {
                icon: "",
                title: "Literary Club",
                desc: "The power of words. Poetry, debates, and storytelling that speak volumes with absolute brevity.",
                tag: "Expression",
              },
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                key={item.title}
                className="bg-white p-10 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c62828]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-3xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {item.icon}
                </div>
                <p
                  className="text-stone-400 text-[10px] tracking-widest uppercase mb-3"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  {item.tag}
                </p>
                <h3
                  className="text-stone-900 mb-4 text-xl"
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-stone-500 text-sm leading-relaxed font-light"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 5 * 0.1, duration: 0.6 }}
              className="px-5 mt-6 duration-500 group relative overflow-hidden"
            >
              <h3
                className="text-stone-900 mb-4 text-xl"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: 400,
                }}
              >
                And many more clubs...
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tickets / Registration section */}
      <section
        id="tickets"
        className="py-32 px-6 bg-white relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p
              className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              登録
            </p>
            <h2
              className="text-stone-900"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
              }}
            >
              Registration
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Viewer",
                description: "External Visitors",
                nameJp: "観客",
                price: "TBA",
                features: ["Stage access", "Food stalls", "Exhibitions"],
                highlight: false,
              },
              {
                name: "Participant",
                description: "External Students",
                nameJp: "参加者",
                price: "TBA",
                features: [
                  "Competition entry",
                  "Priority seating",
                  "Certificate",
                  "Welcome kit",
                ],
                highlight: true,
              },
              {
                name: "IITD Pass",
                description: "IIT Dharwad Students",
                nameJp: "学内参加者",
                price: "TBA",
                features: [
                  "Event access",
                  "Competition entry",
                  "Priority seating",
                  "Certificate",
                ],
                highlight: false,
              },
            ].map((tier, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                key={tier.name}
                className={`relative p-10 flex flex-col transition-all duration-300 ${
                  tier.highlight
                    ? "bg-stone-50 border border-stone-200 shadow-xl shadow-stone-200/50 scale-105 z-10"
                    : "bg-white border border-stone-100 hover:border-stone-200 hover:shadow-lg"
                }`}
              >
                {tier.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c62828] text-white text-[10px] tracking-widest uppercase px-6 py-1"
                    style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                  >
                    Recommended
                  </div>
                )}
                <p
                  className="text-stone-400 text-sm mb-2"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {tier.nameJp}
                </p>
                <h3
                  className="text-stone-900"
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontSize: "1.2rem",
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  className="flex items-start gap-3 text-stone-600 text-sm font-light mb-6"
                  style={{
                    fontFamily: "'Zen Kaku Gothic New', sans-serif",
                  }}
                >
                  {tier.description}
                </p>
                <p
                  className="text-[#c62828] mb-8"
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                  }}
                >
                  {tier.price}
                </p>
                <ul className="flex-1 space-y-4 mb-10">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-stone-600 text-sm font-light"
                      style={{
                        fontFamily: "'Zen Kaku Gothic New', sans-serif",
                      }}
                    >
                      <span className="text-[#c62828] mt-0.5 text-[10px]">
                        ✦
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 tracking-widest uppercase text-xs transition-colors duration-300 ${
                    tier.highlight
                      ? "bg-[#c62828] text-white hover:bg-[#a01f1f]"
                      : "border border-stone-200 text-stone-700 hover:bg-stone-50"
                  }`}
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  Register
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-32 px-6 bg-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              お問い合わせ
            </p>
            <h2
              className="text-stone-900 mb-6"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
              }}
            >
              Get in Touch
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white border border-stone-200 p-8 shadow-sm">
              <p
                className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-3"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                Outreach Harshtal
              </p>

              <a
                href="mailto:outreach.harshtal@iitdh.ac.in"
                className="text-lg text-stone-900 hover:text-[#c62828] transition-colors"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                outreach.harshtal@iitdh.ac.in
              </a>
            </div>

            <div className="bg-white border border-stone-200 p-8 shadow-sm">
              <p
                className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-3"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                Mayank Mishra (Overall Coordinator)
              </p>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-stone-900 hover:text-[#c62828] transition-colors"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                +91 95487 01496
              </a>
            </div>

            <p
              className="text-sm text-stone-500 mt-4 leading-relaxed"
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              For sponsorship enquiries, participation details, collaborations,
              or general information regarding Harshtal at IIT Dharwad, feel
              free to reach out directly via email or WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
