import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/pages/Hero";
import AboutUs from "./components/pages/AboutUs";
import FrequentlyAsked from "./components/pages/FrequentlyAsked";
import Navbar from "./components/layout/Navbar";
import WhyChooseUs from "./components/pages/WhyChooseUs";
import Services from "./components/pages/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Why-choose-us" element={<WhyChooseUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/frequently-asked" element={<FrequentlyAsked />} />
      </Routes>
    </>
  );
};

export default App;
