import React from 'react';

export const FAQCard = ({ question, answer }) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
      <h3 className="font-urbanist text-primary-color font-bold text-sm md:text-base mb-2">
        {question}
      </h3>
      <p className="font-urbanist text-primary-color/80 text-xs md:text-sm leading-relaxed">
        {answer}
      </p>
    </div>
  );
};