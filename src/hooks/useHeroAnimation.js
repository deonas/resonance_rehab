import { useLayoutEffect, useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { updateDoodleContainer } from "../utils/doodleUtils";

// Fix 1 & 2: Safe Registration in Client Check (though top-level is ok, this is safer per user request)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const updateUrl = (path) => {
  if (typeof window !== "undefined" && window.location.pathname !== path) {
    window.history.replaceState(null, "", path);
  }
};


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
  whyChooseUsRef,
  servicesRef,
  approachRef,
  conditionsRef,
  meetTeamRef,
  contactRef,
  faqRef,
  footerRef,
}) => {
  const handleResize = useCallback(() => {
    updateDoodleContainer(
      imageContainerRef.current,
      doodleOverlayRef.current,
      bgImageRef.current
    );
  }, []);

  const contextRef = useRef(null); // Ref to store the GSAP context
  const timelineRef = useRef(null); // Ref to store the timeline



  const scrollToSection = useCallback((path, behavior = 'smooth') => {
    if (!timelineRef.current || !timelineRef.current.scrollTrigger) return;
    
    let label;
    switch(path) {
      case '/': label = 'hero'; break;
      case '/home': label = 'home'; break;
      case '/About-us': label = 'about'; break;
      case '/Why-choose-us': label = 'whyChooseUs'; break;
      case '/Services': label = 'services'; break;
      case '/approach': label = 'approach'; break;
      case '/conditions': label = 'conditions'; break;
      case '/meet-our-team': label = 'meetTeam'; break;
      case '/contact': label = 'contact'; break;
      case '/frequently-asked': label = 'faq'; break;
      case '/footer': label = 'footer'; break;
      default: return;
    }

    try {
        const scrollPos = timelineRef.current.scrollTrigger.labelToScroll(label);
        if (scrollPos !== undefined) {
             window.scrollTo({ top: scrollPos, behavior });
        }
    } catch (e) {
        // Silently handle scroll errors in production
    }
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
        if (navbar) gsap.set(navbar, { autoAlpha: 0 });
        gsap.set(".hero-doodles", { autoAlpha: 0 });
        gsap.set(".hero-footer-caption", { autoAlpha: 0 });
        
        // Initialize About Us state (hidden initially in Hero sequence, visible in standalone)
        gsap.set(aboutRef.current, { opacity: 0, y: 50 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=5500%", // Extended for Contact, FAQ & Footer
            scrub: 1,
            pin: true,
            onUpdate: () => updateDoodleContainer(
                 imageContainerRef.current,
                 doodleOverlayRef.current,
                 bgImageRef.current
            ),
          },
        });
        timelineRef.current = tl;

        tl.addLabel("hero");

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
        
        // Add callback to update URL to home when reversing back to this point
        tl.call(() => updateUrl("/"), null, "<");

        tl.from(
          [".hero-text-item", ".hero-description", ".hero-button"],
          { y: 20, opacity: 0, stagger: 0.1, duration: 1 },
          "-=0.5"
        );

        tl.to([".hero-footer-caption"], { autoAlpha: 1, duration: 1 }, "-=1");
        tl.from(socialRef.current, { x: 50, opacity: 0, duration: 1 }, "-=1");

        tl.addLabel("home"); // Label for /home route - after splash, showing hero content

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
             zIndex: 10, // Force z-index to ensure visibility
             opacity: 1, // Ensure opacity is full
             duration: 1.5,
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
            { opacity: 1, y: 0, duration: 3, ease: "power2.out" },
            "<+=0.5"
         );
         
         tl.addLabel("about");
         tl.call(() => updateUrl("/About-us"), null, "<");
         
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

         // --- Step 4: Why Choose Us Card Stack ---
         tl.to(whyChooseUsRef.current, {
           y: "0%",
           duration: 2,
           ease: "power2.out",
           pointerEvents: "all"
         });

         tl.addLabel("whyChooseUs");
         tl.call(() => updateUrl("/Why-choose-us"), null, "<");
 


         // --- Step 5: Services Card Stack ---
         tl.to(servicesRef.current, {
           y: "0%",
           duration: 2,
           ease: "power2.out",
           pointerEvents: "all"
         });

         tl.addLabel("services");
         tl.call(() => updateUrl("/Services"), null, "<");

         // --- Step 5.4: Vertical Scroll for CONTENT (Parallax) ---
         // Moves the whole content wrapper up
         tl.to(servicesRef.current.querySelector('.services-content-inner'), {
            y: () => {
                const inner = servicesRef.current.querySelector('.services-content-inner');
                const viewHeight = window.innerHeight;
                if (!inner) return 0;
                
                // Scroll up enough to show bottom, maybe align bottom to bottom of viewport?
                const innerHeight = inner.offsetHeight;
                
                // If larger than viewport, scroll diff
                if (innerHeight > viewHeight) {
                    return -(innerHeight - viewHeight + 100); // +100 padding
                }
                return 0; // Or standard parallax amount
            },
            duration: 2,
            ease: "none"
         });

         // --- Step 5.5: Horizontal Scroll for Services Cards ---
         tl.to(
             servicesRef.current.querySelector('.services-track'), 
             {
                 x: () => {
                     const track = servicesRef.current.querySelector('.services-track');
                     const container = servicesRef.current.querySelector('.hide-scrollbar');
                     if (!track || !container) return 0;
                     const scrollAmount = track.scrollWidth - container.clientWidth;
                     return -scrollAmount > 0 ? 0 : -scrollAmount;
                 },
                 duration: 4, 
                 ease: "none"
             }
         );


         // --- Step 6: Approach Card Stack ---
         tl.to(approachRef.current, {
           y: "0%",
           duration: 2,
           ease: "power2.out",
           pointerEvents: "all"
         });

         tl.addLabel("approach");
         tl.call(() => updateUrl("/approach"), null, "<");

         // --- Scale In for Approach Circles ---
         tl.from(approachRef.current.querySelector('.approach-circles'), {
            scale: 0.5,
            opacity: 0, 
            duration: 2,
            ease: "power2.out"
         }, "<+=1");

         // --- Step 6.1: Vertical Scroll for Approach Content ---
         tl.to(approachRef.current.querySelector('.approach-content-inner'), { 
            y: () => {
                const container = approachRef.current.querySelector('.approach-content-inner');
                if (!container) return 0;
                
                const rect = container.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                
                // Current Top is rect.top
                // Target: We want the Bottom of the container to be at viewHeight - 100 (padding)
                // If container bottom is already above target, no scroll needed.
                
                // But container is pinned, so logic:
                // We want to translate it UP by X so that:
                // (rect.bottom - X) <= viewHeight - 100
                // X >= rect.bottom - (viewHeight - 100)
                
                const currentBottom = rect.bottom;
                const targetBottom = viewHeight - 100;
                
                if (currentBottom > targetBottom) {
                    return -(currentBottom - targetBottom);
                }
                return 0;
            },
            duration: 8, // Increase duration to give user more scroll distance to read
            ease: "none"
         });

         // --- Step 6.2: Rotate Circles on Scroll ---
         tl.to(approachRef.current.querySelector('.approach-circles'), {
            rotation: 120, // Rotate 120 degrees during the scroll
            duration: 8, // Match the content scroll duration
            ease: "none"
         }, "<"); // Synced with content scroll


         // --- Step 7: Conditions Card Stack (Slide Up) ---
         tl.to(conditionsRef.current, {
           y: "0%",
           duration: 2,
           ease: "power2.inOut",
           pointerEvents: "all"
         });


         tl.addLabel("conditions");
         tl.call(() => updateUrl("/conditions"), null, "<");

         // --- Step 7.1: Vertical Scroll for Conditions Content ---
         tl.to(conditionsRef.current.querySelector('.conditions-content-inner'), {
            y: () => {
                const container = conditionsRef.current.querySelector('.conditions-content-inner');
                if (!container) return 0;
                
                const rect = container.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                
                // Similar logic to Approach: Scroll until bottom meets target
                // Since this runs AFTER the section has slid up (y=0), we can rely on layout height
                // However, getBoundingClientRect might be tricky if it's off-screen or scaled.
                // But simplified:
                const containerHeight = container.offsetHeight;
                
                if (containerHeight > viewHeight) {
                     return -(containerHeight - viewHeight + 150); // +150 padding/footer
                }
                return 0;
            },
            duration: 8, // Extended scroll for long content
            ease: "none"
         });

         // --- Step 8: Meet Our Team Card Stack (Slide Up) ---
         tl.to(meetTeamRef.current, {
           y: "0%", 
           duration: 2,
           ease: "power2.inOut", 
           pointerEvents: "all"
         });


         tl.addLabel("meetTeam");
         tl.call(() => updateUrl("/meet-our-team"), null, "<");
         //8.1
          tl.to(meetTeamRef.current.querySelector('.container-custom'), {
            y: () => {
                const container = meetTeamRef.current.querySelector('.container-custom');
                if (!container) return 0;
                
                const containerHeight = container.offsetHeight;
                const viewHeight = window.innerHeight;
                
                // Calculate scroll needed to show the bottom of content (including button)
                // We want bottom of container to align near bottom of viewport
                if (containerHeight > viewHeight) {
                     return -(containerHeight - viewHeight + 100); // +100 padding for breathing room
                }
                return 0;
            },
            duration: 8, // Smooth scroll duration
            ease: "none"
         });

         // --- Step 9: Contact Card Stack (Slide Up) ---
         tl.to(contactRef.current, {
           y: "0%", 
           duration: 2,
           ease: "power2.inOut", 
           pointerEvents: "all"
         });


         tl.addLabel("contact");
         tl.call(() => updateUrl("/contact"), null, "<");

         // --- Step 10: FAQ Card Stack (Slide Up) ---
         tl.to(faqRef.current, {
           y: "0%",
           duration: 2,
           ease: "power2.inOut",
           pointerEvents: "all"
         });

         
         tl.addLabel("faq");
         tl.call(() => updateUrl("/frequently-asked"), null, "<");

         // --- Step 10.1: Vertical Scroll for FAQ Content ---
         tl.to(faqRef.current.querySelector('.container-custom'), {
            y: () => {
                const container = faqRef.current.querySelector('.container-custom');
                if (!container) return 0;
                
                const containerHeight = container.offsetHeight;
                const viewHeight = window.innerHeight;
                
                if (containerHeight > viewHeight) {
                     return -(containerHeight - viewHeight + 150); // +150 padding/footer
                }
                return 0;
            },
            duration: 8, // Extended scroll for long content
            ease: "none"
         });

         // --- Step 11: Footer Card Stack (Slide Up) ---
         tl.to(footerRef.current, {
           y: "0%",
           duration: 2,
           ease: "power2.inOut",
           pointerEvents: "all"
         });
         // Scale down FAQ for stack effect (optional, matches previous pattern)
        //  tl.to(faqRef.current, {
        //    scale: 0.95,
        //    filter: "brightness(0.8)",
        //    duration: 2,
        //    ease: "power2.out"
        //  }, "<");

         tl.addLabel("footer");
         tl.call(() => updateUrl("/footer"), null, "<");

         // --- Step 12: Release Scroll (End of Stack) ---
         // Allow Hero to grow and Footer to flow naturally
         tl.set(heroRef.current, { 
             height: "auto", 
             overflow: "visible" 
         });
         tl.set(footerRef.current, { 
             position: "relative",
             height: "auto",
             overflow: "visible"
         });

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
         const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: heroContainer,
                start: "top top",
                end: "+=600%", // Scroll 7 viewport heights
                scrub: 0.5,   // Sync with scroll
                pin: true,     // Pin the Hero
                anticipatePin: 1, // Smooth pinning
                invalidateOnRefresh: true, // Recalculate on resize/refresh
            }
         });

         if (aboutContainer) {
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

   if (whyChooseUsRef.current) {
    // Init WhyChooseUs for Mobile
    gsap.set(whyChooseUsRef.current, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100dvh",
        zIndex: 30,
        y: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "#e8e6f3"
    });

    // Slide WhyChooseUs Up (Card Stack)
    scrollTl.to(whyChooseUsRef.current, {
        y: "0%",
        ease: "none"
    });
}
    // Hold the section in place for scrolling through content
