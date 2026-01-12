import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { teamData } from "../../data/teamData";

const TeamCard = ({ member, onClick }) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    className="bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 focus-ring"
    aria-label={`View ${member.name}'s profile - ${member.title}`}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-72 object-cover"
    />
    <div className="p-8">
      <h3 className="font-urbanist text-xl font-bold text-primary-color mb-2">
        {member.name}
      </h3>
      <p className="font-urbanist text-secondary-color font-bold text-base mb-4">
        {member.title}
      </p>
      <p className="font-urbanist italic text-primary-color text-sm leading-relaxed">
        {member.description}
      </p>
    </div>
  </div>
);

const TeamList = () => {
  const navigate = useNavigate();

  const handleSelectMember = (member) => {
    navigate(`/team/${member.slug}`);
  };

  const handleBack = () => {
    navigate("/meet-our-team");
  };

  // Get members by category
  const clinicalPsychologistsAndBehaviourTherapists = teamData.clinicalPsychologistsAndBehaviourTherapists;
  const occupationalTherapists = teamData.occupationalTherapists;
  const speechPathologists = teamData.speechLanguagePathologists;
  const specialEducators = teamData.specialEducators;

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8 mt-16">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-secondary-color text-white px-5 py-2 rounded-full font-urbanist font-medium text-sm mb-12 hover:opacity-90 transition-opacity focus-ring"
          aria-label="Go back to Meet Our Team section"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back
        </button>

        <div className="text-center mb-12">
          <h1 className="font-autumn text-4xl md:text-5xl lg:text-6xl mb-4 relative inline-block">
            <span className="text-primary-color">Meet Our </span>
            <span className="text-secondary-color italic relative">
              Expert Team
              <svg
                className="absolute -bottom-2 left-0 w-full h-8"
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M10,15 Q100,8 200,12 T390,15"
                  stroke="#DAE562"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M20,18 Q110,11 210,15 T400,18"
                  stroke="#DAE562"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </span>
          </h1>
          <p className="font-urbanist text-secondary-color text-sm max-w-2xl mx-auto mt-8">
            Our certified therapists are here to guide, support, and help your
            child grow, one step at a time.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
            Clinical Psychologist & Behaviour Therapist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {clinicalPsychologistsAndBehaviourTherapists.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => handleSelectMember(member)}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
            Occupational Therapist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamData.occupationalTherapists.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => handleSelectMember(member)}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
            Speech and Hearing Language Pathologist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {speechPathologists.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => handleSelectMember(member)}
              />
            ))}
          </div>
        </section>

        {specialEducators.length > 0 && (
          <section className="mb-16">
            <h2 className="font-urbanist text-secondary-color font-semibold text-center mb-8 text-lg">
              Special Educator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {specialEducators.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onClick={() => handleSelectMember(member)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TeamList;