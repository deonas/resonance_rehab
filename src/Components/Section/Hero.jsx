import React from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../ui/MainButton"; // fix casing
import BackButton from "../ui/BackButton";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24">
      <h1 className="text-4xl font-bold mb-6">Hero Section</h1>
      <div onClick={() => navigate("/second-page")}>
        <MainButton>Main Button</MainButton>
        <BackButton />
      </div>
    </div>
  );
};

export default Hero;
