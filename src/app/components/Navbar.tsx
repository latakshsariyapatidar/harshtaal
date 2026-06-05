import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import NavbarLeftAnimation from "../../../public/NavbarLeftAnimation.json";

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
          ? "bg-[#0e100f]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* IIT Dharwad Lottie Animation */}
          <Lottie
            animationData={NavbarLeftAnimation}
            loop={true}
            autoplay={true}
            className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* Perpendicular border */}
          <div className="h-6 w-px bg-white/20 self-center mx-1" />
          {/* Pagoda SVG Icon */}
          <motion.svg
            width="30"
            height="32"
            viewBox="0 0 484 511"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white group-hover:text-[#c62828] transition-colors duration-300"
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <path d="M280.92 85.5001C271.79 76.7801 263.8 67.8901 256.86 59.3202C255.88 58.1202 254.61 57.4602 253.3 57.4602H230.7C229.39 57.4602 228.12 58.1202 227.15 59.3202C220.2 67.8901 212.21 76.7801 203.08 85.5001C184.18 103.56 166.17 115.42 151.74 123.24C180.91 124.68 211.06 125.47 242.13 125.47C273.12 125.47 303.18 124.68 332.26 123.24C317.84 115.42 299.83 103.56 280.92 85.5001Z" fill="currentColor"/>
            <path d="M352.33 233.71C355.7 233.71 359 232.55 361.57 230.3C362.41 229.57 363.22 228.69 363.95 227.62C366.5 223.87 366.56 220 366.52 218.65C358.14 215.83 345.07 210.23 332.03 198.91C323.19 191.24 316.98 183.23 312.76 176.73C311.46 174.73 309.6 173.58 307.64 173.58H176.36C174.4 173.58 172.54 174.73 171.24 176.73C167.02 183.23 160.81 191.24 151.97 198.91C138.93 210.23 125.86 215.83 117.48 218.65C117.44 220 117.5 223.87 120.05 227.62C120.78 228.69 121.59 229.57 122.43 230.3C125 232.55 128.3 233.71 131.67 233.71C166.92 235.97 203.73 237.24 242 237.24C280.27 237.24 317.08 235.97 352.33 233.71Z" fill="currentColor"/>
            <path d="M389.72 350.33C394.24 350.33 398.66 349.17 402.1 346.92C403.22 346.19 404.3 345.31 405.28 344.24C408.7 340.49 408.78 336.62 408.73 335.27C397.5 332.45 380.01 326.84 362.54 315.53C350.45 307.7 342.05 299.51 336.39 292.94C334.87 291.17 332.94 290.2 330.94 290.2H153.06C151.06 290.2 149.13 291.17 147.61 292.94C141.96 299.51 133.55 307.7 121.46 315.53C103.99 326.84 86.4999 332.45 75.2698 335.27C75.2198 336.62 75.2999 340.49 78.7198 344.24C79.6999 345.31 80.7798 346.19 81.8999 346.92C85.3398 349.17 89.7599 350.33 94.2798 350.33C141.47 352.58 190.76 353.86 242 353.86C293.24 353.86 342.53 352.58 389.72 350.33Z" fill="currentColor"/>
            <path d="M345.63 438.59H315.56V397.53H345.63V438.59ZM302.32 438.59H272.26V397.53H302.32V438.59ZM210.08 438.59H180.01V397.53H210.08V438.59ZM166.77 438.59H136.71V397.53H166.77V438.59ZM128.58 358.54V473.43H223.32V397.53H260.68V473.43H355.42V358.54H128.58Z" fill="currentColor"/>
            <path d="M323.6 277.3H303.74V250.18H323.6V277.3ZM275.82 277.32H255.96V250.2H275.82V277.32ZM228.04 277.33H208.18V250.22H228.04V277.33ZM180.26 277.35H160.4V250.23H180.26V277.35ZM151.74 241.51V286.02H332.26V241.51H151.74Z" fill="currentColor"/>
            <path d="M300.44 162.49H281.61V136.77H300.44V162.49ZM268.15 162.49H249.32V136.77H268.15V162.49ZM235.86 162.49H217.03V136.77H235.86V162.49ZM203.57 162.49H184.74V136.77H203.57V162.49ZM176.24 129.64V169.62H308.94V129.64H176.24Z" fill="currentColor"/>
            <path d="M251.11 45.6201H246.27C246.84 44.4801 247.18 43.1 247.18 41.6102C247.18 38.7 245.89 36.2 244.04 35.1101V2.79003C244.04 1.24999 243.13 -7.62939e-06 242 -7.62939e-06C240.87 -7.62939e-06 239.96 1.24999 239.96 2.79003V35.1101C238.11 36.2 236.82 38.7 236.82 41.6102C236.82 43.1 237.16 44.4801 237.74 45.6201H232.89C231.16 45.6201 229.75 47.54 229.75 49.9102C229.75 52.2801 231.16 54.19 232.89 54.19H251.11C252.84 54.19 254.25 52.2801 254.25 49.9102C254.25 47.54 252.84 45.6201 251.11 45.6201Z" fill="currentColor"/>
            <path d="M484.01 510.85C479.57 483.66 372.92 461.91 242 461.91C111.08 461.91 4.42988 483.66 0 510.85C67.05 502.94 148.96 496.7C242.4 496.7 335.5 496.71 484.01 510.85Z" fill="currentColor"/>
          </motion.svg>
          {/* Harshtal SVG Text Logo */}
          <motion.svg
            width="120"
            height="18"
            viewBox="0 0 529 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#c62828] group-hover:text-white transition-colors duration-300 ml-1"
            whileHover={{ scale: 1.05 }}
          >
            <path d="M481.41 3.34399H495.33V60.56H528.546V74H481.41V3.34399Z" fill="currentColor"/>
            <path d="M353.475 3.34399H401.091V16.784H383.907V74H369.987V16.784H353.475V3.34399Z" fill="currentColor"/>
            <path d="M337.194 3.34399V74H323.274V45.296H291.69V74H277.77V3.34399H291.69V31.856H323.274V3.34399H337.194Z" fill="currentColor"/>
            <path d="M256.649 20.432C253.961 18.96 251.209 17.744 248.393 16.784C245.641 15.824 243.049 15.344 240.617 15.344C237.609 15.344 235.241 15.952 233.513 17.168C231.785 18.384 230.921 20.208 230.921 22.64C230.921 24.304 231.561 25.808 232.841 27.152C234.185 28.432 235.881 29.584 237.929 30.608C240.041 31.632 242.217 32.56 244.457 33.392C246.505 34.16 248.521 35.088 250.505 36.176C252.553 37.2 254.377 38.512 255.977 40.112C257.577 41.648 258.857 43.6 259.817 45.968C260.777 48.272 261.257 51.12 261.257 54.512C261.257 58.096 260.329 61.424 258.473 64.496C256.617 67.568 253.897 70.064 250.313 71.984C246.729 73.84 242.313 74.768 237.065 74.768C234.377 74.768 231.625 74.512 228.809 74C226.057 73.424 223.337 72.592 220.649 71.504C217.961 70.352 215.369 68.912 212.873 67.184L219.017 56.336C220.681 57.552 222.473 58.64 224.393 59.6C226.377 60.496 228.361 61.2 230.345 61.712C232.329 62.224 234.153 62.48 235.817 62.48C237.481 62.48 239.145 62.256 240.809 61.808C242.537 61.296 243.945 60.464 245.033 59.312C246.185 58.16 246.761 56.56 246.761 54.512C246.761 53.104 246.281 51.824 245.321 50.672C244.425 49.52 243.177 48.464 241.577 47.504C240.041 46.544 238.345 45.712 236.489 45.008C234.313 44.176 232.073 43.216 229.769 42.128C227.465 41.04 225.289 39.728 223.241 38.192C221.257 36.592 219.625 34.64 218.345 32.336C217.129 29.968 216.521 27.088 216.521 23.696C216.521 19.6 217.417 16.048 219.209 13.04C221.065 10.032 223.657 7.66399 226.985 5.93599C230.313 4.14399 234.153 3.15199 238.505 2.95999C244.201 2.95999 248.809 3.63199 252.329 4.97599C255.913 6.31999 259.113 7.91999 261.929 9.77599L256.649 20.432Z" fill="currentColor"/>
            <path d="M171.637 3.34399C176.053 3.34399 179.989 3.91999 183.445 5.07199C186.901 6.16 189.781 7.76 192.085 9.872C194.453 11.92 196.245 14.416 197.461 17.36C198.677 20.24 199.285 23.504 199.285 27.152C199.285 30.032 198.837 32.912 197.941 35.792C197.109 38.672 195.701 41.296 193.717 43.664C191.797 46.032 189.237 47.952 186.037 49.424C182.837 50.832 178.869 51.536 174.133 51.536H164.149V74H150.229V3.34399H171.637ZM174.037 38.096C176.149 38.096 177.909 37.744 179.317 37.04C180.725 36.336 181.813 35.44 182.581 34.352C183.413 33.264 183.989 32.144 184.309 30.992C184.693 29.776 184.885 28.656 184.885 27.632C184.885 26.864 184.757 25.904 184.501 24.752C184.309 23.536 183.861 22.32 183.157 21.104C182.453 19.888 181.365 18.864 179.893 18.032C178.485 17.2 176.565 16.784 174.133 16.784H164.149V38.096H174.037ZM188.082 48.3724L204.565 74H188.341L174.133 51.536L181.601 50.8249L188.082 48.3724Z" fill="currentColor"/>
            <path d="M72.5404 74L104.412 0.559998H105.18L137.052 74H120.924L104.826 32.1251L104.838 32.0969L86.2684 74H72.5404Z" fill="currentColor"/>
            <path d="M408.835 73.44L440.707 0H441.475L473.347 73.44H457.219L441.12 31.5651L441.133 31.5369L422.563 73.44H408.835Z" fill="currentColor"/>
            <path d="M59.424 3.34399V74H45.504V45.296H13.92V74H0V3.34399H13.92V31.856H45.504V3.34399H59.424Z" fill="currentColor"/>
          </motion.svg>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.highlight ? (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  className="px-5 py-2 border border-[#c62828] text-[#c62828] rounded-none tracking-widest uppercase text-xs hover:bg-[#c62828] hover:text-white transition-all duration-300 block"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: "0 4px 15px rgba(198, 40, 40, 0.4)",
                    backgroundColor: "#c62828",
                    color: "#ffffff"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {link.label}
                </motion.a>
              </li>
            ) : (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  className="text-stone-300 hover:text-[#c62828] tracking-widest uppercase text-xs transition-colors duration-300 relative group block"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c62828] group-hover:w-full transition-all duration-300" />
                </motion.a>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-[#c62828]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0e100f]/98 border-t border-white/5 px-6 py-6 flex flex-col gap-5 shadow-lg"
        >
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              className={`tracking-widest uppercase text-sm transition-colors duration-300 ${
                link.highlight
                  ? "text-[#c62828] border border-[#c62828] px-4 py-2 text-center hover:bg-[#c62828] hover:text-white"
                  : "text-stone-300 hover:text-[#c62828]"
              }`}
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
