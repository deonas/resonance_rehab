import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../ui/MainButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const splashTitleRef = useRef(null);
  const splashOverlayRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Only enable ScrollTrigger on Desktop
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Set Initial States for Desktop Only
        gsap.set(overlayRef.current, { y: "-100%" }); // Hide overlay up
        gsap.set(imageContainerRef.current, {
          inset: 0,
          top: 0,
          height: "100%",
        }); // Full screen image

        // Navbar is a sibling component, so we must select it globally, not scoped to heroRef
        const navbar = document.querySelector(".main-navbar");
        if (navbar) gsap.set(navbar, { autoAlpha: 0 }); // Hide Navbar initially
        gsap.set(".hero-doodles", { autoAlpha: 0 }); // Hide Doodles initially
        gsap.set(".hero-footer-caption", { autoAlpha: 0 }); // Hide Footer Caption initially

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=150%", // Scroll distance to complete animation
            scrub: 1,
            pin: true,
            // markers: true, // Uncomment for debugging
          },
        });

        // Initial States set by CSS/Tailwind (Image full, Overlay hidden up, Splash Title Visible)

        // 1. Splash Text & Overlay Animation
        // Overlay Fades Out
        tl.to(splashOverlayRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        });

        // Title Fades Out & Moves Up
        tl.to(
          splashTitleRef.current,
          {
            opacity: 0,
            y: -100,
            scale: 0.9,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        );

        // 2. Navbar Fades In
        if (navbar) {
          tl.to(
            navbar,
            {
              autoAlpha: 1,
              duration: 1,
              ease: "power1.inOut",
            },
            "<+=0.5"
          );
        }

        // 3. Image Moves/Scales to Bottom Position
        // Animate container to top: 55vh, height: 45vh
        tl.to(
          imageContainerRef.current,
          {
            top: "55vh",
            height: "45vh",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        );

        // 4. White Overlay Slides Down
        // Initial: y: -100%. Target: y: 0%
        tl.to(
          overlayRef.current,
          {
            y: "0%",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        );

        // 5. Content Reveals
        tl.from(
          [".hero-text-item", ".hero-description", ".hero-button"],
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
          },
          "-=0.5"
        );

        // 6. Doodles, Social Icons & Footer Caption Reveal
        tl.to(
          [".hero-doodles", ".hero-footer-caption"],
          {
            autoAlpha: 1,
            duration: 1,
          },
          "-=1"
        );

        tl.from(
          socialRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen bg-background overflow-hidden flex flex-col md:block"
    >
      {/* Splash Title (Desktop Only) */}
      <div className="hidden md:flex absolute inset-0 z-40 items-center justify-center pointer-events-none">
        {/* Gradient Overlay */}
        <div
          ref={splashOverlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"
        />
        <h1
          ref={splashTitleRef}
          className="relative z-10 font-editorial italic text-white text-6xl tracking-wide drop-shadow-md"
        >
          Resonance Rehab
        </h1>
      </div>

      {/* Image Section */}
      {/* Initial Desktop: Absolute, Inset-0 (Full Screen). Scroll triggers move to bottom. */}
      <div
        ref={imageContainerRef}
        className="relative flex-1 w-full mt-[-20px] md:mt-0 md:absolute md:inset-0 md:z-0 order-2"
        // Style removed, handled by GSAP matchMedia or fallback classes
      >
        {/* Background Image */}
        <picture className="w-full h-full block">
          <source media="(min-width: 768px)" srcSet="/images/Hero.png" />
          <img
            src="/images/Hero/HeroMobBg.png"
            alt="Children Playing"
            className="w-full h-full object-cover object-top md:object-center"
          />
        </picture>

        {/* Desktop Social Icons (Right) */}
        <div
          ref={socialRef}
          className="hidden md:flex flex-col absolute right-8 top-1/2 -translate-y-1/2 gap-6 z-30"
        >
          {["Linkedin", "X", "Insta", "fb", "Whatsapp", "Mail"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="social-icon-link hover:scale-110 transition-transform"
            >
              <img
                src={`/icons/${icon}.svg`}
                alt={icon}
                className="w-5 h-5 opacity-80 hover:opacity-100"
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

        {/* Doodles Overlay */}
        <div className="hero-doodles absolute inset-0 pointer-events-none md:z-20">
          {/* Star */}
          <img
            src="/images/Hero/star.png"
            alt="Star Doodle"
            className="absolute top-[20%] left-[10%] w-8 h-8 md:w-12 md:h-12 animate-pulse"
          />
          {/* Circle around */}
          <img
            src="/images/Hero/AroundCircle.png"
            alt="Circle Doodle"
            className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[90%] md:w-[50%] opacity-80"
          />
          {/* Love/Heart */}
          <img
            src="/images/Hero/love.png"
            alt="Heart Doodle"
            className="absolute top-[30%] right-[15%] w-6 h-6 md:w-10 md:h-10 opacity-90"
          />
          {/* White Circle */}
          <img
            src="/images/Hero/white cricel.png"
            alt="White Circle Doodle"
            className="absolute bottom-[30%] right-[20%] w-16 h-16 md:w-24 md:h-24 opacity-60"
          />
        </div>

        {/* Bottom Caption */}
        <div className="hero-footer-caption absolute bottom-8 w-full text-center px-4 md:text-left md:left-24 md:bottom-12 md:w-auto md:z-20">
          <p className="text-white text-sm md:text-base font-urbanist drop-shadow-md">
            Safe, simple, and supportive therapy,
            <br />
            from our hearts to your home.
          </p>
        </div>
      </div>

      {/* Content Section - Mobile: Top, Desktop: Top Half White Overlay */}
      {/* Initial Desktop: y: -100% (hidden up) */}
      <div
        ref={overlayRef}
        className="relative z-10 w-full flex flex-col items-start pt-28 px-6 pb-8 md:pb-0 md:absolute md:top-0 md:left-0 md:h-[55vh] md:bg-white md:pt-[75px] md:justify-center md:items-start md:px-12 lg:px-24 order-1 shadow-xl"
        // Inline style removed, handled by GSAP
      >
        {/* Reset transform for mobile via CSS if needed, but matchMedia handles logic. 
           Wait, inline style might persist. We should set initial state via GSAP or conditionally apply style. 
           Better: use Tailwind for initial state or let GSAP set it. 
           Actually, for mobile, we want normal flow. `md:translate-y-[-100%]` utility class doesn't exist easily without arbitrary values.
       */}
        <div
          ref={contentRef}
          className="w-full max-w-7xl mx-auto flex flex-col md:items-start"
        >
          <h2 className="text-6xl leading-[0.9] md:text-7xl lg:text-[6rem] font-autumn text-secondary-color font-bold tracking-tight text-left">
            <span className="hero-text-item block md:inline text-primary-color mb-2 md:mb-0 md:mr-4">
              Empowering
            </span>
            <span className="hero-text-item block md:inline-block text-secondary-color font-autumn -rotate-2 transform mt-2 mb-2 md:mt-0 md:mb-0">
              Young Minds,
            </span>
            <br className="hidden md:block" />
            <span className="hero-text-item block md:inline text-primary-color md:mr-4">
              One Step
            </span>
            <span className="hero-text-item block md:inline text-primary-color">
              at a Time.
            </span>
          </h2>

          <p className="hero-description mt-6 text-primary-color/80 text-base md:text-xl md:max-w-lg font-urbanist leading-relaxed text-left">
            Compassionate, certified online therapy for children and teens,
            where every little mind feels understood, supported, and safe to
            grow.
          </p>

          <div className="hero-button relative mt-8 z-30 flex w-full justify-end px-6 md:absolute md:bottom-0 md:right-24 md:translate-y-1/2 md:w-auto md:px-0">
            <MainButton
              onClick={() => navigate("/second-page")}
              className="bg-button-main text-primary-color px-6 py-2 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg"
            >
              Book a Session
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
