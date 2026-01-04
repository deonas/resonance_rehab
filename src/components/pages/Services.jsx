import React, { forwardRef } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const SERVICE_CARDS = [
  {
    title: "Counselling & Psychotherapy",
    description:
      "Supporting children, individuals, couples, and families with evidence-based online counselling that builds emotional strength, clarity, and balance.",
    image:
      "http://localhost:3845/assets/c9e56a359e801d96fb0a56fb9ad091f95c716cc1.png",
  },
  {
    title: "Occupational Therapy",
    description:
      "Helping children strengthen daily living skills, sensory processing, and independence through structured, personalised therapy from home.",
    image:
      "http://localhost:3845/assets/9ac69ec78b5afd97a843be5c6ad1792387c2a9bd.png",
  },
  {
    title: "Behavioral Therapy",
    description:
      "Guiding children toward positive behaviour, emotional regulation, and social confidence through supportive, evidence-based interventions.",
    image:
      "http://localhost:3845/assets/c4746d948a27749152938cf2e04bc24afe52dc65.png",
  },
  {
    title: "Developmental Therapy",
    description:
      "Supporting early childhood growth with play-based, milestone-focused intervention that nurtures motor, language, and social-emotional development.",
    image:
      "http://localhost:3845/assets/e93deb8d09d3acd72eac7180680176173f84de76.png",
  },
  {
    title: "Speech Therapy",
    description:
      "Helping children improve their communication skills, including speech, language, and social interaction, with expert guidance.",
    image:
      "http://localhost:3845/assets/42cbab0ba6d068cc0c810241158db0397cd77808.png",
  },
  {
    title: "Physiotherapy",
    description:
      "Physical therapy to help children develop their motor skills, balance, and coordination through personalized exercises.",
    image:
      "http://localhost:3845/assets/42cbab0ba6d068cc0c810241158db0397cd77808.png", // Using duplicate placeholder if original unavailable, or update
  },
];

const Services = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#e8e6f3] flex flex-col justify-center py-20 relative overflow-hidden"
    >
      <Container className="flex flex-col h-full justify-center">
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          <div className="flex items-baseline justify-center gap-20 mb-12">
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
          <div className="flex gap-6 md:gap-8 w-max px-4 services-track">
            {SERVICE_CARDS.map((card, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] shrink-0 flex flex-col rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="h-[200px] md:h-[240px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 bg-cream flex-1 flex flex-col gap-4">
                  <h3 className="font-urbanist font-semibold text-2xl text-primary-color leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-urbanist font-light text-primary-color text-base leading-relaxed opacity-90">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
});

export default Services;