/*     scrollTl.to({}, { duration: 5 }); // Gives time to scroll internally
} */
         if (servicesRef.current) {
             // Init Services for Mobile
             gsap.set(servicesRef.current, {
                 position: "absolute",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100dvh",
                 zIndex: 40,
                 y: "100%",
                 overflowY: "auto",   
        overflowX: "visible", 
        backgroundColor: "#e8e6f3"
             });

             // Slide Services Up (Card Stack)
             scrollTl.to(servicesRef.current, {
                 y: "0%",
                 ease: "none"
             });
         }

         if (approachRef.current) {
             // Init Approach for Mobile
             gsap.set(approachRef.current, {
                 position: "absolute",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100dvh",
                 zIndex: 50,
                 y: "100%",
                 overflowY: "auto",    
        overflowX: "hidden",   
        backgroundColor: "#e8e6f3" 
             });

             // Slide Approach Up (Card Stack)
             scrollTl.to(approachRef.current, {
                 y: "0%",
                 ease: "none"
             });
         }

         if (conditionsRef.current) {
             // Init Conditions for Mobile
             gsap.set(conditionsRef.current, {
                 position: "absolute",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100dvh",
                 zIndex: 60,
                 y: "100%",
                 overflowY: "auto",      
        overflowX: "hidden",   
        backgroundColor: "#e8e6f3"
             });

             // Slide Conditions Up (Card Stack)
             scrollTl.to(conditionsRef.current, {
                 y: "0%",
                 ease: "none"
             });
         }

         if (meetTeamRef.current) {
             // Init MeetTeam for Mobile
             gsap.set(meetTeamRef.current, {
                 position: "absolute",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100dvh",
                 zIndex: 70,
                 y: "100%",
                 overflowY: "auto",      
        overflowX: "hidden",
        backgroundColor: "#e8e6f3"
             });

             // Slide MeetTeam Up (Card Stack)
             scrollTl.to(meetTeamRef.current, {
                 y: "0%",
                 ease: "none"
             });
         }

         if (contactRef.current) {
             // Init Contact for Mobile
             gsap.set(contactRef.current, {
                 position: "absolute",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100dvh",
                 zIndex: 80,
                 y: "100%",
                 overflow: "hidden"
             });

             // Slide Contact Up (Card Stack)
             scrollTl.to(contactRef.current, {
                 y: "0%",
                 ease: "none"
             });
         }

         if (faqRef.current) {
             // Init FAQ for Mobile
             gsap.set(faqRef.current, {
                 position: "absolute",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100dvh",
                 zIndex: 90,
                 y: "100%",
                 overflowY: "auto",      
        overflowX: "hidden",
        backgroundColor: "#e8e6f3"
             });

             // Slide FAQ Up (Card Stack)
             scrollTl.to(faqRef.current, {
                 y: "0%",
                 ease: "none"
             });
         }

         if (footerRef.current) {
             // Init Footer for Mobile
             gsap.set(footerRef.current, {
                 position: "absolute",
                 top: 0,
                 left: 0,
                 width: "100%",
                 height: "100dvh",
                 zIndex: 100,
                 y: "100%",
                 overflow: "hidden"
             });

             // Slide Footer Up (Card Stack)
             scrollTl.to(footerRef.current, {
                 y: "0%",
                 ease: "none"
             });
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

  return { handleResize, scrollToSection };
};
