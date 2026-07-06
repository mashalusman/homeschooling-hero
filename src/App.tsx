import React, { useEffect, useRef, useState } from 'react';
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react';

export default function AcademicHubHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fadeAnimationRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);
  const [videoOpacity, setVideoOpacity] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Helper to run clean opacity fades using requestAnimationFrame
    const fadeTo = (targetOpacity: number, duration: number, callback?: () => void) => {
      if (fadeAnimationRef.current) {
        cancelAnimationFrame(fadeAnimationRef.current);
      }

      const startOpacity = videoOpacity;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Linear interpolation from current position to target parameter
        const current = startOpacity + (targetOpacity - startOpacity) * progress;
        setVideoOpacity(current);

        if (progress < 1) {
          fadeAnimationRef.current = requestAnimationFrame(animate);
        } else if (callback) {
          callback();
        }
      };

      fadeAnimationRef.current = requestAnimationFrame(animate);
    };

    // Trigger initial 500ms fade-in on structural system load
    const handleCanPlay = () => {
      fadeTo(1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const timeLeft = video.duration - video.currentTime;

      // Trigger 500ms fade-out exactly 0.55s before loop cycle terminates
      if (timeLeft <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeTo(0, 500);
      }
    };

    const handleEnded = () => {
      // 100ms reset delay loop anchor sequence
      setTimeout(() => {
        fadingOutRef.current = false;
        video.currentTime = 0;
        video.play().then(() => {
          fadeTo(1, 500);
        }).catch((err) => console.log("Playback interrupted:", err));
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Initial sequence validation check
    if (video.readyState >= 3) {
      fadeTo(1, 500);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (fadeAnimationRef.current) cancelAnimationFrame(fadeAnimationRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between">
      {/* Cinematic Looping Background Layer */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none transform translate-y-[17%]"
        style={{ opacity: videoOpacity }}
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
        />
      </div>

      {/* Navigation Header */}
      <nav className="relative z-20 pl-6 pr-6 py-6 w-full">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <Globe className="h-6 w-6" />
              <span>Asme</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Features</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Pricing</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium hover:text-white/80 transition-colors">Sign Up</button>
            <button className="liquid-glass text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-white/5 transition-colors">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Interactive UI Layer */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the curious
        </h1>
        
        <div className="max-w-xl w-full space-y-4 mx-auto">
          {/* Email Capture Bar */}
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent flex-1 text-white placeholder:text-white/40 text-base focus:outline-none"
            />
            <button className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors flex items-center justify-center">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <p className="text-white text-sm leading-relaxed px-4">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </p>

          <div className="pt-2">
            <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Manifesto
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Footer Control Bar */}
      <footer className="relative z-10 flex justify-center gap-4 pb-12 w-full">
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all" aria-label="Instagram Profile">
          <Instagram className="h-5 w-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all" aria-label="Twitter Feed">
          <Twitter className="h-5 w-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all" aria-label="Global Network Hub">
          <Globe className="h-5 w-5" />
        </button>
      </footer>
    </div>
  );
}
