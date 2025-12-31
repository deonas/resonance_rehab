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
      <div className="sticky top-0 h-dvh flex flex-col w-full z-0 md:contents">
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

      <div className="relative w-full z-20 bg-background md:bg-transparent md:absolute md:top-[45vh] md:min-h-[55vh] md:pointer-events-none md:z-10 flex flex-col justify-start">
        <AboutUs ref={aboutRef} />
      </div>
    </div>
  );
};

export default Hero;
