import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaTerminal } from "react-icons/fa";

const navLinks = [
  { name: "// HOME", path: "/", shortName: "HOME" },
  { name: "// MISSION", path: "/about", shortName: "ABOUT" },
  { name: "// MODULES", path: "/projects", shortName: "PROJECTS" },
  { name: "// CORE", path: "/skills", shortName: "SKILLS" },
  { name: "// SIGNAL", path: "/contact", shortName: "CONTACT" },
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
                   SYSTEM_ARCHITECT
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

      {/* Mobile Menu Overlay - Improved */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            
            {/* Menu */}
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 p-4 md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="bg-dark-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3.5 text-sm font-mono tracking-wider rounded-xl transition-all min-h-[52px] flex items-center ${
                          isActive
                            ? "bg-primary-500 text-black font-bold shadow-lg"
                            : "text-gray-400 hover:bg-white/5 active:bg-white/10 hover:text-white"
                        }`
                      }
                      aria-current={({ isActive }) => isActive ? 'page' : undefined}
                    >
                     <span className="opacity-50 mr-2" aria-hidden="true">{">"}</span> 
                     <span className="hidden xs:inline">{link.name}</span>
                     <span className="xs:hidden">{link.shortName}</span>
                    </NavLink>
                  ))}
                </div>
                
                {/* Mobile Status Indicator */}
                <div className="px-4 pb-4 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
                    <span className="text-[10px] font-mono text-green-500 font-bold tracking-wider">SYSTEM_ONLINE</span>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
