import React, { useLayoutEffect, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../ui/MainButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);
  const doodleOverlayRef = useRef(null);
  const overlayRef = useRef(null);
  const splashTitleRef = useRef(null);
  const splashOverlayRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);

  const bgImageRef = useRef(null);

  // Calculate Aspect Ratio Box - Standardized to CENTER alignment
  const updateDoodleContainer = useCallback(() => {
    if (!imageContainerRef.current || !doodleOverlayRef.current) return;

    // Get Parent Dimensions (Layout Size, ignoring Transforms)
    const pW = imageContainerRef.current.offsetWidth;
    const pH = imageContainerRef.current.offsetHeight;

    // Get Aspect Ratio
    let aspect = 16 / 9;
    if (bgImageRef.current && bgImageRef.current.naturalWidth) {
      aspect =
        bgImageRef.current.naturalWidth / bgImageRef.current.naturalHeight;
    } else {
      const isMobile = window.innerWidth < 768;
      aspect = isMobile ? 9 / 16 : 16 / 9;
    }

    let w, h, top, left;

    // Object-Cover Logic
    w = pW;
    h = w / aspect;

    if (h < pH) {
      h = pH;
      w = h * aspect;
    }

    // Always Bottom Align (Matching object-bottom CSS per user request)
    top = pH - h;
    left = (pW - w) / 2;

    gsap.set(doodleOverlayRef.current, {
      width: w,
      height: h,
      top: top,
      left: left,
      position: "absolute",
      overwrite: "auto",
    });
  }, []);

  useEffect(() => {
    // Run on every frame to handle Resize + Scroll Scrub Lag perfectly
    gsap.ticker.add(updateDoodleContainer);
    return () => {
      gsap.ticker.remove(updateDoodleContainer);
    };
  }, [updateDoodleContainer]);

  const doodles = [
    {
      id: "star",
      src: "/images/Hero/star.png",
      alt: "Star Doodle",
      className: "animate-pulse",
      top: 76.01,
      left: 48.65,
      width: 4,
      scale: 1.4,
      rotation: -11,
    },
    {
      id: "circle",
      src: "/images/Hero/AroundCircle.png",
      alt: "Circle Doodle",
      className: "opacity-80",
      top: 66.3,
      left: 25.52,
      width: 50,
      scale: 0.45,
      rotation: 0,
      isCentered: false,
    },
    {
      id: "heart",
      src: "/images/Hero/love.png",
      alt: "Heart Doodle",
      className: "opacity-90",
      top: 73.15,
      left: 57.92,
      width: 3,
      scale: 1,
      rotation: 0,
    },
    {
      id: "heart-2",
      src: "/images/Hero/love.png",
      alt: "Heart Doodle",
      className: "opacity-90",
      top: 69.66,
      left: 39.87,
      width: 3,
      scale: 1,
      rotation: -44,
    },
    {
      id: "white-circle",
      src: "/images/Hero/white cricel.png",
      alt: "White Circle Doodle",
      className: "opacity-60",
      top: 79.21,
      left: 51.9,
      width: 8,
      scale: 0.8,
      rotation: 0,
    },
    {
      id: "boy-head",
      src: "/images/Hero/Boy_Head.png",
      alt: "Boy Head Doodle",
      className: "",
      top: 61.94,
      left: 43.49,
      width: 6,
      scale: 1.25,
      rotation: 0,
    },
    {
      id: "girl-head",
      src: "/images/Hero/Girl_Head.png",
      alt: "Girl Head Doodle",
      className: "",
      top: 67.36,
      left: 52.04,
      width: 6,
      scale: 1,
      rotation: 0,
    },
  ];

  // ---------------------------

  // Existing GSAP Logic (LayoutEffect)...
  useLayoutEffect(() => {
    // ... (Existing GSAP Code, ensure it targets .hero-doodles children if generic, or we add classNames)
    // Since we replace the doodle render, we must ensure class "hero-doodles" exists.
    const ctx = gsap.context(() => {
      // ... MatchMedia ...
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // ... existing setup ...
        gsap.set(overlayRef.current, { y: "-100%" });
        gsap.set(imageContainerRef.current, {
          inset: 0,
          top: 0,
          height: "100%",
          scale: 1.5,
          transformOrigin: "bottom center",
        });

        const navbar = document.querySelector(".main-navbar");
        if (navbar) gsap.set(navbar, { autoAlpha: 0 });
        gsap.set(".hero-doodles", { autoAlpha: 0 }); // Hidden initially (in Splash)
        gsap.set(".hero-footer-caption", { autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            onUpdate: updateDoodleContainer, // Sync doodles with scroll animation
          },
        });

        // ... Timeline animations ...
        tl.to(splashOverlayRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        });

        // Reveal Doodles as Splash fades (Scale is still 1.5 here)
        tl.to(".hero-doodles", { autoAlpha: 1, duration: 0.1 }, "<");

        // "Big to Small" Animation synced with scroll
        // Starts at Scale 5 (huge) -> Shrinks to natural scale defined in style prop
        tl.from(
          ".hero-doodles img",
          {
            scale: 5,
            opacity: 0,
            duration: 2, // Matches the image zoom duration
            stagger: 0.05,
            ease: "power2.out",
          },
          "<"
        );

        tl.to(
          splashTitleRef.current,
          { opacity: 0, y: -100, scale: 0.9, duration: 1, ease: "power1.out" },
          "<"
        );
        if (navbar)
          tl.to(
            navbar,
            { autoAlpha: 1, duration: 1, ease: "power1.inOut" },
            "<+=0.5"
          );

        tl.to(
          imageContainerRef.current,
          {
            top: "55vh",
            height: "45vh",
            scale: 1,
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        );
        tl.to(
          overlayRef.current,
          { y: "0%", duration: 2, ease: "power2.inOut" },
          "<"
        );

        tl.from(
          [".hero-text-item", ".hero-description", ".hero-button"],
          { y: 20, opacity: 0, stagger: 0.1, duration: 1 },
          "-=0.5"
        );

        tl.to([".hero-footer-caption"], { autoAlpha: 1, duration: 1 }, "-=1");
        tl.from(socialRef.current, { x: 50, opacity: 0, duration: 1 }, "-=1");
      });
    }, heroRef);
    return () => ctx.revert();
  }, []); // End LayoutEffect

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen md:h-screen bg-background overflow-x-hidden md:overflow-hidden flex flex-col md:block"
    >
      {/* ------------------------------------------ */}

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
            ref={bgImageRef}
            src="/images/Hero/HeroMobBg.png"
            alt="Children Playing"
            className="w-full h-full object-cover object-bottom"
            onLoad={updateDoodleContainer}
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

      {/* Content Section - Mobile: Top, Desktop: Top Half White Overlay */}
      {/* Initial Desktop: y: -100% (hidden up) */}
      <div
        ref={overlayRef}
        className="relative z-10 w-full flex flex-col items-start pt-28 px-6 md:absolute md:top-0 md:left-0 md:h-[55vh] md:bg-white md:pt-[75px] md:justify-center md:items-start md:px-12 lg:px-24 order-1 shadow-xl"
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
