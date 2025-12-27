import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import MainButton from "./MainButton"; // fix casing

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Therapy Services", path: "/services" },
  { label: "Conditions We Support", path: "/conditions" },
  { label: "Meet Our Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const socialIcons = [
  "/icons/Linkedin.svg",
  "/icons/X.svg",
  "/icons/Insta.svg",
  "/icons/fb.svg",
  "/icons/Whatsapp.svg",
  "/icons/Mail.svg",
];

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);
  const menuRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".menu-item",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.2,
          }
        );

        gsap.fromTo(
          ".social-icon",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.7)",
            delay: 0.6,
          }
        );
      }, sidebarRef);

      return () => ctx.revert();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-40 flex flex-col bg-[#e8e6f3] text-[#19083b] overflow-hidden pt-32"
          ref={sidebarRef}
        >
          {/* Menu Items */}
          <div
            ref={menuRef}
            className="flex-1 flex flex-col items-center bg justify-center gap-4 px-4"
          >
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} onClick={onClose}>
                <MainButton className="menu-item w-full">
                  {item.label}
                </MainButton>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 md:p-8 flex flex-row justify-between items-end gap-6 text-sm  md:text-lg font-medium font-urbanist">
            <div className="flex flex-col gap-2">
              <p>Phone: +91 949 714 8473</p>
              <p>Email: Info@resonancerehab.com</p>
              <p>Location: Kerala, India</p>
            </div>

            <div
              ref={socialRef}
              className="flex flex-col gap-4 items-end md:items-end self-end md:self-auto"
            >
              <div className="flex flex-col gap-3">
                {socialIcons.map((icon, idx) => (
                  <a key={idx} href="#" className="social-icon block">
                    <img src={icon} alt="social" className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
