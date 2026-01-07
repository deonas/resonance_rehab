import React, { forwardRef } from "react";
import Container from "../ui/Container";

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
  },
  {
    title: "Expertise",
    description:
      "Our team consists of certified child specialists with proven experience in therapy and developmental support.",
    rotation: "4deg",
    doodle: DOODLES.squiggle, // Using available doodle
    doodleClass: "w-[180px] -top-12 -right-20 rotate-[15deg]",
  },
  {
    title: "Accessibility",
    description:
      "Online sessions make therapy easy, flexible, and reachable from anywhere, directly from home.",
    rotation: "-3deg",
    doodle: DOODLES.heart, // Bottom card often has heart
    doodleClass: "w-[50px] top-1/2 -left-20 rotate-[-20deg]",
  },
  {
    title: "Growth",
    description:
      "Every child receives personalised guidance that supports steady, meaningful progress.",
    rotation: "5deg",
    doodle:  DOODLES.heart, // Central star is separate
    doodleClass: "w-[50px] top-1/2 -right-20 rotate-[60deg]",
  },
];

const WhyChooseUs = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#e8e6f3] relative overflow-hidden flex flex-col items-center justify-center py-20"
    >
      <Container className="relative z-20 flex flex-col items-center">
        {/* Title Section */}
        <div className="relative mb-20 text-center">
          <h2 className="font-autumn text-6xl md:text-8xl text-primary-color relative z-10">
            Why Choose Us?
          </h2>
          <img
            src={DOODLES.underline}
            alt="underline"
            className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 translate-y-1/2 w-3/4 md:w-full max-w-[400px] opacity-80 mt-8"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-5xl mx-auto relative">
          {/* Central Star Doodle - Absolute centered behind cards */}
          <img
            src={DOODLES.star}
            alt="star"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] md:w-[200px] z-40 opacity-80"
          />

          {CARDS.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-[30px] p-8 md:p-10 shadow-sm relative transition-transform hover:scale-105 hover:z-30 duration-300 ${
                index % 2 === 0
                  ? "md:justify-self-end"
                  : "md:justify-self-start"
              }`}
              style={{
                transform: `rotate(${card.rotation})`,
              }}
            >
              {/* Card Doodles */}
              {card.doodle && (
                <img
                  src={card.doodle}
                  alt="decoration"
                  className={`absolute pointer-events-none ${card.doodleClass}`}
                />
              )}

              <h3 className="font-urbanist font-bold text-3xl md:text-4xl text-primary-color mb-4">
                {card.title}
              </h3>
              <p className="font-urbanist text-primary-color/80 text-lg leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Footer Divider (optional based on Figma) */}
      <div className="absolute bottom-10 w-full flex justify-center h-[1.5px] bg-primary-color/20 max-w-6xl"></div>
    </section>
  );
});

export default WhyChooseUs;
