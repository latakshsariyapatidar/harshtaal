import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
  { label: "Tickets", href: "#tickets", highlight: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="text-[#c62828] text-2xl">⛩</span>
          <div className="flex flex-col leading-none">
            <span
              className="text-stone-500 tracking-widest uppercase text-xs"
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              ハルシュタール
            </span>
            <span
              className="text-[#c62828] tracking-[0.3em] uppercase text-sm font-bold"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              Harshtaal
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.highlight ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-5 py-2 border border-[#c62828] text-[#c62828] rounded-none tracking-widest uppercase text-xs hover:bg-[#c62828] hover:text-white transition-all duration-300"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-stone-600 hover:text-[#c62828] tracking-widest uppercase text-xs transition-colors duration-300 relative group"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c62828] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#c62828]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 border-t border-stone-200 px-6 py-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`tracking-widest uppercase text-sm transition-colors duration-300 ${
                link.highlight
                  ? "text-[#c62828] border border-[#c62828] px-4 py-2 text-center"
                  : "text-stone-600 hover:text-[#c62828]"
              }`}
              style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
