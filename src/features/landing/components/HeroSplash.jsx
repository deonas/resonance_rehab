import React from "react";

const HeroSplash = ({ titleRef, overlayRef }) => {
  return (
    <div className="hidden md:flex absolute inset-0 z-40 items-center justify-center pointer-events-none">
      {/* Gradient Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-black/70"
      >
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 animate-bounce">
          <span className="text-sm font-urbanist tracking-widest uppercase">
            Scroll
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <h1
        ref={titleRef}
        className="relative z-10 font-editorial  text-white text-6xl tracking-wide drop-shadow-md"
      >
        Resonance Rehab
      </h1>
    </div>
  );
};

export default HeroSplash;
