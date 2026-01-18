import React from 'react';

const trustCards = [
  {
    title: 'Compassion',
    description: 'We care deeply for every child and family, offering a safe space where healing feels natural and supported.',
    width: '383px',
    height: '240px',
    top: '60px',
    left: '80px',
    rotation: '-12deg'
  },
  {
    title: 'Expertise',
    description: 'Our team consists of certified child specialists with proven experience in therapy and developmental support.',
    width: '383px',
    height: '240px',
    top: '80px',
    left: '520px',
    rotation: '8deg'
  },
  {
    title: 'Accessibility',
    description: 'Online sessions make therapy easy, flexible, and reachable from anywhere, directly from home.',
    width: '320px',
    height: '240px',
    top: '340px',
    left: '140px',
    rotation: '-8deg'
  },
  {
    title: 'Growth',
    description: 'Every child receives personalised guidance that supports steady, meaningful progress.',
    width: '320px',
    height: '220px',
    top: '325px',
    left: '530px',
    rotation: '6deg'
  }
];

export default function TrustCards() {
  return (
    <section className="px-6 py-12 max-w-[1000px] mx-auto">
      <h3
        style={{
          fontFamily: "AutumnBright, cursive",
          fontSize: "64px",
          lineHeight: "70px",
          fontWeight: 400,
        }}
        className="text-[#19083B] text-center relative inline-block w-full mb-6"
      >
        Why Families Trust Us

        {/* Hand-drawn underline */}
        <img
          src="/icons/Vector 80.png"
          alt="underline"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[260px] pointer-events-none select-none"
        />
      </h3>

      <div className="relative mt-16" style={{ height: '620px' }}>
        {/* Decorative elements */}
        <img
          src="/icons/Group 26.svg"
          alt="decorative icon"
          className="absolute top-0 left-16 w-36 h-36 pointer-events-none select-none"
          style={{ transform: 'rotate(-20deg)' }}
        />

        {/* Cards */}
        {trustCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] p-10 shadow-lg absolute"
            style={{ 
              width: card.width, 
              height: card.height,
              top: card.top,
              left: card.left,
              transform: `rotate(${card.rotation})`,
              gap: '35px'
            }}
          >
            <h4 className="font-['Urbanist',sans-serif] font-bold text-[#19083B] mb-6 text-3xl leading-tight">
              {card.title}
            </h4>
            <p className="text-[#19083B]/80 font-['Urbanist',sans-serif] font-light text-sm md:text-base leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}

        {/* Decorative elements bottom right */}
        <img
          src="/icons/Group 12.svg"
          alt="decorative icon"
          className="absolute bottom-4 right-4 w-32 h-32 pointer-events-none select-none"
        />
      </div>
    </section>
  );
}