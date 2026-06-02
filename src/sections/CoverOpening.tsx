import { Mail, CalendarCheck } from "lucide-react";
import { motion } from "motion/react";
import { WreathCircle } from "../components/WreathCircle";
import { useCountdown } from "../hooks/useCountdown";
import { weddingInfo } from "../data/weddingData";

interface CoverOpeningProps {
  onOpen: () => void;
  isOpen: boolean;
}

export function CoverOpening({ onOpen, isOpen }: CoverOpeningProps) {
  // Extract ?to=GuestName natively from URLSearchParams
  const getGuestName = () => {
    if (typeof window === "undefined") return "Tamu Undangan";
    const params = new URLSearchParams(window.location.search);
    return params.get("to") || "Tamu Undangan";
  };
  
  const guestName = getGuestName();
  const { days, hours, minutes, seconds } = useCountdown(weddingInfo.weddingDate);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isOpen ? "-100%" : 0 }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-sage-500 py-12 px-6 overflow-hidden text-white"
    >
      {/* Decorative Top Left Botanical Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: -30, y: -30 }}
        animate={{ opacity: 0.35, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-44 h-44 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-sage-200">
          <path d="M 0,0 Q 40,20 20,60 Q 60,30 100,0 Z" />
          <path d="M 0,0 Q 30,50 10,80 Q 40,50 80,0 Z" className="opacity-70" />
          <path d="M 0,20 Q 15,35 10,50 Q 30,30 40,10" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-60" />
        </svg>
      </motion.div>

      {/* Decorative Bottom Right Botanical Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 0.35, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 right-0 w-44 h-44 pointer-events-none rotate-180"
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-sage-200">
          <path d="M 0,0 Q 40,20 20,60 Q 60,30 100,0 Z" />
          <path d="M 0,0 Q 30,50 10,80 Q 40,50 80,0 Z" className="opacity-70" />
        </svg>
      </motion.div>

      {/* Header section */}
      <div className="text-center md:mt-4 z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm tracking-widest uppercase font-heading text-gold-100 mb-2"
        >
          Walimatul 'Ursy
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-16 h-[1px] bg-gold-200/50 mx-auto"
        />
      </div>

      {/* Center Circle Wreath with Names */}
      <div className="relative flex flex-col items-center justify-center py-6 z-10">
        <WreathCircle />
      </div>

      {/* Footer Content & Guest Presentation */}
      <div className="flex flex-col items-center text-center max-w-md w-full z-10 space-y-6">
        
        {/* Recipient Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-5 w-full border border-white/15 shadow-xl max-w-sm"
        >
          <p className="text-[10px] md:text-xs text-gold-100 uppercase tracking-widest font-heading mb-1.5 opacity-80">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <h2 className="text-xl md:text-2xl font-serif text-white font-semibold drop-shadow-sm line-clamp-2 px-2 py-0.5">
            {guestName}
          </h2>
          <div className="w-12 h-[1px] bg-gold-300/40 my-2 mx-auto" />
          <p className="text-[10px] md:text-xs text-emerald-100 italic">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </motion.div>

        {/* Action Button & Envelope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col items-center space-y-3 w-full"
        >
          {/* Pulsing Envelope Emblem */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold-200 mb-1"
          >
            <Mail className="w-8 h-8 stroke-[1.25]" />
          </motion.div>

          <button
            onClick={onOpen}
            id="open-invitation-btn"
            className="relative px-8 py-3 bg-gold-100 text-sage-700 hover:bg-gold-200 hover:scale-105 active:scale-95 font-medium rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2 border border-gold-300 shadow-md transform font-serif text-sm tracking-wider uppercase tracking-widest"
          >
            <CalendarCheck className="w-4 h-4 text-sage-600 animate-pulse" />
            Buka Undangan
          </button>
        </motion.div>

        {/* Small live countdown stacked at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-center"
        >
          <p className="text-[9px] md:text-[10px] tracking-widest text-gold-200 uppercase font-light">
            Menuju Hari Bahagia • 22 Juni 2026
          </p>
          <div className="flex gap-2.5 justify-center mt-1 text-[11px] font-mono font-medium text-gold-100">
            <span>{days} Hari</span>
            <span className="opacity-50">|</span>
            <span>{hours} Jam</span>
            <span className="opacity-50">|</span>
            <span>{minutes} Menit</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
