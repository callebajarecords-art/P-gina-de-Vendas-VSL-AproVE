'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, Play, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { YOUTUBE_VIDEO_ID, UNLOCK_TIME_SECONDS } from '@/lib/constants';
import { setUnlockStorage } from '@/lib/unlock-store';

interface VSLPlayerProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function VSLPlayer({ onUnlock, isUnlocked }: VSLPlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [overlayDismissed, setOverlayDismissed] = useState(false);
  const [showDirectFallback, setShowDirectFallback] = useState(false);

  const handleUnlockTrigger = useCallback(() => {
    setUnlockStorage(true);
    onUnlock();
  }, [onUnlock]);

  // Load YouTube IFrame API without autoplay - video will NOT start without activating sound
  useEffect(() => {
    let checkTimer: NodeJS.Timeout | null = null;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) {
        return;
      }

      try {
        playerRef.current = new window.YT.Player('youtube-player-element', {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 0, // Video does NOT start without user activating sound
            mute: 0, // Audio will be unmuted
            controls: 0, // Hides native YouTube controls
            rel: 0, // Hides related recommendations
            modestbranding: 1, // Minimizes YouTube branding
            showinfo: 0, // Hides video title bar
            iv_load_policy: 3, // Hides video annotations
            disablekb: 1, // Disables keyboard shortcuts
            fs: 0, // Disables full screen button
            playsinline: 1, // Inline playback on mobile
            enablejsapi: 1,
            origin: typeof window !== 'undefined' ? window.location.origin : '',
          },
          events: {
            onReady: () => {
              // Video waits for user to activate with sound
              setIsPlaying(false);
            },
            onStateChange: (event: any) => {
              // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            },
            onError: (err: any) => {
              console.warn('YouTube Player Error:', err);
              setShowDirectFallback(true);
            },
          },
        });
      } catch (err) {
        console.error('Error creating YT player:', err);
        setShowDirectFallback(true);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingScript = document.getElementById('youtube-iframe-api');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };

      checkTimer = setTimeout(() => {
        if (!playerRef.current && window.YT && window.YT.Player) {
          initPlayer();
        } else if (!playerRef.current) {
          setShowDirectFallback(true);
        }
      }, 3500);
    }

    return () => {
      if (checkTimer) clearTimeout(checkTimer);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Continuous timer that advances smoothly ONLY when isPlaying is true
  useEffect(() => {
    if (isUnlocked) return;

    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime((prev) => {
          let updated = prev + 0.2;
          if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
            try {
              const ytTime = playerRef.current.getCurrentTime();
              if (typeof ytTime === 'number' && ytTime > prev) {
                updated = ytTime;
              }
            } catch {
              // use increment fallback
            }
          }

          if (updated >= UNLOCK_TIME_SECONDS) {
            handleUnlockTrigger();
          }
          return updated;
        });
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isPlaying, isUnlocked, handleUnlockTrigger]);

  // Click handler to activate sound and start video from the beginning
  const handleStartWithSoundClick = () => {
    setOverlayDismissed(true);
    setIsPlaying(true);
    if (playerRef.current) {
      try {
        if (typeof playerRef.current.unMute === 'function') {
          playerRef.current.unMute();
        }
        if (typeof playerRef.current.setVolume === 'function') {
          playerRef.current.setVolume(100);
        }
        if (typeof playerRef.current.seekTo === 'function') {
          playerRef.current.seekTo(0, true);
        }
        if (typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
        }
      } catch (err) {
        console.warn('Could not start player with sound:', err);
      }
    }
  };

  // Toggle play/pause on clicking the video directly after sound has been activated
  const handlePlayerAreaClick = () => {
    if (!overlayDismissed) {
      handleStartWithSoundClick();
      return;
    }

    if (playerRef.current) {
      try {
        if (isPlaying) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
        } else {
          playerRef.current.playVideo();
          setIsPlaying(true);
        }
      } catch (e) {
        console.warn('Toggle play error:', e);
      }
    }
  };

  // 4x Initial Velocity Easing Curve:
  // Starts fast at 4x speed, then smoothly decelerates as it approaches the end (165s unlock),
  // giving the powerful psychological impression that the video is short and fast.
  const calculate4xEasingPercent = (t: number) => {
    if (!overlayDismissed || t <= 0) return 0;
    if (t >= UNLOCK_TIME_SECONDS) return 100;

    const x = Math.min(1, t / UNLOCK_TIME_SECONDS);
    // Exponential ease-out: 1 - (1 - x)^2.2
    // Velocity at x=0 is ~2.2x normal relative to 165s (~8x relative to 10 min), smoothly slowing down
    const eased = 1 - Math.pow(1 - x, 2.2);
    return Math.min(99.6, Math.max(3, eased * 100));
  };

  const progressPercent4xEased = calculate4xEasingPercent(currentTime);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Outer Video Frame with overflow hidden to completely crop YouTube top title, share icons, and channel logos */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/40 select-none group"
      >
        {/* Scaled and cropped iframe wrapper: crops 15% on top and bottom so YouTube title, avatar and share button are hidden */}
        <div className="absolute -top-[15%] -bottom-[15%] -left-[6%] -right-[6%] w-[112%] h-[130%] pointer-events-none">
          <div id="youtube-player-element" className="w-full h-full pointer-events-auto" />
        </div>

        {/* Transparent Click Shield & Custom Click Handler so clicks never trigger YouTube's external UI */}
        <div 
          onClick={handlePlayerAreaClick}
          className="absolute inset-0 z-10 cursor-pointer"
          title={isPlaying ? "Clica para pausar" : "Clica para reproduzir"}
        >
          {/* Subtle pause indicator when user pauses */}
          {!isPlaying && overlayDismissed && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
              <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transform scale-110">
                <Play className="w-8 h-8 fill-slate-950 ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Activate Sound Overlay - Video DOES NOT start until user clicks this */}
        {!overlayDismissed && (
          <div 
            onClick={handleStartWithSoundClick}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/70 backdrop-blur-[3px] cursor-pointer transition-all hover:bg-black/60 p-4"
          >
            <div className="bg-slate-950/95 border-2 border-amber-400 text-white rounded-2xl px-6 sm:px-8 py-6 sm:py-7 flex flex-col items-center text-center max-w-md shadow-2xl animate-gold-glow">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-2 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Apresentação Oficial AproVE
              </span>

              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-red-600 via-amber-500 to-amber-400 text-slate-950 flex items-center justify-center my-3 shadow-2xl hover:scale-105 active:scale-95 transition-all">
                <Volume2 className="w-10 h-10 sm:w-12 sm:h-12 text-slate-950 animate-pulse" />
              </div>

              <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight mt-1">
                CLICA PARA ASSISTIR COM SOM
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xs leading-relaxed">
                Descobre como organizar a tua rotina e estudar com foco para o Ministério do Interior.
              </p>

              <div className="mt-4 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2">
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Iniciar Vídeo com Áudio</span>
              </div>
            </div>
          </div>
        )}

        {/* 4x Red Progress Bar attached directly inside the video bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-950/80 z-20 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-700 via-red-600 to-red-500 transition-all duration-200 relative shadow-[0_0_12px_rgba(239,68,68,0.95)]"
            style={{ width: `${progressPercent4xEased}%` }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/90 shadow-[0_0_8px_#ff0000]" />
          </div>
        </div>
      </div>

      {/* Prominent Dedicated 4X Red Progress Bar below video (Fast initial pace that smoothly eases off) */}
      <div className="w-full mt-3 bg-slate-900/90 h-2.5 rounded-full overflow-hidden border border-red-900/40 p-0.5 shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-red-700 via-red-600 to-red-500 rounded-full transition-all duration-200 relative shadow-[0_0_14px_rgba(239,68,68,0.9)]"
          style={{ width: `${progressPercent4xEased}%` }}
        >
          {overlayDismissed && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#ff0000] animate-pulse" />
          )}
        </div>
      </div>

      {/* Clean status line below video WITHOUT any time numbers */}
      <div className="w-full mt-2.5 px-2 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          {isUnlocked ? (
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Conteúdo Oficial Desbloqueado!
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-slate-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Assiste à apresentação (vídeo curto e direto)
            </span>
          )}
        </div>

        {/* Fallback bypass for direct access without exposing duration */}
        {!isUnlocked && (
          <button
            onClick={handleUnlockTrigger}
            type="button"
            className="text-[11px] text-amber-400/80 hover:text-amber-300 underline underline-offset-2 transition-colors cursor-pointer"
            title="Acesso imediato para quem já assistiu"
          >
            Já assististe? Ver oferta
          </button>
        )}
      </div>

      {/* API Notice / Fallback if embed is blocked */}
      {showDirectFallback && !isUnlocked && (
        <div className="mt-3 p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg text-xs text-amber-200/90 flex items-center justify-between gap-3 w-full">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>O leitor está lento ou bloqueado na tua rede? Podes libertar o conteúdo diretamente:</span>
          </div>
          <button
            onClick={handleUnlockTrigger}
            className="px-3 py-1 bg-amber-500 text-slate-950 font-semibold rounded hover:bg-amber-400 shrink-0 text-xs transition-colors"
          >
            Libertar Oferta Agora
          </button>
        </div>
      )}
    </div>
  );
}
