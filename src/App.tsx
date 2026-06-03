import { useState, useEffect } from "react";
import { CoverOpening } from "./sections/CoverOpening";
import { Hero } from "./sections/Hero";
import { GroomBride } from "./sections/GroomBride";
import { AyatSection } from "./sections/AyatSection";
import { EventDetail } from "./sections/EventDetail";
import { AdabSection } from "./sections/AdabSection";
import { DoaSection } from "./sections/DoaSection";
import { GiftSection } from "./sections/GiftSection";
import { WishSection } from "./sections/WishSection";
import { Closing } from "./sections/Closing";
import { AudioPlayer } from "./components/AudioPlayer";
import {NavigationDock} from "./components/NavigationDock";
import { HeartRain } from "./components/HeartRain";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Lock scrolling while the cover is active for superior aesthetics and interaction
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true); // Auto-start the background music on manual click interaction
  };

  return (
    <div className="min-h-screen bg-beige-50 font-sans antialiased text-slate-800 selection:bg-gold-200 selection:text-slate-950">
      {/* 1. Cover Opening Screen Overlaid */}
      <CoverOpening isOpen={isOpened} onOpen={handleOpenInvitation} />

      {/* 2. Floating Romantic Instrumental Background Music System */}
      <AudioPlayer isOpened={isOpened} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* 2.1 Beautiful Floating Quick Navigation Bar */}
      <NavigationDock isOpened={isOpened} />
      
      {/* 3. Drop Rose/Gold Falling Petals micro-experience once opened */}
      <HeartRain active={isOpened} />

      {/* 4. Wedding Invitation Main Body Components (revealed underneath the cover sliding) */}
      <div className={`transition-all duration-700 ${isOpened ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
        {/* Main Hero introductory visualizer with live wedding countdown to June 22, 2026 */}
        <Hero />

        {/* Profiles of Groom, Bride, and Parents */}
        <GroomBride />

        {/* Ar-Rum 21 Islamic Core Scripture Verse */}
        <AyatSection />

        {/* Akad & Resepsi Timing Details & Interactive Map Navigation Options */}
        <EventDetail />

        {/* Sacred Sunnah & Walk-in Walimah Attentiveness Manners (Adab) */}
        <AdabSection />

        {/* Blessings Doa for the Newlyweds */}
        <DoaSection />

        {/* Multi-account bank cash envelopes and interactive copy handlers */}
        <GiftSection />

        {/* Living interactive Guest book wishboard feed synced with LocalStorage */}
        <WishSection />

        {/* Sincere family column signatures and Gratitude Closing */}
        <Closing />
      </div>
    </div>
  );
}
