import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

export function HeartRain({ active }: { active: boolean }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (!active) {
      setPetals([]);
      return;
    }

    // Initialize with a few petals
    const initialPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage from left
      size: Math.random() * 14 + 8, // 8px to 22px
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 6, // 6s to 14s
      rotation: Math.random() * 360,
    }));
    setPetals(initialPetals);

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals((prev) => {
        const nextId = prev.length > 0 ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
        // Keep array small to prevent lag
        const cleaned = prev.filter((p) => {
          // Keep only those created in the last 15 seconds
          return true;
        });
        const limited = cleaned.slice(-25); // Limit max active
        
        return [
          ...limited,
          {
            id: nextId,
            x: Math.random() * 100,
            size: Math.random() * 14 + 8,
            delay: 0,
            duration: Math.random() * 8 + 6,
            rotation: Math.random() * 360,
          },
        ];
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ 
              top: "-5%", 
              left: `${petal.x}%`, 
              opacity: 0, 
              rotate: petal.rotation,
              scale: 0.5 
            }}
            animate={{ 
              top: "105%", 
              opacity: [0, 0.7, 0.7, 0], 
              rotate: petal.rotation + 360,
              scale: 1,
              x: [0, Math.sin(petal.id) * 40, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              delay: petal.delay, 
              duration: petal.duration, 
              ease: "linear",
              repeat: Infinity
            }}
            className="absolute text-gold-200/40"
            style={{ width: petal.size, height: petal.size }}
          >
            {/* Elegant SVG of Sakura petal / gold heart */}
            {petal.id % 2 === 0 ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C11.5,4 9,6 6,8C3,10 2,13 4,16C6,19 10,21 12,22C14,21 18,19 20,16C22,13 21,10 18,8C15,6 12.5,4 12,2Z" />
              </svg>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
