import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../ui/HamburgerButton";
import Sidebar from "../ui/Sidebar";

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
        className="relative w-full px-12 mx-auto bg-background overflow-hidden min-h-screen mb-4 text-primary-color"
      >
        
        <div className="flex flex-col items-start justify-center pt-[150px] pb-[100px] relative h-full min-h-[500px]">
        
          <div className="relative mb-20">
            
            <div className="absolute -top-12 -right-12 w-[64px] h-[65px] rotate-[20.84deg]">
              <img src={smileyDoodle} alt="Smile" className="w-full h-full" />
            </div>

            <h2 className="font-editorial font-light italic text-primary-color text-[64px] leading-normal whitespace-nowrap z-10 relative">
              Resonance Rehab
            </h2>

          
            <div className="absolute -bottom-4 left-1/2 -translate-x-[45%] w-[337px] h-[28px] pointer-events-none">
              <img
                src={underlineDoodle}
                alt="Underline"
                className="w-full h-full"
              />
            </div>
          </div>

          
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
        </div>

        
        <div className="absolute bottom-[50px] left-[60px] w-[calc(100%-120px)] flex flex-col md:flex-row justify-between items-end md:items-end text-primary-color font-urbanist text-base leading-normal">
          
          <div className="flex flex-col gap-2">
            <h3 className="mb-4 text-secondary-color font-medium text-[20px]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 font-medium">
              <Link to="/" className="hover:opacity-70 transition-opacity">
                Home
              </Link>
              <Link
                to="/about-us"
                className="hover:opacity-70 transition-opacity"
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:opacity-70 transition-opacity"
              >
                Therapy Services
              </Link>
              <Link
                to="/conditions"
                className="hover:opacity-70 transition-opacity"
              >
                Conditions We Support
              </Link>
              <Link
                to="/meet-our-team"
                className="hover:opacity-70 transition-opacity"
              >
                Meet Our Team
              </Link>
              <Link
                to="/contact"
                className="hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
              <Link
                to="/frequently-asked"
                className="hover:opacity-70 transition-opacity"
              >
                Frequently Asked Questions
              </Link>
            </div>
          </div>

        
          <div className="flex flex-col gap-2 md:ml-20 mt-8 md:mt-0">
            <h3 className="mb-4 text-secondary-color font-medium text-[20px]">
              Contact
            </h3>
            <div className="flex flex-col gap-2 font-medium">
              <p>Phone: +91 949 714 8473</p>
              <p>Email: Info@resonancerehab.com</p>
              <p>Location: Kerala, India</p>
            </div>
          </div>

          
          <div className="mt-8 md:mt-0 text-right text-sm opacity-60 self-end font-medium">
            <p>© 2025 Resonance Rehab.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
});

export default Footer;
