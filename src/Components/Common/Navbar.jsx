import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../ui/HamburgerButton";

import Sidebar from "../ui/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar fixed top-0 left-0 w-full z-50 bg-transparent">
      <Link
        className="text-primary-color mt-0 md:mt-3 font-editorial text-2xl md:absolute md:left-1/2 md:-translate-x-1/2 z-[60]"
        to="/"
      >
        Resonance Rehab
      </Link>
      <HamburgerButton
        className="md:ml-auto md:pr-7 z-[60]"
        isOpen={isOpen}
        toggle={toggleMenu}
      />

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;
