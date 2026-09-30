import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MessageCircle,
  Instagram,
  Twitter,
  Youtube,
  Home,
  Calendar,
  PhoneCall,
  UserCheck,
} from "lucide-react";
import ImageTrail from "../components/ImageTrail";
import ClickSpark from "../components/ClickSpark";
import FlowingMenu from "../components/FlowingMenu";
import Counter from "../components/Counter";

/* ============================ DESIGN TOKENS ============================ */
const MIDNIGHT = "#080B16";
const NAVY = "#0D1224";
const NAVY_MID = "#10172A";
const INDIGO = "#1B2145";
const VIOLET = "#7B6FA8";
const LAVENDER = "#B9BEE6";
const SAKURA = "#E8B8C8";
const SAKURA_PALE = "#F5DCE4";
const IVORY = "#F4EDDD";
const AMBER = "#E0A458";

const JP = { fontFamily: "'Noto Sans JP', sans-serif" };
const JOSEFIN = { fontFamily: "'Josefin Sans', sans-serif" };

const HERO_IMAGE =
  "https://res.cloudinary.com/fnwlsbqw/image/upload/v1790674884/WhatsApp_Image_2026-09-29_at_12.42.12_AM.jpg";

const WASH = {
  backgroundImage:
    "radial-gradient(ellipse at 15% 10%, rgba(123,111,168,0.14), transparent 55%), radial-gradient(ellipse at 88% 92%, rgba(232,184,200,0.07), transparent 60%)",
};
const SEAM = {
  background:
    "linear-gradient(to right, transparent, rgba(232,184,200,0.35), transparent)",
};

/* ============================ HERO CONFIG ============================== */
/* Lanterns: left/top are % of the ARTWORK (not the viewport), so they stay
   on the torii at every screen size. `top` is where the cord attaches.
   size = % of image width; dur/delay/glow keep each flame unique. */
const LANTERNS = [
  {
    left: "25.8%",
    top: "44% ",
    size: 1.7,
    dur: 4,
    delay: 0,
    glow: 1,
  },
  {
    left: "43.2%",
    top: "47%",
    size: 1.7,
    dur: 4,
    delay: 2,
    glow: 0.85,
  },
];

/* Mist banks */
const CLOUDS = [
  { top: "4%", w: 62, ratio: 3.4, o: 0.16, dur: 150, delay: -40, rev: false },
  { top: "20%", w: 80, ratio: 3.0, o: 0.2, dur: 190, delay: -120, rev: true },
  { top: "38%", w: 56, ratio: 3.6, o: 0.15, dur: 130, delay: -15, rev: false },
  { top: "52%", w: 90, ratio: 3.2, o: 0.22, dur: 210, delay: -90, rev: true },
  { top: "66%", w: 70, ratio: 3.8, o: 0.18, dur: 170, delay: -60, rev: false },
];

/* Irregular flicker: mostly steady, tiny wobbles, one occasional dip,
   never below ~0.78. Different durations keep lanterns out of sync. */
