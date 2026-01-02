import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { SOCIAL_LINKS } from "../../constants/heroConstants";
import HeroBackground from "../sections/hero/HeroBackground";
import Button from "../ui/Button";

const AboutUs = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="w-full flex flex-col md:block relative md:opacity-0 md:translate-y-20"
    >
      {/* Mobile-Only Image: To ensure AboutUs stands alone when scroll animation is disabled on mobile */}
      {/* Mobile-Only Image: To ensure AboutUs stands alone or has a specific header */}
      {/* Mobile-Only Image: To ensure AboutUs stands alone or has a specific header */}
      <div className="block md:hidden relative w-full h-[35vh] shrink-0">
        <HeroBackground simple imageClass="object-cover object-center" />
      </div>

      <div className="about-content-inner dynamic-screen-container bg-background px-4 py-2 pb-4 items-center pt-2 text-center flex-1 h-full z-20 md:h-auto md:overflow-visible md:justify-center md:py-8">
        {/* Subtitle */}
        <h3 className="font-urbanist text-primary-color/70 uppercase tracking-[0.2em] text-xs md:text-base md:mb-8">
          About Resonance Rehab
        </h3>

        {/* Main Title */}
        <h1 className="font-autumn text-4xl md:text-5xl lg:text-7xl leading-[0.9] md:mb-6 flex flex-col items-center">
          <div className="block">
            <span className="text-secondary-color">Care</span>{" "}
            <span className="text-primary-color">That Connects.</span>
          </div>
          <div className="block mt-2 md:mt-2">
            <span className="text-secondary-color md:ml-4">Love</span>{" "}
            <span className="text-primary-color">That Protects.</span>
          </div>
        </h1>

        {/* CTA Button - Desktop/Responsive */}
        <div className="hidden md:block mb-8 md:mb-8">
          <Button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Start Your Child’s Journey
          </Button>
        </div>

        {/* Body Text */}
        <div className="space-y-2 md:space-y-4 max-w-2xl mx-auto font-urbanist text-primary-color/80 text-base md:text-xl leading-relaxed">
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
        <div className="flex items-center gap-2 md:gap-6 md:mt-8">
          {SOCIAL_LINKS.map((icon) => (
            <a
              key={icon}
              href="#"
              className="group transition-transform hover:scale-110 p-2"
              aria-label={icon}
            >
              <img
                src={`/icons/${icon}.svg`}
                alt={icon}
                className="w-4 h-4 md:w-5 md:h-5 text-primary-color brightness-0 opacity-70 group-hover:opacity-100 transition-opacity object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
