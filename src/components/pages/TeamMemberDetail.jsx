import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { teamData } from "../../data/teamData";

const TeamMemberDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find member across all categories
  const member = teamData.allMembers.find((m) => m.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-color mb-4">
            Team Member Not Found
          </h2>
          <button
            onClick={() => navigate("/team")}
            className="text-secondary-color hover:underline"
          >
            Back to Team List
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate("/team");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8 mt-16">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-secondary-color text-white px-5 py-2.5 rounded-full font-urbanist font-medium text-sm mb-12 hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl overflow-hidden shadow-md mb-6 max-w-sm">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-cream">
                <h2 className="font-urbanist text-lg font-bold text-primary-color mb-1">
                  {member.name}
                </h2>
                <p className="font-urbanist text-secondary-color font-bold text-sm mb-3">
                  {member.title}
                </p>
                <p className="font-urbanist italic text-primary-color text-xs leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>

            <div className="space-y-1.5 mb-6 max-w-sm">
              <p className="font-urbanist text-primary-color text-sm">
                Credentials:{" "}
                <span className="font-semibold">{member.credentials}</span>
              </p>
              <p className="font-urbanist text-primary-color text-sm">
                Age Groups: <span className="font-semibold">{member.age}</span>
              </p>
              <p className="font-urbanist text-primary-color text-sm">
                Languages:{" "}
                <span className="font-semibold">{member.languages}</span>
              </p>
            </div>

            <div className="max-w-sm flex items-center justify-between gap-4">
              <p className="font-urbanist text-primary-color text-sm font-semibold">
                Book a session with
                <br />
                {member.name.split(" ")[0]} today.
              </p>
              <button className="bg-button-main text-primary-color font-urbanist font-bold text-sm py-3 px-6 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0">
                Book a session
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <div>
              <h2 className="font-urbanist text-secondary-color text-3xl font-normal mb-4">
                About {member.name.split(" ")[0]}
              </h2>
              <p className="font-urbanist text-primary-color text-base leading-relaxed">
                {member.about}
              </p>
            </div>

            <div>
              <h2 className="font-urbanist text-secondary-color text-3xl font-normal mb-6">
                Areas of Focus
              </h2>
              <ul className="space-y-4">
                {member.areasOfFocus.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 bg-secondary-color rounded-full mt-1.5 flex-shrink-0"></span>
                    <span className="font-urbanist text-primary-color text-base leading-relaxed">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-urbanist text-secondary-color text-3xl font-normal mb-6">
                Their Approach to Therapy
              </h2>
              <ul className="space-y-4">
                {member.approach.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 bg-secondary-color rounded-full mt-1.5 flex-shrink-0"></span>
                    <span className="font-urbanist text-primary-color text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;