import React, { forwardRef } from "react";
import Container from "@/shared/components/ui/Container";
import Button from "@/shared/components/ui/Button";

const Approach = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-0 md:min-h-screen bg-[#e8e6f3] flex flex-col justify-start pt-4 sm:pt-6 md:pt-80 pb-4 sm:pb-6 md:pb-20 relative overflow-hidden"
      style={{ backgroundColor: "#e8e6f3" }}
    >
      {/* Scrollable wrapper for mobile */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden md:overflow-visible px-4 sm:px-6 md:px-0">
        {/* Background Decor - SVG for Text on Circles */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1000 1000"
            className="approach-circles absolute -top-[80vh] -right-[50vw] w-[120vw] h-[120vw] md:w-[110vw] md:h-[110vw] text-primary-color/60"
          >
            <defs>
              <path
                id="textCircle1"
                d="M500,500 m-300,0 a300,300 0 1,0 600,0 a300,300 0 1,0 -600,0"
              />
              <path
                id="textCircle2"
                d="M500,500 m-230,0 a230,230 0 1,0 460,0 a230,230 0 1,0 -460,0"
              />
              <path
                id="textCircle3"
                d="M500,500 m-120,0 a120,120 0 1,0 240,0 a120,120 0 1,0 -240,0"
              />
            </defs>

            {/* Circles */}
            {/* Outer - Approach */}
            <circle
              cx="500"
              cy="500"
              r="300"
              fill="#BBB5FD"
              fillOpacity="0.4"
              stroke="currentColor"
              strokeOpacity="0.1"
            />
            <text
              className="font-urbanist text-xs"
              fill="currentColor"
              dy="-20"
            >
              <textPath href="#textCircle1" startOffset="12%">
                Approach
              </textPath>
            </text>

            {/* Middle - Mission */}
            <circle
              cx="500"
              cy="500"
              r="230"
              fill="#BBB5FD"
              fillOpacity="0.6"
              stroke="currentColor"
              strokeOpacity="0.1"
            />
            <text
              className="font-urbanist text-xs"
              fill="currentColor"
              dy="-30"
            >
              <textPath href="#textCircle2" startOffset="15%">
                Mission
              </textPath>
            </text>

            {/* Inner - Approach */}
            <circle
              cx="500"
              cy="500"
              r="140"
              fill="#BBB5FD"
              fillOpacity="1"
              stroke="currentColor"
              strokeOpacity="0.1"
            />
            <text
              className="font-urbanist text-xs"
              fill="currentColor"
              dy="-15"
            >
              <textPath href="#textCircle3" startOffset="8%">
                Vision
              </textPath>
            </text>
          </svg>
        </div>

        <Container className="relative z-10 flex flex-col justify-start">
          <div className="approach-content-inner w-full">
            {/* Header/Subtitle */}
            <div className="mb-3 sm:mb-4 md:mb-6">
              <h3 className="font-urbanist text-primary-color font-semibold text-base sm:text-lg md:text-xl tracking-wide mb-2">
                Our Approach, Vision & Mission
              </h3>
            </div>

            {/* Main Title */}
            <h2 className="font-autumn text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-primary-color leading-[0.9] mb-6 sm:mb-8 md:mb-12 max-w-full md:max-w-4xl pr-4 sm:pr-0">
              <span className="text-secondary-color">Guided</span> by Care.
              <br />
              <span className="text-secondary-color">Grounded</span> in Purpose.
            </h2>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-24">
              {/* Left Column: Text */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 font-urbanist text-primary-color/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-full pr-2 sm:pr-0">
                <p>
                  At Resonance Rehab, we begin every journey with one simple
                  belief: that healing starts with understanding.
                </p>
                <p>
                  Our approach goes beyond therapy sessions; it's about creating
                  a space where children feel safe to open up, explore emotions,
                  and grow at their own pace. We take time to listen, to
                  connect, and to design care plans that truly reflect each
                  child's personality, strengths, and challenges.
                </p>
                <p>
                  Our team of certified therapists and child specialists combine
                  empathy, patience, and expertise to guide families through
                  behavioral, emotional, and developmental challenges. Every
                  session is crafted to be engaging, playful, and meaningful,
                  turning therapy into an experience of growth, not struggle.
                </p>
                <p>
                  Our vision is to build a world where every child feels heard,
                  supported, and confident in expressing themselves, and our
                  mission is to make expert therapy accessible, compassionate,
                  and impactful, reaching families everywhere through secure,
                  simple online care.
                </p>
                <p>
                  At Resonance Rehab, we don't just treat symptoms, we nurture
                  progress, celebrate small wins, and help every young mind move
                  toward a brighter, balanced tomorrow.
                </p>
              </div>

              {/* Right Column: Button */}
              <div className="flex items-end justify-start lg:justify-end pb-2 sm:pb-4 md:pb-8">
                <Button className="bg-[#D4E75F] text-primary-color px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:scale-105 active:scale-95 transition-transform shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
                  More About Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
});

Approach.displayName = "Approach";

export default Approach;