import React, { forwardRef } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

// Assets from Figma context
// Rotated text labels (assuming mappings based on visual hierarchy)
const imgLabelApproach =
  "http://localhost:3845/assets/3d1d1df15218a22a716b30121b3805b41625258d.svg";
const imgLabelVision =
  "http://localhost:3845/assets/fa3607c98c22e4e92f5b4d68b7b9f873c33d3a79.svg";
const imgLabelMission =
  "http://localhost:3845/assets/f3dece5e9a7297ab1b1b6f3cc08e4bdee3f4715a.svg";

const Approach = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#e8e6f3] flex flex-col justify-start pt-32 md:pt-80 pb-20 relative overflow-hidden"
    >
      {/* Background Decor - Positioned absolutely to the right */}
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
          <text className="font-urbanist text-xs" fill="currentColor" dy="-20">
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
          <text className="font-urbanist text-xs" fill="currentColor" dy="-30">
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
          <text className="font-urbanist text-xs" fill="currentColor" dy="-15">
            <textPath href="#textCircle3" startOffset="8%">
              Vision
            </textPath>
          </text>
        </svg>
      </div>

      <Container className="relative z-10 flex flex-col justify-start">
        <div className="approach-content-inner w-full">
          {/* Header/Subtitle */}
          <div className="mb-6">
            <h3 className="font-urbanist text-primary-color font-semibold text-lg md:text-xl tracking-wide mb-2">
              Our Approach, Vision & Mission
            </h3>
          </div>

          {/* Main Title */}
          <h2 className="font-autumn text-5xl md:text-7xl lg:text-8xl text-primary-color leading-[0.9] mb-12 max-w-4xl">
            <span className="text-secondary-color">Guided</span> by Care.
            <br />
            <span className="text-secondary-color">Grounded</span> in Purpose.
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column: Text */}
            <div className="space-y-6 md:space-y-8 font-urbanist text-primary-color/80 text-base md:text-lg leading-relaxed w-4xl">
              <p>
                At Resonance Rehab, we begin every journey with one simple
                belief: that healing starts with understanding.
              </p>
              <p>
                Our approach goes beyond therapy sessions; it's about creating a
                space where children feel safe to open up, explore emotions, and
                grow at their own pace. We take time to listen, to connect, and
                to design care plans that truly reflect each child's
                personality, strengths, and challenges.
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
                mission is to make expert therapy accessible, compassionate, and
                impactful, reaching families everywhere through secure, simple
                online care.
              </p>
              <p>
                At Resonance Rehab, we don't just treat symptoms, we nurture
                progress, celebrate small wins, and help every young mind move
                toward a brighter, balanced tomorrow.
              </p>
            </div>

            {/* Right Column: Button (or empty space for bg visuals on desktop) */}
            <div className="flex items-end justify-start lg:justify-end pb-8">
              <Button className="bg-[#D4E75F] text-primary-color px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
});

export default Approach;
