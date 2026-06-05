import { motion } from "motion/react";
import ImageTrail from "../../components/ImageTrail";
import ClickSpark from "../../components/ClickSpark";

export function HomePage() {
  return (
    <>
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={300}
      >
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e100f]"
        >
          <ImageTrail
            items={[
              "/Sakura%201.svg",
              "/Sakura%202.svg",
              "/Sakura%203.svg",
              "/Sakura%204.svg",
              "/Sakura%201.svg",
              "/Sakura%202.svg",
              "/Sakura%203.svg",
              "/Sakura%204.svg",
              "/Sakura%201.svg",
              "/Sakura%202.svg",
              "/Sakura%203.svg",
              "/Sakura%204.svg",
              "/Sakura%201.svg",
              "/Sakura%202.svg",
              "/Sakura%203.svg",
              "/Sakura%204.svg",
              "/Sakura%201.svg",
              "/Sakura%202.svg",
              "/Sakura%203.svg",
              "/Sakura%204.svg",
              "/Sakura%201.svg",
              "/Sakura%202.svg",
              "/Sakura%203.svg",
              "/Sakura%204.svg",
            ]}
            variant={5}
            size={15}
          />
          {/* Background image */}
          <div
            className="absolute inset-0 opacity-15 mix-blend-lighten grayscale contrast-125"
            style={{
              backgroundImage: "url('/background_home.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e100f]/80 via-[#0e100f]/30 to-[#0e100f]" />
          </div>

          {/* Vertical Japanese text decoration */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-stone-700/60 text-sm tracking-widest pointer-events-none select-none"
            style={{
              writingMode: "vertical-rl",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            文化と芸術の祭典
          </div>
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-stone-700/60 text-sm tracking-widest pointer-events-none select-none"
            style={{
              writingMode: "vertical-rl",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            静寂の中の鼓動
          </div>

          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p
                className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4 font-medium"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                Cultural Festival
              </p>
              <h1
                className="text-white mb-4 leading-none font-light"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "clamp(4rem, 10vw, 8rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Harshtal
              </h1>
              <h2
                className="text-[#c62828] mb-8 tracking-[0.4em] uppercase text-sm md:text-base font-light"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                ハルシュタール
              </h2>
              <p
                className="text-stone-300 mb-10 max-w-lg mx-auto leading-relaxed text-sm md:text-base font-light"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                A convergence of art, rhythm, frame, and design. Experience the
                pulse of culture in a space inspired by minimalist harmony and
                negative space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(198, 40, 40, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  href="#tickets"
                  className="px-8 py-3 bg-[#c62828] text-white tracking-widest uppercase text-xs hover:bg-[#a01f1f] transition-colors duration-300 shadow-lg shadow-red-950/20"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  Register Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  href="#about"
                  className="px-8 py-3 border border-white/10 text-stone-300 tracking-widest uppercase text-xs hover:bg-white/5 transition-colors duration-300 bg-white/5 backdrop-blur-sm"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
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
              className="mt-20 flex flex-col md:flex-row justify-center gap-10 md:gap-20 border-t border-white/5 pt-8"
            >
              {[
                { label: "Date & Time", value: "To be announced" },
                { label: "Venue", value: "IIT Dharwad Permanent Campus" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="text-center group cursor-pointer border border-transparent px-6 py-4 transition-all duration-300 mb-8"
                >
                  <p
                    className="text-stone-500 tracking-widest uppercase text-[10px] mb-2 group-hover:text-[#c62828] transition-colors duration-300"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-stone-300 text-sm md:text-base font-light tracking-wide group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-32 px-6 bg-[#0e100f] relative border-t border-white/5">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px)",
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
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <p
                className="text-[#c62828] tracking-[0.5em] uppercase text-xs"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                について | About
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-white mb-8 leading-tight font-light"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  }}
                >
                  About Harshtal
                </h2>
                <p
                  className="text-stone-300 leading-relaxed mb-6 font-light text-lg"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  Harshtal is the annual cultural festival of IIT Dharwad,
                  bringing together students, artists, performers, and enthusiasts
                  from across the country for a celebration of creativity, talent,
                  and community.
                </p>
                <p
                  className="text-stone-400 leading-relaxed mb-10 text-sm font-light"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  Hosted on the campus of IIT Dharwad, Harshtal reflects the spirit of innovation, inclusivity, and artistic excellence. Whether through electrifying performances, engaging competitions, interactive workshops, or unforgettable cultural nights, the festival aims to inspire, connect, and celebrate the many forms of human expression.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { num: "7+", label: "Clubs" },
                    { num: "20+", label: "Events" },
                    { num: "500+", label: "Participants" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1, borderColor: "#c62828" }}
                      className="border-l-2 border-white/5 pl-4 group cursor-pointer transition-colors duration-300"
                    >
                      <p
                        className="text-white text-2xl mb-1 font-light group-hover:text-[#c62828] transition-colors duration-300"
                        style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                      >
                        {stat.num}
                      </p>
                      <p
                        className="text-stone-500 text-[10px] tracking-widest uppercase font-medium group-hover:text-stone-400 transition-colors duration-300"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                        }}
                      >
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1, rotate: 0.5 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#161817] p-2 border border-white/5">
                  <img
                    src="/background_about.png"
                    alt="Minimal Japanese Architecture"
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-white/5 -z-10 group-hover:border-white/20 group-hover:-bottom-8 group-hover:-left-8 transition-all duration-500" />
                <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#c62828]/20 -z-10 group-hover:border-[#c62828]/40 group-hover:-top-8 group-hover:-right-8 transition-all duration-500" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cultural Clubs section */}
        <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p
                className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                文化クラブ
              </p>
              <h2
                className="text-white font-light"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                }}
              >
                Cultural Clubs
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎵",
                  title: "Music Club",
                  desc: "Discover harmonious melodies, classical ragas, and modern beats. A space where voices and instruments unite in minimal perfection.",
                  tag: "Acoustic & Vocal",
                },
                {
                  icon: "💃",
                  title: "Dance Club",
                  desc: "Expressive movements set to rhythm. From classical Indian dance to contemporary styles, watch the stage come alive.",
                  tag: "Movement",
                },
                {
                  icon: "🎭",
                  title: "Drama Club",
                  desc: "Compelling narratives and theatrical brilliance. Experience stories that resonate in the silence of negative space.",
                  tag: "Theatrics",
                },
                {
                  icon: "📷",
                  title: "Photography Club",
                  desc: "Capturing fleeting moments and finding beauty in the mundane. A celebration of perspective and framing.",
                  tag: "Visual Arts",
                },
                {
                  icon: "🎨",
                  title: "Design Club",
                  desc: "Where creativity meets structure. Showcasing minimalist aesthetics, UI/UX, and graphic design masterpieces.",
                  tag: "Creativity",
                },
                {
                  icon: "✍️",
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
                  whileHover="hover"
                  variants={{
                    hover: { borderColor: "rgba(198, 40, 40, 0.5)", boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }
                  }}
                  key={item.title}
                  className="bg-[#161817] p-10 border border-white/5 transition-all duration-500 group relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#c62828] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  {/* <motion.div 
                  className="text-3xl mb-6 opacity-85 origin-left block"
                  variants={{
                    hover: { scale: 1.2, rotate: [0, -12, 12, -8, 8, 0], transition: { duration: 0.6 } }
                  }}
                >
                  {item.icon}
                </motion.div> */}
                  <p
                    className="text-stone-500 text-[10px] tracking-widest uppercase mb-3 group-hover:text-stone-400 transition-colors duration-300"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {item.tag}
                  </p>
                  <h3
                    className="text-white mb-4 text-xl font-light group-hover:text-[#c62828] transition-colors duration-300"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-stone-300 text-sm leading-relaxed font-light"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center mt-12 cursor-pointer group"
              whileHover={{ y: -2 }}
            >
              <h3
                className="text-stone-400 text-base font-light group-hover:text-white transition-colors duration-300"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                And many more clubs...
              </h3>
            </motion.div>
          </div>
        </section>

        {/* Tickets / Registration section */}
        <section
          id="tickets"
          className="py-32 px-6 bg-[#0e100f] relative overflow-hidden border-t border-white/5"
        >
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p
                className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4 font-medium"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                登録
              </p>
              <h2
                className="text-white font-light"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
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
                  whileHover="hover"
                  variants={{
                    hover: tier.highlight
                      ? { borderColor: "#ff3b3b", boxShadow: "0 25px 45px rgba(198,40,40,0.25)" }
                      : { borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }
                  }}
                  key={tier.name}
                  className={`relative p-10 flex flex-col transition-all duration-300 cursor-pointer group ${tier.highlight
                    ? "bg-[#1b1d1c] border border-[#c62828] shadow-2xl shadow-red-950/15 scale-105 z-10"
                    : "bg-[#161817] border border-white/5"
                    }`}
                >
                  {tier.highlight && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c62828] text-white text-[10px] tracking-widest uppercase px-6 py-1"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      Recommended
                    </div>
                  )}
                  <p
                    className="text-stone-500 text-sm mb-2 group-hover:text-stone-400 transition-colors duration-300"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {tier.nameJp}
                  </p>
                  <h3
                    className="text-white text-xl font-light mb-1 group-hover:text-[#c62828] transition-colors duration-300"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="flex items-start gap-3 text-stone-400 text-xs font-light mb-6"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    {tier.description}
                  </p>
                  <p
                    className="text-[#c62828] mb-8 font-light group-hover:scale-105 transition-transform duration-300 origin-left"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontSize: "2.5rem",
                    }}
                  >
                    {tier.price}
                  </p>
                  <ul className="flex-1 space-y-4 mb-10">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-stone-300 text-sm font-light animate-none"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                        }}
                      >
                        <motion.span
                          className="text-[#c62828] mt-0.5 text-[10px] shrink-0 block"
                          variants={{
                            hover: { rotate: 360, scale: 1.25, transition: { duration: 0.8, ease: "easeOut" } }
                          }}
                        >
                          ✦
                        </motion.span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: tier.highlight ? "0 5px 15px rgba(198, 40, 40, 0.3)" : "none" }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-4 tracking-widest uppercase text-xs transition-colors duration-300 cursor-pointer ${tier.highlight
                      ? "bg-[#c62828] text-white hover:bg-[#a01f1f]"
                      : "border border-white/10 text-stone-300 hover:bg-white/5 hover:text-white"
                      }`}
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    Register
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4 font-medium"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                お問い合わせ
              </p>
              <h2
                className="text-white mb-6 font-light"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
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
              <motion.div
                whileHover={{
                  borderColor: "rgba(198, 40, 40, 0.5)",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="bg-[#161817] border border-white/5 p-8 shadow-md group cursor-pointer transition-colors duration-300"
              >
                <p
                  className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3 group-hover:text-stone-300 transition-colors duration-300 group-hover:tracking-[0.35em]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  Outreach Harshtal
                </p>

                <a
                  href="mailto:outreach.harshtal@iitdh.ac.in"
                  className="text-lg text-white group-hover:text-[#c62828] transition-colors font-light"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  outreach.harshtal@iitdh.ac.in
                </a>
              </motion.div>

              <motion.div
                whileHover={{
                  borderColor: "rgba(198, 40, 40, 0.5)",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="bg-[#161817] border border-white/5 p-8 shadow-md group cursor-pointer transition-colors duration-300"
              >
                <p
                  className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3 group-hover:text-stone-300 transition-colors duration-300 group-hover:tracking-[0.35em]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  Mayank Mishra (Overall Coordinator)
                </p>

                <a
                  href="https://wa.me/919548701496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white group-hover:text-[#c62828] transition-colors font-light"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  +91 95487 01496
                </a>
              </motion.div>

              <p
                className="text-sm text-stone-400 mt-4 leading-relaxed font-light"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                For sponsorship enquiries, participation details, collaborations,
                or general information regarding Harshtal at IIT Dharwad, feel
                free to reach out directly via email or WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>
      </ClickSpark>
    </>
  );
}
