import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Mail, Linkedin, MapPin, Sparkles } from "lucide-react";
import ImageTrail from "../components/ImageTrail";

/* ------------------------------------------------------------------ */
/* Palette tokens for the pagoda frame system                          */
/* ------------------------------------------------------------------ */
const FRAME_NAVY = "#1b3d6d";
const FRAME_NAVY_LIGHT = "#2a4f85";
const FRAME_CREAM = "#f3e8d3";
const FRAME_INK = "#16283f";
const FRAME_GOLD = "#c9b487";

const getInitialsSvgUrl = (name, bg = FRAME_NAVY) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="50" fill="${bg}" /><text x="50%" y="54%" fill="#ffffff" font-family="'Josefin Sans', sans-serif" font-size="36" font-weight="bold" text-anchor="middle" dominant-baseline="middle" letter-spacing="1">${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const getBigInitialsSvgUrl = (name, bg = FRAME_NAVY) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500"><defs><radialGradient id="grad" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="${bg}" stop-opacity="0.9" /><stop offset="100%" stop-color="#0e100f" stop-opacity="0.95" /></radialGradient></defs><rect width="100%" height="100%" fill="url(#grad)" /><circle cx="200" cy="200" r="70" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3" /><text x="50%" y="46%" fill="#ffffff" font-family="'Josefin Sans', sans-serif" font-size="70" font-weight="bold" text-anchor="middle" dominant-baseline="middle" letter-spacing="3">${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

/* ------------------------------------------------------------------ */
/* Decorative pieces of the pagoda frame                              */
/* ------------------------------------------------------------------ */

function PagodaRoof({ isHovered }) {
  return (
    <svg
      viewBox="0 0 300 90"
      preserveAspectRatio="none"
      className="absolute -top-[6%] left-0 w-full h-[16%] z-30 overflow-visible pointer-events-none transition-transform duration-500"
      style={{
        transform: isHovered
          ? "translateY(-3px) scaleX(1.02)"
          : "translateY(0) scaleX(1)",
      }}
    >
      {/* Finials with springy response */}
      <path
        d="M40 58 C10 55 -14 40 -10 20 C-7 5 10 2 22 12 C10 12 4 24 12 34 C2 34 -2 44 6 52 C14 58 28 60 40 58 Z"
        fill={FRAME_NAVY}
        stroke={FRAME_CREAM}
        strokeWidth="1.4"
      />
      <path
        d="M260 58 C290 55 314 40 310 20 C307 5 290 2 278 12 C290 12 296 24 288 34 C298 34 302 44 294 52 C286 58 272 60 260 58 Z"
        fill={FRAME_NAVY}
        stroke={FRAME_CREAM}
        strokeWidth="1.4"
      />
      <path
        d="M18 40 Q22 14 50 10 L250 10 Q278 14 282 40 L282 55 Q150 38 18 55 Z"
        fill={FRAME_NAVY_LIGHT}
        stroke={FRAME_CREAM}
        strokeWidth="1.2"
      />
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={i}
          x1={30 + i * 19}
          y1={12}
          x2={22 + i * 19}
          y2={38}
          stroke={FRAME_CREAM}
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <circle
          key={i}
          cx={35 + i * 25}
          cy={52}
          r={4.2}
          fill={isHovered ? FRAME_GOLD : FRAME_NAVY}
          stroke={FRAME_CREAM}
          strokeWidth="1.3"
          className="transition-colors duration-300"
        />
      ))}
    </svg>
  );
}

