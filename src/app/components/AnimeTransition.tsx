import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface AnimeTransitionProps {
  page: string;
  children: React.ReactNode;
}

export function AnimeTransition({ page, children }: AnimeTransitionProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [currentPage, setCurrentPage] = useState(page);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (page !== currentPage) {
      setIsAnimating(true);

      const timer1 = setTimeout(() => {
        // Midway: swap children and snap viewport scroll to top while covered
        setDisplayChildren(children);
        setCurrentPage(page);
        window.scrollTo(0, 0);
      }, 500);

      const timer2 = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setDisplayChildren(children);
    }
  }, [page, children]);

  // Anime shutter sliding sweep animation (1.0 second total, with a centered pause)
  const sweepTransition = {
    duration: 1.0,
    times: [0, 0.4, 0.6, 1.0] as number[],
    ease: ["easeOut", "linear", "easeIn"] as any,
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Page Content wrapper */}
      <div className={isAnimating ? "pointer-events-none select-none overflow-hidden h-screen" : ""}>
        {displayChildren}
      </div>

      {/* Anime Shutter Transition Overlay */}
      {isAnimating && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden h-screen w-screen flex flex-col justify-center items-center">
          {/* Panel 1: Solid Crimson Background Accent */}
          <motion.div
            initial={{ skewX: -12, x: "-130%" }}
            animate={{ x: ["-130%", "0%", "0%", "130%"] }}
            transition={sweepTransition}
            className="absolute inset-y-0 w-[200%] md:w-[145%] bg-[#c62828] pointer-events-auto will-change-transform"
            style={{ zIndex: 9991 }}
          />

          {/* Panel 2: Styled Texture Layer using PassBackground.png */}
          <motion.div
            initial={{ skewX: -12, x: "-130%" }}
            animate={{ x: ["-130%", "0%", "0%", "130%"] }}
            transition={{ ...sweepTransition, delay: 0.03 }}
            className="absolute inset-y-0 w-[200%] md:w-[145%] bg-cover bg-center border-x-4 border-[#c62828] pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] will-change-transform"
            style={{
              backgroundImage: "url('/PassBackground.png')",
              zIndex: 9992,
            }}
          >
            {/* Blends and tint to matches dark aesthetic */}
            <div className="absolute inset-0 bg-[#0e100f]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#c62828]/35 via-transparent to-[#c62828]/35" />
          </motion.div>

          {/* Panel 3: Sleek Foreground Solid Dark Panel */}
          <motion.div
            initial={{ skewX: -12, x: "-130%" }}
            animate={{ x: ["-130%", "0%", "0%", "130%"] }}
            transition={{ ...sweepTransition, delay: 0.06 }}
            className="absolute inset-y-0 w-[200%] md:w-[145%] bg-[#0e100f] pointer-events-auto will-change-transform"
            style={{ zIndex: 9993 }}
          />          
        </div>
      )}
    </div>
  );
}
