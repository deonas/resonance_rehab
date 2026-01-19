import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { DOODLES } from "@/constants/heroConstants";
import { useHeroAnimation } from "@/shared/hooks/useHeroAnimation";
import HeroSplash from "./HeroSplash";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import AboutUs from "@/features/about/components/AboutUs";
import WhyChooseUs from "@/features/misc/components/WhyChooseUs";
import Services from "@/features/services/components/Services";
import Approach from "@/features/approach/components/Approach";
import ConditionsWeSupport from "@/features/conditions/components/ConditionsWeSupport";
import MeetOurTeam from "@/features/team/components/MeetOurTeam";
import Contact from "@/features/contact/components/Contact";
import FrequentlyAsked from "@/features/faq/components/FrequentlyAsked";
import Footer from "@/shared/components/layout/Footer";

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
        overflow-y-auto
        md:overflow-hidden
        snap-y
        snap-mandatory
        md:snap-none
        flex
        flex-col
        md:block
      "
    >
      {/* 1. HERO SECTION - "Empowering Young Minds" - MUST BE FIRST */}
      <div className="relative min-h-screen snap-start md:snap-none order-1 flex flex-col md:block">
        <HeroSplash titleRef={splashTitleRef} overlayRef={splashOverlayRef} />

        {/* Content at TOP on mobile, overlaid on desktop */}
        <div className="relative md:absolute md:inset-0 flex flex-col md:justify-center order-1 md:order-none z-10 pb-0 md:pb-0">
          <HeroContent overlayRef={overlayRef} contentRef={contentRef} />
        </div>

        {/* Background Image - SHARED between Hero and About on mobile */}
        <div className="block md:absolute md:inset-0 order-2 md:order-none md:z-0 h-[50vh] md:h-auto">
          <HeroBackground
            containerRef={imageContainerRef}
            bgImageRef={bgImageRef}
            socialRef={socialRef}
            doodleOverlayRef={doodleOverlayRef}
            doodles={DOODLES}
            onImageLoad={handleResize}
          />
        </div>
      </div>

      {/* 2. ABOUT US - "Care That Connects" - SECOND */}
      <div className="relative md:absolute top-0 md:top-[100vh] left-0 w-full z-20 min-h-0 md:min-h-screen snap-start md:snap-none flex flex-col justify-start order-2 pt-0 md:pt-0">
        <AboutUs ref={aboutRef} />
      </div>

      {/* 3. Why Choose Us Content */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-30 min-h-0 md:min-h-screen snap-start md:snap-none md:translate-y-full order-3"
        ref={whyChooseUsRef}
      >
        <WhyChooseUs />
      </div>

      {/* 4. Services Content */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-40 min-h-0 md:min-h-screen snap-start md:snap-none md:translate-y-full order-4"
        ref={servicesRef}
      >
        <Services />
      </div>

      {/* 5. Approach Content */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-50 min-h-0 md:min-h-screen snap-start md:snap-none md:translate-y-full order-5"
        ref={approachRef}
      >
        <Approach />
      </div>

      {/* 6. Conditions Content */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[60] min-h-0 md:min-h-screen snap-start md:snap-none md:translate-y-full order-6"
        ref={conditionsRef}
      >
        <ConditionsWeSupport />
      </div>

      {/* 7. Meet Our Team Content */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[70] min-h-0 md:min-h-screen snap-start md:snap-none md:translate-y-full order-7"
        ref={meetTeamRef}
      >
        <MeetOurTeam />
      </div>

      {/* 8. Contact Content */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[80] min-h-0 md:min-h-screen snap-start md:snap-none md:translate-y-full order-8"
        ref={contactRef}
      >
        <Contact />
      </div>

      {/* 9. FAQ Content */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[90] min-h-0 md:min-h-screen snap-start md:snap-none md:translate-y-full order-9"
        ref={faqRef}
      >
        <FrequentlyAsked />
      </div>

      {/* 10. Footer Content - LAST */}
      <div
        className="relative md:absolute top-0 left-0 w-full z-[100] min-h-0 md:min-h-screen snap-start md:snap-none md:translate-y-full order-10"
        ref={footerRef}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Hero;