const HERO_CSS = `
@keyframes hlDrift {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(100vw, 0, 0);
  }
}

/* 
   Lantern light lifecycle

   0–28%   : bright + irregular flicker
   28–43%  : gradually dies
   43–68%  : completely OFF
   68–80%  : slowly comes back
   80–100% : flickers back to full brightness
*/
@keyframes hlFlicker {

  /* FULLY ON */
  0% {
    opacity: 1;
  }

  /* small irregular flickers */
  3% {
    opacity: 0.88;
  }

  6% {
    opacity: 1;
  }

  10% {
    opacity: 0.78;
  }

  13% {
    opacity: 0.96;
  }

  17% {
    opacity: 0.70;
  }

  20% {
    opacity: 0.92;
  }

  24% {
    opacity: 0.82;
  }

  28% {
    opacity: 0.68;
  }

  /* GRADUAL FADE OUT */
  32% {
    opacity: 0.52;
  }

  36% {
    opacity: 0.36;
  }

  40% {
    opacity: 0.18;
  }

  43% {
    opacity: 0.02;
  }

  /* COMPLETELY OFF */
  43%,
  68% {
    opacity: 0.02;
  }

  /* SLOW RELIGHT */
  72% {
    opacity: 0.08;
  }

  75% {
    opacity: 0.20;
  }

  78% {
    opacity: 0.38;
  }

  81% {
    opacity: 0.62;
  }

  /* RELIGHT FLICKER */
  83% {
    opacity: 0.46;
  }

  85% {
    opacity: 0.78;
  }

  87% {
    opacity: 0.60;
  }

  90% {
    opacity: 0.90;
  }

  93% {
    opacity: 0.76;
  }

  96% {
    opacity: 0.96;
  }

  100% {
    opacity: 1;
  }
}

/* Inner flame follows exactly the same lifecycle */
.hl-light-animation {
  animation:
    hlFlicker
    var(--dur)
    linear
    var(--delay)
    infinite;
}

/* Lantern glow is slightly softer than the core */
.hl-glow-animation {
  animation:
    hlFlicker
    var(--dur)
    linear
    var(--delay)
    infinite;
}

/* Moving mist */
.hl-cloud {
  --c: rgba(196, 202, 240, 0.9);

  position: absolute;
  left: 0;

  filter: blur(16px);

  will-change: transform;

  background:
    radial-gradient(
      ellipse 34% 60% at 20% 62%,
      var(--c),
      transparent 70%
    ),
    radial-gradient(
      ellipse 30% 78% at 44% 42%,
      var(--c),
      transparent 70%
    ),
    radial-gradient(
      ellipse 34% 62% at 70% 58%,
      var(--c),
      transparent 70%
    ),
    radial-gradient(
      ellipse 46% 30% at 50% 84%,
      var(--c),
      transparent 72%
    );

  animation:
    hlDrift
    var(--dur)
    linear
    var(--delay)
    infinite
    var(--dir);
}

@media (prefers-reduced-motion: reduce) {
  .hl-light-animation,
  .hl-glow-animation,
  .hl-cloud {
    animation: none;
  }
}
`;

/* ============================= PAGE DATA =============================== */
const SAKURA_URLS = [
  "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758824/Sakura_1_afhgla.svg",
  "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758824/Sakura_2_zvr61f.svg",
  "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758825/Sakura_3_aanapp.svg",
  "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758826/Sakura_4_il7dmw.svg",
];
const TRAIL_ITEMS = Array.from({ length: 24 }, (_, i) => SAKURA_URLS[i % 4]);

const LEFT_NAV = [
  { Icon: Home, href: "#home", label: "Home", text: "Home" },
  { Icon: Calendar, href: "#events", label: "Events", text: "Events" },
  { Icon: PhoneCall, href: "#contact", label: "Contact Us", text: "Contact" },
  { Icon: UserCheck, href: "#about", label: "About Us", text: "About" },
];

const RIGHT_NAV = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb91K2n8vd1Iugoafu32",
    hoverColor: "#25D366",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com",
    hoverColor: "#E1306C",
  },
  {
    Icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    hoverColor: "#1DA1F2",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com",
    hoverColor: "#FF0000",
  },
];

const HERO_META = [
  { label: "Date & Time", value: "To be announced" },
  { label: "Venue", value: "IIT Dharwad Permanent Campus" },
];
const STATS = [
  { num: 7, label: "Clubs", places: [1] },
  { num: 20, label: "Events" },
  { num: 500, label: "Participants" },
];

const CLUB_IMG = "https://res.cloudinary.com/db69ffwwa/image/upload/v1780758";
const CLUBS = [
  [
    "Music Club",
    "Harmony in every note.",
    "834/music_club_ic6ysc.jpg",
    "music",
  ],
  [
    "Dance Club",
    "Move. Express. Perform.",
    "840/dance_club_akmvhn.jpg",
    "dance",
  ],
  [
    "Drama Club",
    "Performance, expression, and storytelling.",
    "831/drama_club_o0jx1o.jpg",
    "drama",
  ],
  [
    "Photography Club",
    "Moments captured through a unique lens.",
    "836/photography_club_gdmuid.jpg",
    "photography",
  ],
  [
    "Design Club",
    "Ideas shaped into visual experiences.",
    "847/design_club_nprwde.jpg",
    "design",
  ],
  [
    "Literary Club",
    "Poetry, prose, and powerful expression.",
    "836/literary_club_xlpyna.jpg",
    "literary",
  ],
].map(([text, description, file, slug]) => ({
  text,
  description,
  image: `${CLUB_IMG}${file}`,
  link: `/events#${slug}`,
}));

