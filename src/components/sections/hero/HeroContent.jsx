import React from "react";
import MainButton from "../../ui/MainButton";
import { useNavigate } from "react-router-dom";

const HeroContent = ({ overlayRef, contentRef }) => {
  const navigate = useNavigate();

  return (
    <div
      ref={overlayRef}
      className="relative z-10 w-full flex flex-col items-start pt-28 px-6 md:absolute md:top-0 md:left-0 md:h-[55vh] md:bg-white md:pt-[75px] md:justify-center md:items-start md:px-12 lg:px-24 order-1 shadow-xl"
    >
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
          Compassionate, certified online therapy for children and teens, where
          every little mind feels understood, supported, and safe to grow.
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
  );
};

export default HeroContent;
