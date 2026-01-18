import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 flex flex-col rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="h-[180px] sm:h-[200px] md:h-[240px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 sm:p-6 md:p-8 bg-cream flex-1 flex flex-col gap-3 sm:gap-4">
        <h3 className="font-urbanist font-semibold text-lg sm:text-xl md:text-2xl text-primary-color leading-tight">
          {title}
        </h3>
        <p className="font-urbanist font-light text-primary-color text-sm sm:text-base leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;