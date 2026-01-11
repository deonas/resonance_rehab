import React from 'react';

export default function VisionMission() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto relative">
      <img
        src="/icons/Group 32.svg"
        alt="decorative icon"
        className="absolute top-12 left-32 w-28 h-28 pointer-events-none select-none"
      />

      <div className="mb-16">
        <h3 className="font-['Urbanist',sans-serif] font-bold text-[#19083B] text-center mb-6" style={{ fontSize: '36px', lineHeight: '90px' }}>
          Our Vision
        </h3>
        <p className="text-[#19083B] font-['Urbanist',sans-serif] font-light text-center max-w-3xl mx-auto" style={{ fontSize: '16px', lineHeight: '100%' }}>
          To be a trusted leader in child and adolescent mental health care, where every child feels understood, supported, and empowered to grow confidently, one step at a time.
        </p>
      </div>

      <div className="relative">
        <h3 className="font-['Urbanist',sans-serif] font-bold text-[#19083B] text-center mb-6" style={{ fontSize: '36px', lineHeight: '90px' }}>
          Our Mission
        </h3>
        <p className="text-[#19083B] font-['Urbanist',sans-serif] font-light text-center max-w-3xl mx-auto" style={{ fontSize: '16px', lineHeight: '100%' }}>
          To make expert therapy accessible, compassionate, and impactful for every family. We combine certified guidance with heartfelt care to help children build resilience, confidence, and joy through personalised online therapy.
        </p>
        
        <img
          src="/icons/Vector 87.svg"
          alt="decorative icon"
          className="absolute -bottom-4 right-8 w-20 h-20 pointer-events-none select-none"
        />
      </div>
    </section>
  );
}