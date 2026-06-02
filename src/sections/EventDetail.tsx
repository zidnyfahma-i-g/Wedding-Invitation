import React from "react";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { weddingInfo } from "../data/weddingData";

export function EventDetail() {
  const { events } = weddingInfo;

  return (
    <AnimatedSection
      id="acara"
      className="relative py-24 px-6 bg-white overflow-hidden text-slate-800"
    >
      {/* Background Watercolors layer */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gold-100/40 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-sage-100/40 blur-3xl animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] sm:text-xs tracking-widest uppercase font-heading text-gold-400 font-semibold">
            Informasi Kehadiran
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-sage-600 font-semibold italic">
            Waktu & Tempat Acara
          </h2>
          <div className="w-12 h-[1px] bg-gold-200 mx-auto" />
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-4xl mx-auto items-stretch">
          
          {/* Akad Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gold-50/10 rounded-3xl p-8 border border-gold-200/50 shadow-md flex flex-col justify-between items-center text-center relative group"
          >
            {/* Elegant Top Design Wreath */}
            <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-500 mb-6">
              <Calendar className="w-5 h-5" />
            </div>

            <div className="space-y-4 flex-grow w-full">
              <h3 className="font-script text-4xl text-gold-500 mb-1">
                {events.akad.title}
              </h3>
              
              <div className="w-16 h-[0.5px] bg-gold-300/30 mx-auto" />

              <div className="space-y-3 pt-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs tracking-wider uppercase font-heading text-slate-400">Tanggal</span>
                  <p className="font-serif text-md text-slate-800 font-medium mt-0.5">{events.akad.dateStr}</p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs tracking-wider uppercase font-heading text-slate-400">Waktu</span>
                  <div className="flex items-center gap-1 mt-0.5 font-serif text-md text-slate-800 font-medium">
                    <Clock className="w-4 h-4 text-gold-400" />
                    <span>{events.akad.timeStr}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center max-w-xs mx-auto">
                  <span className="text-xs tracking-wider uppercase font-heading text-slate-400">Tempat</span>
                  <div className="flex items-center gap-1 mt-1 font-serif text-md text-slate-800 font-semibold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{events.akad.locationName}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed">
                    {events.akad.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resepsi Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gold-50/10 rounded-3xl p-8 border border-gold-200/50 shadow-md flex flex-col justify-between items-center text-center relative group"
          >
            {/* Elegant Top Design Wreath */}
            <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-500 mb-6">
              <Calendar className="w-5 h-5 fill-current opacity-20" />
            </div>

            <div className="space-y-4 flex-grow w-full">
              <h3 className="font-script text-4xl text-gold-500 mb-1">
                {events.resepsi.title}
              </h3>
              
              <div className="w-16 h-[0.5px] bg-gold-300/30 mx-auto" />

              <div className="space-y-3 pt-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs tracking-wider uppercase font-heading text-slate-400">Tanggal</span>
                  <p className="font-serif text-md text-slate-800 font-medium mt-0.5">{events.resepsi.dateStr}</p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs tracking-wider uppercase font-heading text-slate-400">Waktu</span>
                  <div className="flex items-center gap-1 mt-0.5 font-serif text-md text-slate-800 font-medium">
                    <Clock className="w-4 h-4 text-gold-400" />
                    <span>{events.resepsi.timeStr}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center max-w-xs mx-auto">
                  <span className="text-xs tracking-wider uppercase font-heading text-slate-400">Tempat</span>
                  <div className="flex items-center gap-1 mt-1 font-serif text-md text-slate-800 font-semibold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{events.resepsi.locationName}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed">
                    {events.resepsi.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Global Google Maps Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a
            href={events.akad.mapLink}
            target="_blank"
            rel="noreferrer"
            id="open-map-btn"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-sage-500 hover:bg-sage-600 text-white rounded-full font-serif text-sm tracking-wider uppercase tracking-widest hover:scale-105 active:scale-95 shadow-md shadow-sage-200/50 transition duration-300 font-medium cursor-pointer"
          >
            <Navigation className="w-4 h-4 animate-bounce" />
            Penunjuk Arah Google Maps
          </a>
        </motion.div>

      </div>
    </AnimatedSection>
  );
}
