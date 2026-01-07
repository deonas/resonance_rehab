import React from "react";

const HomeTeamCard = ({ member, onClick }) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    className="bg-cream rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-full focus-ring"
    aria-label={`View ${member.name}'s profile - ${member.title}`}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="font-urbanist text-xl font-bold text-primary-color mb-1">
        {member.name}
      </h3>
      <p className="font-urbanist text-secondary-color font-bold text-base mb-3">
        {member.title}
      </p>
      <p className="font-urbanist italic text-primary-color text-sm leading-relaxed">
        {member.description}
      </p>
    </div>
  </div>
);

export default HomeTeamCard;
