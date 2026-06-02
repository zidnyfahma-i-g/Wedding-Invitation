import React from "react";
import { Heart, Sparkles, Shirt, Utensils } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { weddingInfo } from "../data/weddingData";

export function AdabSection() {
  const icons = [
    <Heart className="w-6 h-6 text-emerald-700" />,
    <Sparkles className="w-6 h-6 text-emerald-700" />,
    <Shirt className="w-6 h-6 text-emerald-700" />,
    <Utensils className="w-6 h-6 text-emerald-700" />
  ];

  return (
    <AnimatedSection
      id="adab"
      className="relative py-20 px-6 bg-sage-50 text-slate-800 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center z-10 relative space-y-12">
        {/* Header Title */}
        <div className="space-y-3">
          <h2 className="font-script text-5xl text-gold-500">
            Adab pada Acara
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-sans max-w-md mx-auto">
            Demi kelancaran dan keberkahan acara walimatul 'ursy, mohon sekiranya bapak/ibu dapat mengindahkan sebagian adab berikut:
          </p>
          <div className="w-16 h-[1px] bg-gold-200 mx-auto" />
        </div>

        {/* 2x2 Grid of Adab Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {weddingInfo.adab.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, shadow: "md" }}
              className="bg-white rounded-2xl p-6 border border-gold-200/40 text-center flex flex-col items-center space-y-4 shadow-sm"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center">
                {icons[index]}
              </div>

              {/* Title & description */}
              <div className="space-y-1">
                <h4 className="font-serif text-base text-slate-800 font-semibold max-w-xs">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
