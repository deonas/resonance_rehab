import { useLayoutEffect, useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { updateDoodleContainer } from "@/shared/utils/doodleUtils";

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

        // FIX: Animate About Wrapper to move UP to attach to the image (40vh)
        // This closes the 60vh gap that required "scrolling a lot"
        if (aboutRef.current && aboutRef.current.parentElement) {
             tl.to(aboutRef.current.parentElement, {
                 top: "40vh",
                 duration: 1.5,
                 ease: "power2.inOut"
             }, "<");
        }

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

         // Helper for calculating duration based on scroll distance
         const getScrollDuration = (element, padding = 100) => {
            if (!element || typeof window === 'undefined') return 2;
            const height = element.offsetHeight;
            const viewHeight = window.innerHeight;
            const distance = Math.max(0, height - viewHeight + padding);
            if (distance === 0) return 0.1; // Minimal duration if no scroll
            // Factor: 2.5 output units per viewport height of scroll distance
            // Adjust factor to tune speed: Higher = Slower scroll relative to distance
            return Math.max(2, (distance / viewHeight) * 2.5);
         };

         // --- Step 5.4: Vertical Scroll for CONTENT (Parallax) ---
         // Moves the whole content wrapper up
         const servicesContent = servicesRef.current.querySelector('.services-content-inner');
         tl.to(servicesContent, {
            y: () => {
                const inner = servicesRef.current.querySelector('.services-content-inner');
                const viewHeight = window.innerHeight;
                if (!inner) return 0;
                
                const innerHeight = inner.offsetHeight;
                
                if (innerHeight > viewHeight) {
                    return -(innerHeight - viewHeight + 100); 
                }
                return 0; 
            },
            duration: getScrollDuration(servicesContent, 100),
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
         const approachContent = approachRef.current.querySelector('.approach-content-inner');
         
         // Custom duration calculation that accounts for the large top padding
         const getApproachScrollConfig = () => {
             const container = approachRef.current?.querySelector('.approach-content-inner');
             if (!container || typeof window === 'undefined') return { y: 0, duration: 2 };

             const sectionRect = approachRef.current.getBoundingClientRect();
             const containerRect = container.getBoundingClientRect();
             // Determine vertical offset within the section (handles pt-80 etc)
             const relativeTop = containerRect.top - sectionRect.top; // should be positive (~320px)
             
             const viewHeight = window.innerHeight;
             const totalContentHeight = relativeTop + container.offsetHeight;
             
             // Target: Scroll until bottom is safely visible (Keep bottom 20% clear)
             // Using percentage ensures better behavior on small vs large screens
             const targetVisibleBottom = viewHeight * 0.8;
             
             const scrollDistance = Math.max(0, totalContentHeight - targetVisibleBottom);
             
             // Duration Factor: 2.5s per viewport of scroll
             const duration = Math.max(2, (scrollDistance / viewHeight) * 2.5);
             
             return { y: -scrollDistance, duration };
         };

         const approachConfig = getApproachScrollConfig();
         const approachDuration = approachConfig.duration;
         
         tl.to(approachContent, { 
            y: () => getApproachScrollConfig().y,
            duration: approachDuration, 
            ease: "none"
         });

         // --- Step 6.2: Rotate Circles on Scroll ---
         tl.to(approachRef.current.querySelector('.approach-circles'), {
            rotation: 120, 
            duration: approachDuration, // Synced with content
            ease: "none"
         }, "<");


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
         const conditionsContent = conditionsRef.current.querySelector('.conditions-content-inner');
         tl.to(conditionsContent, {
            y: () => {
                const container = conditionsRef.current.querySelector('.conditions-content-inner');
                if (!container) return 0;
                
                const containerHeight = container.offsetHeight;
                const viewHeight = window.innerHeight;
                
                if (containerHeight > viewHeight) {
                     return -(containerHeight - viewHeight + 150); 
                }
                return 0;
            },
            duration: getScrollDuration(conditionsContent, 150), 
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
          const meetTeamContent = meetTeamRef.current.querySelector('.container-custom');
          tl.to(meetTeamContent, {
            y: () => {
                const container = meetTeamRef.current.querySelector('.container-custom');
                if (!container) return 0;
                
                const containerHeight = container.offsetHeight;
                const viewHeight = window.innerHeight;
                
                if (containerHeight > viewHeight) {
                     return -(containerHeight - viewHeight + 100); 
                }
                return 0;
            },
            duration: getScrollDuration(meetTeamContent, 100), 
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
         const faqContent = faqRef.current.querySelector('.container-custom');
         tl.to(faqContent, {
            y: () => {
                const container = faqRef.current.querySelector('.container-custom');
                if (!container) return 0;
                
                const containerHeight = container.offsetHeight;
                const viewHeight = window.innerHeight;
                
                // Target: Scroll until bottom is visible with small buffer (10% of viewHeight)
                // This removes the large 150px gap, using proportional spacing instead
                const targetVisibleBottom = viewHeight * 0.9;
                
                if (containerHeight > targetVisibleBottom) {
                    // Scroll exactly enough to bring bottom to target
                     return -(containerHeight - targetVisibleBottom);
                }
                return 0;
            },
            duration: getScrollDuration(faqContent, 100), // Slightly reduced buffer duration
            ease: "none"
         });

         // --- Step 11: Footer Card Stack (Slide Up) ---
         tl.to(footerRef.current, {
           y: "0%",
           duration: 2,
           ease: "power2.inOut",
           pointerEvents: "all"
         });

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
      
      // Mobile: Snap Scroll Between Sections
   
mm.add("(max-width: 767.98px)", () => {
   const navbar = document.querySelector(".main-navbar");
   
   if (navbar) gsap.set(navbar, { autoAlpha: 0 });
   
   // Ensure page starts at top
   window.scrollTo(0, 0);
   
   // CRITICAL: Aggressively remove ALL spacing between sections
   const sections = [
       { ref: aboutRef.current, pt: "0.5rem", pb: "0.5rem" },
       { ref: whyChooseUsRef.current, pt: "0.5rem", pb: "0.5rem" },
       { ref: servicesRef.current, pt: "0.5rem", pb: "0.5rem" },
       { ref: approachRef.current, pt: "0.5rem", pb: "0.5rem" },
       { ref: conditionsRef.current, pt: "0.5rem", pb: "0.5rem" },
       { ref: meetTeamRef.current, pt: "0.5rem", pb: "0.5rem" },
       { ref: contactRef.current, pt: "0.5rem", pb: "0.5rem" },
       { ref: faqRef.current, pt: "0.5rem", pb: "0.5rem" },
       { ref: footerRef.current, pt: "0.5rem", pb: "0.5rem" }
   ];
   
   sections.forEach(({ ref, pt, pb }) => {
       if (ref) {
           gsap.set(ref, { 
               marginTop: "0 !important",
               marginBottom: "0 !important",
               paddingTop: pt,
               paddingBottom: pb,
               clearProps: "min-height" // Remove min-h-screen on mobile
           });
           
           // Target ALL inner containers aggressively
           const allInnerContainers = ref.querySelectorAll('[class*="container"], [class*="pt-"], [class*="pb-"], [class*="py-"], [class*="mt-"], [class*="mb-"], [class*="my-"]');
           allInnerContainers.forEach(container => {
               gsap.set(container, {
                   paddingTop: "0.75rem",
                   paddingBottom: "0.75rem",
                   marginTop: 0,
                   marginBottom: 0
               });
           });
       }
   });
   
   // Force remove spacing on Hero
   if (heroRef.current) {
       gsap.set(heroRef.current, {
           paddingBottom: "0.5rem",
           marginBottom: 0
       });
   }
   
   // Auto-Play Entry Animation
   const entryTl = gsap.timeline();
   entryTl.to(splashOverlayRef.current, { opacity: 0, duration: 1, delay: 0.5 })
          .to(splashTitleRef.current, { opacity: 0, y: -50, scale: 0.9, duration: 1 }, "<");
   
   const heroChildren = heroRef.current.querySelectorAll(':scope > *:not(.hero-splash)');
   entryTl.to(heroChildren, { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");
   
   if (navbar) entryTl.to(navbar, { autoAlpha: 1, duration: 0.5 }, "<");
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