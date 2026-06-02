export function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#c62828] text-xl">⛩</span>
              <span className="text-[#c62828] tracking-[0.3em] uppercase text-sm font-bold" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                Harshtaal
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>
              A celebration of art, culture, and minimalist design — held at the permanent campus of IIT Dharwad.
            </p>
            <p className="text-stone-300 text-xs" style={{ fontFamily: "'Noto Serif JP', serif" }}>ハルシュタール</p>
          </div>

          <div>
            <p className="text-[#c62828] tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>Navigate</p>
            <ul className="space-y-3">
              {["Home", "About", "Sponsors", "Contact", "Tickets"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-stone-500 hover:text-[#c62828] text-sm transition-colors duration-300"
                    style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#c62828] tracking-widest uppercase text-xs mb-4" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>Contact</p>
            <ul className="space-y-3 text-stone-500 text-sm" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>
              <li>outreach.harshtal@iitdh.ac.in</li>
              <li>IIT Dharwad</li>
              <li>Permanent Campus, Chikkamalligawad,<br />Dharwad 580011, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-400 text-xs" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}>
            © 2026 Harshtaal Cultural Event. All rights reserved.
          </p>
          <p className="text-stone-400 text-xs" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            文化クラブの祭典
          </p>
        </div>
      </div>
    </footer>
  );
}
