import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { weddingInfo } from "../data/weddingData";

export function Closing() {
  const { bride, groom, turutMengundang } = weddingInfo;

  return (
    <div className="relative overflow-hidden text-center bg-sage-600 text-white select-none">
      {/* Wave watercolor or fog overlay divider */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-beige-100 to-transparent opacity-20" />

      {/* Primary Atmospheric Container */}
      <AnimatedSection
        id="penutup"
        className="relative py-24 px-6 max-w-4xl mx-auto flex flex-col items-center space-y-16"
      >
        {/* Subtle top decoration */}
        <div className="w-12 h-12 rounded-full border border-gold-300/40 flex items-center justify-center text-gold-200">
          <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        {/* Dynamic sincere gratitude */}
        <div className="space-y-4 max-w-xl">
          <p className="font-serif text-sm tracking-widest uppercase text-gold-100 font-medium">
            Sampai Jumpa di Hari Bahagia Kami,
          </p>
          <p className="text-xs md:text-sm text-emerald-100 font-sans leading-relaxed opacity-85 select-text">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu bagi kelangsungan keluarga kami kelak. Teriring ucapan terima kasih yang tulus dari kami sekeluarga.
          </p>
        </div>

        {/* Wedding Cursive Names */}
        <div className="space-y-2">
          <h2 className="font-script text-6xl md:text-7xl text-gold-200 drop-shadow-md py-2">
            Afni & Zidny
          </h2>
          
          <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-200 uppercase tracking-widest font-heading font-semibold">
            <Heart className="w-3.5 h-3.5 fill-current text-gold-300 animate-pulse" />
            22 JUNI 2026
          </div>
        </div>

        {/* Family Organization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full text-slate-100 pt-8 border-t border-white/10">
          
          {/* Bride Family block */}
          <div className="space-y-3">
            <h4 className="text-[10px] md:text-xs text-gold-100 uppercase tracking-widest font-heading font-bold">
              Keluarga Besar Mempelai Wanita
            </h4>
            <div className="w-6 h-[0.5px] bg-gold-300/30 mx-auto" />
            <p className="font-serif text-md md:text-lg font-semibold text-white">
              {bride.fatherName}
            </p>
            <p className="font-serif text-md md:text-lg font-semibold text-white">
              & {bride.motherName}
            </p>
          </div>

          {/* Groom Family block */}
          <div className="space-y-3">
            <h4 className="text-[10px] md:text-xs text-gold-100 uppercase tracking-widest font-heading font-bold">
              Keluarga Besar Mempelai Pria
            </h4>
            <div className="w-6 h-[0.5px] bg-gold-300/30 mx-auto" />
            <p className="font-serif text-md md:text-lg font-semibold text-white leading-snug">
              {groom.fatherName} <span className="text-xs text-emerald-200 font-light italic">(Alm)</span>
            </p>
            <p className="font-serif text-md md:text-lg font-semibold text-white leading-snug">
              & {groom.motherName} <span className="text-xs text-emerald-200 font-light italic">(Almh)</span>
            </p>
          </div>

        </div>

        {/* Turut Mengundang List Box */}
        <div className="space-y-4 max-w-lg w-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h4 className="text-[10px] md:text-xs text-gold-100 uppercase tracking-widest font-heading font-bold">
            Turut Mengundang
          </h4>
          <div className="w-8 h-[0.5px] bg-gold-300/30 mx-auto" />
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-100 font-serif leading-relaxed italic opacity-95">
            {turutMengundang.map((relative, idx) => (
              <li key={idx} className="flex justify-center items-center gap-1.5 select-text">
                <span className="text-gold-300 font-bold">•</span>
                <span>{relative}</span>
              </li>
            ))}
          </ul>
        </div>

      </AnimatedSection>

      {/* Copy footer banner */}
      <footer className="w-full bg-sage-700 py-6 border-t border-white/5 text-[10px] text-emerald-200/50 uppercase tracking-widest font-mono">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 select-text">
          <span>© 2026 AFNI & ZIDNY WEDDING</span>
          <span className="hidden md:inline text-sage-500">•</span>
          <span>CRAFTED WITH LOVE & SACRED PRAYERS</span>
        </div>
      </footer>
    </div>
  );
}
