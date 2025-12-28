import { useLayoutEffect, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { updateDoodleContainer } from "../utils/doodleUtils";

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = ({
  heroRef,
  imageContainerRef,
  doodleOverlayRef,
  overlayRef,
  splashTitleRef,
  splashOverlayRef,
  socialRef,
  bgImageRef,
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
    const tickerCallback = () => {
         updateDoodleContainer(
            imageContainerRef.current,
            doodleOverlayRef.current,
            bgImageRef.current
        );
    }
    gsap.ticker.add(tickerCallback);
    return () => {
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  useLayoutEffect(() => {
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
        if (navbar) gsap.set(navbar, { autoAlpha: 0 });
        gsap.set(".hero-doodles", { autoAlpha: 0 });
        gsap.set(".hero-footer-caption", { autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=150%",
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
  }, []);

  return { handleResize };
};
