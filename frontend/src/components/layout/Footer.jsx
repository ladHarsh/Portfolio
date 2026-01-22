import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTerminal, FaBrain, FaArrowDown } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GITHUB", icon: FaGithub, url: "https://github.com/ladHarsh" },
    { name: "LINKEDIN", icon: FaLinkedin, url: "https://linkedin.com/in/harsh-lad-dev" },
    { name: "MAIL_DROPOFF", icon: FaEnvelope, url: "mailto:harshlad.dev@gmail.com" },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10" role="contentinfo">
      
      {/* Decorative Grid Background - Reduced on mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] sm:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" aria-hidden="true"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-8 md:mb-20 border-b border-white/5 pb-8 sm:pb-10 md:pb-12">
           
           {/* Brand Column - Mobile optimized */}
           <div className="sm:col-span-2 md:col-span-5 space-y-4 sm:space-y-6">
              <Link to="/" className="inline-flex items-center gap-2 group min-h-[44px] sm:min-h-0" aria-label="Home - Harsh Lad">
                 <div className="p-2 sm:p-3 bg-white/5 border border-white/10 rounded-lg group-hover:bg-primary-500 group-hover:text-black transition-colors duration-300">
                    <FaBrain size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
                 </div>
                 <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">HARSH LAD</span>
              </Link>
              <p className="text-gray-400 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed">
                 Moving beyond static software. I engineer <span className="text-white">Adaptive Systems</span> that bridge the gap between human intent and machine intelligence.
              </p>
              
              {/* Social Links - Touch optimized */}
              <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                 {socialLinks.map((social) => (
                    <a 
                       key={social.name}
                       href={social.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white active:text-white hover:bg-white/10 active:bg-white/15 hover:-translate-y-1 active:scale-95 transition-all border border-transparent hover:border-white/10 min-w-[48px] min-h-[48px] flex items-center justify-center"
                       aria-label={social.name}
                    >
                       <social.icon size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                    </a>
                 ))}
              </div>
           </div>

           {/* Links Column 1 - Command Grid on Mobile */}
           <div className="md:col-span-3 md:col-start-7">
              <h4 className="font-mono text-[10px] sm:text-xs text-primary-500 mb-4 sm:mb-6 uppercase tracking-widest hidden md:block">// NAVIGATION</h4>
              <nav aria-label="Footer navigation">
                <ul className="grid grid-cols-2 gap-y-4 gap-x-8 md:block md:space-y-4">
                   {[
                      {name: "// HOME", shortName: "HOME", path: "/"},
                      {name: "// MISSION", shortName: "MISSION", path: "/about"},
                      {name: "// MODULES", shortName: "MODULES", path: "/projects"},
                      {name: "// CORE", shortName: "CORE", path: "/skills"}
                   ].map((link) => (
                      <li key={link.path}>
                         <Link to={link.path} className="font-mono transition-colors tracking-wide inline-block min-h-[44px] md:min-h-0 flex items-center">
                            {/* Mobile Style: Terminal Command */}
                            <span className="md:hidden text-xs text-gray-500 hover:text-cyan-400 flex items-center gap-2">
                                <span className="text-cyan-500">&gt;</span> {link.shortName}
                            </span>
                             {/* Desktop Style: Original */}
                            <span className="hidden md:inline text-gray-400 hover:text-primary-400 active:text-primary-300 text-sm">
                                {link.name}
                            </span>
                         </Link>
                      </li>
                   ))}
                </ul>
              </nav>
           </div>

           {/* Links Column 2 - Action Protocols */}
           <div className="md:col-span-3 space-y-4 md:space-y-0">
              <h4 className="font-mono text-[10px] sm:text-xs text-primary-500 mb-4 sm:mb-6 uppercase tracking-widest hidden md:block">// PROTOCOLS</h4>
              <ul className="space-y-3 sm:space-y-4">
                 <li>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group font-mono transition-colors inline-block w-full md:w-auto min-h-[44px] md:min-h-0 flex items-center">
                        {/* Mobile: Button Style */}
                        <span className="md:hidden w-full flex items-center justify-between border border-gray-800 bg-gray-900/50 px-4 py-3 text-xs tracking-widest text-white hover:bg-gray-800 rounded-sm">
                           <span>DOWNLOAD_SPECS</span>
                           <FaArrowDown className="text-gray-500 group-hover:text-white transition-colors" size={10} />
                        </span>
                        {/* Desktop: Text Style */}
                        <span className="hidden md:inline text-xs sm:text-sm text-gray-400 hover:text-white active:text-white">DOWNLOAD_SPECS</span>
                    </a>
                 </li>
                 <li>
                     <Link to="/contact" className="group font-mono transition-colors inline-block w-full md:w-auto min-h-[44px] md:min-h-0 flex items-center">
                        {/* Mobile: Button Style */}
                        <span className="md:hidden w-full flex items-center justify-between border border-gray-800 bg-gray-900/50 px-4 py-3 text-xs tracking-widest text-white hover:bg-gray-800 rounded-sm">
                           <span>INITIATE_CONTACT</span>
                           <span className="text-cyan-500 animate-pulse">_</span>
                        </span>
                        {/* Desktop: Text Style */}
                        <span className="hidden md:inline text-xs sm:text-sm text-gray-400 hover:text-white active:text-white">INITIATE_CONTACT</span>
                     </Link>
                 </li>
                 <li className="hidden md:block"><span className="text-gray-600 font-mono text-xs sm:text-sm">V.2.0.4 [LATEST]</span></li>
              </ul>
           </div>
        </div>

        {/* Bottom Bar - Compact on Mobile, Standard on Desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 md:pt-0 mt-8 md:mt-0">
           <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500" aria-label="System status">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
              <span>ALL SYSTEMS NOMINAL</span>
           </div>

           <div className="text-gray-600 text-[10px] sm:text-sm font-mono text-center md:text-left">
              © {currentYear} HARSH_LAD_DEV. EXECUTION COMPLETE.
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
