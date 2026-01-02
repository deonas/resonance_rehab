import { useLayoutEffect, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { updateDoodleContainer } from "../utils/doodleUtils";

// Fix 1 & 2: Safe Registration in Client Check (though top-level is ok, this is safer per user request)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useHeroAnimation = ({
  heroRef,
  imageContainerRef,
  doodleOverlayRef,
  overlayRef,
  splashTitleRef,
  splashOverlayRef,
  socialRef,
  bgImageRef,
  aboutRef,
}) => {
  const handleResize = useCallback(() => {
    updateDoodleContainer(
      imageContainerRef.current,
      doodleOverlayRef.current,
      bgImageRef.current
    );
  }, []);

  useEffect(() => {
    // Run on every frame to handle Resize + Scroll Scrub Lag perfectly
    // Only run on desktop (768px+) to avoid unnecessary computations on mobile
    const tickerCallback = () => {
      if (window.innerWidth >= 768) {
        updateDoodleContainer(
          imageContainerRef.current,
          doodleOverlayRef.current,
          bgImageRef.current
        );
      }
    };
    gsap.ticker.add(tickerCallback);
    return () => {
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  useLayoutEffect(() => {
    // Fix 2: Safety check for SSR/Window (redundant for useLayoutEffect but requested)
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(overlayRef.current, { y: "-100%" });
        gsap.set(imageContainerRef.current, {
          inset: 0,
          top: 0,
          height: "100%",
          scale: 1.5,
          transformOrigin: "bottom center",
        });

        const navbar = document.querySelector(".main-navbar");
        const navLogo = document.querySelector(".main-navbar a");
        const navHamburgerLines = document.querySelectorAll(".main-navbar button span");
        const PRIMARY_COLOR = "#19083B";

        if (navbar) gsap.set(navbar, { autoAlpha: 0 });
        gsap.set(".hero-doodles", { autoAlpha: 0 });
        gsap.set(".hero-footer-caption", { autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=300%", // Extended for About Us section
            scrub: 1,
            pin: true,
            onUpdate: () => updateDoodleContainer(
                 imageContainerRef.current,
                 doodleOverlayRef.current,
                 bgImageRef.current
            ),
          },
        });

        tl.to(splashOverlayRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        });

        tl.to(".hero-doodles", { autoAlpha: 1, duration: 0.1 }, "<");

        tl.from(
          ".hero-doodles img",
          {
            scale: 5,
            opacity: 0,
            duration: 2,
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

        // --- Step 1: Image moves to Middle/Bottom (Hero State) ---
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

        // --- Step 2: Transition to About Us (Image Bottom -> Top) ---
        // Fade out Hero Content AND Container (to remove white bg)
        tl.to(
             [overlayRef.current, ".hero-text-item", ".hero-description", ".hero-button", ".hero-footer-caption", socialRef.current],
             { opacity: 0, y: -50, duration: 1, stagger: 0.1 }
        );

        // Move Image to Top (30vh height as requested for About Us pattern)
        tl.to(imageContainerRef.current, {
             top: "0%",
             height: "40vh", // Using 40vh as requested in Step 211
             zIndex: 5, // Force z-index to ensure visibility
             opacity: 1, // Ensure opacity is full
             duration: 2,
             ease: "power2.inOut"
        }, "<");

        // Turn Navbar ITEMS White (Text & Hamburger Lines)
        if (navbar) {
             if (navLogo) {
                 tl.to(navLogo, { color: "#ffffff", duration: 1, ease: "power2.inOut" }, "<");
             }
             if (navHamburgerLines.length > 0) {
                 tl.to(navHamburgerLines, { backgroundColor: "#ffffff", duration: 1, ease: "power2.inOut" }, "<");
             }
        }

        // Move White Background Up (if necessary, or just let About content slide over)
        // Here we slide the About Content Up (Reveal)
         tl.to(
            aboutRef.current,
            { opacity: 1, y: 0, duration: 2, ease: "power2.out", pointerEvents: "all" },
            "<+=0.5"
         );
         
         // --- Step 3: Scroll Content UP to Cover Image (Parallax) ---
         // Image stays fixed. Content scrolls OVER it.
         tl.to(aboutRef.current, {
            y: () => {
                const aboutHeight = aboutRef.current ? aboutRef.current.offsetHeight : 0;
                const viewHeight = window.innerHeight;
                // We want to scroll up until Bottom touches Viewport Bottom.
                // Target Y = 0.6 * viewHeight - aboutHeight;
                // Make sure we at least cover the image (-40vh).
                const minScroll = -0.4 * viewHeight;
                const fullScroll = 0.6 * viewHeight - aboutHeight;
                // We want the GREATER magnitude of scroll (more negative).
                // Actually min() of negative numbers gives the more negative one.
                return Math.min(minScroll, fullScroll);
            },
            duration: 2,
            ease: "none" // Linear feel for scrolling
         });

         // Animate INNER Content Padding to create headspace
         // This ensures background stays full, but text moves down
         tl.to(".about-content-inner", {
             paddingTop: "10rem",
             duration: 2,
             ease: "none"
         }, "<");

         // Revert Navbar Colors to Primary as content covers image
         if (navLogo) {
            tl.to(navLogo, { color: PRIMARY_COLOR, duration: 2, ease: "none" }, "<");
         }
         if (navHamburgerLines.length > 0) {
            tl.to(navHamburgerLines, { backgroundColor: PRIMARY_COLOR, duration: 2, ease: "none" }, "<");
         }
      });
      
      // Fix: Adjusted subpixel precision coverage
      mm.add("(max-width: 767.98px)", () => {
         // Setup
         const navbar = document.querySelector(".main-navbar");
         const heroContainer = heroRef.current;
         const aboutContainer = aboutRef.current; // The AboutUs component ref

         // --- Initial State for Mobile SCROLL Animation ---
         // 1. Ensure Hero is full height and locked
         gsap.set(heroContainer, { 
             height: "100dvh", // Use dynamic viewport height
             overflow: "hidden", // Prevent inner scroll
             overscrollBehavior: "none" // Prevent bounce
         });

         // 2. Position About Section: 
         //    - Absolute top:0 to sit on top of Hero (dom-wise)
         //    - y: "100%" to be pushed down off-screen initially
         //    - zIndex: 20 to slide OVER hero content
         if (aboutContainer) {
             gsap.set(aboutContainer.parentElement, { // Target the wrapper div in Hero.jsx
                 position: "absolute",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100dvh", // Use dynamic viewport height
                 zIndex: 20,
                 y: "100%",
                 overflow: "hidden", // Prevent inner scroll
                 overscrollBehavior: "none"
             });
             // Ensure About container itself is full height
             gsap.set(aboutContainer, { 
                 height: "100dvh",
                 overflow: "hidden" 
             });
         }

         // Set initial state - keep entry fade logic
         // ... (rest of opacity sets)

         if (navbar) gsap.set(navbar, { autoAlpha: 0 });
         
         // Auto-Play Entry - Animate entire page as one unit
         const entryTl = gsap.timeline();
         
         // Fade out splash
         entryTl.to(splashOverlayRef.current, { opacity: 0, duration: 1, delay: 0.5 })
                .to(splashTitleRef.current, { opacity: 0, y: -50, scale: 0.9, duration: 1 }, "<");
         
         // Fade in Hero Content
         const heroChildren = heroContainer.querySelectorAll(':scope > *:not(.hero-splash)');
         entryTl.to(heroChildren, { 
             opacity: 1, 
             duration: 0.8, 
             ease: "power2.out" 
         }, "-=0.3");
         
         // Show navbar
         if (navbar) entryTl.to(navbar, { autoAlpha: 1, duration: 0.5 }, "<");
         
         // --- Mobile Scroll Transition Logic ---
         if (aboutContainer) {
             const scrollTl = gsap.timeline({
                 scrollTrigger: {
                     trigger: heroContainer,
                     start: "top top",
                     end: "+=100%", // Scroll 1 viewport height to transition
                     scrub: true,   // Sync with scroll
                     pin: true,     // Pin the Hero
                     anticipatePin: 1, // Smooth pinning
                     invalidateOnRefresh: true, // Recalculate on resize/refresh
                 }
             });

             // Slide About Up (y: 100% -> 0%)
             // Hero stays pinned underneath, creating the overlay effect.
             scrollTl.to(aboutContainer.parentElement, {
                 y: "0%",
                 ease: "none" // Linear movement linked to scroll
             });

             // Animate Navbar to White for visibility over About Section
             const navLogo = document.querySelector(".main-navbar a");
             const navHamburgerLines = document.querySelectorAll(".main-navbar button span");

             if (navLogo) {
               scrollTl.to(navLogo, { color: "#ffffff", ease: "none" }, "<");
             }
             if (navHamburgerLines.length > 0) {
               scrollTl.to(navHamburgerLines, { backgroundColor: "#ffffff", ease: "none" }, "<");
             }
         }
      });
      
      // Force refresh after a short delay to ensure everything is settled in Prod
      setTimeout(() => ScrollTrigger.refresh(), 500);
      setTimeout(() => ScrollTrigger.refresh(), 2000); // Safety fallback

    }, heroRef);
    
    // Add load listener for additional safety
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
        ctx.revert();
        window.removeEventListener("load", handleLoad);
    };
  }, []);

  return { handleResize };
};
