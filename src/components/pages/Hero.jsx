import React, { useRef } from "react";
import { DOODLES } from "../../constants/heroConstants";
import { useHeroAnimation } from "../../hooks/useHeroAnimation";
import HeroSplash from "../sections/hero/HeroSplash";
import HeroBackground from "../sections/hero/HeroBackground";
import HeroContent from "../sections/hero/HeroContent";
import AboutUs from "./AboutUs";

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
  const aboutRef = useRef(null);

  const { handleResize } = useHeroAnimation({
    heroRef,
    imageContainerRef,
    doodleOverlayRef,
    overlayRef,
    splashTitleRef,
    splashOverlayRef,
    socialRef,
    bgImageRef,
    aboutRef,
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

      {/* About Us Content layered into the same scroll context */}
      <div className="absolute top-[100vh] left-0 w-full z-20 md:block md:top-[40vh] md:min-h-screen md:pointer-events-none md:z-10 flex flex-col justify-start">
        <AboutUs ref={aboutRef} />
      </div>
    </div>
  );
};

export default Hero;
