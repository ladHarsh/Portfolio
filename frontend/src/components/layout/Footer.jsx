import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTerminal } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GITHUB", icon: FaGithub, url: "https://github.com/harshlad" },
    { name: "LINKEDIN", icon: FaLinkedin, url: "https://linkedin.com/in/harshlad" },
    { name: "MAIL_DROPOFF", icon: FaEnvelope, url: "mailto:harshlad.dev@gmail.com" },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden pt-20 pb-10">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-white/5 pb-12">
           
           {/* Brand Column */}
           <div className="md:col-span-5 space-y-6">
              <Link to="/" className="inline-flex items-center gap-2 group">
                 <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:bg-primary-500 group-hover:text-black transition-colors duration-300">
                    <FaCode size={24} />
                 </div>
                 <span className="font-display font-bold text-2xl tracking-tight">HARSH LAD</span>
              </Link>
              <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                 Engineering intelligent systems for the next decade. 
                 Bridging the gap between <span className="text-white">Cognition</span> and <span className="text-white">Code</span>.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                 {socialLinks.map((social) => (
                    <a 
                       key={social.name}
                       href={social.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all border border-transparent hover:border-white/10"
                       aria-label={social.name}
                    >
                       <social.icon size={20} />
                    </a>
                 ))}
              </div>
           </div>

           {/* Links Column 1 */}
           <div className="md:col-span-3 md:col-start-7">
              <h4 className="font-mono text-xs text-primary-500 mb-6 uppercase tracking-widest">// NAVIGATION</h4>
              <ul className="space-y-4">
                 {[
                    {name: "HOME_BASE", path: "/"},
                    {name: "MISSION_LOG", path: "/about"},
                    {name: "MODULES", path: "/projects"},
                    {name: "CAPABILITIES", path: "/skills"}
                 ].map((link) => (
                    <li key={link.path}>
                       <Link to={link.path} className="text-gray-400 hover:text-primary-400 transition-colors font-mono text-sm tracking-wide">
                          {link.name}
                       </Link>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Links Column 2 */}
           <div className="md:col-span-3">
              <h4 className="font-mono text-xs text-primary-500 mb-6 uppercase tracking-widest">// PROTOCOLS</h4>
              <ul className="space-y-4">
                 <li><a href="/resume.pdf" target="_blank" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">DOWNLOAD_SPECS</a></li>
                 <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">INITIATE_CONTACT</Link></li>
                 <li><span className="text-gray-600 font-mono text-sm">V.2.0.4 [LATEST]</span></li>
              </ul>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
           <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>ALL SYSTEMS NOMINAL</span>
           </div>

           <div className="text-gray-600 text-sm font-mono">
              © {currentYear} HARSH_LAD_DEV. EXECUTION COMPLETE.
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
