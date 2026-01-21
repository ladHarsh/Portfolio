import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaBrain, FaServer, FaDatabase, FaMicrochip, FaDownload, FaLinkedin, FaEnvelope, FaCode, FaChevronDown } from "react-icons/fa";
import { SiPython } from "react-icons/si";

const About = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [showFullBio, setShowFullBio] = useState(false);
  const [expandedSpec, setExpandedSpec] = useState(null);

  // Auto-cycle through the "DNA" segments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const timeline = [
    { year: "2026", event: "SYSTEM_OPTIMIZED: B.Tech Degree", desc: "Specialization in Generative AI & High-Dimensional Logic.", loc: "KPGU, Vadodara" },
    { year: "2024", event: "PROTOCOL_MERGED: Full Stack", desc: "Integrated MERN Stack dependencies for scalable web architecture.", loc: "Remote / Hybrid" },
    { year: "2022", event: "INITIALIZED_KERNEL: CS Start", desc: "Boot sequence initiated. Exploring foundational algorithms.", loc: "Vadodara" }
  ];

  const specs = [
    { label: "ARCH_TYPE", val: "Neural_Hybrid", detail: "Hybrid architecture combining biological reasoning with computational efficiency" },
    { label: "CORE_LANG", val: "Python / JS", detail: "Primary languages: Python for AI/ML, JavaScript for full-stack development" },
    { label: "UPTIME", val: "99.9%", detail: "Continuous learning and system optimization" },
    { label: "VERSION", val: "2.0.4 (Stable)", detail: "Current stable release with ongoing improvements" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 0. Circuit Background - Optimized for mobile */}
      <div className="fixed inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-5 sm:opacity-10 pointer-events-none" aria-hidden="true"></div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" aria-hidden="true"></div>

      <div className="section-container relative z-10">

        {/* 1. HERO: MOBILE-FIRST LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-24 lg:mb-32">
            
            {/* Profile Image - Optimized for mobile */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="lg:col-span-5 relative order-1"
            >
               <div className="relative z-10 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden p-0.5 sm:p-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-[scan_4s_ease-in-out_infinite] z-20 shadow-[0_0_15px_rgba(6,182,212,0.8)]" aria-hidden="true"></div>
                  
                  <div className="relative h-[320px] sm:h-[400px] lg:h-[500px] w-full bg-gray-900 rounded-xl overflow-hidden group">
                     {/* Profile Image with lazy loading */}
                     <img 
                        src="/I_need_to_2k_202601172105.jpeg" 
                        alt="Harsh Lad - Full Stack Developer and AI Engineer" 
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale contrast-[1.2] brightness-90 active:grayscale-0 active:contrast-100 active:brightness-100 lg:group-hover:grayscale-0 lg:group-hover:contrast-100 lg:group-hover:brightness-100 lg:group-hover:scale-[1.02] transition-all duration-700 ease-in-out" 
                        style={{
                           maskImage: "radial-gradient(circle at center, black 50%, transparent 90%)",
                           WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 90%)"
                        }}
                     />
                     
                     {/* Holographic Blue Tint */}
                     <div className="absolute inset-0 bg-cyan-500 mix-blend-overlay opacity-30 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-500 pointer-events-none z-10" aria-hidden="true"></div>

                     {/* Vignette Overlay */}
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" aria-hidden="true"></div>
                     
                     {/* HUD Overlay - Mobile optimized */}
                     <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between z-20">
                        <div className="flex justify-between items-start">
                           <FaMicrochip className="text-2xl sm:text-4xl text-cyan-500/50 animate-pulse" aria-hidden="true" />
                           <div className="text-right">
                              <div className="text-[9px] sm:text-[10px] font-mono text-cyan-500">ID: HARSH_LAD</div>
                              <div className="text-[9px] sm:text-[10px] font-mono text-gray-400">CLASS: ARCHITECT</div>
                           </div>
                        </div>

                        <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-lg">
                           <div className="flex items-center gap-2 sm:gap-3 mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" aria-hidden="true"></div>
                              <span className="text-[10px] sm:text-xs font-mono text-green-400 font-bold">SYSTEM_OPTIMIZED</span>
                           </div>
                           <p className="text-[10px] sm:text-xs text-gray-300 font-mono leading-relaxed">
                               "Engineering is not just code; it is the architecture of intelligence. I build systems that think."
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Decorative Elements - Hidden on mobile for cleaner look */}
               <div className="hidden sm:block absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl" aria-hidden="true"></div>
               <div className="hidden sm:block absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-cyan-500/30 rounded-br-2xl" aria-hidden="true"></div>
            </motion.div>

            {/* Content Section - Mobile optimized */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="lg:col-span-7 space-y-6 sm:space-y-8 order-2"
            >
               <div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-3 sm:mb-4 tracking-tighter leading-tight">
                     DIGITAL<br/>TWIN
                  </h1>
                  <div className="h-1 w-20 sm:w-32 bg-cyan-500 rounded-full mb-4 sm:mb-6"></div>
                  
                  {/* Progressive disclosure for bio text on mobile */}
                  <div className="relative">
                     <p className={`text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl font-light border-l-2 border-cyan-500/30 pl-4 sm:pl-6 ${!showFullBio ? 'line-clamp-3 sm:line-clamp-none' : ''}`}>
                        I operate at the intersection of <span className="text-white font-bold">biological cognition</span> and <span className="text-white font-bold">silicon efficiency</span>. 
                        My function is to translate abstract human intent into deterministic machine logic, architecting scalable systems that solve complexity with algorithmic elegance.
                     </p>
                     
                     {/* Show More button - Mobile only */}
                     <button 
                        onClick={() => setShowFullBio(!showFullBio)}
                        className="sm:hidden mt-2 text-cyan-500 text-sm font-mono flex items-center gap-2 hover:text-cyan-400 transition-colors min-h-[44px] -ml-1 px-1"
                        aria-expanded={showFullBio}
                        aria-label={showFullBio ? "Show less bio" : "Show more bio"}
                     >
                        {showFullBio ? "Show Less" : "Read More"}
                        <FaChevronDown className={`transform transition-transform ${showFullBio ? 'rotate-180' : ''}`} />
                     </button>
                  </div>
               </div>

               {/* Spec Grid - Mobile optimized with touch targets */}
               <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {specs.map((spec, i) => (
                     <motion.button
                        key={i}
                        onClick={() => setExpandedSpec(expandedSpec === i ? null : i)}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-lg flex flex-col hover:bg-white/10 active:bg-white/15 transition-colors text-left min-h-[80px] sm:min-h-[88px] relative overflow-hidden group"
                        aria-expanded={expandedSpec === i}
                        aria-label={`${spec.label}: ${spec.val}. Tap for details.`}
                     >
                        <span className="text-[9px] sm:text-[10px] text-cyan-500 font-mono tracking-widest mb-1 relative z-10">{spec.label}</span>
                        <span className="text-sm sm:text-base lg:text-lg font-bold font-display relative z-10">{spec.val}</span>
                        
                        {/* Expanded detail - Mobile */}
                        <AnimatePresence>
                           {expandedSpec === i && (
                              <motion.div
                                 initial={{ opacity: 0, height: 0 }}
                                 animate={{ opacity: 1, height: "auto" }}
                                 exit={{ opacity: 0, height: 0 }}
                                 className="mt-2 text-xs text-gray-400 relative z-10"
                              >
                                 {spec.detail}
                              </motion.div>
                           )}
                        </AnimatePresence>
                        
                        {/* Hover indicator */}
                        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" aria-hidden="true"></div>
                     </motion.button>
                  ))}
               </div>

               {/* CTA Buttons - Mobile optimized with proper touch targets */}
               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <a 
                     href="/resume.pdf" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="px-6 sm:px-8 py-4 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-black font-bold font-mono tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 rounded-lg min-h-[48px] sm:min-h-[52px]"
                     aria-label="Download resume PDF"
                  >
                     <FaDownload aria-hidden="true" /> 
                     <span className="hidden sm:inline">EXPORT_BLUEPRINT</span>
                     <span className="sm:hidden">RESUME</span>
                  </a>
                  <a 
                     href="https://linkedin.com/in/harsh-lad-dev" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="px-6 sm:px-8 py-4 border-2 border-white/20 hover:border-cyan-500 active:border-cyan-400 text-white font-mono tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all rounded-lg min-h-[48px] sm:min-h-[52px]"
                     aria-label="Visit LinkedIn profile"
                  >
                     <FaLinkedin aria-hidden="true" /> 
                     <span className="hidden sm:inline">LINK_NETWORK</span>
                     <span className="sm:hidden">LINKEDIN</span>
                  </a>
               </div>
            </motion.div>
        </div>

        {/* 2. PROCESSING LOGIC - Mobile optimized */}
        <section className="mb-16 sm:mb-24 lg:mb-32" aria-labelledby="processing-logic-heading">
           <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <span className="h-px bg-white/20 flex-1" aria-hidden="true"></span>
              <h2 id="processing-logic-heading" className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-cyan-500 tracking-[0.15em] sm:tracking-[0.2em]">PROCESSING_LOGIC</h2>
              <span className="h-px bg-white/20 flex-1" aria-hidden="true"></span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                 { icon: FaBrain, title: "DECONSTRUCT", desc: "Parsing raw problem spaces into component vectors. Identifying constraints and defining the optimal loss function." },
                 { icon: FaCode, title: "SYNTHESIZE", desc: "Architecting neural pathways. Selecting optimal model topologies and engineered prompt chains to maximize inference accuracy." },
                 { icon: FaServer, title: "EXECUTE", desc: "Deployment of optimized graphs to production. Ensuring O(1) scalability and zero-shot generalization." }
              ].map((step, i) => (
                 <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group bg-black border border-white/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 p-4 opacity-5 sm:opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" aria-hidden="true">
                       <step.icon className="text-6xl sm:text-9xl text-white" />
                    </div>
                    <div className="text-cyan-500 text-[10px] sm:text-xs font-mono mb-3 sm:mb-4">STEP_0{i+1}</div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">{step.desc}</p>
                 </motion.article>
              ))}
           </div>
        </section>

        {/* 3. VERSION HISTORY (Timeline) - Mobile optimized */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12" aria-labelledby="changelog-heading">
           
           {/* Timeline Graphic - Shown on mobile as header */}
           <div className="lg:col-span-4 relative">
              <div className="lg:sticky lg:top-32">
                 <h2 id="changelog-heading" className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">CHANGELOG</h2>
                 <p className="text-gray-500 font-mono text-xs sm:text-sm mb-6 sm:mb-12">System updates and patches.</p>
                 
                 <div className="hidden lg:block relative h-64 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <FaTerminal className="text-6xl text-white/5" aria-hidden="true" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                       <div className="text-4xl font-bold text-cyan-500">v2.0</div>
                       <div className="text-xs font-mono text-gray-400">CURRENT_STABLE</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Timeline Items - Mobile optimized */}
           <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {timeline.map((item, index) => (
                 <motion.article
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 sm:gap-6 group"
                 >
                    {/* Time Marker */}
                    <div className="flex flex-col items-center flex-shrink-0">
                       <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-700 border-2 border-cyan-400 group-hover:scale-125 transition-transform" aria-hidden="true"></div>
                       {index !== timeline.length - 1 && <div className="w-px h-full bg-gray-800 my-2" aria-hidden="true"></div>}
                    </div>

                    {/* Content */}
                    <div className="pb-8 sm:pb-12 flex-1">
                       <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.year}</h3>
                          <span className="text-[10px] sm:text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded inline-block w-fit">{item.loc}</span>
                       </div>
                       <h4 className="text-base sm:text-lg font-bold text-gray-300 mb-2 font-display">{item.event}</h4>
                       <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">{item.desc}</p>
                    </div>
                 </motion.article>
              ))}
           </div>
        </section>

      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        /* Ensure smooth line clamping */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default About;
