import React, { forwardRef } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

// Assets
const imgSwirl =
  "http://localhost:3845/assets/e589df0f099a0a65a8677875b49f180327a2877d.svg"; // Group 20
const imgUnderline =
  "http://localhost:3845/assets/2f351bd475124bf295bb09526e3479cc70740bf8.svg"; // Vector 80
const imgStar =
  "http://localhost:3845/assets/ce5863cac9475dd8ecd0be10018e22f51f68a990.svg"; // Group 1 (Assumed Star)
const imgLightning =
  "http://localhost:3845/assets/f9c1b544213423c36b971160002008c32ea4dc23.svg"; // Vector 83 (Assumed Lightning)
const imgBook =
  "http://localhost:3845/assets/071f9309b9c3be7bdceff76465bca4a4cd15c594.svg"; // Vector 86 (Assumed Book)
const imgFace =
  "http://localhost:3845/assets/d39ef0af816cb039cf9bd3e7f180fb427ea3308e.svg"; // Group 29 (Assumed Face)
// Missing explicit assets for others, reusing or omitting for strictness if not found.
// Based on count, I might have mis-mapped, but will use what I have.

const conditions = [
  {
    title: "Autism Spectrum Disorder",
    description:
      "Therapy designed to support communication, social interaction, and behavioural development.",
    signs:
      "Common signs include delayed speech, difficulty with social cues, repetitive behaviours, and sensory sensitivities.",
    therapies:
      "Therapies offered: Occupational Therapy, Speech Therapy, Behavioral Therapy, ABA, Special Education.",
  },
  {
    title: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    description:
      "Support for attention regulation, hyperactivity, and impulse control.",
    signs:
      "Common signs include restlessness, difficulty focusing, impulsive actions, and trouble completing tasks.",
    therapies:
      "Therapies offered: Behavioral Therapy, Speech Therapy, Occupational Therapy, Special Education, ABA.",
  },
  {
    title: "Learning Disabilities",
    description:
      "Intervention for dyslexia, dyscalculia, dysgraphia, and other learning challenges.",
    signs:
      "Common signs include difficulty reading, writing, math, memory issues, and reduced academic performance.",
    therapies:
      "Therapies offered: Behavioral Therapy, Special Education, Speech Therapy, Occupational Therapy.",
  },
  {
    title: "Behavioral Issues",
    description:
      "Support for emotional regulation, aggression, tantrums, defiance, and disruptive behaviour.",
    signs:
      "Common signs include impulsivity, emotional outbursts, social withdrawal, and difficulty managing emotions.",
    therapies:
      "Therapies offered: Behavioral Therapy, Parent Education Program, Occupational Therapy, Speech Therapy.",
  },
  {
    title: "Speech Delay",
    description:
      "Therapy focused on improving vocabulary, sentence formation, clarity, and expressive communication.",
    signs:
      "Common signs include limited speech, unclear words, late talking, and communication frustration.",
    therapies: "Therapies offered: Speech Therapy, Supporting Therapies.",
  },
  {
    title: "Stammering / Stuttering",
    description: "Guidance for fluent, confident communication.",
    signs:
      "Common signs include sound repetition, prolongation, speech blocks, facial tension, and word avoidance.",
    therapies:
      "Therapies offered: Speech Therapy, Special Education, Supporting Therapies.",
  },
];

const ConditionsWeSupport = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#e8e6f3] flex flex-col justify-start pt-32 pb-20 relative overflow-hidden"
    >
      <Container className="relative z-10 flex flex-col items-center">
        <div className="conditions-content-inner w-full flex flex-col items-center gap-10">
          {/* Header */}
          <div className="relative mb-8 text-center">
            {/* Top Star Doodle */}

            <h2 className="font-autumn text-5xl md:text-7xl lg:text-[64px] leading-[1.2] text-primary-color">
              Conditions <span className="text-[#6942b5]">We</span> Support
            </h2>

            {/* Underline Doodle */}
            <img
              src={imgUnderline}
              alt=""
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-64"
            />
          </div>

          {/* Cards Grid/Stack */}
          <div className="w-full max-w-4xl space-y-6 relative">
            {/* Doodles Layout - Absolute to this container or relative to cards */}

            {/* Swirl for Autism (Card 1) - Left */}
            <img
              src={imgSwirl}
              alt=""
              className="absolute -left-16 top-0 w-20 h-20 md:w-24 md:h-24 hidden md:block"
            />

            {/* Lightning for ADHD (Card 2) - Right */}
            <img
              src={imgLightning}
              alt=""
              className="absolute -right-12 top-[200px] w-12 h-20 md:w-16 md:h-24 hidden md:block"
            />

            {/* Book for Learning (Card 3) - Left */}
            <img
              src={imgBook}
              alt=""
              className="absolute -left-16 top-[450px] w-16 h-16 md:w-20 md:h-20 hidden md:block"
            />

            {/* Face for Behavioral (Card 4) - Right */}
            <img
              src={imgFace}
              alt=""
              className="absolute -right-16 top-[700px] w-20 h-20 md:w-24 md:h-24 hidden md:block"
            />

            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-[#faf9ff] rounded-[20px] p-8 md:p-10 w-full shadow-sm"
              >
                <h3 className="font-urbanist font-bold text-2xl md:text-3xl text-primary-color mb-4 leading-tight">
                  {condition.title}
                </h3>
                <div className="font-urbanist font-light text-base md:text-[16px] text-primary-color space-y-2">
                  <p>{condition.description}</p>
                  <p>{condition.signs}</p>
                  <p className="pt-2 font-medium">{condition.therapies}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12 space-y-6">
            <p className="font-urbanist text-primary-color/80 text-lg max-w-md mx-auto">
              Unsure which condition fits your child's needs?
              <br />
              We'll help you figure it out.
            </p>
            <Button className="bg-[#dae562] text-primary-color px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
              Book a Session
            </Button>
          </div>

          {/* Scroll Padding */}
          <div className="h-40"></div>
        </div>
      </Container>
    </section>
  );
});

export default ConditionsWeSupport;
