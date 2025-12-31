import React, { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../ui/HamburgerButton";

import Sidebar from "../ui/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      style={{ zIndex: 9999 }}
      className={`navbar main-navbar fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md transition-colors duration-300 ${
        isOpen ? "nav-open" : ""
      }`}
    >
      <Link
        className={`text-primary-color mt-0 md:mt-3 font-editorial text-2xl relative md:absolute md:left-1/2 md:-translate-x-1/2 z-[10002] transition-opacity duration-300 ${
          isOpen
            ? "md:opacity-0 pointer-events-none !text-[#19083b]"
            : "md:opacity-100"
        }`}
        to="/"
      >
        Resonance Rehab
      </Link>
      <HamburgerButton
        className={`md:ml-auto md:pr-7 z-[10001] ${
          isOpen ? "[&_span]:!bg-[#19083b]" : ""
        }`}
        isOpen={isOpen}
        toggle={toggleMenu}
      />

      <Sidebar isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default memo(Navbar);
