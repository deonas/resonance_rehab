import React from 'react';

export const FAQCard = ({ question, answer }) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
      <h3 className="font-urbanist text-primary-color font-bold text-sm md:text-3xl mb-2">
        {question}
      </h3>
      <p className="font-urbanist text-primary-color/80 font-light text-xs md:text-[16px] leading-relaxed">
        {answer}
      </p>
    </div>
  );
};