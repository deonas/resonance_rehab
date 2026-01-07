import React, { forwardRef } from "react";
import Button from "../ui/Button";
import ServiceCard from "../ui/ServiceCard";

const SERVICE_CARDS = [
  {
    title: "Counselling & Psychotherapy",
    description:
      "Supporting children, individuals, couples, and families with evidence-based online counselling that builds emotional strength, clarity, and balance.",
    image: "/images/services/counselling.png",
  },
  {
    title: "Occupational Therapy",
    description:
      "Helping children strengthen daily living skills, sensory processing, and independence through structured, personalised therapy from home.",
    image: "/images/services/occupational.png",
  },
  {
    title: "Behavioral Therapy",
    description:
      "Guiding children toward positive behaviour, emotional regulation, and social confidence through supportive, evidence-based interventions.",
    image: "/images/services/behavioral.png",
  },
  {
    title: "Developmental Therapy",
    description:
      "Supporting early childhood growth with play-based, milestone-focused intervention that nurtures motor, language, and social-emotional development.",
    image: "/images/services/developmental.png",
  },
  {
    title: "Speech Therapy",
    description:
      "Helping children improve their communication skills, including speech, language, and social interaction, with expert guidance.",
    image: "/images/services/speech.png",
  },
  {
    title: "Physiotherapy",
    description:
      "Physical therapy to help children develop their motor skills, balance, and coordination through personalized exercises.",
    image: "/images/services/physiotherapy.png",
  },
];

const Services = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#e8e6f3] flex flex-col justify-center py-20 relative text-left"
    >
      {/* Wrapper for Vertical Scroll Animation */}
      <div className="services-content-inner w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-8 md:mb-16 w-full max-w-[1400px] px-4 md:px-8 lg:px-12 mx-auto">
          <div className="flex items-baseline gap-20 mb-12">
            <span className="block text-primary-color/60 text-lg font-urbanist">
              Services
            </span>
            <div className="w-full h-[1.5px] bg-primary-color/20 max-w-6xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="max-w-7xl">
              <h2 className="font-autumn text-5xl md:text-7xl lg:text-8xl text-primary-color leading-[0.85] mb-6">
                Therapy Made{" "}
                <span className="text-secondary-color">Simple</span>,{" "}
                <span className="text-secondary-color">Accessible</span>, and{" "}
                <span className="text-secondary-color">Personalized</span>.
              </h2>
              <p className="font-urbanist text-lg md:text-xl text-primary-color/70 max-w-4xl leading-relaxed">
                From speech and behavior therapy to ADHD, autism, and
                developmental care, we offer comprehensive, evidence-based
                therapy for children and teens. Each plan is designed to grow
                with your child's unique needs, ensuring comfort, progress, and
                confidence at every step.
              </p>
            </div>

            <Button className="bg-button-main text-primary-color px-4 py-1.5 md:px-12 md:py-2 rounded-full text-sm md:text-lg font-medium hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
              Explore All Services
            </Button>
          </div>
        </div>

        {/* Scrollable Cards Section */}
        <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
          <div className="flex gap-6 md:gap-8 w-max services-track pl-[max(1rem,calc((100%-1400px)/2+1rem))] md:pl-[max(2rem,calc((100%-1400px)/2+2rem))] lg:pl-[max(3rem,calc((100%-1400px)/2+3rem))] pr-[max(1rem,calc((100%-1400px)/2+1rem))] md:pr-[max(2rem,calc((100%-1400px)/2+2rem))] lg:pr-[max(3rem,calc((100%-1400px)/2+3rem))]">
            {SERVICE_CARDS.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
