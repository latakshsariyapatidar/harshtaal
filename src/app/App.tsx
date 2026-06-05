import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { SponsorsPage } from "./components/SponsorsPage";
import { SakuraPetals } from "./components/SakuraPetals";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";

export default function App() {
  const [page, setPage] = useState<"home" | "sponsors">("home");
  const [loaderState, setLoaderState] = useState<"loading" | "completed">("loading");

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (href === "#sponsors") {
      e.preventDefault();
      setPage("sponsors");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href === "#home" || href === "#about" || href === "#tickets" || href === "#contact") {
      if (page === "sponsors") {
        e.preventDefault();
        setPage("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          if (href !== "#home") {
            const el = document.querySelector(href);
            el?.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#0e100f] overflow-x-hidden text-stone-200 ${
        loaderState === "loading" ? "h-screen overflow-hidden" : ""
      }`}
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      onClick={handleNavClick}
    >
      {/* MARKER-MAKE-KIT-INVOKED */}
      
      {/* Morphing Logo Loader */}
      <Loader
        loaderState={loaderState}
        onStartMorph={() => {}}
        onComplete={() => setLoaderState("completed")}
      />

      {/* Main Website Content */}
      {loaderState === "completed" && (
        <>
          <SakuraPetals />
          <Navbar />
          {page === "home" ? <HomePage /> : <SponsorsPage />}
          <Footer />
        </>
      )}
    </div>
  );
}
