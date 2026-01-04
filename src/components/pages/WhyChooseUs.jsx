import React, { forwardRef } from "react";
import Container from "../ui/Container";

const DOODLES = {
  underline:
    "http://localhost:3845/assets/1a53c549cf91bac21889fb93c8e5397c4f95811f.svg",
  star: "http://localhost:3845/assets/adbf1ce21b09fe26e4df1a72fe6ed8a871a2a62d.svg",
  halo: "http://localhost:3845/assets/19dcffb99182412faa2f6f2618bbdc260d438b24.svg",
  squiggle:
    "http://localhost:3845/assets/544ed72ac80c251045b9e868f3a4f4c9f38265f6.svg",
  heart:
    "http://localhost:3845/assets/1264a9ddf783547afe35298ea7dffae31f07f6d4.svg",
  divider:
    "http://localhost:3845/assets/bb6a0d2a9b3f24cdfb59dac236650cc6e27464a8.svg",
};

const CARDS = [
  {
    title: "Compassion",
    description:
      "We care deeply for every child and family, offering a safe space where healing feels natural and supported.",
    rotation: "-6deg",
    doodle: DOODLES.halo,
    doodleClass: "w-[120px] -top-10 -left-6 rotate-[-15deg] opacity-70",
  },
  {
    title: "Expertise",
    description:
      "Our team consists of certified child specialists with proven experience in therapy and developmental support.",
    rotation: "4deg",
    doodle: DOODLES.squiggle, // Using available doodle
    doodleClass: "w-[40px] -top-6 -right-4 rotate-[15deg]",
  },
  {
    title: "Accessibility",
    description:
      "Online sessions make therapy easy, flexible, and reachable from anywhere, directly from home.",
    rotation: "-3deg",
    doodle: DOODLES.heart, // Bottom card often has heart
    doodleClass: "w-[40px] top-1/2 -left-12 rotate-[-20deg]",
  },
  {
    title: "Growth",
    description:
      "Every child receives personalised guidance that supports steady, meaningful progress.",
    rotation: "5deg",
    doodle: null, // Central star is separate
    doodleClass: "",
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
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 md:w-full max-w-[400px] opacity-80"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-5xl mx-auto relative">
          {/* Central Star Doodle - Absolute centered behind cards */}
          <img
            src={DOODLES.star}
            alt="star"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] md:w-[150px] z-0 opacity-80"
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
      <div className="absolute bottom-10 w-full flex justify-center opacity-30">
        <img
          src={DOODLES.divider}
          alt="divider"
          className="w-[90%] md:w-[80%]"
        />
      </div>
    </section>
  );
});

export default WhyChooseUs;
