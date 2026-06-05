import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TeamMemberProps {
  name: string;
  role: string;
  roleJp: string;
  club?: string;
  avatarInitials: string;
  avatarUrl?: string;
  linkedin?: string;
  twitter?: string;
}

const getInitialsSvgUrl = (name: string, bg = "#c62828") => {
  const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="50" fill="${bg}" /><text x="50%" y="54%" fill="#ffffff" font-family="'Josefin Sans', sans-serif" font-size="36" font-weight="bold" text-anchor="middle" dominant-baseline="middle" letter-spacing="1">${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const getBigInitialsSvgUrl = (name: string, bg = "#c62828") => {
  const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500"><defs><radialGradient id="grad" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="${bg}" stop-opacity="0.9" /><stop offset="100%" stop-color="#0e100f" stop-opacity="0.95" /></radialGradient></defs><rect width="100%" height="100%" fill="url(#grad)" /><circle cx="200" cy="200" r="70" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3" /><text x="50%" y="46%" fill="#ffffff" font-family="'Josefin Sans', sans-serif" font-size="70" font-weight="bold" text-anchor="middle" dominant-baseline="middle" letter-spacing="3">${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

function CoreMemberCard({ name, role, roleJp, club, avatarUrl }: TeamMemberProps) {
  const emailName = name.toLowerCase().replace(/\s+/g, ".");
  const placeholderImage = getBigInitialsSvgUrl(name);

  return (
    <div className="relative flex h-[27rem] w-full max-w-[340px] flex-col justify-end md:h-[32rem] overflow-hidden rounded-2xl group border border-white/5 transition-all duration-500 hover:border-[#c62828]/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
      {/* Background Image */}
      <img
        alt={name}
        src={avatarUrl || placeholderImage}
        className="absolute top-0 left-0 z-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Dark gradient blend overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Info Content Overlay */}
      <div className="z-20 p-4 pt-16 md:p-5 md:pt-20 lg:pt-24 transition-all duration-300">
        <div className="rounded-xl bg-[#121413]/75 px-4 pt-5 pb-6 text-white ring-1 ring-white/10 backdrop-blur-[10px] ring-inset transition-all duration-300 group-hover:ring-[#c62828]/30 group-hover:bg-[#121413]/90">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-wide font-sans" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              {name}
            </h3>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="size-5 text-stone-400 group-hover:text-[#c62828] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            >
              <path d="M7 17 17 7m0 0H7m10 0v10"></path>
            </svg>
          </div>
          <p className="mt-2 text-xs font-bold text-[#c62828] uppercase tracking-wider" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {club ? `${club} Head` : roleJp}
          </p>
          <p className="mt-1 text-xs text-stone-300 font-light leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {role}
          </p>
          <ul className="mt-4 flex gap-5">
            <li>
              <a
                href={`mailto:${emailName}@iitdh.ac.in`}
                className="flex rounded-sm text-stone-400 hover:text-white transition-colors duration-300 outline-none"
                aria-label={`Contact ${name}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ name, role, club, avatarUrl, linkedin, twitter }: TeamMemberProps) {
  const emailName = name.toLowerCase().replace(/\s+/g, ".");
  const placeholderImage = getInitialsSvgUrl(name);

  return (
    <div className="bg-[#121413]/60 border border-white/5 p-4 rounded-xl flex items-center gap-4 transition-all duration-300 group hover:border-[#c62828]/50 hover:bg-[#121413]/85 w-full cursor-pointer">
      {/* Left Avatar */}
      <div className="w-14 h-14 rounded-full border border-white/10 group-hover:border-[#c62828] flex-shrink-0 overflow-hidden bg-white/5 transition-all duration-500">
        <img
          src={avatarUrl || placeholderImage}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-start">
        <h4
          className="text-white text-sm font-bold truncate group-hover:text-[#c62828] transition-colors duration-300 font-sans tracking-wide"
          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        >
          {name}
        </h4>
        <p
          className="text-stone-400 text-[11px] truncate font-light mt-0.5"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {role} {club && <span className="text-stone-500 font-normal">({club})</span>}
        </p>

        {/* Contacts */}
        <div className="flex items-center gap-3.5 mt-2">
          <a
            href={`mailto:${emailName}@iitdh.ac.in`}
            className="text-stone-500 hover:text-white transition-colors duration-300"
            aria-label={`Email ${name}`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a
            href={linkedin || "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-white transition-colors duration-300"
            aria-label={`LinkedIn ${name}`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={twitter || "https://x.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-white transition-colors duration-300"
            aria-label={`Twitter ${name}`}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 22"
              fill="none"
              className="size-3.5"
            >
              <path
                d="M15.9455 22L10.396 14.0901L3.44886 22H0.509766L9.09209 12.2311L0.509766 0H8.05571L13.286 7.45502L19.8393 0H22.7784L14.5943 9.31648L23.4914 22H15.9455ZM19.2185 19.77H17.2398L4.71811 2.23H6.6971L11.7121 9.25316L12.5793 10.4719L19.2185 19.77Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export function TeamsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 300, 1);

  const teamSections = [
    {
      title: "Core Committee",
      titleJp: "実行委員会",
      members: [
        { name: "Mayank Mishra", role: "Overall Coordinator", roleJp: " ", avatarInitials: "MM" },
        // { name: "Ayush Raj", role: "TBD", roleJp: " ", avatarInitials: "AR" },
        // { name: "Harshit Konda", role: "TBD", roleJp: " ", avatarInitials: "HK" },
        // { name: "Shreyas Bhawalkar", role: "TBD", roleJp: " ", avatarInitials: "SB" },
        // { name: "Tushar Hegde", role: "TBD", roleJp: " ", avatarInitials: "TH" },
      ]
    },
    // {
    //   title: "Design & Technical Committee",
    //   titleJp: "デザイン＆技術チーム",
    //   members: [
    //     { name: "TBD", role: "TBD", roleJp: " ", avatarInitials: "TBD" },
    //     { name: "TBD", role: "TBD", roleJp: " ", avatarInitials: "TBD" },
    //     { name: "TBD", role: "TBD", roleJp: " ", avatarInitials: "TBD" },
    //   ]
    // },
    // {
    //   title: "Cultural Club Coordinators",
    //   titleJp: "文化クラブコーディネーター",
    //   members: [
    //     { name: "TBD", role: "TBD", roleJp: " ", club: "Music", avatarInitials: "TBD" },
    //     { name: "TBD", role: "TBD", roleJp: " ", club: "Dance", avatarInitials: "TBD" },
    //     { name: "TBD", role: "TBD", roleJp: " ", club: "Drama", avatarInitials: "TBD" },
    //     { name: "TBD", role: "TBD", roleJp: " ", club: "Photography", avatarInitials: "TBD" },
    //     { name: "TBD", role: "TBD", roleJp: " ", club: "Design", avatarInitials: "TBD" },
    //     { name: "TBD", role: "TBD", roleJp: " ", club: "Literary", avatarInitials: "TBD" },
    //   ]
    // }
  ];

  return (
    <div className="relative min-h-screen bg-[#0e100f] text-stone-200 overflow-x-hidden">
      {/* Background Image Container - fixed position at the top */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-75 ease-out scale-120"
          style={{
            backgroundImage: "url('/TeamsBackground.png')",
            filter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
            WebkitFilter: `grayscale(${scrollProgress * 100}%) contrast(1.15)`,
            opacity: 0.35 - scrollProgress * 0.2,
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
      <div className="relative pt-36 pb-20 px-6 z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-stone-500/80 tracking-[0.4em] uppercase text-[10px] mb-3 font-semibold" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>運営チーム | organizers</p>
          <h1
            className="text-white mb-6 leading-tight font-extrabold font-sans uppercase tracking-wide"
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            The Organizers
          </h1>
          <p className="text-stone-400 leading-relaxed text-md font-light max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            Meet the creative minds, planners, and developers who work behind the scenes to bring Harshtal 2026 to life.
          </p>
        </motion.div>
      </div>

      {/* Main content grid sections */}
      <div className="relative z-10 bg-[#0e100f] py-8 px-6 pb-24 border-t border-white/5 shadow-[0_-30px_50px_rgba(14,16,15,0.95)]">
        <div className="max-w-6xl mx-auto">
          {teamSections.map((section, sectionIdx) => (
            <div key={section.title} className="mb-20">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 border-l-2 border-[#c62828] pl-4 flex flex-col justify-start"
              >
                <span className="text-[9px] text-stone-600/75 font-medium uppercase tracking-widest mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  {section.titleJp}
                </span>
                <h3 className="text-white text-2xl font-extrabold font-sans tracking-wide uppercase" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {section.title}
                </h3>
              </motion.div>

              {/* Members Container */}
              {section.title === "Core Committee" ? (
                <div className="flex flex-wrap justify-center gap-8 w-full">
                  {section.members.map((member) => (
                    <CoreMemberCard key={member.name} {...member} />
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
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
