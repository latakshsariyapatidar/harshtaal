import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import ImageTrail from "../../components/ImageTrail";
import ClickSpark from "../../components/ClickSpark";
import FlowingMenu from "../../components/FlowingMenu";
import Counter from "../../components/Counter";


export function HomePage() {
  const [fontSize, setFontSize] = useState(48);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Refs for scroll animations
  const landerRef = useRef(null);

  // 1. Lander scroll progress
  const { scrollYProgress: landerScroll } = useScroll({
    target: landerRef,
    offset: ["start start", "end start"]
  });
  const landerGrayscale = useTransform(landerScroll, [0, 0.7], [0, 100]);
  const landerFilter = useTransform(landerGrayscale, (v) => `grayscale(${v}%)`);
  const landerOpacity = useTransform(landerScroll, [0, 0.7], [0.4, 0.1]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setFontSize(36);
      } else if (window.innerWidth < 1024) {
        setFontSize(44);
      } else {
        setFontSize(48);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={300}
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
        {/* Hero */}
        <section
          ref={landerRef}
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e100f]"
        >

          {/* Background video */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-120"
              style={{
                opacity: landerOpacity,
                filter: landerFilter,
              }}
              {...{ "data-scroll": "", "data-scroll-speed": "0.05" }}
            >
              <source src="/HomePage.mp4" type="video/mp4" />
            </motion.video>

            {/* Gradient from right to left going to blur on the left (transparent on right) */}
            <div
              className="absolute inset-0 hidden md:block pointer-events-none"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.35) 60%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.35) 60%, transparent 100%)",
              }}
            />
            {/* Fallback overlay blur for mobile screens */}
            <div className="absolute inset-0 md:hidden bg-black/45 backdrop-blur-sm pointer-events-none" />

            {/* Bottom transition gradient to blend into next section seamlessly */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e100f]/40 to-[#0e100f] z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0e100f] to-transparent z-10 backdrop-blur-[2px] pointer-events-none" />
          </div>

          {/* Vertical Japanese text decoration */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-stone-700/60 text-sm tracking-widest pointer-events-none select-none text-white"
            style={{
              writingMode: "vertical-rl",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            文化と芸術の祭典
          </div>
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-stone-700/60 text-sm tracking-widest pointer-events-none select-none  text-white"
            style={{
              writingMode: "vertical-rl",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            静寂の中の鼓動
          </div>

          <div
            className="relative z-20 text-left px-6 md:px-12 lg:px-20 max-w-3xl ml-0 mr-auto mt-28 md:mt-36"
          >
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
                className="text-stone-300 mb-10 max-w-lg leading-relaxed text-sm md:text-base font-light"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                A convergence of art, rhythm, frame, and design. Experience the
                pulse of culture in a space inspired by minimalist harmony and
                negative space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(198, 40, 40, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  href="#tickets"
                  className="px-8 py-3 bg-[#c62828] text-white tracking-widest uppercase text-xs hover:bg-[#a01f1f] transition-colors duration-300 shadow-lg shadow-red-950/20 text-center"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  Register Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  href="#about"
                  className="px-8 py-3 border border-white/10 text-stone-300 tracking-widest uppercase text-xs hover:bg-white/5 transition-colors duration-300 bg-white/5 backdrop-blur-sm text-center"
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
              className="mt-20 flex flex-col sm:flex-row justify-start gap-8 pt-8 max-w-2xl"
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
                  className="text-left group cursor-pointer border border-transparent py-4 pr-6 transition-all duration-300 mb-8 sm:mb-0"
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
        {/* About section */}
        <section
          id="about"
          className="py-32 px-6 bg-[#0e100f] relative overflow-hidden shadow-[0_-30px_50px_rgba(14,16,15,0.95)]"
        >
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
              className="flex items-center self-center justify-center gap-4 mb-10"
            >
              <p
                className="text-[#c62828] tracking-[0.5em] uppercase text-xs"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                について | About
              </p>
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
                <div ref={statsRef} className="grid grid-cols-3 gap-6">
                  {[
                    { num: 7, label: "Clubs", places: [1] },
                    { num: 20, label: "Events" },
                    { num: 500, label: "Participants" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1, borderColor: "#c62828" }}
                      className="border-l-2 border-white/5 pl-4 group cursor-pointer transition-colors duration-300"
                    >
                      <div className="flex items-center text-white group-hover:text-[#c62828] transition-colors duration-300">
                        <Counter
                          value={isStatsInView ? stat.num : 0}
                          places={stat.hasOwnProperty('places') ? (stat as any).places : undefined}
                          fontSize={fontSize}
                          padding={5}
                          gap={2}
                          textColor="inherit"
                          fontWeight={300}
                          containerStyle={{ display: 'inline-flex', alignItems: 'center' }}
                          counterStyle={{
                            fontFamily: "'Josefin Sans', sans-serif",
                            paddingLeft: 0,
                            paddingRight: 0,
                            lineHeight: 1,
                          }}
                          gradientHeight={fontSize * 0.15}
                          gradientFrom="#0e100f"
                          gradientTo="transparent"
                        />
                        <span
                          className="font-light ml-0.5 text-[#c62828] transition-transform duration-300 group-hover:scale-110 group-hover:color-white"
                          style={{
                            fontFamily: "'Josefin Sans', sans-serif",
                            fontSize: `${fontSize * 0.75}px`,
                            lineHeight: 1,
                          }}
                        >
                          +
                        </span>
                      </div>
                      <p
                        className="text-stone-500 text-[10px] tracking-widest uppercase font-medium group-hover:text-stone-400 transition-colors duration-300 mt-2"
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
        <section
          className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden shadow-[0_-30px_50px_rgba(10,10,10,0.95)]"
        >
          <div className="max-w-7xl mx-auto relative z-10">
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


            <div className="h-[520px] relative rounded-m overflow-hidden bg-[#0a0a0a]/50">
              <FlowingMenu
                items={[
                  {
                    text: "Music Club",
                    description: "Harmony in every note.",
                    image: "/music_club.png",
                    link: "/events#music"
                  },
                  {
                    text: "Dance Club",
                    description: "Move. Express. Perform.",
                    image: "/dance_club.png",
                    link: "/events#dance"
                  },
                  {
                    text: "Drama Club",
                    description: "Performance, expression, and storytelling.",
                    image: "/drama_club.png",
                    link: "/events#drama"
                  },
                  {
                    text: "Photography Club",
                    description: "Moments captured through a unique lens.",
                    image: "/photography_club.png",
                    link: "/events#photography"
                  },
                  {
                    text: "Design Club",
                    description: "Ideas shaped into visual experiences.",
                    image: "/design_club.png",
                    link: "/events#design"
                  },
                  {
                    text: "Literary Club",
                    description: "Poetry, prose, and powerful expression.",
                    image: "/literary_club.png",
                    link: "/events#literary"
                  }
                ]}
                speed={5}
                textColor="#d6d3d1"
                bgColor="transparent"
                marqueeBgColor="#ffffffff"
                marqueeTextColor="black"
                borderColor="rgba(255, 255, 255, 0.05)"
              />
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

        {/* Contact section */}
        <section
          id="contact"
          className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden shadow-[0_-30px_50px_rgba(10,10,10,0.95)] min-h-[90vh] flex items-center"
        >
          {/* Background image ContactPage.png (Vibrant Color) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="w-full h-full bg-cover bg-center opacity-50 pointer-events-none scale-120"
              style={{
                backgroundImage: "url('/ContactPage.png')",
              }}
              {...{ "data-scroll": "", "data-scroll-speed": "0.08" }}
            />
            {/* Gradient from left to right going to blur on the right (transparent on left) */}
            <div
              className="absolute inset-0 hidden md:block pointer-events-none"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                maskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.3) 50%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.3) 50%, transparent 80%)",
              }}
            />
            {/* Fallback overlay blur for mobile screens */}
            <div className="absolute inset-0 md:hidden bg-black/65 backdrop-blur-sm pointer-events-none" />

            {/* Top/Bottom blend overlay to make it blend into adjacent sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e100f] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
          </div>

          {/* Decorative vertical Japanese line on the left */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-stone-700/40 text-sm tracking-widest pointer-events-none select-none"
            style={{
              writingMode: "vertical-rl",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            つながりましょう | Let's Connect
          </div>

          <div
            className="w-full relative z-20 flex justify-center md:justify-end px-6 md:pr-16 lg:pr-24 xl:pr-36 md:pl-12"
          >
            <div className="w-full max-w-lg text-center md:text-right flex flex-col items-center md:items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-end mb-16"
              >
                <p
                  className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-4 font-bold"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  お問い合わせ | Contact
                </p>
                <h2
                  className="text-white mb-6 font-light leading-tight"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  }}
                >
                  Get in Touch
                </h2>
                <div className="w-16 h-0.5 bg-[#c62828]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-10 w-full items-center md:items-end"
              >
                {[
                  {
                    role: "Outreach & Enquiries",
                    roleJp: "広報窓口",
                    value: "outreach.harshtal@iitdh.ac.in",
                    href: "mailto:outreach.harshtal@iitdh.ac.in",
                    icon: "✦"
                  },
                  {
                    role: "Mayank Mishra (Overall Coordinator)",
                    roleJp: "総合調整者",
                    value: "+91 95487 01496",
                    href: "https://wa.me/919548701496",
                    icon: "✦"
                  }
                ].map((item) => (
                  <motion.a
                    key={item.role}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover="hover"
                    className="group relative flex flex-col items-center md:items-end w-full cursor-pointer py-6 transition-colors duration-500"
                  >
                    {/* SVG Hanko Stamp that appears on Hover */}
                    <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none scale-75 group-hover:scale-100 rotate-12 group-hover:rotate-0 text-[#c62828] hidden md:block">
                      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                        <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="1.5" />
                        <text
                          x="60"
                          y="65"
                          fill="currentColor"
                          fontSize="13"
                          fontFamily="'Noto Sans JP', sans-serif"
                          textAnchor="middle"
                          letterSpacing="2"
                          fontWeight="bold"
                        >
                          ハルシュタール
                        </text>
                      </svg>
                    </div>

                    <div className="flex items-center gap-2 mb-3 relative z-10">
                      <span className="text-[10px] text-[#c62828] group-hover:rotate-180 transition-transform duration-500">
                        {item.icon}
                      </span>
                      <span
                        className="text-md uppercase tracking-widest font-semibold text-stone-300 group-hover:text-white transition-colors duration-300"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      >
                        {item.role}
                      </span>
                    </div>

                    <span
                      className="text-md sm:text-lg md:text-xl font-light text-white group-hover:text-[#c62828] transition-all duration-300 tracking-wide break-all relative z-10"
                      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                    >
                      {item.value}
                    </span>

                    {/* underline indicator */}
                    <span className="absolute bottom-0 right-0 w-0 h-px bg-[#c62828] group-hover:w-full transition-all duration-700" />
                  </motion.a>
                ))}

                <p
                  className="text-xs sm:text-sm text-stone-400 mt-6 leading-relaxed text-center md:text-right max-w-md font-light"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  For sponsorship enquiries, participation details, collaborations,
                  or general information regarding Harshtal at IIT Dharwad, feel
                  free to reach out directly via email or WhatsApp.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ClickSpark>
    </>
  );
}
