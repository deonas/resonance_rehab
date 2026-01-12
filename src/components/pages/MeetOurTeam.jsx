import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { teamData } from "../../data/teamData";
import HomeTeamCard from "../ui/HomeTeamCard";

const MeetOurTeam = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleViewFullTeam = () => {
  navigate("/team");
  window.scrollTo(0, 0);
};

  const handleSelectMember = (member) => {
    navigate(`/team/${member.slug}`);
  };

  return (
    <div ref={ref} className="min-h-screen bg-background relative z-20">
      <div className="container-custom py-12">
        <div className="text-center mb-12 mt-16">
          <h1 className="font-autumn text-4xl md:text-5xl lg:text-6xl mb-4 relative inline-block">
            <span className="text-primary-color">Meet Our </span>
            <span className="text-secondary-color italic">Expert Team</span>
            <img
              src="/images/ConditionsWeSupport/underline.svg"
              alt=""
              className="absolute -bottom-4 left-0 w-full h-4.5"
            />
          </h1>
          <p className="font-urbanist text-secondary-color text-sm max-w-2xl mx-auto mt-6">
            Our certified therapists are here to guide, support, and help your
            child grow, one step at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {teamData.psychologists.slice(0, 3).map((member) => (
            <HomeTeamCard
              key={member.id}
              member={member}
              onClick={() => handleSelectMember(member)}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleViewFullTeam}
            className="bg-button-main text-primary-color font-urbanist font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm focus-ring"
            aria-label="View complete team member directory"
          >
            View Full Team
          </button>
        </div>
      </div>
    </div>
  );
});

MeetOurTeam.displayName = "MeetOurTeam";

export default MeetOurTeam;
