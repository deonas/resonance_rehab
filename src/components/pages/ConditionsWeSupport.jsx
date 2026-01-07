import React, { forwardRef } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

// Assets
// Assets
const imgSwirl = "/images/ConditionsWeSupport/swril.svg";
const imgUnderline = "/images/ConditionsWeSupport/underline.svg";
const imgStar = "/images/ConditionsWeSupport/star.svg";
const imgLightning = "/images/ConditionsWeSupport/Ligthing.svg";
const imgBook = "/images/ConditionsWeSupport/book.svg";
const imgFace = "/images/ConditionsWeSupport/face.svg";
const imgSpeechBubbleLarge =
  "/images/ConditionsWeSupport/speech_bubble_large.svg";
const imgSpeechBubbleSmall =
  "/images/ConditionsWeSupport/speech_bubble_small.svg";
const imgSquiggles = "/images/ConditionsWeSupport/squiggles.svg";

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
          <div className="relative mb-8 text-center px-4">
            {/* Top Star Doodle */}
            <img
              src={imgStar}
              alt=""
              className="absolute -top-12 left-0 w-16 md:w-20 -rotate-12"
            />

            <h2 className="font-autumn text-5xl md:text-7xl lg:text-[64px] leading-[1.2] text-primary-color relative z-10">
              Conditions <span className="text-[#6942b5]">We</span> Support
            </h2>

            {/* Underline Doodle */}
            <img
              src={imgUnderline}
              alt=""
              className="absolute z-10 -bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-64 z-0"
            />
          </div>

          {/* Cards Grid/Stack */}
          <div className="w-full max-w-4xl space-y-6 relative px-4">
            {/* Doodles Layout */}

            {/* Swirl for Autism (Card 1) - Left */}
            <img
              src={imgSwirl}
              alt=""
              className="absolute z-20 -left-16 top-0 w-20 h-20 md:w-24 md:h-24 hidden lg:block"
            />

            {/* Lightning for ADHD (Card 2) - Right */}
            <img
              src={imgLightning}
              alt=""
              className="absolute -right-12 top-[200px] w-12 h-20 md:w-16 md:h-24 hidden lg:block"
            />

            {/* Book for Learning (Card 3) - Left */}
            <img
              src={imgBook}
              alt=""
              className="absolute -left-16 top-[450px] z-10 w-16 h-16 md:w-20 md:h-20 hidden lg:block"
            />

            {/* Face for Behavioral (Card 4) - Right */}
            <img
              src={imgSpeechBubbleSmall}
              alt=""
              className="absolute -right-16 top-[700px] z-20 w-20 h-20 md:w-24 md:h-24 hidden lg:block"
            />

            {/* Speech Bubbles for Speech Delay (Card 5) - Right */}
            <div className="absolute -right-20 top-[950px] hidden lg:block">
              <img src={imgSpeechBubbleLarge} alt="" className="w-24 h-24" />
              <img
                src={imgSpeechBubbleLarge}
                alt=""
                className="w-12 h-12 absolute -right-4 top-12 block md:hidden"
              />
            </div>

            {/* Squiggles for Stammering (Card 6) - Left */}
            <img
              src={imgSquiggles}
              alt=""
              className="absolute -left-10 bottom-0 w-24 h-24 hidden z-20 lg:block rotate-[-115deg]"
            />

            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-[#faf9ff] rounded-[20px] p-8 md:p-10 w-full shadow-sm relative z-10"
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
