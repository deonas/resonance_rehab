import React from "react";
import { SOCIAL_LINKS } from "../../../constants/heroConstants";

const HeroBackground = ({
  containerRef,
  bgImageRef,
  socialRef,
  doodleOverlayRef,
  doodles,
  onImageLoad,
}) => {
  return (
    <div
      ref={containerRef}
      className="relative flex-1 w-full mt-[-20px] md:mt-0 md:absolute md:inset-0 md:z-0 order-2"
    >
      {/* Background Image */}
      <picture className="w-full h-full block">
        <source media="(min-width: 768px)" srcSet="/images/Hero.png" />
        <img
          ref={bgImageRef}
          src="/images/Hero/HeroMobBg.png"
          alt="Children Playing"
          className="w-full h-full object-cover object-bottom"
          onLoad={onImageLoad}
        />
      </picture>

      {/* Desktop Social Icons (Right) */}
      <div
        ref={socialRef}
        className="hidden md:flex flex-col absolute right-8 top-1/2 -translate-y-1/2 gap-6 z-30"
      >
        {SOCIAL_LINKS.map((icon) => (
          <a
            key={icon}
            href="#"
            className="social-icon-link hover:scale-110 transition-transform"
          >
            <img
              src={`/icons/${icon}.svg`}
              alt={icon}
              className="w-5 h-5 opacity-80 hover:opacity-100 brightness-0 invert"
            />
          </a>
        ))}
      </div>

      {/* Desktop Scroll Indicator (Left) */}
      <div className="hidden md:flex flex-col absolute left-12 top-1/2 -translate-y-1/2 z-30 items-center gap-2 opacity-60">
        <div className="w-px h-12 bg-white/50 md:bg-gray-500/50"></div>
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

      {/* Doodles Overlay (Dynamic) */}
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
              // Combine transforms: Centering + User Scale/Rotation
              transform: `
                  ${doodle.isCentered ? "translate(-50%, -50%)" : ""} 
                  scale(${doodle.scale || 1}) 
                  rotate(${doodle.rotation || 0}deg)
                `,
            }}
          />
        ))}
      </div>

      {/* Bottom Caption */}
      <div className="hero-footer-caption absolute bottom-8 left-0 right-0 w-full flex justify-center md:bottom-12 md:z-20">
        <p className="text-white text-center text-sm md:text-lg font-medium font-urbanist drop-shadow-md leading-relaxed px-4 max-w-[90%] md:max-w-none md:px-0">
          Safe, simple, and supportive therapy,
          <br className="block md:hidden" />
          from our hearts to your home.
        </p>
      </div>
    </div>
  );
};

export default HeroBackground;
