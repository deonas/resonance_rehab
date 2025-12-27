import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import SecondPage from "./components/pages/SecondPage";
import Navbar from "./components/common/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </>
  );
};

export default App;
