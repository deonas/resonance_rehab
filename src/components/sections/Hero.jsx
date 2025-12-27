import React, { useRef } from "react";
import { DOODLES } from "../../constants/heroConstants";
import { useHeroAnimation } from "../../hooks/useHeroAnimation";
import HeroSplash from "../sections/hero/HeroSplash";
import HeroBackground from "../sections/hero/HeroBackground";
import HeroContent from "../sections/hero/HeroContent";

const Hero = () => {
  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);
  const doodleOverlayRef = useRef(null);
  const overlayRef = useRef(null);
  const splashTitleRef = useRef(null);
  const splashOverlayRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);
  const bgImageRef = useRef(null);

  const { handleResize } = useHeroAnimation({
    heroRef,
    imageContainerRef,
    doodleOverlayRef,
    overlayRef,
    splashTitleRef,
    splashOverlayRef,
    socialRef,
    bgImageRef,
  });

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen md:h-screen bg-background overflow-x-hidden md:overflow-hidden flex flex-col md:block"
    >
      <HeroSplash titleRef={splashTitleRef} overlayRef={splashOverlayRef} />

      <HeroBackground
        containerRef={imageContainerRef}
        bgImageRef={bgImageRef}
        socialRef={socialRef}
        doodleOverlayRef={doodleOverlayRef}
        doodles={DOODLES}
        onImageLoad={handleResize}
      />

      <HeroContent overlayRef={overlayRef} contentRef={contentRef} />
    </div>
  );
};

export default Hero;
