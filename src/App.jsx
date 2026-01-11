import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/pages/Hero";
import AboutUs from "./components/pages/AboutUs";
import FrequentlyAsked from "./components/pages/FrequentlyAsked";
import MeetOurTeam from "./components/pages/MeetOurTeam";
import Navbar from "./components/layout/Navbar";
import WhyChooseUs from "./components/pages/WhyChooseUs";
import Services from "./components/pages/Services";
import TeamList from "./components/pages/TeamList";
import TeamMemberDetail from "./components/pages/TeamMemberDetail";
import Whoweare from "./components/pages/Whoweare";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
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
