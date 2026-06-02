import React from "react";
import { motion } from "motion/react";
import { Calendar, ChevronDown } from "lucide-react";
import { useCountdown } from "../hooks/useCountdown";
import { weddingInfo } from "../data/weddingData";

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(weddingInfo.weddingDate);

  const countdownItems = [
    { value: days, label: "Hari" },
    { value: hours, label: "Jam" },
    { value: minutes, label: "Menit" },
    { value: seconds, label: "Detik" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-beige-100 text-slate-800 text-center py-20 px-6 overflow-hidden">
      
      {/* Background Watercolors Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-sage-100/40 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-gold-100/30 blur-3xl" />
      </div>

      {/* Decorative floral accents in corner */}
      <div className="absolute top-8 left-8 text-sage-400 opacity-20 pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
          <path d="M0,0 Q30,10 40,40 Q10,30 0,0 Z" />
          <path d="M0,0 Q10,30 40,40 Q30,10 0,0 Z" />
        </svg>
      </div>

      <div className="absolute top-8 right-8 text-sage-400 opacity-20 pointer-events-none rotate-90">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
          <path d="M0,0 Q30,10 40,40 Q10,30 0,0 Z" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="max-w-2xl w-full flex flex-col items-center space-y-8 z-10">
        
        {/* Subtle decorative gold badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-1 bg-gold-50 border border-gold-200/60 px-4 py-1.5 rounded-full text-gold-500 font-heading tracking-widest text-[10px] md:text-xs uppercase font-semibold shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 animate-pulse" />
          The Wedding Invitation
        </motion.div>

        {/* Title */}
        <div className="space-y-4">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xs md:text-sm tracking-widest uppercase font-heading text-slate-500 font-medium"
          >
            Pernikahan Mulia & Suci
          </motion.h4>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-script text-6xl md:text-7xl lg:text-8xl text-gold-500 drop-shadow-sm px-2 text-center"
          >
            Afni & Zidny
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-[1.5px] bg-gradient-to-r from-transparent via-gold-300 to-transparent mx-auto"
          />
        </div>

        {/* Q.S Ar-Rum mini excerpt or introductory remark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xs md:text-sm text-slate-500 font-serif italic max-w-md"
        >
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, dengan penuh kedamaian kami mengundang Anda dalam akad & resepsi kami.
        </motion.p>

        {/* Countdown Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full max-w-md px-2"
        >
          {countdownItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-xl md:rounded-2xl border border-gold-200/50 p-2.5 sm:p-4 text-center shadow-md shadow-slate-200/55 flex flex-col justify-center items-center backdrop-blur-sm group hover:border-gold-300 transition duration-300"
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                className="font-mono text-xl sm:text-2xl md:text-3xl text-gold-500 font-bold"
              >
                {String(item.value).padStart(2, "0")}
              </motion.span>
              <span className="text-[10px] md:text-xs text-slate-400 font-heading uppercase tracking-wider font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Date presentation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-center font-serif text-slate-600 space-y-1"
        >
          <p className="text-sm tracking-widest uppercase font-heading font-medium text-gold-400">
            Senin, 22 Juni 2026
          </p>
          <p className="text-xs italic text-slate-400">
            Kecamatan Leuwigoong, Garut
          </p>
        </motion.div>

        {/* Scroll helper indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-slate-300 pt-8"
        >
          <span className="text-[10px] tracking-widest uppercase text-slate-400 font-heading mb-1.5 font-light">
            Silakan Gulir Ke Bawah
          </span>
          <ChevronDown className="w-5 h-5 text-gold-400" />
        </motion.div>

      </div>
    </div>
  );
}
