import React from "react";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { weddingInfo } from "../data/weddingData";

export function AyatSection() {
  const { ayat } = weddingInfo;

  return (
    <AnimatedSection
      id="ayat"
      className="relative py-20 px-6 bg-sage-50 text-slate-800 overflow-hidden text-center"
    >
      {/* Decorative leaf shapes */}
      <div className="absolute top-0 right-0 w-44 h-44 text-sage-200 pointer-events-none opacity-30">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full rotate-45">
          <path d="M0,0 Q50,0 50,50 Q100,50 100,100 Q50,100 50,50 Q0,50 0,0 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-44 h-44 text-sage-200 pointer-events-none opacity-30">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full -rotate-45">
          <path d="M0,0 Q50,0 50,50 Q100,50 100,100 Q50,100 50,50 Q0,50 0,0 Z" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto z-10 relative">
        {/* Beautiful Card backing */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gold-200/50 shadow-md relative"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 border-t-2 border-l-2 border-gold-300 w-6 h-6 rounded-tl-lg opacity-40" />
          <div className="absolute top-4 right-4 border-t-2 border-r-2 border-gold-300 w-6 h-6 rounded-tr-lg opacity-40" />
          <div className="absolute bottom-4 left-4 border-b-2 border-l-2 border-gold-300 w-6 h-6 rounded-bl-lg opacity-40" />
          <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-gold-300 w-6 h-6 rounded-br-lg opacity-40" />

          {/* Bismillah Calligraphy */}
          <div className="flex justify-center mb-8">
            <svg
              viewBox="0 0 450 100"
              className="w-72 md:w-80 h-auto text-emerald-800 opacity-90 fill-current"
              style={{ maxHeight: "60px" }}
            >
              {/* Simplified smooth typographic outline depicting Arabic Bismillah */}
              <text
                x="50%"
                y="65%"
                textAnchor="middle"
                className="font-serif italic font-bold text-3xl md:text-4xl"
                style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </text>
            </svg>
          </div>

          <div className="text-emerald-800/10 absolute top-12 left-1/2 transform -translate-x-1/2 pointer-events-none">
            <Quote className="w-20 h-20" />
          </div>

          {/* Quran Arabic Verse */}
          <div className="space-y-6 md:space-y-8">
            <h3 
              className="font-serif text-xl md:text-2xl lg:text-3xl leading-loose text-slate-800 font-medium px-4 select-text"
              style={{ direction: "rtl", lineHeight: "2.4" }}
            >
              {ayat.arabic}
            </h3>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-gold-300" />
              <div className="w-2 h-2 rounded-full bg-gold-400 rotate-45" />
              <div className="w-8 h-[1px] bg-gold-300" />
            </div>

            {/* Quran Translation Verse */}
            <div className="space-y-3 font-serif max-w-2xl mx-auto px-2">
              <p className="text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed italic select-text">
                "{ayat.translation}"
              </p>
              
              <h4 className="text-[11px] md:text-xs tracking-wider uppercase font-heading font-semibold text-gold-500">
                — {ayat.reference}
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
