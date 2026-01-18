import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "@/features/landing/components/Hero";
import AboutUs from "@/features/about/components/AboutUs";
import FrequentlyAsked from "@/features/faq/components/FrequentlyAsked";
// MeetOurTeam seems to be in features/team/components?
import MeetOurTeam from "@/features/team/components/MeetOurTeam";
import Navbar from "@/shared/components/layout/Navbar";
import WhyChooseUs from "@/features/misc/components/WhyChooseUs";
import Services from "@/features/services/components/Services";
import TeamList from "@/features/team/components/TeamList";
import TeamMemberDetail from "@/features/team/components/TeamMemberDetail";
import Whoweare from "@/features/about/components/Whoweare";
import Footer from "@/shared/components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/About-us" element={<Hero />} />
        <Route path="/Why-choose-us" element={<Hero />} />
        <Route path="/Services" element={<Hero />} />
        <Route path="/approach" element={<Hero />} />
        <Route path="/conditions" element={<Hero />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/contact" element={<Hero />} />
        <Route path="/frequently-asked" element={<Hero />} />
        <Route path="/meet-our-team" element={<Hero />} />
        <Route path="/team" element={<TeamList />} />
        <Route path="/team/:slug" element={<TeamMemberDetail />} />
        <Route path="/footer" element={<Hero />} />
      </Routes>
    </>
  );
};

export default App;
