import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "@/shared/components/ui/HamburgerButton";
import Sidebar from "@/shared/components/ui/Sidebar";

const burgerIcon = "/images/sidebar/burger.svg";
const smileyDoodle = "/images/sidebar/Happyface.svg";
const underlineDoodle = "/images/sidebar/Underline.svg";

const socialLinks = [
  { name: "Linkedin", url: "#", icon: "/icons/Linkedin.svg" },
  { name: "X", url: "#", icon: "/icons/X.svg" },
  { name: "Insta", url: "#", icon: "/icons/Insta.svg" },
  { name: "Facebook", url: "#", icon: "/icons/fb.svg" },
  { name: "Whatsapp", url: "#", icon: "/icons/Whatsapp.svg" },
  { name: "Mail", url: "#", icon: "/icons/Mail.svg" },
];

const Footer = forwardRef((props, ref) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="relative w-full px-4 sm:px-6 md:px-12 mx-auto bg-background overflow-hidden min-h-[600px] md:min-h-screen mb-0 md:mb-4 text-primary-color"
      >
        <div className="flex flex-col items-start justify-start md:justify-center pt-0 md:pt-[150px] pb-16 sm:pb-20 md:pb-[100px] relative h-auto md:h-full min-h-0 md:min-h-[500px]">
          <div className="relative mb-12 sm:mb-16 md:mb-20">
            {/* Smiley Doodle */}
            <div className="absolute -top-8 sm:-top-10 md:-top-12 -right-8 sm:-right-10 md:-right-12 w-[48px] sm:w-[56px] md:w-[64px] h-[48px] sm:h-[56px] md:h-[65px] rotate-[20.84deg]">
              <img src={smileyDoodle} alt="Smile" className="w-full h-full" />
            </div>

            <h2 className="font-editorial font-light italic text-primary-color text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-normal z-10 relative">
              Resonance Rehab
            </h2>

            {/* Underline Doodle */}
            <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-[45%] w-[200px] sm:w-[270px] md:w-[337px] h-[20px] sm:h-[24px] md:h-[28px] pointer-events-none">
              <img
                src={underlineDoodle}
                alt="Underline"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Social Links - Desktop Only */}
          <div className="absolute right-[60px] top-[400px] -translate-y-1/2 hidden md:flex flex-col gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="block w-[22px] h-[22px] hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>

          {/* Social Links - Mobile Only */}
          <div className="flex md:hidden gap-4 sm:gap-5 mb-8 sm:mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="block w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 active:scale-95 transition-transform duration-300"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links & Info */}
        <div className="relative md:absolute bottom-8 sm:bottom-10 md:bottom-[50px] left-4 sm:left-6 md:left-[60px] w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-120px)] flex flex-col md:flex-row justify-between items-start md:items-end text-primary-color font-urbanist text-sm sm:text-base leading-normal">
          {/* Quick Links */}
          <div className="flex flex-col gap-1.5 sm:gap-2 mb-8 md:mb-0">
            <h3 className="mb-2 sm:mb-3 md:mb-4 text-secondary-color font-medium text-base sm:text-lg md:text-[20px]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2 font-medium">
              <Link
                to="/"
                className="hover:opacity-70 active:opacity-60 transition-opacity"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="hover:opacity-70 active:opacity-60 transition-opacity"
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:opacity-70 active:opacity-60 transition-opacity"
              >
                Therapy Services
              </Link>
              <Link
                to="/conditions"
                className="hover:opacity-70 active:opacity-60 transition-opacity"
              >
                Conditions We Support
              </Link>
              <Link
                to="/meet-our-team"
                className="hover:opacity-70 active:opacity-60 transition-opacity"
              >
                Meet Our Team
              </Link>
              <Link
                to="/contact"
                className="hover:opacity-70 active:opacity-60 transition-opacity"
              >
                Contact
              </Link>
              <Link
                to="/frequently-asked"
                className="hover:opacity-70 active:opacity-60 transition-opacity"
              >
                Frequently Asked Questions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-1.5 sm:gap-2 md:ml-20 mb-8 md:mb-0">
            <h3 className="mb-2 sm:mb-3 md:mb-4 text-secondary-color font-medium text-base sm:text-lg md:text-[20px]">
              Contact
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2 font-medium">
              <p>Phone: +91 949 714 8473</p>
              <p>Email: Info@resonancerehab.com</p>
              <p>Location: Kerala, India</p>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="md:absolute md:right-0 md:bottom-[80px] self-end md:self-auto mb-8 md:mb-0 w-12 h-12 bg-button-main text-black rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 animate-bounce active:scale-90 z-20"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </button>

          {/* Copyright */}
          <div className="md:text-right text-xs sm:text-sm opacity-60 md:self-end font-medium">
            <p>© 2025 Resonance Rehab.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
});

Footer.displayName = "Footer";

export default Footer;