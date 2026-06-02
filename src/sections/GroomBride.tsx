import { useState } from "react";
import { Heart, Sparkles, Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { weddingInfo } from "../data/weddingData";

type GraphicStyle = "modern-maroon" | "classic-white" | "royal-navy";

export function GroomBride() {
  const { bride, groom } = weddingInfo;
  const [graphicStyle, setGraphicStyle] = useState<GraphicStyle>("modern-maroon");

  const cleanImageUrl = (url: string | undefined) => {
    if (!url) return "";
    if (url.startsWith("/public/")) {
      return url.substring(7); // Removes "/public" -> "/images/..."
    }
    return url;
  };

  const isCustomBridePhoto = bride.photoUrl && 
    !bride.photoUrl.includes("photo-1544005313") && 
    bride.photoUrl.trim() !== "";

  const isCustomGroomPhoto = groom.photoUrl && 
    !groom.photoUrl.includes("photo-1507003211169") && 
    groom.photoUrl.trim() !== "";

  return (
    <AnimatedSection
      id="mempelai"
      className="relative py-24 px-6 bg-white overflow-hidden text-slate-800"
    >
      {/* Decorative leaf motifs */}
      <div className="absolute top-12 left-0 w-24 h-24 text-sage-100 pointer-events-none opacity-40">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M0,50 Q40,30 50,0 Q60,30 100,50 Q60,70 50,100 Q40,70 0,50 Z" />
        </svg>
      </div>

      <div className="absolute bottom-12 right-0 w-32 h-32 text-gold-100 pointer-events-none opacity-45 rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M0,50 Q40,20 50,0 Q60,20 100,50 Q60,80 50,100 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-16">
        
        {/* Intro */}
        <div className="text-center space-y-4 max-w-xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-500 mx-auto"
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-sage-600 font-semibold italic">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </h2>
          
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
            Dengan memohon rahmat dan rida Allah Subḥānahu Wa Ta’ālā, kami bermaksud untuk mengundang Bapak/Ibu/Saudara/i untuk menghadiri syukuran pernikahan kami:
          </p>
        </div>

        {/* Dynamic Graphic Style Toggle */}
        {!isCustomBridePhoto && !isCustomGroomPhoto && (
          <div className="flex flex-col items-center space-y-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 max-w-md w-full">
            <span className="text-xs font-heading font-semibold text-slate-400 tracking-wider uppercase flex items-center gap-1 leading-none">
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              Pilih Varian Gaya Seni Grafis
            </span>
            <div className="grid grid-cols-3 gap-2 w-full">
              {[
                { id: "modern-maroon", label: "Maroon Velvet", desc: "Modern Minimal" },
                { id: "classic-white", label: "Classic White", desc: "Murni & Tradisional" },
                { id: "royal-navy", label: "Royal Gold", desc: "Mewah & Anggun" }
              ].map((style) => (
                <button
                  key={style.id}
                  onClick={() => setGraphicStyle(style.id as GraphicStyle)}
                  className={`py-2 px-1 rounded-xl border text-[11px] font-heading transition-all duration-300 flex flex-col items-center justify-center space-y-0.5 ${
                    graphicStyle === style.id
                      ? "bg-sage-600 border-sage-600 text-white shadow-md shadow-sage-200 scale-102 font-semibold"
                      : "bg-white border-slate-200 text-slate-600 hover:border-sage-200 hover:bg-sage-50/50"
                  }`}
                >
                  <span>{style.label}</span>
                  <span className={`text-[8px] ${graphicStyle === style.id ? "text-sage-100" : "text-slate-400"}`}>
                    {style.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bride & Groom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full items-stretch">
          
          {/* Mempelai Wanita (Bride) - Afni */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-gold-50/40 border border-gold-100/50 relative shadow-sm"
          >
            {/* Elegant Photo Frame */}
            <div className="relative w-44 h-44 mb-6 group">
              {/* Outer rotating/spinning decorative ring */}
              <div className="absolute inset--3 rounded-full border border-gold-300 pointer-events-none group-hover:border-gold-500 transition duration-500" />
              <div className="absolute inset--1.5 rounded-full border border-dashed border-sage-300 pointer-events-none opacity-60 group-hover:scale-105 transition duration-500" />
              
              {/* Actual illustration */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md relative z-10 bg-gradient-to-tr from-sage-50 via-beige-50 to-gold-50 flex items-center justify-center">
                {isCustomBridePhoto ? (
                  <img
                    src={cleanImageUrl(bride.photoUrl)}
                    alt={bride.fullName}
                    className="w-full h-full object-cover select-none animate-fade-in"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <svg viewBox="0 0 100 100" className="w-full h-full select-none">
                    <defs>
                      <linearGradient id="brideBg-maroon" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fbc9c9" />
                        <stop offset="50%" stopColor="#fdf1f1" />
                        <stop offset="100%" stopColor="#fcf5eb" />
                      </linearGradient>
                      <linearGradient id="brideBg-white" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e2e8f0" />
                        <stop offset="50%" stopColor="#f8fafc" />
                        <stop offset="100%" stopColor="#fffbeb" />
                      </linearGradient>
                      <linearGradient id="brideBg-navy" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="maroonDress" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8c1d22" />
                        <stop offset="100%" stopColor="#490b0e" />
                      </linearGradient>
                      <linearGradient id="whiteDress" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#cbd5e1" />
                      </linearGradient>
                      <linearGradient id="navyDress" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                      <linearGradient id="goldCrown" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e5c382" />
                        <stop offset="50%" stopColor="#cb9648" />
                        <stop offset="100%" stopColor="#9c6d42" />
                      </linearGradient>
                      <linearGradient id="silverCrown" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#cbd5e1" />
                        <stop offset="50%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>
                      <radialGradient id="rosyCheekBride" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#fcaaa3" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#fcaaa3" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    
                    {/* Background base */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="50" 
                      fill={graphicStyle === "modern-maroon" ? "url(#brideBg-maroon)" : graphicStyle === "classic-white" ? "url(#brideBg-white)" : "url(#brideBg-navy)"} 
                    />
                    <circle cx="50" cy="50" r="46.5" fill="none" stroke="url(#goldCrown)" strokeWidth="0.4" strokeDasharray="3 2" className="opacity-40" />

                    {/* Sparkly Gown */}
                    <path 
                      d="M 22,82 C 22,70 30,65 50,65 C 70,65 78,70 78,82 L 82,98 L 18,98 Z" 
                      fill={graphicStyle === "modern-maroon" ? "url(#maroonDress)" : graphicStyle === "classic-white" ? "url(#whiteDress)" : "url(#navyDress)"} 
                    />
                    
                    {/* Lace detail for Classic White */}
                    {graphicStyle === "classic-white" && (
                      <g opacity="0.4">
                        <circle cx="50" cy="73" r="1.5" fill="#94a3b8" />
                        <circle cx="44" cy="75" r="1" fill="#94a3b8" />
                        <circle cx="56" cy="75" r="1" fill="#94a3b8" />
                        <path d="M 32,80 Q 50,76 68,80" fill="none" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2 1" />
                        <path d="M 25,88 Q 50,83 75,88" fill="none" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2 1" />
                      </g>
                    )}

                    {/* Gown Glitters/Sparkles */}
                    <circle cx="34" cy="74" r="0.6" fill="#ffffff" opacity="0.6" />
                    <circle cx="45" cy="71" r="0.4" fill="#ffffff" opacity="0.8" />
                    <circle cx="58" cy="73" r="0.8" fill="#ffffff" opacity="0.75" />
                    <circle cx="68" cy="76" r="0.5" fill="#ffffff" opacity="0.5" />
                    <circle cx="52" cy="80" r="0.6" fill="#ffffff" opacity="0.7" />
                    <circle cx="40" cy="83" r="0.4" fill="#ffffff" opacity="0.6" />
                    <circle cx="62" cy="83" r="0.7" fill="#ffffff" opacity="0.8" />
                    
                    {/* Face base - beautiful warm tone */}
                    <path d="M 37,42 C 37,30 63,30 63,42 C 63,53 50,58 50,58 C 50,58 37,53 37,42 Z" fill="#faece3" />
                    
                    {/* Rosy Cheeks */}
                    <circle cx="43" cy="46" r="7" fill="url(#rosyCheekBride)" />
                    <circle cx="57" cy="46" r="7" fill="url(#rosyCheekBride)" />
                    
                    {/* Soft closed eyes and smile (minimal/peaceful) */}
                    <path d="M 42,43 C 44,44.5 46,44.5 48,43" fill="none" stroke="#a08575" strokeWidth="0.75" strokeLinecap="round" />
                    <path d="M 52,43 C 54,44.5 56,44.5 58,43" fill="none" stroke="#a08575" strokeWidth="0.75" strokeLinecap="round" />
                    
                    {/* Elegantly styled Hijab draped meticulously around face */}
                    <path 
                      d="M 37,34 C 33,36 33,48 35,53 C 37,58 41,64 50,65 C 59,64 63,58 65,53 C 67,48 67,36 63,34 C 59,31 41,31 37,34 Z" 
                      fill="none" 
                      stroke={graphicStyle === "modern-maroon" ? "#a22e33" : graphicStyle === "classic-white" ? "#cbd5e1" : "#1e40af"} 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M 36.5,34.5 C 33.5,37 32,47 35,54 C 38,61 43,65 50,66 C 57,65 62,61 65,54 C 68,47 66.5,37 63.5,34.5 C 59.5,31.5 40.5,31.5 36.5,34.5 Z" 
                      fill={graphicStyle === "modern-maroon" ? "#fbc0c0" : graphicStyle === "classic-white" ? "#fbfcfd" : "#3b82f6"} 
                    />
                    
                    {/* Inner hijab cap frame (Ciput) */}
                    <path d="M 40,32.5 C 44,30.5 56,30.5 60,32.5 C 57,30 43,30 40,32.5 Z" fill="#eed9cd" />

                    {/* Flowy Hijab creases / Folds */}
                    <path 
                      d="M 35,46 C 37,50 44,59 50,59 C 56,59 63,50 65,46" 
                      fill="none" 
                      stroke={graphicStyle === "modern-maroon" ? "#c86468" : graphicStyle === "classic-white" ? "#cbd5e1" : "#1d4ed8"} 
                      strokeWidth="0.8" 
                    />
                    <path 
                      d="M 39,52 C 43,56 47,59 50,62 C 53,59 57,56 61,52" 
                      fill="none" 
                      stroke={graphicStyle === "modern-maroon" ? "#c86468" : graphicStyle === "classic-white" ? "#cbd5e1" : "#1d4ed8"} 
                      strokeWidth="0.6" 
                    />

                    {/* Translucent overlay green Veil draped behind and flowing on the side */}
                    <path 
                      d="M 34,31 C 25,37 20,53 20,68 C 20,83 23,94 28,98 L 72,98 C 77,94 80,83 80,68 C 80,53 75,37 66,31 C 58,28 42,28 34,31 Z" 
                      fill={graphicStyle === "modern-maroon" ? "#fca1a3" : graphicStyle === "classic-white" ? "#ffffff" : "#60a5fa"} 
                      fillOpacity={graphicStyle === "classic-white" ? "0.4" : "0.25"} 
                    />
                    <path d="M 31,34 C 23,40 18,54 18,70 C 18,85 21,95 24,98" fill="none" stroke="#ffffff" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.6" />
                    <path d="M 69,34 C 77,40 82,54 82,70 C 82,85 79,95 76,98" fill="none" stroke="#ffffff" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.6" />

                    {/* Intricate Tiara */}
                    <path 
                      d="M 32,32 Q 50,23 68,32" 
                      fill="none" 
                      stroke={graphicStyle === "classic-white" ? "url(#silverCrown)" : "url(#goldCrown)"} 
                      strokeWidth="1.2" 
                    />
                    {/* Leaves on crown */}
                    <path d="M 34,30 Q 36,29 37,31 Z" fill={graphicStyle === "classic-white" ? "url(#silverCrown)" : "url(#goldCrown)"} />
                    <path d="M 49,25 Q 50,23 51,25 Z" fill={graphicStyle === "classic-white" ? "url(#silverCrown)" : "url(#goldCrown)"} />
                    <path d="M 63,30 Q 64,29 66,31 Z" fill={graphicStyle === "classic-white" ? "url(#silverCrown)" : "url(#goldCrown)"} />
                    <circle cx="50" cy="24" r="1.5" fill={graphicStyle === "classic-white" ? "url(#silverCrown)" : "url(#goldCrown)"} />
                    <circle cx="44" cy="26" r="1.2" fill={graphicStyle === "classic-white" ? "url(#silverCrown)" : "url(#goldCrown)"} />
                    <circle cx="56" cy="26" r="1.2" fill={graphicStyle === "classic-white" ? "url(#silverCrown)" : "url(#goldCrown)"} />

                    {/* Jasmine Melati Drape detail for Classic White style */}
                    {graphicStyle === "classic-white" && (
                      <g>
                        <circle cx="28" cy="40" r="1.8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.3" />
                        <circle cx="28.5" cy="40" r="0.5" fill="#facc15" />
                        <circle cx="72" cy="40" r="1.8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.3" />
                        <circle cx="71.5" cy="40" r="0.5" fill="#facc15" />
                        <path d="M 35,53 Q 28,68 33,78" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeDasharray="3 3" />
                      </g>
                    )}
                  </svg>
                )}
              </div>
            </div>

            {/* Inscription */}
            <div className="space-y-3 z-10">
              <h3 className="font-script text-4xl md:text-5xl text-gold-500 mb-2">
                {bride.fullName}
              </h3>
              
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-serif font-medium text-slate-700">
                <span>Putri Tercinta dari:</span>
              </div>
              
              <p className="text-sm md:text-md font-heading font-semibold text-slate-800">
                {bride.fatherName} & {bride.motherName}
              </p>
              
              <p className="text-xs text-slate-400 italic font-serif">
                Kp. Kondang, Garut
              </p>

              {/* Instagram link option */}
              <a
                href="https://instagram.com/srinurafni"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-gold-500 bg-white px-3 py-1 rounded-full border border-gold-200/50 hover:bg-gold-100 transition duration-300 font-heading mt-2 font-medium"
              >
                <Instagram className="w-3.5 h-3.5 stroke-[1.5]" />
                @srinurafni
              </a>
            </div>
          </motion.div>

          {/* Mempelai Pria (Groom) - Zidny */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-gold-50/40 border border-gold-100/50 relative shadow-sm"
          >
            {/* Elegant Photo Frame */}
            <div className="relative w-44 h-44 mb-6 group">
              {/* Outer rotating/spinning decorative ring */}
              <div className="absolute inset--3 rounded-full border border-gold-300 pointer-events-none group-hover:border-gold-500 transition duration-500" />
              <div className="absolute inset--1.5 rounded-full border border-dashed border-sage-300 pointer-events-none opacity-60 group-hover:scale-105 transition duration-500" />
              
              {/* Actual illustration */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md relative z-10 bg-gradient-to-tr from-sage-50 via-beige-50 to-gold-50 flex items-center justify-center">
                {isCustomGroomPhoto ? (
                  <img
                    src={cleanImageUrl(groom.photoUrl)}
                    alt={groom.fullName}
                    className="w-full h-full object-cover select-none animate-fade-in"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <svg viewBox="0 0 100 100" className="w-full h-full select-none">
                    <defs>
                      {/* Background Gradients */}
                      <linearGradient id="groomBg-maroon" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f9bebe" />
                        <stop offset="50%" stopColor="#fdf1f1" />
                        <stop offset="100%" stopColor="#fcf5eb" />
                      </linearGradient>
                      <linearGradient id="groomBg-white" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e2e8f0" />
                        <stop offset="50%" stopColor="#f8fafc" />
                        <stop offset="100%" stopColor="#fffbeb" />
                      </linearGradient>
                      <linearGradient id="groomBg-navy" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="50%" stopColor="#1e3a8a" />
                        <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.4" />
                      </linearGradient>

                      {/* Suit/Coats Gradients */}
                      <linearGradient id="maroonSuit" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a22a2e" />
                        <stop offset="100%" stopColor="#701014" />
                      </linearGradient>
                      <linearGradient id="blackSuit" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#334155" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                      <linearGradient id="navySuit" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" />
                        <stop offset="100%" stopColor="#172554" />
                      </linearGradient>

                      {/* Accessories */}
                      <linearGradient id="goldWrap" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d9ad7e" />
                        <stop offset="100%" stopColor="#a3764c" />
                      </linearGradient>
                      <linearGradient id="terracottaWrap" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f1a894" />
                        <stop offset="100%" stopColor="#c2410c" />
                      </linearGradient>
                      <linearGradient id="tulipColor" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f3a995" />
                        <stop offset="100%" stopColor="#db7b67" />
                      </linearGradient>
                      <radialGradient id="rosyCheekGroom" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#fbb1a9" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#fbb1a9" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    
                    {/* Background base */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="50" 
                      fill={graphicStyle === "modern-maroon" ? "url(#groomBg-maroon)" : graphicStyle === "classic-white" ? "url(#groomBg-white)" : "url(#groomBg-navy)"} 
                    />
                    <circle cx="50" cy="50" r="46.5" fill="none" stroke="#d5ded9" strokeWidth="0.4" strokeDasharray="3 2" className="opacity-70" />

                    {/* Jumu/Wedding Suit */}
                    <path 
                      d="M 12,98 L 88,98 C 88,80 80,64 64,63 L 50,65 L 36,63 C 20,64 12,80 12,98 Z" 
                      fill={graphicStyle === "modern-maroon" ? "url(#maroonSuit)" : graphicStyle === "classic-white" ? "url(#blackSuit)" : "url(#navySuit)"} 
                    />
                    
                    {/* Suit Collar details and lapels with fine lines */}
                    <path 
                      d="M 36,63 C 40,73 44,88 45,98" 
                      fill="none" 
                      stroke={graphicStyle === "classic-white" ? "#1e293b" : "#475569"} 
                      strokeWidth="1" 
                    />
                    <path 
                      d="M 64,63 C 60,73 56,88 55,98" 
                      fill="none" 
                      stroke={graphicStyle === "classic-white" ? "#1e293b" : "#475569"} 
                      strokeWidth="1" 
                    />
                    
                    {/* White boutonniere/corsage flower in left lapel pocket */}
                    <circle cx="34" cy="72" r="1.5" fill="#ffffff" />
                    <path d="M 32,71 Q 34,68 36,71" fill="none" stroke="#ffffff" strokeWidth="0.8" />
                    <path d="M 33,74 L 33,78" fill="none" stroke="#a4b6ac" strokeWidth="0.6" />
                    
                    {/* Undershirt with High collar */}
                    <path 
                      d="M 42,54 L 42,65 C 42,65 47,68 50,68 C 53,68 58,65 58,65 L 58,54 Z" 
                      fill={graphicStyle === "modern-maroon" ? "#fbc2c2" : "#f1f5f9"} 
                    />
                    <path d="M 42,58 L 50,67 L 58,58" fill="none" stroke="#94a3b8" strokeWidth="0.7" />

                    {/* Elegant tie / neckpiece */}
                    {graphicStyle === "royal-navy" && (
                      <path d="M 49,67 L 51,67 L 52,78 L 50,81 L 48,78 Z" fill="url(#terracottaWrap)" />
                    )}
                    {graphicStyle === "classic-white" && (
                      <g>
                        <circle cx="50" cy="73" r="1.8" fill="#eab308" />
                        <path d="M 48,73 L 52,73 M 50,71 L 50,75" stroke="#eab308" strokeWidth="0.4" />
                      </g>
                    )}

                    {/* Face Base - Minimalist Warm Skin Tone */}
                    <path d="M 35,40 C 35,27 65,27 65,40 C 65,51 50,56 50,56 C 50,56 35,51 35,40 Z" fill="#faece3" />
                    
                    {/* Rosy Cheeks */}
                    <circle cx="42" cy="45" r="6" fill="url(#rosyCheekGroom)" />
                    <circle cx="58" cy="45" r="6" fill="url(#rosyCheekGroom)" />

                    {/* Soft closed eyes */}
                    <path d="M 40,41.5 C 42,43 44,43 46,41.5" fill="none" stroke="#78350f" strokeWidth="0.85" strokeLinecap="round" />
                    <path d="M 54,41.5 C 56,43 58,43 60,41.5" fill="none" stroke="#78350f" strokeWidth="0.85" strokeLinecap="round" />

                    {/* Ears */}
                    <path d="M 35,39 C 32.5,40 32.5,45 35,46 Z" fill="#faece3" />
                    <path d="M 65,39 C 67.5,40 67.5,45 65,46 Z" fill="#faece3" />

                    {/* Modern Side-Swept Cropped Hairstyle (Dark brown/black) */}
                    <path d="M 33,36 C 33,26 43,21 52,21 C 61,21 66,27 66,35 C 66,36 64,36 64,35 C 64,30 58,24 50,24 C 42,24 35,29 35,35 C 35,37 33,37 33,36 Z" fill="#2d2724" />
                    {/* Volume hairline curve */}
                    <path d="M 34,36 C 34,25 43,20 54,20 C 63,20 66,24 66,32 C 61,28 47,26 36,34 Z" fill="#1c1917" />
                    <path d="M 34,32 C 34,25 41,22 47,22" fill="none" stroke="#3c3330" strokeWidth="0.8" />

                    {/* Hand-held flower bouquet of Tulips */}
                    <g transform="translate(1, 4)">
                      {/* Flower stems */}
                      <path d="M 48,80 L 46,94" stroke="#7e9686" strokeWidth="1" />
                      <path d="M 51,80 L 52,94" stroke="#7e9686" strokeWidth="1" strokeLinecap="round" />
                      <path d="M 53,80 L 56,92" stroke="#7e9686" strokeWidth="0.8" />
                      
                      {/* Folded Packaging */}
                      <path 
                        d="M 40,75 L 61,75 L 53,94 L 47,94 Z" 
                        fill={graphicStyle === "royal-navy" ? "url(#terracottaWrap)" : "url(#goldWrap)"} 
                        stroke={graphicStyle === "royal-navy" ? "#9a3412" : "#8e623b"} 
                        strokeWidth="0.4" 
                      />
                      <path 
                        d="M 40,75 C 44,79 48,94 48,94 L 53,94 C 53,94 57,79 61,75" 
                        fill="none" 
                        stroke={graphicStyle === "royal-navy" ? "#7c2d12" : "#7b522d"} 
                        strokeWidth="0.6" 
                      />
                      
                      {/* Flowers */}
                      {graphicStyle === "classic-white" ? (
                        <g>
                          <circle cx="46" cy="67" r="3.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.4" />
                          <circle cx="51" cy="65" r="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.4" />
                          <circle cx="56" cy="68" r="3.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.4" />
                          <circle cx="46" cy="67" r="1.5" fill="#f1f5f9" />
                          <circle cx="51" cy="65" r="1.8" fill="#f1f5f9" />
                          <circle cx="56" cy="68" r="1.5" fill="#f1f5f9" />
                        </g>
                      ) : (
                        <g>
                          <path d="M 44,70 C 42,67 44,63 46,63 C 48,63 49,66 47,70 Z" fill="url(#tulipColor)" />
                          <path d="M 44.5,70 Q 46,64 47.5,70" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.6" />
                          <path d="M 49,67 C 47.5,63 49.5,60 51,60 C 52.5,60 53.5,63 52,67 Z" fill="url(#tulipColor)" />
                          <path d="M 49.5,67 Q 51,61 52.5,67" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.6" />
                          <path d="M 54,71 C 52,68 53.5,64 55.5,64 C 57.5,64 58,68 56,71 Z" fill="url(#tulipColor)" />
                          <path d="M 54.5,71 Q 56,65 57,71" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.6" />
                        </g>
                      )}
                      
                      {/* Green small leaves in bouquet */}
                      <path d="M 42,75 Q 40,68 45,71 Z" fill="#677e6e" />
                      <path d="M 58,75 Q 61,69 57,72 Z" fill="#677e6e" />
                      
                      {/* Ribbon around bouquet */}
                      <rect x="47.5" y="85" width="5.5" height="2" rx="0.5" fill="#faece3" stroke="#d5ded9" strokeWidth="0.4" />
                      <path d="M 48,87 C 46,89 45,93 46,93" fill="none" stroke="#faece3" strokeWidth="0.8" />
                      <path d="M 52.5,87 C 54.5,89 55,93 54,93" fill="none" stroke="#faece3" strokeWidth="0.8" />
                    </g>
                  </svg>
                )}
              </div>
            </div>

            {/* Inscription */}
            <div className="space-y-3 z-10">
              <h3 className="font-script text-4xl md:text-5xl text-gold-500 mb-2">
                {groom.fullName}
              </h3>
              
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-serif font-medium text-slate-700">
                <span>Putra Tercinta dari:</span>
              </div>
              
              <p className="text-sm md:text-md font-heading font-semibold text-slate-800 leading-snug">
                {groom.fatherName} <span className="text-xs text-slate-400 font-normal italic">(Alm)</span>
                <br className="md:hidden" />
                <span className="hidden md:inline"> & </span>
                {groom.motherName} <span className="text-xs text-slate-400 font-normal italic">(Almh)</span>
              </p>
              
              <p className="text-xs text-slate-400 italic font-serif">
                Keluarga Besar Bpk. Slamet Saadi
              </p>

              {/* Instagram link option */}
              <a
                href="https://instagram.com/zidny_saadi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-gold-500 bg-white px-3 py-1 rounded-full border border-gold-200/50 hover:bg-gold-100 transition duration-300 font-heading mt-2 font-medium"
              >
                <Instagram className="w-3.5 h-3.5 stroke-[1.5]" />
                @zidnyfahma
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
}
