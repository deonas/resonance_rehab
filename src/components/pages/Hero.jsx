import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
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
import MeetOurTeam from "./MeetOurTeam";
import Contact from "./Contact";
import FrequentlyAsked from "./FrequentlyAsked";
import Footer from "../layout/Footer";

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
  const meetTeamRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);
  const footerRef = useRef(null);

  const location = useLocation();

  const { handleResize, scrollToSection } = useHeroAnimation({
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
    meetTeamRef,
    contactRef,
    faqRef,
    footerRef,
  });

  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    // Scroll to section based on current path
    // Run immediately before paint to avoid visual jump
    const isMount = isFirstRender.current;

    // Use 'auto' (instant) for initial mount to avoid scroll jump
    // Use 'smooth' for updates (navigation within Hero)
    scrollToSection(location.pathname, isMount ? "auto" : "smooth");

    if (isMount) {
      isFirstRender.current = false;
    }
  }, [location.pathname, scrollToSection]);

  return (
    <div
      ref={heroRef}
      className="
        relative
        w-full
        min-h-screen
        md:h-screen
        bg-background
        overflow-x-hidden
        overflow-y-visible
        md:overflow-hidden
        flex
        flex-col
        md:block
      "
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
      <div className="relative md:absolute top-0 md:top-[100vh] left-0 w-full z-20 md:z-20 min-h-screen md:min-h-screen flex flex-col justify-start">
        <AboutUs ref={aboutRef} />
      </div>

      {/* Why Choose Us Content - Full natural height on mobile, Card Stack on Desktop */}
<div
  className="relative md:absolute top-0 left-0 w-full z-30 md:translate-y-full"
  ref={whyChooseUsRef}
>
  <WhyChooseUs />
</div>

      {/* Services Content - Card Stack Effect on Desktop, Flow on Mobile - Allow natural height */}
      <div
        className="
          relative
          md:absolute
          top-0
          left-0
          w-full
          z-40
          min-h-screen
          md:min-h-screen
          md:h-auto
          translate-y-0
          md:translate-y-full
        "
        ref={servicesRef}
      >
        <Services />
      </div>

      {/* Approach Content - Card Stack Effect on Desktop, Flow on Mobile - Allow natural height */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-50 min-h-screen md:min-h-screen md:h-auto md:translate-y-full"
        ref={approachRef}
      >
        <Approach />
      </div>

      {/* Conditions Content - Card Stack Effect on Desktop, Flow on Mobile - Allow natural height */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[60] min-h-screen md:min-h-screen md:h-auto md:translate-y-full"
        ref={conditionsRef}
      >
        <ConditionsWeSupport />
      </div>

      {/* Meet Our Team Content - Card Stack Effect on Desktop, Flow on Mobile */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[70] min-h-screen md:h-screen md:translate-y-full"
        ref={meetTeamRef}
      >
        <MeetOurTeam />
      </div>

      {/* Contact Content - Card Stack Effect on Desktop, Flow on Mobile */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[80] min-h-screen md:h-screen md:translate-y-full"
        ref={contactRef}
      >
        <Contact />
      </div>

      {/* FAQ Content - Card Stack Effect on Desktop, Flow on Mobile - Allow natural height */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[90] min-h-screen md:min-h-screen md:h-auto md:translate-y-full"
        ref={faqRef}
      >
        <FrequentlyAsked />
      </div>

      {/* Footer Content - Card Stack Effect on Desktop, Flow on Mobile - Allow natural height */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[100] min-h-screen md:min-h-screen md:h-auto md:translate-y-full"
        ref={footerRef}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Hero;