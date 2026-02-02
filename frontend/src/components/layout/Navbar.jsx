import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaTerminal, FaHome, FaCrosshairs, FaLayerGroup, FaMicrochip, FaEnvelope, FaArrowRight, FaCircle } from "react-icons/fa";

const navLinks = [
  { name: "HOME", path: "/", shortName: "HOME", icon: FaHome },
  { name: "ABOUT", path: "/about", shortName: "ABOUT", icon: FaCrosshairs },
  { name: "PROJECTS", path: "/projects", shortName: "PROJECTS", icon: FaLayerGroup },
  { name: "SKILLS", path: "/skills", shortName: "SKILLS", icon: FaMicrochip },
  { name: "CONTACT", path: "/contact", shortName: "CONTACT", icon: FaEnvelope },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Framer Motion Variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform
        ${/* Mobile: Full-width bar */ "bg-black/80 backdrop-blur-xl border-b border-white/10 h-16 flex items-center shadow-lg"}
        ${/* Desktop: Reset to transparent */ "md:bg-transparent md:backdrop-blur-none md:border-none md:h-auto md:block md:shadow-none"}
        ${scrolled ? "md:py-2" : "md:py-6"}
      `}
      role="banner"
    >
      <div className="section-container w-full md:w-auto">
        <div className={`
          relative flex items-center justify-between transition-all duration-500
          ${/* Mobile: Reset internal pill styles */ "w-full px-4 border-none bg-transparent"}
          ${/* Desktop: Floating Pill styles */ "md:px-8 md:py-4 md:rounded-full md:border md:border-transparent"}
          ${scrolled 
            ? "md:bg-dark-900/80 md:backdrop-blur-xl md:border-white/10 md:shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
            : ""
          }
        `}>
          
          {/* Logo / System ID - Mobile optimized */}
          <Link to="/" className="group flex items-center gap-2 sm:gap-3 min-h-[44px] sm:min-h-0" aria-label="Home - Harsh AI System Architect">
             <div className={`p-1.5 sm:p-2 rounded-lg bg-black/50 border border-white/10 group-hover:border-primary-500/50 transition-colors`}>
                <FaTerminal className="text-primary-500 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
             </div>
             <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white">
                   HARSH<span className="text-primary-500">.AI</span>
                </span>
                <span className="hidden sm:block text-[0.6rem] font-mono text-gray-400 tracking-[0.2em] -mt-1 group-hover:text-primary-400 transition-colors">
                   AI_ENGINEER
                </span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4" aria-label="Main navigation">
             <div className="flex items-center bg-black/20 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-5 py-2 text-xs font-mono font-bold tracking-widest transition-all duration-300 rounded-full hover:text-white ${
                        isActive
                          ? "text-black bg-primary-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                          : "text-gray-400 hover:bg-white/5"
                      }`
                    }
                    aria-current={({ isActive }) => isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </NavLink>
                ))}
             </div>
             
             {/* Resume Download Button - Desktop Only */}
             <a
               href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-xs font-mono font-bold tracking-wider rounded-full transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center gap-2"
               aria-label="Download Resume"
             >
               <FaArrowRight className="rotate-90" size={10} />
               RESUME
             </a>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
             {/* System Status Indicator - Hidden on small mobile */}
             <div className="hidden sm:flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-green-500/10 border border-green-500/20" aria-label="System status: Online">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
                <span className="text-[9px] sm:text-[10px] font-mono text-green-500 font-bold tracking-wider">ONLINE</span>
             </div>

            {/* Mobile Menu Toggle - Touch optimized */}
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white hover:text-primary-500 active:text-primary-400 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg hover:bg-white/5 active:bg-white/10"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <HiX size={24} aria-hidden="true" /> : <HiMenuAlt3 size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Bottom Sheet Redesign */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop - Tap to close */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
                aria-hidden="true"
              />
              
              {/* Bottom Sheet Container */}
              <motion.nav
                id="mobile-menu"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 z-[70] bg-black/90 backdrop-blur-xl border-t border-cyan-500/30 rounded-t-2xl shadow-[0_-10px_40px_-15px_rgba(34,211,238,0.2)] md:hidden flex flex-col max-h-[85vh] overflow-y-auto"
                aria-label="Mobile navigation"
              >
                
                {/* Drag Handle */}
                <div className="w-12 h-1.5 bg-gray-700 rounded-full mx-auto mt-4 mb-2 flex-shrink-0" />

                {/* Header inside sheet */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 mb-0">
                   <span className="text-[10px] font-mono text-gray-600 mb-0">// MENU</span>
                   <button 
                     onClick={() => setIsOpen(false)}
                     className="text-xs font-mono text-red-400 hover:text-red-300 transition-colors uppercase"
                   >
                      [ CLOSE ]
                   </button>
                </div>

                {/* Link List - Terminal Style */}
                <div className="flex flex-col w-full">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `w-full flex items-center gap-4 py-4 px-6 border-b border-white/5 font-mono text-lg tracking-widest uppercase transition-all duration-300 ${
                          isActive
                            ? "text-cyan-400 pl-10 border-l-2 border-l-cyan-500 bg-white/5" // Added minimal bg for active touch feedback
                            : "text-gray-400 hover:text-white active:bg-white/5"
                        }`
                      }
                    >
                        {link.shortName}
                    </NavLink>
                  ))}
                </div>
                
                {/* System Status Footer */}
                <div className="mt-auto py-8 text-center border-t border-white/5 bg-black/20">
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10" aria-label="System status">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
                      <span className="text-[10px] text-emerald-500 font-mono tracking-[0.2em] font-bold">
                         ONLINE
                      </span>
                   </div>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>
  );
};

export default Navbar;
