import React from "react";
import { motion } from "motion/react";

export function WreathCircle() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center select-none">
      {/* Outer rotating decorative circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute w-full h-full"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full text-gold-300">
          {/* Main double gold rings */}
          <circle
            cx="200"
            cy="200"
            r="165"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-70"
          />
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="200"
            cy="200"
            r="154"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="opacity-50"
          />

          {/* Dots on the ring */}
          <circle cx="200" cy="35" r="4" fill="currentColor" />
          <circle cx="200" cy="365" r="4" fill="currentColor" />
          <circle cx="35" cy="200" r="4" fill="currentColor" />
          <circle cx="365" cy="200" r="4" fill="currentColor" />
          
          <circle cx="100" cy="95" r="2.5" fill="currentColor" className="opacity-80" />
          <circle cx="300" cy="95" r="2.5" fill="currentColor" className="opacity-80" />
          <circle cx="100" cy="305" r="2.5" fill="currentColor" className="opacity-80" />
          <circle cx="300" cy="305" r="2.5" fill="currentColor" className="opacity-80" />

          {/* Detailed watercolor-style leaves along the circle */}
          <g className="text-emerald-800/20 fill-current">
            {/* Left branch leaves details */}
            <path d="M 50,150 Q 30,130 40,110 Q 60,120 50,150 Z" />
            <path d="M 60,110 Q 40,90 55,75 Q 70,100 60,110 Z" />
            <path d="M 80,75 Q 70,50 85,40 Q 100,65 80,75 Z" />
            <path d="M 120,50 Q 115,20 135,20 Q 140,45 120,50 Z" />
            
            {/* Right branch leaves details */}
            <path d="M 350,150 Q 370,130 360,110 Q 340,120 350,150 Z" />
            <path d="M 340,110 Q 360,90 345,75 Q 330,100 340,110 Z" />
            <path d="M 320,75 Q 330,50 315,40 Q 300,65 320,75 Z" />
            <path d="M 280,50 Q 285,20 265,20 Q 260,45 280,50 Z" />

            {/* Bottom leaves */}
            <path d="M 200,360 Q 210,390 195,395 Q 185,370 200,360 Z" />
            <path d="M 170,350 Q 150,380 140,365 Q 160,340 170,350 Z" />
            <path d="M 230,350 Q 250,380 260,365 Q 240,340 230,350 Z" />
          </g>

          <g className="text-sage-400 fill-current opacity-85">
            {/* Soft medium leaves */}
            <path d="M 45,180 Q 25,170 30,150 Q 50,155 45,180 Z" />
            <path d="M 150,42 Q 155,10 170,15 Q 170,38 150,42 Z" />
            <path d="M 250,42 Q 245,10 230,15 Q 230,38 250,42 Z" />
            <path d="M 355,180 Q 375,170 370,150 Q 350,155 355,180 Z" />
            
            <path d="M 45,220 Q 20,230 25,250 Q 45,240 45,220 Z" />
            <path d="M 355,220 Q 380,230 375,250 Q 355,240 355,220 Z" />
          </g>
        </svg>
      </motion.div>

      {/* Inner floral branches (non-rotating for neatness) */}
      <div className="absolute w-[92%] h-[92%] pointer-events-none opacity-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-sage-500 fill-current">
          {/* Subtle leaves framing the bottom and top left */}
          <path d="M 15,35 C 10,25 22,20 25,28 C 22,35 15,38 15,35 Z" className="opacity-40" />
          <path d="M 85,35 C 90,25 78,20 75,28 C 78,35 85,38 85,35 Z" className="opacity-40" />
          <path d="M 20,70 C 12,75 20,85 28,80 C 25,72 22,68 20,70 Z" className="opacity-50" />
          <path d="M 80,70 C 88,75 80,85 72,80 C 75,72 78,68 80,70 Z" className="opacity-50" />
        </svg>
      </div>

      {/* Inner names calligraphy text */}
      <div className="absolute flex flex-col items-center justify-center text-center p-6">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-script text-5xl md:text-6xl text-gold-200 drop-shadow-sm select-text"
        >
          Afni
        </motion.span>
        
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="font-serif italic text-2xl md:text-3xl text-gold-100 my-1 font-light"
        >
          &
        </motion.span>
        
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-script text-5xl md:text-6xl text-gold-200 drop-shadow-sm select-text"
        >
          Zidny
        </motion.span>
      </div>
    </div>
  );
}
