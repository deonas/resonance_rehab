import React from "react";
import { motion } from "framer-motion";

const HamburgerButton = ({ isOpen, toggle, className = "" }) => {
  return (
    <button
      onClick={toggle}
      className={`flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none relative cursor-pointer ${className}`}
      aria-label="Toggle menu"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 3.6 } : { rotate: 0, y: 0 }}
        className="w-6 h-[.20rem] bg-primary-color block rounded-full"
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -3.6 } : { rotate: 0, y: 0 }}
        className="w-6 h-[.20rem] bg-primary-color block rounded-full"
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default HamburgerButton;
