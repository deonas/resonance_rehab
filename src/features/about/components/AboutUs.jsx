import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { SOCIAL_LINKS } from "@/constants/heroConstants";
import HeroBackground from "@/features/landing/components/HeroBackground";
import Button from "@/shared/components/ui/Button";
import Container from "@/shared/components/ui/Container";

const AboutUs = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <section ref={ref} className="w-full flex flex-col md:block relative min-h-0 md:min-h-screen">
      {/* Mobile-Only Image: To ensure AboutUs stands alone when scroll animation is disabled on mobile */}
      <div className="hidden relative w-full h-[35vh] shrink-0 z-20">
        <HeroBackground simple imageClass="object-cover object-center" />
      </div>

      <div className="about-content-inner bg-background w-full items-center px-4 sm:px-6 pt-2 sm:pt-4 pb-2 sm:pb-4 text-center flex-1 h-full z-10 md:h-auto md:overflow-visible md:justify-center md:py-8 md:px-0">
        <Container>
          {/* Subtitle */}
          <h3 className="font-urbanist text-primary-color/70 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs md:text-base mb-2 sm:mb-3 md:mb-8">
            About Resonance Rehab
          </h3>

          {/* Main Title */}
          <h1 className="font-autumn text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[0.9] mb-2 sm:mb-3 md:mb-6 flex flex-col items-center">
            <div className="block">
              <span className="text-secondary-color">Care</span>{" "}
              <span className="text-primary-color">That Connects.</span>
            </div>
            <div className="block mt-1.5 sm:mt-2 md:mt-2">
              <span className="text-secondary-color md:ml-4">Love</span>{" "}
              <span className="text-primary-color">That Protects.</span>
            </div>
          </h1>

          {/* CTA Button - Mobile */}
          <div className="block md:hidden mb-3 sm:mb-4">
            <Button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-lg active:scale-95 w-full sm:w-auto max-w-sm mx-auto"
            >
              Start Your Child's Journey
            </Button>
          </div>

          {/* CTA Button - Desktop/Responsive */}
          <div className="hidden md:block mb-8 md:mb-8">
            <Button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Start Your Child's Journey
            </Button>
          </div>

          {/* Body Text */}
          <div className="space-y-2 sm:space-y-2.5 md:space-y-4 max-w-2xl mx-auto font-urbanist text-primary-color/80 text-sm sm:text-base md:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-0">
            <p>
              At Resonance Rehab, we believe every child deserves the best start
              in life.
            </p>
            <p>
              Our certified therapists, psychologists, and counselors help
              children overcome developmental, behavioral, and emotional
              challenges, with kindness, patience, and expertise.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-8 justify-center">
            {SOCIAL_LINKS.map((icon) => (
              <a
                key={icon}
                href="#"
                className="group transition-transform hover:scale-110 active:scale-95 p-2"
                aria-label={icon}
              >
                <img
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 text-primary-color brightness-0 opacity-70 group-hover:opacity-100 transition-opacity object-contain"
                />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
});

export default AboutUs;