import React from "react";
import { ArrowLeft } from "lucide-react";
import HeroSection from "./sections/HeroSection";
import ApproachSection from "./sections/ApproachSection";
import TrustCards from "./sections/TrustCards";
import VisionMission from "./sections/VisionMission";
import CTASection from "./sections/CTASection";

export default function WhoWeAre() {
  const handleBack = () => {
    // Navigate to home page using relative path
    window.location.pathname = "/";
  };

  return (
    <div className="min-h-screen bg-[#E8E6F3] font-['Urbanist',sans-serif]">
      {/* Navigation */}
      <nav className="flex items-center justify-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 w-full">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-[#6942B5] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90 active:opacity-80 active:scale-95 text-sm sm:text-base shadow-md"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          Back
        </button>
      </nav>

      <HeroSection />
      <ApproachSection />
      <TrustCards />
      <VisionMission />
      <CTASection />

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <h2 className="font-['Georgia',serif] italic text-xl sm:text-2xl text-[#19083B]">
          Resonance Rehab
        </h2>
        <p className="text-[#19083B] text-xs sm:text-sm">
          © 2025 Resonance Rehab
          <br />
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
