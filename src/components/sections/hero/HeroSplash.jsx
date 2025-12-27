import React from "react";

const HeroSplash = ({ titleRef, overlayRef }) => {
  return (
    <div className="hidden md:flex absolute inset-0 z-40 items-center justify-center pointer-events-none">
      {/* Gradient Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-black/70"
      />
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
