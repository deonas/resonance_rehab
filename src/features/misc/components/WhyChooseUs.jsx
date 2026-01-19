import React, { forwardRef } from "react";
import Container from "@/shared/components/ui/Container";

const DOODLES = {
  underline: "/icons/WhyChooseUS/Underline.svg",
  star: "/icons/WhyChooseUS/Star.svg",
  halo: "/icons/WhyChooseUS/Ring.svg",
  squiggle: "/icons/WhyChooseUS/Ring2.svg",
  heart: "/icons/WhyChooseUS/Love.svg",
};

const CARDS = [
  {
    title: "Compassion",
    description:
      "We care deeply for every child and family, offering a safe space where healing feels natural and supported.",
    rotation: "-6deg",
    doodle: DOODLES.halo,
    doodleClass: "w-[280px] -top-30 -left-28 rotate-[-15deg] opacity-70",
    mobileDoodleClass:
      "w-[180px] sm:w-[220px] -top-20 sm:-top-24 -left-16 sm:-left-20 rotate-[-15deg] opacity-60 sm:opacity-70",
  },
  {
    title: "Expertise",
    description:
      "Our team consists of certified child specialists with proven experience in therapy and developmental support.",
    rotation: "4deg",
    doodle: DOODLES.squiggle,
    doodleClass: "w-[180px] -top-12 -right-20 rotate-[15deg]",
    mobileDoodleClass:
      "w-[120px] sm:w-[150px] -top-8 sm:-top-10 -right-12 sm:-right-16 rotate-[15deg] opacity-70",
  },
  {
    title: "Accessibility",
    description:
      "Online sessions make therapy easy, flexible, and reachable from anywhere, directly from home.",
    rotation: "-3deg",
    doodle: DOODLES.heart,
    doodleClass: "w-[50px] top-1/2 -left-20 rotate-[-20deg]",
    mobileDoodleClass:
      "w-[35px] sm:w-[45px] top-1/2 -left-10 sm:-left-14 rotate-[-20deg] opacity-80",
  },
  {
    title: "Growth",
    description:
      "Every child receives personalised guidance that supports steady, meaningful progress.",
    rotation: "5deg",
    doodle: DOODLES.heart,
    doodleClass: "w-[50px] top-1/2 -right-20 rotate-[60deg]",
    mobileDoodleClass:
      "w-[35px] sm:w-[45px] top-1/2 -right-10 sm:-right-14 rotate-[60deg] opacity-80",
  },
];

const WhyChooseUs = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-0 md:min-h-screen bg-[#e8e6f3] relative flex flex-col items-center justify-start pt-2 pb-2 px-4 sm:px-6 md:justify-center md:pt-4 md:pb-4"
      style={{ backgroundColor: "#e8e6f3" }}
    >
      {/* Scrollable Inner Container for Mobile - Removed overflow constraint */}
      <div className="w-full h-auto overflow-visible bg-[#e8e6f3]">
        <Container className="relative z-20 flex flex-col items-center w-full">
          {/* Title Section */}
          <div className="relative mb-4 md:mb-12 text-center">
            <h2 className="font-autumn text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary-color relative z-10 px-2">
              Why Choose Us?
            </h2>
            <img
              src={DOODLES.underline}
              alt="underline"
              className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 z-20 -translate-x-1/2 h-10 translate-y-1/2 w-3/4 md:w-full max-w-[250px] sm:max-w-[250px] md:max-w-[400px] opacity-80"
            />
          </div>

          {/* Cards Container - Reduced gap and increased width */}
          <div className="w-full max-w-6xl mx-auto relative px-4 md:px-0 py-4 md:py-0 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 pb-4 md:pb-0">
            {/* Central Star Doodle - Absolute centered behind cards */}
            <img
              src={DOODLES.star}
              alt="star"
              className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] sm:w-[80px] md:w-[100px] lg:w-[200px] z-40 opacity-60 sm:opacity-70 md:opacity-80"
            />

            {CARDS.map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-7 md:p-6 lg:p-8 shadow-sm relative transition-transform hover:scale-105 hover:z-30 duration-300 w-full rotate-0 md:rotate-[var(--card-rotation)] ${
                  index % 2 === 0
                    ? "md:justify-self-end"
                    : "md:justify-self-start"
                }`}
                style={{
                  "--card-rotation": card.rotation,
                }}
              >
                {/* Card Doodles - Desktop */}
                {card.doodle && (
                  <img
                    src={card.doodle}
                    alt="decoration"
                    className={`absolute pointer-events-none hidden md:block ${card.doodleClass}`}
                  />
                )}
                {/* Card Doodles - Mobile */}
                {card.doodle && (
                  <img
                    src={card.doodle}
                    alt="decoration"
                    className={`absolute pointer-events-none block md:hidden ${card.mobileDoodleClass}`}
                  />
                )}

                <h3 className="font-urbanist font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl text-primary-color mb-3 sm:mb-4 md:mb-3">
                  {card.title}
                </h3>
                <p className="font-urbanist text-primary-color/80 text-sm sm:text-base md:text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = "WhyChooseUs";

export default WhyChooseUs;