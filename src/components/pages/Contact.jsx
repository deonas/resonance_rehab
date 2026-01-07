import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full h-screen bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Scribble Decoration */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-[40%] -translate-y-[20%] w-[335px] pointer-events-none z-0">
        <svg
          viewBox="0 0 335 335"
          className="w-full rotate-[347deg] opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 167.5C50 100 100 50 167.5 50C235 50 285 100 285 167.5C285 235 235 285 167.5 285C100 285 50 235 50 167.5Z"
            stroke="#6942B5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Text */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="font-autumn text-[48px] md:text-[64px] leading-tight text-primary-color">
          <span>Every </span>
          <span className="text-secondary-color">small step</span>
          <span> leads</span>
          <br />
          <span>to a </span>
          <span className="text-secondary-color">brighter </span>
          <span>tomorrow.</span>
        </h2>

        <p className="font-urbanist font-medium text-[20px] md:text-[24px] text-secondary-color mt-8">
          Let’s take that step together.
        </p>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex gap-6 mt-4">
        <button
          className="bg-button-main text-primary-color font-urbanist font-bold text-[16px] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 focus-ring"
          aria-label="Book a therapy session"
        >
          Book a Session
        </button>
        <button
          className="bg-[#bbb5fd] text-primary-color font-urbanist font-medium text-[16px] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 focus-ring"
          aria-label="Talk to our team"
        >
          Talk to Us
        </button>
      </div>
    </div>
  );
});

export default Contact;
