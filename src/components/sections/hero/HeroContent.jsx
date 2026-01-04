import React from "react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import { useNavigate } from "react-router-dom";

const HeroContent = ({ overlayRef, contentRef }) => {
  const navigate = useNavigate();

  return (
    <div
      ref={overlayRef}
      className="relative z-10 w-full py-2 pb-6 flex flex-col items-start pt-20 md:absolute md:top-0 md:left-0 md:h-[55vh] md:bg-white md:pt-[75px] md:justify-center md:items-start order-1 shadow-xl"
    >
      <Container ref={contentRef} className="flex flex-col md:items-start">
        <h2 className="text-5xl leading-[0.95] md:text-7xl lg:text-[6rem] font-autumn text-secondary-color font-bold tracking-tight text-left">
          <span className="hero-text-item block md:inline text-primary-color mb-0 md:mb-0 md:mr-4">
            Empowering
          </span>
          <span className="hero-text-item block md:inline-block text-secondary-color font-autumn -rotate-2 transform mt-0.5 mb-0.5 md:mt-0 md:mb-0">
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

        <p className="hero-description mt-2 text-primary-color/80 text-sm md:text-xl md:max-w-lg font-urbanist leading-relaxed text-left max-w-[90%]">
          Compassionate, certified online therapy for children and teens, where
          every little mind feels understood, supported, and safe to grow.
        </p>

        <div className="hero-button absolute bottom-0 right-6 translate-y-1/2 z-30 flex w-auto md:right-24 md:left-auto md:bottom-0 md:translate-x-0 md:translate-y-1/2 md:px-0">
          <Button
            onClick={() => navigate("/second-page")}
            className="bg-button-main text-primary-color px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-lg font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Book a Session
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroContent;
