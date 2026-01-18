import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaTerminal } from "react-icons/fa";

const navLinks = [
  { name: "// HOME", path: "/" },
  { name: "// MISSION", path: "/about" },
  { name: "// MODULES", path: "/projects" },
  { name: "// CORE", path: "/skills" },
  { name: "// SIGNAL", path: "/contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${
        scrolled
          ? "py-2"
          : "py-4 md:py-6"
      }`}
    >
      <div className="section-container">
        <div className={`
          relative flex items-center justify-between px-6 py-3 md:px-8 md:py-4 rounded-full border transition-all duration-500
          ${scrolled 
            ? "bg-dark-900/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
            : "bg-transparent border-transparent"
          }
        `}>
          
          {/* Logo / System ID */}
          <Link to="/" className="group flex items-center gap-3">
             <div className={`p-2 rounded-lg bg-black/50 border border-white/10 group-hover:border-primary-500/50 transition-colors`}>
                <FaTerminal className="text-primary-500 w-5 h-5" />
             </div>
             <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wider text-white">
                   HARSH<span className="text-primary-500">.AI</span>
                </span>
                <span className="text-[0.6rem] font-mono text-gray-400 tracking-[0.2em] -mt-1 group-hover:text-primary-400 transition-colors">
                   SYSTEM_ARCHITECT
                </span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
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
                  >
                    {link.name}
                  </NavLink>
                ))}
             </div>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
             {/* System Status Indicator */}
             <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-green-500 font-bold tracking-wider">ONLINE</span>
             </div>



            {/* Mobile Menu Toggle */}
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-primary-500 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 md:hidden"
          >
            <div className="bg-dark-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-sm font-mono tracking-wider rounded-xl transition-all ${
                        isActive
                          ? "bg-primary-500 text-black font-bold shadow-lg"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                   <span className="opacity-50 mr-2">{">"}</span> {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
