import React from "react";
import { HeartCrack } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { weddingInfo } from "../data/weddingData";

export function DoaSection() {
  const { doaPengantin } = weddingInfo;

  return (
    <AnimatedSection
      id="doa"
      className="relative py-24 px-6 bg-sage-500 text-white overflow-hidden text-center"
    >
      {/* Decorative leaf motifs */}
      <div className="absolute top-0 left-0 w-44 h-44 text-sage-400 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M0,0 Q50,10 50,55 Q10,50 0,0 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-44 h-44 text-sage-400 pointer-events-none opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M0,0 Q50,10 50,55 Q10,50 0,0 Z" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto z-10 relative space-y-8">
        
        {/* Calligraphy / Inscription */}
        <div className="space-y-4">
          <span className="text-[10px] tracking-widest uppercase font-heading text-gold-100 font-semibold">
            Doa Restu Keluarga Besar
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-medium italic">
            Doa Untuk Kedua Mempelai
          </h2>
          <div className="w-12 h-[1px] bg-gold-200/50 mx-auto" />
        </div>

        {/* The Arabic Doa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-6 md:space-y-8 py-4 px-2 select-text"
        >
          <h3 
            className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-loose text-gold-100 font-semibold"
            style={{ direction: "rtl", lineHeight: "2.3" }}
          >
            {doaPengantin.arabic}
          </h3>

          <div className="space-y-3 max-w-2xl mx-auto">
            {/* Transliteration */}
            <p className="font-serif text-sm md:text-md text-gold-200 italic font-medium">
              {doaPengantin.transliteration}
            </p>
            
            {/* Divider */}
            <div className="w-10 h-[1.5px] bg-gold-300/30 mx-auto" />

            {/* Translation */}
            <p className="text-xs md:text-sm lg:text-base text-emerald-50 leading-relaxed font-sans max-w-xl mx-auto opacity-90">
              "{doaPengantin.translation}."
            </p>
          </div>
        </motion.div>

        {/* Sincere thanks text */}
        <p className="text-xs md:text-sm text-emerald-100 leading-relaxed font-serif italic max-w-xl mx-auto opacity-75 pt-8 select-text">
          "Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan terima kasih."
        </p>

      </div>
    </AnimatedSection>
  );
}
