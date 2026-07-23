"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const { language, dir } = useLanguage();

  // Mount state for hydration safety
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize audio element
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/audio/background.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Attempt autoplay + set up first-interaction fallback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt autoplay immediately
    audio.play().then(() => {
      setIsPlaying(true);
      setHasInteracted(true);
    }).catch(() => {
      // Autoplay blocked by browser – show hint after 3s
      setTimeout(() => setShowTooltip(true), 3000);
    });

    // Listen for any user gesture to auto-start playback
    const handleInteraction = () => {
      if (!hasInteracted && audio) {
        setHasInteracted(true);
        audio.play().then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        }).catch(() => {});
      }
    };

    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });
    document.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted]);

  // Sync volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowTooltip(false);
      }).catch(() => {});
    }
  };

  if (!isMounted) return null;

  const hintText =
    language === "ar" ? "اضغط لتشغيل الموسيقى" : "Click to play music";

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      dir={dir}
    >
      {/* ── Volume slider ── */}
      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-4 py-3 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              {volume === 0 ? (
                <VolumeX className="w-4 h-4 text-slate-400 shrink-0" />
              ) : (
                <Volume2 className="w-4 h-4 text-blue-400 shrink-0" />
              )}
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-24 h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:bg-blue-400
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:shadow-lg
                  [&::-webkit-slider-thumb]:shadow-blue-400/30"
                aria-label={language === "ar" ? "مستوى الصوت" : "Volume"}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tooltip hint ── */}
      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl px-3 py-2 shadow-2xl"
          >
            <p className="text-xs text-slate-300 whitespace-nowrap">
              {hintText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main button ── */}
      <div className="relative group">
        {/* Pulsing ring when playing */}
        {isPlaying && (
          <motion.span
            className="absolute inset-0 rounded-full bg-blue-500/20"
            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <motion.button
          onClick={togglePlay}
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
          className="relative w-14 h-14 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl flex items-center justify-center hover:border-blue-500/50 transition-colors cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.93 }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {/* Equalizer bars */}
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center gap-[3px] opacity-30">
              {[1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="w-[3px] bg-blue-400 rounded-full"
                  animate={{
                    height: ["8px", "20px", "6px", "24px", "8px"],
                  }}
                  transition={{
                    duration: 0.7 + i * 0.12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          )}

          {/* Play / Pause icon */}
          <span className="relative z-10 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white fill-white" />
            ) : (
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            )}
          </span>
        </motion.button>
      </div>
    </div>
  );
}