const CONTACTS = [
  {
    role: "Outreach & Enquiries",
    value: "outreach.harshtal@iitdh.ac.in",
    href: "mailto:outreach.harshtal@iitdh.ac.in",
  },
  {
    role: "Mayank Mishra (Overall Coordinator)",
    value: "+91 95487 01496",
    href: "https://wa.me/919548701496",
  },
];

/* ========================== SMALL HELPERS ============================== */
const Eyebrow = ({ children, color = SAKURA, className = "" }) => (
  <p
    className={`tracking-[0.5em] uppercase text-xs ${className}`}
    style={{ ...JP, color }}
  >
    {children}
  </p>
);

const Title = ({
  children,
  size = "clamp(2.5rem, 5vw, 4rem)",
  className = "",
}) => (
  <h2
    className={`font-light leading-tight ${className}`}
    style={{ ...JOSEFIN, fontSize: size, color: IVORY }}
  >
    {children}
  </h2>
);

const Reveal = ({ x = 0, y = 20, delay = 0, className = "", children }) => (
  <motion.div
    initial={{ opacity: 0, x, y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Section shell: background colour, optional top hairline + atmospheric wash. */
const Section = ({ id, bg, className = "", plain, children }) => (
  <section
    id={id}
    className={`relative overflow-hidden ${className}`}
    style={{ backgroundColor: bg }}
  >
    {!plain && (
      <>
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={SEAM}
        />
        <div className="absolute inset-0 pointer-events-none" style={WASH} />
      </>
    )}
    {children}
  </section>
);

const NAV_ICON =
  "w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:text-[#F5DCE4] group-hover:drop-shadow-[0_0_8px_rgba(232,184,200,0.5)]";

function SideBar({ side, items }) {
  const left = side === "left";
  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 hidden lg:flex w-16 h-[280px] flex-col items-center justify-center gap-3 py-4 px-2 backdrop-blur-md border z-50 ${
        left ? "left-0 rounded-r-2xl" : "right-0 rounded-l-2xl"
      }`}
      style={{
        backgroundColor: "rgba(8,11,22,0.55)",
        borderColor: "rgba(244,237,221,0.14)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
      }}
    >
      {items.map(({ Icon, href, label, text }, i) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(!text && { target: "_blank", rel: "noopener noreferrer" })}
          className="group flex w-full h-14 flex-col items-center justify-center transition-all duration-300"
          style={{ color: "rgba(244,237,221,0.82)" }}
        >
          <Icon
            className={`${NAV_ICON} ${
              (i % 2 === 0) === left
                ? "group-hover:-rotate-12"
                : "group-hover:rotate-12"
            }`}
          />
          {text && (
            <span
              className="text-[9px] leading-tight font-medium mt-1"
              style={{ color: LAVENDER }}
            >
              {text}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

/* ====================== HERO: LANTERNS & MIST ========================== */
/* A small paper lantern on a cord. Warm bloom + inner glow flicker
   independently; layout and timing come entirely from props. */

function JapaneseLantern({ left, top, size, dur, delay, glow }) {
  return (
    <div
      className="absolute"
      style={{
        left,
        top,
        width: `${size}%`,
      }}
    >
      {/* OUTER GLOW */}
      <motion.div
        className="absolute left-1/2 top-[52%] w-[320%] aspect-square -translate-x-1/2 -translate-y-1/2"
        animate={{
          opacity: [1, 0.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        style={{
          pointerEvents: "none",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            mixBlendMode: "screen",
            background:
              "radial-gradient(circle, rgba(255,176,80,.8) 0%, rgba(255,128,40,.35) 25%, rgba(255,110,30,.12) 45%, transparent 68%)",
          }}
        />
      </motion.div>

      {/* LANTERN */}
      <svg
        viewBox="0 0 40 84"
        className="relative block w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`lantern-body-${left}`}
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#35120D" />
            <stop offset="18%" stopColor="#7A2D12" />
            <stop offset="50%" stopColor="#B94F1A" />
            <stop offset="78%" stopColor="#7A2D12" />
            <stop offset="100%" stopColor="#2A0D0A" />
          </linearGradient>

          <radialGradient id={`lantern-core-${left}`} cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#FFF3C4" />
            <stop offset="25%" stopColor="#FFD27A" />
            <stop offset="55%" stopColor="#FF9D3D" stopOpacity=".85" />
            <stop offset="100%" stopColor="#E86A20" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Hanging wire */}
        <line
          x1="20"
          x2="20"
          y1="0"
          y2="22"
          stroke="#0C0A14"
          strokeOpacity=".78"
          strokeWidth="1.1"
        />

        {/* Top cap */}
        <rect x="13" y="21" width="14" height="4" rx="1" fill="#15101A" />

        {/* Lantern body */}
        <path
          d="M12 25C4 34 4 52 12 61H28C36 52 36 34 28 25Z"
          fill={`url(#lantern-body-${left})`}
        />

        {/* Lantern ribs */}
        <path
          d="
            M20 25V61
            M15 25C10 36 10 50 15 61
            M25 25C30 36 30 50 25 61
          "
          stroke="#6B2A0C"
          strokeOpacity=".52"
          strokeWidth=".8"
          fill="none"
        />

        {/* ACTUAL LIGHT */}
        <motion.ellipse
          cx="20"
          cy="43"
          rx="9"
          ry="14"
          fill={`url(#lantern-core-${left})`}
          animate={{
            opacity: [1, 0.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        />

        {/* Bottom cap */}
        <rect x="13" y="60" width="14" height="4" rx="1" fill="#15101A" />

        {/* Tassel */}
        <path
          d="M20 64V76M17.5 76H22.5L21.5 82H18.5Z"
          stroke="#7A3A12"
          strokeWidth=".9"
          fill="#7A3A12"
          fillOpacity=".7"
        />
      </svg>
    </div>
  );
}

/* Soft blurred mist bank; shape/speed/opacity come from CLOUDS. */
const MistCloud = ({ top, w, ratio, o, dur, delay, rev }) => (
  <div
    className="hl-cloud"
    style={{
      top,
      width: `${w}vw`,
      aspectRatio: ratio,
      opacity: o,
      "--dur": `${dur}s`,
      "--delay": `${delay}s`,
      "--dir": rev ? "reverse" : "normal",
    }}
  />
);

/* ============================ ORNAMENTS ================================ */
function CloudBand({ className = "", flip = false, fill = NAVY_MID }) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <path
        d="M0,120 C120,60 200,150 320,110 C420,78 470,40 560,55 C660,72 690,130 800,120 C910,110 940,50 1040,60 C1150,71 1180,140 1300,118 C1360,107 1400,95 1440,100 L1440,160 L0,160 Z"
        fill={fill}
      />
      <path
        d="M120,140 C170,120 210,150 260,132 M420,110 C460,95 500,118 545,104 M760,132 C815,112 860,140 915,122 M1080,110 C1130,92 1175,118 1225,100"
        stroke="rgba(232,184,200,0.22)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

const BLOSSOMS = [
  [150, 38],
  [210, 32],
  [265, 56],
  [130, 79],
  [230, 92],
  [285, 108],
];

function BlossomBranch({ className = "" }) {
  return (
    <svg viewBox="0 0 320 220" className={className} aria-hidden="true">
      <path
        d="M10,20 C60,40 90,70 130,80 C170,90 210,70 260,95 C285,107 300,120 310,140 M120,78 C128,60 140,52 150,40 M195,80 C205,66 200,50 210,34 M240,96 C252,86 250,68 265,58"
        stroke={VIOLET}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {BLOSSOMS.map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse
              key={deg}
              cy="-5"
              rx="3.4"
              ry="5.5"
              fill={i % 2 ? SAKURA_PALE : SAKURA}
              stroke={VIOLET}
              strokeWidth="0.6"
              transform={`rotate(${deg})`}
              opacity="0.9"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

function SealOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <circle cx="60" cy="60" r="43" stroke="currentColor" strokeWidth="1.2" />
      <text
        x="60"
        y="66"
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
  );
}

/* ============================== PAGE =================================== */
const BTN =
  "px-8 py-3 tracking-widest uppercase text-xs transition-colors duration-300 text-center";

export function HomePage() {
  const [fontSize, setFontSize] = useState(48);
  const [ratio, setRatio] = useState(16 / 9);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const onResize = () =>
      setFontSize(
        window.innerWidth < 640 ? 36 : window.innerWidth < 1024 ? 44 : 48,
      );
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style>{HERO_CSS}</style>
      <ClickSpark
        sparkColor={SAKURA_PALE}
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={300}
      >
        <ImageTrail items={TRAIL_ITEMS} variant={5} size={15} />

        {/* ============================= HERO ============================= */}
        <Section
          id="home"
          bg={MIDNIGHT}
          plain
          className="min-h-screen flex items-end justify-start"
        >
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ containerType: "size" }}
          >
            {/* Cover box: behaves like object-cover, but lanterns placed inside
        it are positioned relative to the artwork itself. */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:left-[58%] max-md:-translate-x-[58%]"
              style={{
                width: `max(100cqw, calc(100cqh * ${ratio}))`,
                height: `max(100cqh, calc(100cqw / ${ratio}))`,
              }}
            >
              <img
                src={HERO_IMAGE}
                alt="Harshtal — a Japanese shrine and torii gate beneath a full moon and sakura trees"
                className="w-full h-full"
                style={{
                  filter: "brightness(1.18) saturate(1.12) contrast(1.08)",
                }}
                onLoad={(e) =>
                  setRatio(e.target.naturalWidth / e.target.naturalHeight)
                }
              />

              <div className="absolute inset-0" aria-hidden="true">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <radialGradient id="hl-body" cx=".5" cy=".55" r=".65">
                      <stop offset="0" stopColor="#FFE2A8" />
                      <stop offset=".45" stopColor="#F59A38" />
                      <stop offset="1" stopColor="#A2481A" />
                    </radialGradient>

                    <radialGradient id="hl-core">
                      <stop offset="0" stopColor="#FFEBBE" />
                      <stop offset="1" stopColor="#FFAA3C" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>

                {LANTERNS.map((l) => (
                  <JapaneseLantern key={l.left} {...l} />
                ))}
              </div>
            </div>

            {/* Mist near the bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-[42%] z-[5] overflow-hidden"
              aria-hidden="true"
              style={{
                maskImage: "linear-gradient(to top, #000 30%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to top, #000 30%, transparent)",
              }}
            >
              {CLOUDS.map((c) => (
                <MistCloud key={c.top} {...c} />
              ))}
            </div>

            {/* Very subtle top readability gradient */}
            <div
              className="absolute inset-x-0 top-0 h-32"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,11,22,0.35), transparent)",
              }}
            />

            {/* Very subtle left readability gradient */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, rgba(8,11,22,0.20) 0%, rgba(8,11,22,0.06) 30%, transparent 55%)",
              }}
            />

            {/* Dark cinematic bottom fade
        Keeps the lower section readable without introducing white. */}
            <div
              className="absolute inset-x-0 bottom-0 h-[58%]"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,11,22,0.52) 0%, rgba(8,11,22,0.22) 40%, transparent 75%)",
              }}
            />

            {/* Soft transition into the next section */}
            <div
              className="absolute inset-x-0 bottom-0 h-24 z-10"
              style={{
                background: `linear-gradient(to top, ${NAVY}, transparent)`,
              }}
            />

            {/* REMOVED:
        <div className="absolute inset-0 z-10 opacity-30" style={WASH} />
        
        This was adding the unnecessary overall wash/lightness.
    */}
          </div>

          <SideBar side="left" items={LEFT_NAV} />
          <SideBar side="right" items={RIGHT_NAV} />

          {/* Content sits low-left so the artwork's own title, moon and torii stay clear. */}
          <div className="relative z-20 text-left w-full px-6 md:px-12 lg:pl-32 lg:pr-16 xl:pl-40 xl:pr-24 max-w-3xl ml-0 mr-auto pt-[42vh] md:pt-[46vh] pb-14 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Eyebrow className="mb-3 font-medium">Cultural Festival</Eyebrow>

              {/* Screen-reader title; the artwork already shows it visually. */}
              <h1 className="sr-only">Harshtal</h1>

              <h2
                className="mb-6 tracking-[0.4em] font-light"
                style={{
                  ...JP,
                  fontSize: "clamp(1.25rem, 2.6vw, 2rem)",
                  color: IVORY,
                  textShadow: "0 2px 18px rgba(8,11,22,0.7)",
                }}
              >
                ハルシュタール
              </h2>

              <p
                className="mb-8 max-w-lg leading-relaxed text-sm md:text-base font-light"
                style={{
                  ...JP,
                  color: "rgba(244,237,221,0.85)",
                  textShadow: "0 1px 12px rgba(8,11,22,0.8)",
                }}
              >
                A convergence of art, rhythm, frame, and design. Experience the
                pulse of culture in a space inspired by minimalist harmony and
                negative space.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(224, 164, 88, 0.28)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#tickets"
                  className={BTN}
                  style={{
                    ...JP,
                    backgroundColor: IVORY,
                    color: MIDNIGHT,
                    fontWeight: 500,
                  }}
                >
                  Register Now
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(232,184,200,0.12)",
                    borderColor: "rgba(232,184,200,0.6)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#about"
                  className={`${BTN} border backdrop-blur-sm`}
                  style={{
                    ...JP,
                    color: IVORY,
                    borderColor: "rgba(244,237,221,0.35)",
                    backgroundColor: "rgba(8,11,22,0.4)",
                  }}
                >
                  Discover More
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="mt-12 flex flex-col sm:flex-row justify-start gap-6 sm:gap-8 max-w-2xl"
            >
              {HERO_META.map(({ label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                  className="text-left cursor-pointer border py-3 pl-4 pr-6 transition-all duration-300 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(8,11,22,0.4)",
                    borderColor: "transparent",
                    borderLeftColor: "rgba(232,184,200,0.5)",
                    borderLeftWidth: 2,
                  }}
                >
                  <p
                    className="tracking-widest uppercase text-[10px] mb-2"
                    style={{ ...JP, color: SAKURA }}
                  >
                    {label}
                  </p>

                  <p
                    className="text-sm md:text-base font-light tracking-wide"
                    style={{ ...JOSEFIN, color: IVORY }}
                  >
                    {value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ============================= ABOUT ============================= */}
        <Section id="about" bg={NAVY} className="py-32 px-6">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(244,237,221,0.025) 60px, rgba(244,237,221,0.025) 61px)",
            }}
          />
          <BlossomBranch className="absolute -top-2 right-4 w-[240px] xl:w-[300px] opacity-25 pointer-events-none hidden lg:block" />

          <div className="max-w-6xl mx-auto relative z-10">
            <Reveal className="flex justify-center mb-10">
              <Eyebrow>について | About</Eyebrow>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <Reveal x={-30} y={0}>
                <Title className="mb-8">About Harshtal</Title>
                <p
                  className="leading-relaxed mb-6 font-light text-lg"
                  style={{ ...JP, color: "rgba(244,237,221,0.88)" }}
                >
                  Harshtal is the annual cultural festival of IIT Dharwad,
                  bringing together students, artists, performers, and
                  enthusiasts from across the country for a celebration of
                  creativity, talent, and community.
                </p>
                <p
                  className="leading-relaxed mb-10 text-sm font-light"
                  style={{ ...JP, color: "rgba(199,204,232,0.72)" }}
                >
                  Hosted on the campus of IIT Dharwad, Harshtal reflects the
                  spirit of innovation, inclusivity, and artistic excellence.
                  Whether through electrifying performances, engaging
                  competitions, interactive workshops, or unforgettable cultural
                  nights, the festival aims to inspire, connect, and celebrate
                  the many forms of human expression.
                </p>
                <div ref={statsRef} className="grid grid-cols-3 gap-6">
                  {STATS.map(({ num, label, places }) => (
                    <motion.div
                      key={label}
                      whileHover={{ scale: 1, borderColor: SAKURA }}
                      className="pl-4 group cursor-pointer transition-colors duration-300"
                      style={{ borderLeft: "2px solid rgba(244,237,221,0.14)" }}
                    >
                      <div
                        className="flex items-center"
                        style={{ color: IVORY }}
                      >
                        <Counter
                          value={isStatsInView ? num : 0}
                          places={places}
                          fontSize={fontSize}
                          padding={5}
                          gap={2}
                          textColor="inherit"
                          fontWeight={300}
                          containerStyle={{
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                          counterStyle={{
                            ...JOSEFIN,
                            paddingLeft: 0,
                            paddingRight: 0,
                            lineHeight: 1,
                          }}
                          gradientHeight={fontSize * 0.15}
                          gradientFrom={NAVY}
                          gradientTo="transparent"
                        />
                        <span
                          className="font-light ml-0.5 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            ...JOSEFIN,
                            fontSize: `${fontSize * 0.75}px`,
                            lineHeight: 1,
                            color: SAKURA,
                          }}
                        >
                          +
                        </span>
                      </div>
                      <p
                        className="text-[10px] tracking-widest uppercase font-medium mt-2"
                        style={{ ...JP, color: LAVENDER }}
                      >
                        {label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Reveal>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1, rotate: 0.5 }}
                className="relative group cursor-pointer"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden p-2 border"
                  style={{
                    backgroundColor: INDIGO,
                    borderColor: "rgba(244,237,221,0.1)",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/db69ffwwa/image/upload/v1780759028/background_about_vx62m0.png"
                    alt="Minimal Japanese Architecture"
                    className="w-full h-full object-cover opacity-90"
                    style={{
                      filter: "saturate(80%) brightness(0.8) contrast(1.05)",
                    }}
                  />
                  <div
                    className="absolute inset-2 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,18,36,0.55), rgba(27,33,69,0.2))",
                    }}
                  />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-32 h-32 -z-10 border group-hover:-bottom-8 group-hover:-left-8 transition-all duration-500"
                  style={{ borderColor: "rgba(244,237,221,0.14)" }}
                />
                <div
                  className="absolute -top-6 -right-6 w-32 h-32 -z-10 border group-hover:-top-8 group-hover:-right-8 transition-all duration-500"
                  style={{ borderColor: "rgba(232,184,200,0.35)" }}
                />
              </motion.div>
            </div>
          </div>
        </Section>

        {/* ============================= CLUBS ============================= */}
        <Section bg={NAVY_MID} className="py-32 px-6">
          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal className="text-center mb-20">
              <Eyebrow className="mb-4">文化クラブ</Eyebrow>
              <Title size="clamp(2.5rem, 5vw, 3.5rem)">Cultural Clubs</Title>
            </Reveal>

            <div
              className="h-[520px] relative rounded-sm overflow-hidden border"
              style={{
                backgroundColor: "rgba(8,11,22,0.45)",
                borderColor: "rgba(244,237,221,0.08)",
              }}
            >
              <FlowingMenu
                items={CLUBS}
                speed={5}
                textColor={IVORY}
                bgColor="transparent"
                marqueeBgColor="#3A3372"
                marqueeTextColor={SAKURA_PALE}
                borderColor="rgba(244, 237, 221, 0.10)"
              />
            </div>

            <Reveal delay={0.6} className="text-center mt-12 cursor-pointer">
              <h3
                className="text-base font-light"
                style={{ ...JP, color: "rgba(185,190,230,0.7)" }}
              >
                And many more clubs...
              </h3>
            </Reveal>
          </div>
        </Section>

        {/* ============================= CONTACT ============================= */}
        <Section
          id="contact"
          bg={MIDNIGHT}
          plain
          className="py-32 px-6 min-h-[90vh] flex items-center"
        >
          <CloudBand
            flip
            className="absolute top-0 left-0 w-full h-20 md:h-28 z-20 pointer-events-none"
          />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="w-full h-full opacity-45"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/db69ffwwa/image/upload/v1780758917/ContactPage_jmrhei.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(70%) brightness(0.8)",
              }}
            />
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                maskImage:
                  "linear-gradient(to left, black 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.3) 50%, transparent 80%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.3) 50%, transparent 80%)",
                backgroundColor: "rgba(8,11,22,0.5)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                backgroundColor: "rgba(8,11,22,0.75)",
                backdropFilter: "blur(4px)",
              }}
            />
            <div
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to bottom, ${MIDNIGHT}, transparent, ${MIDNIGHT})`,
              }}
            />
            <div className="absolute inset-0 z-10" style={WASH} />
          </div>

          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-sm tracking-widest pointer-events-none select-none"
            style={{
              ...JP,
              writingMode: "vertical-rl",
              color: "rgba(185,190,230,0.35)",
            }}
          >
            つながりましょう | Let's Connect
          </div>

          <div className="w-full relative z-20 flex justify-center md:justify-end px-6 md:pr-16 lg:pr-24 xl:pr-36 md:pl-12">
            <div className="w-full max-w-lg text-center md:text-right flex flex-col items-center md:items-end">
              <Reveal className="flex flex-col items-center md:items-end mb-16">
                <Eyebrow className="mb-4 font-bold">
                  お問い合わせ | Contact
                </Eyebrow>
                <Title className="mb-6">Get in Touch</Title>
                <div
                  className="w-16 h-0.5"
                  style={{ backgroundColor: AMBER, opacity: 0.8 }}
                />
              </Reveal>

              <Reveal
                delay={0.2}
                className="flex flex-col gap-10 w-full items-center md:items-end"
              >
                {CONTACTS.map(({ role, value, href }) => (
                  <a
                    key={role}
                    href={href}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="group relative flex flex-col items-center md:items-end w-full cursor-pointer py-6"
                  >
                    <SealOrnament className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-25 transition-all duration-700 pointer-events-none scale-75 group-hover:scale-100 rotate-12 group-hover:rotate-0 hidden md:block w-[120px] h-[120px] text-[#E8B8C8]" />
                    <div className="flex items-center gap-2 mb-3 relative z-10">
                      <span
                        className="text-[10px] group-hover:rotate-180 transition-transform duration-500"
                        style={{ color: AMBER }}
                      >
                        ✦
                      </span>
                      <span
                        className="text-sm sm:text-base uppercase tracking-widest font-semibold"
                        style={{ ...JP, color: LAVENDER }}
                      >
                        {role}
                      </span>
                    </div>
                    <span
                      className="text-base sm:text-lg md:text-xl font-light tracking-wide break-all relative z-10"
                      style={{ ...JOSEFIN, color: IVORY }}
                    >
                      {value}
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-0 h-px group-hover:w-full transition-all duration-700"
                      style={{ backgroundColor: AMBER, opacity: 0.7 }}
                    />
                  </a>
                ))}

                <p
                  className="text-xs sm:text-sm mt-6 leading-relaxed text-center md:text-right max-w-md font-light"
                  style={{ ...JP, color: "rgba(199,204,232,0.75)" }}
                >
                  For sponsorship enquiries, participation details,
                  collaborations, or general information regarding Harshtal at
                  IIT Dharwad, feel free to reach out directly via email or
                  WhatsApp.
                </p>
              </Reveal>
            </div>
          </div>
        </Section>
      </ClickSpark>
    </>
  );
}
