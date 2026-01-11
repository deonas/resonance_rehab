import React from 'react';

export default function CTASection() {
  return (
    <section className="px-6 py-20 text-center relative">
      <img
        src="/icons/Group 33.svg"
        alt="decorative icon"
        className="absolute top-10 right-[450px] w-16 h-16 pointer-events-none select-none"
      />

      <h3 className="font-['Urbanist',sans-serif] font-bold text-[#19083B] mb-6" style={{ fontSize: '36px', lineHeight: '90px' }}>
        Ready to Take the Next Step?
      </h3>
      <p className="text-[#19083B] font-['Urbanist',sans-serif] font-light mb-4" style={{ fontSize: '16px', lineHeight: '100%' }}>
        Every small change creates a brighter future.
      </p>
      <p className="text-[#19083B] font-['Urbanist',sans-serif] font-light mb-10" style={{ fontSize: '16px', lineHeight: '100%' }}>
        Let's begin your child's journey together.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className="bg-[#DAE562] text-[#19083B] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:opacity-90 shadow-lg" style={{ fontFamily: 'FK Grotesk Trial, sans-serif', fontSize: '16px', lineHeight: '100%' }}>
          Book a Session
        </button>
        <button className="bg-[#6942B5] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:opacity-90 shadow-lg" style={{ fontFamily: 'FK Grotesk Trial, sans-serif', fontSize: '16px', lineHeight: '100%' }}>
          Talk to Us
        </button>
      </div>
    </section>
  );
}