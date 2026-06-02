import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  isOpened: boolean;
}

export function AudioPlayer({ isPlaying, setIsPlaying, isOpened }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // List of high-fidelity public stream candidates for "Ari Lasso - Cinta Terakhir"
  // and elegant failsafes to guarantee backup music under any conditions.
  const audioSources = useRef<string[]>([
    "/music/wedding-song.mp3", // Local custom file priority
    "https://archive.org/download/ari-lasso-cinta-terakhir/Ari%20Lasso%20-%20Cinta%20Terakhir.mp3", // Archive.org high priority stream
    "https://archive.org/download/ari-lasso-cinta-terakhir-mp3/Ari%20Lasso%20-%20Cinta%20Terakhir.mp3", // Secondary Archive.org backup
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Ultimate bulletproof romantic instrumental fallback
  ]);
  
  const currentSourceIndex = useRef<number>(0);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.src = audioSources.current[currentSourceIndex.current];
      audio.loop = true;
      audio.volume = 0.5;
      
      const handleAudioError = () => {
        console.warn(`Audio loading failed for source: ${audioSources.current[currentSourceIndex.current]}`);
        
        // Advance to next fallback source if available
        if (currentSourceIndex.current < audioSources.current.length - 1) {
          currentSourceIndex.current += 1;
          const nextSource = audioSources.current[currentSourceIndex.current];
          console.log(`Re-routing audio to next fallback stream: ${nextSource}`);
          audio.src = nextSource;
          
          // Re-trigger play if the user already clicked "Open Invitation"
          if (isPlaying && isOpened) {
            audio.play().catch((err) => console.log("Retrying playback failed:", err));
          }
        }
      };

      audio.addEventListener("error", handleAudioError);
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Sync state with DOM audio element
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying && isOpened) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay blocked or playback interrupted. Waiting for user interaction. Details:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isOpened, setIsPlaying]);

  if (!isOpened) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          id="music-toggle-btn"
          className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gold-400 text-white shadow-lg cursor-pointer border border-gold-200 focus:outline-none"
          title={isPlaying ? "Mute Musik" : "Putar Musik"}
        >
          {/* Subtle spinning animated gold border ring */}
          {isPlaying && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              className="absolute inset--1 rounded-full border-2 border-dashed border-gold-100 opacity-60"
            />
          )}

          {/* Icon indicator */}
          {isPlaying ? (
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Volume2 className="w-6 h-6" />
            </motion.div>
          ) : (
            <VolumeX className="w-6 h-6 text-emerald-100" />
          )}

          {/* Micro elements for vinyl record simulation */}
          <div className="absolute inset-1 rounded-full border border-gold-500/20 pointer-events-none" />
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
