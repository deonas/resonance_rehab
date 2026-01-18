import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen h-auto sm:h-screen bg-background flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-12 sm:py-0"
    >
      {/* Scribble Decoration */}
      {/* Underline Decoration */}
      {/* Doodles - Mobile Only */}
      <img
        src="/images/sidebar/Happyface.svg"
        alt="smile"
        className="absolute top-[25%] right-[10%] sm:right-[15%] w-12 sm:w-16 rotate-12 opacity-80 animate-pulse md:hidden"
      />
      <img
        src="/icons/WhyChooseUS/Underline.svg"
        alt="underline"
        className="absolute top-[55%] sm:top-[58%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[350px] h-auto pointer-events-none z-0 opacity-90 rotate-[-2deg] md:hidden"
      />

      {/* Doodles - Desktop Only */}
      <img
        src="/icons/WhyChooseUS/Underline.svg"
        alt="underline"
        className="absolute top-[50%] right-[10%] lg:right-[28%] transform -translate-y-1/2 w-[420px] lg:w-[450px] h-auto pointer-events-none z-0 opacity-90 rotate-[-5deg] hidden md:block"
      />

      {/* Main Text */}
      <div className="relative z-10 text-center mb-10 sm:mb-12 mt-8 sm:mt-0">
        {/* Mobile Text Layout */}
        <h2 className="md:hidden font-autumn text-[48px] sm:text-[56px] leading-[1.1] text-primary-color px-2 flex flex-col items-center">
          <span className="block">Every</span>
          <span className="text-secondary-color block">small step</span>
          <span className="block">leads to a</span>
          <span className="text-secondary-color block">brighter</span>
          <span className="block">tomorrow.</span>
        </h2>

        {/* Desktop Text Layout */}
        <h2 className="hidden md:block font-autumn text-[48px] lg:text-[64px] leading-tight text-primary-color px-2">
          <span>Every </span>
          <span className="text-secondary-color">small step</span>
          <span> leads</span>
          <br />
          <span>to a </span>
          <span className="text-secondary-color">brighter </span>
          <span>tomorrow.</span>
        </h2>

        <p className="font-urbanist font-medium text-[16px] sm:text-[20px] lg:text-[24px] text-secondary-color mt-8 sm:mt-8 px-4">
          Let's take that step together.
        </p>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 w-full sm:w-auto max-w-sm sm:max-w-none">
        <button
          className="bg-button-main text-primary-color font-urbanist font-bold text-[14px] sm:text-[15px] md:text-[16px] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 focus-ring w-full sm:w-auto"
          aria-label="Book a therapy session"
        >
          Book a Session
        </button>
        <button
          className="bg-[#bbb5fd] text-primary-color font-urbanist font-medium text-[14px] sm:text-[15px] md:text-[16px] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 focus-ring w-full sm:w-auto"
          aria-label="Talk to our team"
        >
          Talk to Us
        </button>
      </div>

      {/* Footer Contact Details */}
      <div className=" hidden md:block absolute bottom-8 sm:bottom-12 w-full max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 text-center md:text-left z-10 font-urbanist">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="text-secondary-color text-sm sm:text-base font-medium">
            Phone:
          </span>
          <a
            href="tel:+919497148473"
            className="text-primary-color text-lg sm:text-xl font-bold hover:opacity-80 transition-opacity"
          >
            +91 949 714 8473
          </a>
        </div>

        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="text-secondary-color text-sm sm:text-base font-medium">
            Email:
          </span>
          <a
            href="mailto:Info@resonancerehab.com"
            className="text-primary-color text-lg sm:text-xl font-bold hover:opacity-80 transition-opacity"
          >
            Info@resonancerehab.com
          </a>
        </div>

        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="text-secondary-color text-sm sm:text-base font-medium">
            Location:
          </span>
          <span className="text-primary-color text-lg sm:text-xl font-bold">
            Kerala, India
          </span>
        </div>
      </div>
    </div>
  );
});

export default Contact;
