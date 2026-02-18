import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Button from "./Button";
import { createPortal } from "react-dom";

const menuItems = [
  { label: "Home", path: "/home" },
  { label: "About Us", path: "/About-us" },
  { label: "Therapy Services", path: "/Services" },
  { label: "Conditions We Support", path: "/conditions" },
  { label: "Meet Our Team", path: "/meet-our-team" },
  { label: "Contact", path: "/contact" },
];

const socialIcons = [
  { src: "/icons/Linkedin.svg", url: "https://www.linkedin.com/company/resonance-rehab/" },
  { src: "/icons/Insta.svg", url: "https://www.instagram.com/resonancerehab?igsh=NG5oaTByZjAwa3My" },
  { src: "/icons/fb.svg", url: "https://www.facebook.com/profile.php?id=61587608773411" },
  { src: "/icons/Whatsapp.svg", url: "https://wa.me/918921065634" },
  { src: "/icons/Mail.svg", url: "mailto:Info@resonancerehab.com" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);
  const menuRef = useRef(null);
  const socialRef = useRef(null);
  const [mounted, setMounted] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

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
          },
        );

        gsap.fromTo(
          ".address-item",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            delay: 0.4,
          },
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
          },
        );
      }, sidebarRef);

      return () => ctx.revert();
    }
  }, [isOpen]);

  const scrollToSectionMobile = (path) => {
    // Map paths to section indices (UPDATED ORDER - Meet Our Team before Why Choose Us)
    const sectionMap = {
      '/': 0,
      '/home': 0,
      '/About-us': 1,
      '/meet-our-team': 2,      // MOVED - Now position 2
      '/Why-choose-us': 3,       // MOVED - Now position 3
      '/Services': 4,            // Updated from 3 to 4
      '/approach': 5,            // Updated from 4 to 5
      '/conditions': 6,          // Updated from 5 to 6
      '/contact': 7,             // Updated from 7 to 7 (same)
      '/frequently-asked': 8,    // Updated from 8 to 8 (same)
      '/footer': 9,              // Updated from 9 to 9 (same)
    };

    const targetIndex = sectionMap[path];
    if (targetIndex === undefined) return;

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Get all snap sections in the Hero component
      const snapSections = document.querySelectorAll('.snap-start');
      
      if (snapSections && snapSections[targetIndex]) {
        // Scroll to the section
        snapSections[targetIndex].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      } else {
        // Fallback: Calculate scroll position manually
        const viewportHeight = window.innerHeight;
        const scrollPosition = targetIndex * viewportHeight;
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    });
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Close sidebar first
      onClose();
      
      // Navigate if not already on the path
      if (location.pathname !== path) {
        navigate(path);
      }
      
      // Wait for sidebar close animation + DOM update, then scroll
      setTimeout(() => {
        scrollToSectionMobile(path);
      }, 700);
    } else {
      // Desktop: Use existing behavior (handled by useHeroAnimation)
      navigate(path);
      setTimeout(() => {
        onClose();
      }, 100);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col bg-[#e8e6f3] text-[#19083b] overflow-y-auto overflow-x-hidden pt-20 md:pt-10"
          ref={sidebarRef}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[10001] w-10 h-10 flex items-center justify-center rounded-full bg-[#19083b]/10 hover:bg-[#19083b]/20 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#19083b]"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Desktop Title */}
          <div className="hidden md:flex flex-col items-center relative z-50 mt-8 mb-4">
            <div className="relative">
              <h1 className="font-['PPEditorialNew'] italic text-5xl text-[#19083b]">
                Resonance Rehab
              </h1>
              <img
                src="/images/sidebar/Happyface.svg"
                alt="Happy Face"
                className="absolute -top-15 -right-25 w-18 h-18 rotate-12"
              />
            </div>
            <img
              src="/images/sidebar/Underline.svg"
              alt="Underline"
              className="mt-2 w-[370px] h-[25px]"
            />
          </div>

          {/* Menu Items */}
          <div
            ref={menuRef}
            className="flex-1 flex flex-col items-center justify-center gap-4 px-4 pt-16 md:pt-0 relative"
          >
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path} 
                onClick={(e) => handleLinkClick(e, item.path)}
              >
                <Button className="menu-item pointer-events-auto">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 md:p-8 flex flex-row justify-between items-end gap-6 text-sm md:text-lg font-medium font-urbanist w-full">
            <div className="address-item flex flex-col gap-2">
              <p>Phone: +91 8921065634</p>
              <p>
                Email: 
                <a
                  href="mailto:Info@resonancerehab.com"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:Info@resonancerehab.com";
                  }}
                  className="hover:underline"
                >
                  Info@resonancerehab.com
                </a>
              </p>
              <p>Location: Kerala, India</p>
            </div>

            {/* Social Icons - Mobile: Footer, Desktop: Right Rail */}
            <div
              ref={socialRef}
              className="flex flex-col gap-4 items-end md:items-center self-end md:self-auto md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 md:gap-6"
            >
              <div className="flex flex-col gap-3 md:gap-6">
                {socialIcons.map((icon, idx) => {
                  const isMail = icon.url && icon.url.startsWith("mailto:");
                  return (
                    <a
                      key={idx}
                      href={icon.url}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noreferrer noopener"}
                      onClick={
                        isMail
                          ? (e) => {
                              e.preventDefault();
                              window.location.href = icon.url;
                            }
                          : undefined
                      }
                      className="social-icon block hover:scale-110 transition-transform"
                    >
                      <img
                        src={icon.src}
                        alt="social"
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Copyright */}
          <div className="hidden md:block absolute bottom-8 right-8 text-sm text-[#19083b]/60 font-urbanist">
            © 2025 Resonance Rehab. All rights reserved.
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Sidebar;