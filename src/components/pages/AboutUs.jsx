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
      className="w-full min-h-dvh flex flex-col md:block relative md:opacity-0 md:translate-y-20"
    >
      <div className="block md:hidden relative w-full h-[45vh] shrink-0">
        <HeroBackground simple imageClass="object-cover object-center" />
      </div>

      <div className="about-content-inner section-parallax-content">
        <h3 className="text-subtitle">About Resonance Rehab</h3>

        <h1 className="text-display-lg flex-col-center">
          <div className="block">
            <span className="text-secondary-color">Care</span>{" "}
            <span className="text-primary-color">That Connects.</span>
          </div>
          <div className="block mt-2 md:mt-2">
            <span className="text-secondary-color md:ml-4">Love</span>{" "}
            <span className="text-primary-color">That Protects.</span>
          </div>
        </h1>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 md:hidden pointer-events-auto">
          <Button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            Start Your Child’s Journey
          </Button>
        </div>

        <div className="hidden md:block mb-8 md:mb-8 pointer-events-auto">
          <Button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Start Your Child’s Journey
          </Button>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto text-body-lg">
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

        <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
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
                className="w-5 h-5 md:w-7 md:h-7 text-primary-color brightness-0 opacity-70 group-hover:opacity-100 transition-opacity object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
