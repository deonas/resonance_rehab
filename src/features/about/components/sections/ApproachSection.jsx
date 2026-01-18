import React from 'react';

const approachItems = [
  'Secure and private online sessions',
  'Personalised therapy plans',
  'Child-friendly communication',
  'Parent involvement & guidance',
  'Evidence-based treatment methods'
];

const coreValues = [
  'Care & Empathy',
  'Connection & Understanding',
  'Growth & Progress',
  'Support & Togetherness'
];

export default function ApproachSection() {
  return (
    <section className="px-24 md:px-32 lg:px-48 pb-16 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Our Approach Includes */}
        <div>
          <h4 className="font-['Urbanist',sans-serif] font-semibold text-[#19083B] mb-10 text-2xl">
            Our approach includes:
          </h4>
          <ul className="space-y-6">
            {approachItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[#6942B5] mt-2 flex-shrink-0" />
                <span className="text-[#19083B]/80 font-['Urbanist',sans-serif] font-light text-base md:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Core Values */}
        <div>
          <h4 className="font-['Urbanist',sans-serif] font-semibold text-[#19083B] mb-10 text-2xl">
            Our Core Values
          </h4>
          <ul className="space-y-6">
            {coreValues.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[#6942B5] mt-2 flex-shrink-0" />
                <span className="text-[#19083B]/80 font-['Urbanist',sans-serif] font-light text-base md:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}