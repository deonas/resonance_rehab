import React from 'react';

export default function HeroSection() {
  return (
    <section className="px-24 md:px-32 lg:px-48 pt-12 max-w-[1200px] mx-auto">
      <div className="relative mb-8 text-center w-full">
        {/* DOODLE – anchored to full heading */}
        <img
          src="/icons/Group 26.svg"
          alt="doodle"
          className="absolute top-[-95px] left-1/2 -translate-x-1/2 w-[220px] pointer-events-none select-none"
        />

        <h2
          style={{
            fontFamily: "AutumnBright, cursive",
            fontSize: "86px",
            lineHeight: "90px",
            fontWeight: 400,
          }}
          className="text-[#19083B]"
        >
          Who{" "}
          <span className="text-[#6942B5]">We</span>{" "}
          Are
        </h2>
      </div>

      <p className="text-[#19083B] font-['Urbanist',sans-serif] font-light leading-relaxed mb-6 text-center" style={{ fontSize: '16px', lineHeight: '100%' }}>
        Resonance Rehab is a trusted online therapy platform dedicated to children, teens, and families. We offer evidence-based, personalized care through certified specialists who understand the emotional, developmental and behavioral needs of young minds.
      </p>

      <p className="text-[#19083B] font-['Urbanist',sans-serif] font-light leading-relaxed mb-16 text-center" style={{ fontSize: '16px', lineHeight: '100%' }}>
        Our mission is simple: to make therapy warm, accessible, and meaningful, right from the comfort of home.
      </p>

      {/* Our Approach */}
      <h3 className="font-['Urbanist',sans-serif] font-bold text-[#19083B] mb-6" style={{ fontSize: '36px', lineHeight: '90px' }}>
        Our Approach
      </h3>
      
      <p className="text-[#19083B] font-['Urbanist',sans-serif] font-light mb-10" style={{ fontSize: '16px', lineHeight: '100%' }}>
        We believe therapy should feel safe, engaging, and supportive, not overwhelming. Our therapists use structured, child-paced methods that encourage emotional expression, confidence, and steady growth.
      </p>
    </section>
  );
}