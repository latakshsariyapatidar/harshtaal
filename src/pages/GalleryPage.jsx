
import { motion } from "motion/react";
import Masonry from "../components/Masonry";

const galleryItems = [
{
  id: "1",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979351/IMG-20260607-WA0049_r0l1w7.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979351/IMG-20260607-WA0049_r0l1w7.jpg",
  height: 600,
  title: "Fashion Walk"
},
{
  id: "2",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979350/IMG-20260607-WA0046_lh55nq.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979350/IMG-20260607-WA0046_lh55nq.jpg",
  height: 800,
  title: "Fashion Walk"
},
{
  id: "3",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979352/IMG-20260607-WA0104_tvhcfc.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979352/IMG-20260607-WA0104_tvhcfc.jpg",
  height: 700,
  title: "Udghosh"
},
{
  id: "4",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979352/IMG-20260607-WA0103_gpujbi.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979352/IMG-20260607-WA0103_gpujbi.jpg",
  height: 500,
  title: "Udghosh"
},
{
  id: "5",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979341/IMG-20260607-WA0075_bbvwsg.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979341/IMG-20260607-WA0075_bbvwsg.jpg",
  height: 900,
  title: "Stand Up Comedy"
},
{
  id: "6",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979340/IMG-20260607-WA0074_frdc3l.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979340/IMG-20260607-WA0074_frdc3l.jpg",
  height: 750,
  title: "Stand Up Comedy"
},
{
  id: "7",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979338/IMG-20260607-WA0073_prhv4n.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979338/IMG-20260607-WA0073_prhv4n.jpg",
  height: 600,
  title: "Stand Up Comedy"
},
{
  id: "8",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979339/IMG-20260607-WA0069_y9lnza.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979339/IMG-20260607-WA0069_y9lnza.jpg",
  height: 800,
  title: "Jamming Session"
},
{
  id: "9",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979347/IMG-20260608-WA0054_a3ujs2.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979347/IMG-20260608-WA0054_a3ujs2.jpg",
  height: 700,
  title: "Band Performance"
},
{
  id: "10",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979340/IMG-20260608-WA0050_v5dhrv.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979340/IMG-20260608-WA0050_v5dhrv.jpg",
  height: 550,
  title: "Rock Band"
},
{
  id: "11",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979339/IMG-20260608-WA0058_bv1hgo.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979339/IMG-20260608-WA0058_bv1hgo.jpg",
  height: 650,
  title: "Band Performance"
},
{
  id: "12",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979350/IMG-20260608-WA0046_modbsc.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979350/IMG-20260608-WA0046_modbsc.jpg",
  height: 850,
  title: "Dance"
},
{
  id: "13",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979347/IMG-20260608-WA0037_gvnccf.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979347/IMG-20260608-WA0037_gvnccf.jpg",
  height: 600,
  title: "Dance"
},
{
  id: "14",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979346/IMG-20260608-WA0039_fcfhco.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979346/IMG-20260608-WA0039_fcfhco.jpg",
  height: 700,
  title: "Dance"
},
{
  id: "15",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979342/IMG-20260608-WA0026_lcpnr2.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979342/IMG-20260608-WA0026_lcpnr2.jpg",
  height: 800,
  title: "Dance"
},
{
  id: "16",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979342/IMG-20260608-WA0028_zsl6x8.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979342/IMG-20260608-WA0028_zsl6x8.jpg",
  height: 500,
  title: "Dance"
},
{
  id: "17",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979335/IMG-20260607-WA0042_yssike.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979335/IMG-20260607-WA0042_yssike.jpg",
  height: 750,
  title: "Battle Of Bands"
},
{
  id: "18",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979334/IMG-20260607-WA0025_annynd.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979334/IMG-20260607-WA0025_annynd.jpg",
  height: 900,
  title: "Battle Of Bands"
},
{
  id: "19",
  img: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979334/IMG-20260607-WA0023_z3qfcn.jpg",
  url: "https://res.cloudinary.com/db69ffwwa/image/upload/v1780979334/IMG-20260607-WA0023_z3qfcn.jpg",
  height: 650,
  title: "Battle Of Bands"
}];


export function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-[#0e100f] text-stone-200 overflow-x-hidden pt-12">
      
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div
        className="absolute inset-0 bg-cover bg-center scale-120 opacity-30"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/db69ffwwa/image/upload/v1780758912/PassBackground_lrxyzv.png')",
          filter: "contrast(1.15)",
          WebkitFilter: "contrast(1.15)"
        }} />

        
        <div
        className="absolute inset-x-0 bottom-0 h-72 pointer-events-none z-10"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)"
        }} />

        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e100f]/40 via-[#0e100f]/60 to-[#0e100f] z-10" />
        
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0e100f] to-transparent z-20 pointer-events-none" />
      </div>

      
      <div className="relative pt-24 pb-4 px-6 z-10 text-center max-w-3xl mx-auto">
        <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>

          <p
          className="text-stone-500/80 tracking-[0.4em] uppercase text-[10px] mb-2 font-semibold"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

            ギャラリー | gallery
          </p>
          <h1
          className="text-white mb-2 leading-tight font-extrabold font-sans uppercase tracking-wide"
          style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>

            Festival Moments
          </h1>
          <p
          className="text-stone-400 leading-relaxed text-sm font-light max-w-xl mx-auto"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

            Explore the moments that define the spirit of Harshtal. Hover over columns to pause scrolling, and click images to view them in full.
          </p>
        </motion.div>
      </div>

      
      <div className="relative z-10 bg-[#0e100f] py-16 px-6 border-t border-white/5 shadow-[0_-30px_50px_rgba(14,16,15,0.95)]">
        <div className="max-w-6xl mx-auto h-[600px] md:h-[800px] lg:h-[850px] overflow-hidden">
          <Masonry
          items={galleryItems}
          scaleOnHover={true}
          hoverScale={0.97}
          colorShiftOnHover={true} />

        </div>
      </div>
    </div>);

}