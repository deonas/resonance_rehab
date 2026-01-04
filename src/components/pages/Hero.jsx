import React, { useRef } from "react";
import { DOODLES } from "../../constants/heroConstants";
import { useHeroAnimation } from "../../hooks/useHeroAnimation";
import HeroSplash from "../sections/hero/HeroSplash";
import HeroBackground from "../sections/hero/HeroBackground";
import HeroContent from "../sections/hero/HeroContent";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import Approach from "./Approach";
import ConditionsWeSupport from "./ConditionsWeSupport";

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
  const whyChooseUsRef = useRef(null);
  const servicesRef = useRef(null);
  const approachRef = useRef(null);
  const conditionsRef = useRef(null);

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
    whyChooseUsRef,
    servicesRef,
    approachRef,
    conditionsRef,
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

      {/* Why Choose Us Content - Card Stack Effect */}
      <div
        className="absolute top-0 left-0 w-full z-30 pointer-events-none h-screen translate-y-full"
        ref={whyChooseUsRef}
      >
        <WhyChooseUs />
      </div>

      {/* Services Content - Card Stack Effect */}
      <div
        className="absolute top-0 left-0 w-full z-40 pointer-events-none h-screen translate-y-full"
        ref={servicesRef}
      >
        <Services />
      </div>

      {/* Approach Content - Card Stack Effect */}
      <div
        className="absolute top-0 left-0 w-full z-50 pointer-events-none h-screen translate-y-full"
        ref={approachRef}
      >
        <Approach />
      </div>

      {/* Conditions Content - Card Stack Effect */}
      <div
        className="absolute top-0 left-0 w-full z-60 pointer-events-none h-screen translate-y-full"
        ref={conditionsRef}
      >
        <ConditionsWeSupport />
      </div>
    </div>
  );
};

export default Hero;
