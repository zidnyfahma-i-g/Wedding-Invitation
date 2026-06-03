import { useState, useEffect, useRef } from "react";
import { Heart, Calendar, Gift, MessageSquare, Compass, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavigationDockProps {
  isOpened: boolean;
}

export function NavigationDock({ isOpened }: NavigationDockProps) {
  const [activeSection, setActiveSection] = useState<string>("mempelai");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    {
      id: "mempelai",
      label: "Mempelai",
      icon: Heart,
    },
    {
      id: "acara",
      label: "Acara",
      icon: Calendar,
    },
    {
      id: "hadiah",
      label: "Hadiah",
      icon: Gift,
    },
    {
      id: "ucapan",
      label: "Ucapan",
      icon: MessageSquare,
    },
  ];

  // Smooth scroll helper
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsMenuOpen(false); // Close menu automatically on navigate
    }
  };

  // Determine active section on scroll
  useEffect(() => {
    if (!isOpened) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpened]);

  // Click outside to close the navigation menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  if (!isOpened) return null;

  return (
    <div
      ref={menuRef}
      className="fixed bottom-22 right-6 z-40 flex flex-col items-end gap-3 select-none"
    >
      {/* 1. Vertical Stack of Navigation items */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="flex flex-col items-end gap-3 mb-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.7 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: (navItems.length - 1 - index) * 0.05, // Staggers top to bottom sequence beautifully
                  }}
                  className="flex items-center gap-2.5 justify-end"
                >
                  {/* Persistent Elegant Label capsule */}
                  <span className="bg-white/95 backdrop-blur-md border border-gold-200/50 px-3 py-1 rounded-full text-[10px] md:text-xs font-heading font-medium text-slate-700 shadow-lg shadow-slate-900/5">
                    {item.label}
                  </span>

                  {/* Circle Button */}
                  <motion.button
                    onClick={() => handleScrollTo(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    id={`nav-link-bubble-${item.id}`}
                    className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-lg border cursor-pointer focus:outline-none transition-colors duration-300 ${
                      isActive
                        ? "bg-gold-500 border-gold-400 text-white"
                        : "bg-white border-slate-200 text-slate-600 hover:text-gold-500 hover:border-gold-300"
                    }`}
                  >
                    <Icon className="w-4.5 md:w-5 h-4.5 md:h-5 stroke-[2px]" />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* 2. Floating Menu Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        id="quick-nav-popup-trigger"
        className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg border cursor-pointer focus:outline-none z-50 transition-all duration-300 ${
          isMenuOpen
            ? "bg-slate-800 border-slate-700 text-white"
            : "bg-white border-gold-300 text-gold-500 hover:border-gold-400"
        }`}
        title="Buka Navigasi Cepat"
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="compass-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Compass className="w-6 h-6 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}