function CloudMotif({ side = "left", isHovered }) {
  return (
    <motion.svg
      animate={{
        x: isHovered ? (side === "left" ? -6 : 6) : 0,
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      viewBox="0 0 60 90"
      className={`absolute top-1/2 -translate-y-1/2 w-6 sm:w-7 md:w-8 h-auto z-30 pointer-events-none ${
        side === "left" ? "-left-[9%] scale-x-[-1]" : "-right-[9%]"
      }`}
    >
      <path
        d="M32 4 C14 8 6 26 20 32 C6 36 0 54 14 62 C24 66 34 58 30 48 C42 54 56 44 47 31 C57 27 52 10 37 14 C40 8 37 4 32 4 Z"
        fill={isHovered ? FRAME_NAVY_LIGHT : FRAME_NAVY}
        stroke={FRAME_CREAM}
        strokeWidth="1.6"
        className="transition-colors duration-300"
      />
    </motion.svg>
  );
}

function InnerCorner({ position }) {
  const base =
    "absolute w-4 h-4 sm:w-5 sm:h-5 z-30 pointer-events-none transition-all duration-300";
  const styles = {
    tl: "top-[16%] left-[7%] border-t-2 border-l-2 rounded-tl-md",
    tr: "top-[16%] right-[7%] border-t-2 border-r-2 rounded-tr-md",
    bl: "bottom-[22%] left-[7%] border-b-2 border-l-2 rounded-bl-md",
    br: "bottom-[22%] right-[7%] border-b-2 border-r-2 rounded-br-md",
  };
  return (
    <span
      className={`${base} ${styles[position]}`}
      style={{ borderColor: FRAME_CREAM }}
    />
  );
}

function MountainMotif() {
  return (
    <svg
      viewBox="0 0 120 60"
      className="absolute bottom-2 right-3 w-16 sm:w-20 h-auto opacity-70 pointer-events-none"
    >
      <path
        d="M10 46 Q25 40 38 46 T66 46 T94 46 T118 46"
        fill="none"
        stroke={FRAME_NAVY}
        strokeWidth="1.3"
      />
      <path
        d="M4 50 Q30 44 55 50 T110 50"
        fill="none"
        stroke={FRAME_NAVY}
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M55 46 L70 20 L80 32 L95 12 L112 46 Z"
        fill="none"
        stroke={FRAME_NAVY}
        strokeWidth="1.3"
      />
    </svg>
  );
}

function SmallCloud() {
  return (
    <svg
      viewBox="0 0 60 30"
      className="absolute top-3 right-3 w-10 sm:w-12 h-auto opacity-70 pointer-events-none"
    >
      <path
        d="M8 22 Q2 22 2 16 Q2 10 9 11 Q10 4 18 5 Q26 -1 32 6 Q40 4 41 12 Q48 12 48 18 Q48 22 42 22 Z"
        fill="none"
        stroke={FRAME_NAVY}
        strokeWidth="1.3"
      />
    </svg>
  );
}

function DiamondDivider() {
  return (
    <div className="relative flex flex-col items-center justify-between h-full py-1 w-3 flex-shrink-0">
      <span
        className="absolute top-1 bottom-1 left-1/2 -translate-x-1/2 w-px"
        style={{ backgroundColor: FRAME_GOLD }}
      />
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="relative w-2 h-2 rotate-45 z-10"
          style={{ backgroundColor: FRAME_NAVY }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Interactive Architectural Member Frame                             */
/* ------------------------------------------------------------------ */
function ArchitecturalMemberFrame({
  name,
  role,
  roleJp,
  club,
  avatarUrl,
  email,
  linkedin,
  institute = "IIT Dharwad",
  isFeatured = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const placeholderImage = getBigInitialsSvgUrl(name);
  const designation = club ? `${club} Head` : role || roleJp;

  // Subtle 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), {
    stiffness: 300,
    damping: 20,
  });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full cursor-pointer perspective-1000 ${
        isFeatured
          ? "max-w-[300px] sm:max-w-[340px] md:max-w-[370px] mx-auto z-20"
          : "max-w-[220px] sm:max-w-[240px] md:max-w-[260px] mx-auto z-10"
      }`}
    >
      {/* Outer Glow Aura on Hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.03 : 0.98,
        }}
        className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-600/30 via-sky-600/30 to-amber-600/30 blur-xl pointer-events-none z-0"
      />

      {/* ---- Photo + Pagoda Shell ---- */}
      <div
        className={`relative ${
          isFeatured
            ? "h-[19rem] sm:h-[22rem] md:h-[24rem]"
            : "h-[13rem] sm:h-[14.5rem] md:h-[16rem]"
        }`}
      >
        {/* Pillars */}
        <div
          className="absolute top-[13%] bottom-[6%] left-0 w-[9%] z-20 transition-all duration-300"
          style={{
            background: isHovered
              ? `linear-gradient(to bottom, ${FRAME_GOLD}, ${FRAME_NAVY})`
              : `linear-gradient(to bottom, ${FRAME_NAVY_LIGHT}, ${FRAME_NAVY})`,
          }}
        >
          <div
            className="absolute inset-y-2 left-1/2 -translate-x-1/2 w-[55%] border-l border-r"
            style={{ borderColor: "rgba(243,232,211,0.4)" }}
          />
        </div>
        <div
          className="absolute top-[13%] bottom-[6%] right-0 w-[9%] z-20 transition-all duration-300"
          style={{
            background: isHovered
              ? `linear-gradient(to bottom, ${FRAME_GOLD}, ${FRAME_NAVY})`
              : `linear-gradient(to bottom, ${FRAME_NAVY_LIGHT}, ${FRAME_NAVY})`,
          }}
        >
          <div
            className="absolute inset-y-2 left-1/2 -translate-x-1/2 w-[55%] border-l border-r"
            style={{ borderColor: "rgba(243,232,211,0.4)" }}
          />
        </div>

        {/* Photo Cutout */}
        <div className="absolute top-[13%] bottom-[6%] left-[9%] right-[9%] overflow-hidden bg-[#0e100f]">
          <motion.img
            animate={{
              scale: isHovered ? 1.08 : 1,
              filter: isHovered
                ? "grayscale(0%) brightness(1.05)"
                : "grayscale(15%) brightness(0.95)",
            }}
            transition={{ duration: 0.4 }}
            src={avatarUrl || placeholderImage}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e100f]/50 via-transparent to-transparent" />
        </div>

        {/* Decorative Pagoda Elements */}
        <PagodaRoof isHovered={isHovered} />
        <CloudMotif side="left" isHovered={isHovered} />
        <CloudMotif side="right" isHovered={isHovered} />
        <InnerCorner position="tl" />
        <InnerCorner position="tr" />
        <InnerCorner position="bl" />
        <InnerCorner position="br" />
      </div>

      {/* ---- Cream Info Panel ---- */}
      <motion.div
        animate={{
          borderColor: isHovered ? FRAME_GOLD : FRAME_NAVY,
          boxShadow: isHovered
            ? "0 12px 30px rgba(0,0,0,0.5)"
            : "0 4px 10px rgba(0,0,0,0.2)",
        }}
        className="relative -mt-1 rounded-b-xl border-2 overflow-hidden px-3 py-2.5 sm:px-4 sm:py-3 transition-colors duration-300"
        style={{ backgroundColor: FRAME_CREAM }}
      >
        {isFeatured && (
          <span
            className="flex items-center gap-1 text-[8px] uppercase tracking-[0.25em] font-semibold mb-1"
            style={{
              color: FRAME_NAVY,
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            <Sparkles size={10} className="text-amber-600 animate-pulse" />
            統括 | Lead Organizer
          </span>
        )}

        <SmallCloud />
        <MountainMotif />

        <div className="flex gap-2.5 relative z-10">
          <DiamondDivider />

          <div className="flex-1 min-w-0">
            <h3
              className={`font-bold uppercase tracking-wide leading-tight transition-colors duration-300 ${
                isFeatured ? "text-base sm:text-lg" : "text-xs sm:text-sm"
              }`}
              style={{
                color: isHovered ? FRAME_NAVY : FRAME_INK,
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              {name}
            </h3>
            {designation && (
              <p
                className={`font-medium mt-0.5 ${isFeatured ? "text-[11px]" : "text-[10px]"}`}
                style={{
                  color: FRAME_NAVY,
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                {designation}
              </p>
            )}

            <div
              className="my-1.5 h-px w-4/5 transition-all duration-300"
              style={{ backgroundColor: isHovered ? FRAME_NAVY : FRAME_GOLD }}
            />

            <div className="flex flex-col gap-1">
              {email && (
                <motion.a
                  whileHover={{ x: 2 }}
                  href={`mailto:${email}`}
                  className="flex items-center gap-1.5 text-[9px] sm:text-[10px] hover:underline truncate"
                  style={{ color: FRAME_INK }}
                >
                  <span
                    className="flex items-center justify-center w-4 h-4 rounded-full border flex-shrink-0 transition-colors"
                    style={{
                      borderColor: FRAME_NAVY,
                      backgroundColor: isHovered
                        ? "rgba(27,61,109,0.1)"
                        : "transparent",
                    }}
                  >
                    <Mail size={9} color={FRAME_NAVY} />
                  </span>
                  <span className="truncate">{email}</span>
                </motion.a>
              )}
              {linkedin && (
                <motion.a
                  whileHover={{ x: 2 }}
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[9px] sm:text-[10px] hover:underline truncate"
                  style={{ color: FRAME_INK }}
                >
                  <span
                    className="flex items-center justify-center w-4 h-4 rounded-full border flex-shrink-0 transition-colors"
                    style={{
                      borderColor: FRAME_NAVY,
                      backgroundColor: isHovered
                        ? "rgba(27,61,109,0.1)"
                        : "transparent",
                    }}
                  >
                    <Linkedin size={9} color={FRAME_NAVY} />
                  </span>
                  <span className="truncate">LinkedIn</span>
                </motion.a>
              )}
              <div
                className="flex items-center gap-1.5 text-[9px] sm:text-[10px]"
                style={{ color: FRAME_INK }}
              >
                <span
                  className="flex items-center justify-center w-4 h-4 rounded-full border flex-shrink-0"
                  style={{ borderColor: FRAME_NAVY }}
                >
                  <MapPin size={9} color={FRAME_NAVY} />
                </span>
                <span className="truncate">{institute}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Interactive Secondary Team Card                                    */
/* ------------------------------------------------------------------ */
function TeamMemberCard({
  name,
  role,
  club,
  avatarUrl,
  linkedin,
  email,
  institute = "IIT Dharwad",
}) {
  const placeholderImage = getInitialsSvgUrl(name);

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative border-2 p-3.5 flex items-center gap-4 transition-all duration-300 group w-full rounded-lg cursor-pointer shadow-md hover:shadow-xl"
      style={{ backgroundColor: FRAME_CREAM, borderColor: FRAME_NAVY }}
    >
      <div
        className="relative w-14 h-14 border-2 flex-shrink-0 overflow-hidden bg-black p-0.5 rounded-full transition-transform duration-300 group-hover:scale-105"
        style={{ borderColor: FRAME_NAVY }}
      >
        <img
          src={avatarUrl || placeholderImage}
          alt={name}
          className="w-full h-full object-cover rounded-full group-hover:filter-none transition-all duration-300"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h4
          className="text-sm font-bold truncate uppercase tracking-wide group-hover:text-amber-800 transition-colors"
          style={{ color: FRAME_INK, fontFamily: "'Josefin Sans', sans-serif" }}
        >
          {name}
        </h4>
        <p
          className="text-xs truncate font-light mt-0.5"
          style={{
            color: FRAME_NAVY,
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        >
          {role} {club && <span className="opacity-70">({club})</span>}
        </p>

        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-[11px] truncate max-w-[140px] hover:underline flex items-center gap-1"
              style={{ color: FRAME_INK }}
            >
              <Mail size={10} color={FRAME_NAVY} />
              {email}
            </a>
          )}
          <div className="flex items-center gap-2.5 ml-auto">
            <span
              className="text-[10px] flex items-center gap-1"
              style={{ color: FRAME_INK }}
            >
              <MapPin size={10} color={FRAME_NAVY} />
              {institute}
            </span>
            <a
              href={linkedin || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: FRAME_NAVY }}
              className="hover:scale-125 transition-transform"
              aria-label={`LinkedIn ${name}`}
            >
              <Linkedin size={13} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Page                                                          */
/* ------------------------------------------------------------------ */
export function TeamsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 300, 1);

  const teamSections = [
    {
      title: "Core Committee",
      titleJp: "実行委員会",
      members: [
        {
          name: "Mayank Mishra",
          role: "Overall Coordinator",
          avatarUrl: "/Mayank.jpeg",
          email: "is24bm002@iitdh.ac.in",
          institute: "IIT Dharwad",
        },
        {
          name: "Ayush Raj",
          role: "Events Head",
          avatarUrl: "/Ayush.jpeg",
          email: "is24bm003@iitdh.ac.in",
          institute: "IIT Dharwad",
        },
        {
          name: "Harshit Konda",
          role: "Operations & Logistics Head",
          avatarUrl: "/Harshit.jpeg",
          email: "mc24bt025@iitdh.ac.in",
          institute: "IIT Dharwad",
        },
        {
          name: "Shreyas Bhawalkar",
          role: "Outreach Head",
          avatarUrl: "/Shreyas.jpeg",
          email: "me24bt027@iitdh.ac.in",
          institute: "IIT Dharwad",
        },
        {
          name: "Tushar Hegde",
          role: "Finance Head",
          avatarUrl: "/Tushar.jpeg",
          email: "ep24bt002@iitdh.ac.in",
          institute: "IIT Dharwad",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0e100f] text-stone-200 overflow-x-hidden">
      <ImageTrail
        items={[
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758824/Sakura_1_afhgla.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758824/Sakura_2_zvr61f.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758825/Sakura_3_aanapp.svg",
          "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758826/Sakura_4_il7dmw.svg",
        ]}
        variant={5}
        size={15}
      />

      {/* Header Atmosphere Overlay */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-75 ease-out scale-120"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/db69ffwwa/image/upload/v1780758927/TeamsBackground_xxckvv.png')",
            filter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
            WebkitFilter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
            opacity: 0.35 - scrollProgress * 0.2,
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
      </div>

      {/* Hero Title Block */}
      <div className="relative pt-36 pb-16 px-6 z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p
            className="text-stone-500/80 tracking-[0.4em] uppercase text-[10px] mb-3 font-semibold"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            運営チーム | Organizers
          </p>
          <h1
            className="text-white mb-6 leading-tight font-extrabold font-sans uppercase tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            The Organizers
          </h1>
          <p
            className="text-stone-400 leading-relaxed text-md font-light max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Meet the creative minds, planners, and developers who work behind
            the scenes to bring Harshtal 2026 to life.
          </p>
        </motion.div>
      </div>

      {/* Main Grid Section */}
      <div className="relative z-10 bg-[#0e100f] py-8 px-4 sm:px-6 pb-24 border-t border-white/5 shadow-[0_-30px_50px_rgba(14,16,15,0.95)]">
        <div className="max-w-6xl mx-auto">
          {teamSections.map((section) => (
            <div key={section.title} className="mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 border-l-2 pl-4 flex flex-col justify-start"
                style={{ borderColor: FRAME_NAVY }}
              >
                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.25em] mb-1"
                  style={{
                    color: FRAME_GOLD,
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  {section.titleJp}
                </span>
                <h3
                  className="text-white text-2xl sm:text-3xl font-extrabold font-sans tracking-wide uppercase"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  {section.title}
                </h3>
              </motion.div>

              {section.title === "Core Committee" ? (
                <div className="relative w-full py-4 sm:py-8">
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Left Column */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="md:col-span-3 flex flex-col gap-8 md:gap-14 justify-center pl-4 md:pl-0"
                    >
                      {section.members[1] && (
                        <ArchitecturalMemberFrame {...section.members[1]} />
                      )}
                      {section.members[3] && (
                        <ArchitecturalMemberFrame {...section.members[3]} />
                      )}
                    </motion.div>

                    {/* Featured Center Coordinator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="md:col-span-6 my-2 md:my-0 pl-4 md:pl-0"
                    >
                      {section.members[0] && (
                        <ArchitecturalMemberFrame
                          {...section.members[0]}
                          isFeatured={true}
                        />
                      )}
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="md:col-span-3 flex flex-col gap-8 md:gap-14 justify-center pl-4 md:pl-0"
                    >
                      {section.members[2] && (
                        <ArchitecturalMemberFrame {...section.members[2]} />
                      )}
                      {section.members[4] && (
                        <ArchitecturalMemberFrame {...section.members[4]} />
                      )}
                    </motion.div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
                  {section.members.map((member) => (
                    <TeamMemberCard key={member.name} {...member} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
