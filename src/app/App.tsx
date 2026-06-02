import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { SponsorsPage } from "./components/SponsorsPage";
import { SakuraPetals } from "./components/SakuraPetals";
import { Footer } from "./components/Footer";

export default function App() {
  const [page, setPage] = useState<"home" | "sponsors">("home");

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
      className="min-h-screen bg-stone-50 overflow-x-hidden text-stone-900"
      style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
      onClick={handleNavClick}
    >
      {/* MARKER-MAKE-KIT-INVOKED */}
      <SakuraPetals />
      <Navbar />
      {page === "home" ? <HomePage /> : <SponsorsPage />}
      <Footer />
    </div>
  );
}
