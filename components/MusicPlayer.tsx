"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
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
      audioRef.current.volume = 0.3;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Aggressive auto-play: use muted-then-unmute trick + multiple fallbacks
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let retryCount = 0;
    const maxRetries = 5;

    const tryPlay = () => {
      if (!audio) return;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Retry with exponential backoff
        retryCount++;
        if (retryCount < maxRetries) {
          // Strategy 1: Retry after delay
          setTimeout(tryPlay, 300 * retryCount);
        }
      });
    };

    // Try muted autoplay trick (works in Chrome, Edge, Safari)
    const tryMutedPlay = () => {
      if (!audio) return;
      audio.muted = true;
      audio.play().then(() => {
        // Unmute after a tiny delay - this bypasses autoplay policy
        setTimeout(() => {
          if (audio) {
            audio.muted = false;
            audio.volume = 0.3;
            setIsPlaying(true);
          }
        }, 100);
      }).catch(() => {
        // Fallback: try regular play
        audio.muted = false;
        tryPlay();
      });
    };

    // Execute autoplay strategies
    tryMutedPlay();

    // Also try on visibility change (tab becomes visible)
    const handleVisibility = () => {
      if (!document.hidden && audio && !audio.paused && !isPlaying) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  if (!isMounted) return null;

  return (
    <div className="flex items-center" dir={dir}>
      <motion.button
        onClick={togglePlay}
        className="relative w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center hover:border-blue-500/50 transition-colors cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        title={
          language === "ar"
            ? isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"
            : isPlaying ? "Pause music" : "Play music"
        }
      >
        {/* Tiny equalizer when playing */}
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center gap-[2px] opacity-40">
            {[1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="w-[2px] bg-blue-400 rounded-full"
                animate={{ height: ["4px", "12px", "4px"] }}
                transition={{
                  duration: 0.6 + i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.12,
                }}
              />
            ))}
          </div>
        )}

        <span className="relative z-10 flex items-center justify-center">
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 text-white fill-white" />
          ) : (
            <Play className="w-3.5 h-3.5 text-white fill-white ml-[1px]" />
          )}
        </span>
      </motion.button>
    </div>
  );
}

