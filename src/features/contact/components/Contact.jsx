import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full min-h-0 md:min-h-screen h-auto sm:h-screen bg-background flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-8 sm:py-0"
    >
      {/* Underline Decoration - Mobile (Vector 80.png) */}
      <img
        src="/icons/Vector 80.png"
        alt="underline"
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] h-auto pointer-events-none z-0 opacity-90 rotate-[-5deg] md:hidden"
      />

      {/* Doodles - Desktop Only */}
      <img
        src="/icons/WhyChooseUS/Underline.svg"
        alt="underline"
        className="absolute top-[50%] right-[10%] lg:right-[28%] transform -translate-y-1/2 w-[420px] lg:w-[450px] h-10 pointer-events-none z-0 opacity-90 rotate-[-5deg] hidden md:block"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm sm:max-w-none">
        {/* Main Text */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-autumn text-[40px] sm:text-[48px] lg:text-[64px] leading-[1.2] sm:leading-tight text-primary-color px-2">
            <span>Every </span>
            <span className="text-secondary-color">small step</span>
            <span> leads</span>
            <br />
            <span>to a </span>
            <span className="text-secondary-color">brighter </span>
            <span>tomorrow.</span>
          </h2>

          <p className="font-urbanist font-medium text-[16px] sm:text-[20px] lg:text-[24px] text-secondary-color mt-6 sm:mt-8 px-4">
            Let's take that step together.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
          <button
            className="bg-button-main text-primary-color font-urbanist font-bold text-[14px] sm:text-[15px] md:text-[16px] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 focus-ring w-full sm:w-auto"
            aria-label="Book a therapy session"
          >
            Book a Session
          </button>
          <button
            className="bg-[#bbb5fd] text-primary-color font-urbanist font-bold text-[14px] sm:text-[15px] md:text-[16px] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 focus-ring w-full sm:w-auto"
            aria-label="Talk to our team"
          >
            Talk to Us
          </button>
        </div>

        {/* Contact Details - Mobile: Below buttons, Desktop: Hidden (shown at bottom) */}
        <div className="flex flex-col gap-3 mt-6 w-full md:hidden font-urbanist text-center">
          <div className="flex flex-col gap-1">
            <span className="text-secondary-color text-sm font-medium">
              Phone:
            </span>
            <a
              href="tel:+919497148473"
              className="text-primary-color text-[14px] sm:text-[15px] md:text-[16px] font-bold hover:opacity-80 transition-opacity"
            >
              +91 949 714 8473
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-secondary-color text-sm font-medium">
              Email:
            </span>
            <a
              href="mailto:Info@resonancerehab.com"
              className="text-primary-color text-[14px] sm:text-[15px] md:text-[16px] font-bold hover:opacity-80 transition-opacity"
            >
              Info@resonancerehab.com
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-secondary-color text-sm font-medium">
              Location:
            </span>
            <span className="text-primary-color text-[14px] sm:text-[15px] md:text-[16px] font-bold">
              Kerala, India
            </span>
          </div>
        </div>
      </div>

      {/* Footer Contact Details - Desktop Only */}
      <div className="hidden md:flex absolute bottom-8 sm:bottom-12 w-full max-w-6xl px-4 flex-row justify-between items-start gap-4 text-left z-10 font-urbanist">
        <div className="flex flex-col gap-1">
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

        <div className="flex flex-col gap-1">
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

        <div className="flex flex-col gap-1">
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