import { useLayoutEffect, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { updateDoodleContainer } from "../utils/doodleUtils";

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
        const navHamburgerLines = document.querySelectorAll(
          ".main-navbar button span"
        );
        const PRIMARY_COLOR = "#19083B";

        if (navbar) gsap.set(navbar, { autoAlpha: 0 });
        gsap.set(".hero-doodles", { autoAlpha: 0 });
        gsap.set(".hero-footer-caption", { autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
            onUpdate: () =>
              updateDoodleContainer(
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

        tl.to(
          [
            overlayRef.current,
            ".hero-text-item",
            ".hero-description",
            ".hero-button",
            ".hero-footer-caption",
            socialRef.current,
          ],
          { opacity: 0, y: -50, duration: 1, stagger: 0.1 }
        );

        tl.to(
          imageContainerRef.current,
          {
            top: "0%",
            height: "45vh",
            zIndex: 5,
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        );

        if (navbar) {
          if (navLogo) {
            tl.to(
              navLogo,
              { color: "#ffffff", duration: 1, ease: "power2.inOut" },
              "<"
            );
          }
          if (navHamburgerLines.length > 0) {
            tl.to(
              navHamburgerLines,
              { backgroundColor: "#ffffff", duration: 1, ease: "power2.inOut" },
              "<"
            );
          }
        }

        tl.to(
          aboutRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
            pointerEvents: "all",
          },
          "<+=0.5"
        );

        tl.to(aboutRef.current, {
          y: () => {
            const aboutHeight = aboutRef.current
              ? aboutRef.current.offsetHeight
              : 0;
            const viewHeight = window.innerHeight;
            const minScroll = -0.45 * viewHeight;
            const fullScroll = 0.55 * viewHeight - aboutHeight;
            return Math.min(minScroll, fullScroll);
          },
          duration: 2,
          ease: "none",
        });

        tl.to(
          ".about-content-inner",
          {
            paddingTop: "10rem",
            duration: 2,
            ease: "none",
          },
          "<"
        );

        if (navLogo) {
          tl.to(
            navLogo,
            { color: PRIMARY_COLOR, duration: 2, ease: "none" },
            "<"
          );
        }
        if (navHamburgerLines.length > 0) {
          tl.to(
            navHamburgerLines,
            { backgroundColor: PRIMARY_COLOR, duration: 2, ease: "none" },
            "<"
          );
        }
      });

      mm.add("(max-width: 767.98px)", () => {
        const navbar = document.querySelector(".main-navbar");
        if (navbar) gsap.set(navbar, { autoAlpha: 1 });

        const entryTl = gsap.timeline();
        entryTl
          .to(splashOverlayRef.current, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
          })
          .to(
            splashTitleRef.current,
            { opacity: 0, y: -50, scale: 0.9, duration: 1 },
            "<"
          );

        gsap.to(".hero-doodles", { autoAlpha: 1, duration: 0.5 });
      });

      setTimeout(() => ScrollTrigger.refresh(), 500);
      setTimeout(() => ScrollTrigger.refresh(), 2000);
    }, heroRef);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return { handleResize };
};
