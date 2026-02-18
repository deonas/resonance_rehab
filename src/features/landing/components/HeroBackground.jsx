import React from "react";
import { SOCIAL_LINKS } from "@/constants/heroConstants";

const HeroBackground = ({
  containerRef,
  bgImageRef,
  socialRef,
  doodleOverlayRef,
  doodles = [],
  onImageLoad,
  simple = false,
  imageClass = "object-top md:object-bottom",
}) => {
  return (
    <div
      ref={containerRef}
      className={`relative w-full flex-1 min-h-0 md:mt-0 md:absolute md:inset-0 md:z-10 order-2 ${
        simple ? "h-full" : ""
      }`}
    >
      {/* Background Image */}
      <picture className="w-full h-full block">
        <source media="(min-width: 768px)" srcSet="/images/Hero.png" />
        <img
          ref={bgImageRef}
          src="/images/Hero/HeroMobBg.png"
          alt="Children Playing"
          className={`w-full h-full object-cover ${imageClass}`}
          onLoad={onImageLoad}
        />
      </picture>

      {/* Desktop Scroll Indicator (Left) */}
      {!simple && (
        <div className="hidden md:flex flex-col absolute left-12 top-1/2 -translate-y-1/2 z-30 items-center gap-2 opacity-60">
          <div className="w-px h-12 bg-white/50 md:bg-gray-500/50" />
          <div className="border border-white/50 md:border-gray-500/50 rounded-full py-3 px-1.5 animate-bounce">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}

      {/* Doodles Overlay (Dynamic) */}
      {!simple && doodles && (
        <div
          ref={doodleOverlayRef}
          className="hero-doodles absolute md:z-20 hidden md:block pointer-events-none"
        >
          {doodles.map((doodle) => (
            <img
              key={doodle.id}
              src={doodle.src}
              alt={doodle.alt}
              className={`absolute ${doodle.className}`}
              style={{
                top: `${doodle.top}%`,
                left: `${doodle.left}%`,
                width: `${doodle.width || 10}%`,
                transform: `
                  ${doodle.isCentered ? "translate(-50%, -50%)" : ""}
                  scale(${doodle.scale || 1})
                  rotate(${doodle.rotation || 0}deg)
                `,
              }}
            />
          ))}
        </div>
      )}

      {/* Bottom Caption */}
      {!simple && (
        <div className="hero-footer-caption absolute bottom-8 left-0 right-0 w-full flex justify-center md:bottom-12 md:z-20">
          <p className="text-white text-center text-sm md:text-lg font-medium font-urbanist drop-shadow-md leading-relaxed px-4 max-w-[90%] md:max-w-none md:px-0">
            Safe, simple, and supportive therapy,
            <br className="block md:hidden" />
            from our hearts to your home.
          </p>
        </div>
      )}
    </div>
  );
};

export default HeroBackground;