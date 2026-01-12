import React from 'react';
import { ArrowLeft } from 'lucide-react';
import HeroSection from '../../components/whoweare/HeroSection';
import ApproachSection from '../../components/whoweare/ApproachSection';
import TrustCards from '../../components/whoweare/TrustCards';
import VisionMission from '../../components/whoweare/VisionMission';
import CTASection from '../../components/whoweare/CTASection';

export default function WhoWeAre() {
  const handleBack = () => {
    // Navigate to home page using relative path
    window.location.pathname = '/';
  };

  return (
    <div className="min-h-screen bg-[#E8E6F3] font-['Urbanist',sans-serif]">
      {/* Navigation */}
      <nav className="flex items-center justify-start px-12 md:px-16 lg:px-20 py-8 w-full">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 bg-[#6942B5] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </nav>

      <HeroSection />
      <ApproachSection />
      <TrustCards />
      <VisionMission />
      <CTASection />

      {/* Footer */}
      <footer className="px-6 py-8 flex items-center justify-between">
        <h2 className="font-['Georgia',serif] italic text-2xl text-[#19083B]">
          Resonance Rehab
        </h2>
        <p className="text-[#19083B] text-sm">
          © 2025 Resonance Rehab<br />All rights reserved.
        </p>
      </footer>
    </div>
  );
}