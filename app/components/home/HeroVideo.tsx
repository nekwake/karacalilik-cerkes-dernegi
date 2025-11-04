"use client";

import React, { useRef, useEffect, useState } from "react";

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const containerHeight = containerRef.current.offsetHeight;
      
      // Video yukarı kaydırma efekti (parallax)
      if (scrollY < containerHeight) {
        const translateY = scrollY * 0.5;
        videoRef.current.style.transform = `translateY(${translateY}px)`;
      }

      // Video görünürlüğünü kontrol et
      const isInViewport = rect.bottom > 0 && rect.top < window.innerHeight;
      
      if (isInViewport !== isVisible) {
        setIsVisible(isInViewport);
      }

      // Video görünmez olduğunda duraklat
      if (!isInViewport && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      } else if (isInViewport && videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {
          // Autoplay policy nedeniyle hata olabilir, sessizce yakala
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // İlk yüklemede kontrol et

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[60vh] sm:min-h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="bgvideo w-full h-auto object-cover absolute top-0 left-0"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Arka plan videosu"
        style={{ minHeight: "100%", minWidth: "100%" }}
      >
        <source src="/images/bgvideo-resized.mp4" type="video/mp4" />
        <source src="/images/bgvideo.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <p>Tarayıcınız video oynatmayı desteklemiyor.</p>
      </video>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/50"></div>
    </div>
  );
};

