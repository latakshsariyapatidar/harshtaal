import { motion } from "motion/react";

interface NotFoundPageProps {
  onGoHome: () => void;
}

export function NotFoundPage({ onGoHome }: NotFoundPageProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-end pb-24 md:pb-36 px-6 bg-[#0e100f]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
      >
        <source src="/404.mp4" type="video/mp4" />
      </video>

      {/* Modern Gradient Blur Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 45%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 45%, black 100%)",
        }}
      />

      {/* Dark Overlay for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e100f]/30 to-[#0e100f] pointer-events-none"
      />

      {/* Decorative vertical Japanese line */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-stone-700/40 text-xs tracking-widest pointer-events-none select-none"
        style={{
          writingMode: "vertical-rl",
          fontFamily: "'Noto Sans JP', sans-serif",
        }}
      >
        道に迷いましたか？ | Lost your way?
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p
            className="text-[#c62828] tracking-[0.5em] uppercase text-xs mb-3 font-medium"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            迷子 | 404 Error
          </p>

          <h1
            className="text-white leading-none font-light mb-4 select-none"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "clamp(5rem, 15vw, 10rem)",
              letterSpacing: "-0.03em",
            }}
          >
            404
          </h1>

          <h2
            className="text-stone-300 tracking-[0.3em] uppercase text-xs md:text-sm font-light mb-6"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            Page Not Found
          </h2>

          <p
            className="text-stone-400 mb-10 max-w-md mx-auto leading-relaxed text-sm md:text-base font-light"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            The page you are looking for has vanished into the negative space. Return to the rhythm of Harshtal.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(198, 40, 40, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onGoHome}
            className="px-10 py-4 bg-[#c62828] text-white tracking-widest uppercase text-xs hover:bg-[#a01f1f] transition-all duration-300 shadow-lg shadow-red-950/20 cursor-pointer"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
