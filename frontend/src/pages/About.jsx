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
    { year: "2026", event: "B.Tech in Computer Science", desc: "Graduated with specialization in Generative AI and Machine Learning.", loc: "KPGU, Vadodara" },
    { year: "2024", event: "Full-Stack Development", desc: "Mastered MERN stack and built production applications with real users.", loc: "Self-Taught" },
    { year: "2022", event: "Started CS Journey", desc: "Began Computer Science degree, focusing on algorithms and data structures.", loc: "KPGU, Vadodara" }
  ];

  const specs = [
    { label: "ROLE", val: "AI Engineer", detail: "Specializing in Machine Learning and Full-Stack Development" },
    { label: "LANGUAGES", val: "Python / JavaScript", detail: "Python for AI/ML, JavaScript for web development" },
    { label: "EDUCATION", val: "B.Tech CS (2026)", detail: "Computer Science with AI/ML specialization from KPGU" },
    { label: "LOCATION", val: "Vadodara, India", detail: "Open to remote opportunities" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 0. Circuit Background - Optimized for mobile */}
      <div className="fixed inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-5 sm:opacity-10 pointer-events-none" aria-hidden="true"></div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" aria-hidden="true"></div>

      <div className="section-container relative z-10">

        {/* 1. HERO: MOBILE-FIRST LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-24 lg:mb-32">
            
            {/* Profile Image - Optimized for mobile ("Digital Twin" Console) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="lg:col-span-5 order-1"
            >
               <div className="relative h-fit w-full max-w-[500px] mx-auto lg:mx-0">
                  {/* Holographic Container with Gradient Border */}
                  <div className="relative z-10 bg-transparent rounded-xl sm:rounded-2xl overflow-hidden p-[1px] bg-gradient-to-b from-cyan-500/50 to-transparent">
                     
                     <div className="relative h-[320px] sm:h-[400px] lg:h-[500px] w-full bg-black rounded-xl overflow-hidden group">
                        
                        {/* 1. Scanner Overlay (Scanlines) */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)] bg-[length:4px_4px] opacity-20 pointer-events-none z-30 mix-blend-overlay"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-[scan_3s_linear_infinite] z-30 shadow-[0_0_15px_rgba(6,182,212,0.8)] opacity-50" aria-hidden="true"></div>

                        {/* Profile Image */}
                        <img 
                           src="/I_need_to_2k_202601172105.jpeg" 
                           alt="Harsh Lad - Digital Twin" 
                           loading="lazy"
                           className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale contrast-[1.2] brightness-90 lg:group-hover:grayscale-0 lg:group-hover:contrast-100 lg:group-hover:brightness-100 transition-all duration-700 ease-in-out" 
                        />
                        
                        {/* Holographic Tints */}
                        <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay pointer-events-none z-10" aria-hidden="true"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" aria-hidden="true"></div>
                        
                        {/* HUD Interaction Layer */}
                        <div className="absolute inset-0 flex flex-col justify-between z-40 pointer-events-none">
                           
                           {/* Top HUD */}
                           <div className="p-4 sm:p-6 flex justify-between items-start">
                              <FaMicrochip className="text-2xl text-cyan-500/50 animate-pulse drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" aria-hidden="true" />
                              <div className="flex flex-col items-end gap-1">
                                 <div className="text-[10px] sm:text-xs font-mono text-cyan-400 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                                    ID: HARSH_LAD
                                 </div>
                              </div>
                           </div>

                           {/* 2. Frosted Glass Badge (Bottom Anchored) */}
                           <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 p-4 sm:p-5">
                              <div className="flex items-center gap-2 mb-1.5">
                                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></div>
                                 <span className="text-[10px] sm:text-xs font-mono text-white/90 font-bold tracking-widest">AVAILABLE</span>
                              </div>
                              <p className="text-[10px] sm:text-xs text-gray-300 font-mono leading-relaxed opacity-90 max-w-[90%]">
                                 "Engineering is not just code; it is the architecture of intelligence."
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Decorative Edges - Now pinned to this wrapper */}
                  <div className="hidden sm:block absolute -top-2 -left-2 w-8 h-8 border-t border-l border-cyan-500/50 rounded-tl-lg pointer-events-none z-0"></div>
                  <div className="hidden sm:block absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-cyan-500/50 rounded-br-lg pointer-events-none z-0"></div>
               </div>
            </motion.div>

            {/* Content Section - Strict Mobile/Desktop Split */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="lg:col-span-7 space-y-6 sm:space-y-8 order-2"
            >
               {/* =========================================
                   MOBILE: LIVE TELEMETRY INTERFACE (< lg)
                   ========================================= */}
               <div className="block lg:hidden space-y-6">
                  {/* 1. Header & Micro-Avatar */}
                  <div className="flex justify-between items-end mb-6 relative">
                     <div>
                        <h1 className="font-display uppercase leading-[0.9]">
                           <span className="text-3xl font-light text-gray-400 block tracking-widest">AI ENGINEER</span>
                           <span className="text-6xl font-black text-white block tracking-tighter">& DEV</span>
                        </h1>
                        <div className="h-1.5 w-16 bg-cyan-500 shadow-[0_0_15px_#06b6d4] rounded-full mt-4"></div>
                     </div>
                     {/* Scanning Avatar */}
                     <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/5 bg-black">
                         <div className="absolute inset-0 rounded-full border-r-2 border-cyan-500 animate-spin"></div>
                         <img 
                           src="/I_need_to_2k_202601172105.jpeg" 
                           alt="Harsh Lad" 
                           className="w-full h-full object-cover grayscale contrast-125 p-1 rounded-full" 
                         />
                     </div>
                  </div>

                  {/* 3. "Read More" Interaction (Masked Text) */}
                  <div 
                     className="relative cursor-pointer active:scale-[0.99] transition-transform" 
                     onClick={() => setShowFullBio(!showFullBio)}
                  >
                     <p className={`text-base text-gray-300 leading-relaxed font-light border-l-2 border-cyan-500/30 pl-4 ${!showFullBio ? 'line-clamp-3' : ''}`} style={!showFullBio ? {maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'} : {}}>
                        <span className="text-white font-bold">B.Tech in Computer Science</span> (2026) from KPGU, Vadodara, specializing in <span className="text-white font-bold">Generative AI and Machine Learning</span>. 
                        I build production-ready AI systems using modern ML frameworks (TensorFlow, PyTorch, LangChain) and full-stack technologies (MERN, FastAPI). 
                        My work focuses on <span className="text-white font-bold">NLP, Computer Vision, and deploying intelligent applications</span> that solve real-world problems at scale.
                     </p>
                     {!showFullBio && (
                        <div className="text-cyan-500 text-[10px] font-mono mt-2 flex items-center gap-1 opacity-80">
                           TAP_TO_EXPAND <FaChevronDown className="animate-bounce" />
                        </div>
                     )}
                  </div>

                  {/* 2. Telemetry Grid (Glass Modules) */}
                  <div className="grid grid-cols-2 gap-3">
                     {specs.map((spec, i) => (
                        <div key={i} className={`bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex flex-col justify-center ${spec.label === 'UPTIME' ? 'animate-pulse' : ''}`}>
                           <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{spec.label}</span>
                           <span className={`text-sm font-bold font-display ${spec.label === 'UPTIME' ? 'text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]' : 'text-white'}`}>
                              {spec.val}
                           </span>
                        </div>
                     ))}
                  </div>

                  {/* 4. Download Protocol & Links */}
                  <div className="space-y-3">
                     <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-4 border border-dashed border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10 active:bg-cyan-500/20 rounded-lg flex items-center justify-center gap-3 text-cyan-400 font-mono text-xs tracking-widest transition-all group"
                        aria-label="Download Logs"
                     >
                        <FaDownload className="group-hover:translate-y-1 transition-transform" />
                        DOWNLOAD RESUME
                        <span className="text-[10px] text-gray-500 opacity-70">[.PDF]</span>
                     </a>
                     
                     <div className="flex justify-center">
                        <a href="https://linkedin.com/in/harsh-lad-dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs font-mono flex items-center gap-2">
                           <FaLinkedin /> CONNECT ON LINKEDIN
                        </a>
                     </div>
                  </div>
               </div>

               {/* =========================================
                   DESKTOP: STANDARD INTERFACE (>= lg)
                   (Strictly Preserved Original Layout)
                   ========================================= */}
               <div className="hidden lg:block space-y-8">
                  <div>
                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-3 sm:mb-4 tracking-tighter leading-tight">
                        AI ENGINEER<br/>& DEVELOPER
                     </h1>
                     <div className="h-1 w-20 sm:w-32 bg-cyan-500 rounded-full mb-4 sm:mb-6"></div>
                     
                     <div className="relative">
                        <p className={`text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl font-light border-l-2 border-cyan-500/30 pl-4 sm:pl-6`}>
                           <span className="text-white font-bold">B.Tech in Computer Science</span> (2026) from KPGU, Vadodara, specializing in <span className="text-white font-bold">Generative AI and Machine Learning</span>. 
                           I build production-ready AI systems using modern ML frameworks (TensorFlow, PyTorch, LangChain) and full-stack technologies (MERN, FastAPI). 
                           My work focuses on <span className="text-white font-bold">NLP, Computer Vision, and deploying intelligent applications</span> that solve real-world problems at scale.
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                     {specs.map((spec, i) => (
                        <motion.button
                           key={i}
                           onClick={() => setExpandedSpec(expandedSpec === i ? null : i)}
                           whileTap={{ scale: 0.98 }}
                           className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-lg flex flex-col hover:bg-white/10 active:bg-white/15 transition-colors text-left min-h-[80px] sm:min-h-[88px] relative overflow-hidden group"
                        >
                           <span className="text-[9px] sm:text-[10px] text-cyan-500 font-mono tracking-widest mb-1 relative z-10">{spec.label}</span>
                           <span className="text-sm sm:text-base lg:text-lg font-bold font-display relative z-10">{spec.val}</span>
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
                           <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" aria-hidden="true"></div>
                        </motion.button>
                     ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                     <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 sm:px-8 py-4 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-black font-bold font-mono tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 rounded-lg min-h-[48px] sm:min-h-[52px]"
                     >
                        <FaDownload aria-hidden="true" /> 
                        <span>DOWNLOAD RESUME</span>
                     </a>
                     <a 
                        href="https://linkedin.com/in/harsh-lad-dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 sm:px-8 py-4 border-2 border-white/20 hover:border-cyan-500 active:border-cyan-400 text-white font-mono tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all rounded-lg min-h-[48px] sm:min-h-[52px]"
                     >
                        <FaLinkedin aria-hidden="true" /> 
                        <span>CONNECT ON LINKEDIN</span>
                     </a>
                  </div>
               </div>
            </motion.div>
        </div>

         {/* 2. PROCESSING LOGIC - Mobile Optimized ("Neural Spine") */}
         <section className="mb-16 sm:mb-24 lg:mb-32" aria-labelledby="processing-logic-heading">
            
            {/* MOBILE HEADER (< lg) */}
            <div className="block lg:hidden mb-12 pl-4">
               <h2 id="processing-logic-heading" className="text-4xl font-black font-display text-white tracking-tighter uppercase italic opacity-20 transform scale-y-150 origin-left">MY APPROACH</h2>
            </div>

            {/* DESKTOP HEADER (>= lg) */}
            <div className="hidden lg:flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
               <span className="h-px bg-white/20 flex-1" aria-hidden="true"></span>
               <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-cyan-500 tracking-[0.15em] sm:tracking-[0.2em]">MY APPROACH</h2>
               <span className="h-px bg-white/20 flex-1" aria-hidden="true"></span>
            </div>

            {/* =========================================
                MOBILE: NEURAL SPINE (< lg)
                "Raw Data" Aesthetic - Zero Cards
                ========================================= */}
            <div className="block lg:hidden relative space-y-20 mt-8 mb-20">
               {/* 1. The Neon Vertical Spine */}
               <div className="absolute top-0 left-4 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent overflow-hidden rounded-full">
                   {/* The Pulse Light */}
                   <div className="absolute top-0 left-0 w-full h-24 bg-white blur-md animate-[scan_2s_linear_infinite]"></div>
               </div>

               {[
                  { title: "DECONSTRUCT", func: "INT_01", desc: "Parsing raw problem spaces into component vectors." },
                  { title: "SYNTHESIZE", func: "INT_02", desc: "Selecting optimal model topologies and prompt chains." },
                  { title: "EXECUTE", func: "INT_03", desc: "Deployment of optimized graphs to production." }
               ].map((step, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-cyan-500/30 ml-4">
                      {/* Connection Trace - Adjusted for new vertical rhythm */}
                      <div className="absolute -left-[2px] top-6 w-4 h-[2px] bg-cyan-500"></div>

                      {/* 3. Ghost Number */}
                      <div className="absolute -top-10 -right-2 text-[6rem] opacity-5 font-black font-display text-white select-none pointer-events-none">
                          0{i+1}
                      </div>

                      {/* 2. Data Nodes */}
                      <div className="relative z-10 pt-2">
                          <p className="font-mono text-[10px] text-cyan-500 mb-1 tracking-widest uppercase">
                              // {step.func}
                          </p>
                          {/* 1. Fluid Typography (9vw) - Adjusted for single line */}
                          <h3 className={`text-[9vw] md:text-6xl font-black text-white leading-[0.85] tracking-tighter uppercase whitespace-nowrap ${step.title === 'EXECUTE' ? 'animate-pulse duration-75' : ''}`}>
                              {step.title}
                          </h3>
                          
                          <p className="mt-4 text-sm text-gray-400 font-mono leading-relaxed max-w-[95%]">
                              {step.desc}
                          </p>
                      </div>
                  </div>
               ))}
            </div>

            {/* =========================================
                DESKTOP: LOGIC CARDS (>= lg)
                ========================================= */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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

         {/* 3. VERSION HISTORY - Mobile Optimized ("Cryptographic Ledger") */}
         <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12" aria-labelledby="changelog-heading">
            
            {/* Timeline Graphic / Header */}
            <div className="lg:col-span-4 relative">
               <div className="lg:sticky lg:top-32">
                  {/* MOBILE HEADER (< lg) */}
                  <div className="block lg:hidden mb-2">
                      <div className="font-mono text-[10px] text-gray-500 text-center border-b border-gray-800 pb-2 mb-4">
                         // SYSTEM_LEDGER //
                      </div>
                  </div>

                  {/* DESKTOP HEADER (>= lg) */}
                  <div className="hidden lg:block">
                     <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">CHANGELOG</h2>
                     <p className="text-gray-500 font-mono text-xs sm:text-sm mb-6 sm:mb-12">System updates and patches.</p>
                     
                     <div className="block relative h-64 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                        <FaTerminal className="text-6xl text-white/5" aria-hidden="true" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                           <div className="text-4xl font-bold text-cyan-500">v2.0</div>
                           <div className="text-xs font-mono text-gray-400">CURRENT_STABLE</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Timeline Items */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
               
               {/* =========================================
                   MOBILE: CRYPTOGRAPHIC LEDGER (< lg)
                   "Blockchain / Server Log" Aesthetic
                   ========================================= */}
               <div className="block lg:hidden font-mono text-xs space-y-0.5">
                  {timeline.map((item, index) => (
                      <div key={index} className="bg-black border-l border-b border-gray-800/50 py-4 px-3 relative group">
                          {/* 1. Header (Hash Key) */}
                          <div className="flex items-center gap-2 mb-3">
                              <span className="text-emerald-400 bg-emerald-950/20 px-2 py-1 rounded-sm border border-emerald-900/50 text-[10px] font-bold tracking-wider">
                                  [ {item.year} ]
                              </span>
                          </div>
                          
                          {/* 2. Content (Key-Value) */}
                          <div className="space-y-1.5 text-gray-500 pl-2 border-l border-emerald-500/30 ml-1">
                               <div className="flex items-start">
                                   <span className="text-gray-600 mr-2">&gt;</span> 
                                   <span className="text-gray-400 w-12">STATUS:</span>
                                   <span className="text-white font-bold ml-1">{item.event.split(':')[0] || 'UPDATED'}</span>
                               </div>
                               <div className="flex items-start">
                                   <span className="text-gray-600 mr-2">&gt;</span>
                                   <span className="text-gray-400 w-12">SOURCE:</span>
                                   <span className="text-cyan-400 ml-1">{item.loc.replace(/ /g, '_').replace(/,/g, '').toUpperCase()}</span>
                               </div>
                               <div className="flex items-start mt-1">
                                   <span className="text-gray-600 mr-2">&gt;</span>
                                   <span className="text-gray-400 w-12">MSG:</span>
                                   <span className="text-gray-500 italic ml-1 line-clamp-2">"{item.desc}"</span>
                               </div>
                          </div>

                          {/* 3. Barcode Texture (Right Absolute) */}
                          <div className="absolute right-2 top-4 opacity-10 flex flex-col items-end gap-1 pointer-events-none">
                              <div className="w-16 h-1 bg-white"></div>
                              <div className="w-12 h-1 bg-white"></div>
                              <div className="w-8 h-1 bg-white"></div>
                              <div className="w-14 h-1 bg-white"></div>
                              <div className="w-4 h-1 bg-white"></div>
                          </div>
                      </div>
                  ))}
               </div>

               {/* =========================================
                   DESKTOP: STANDARD TIMELINE (>= lg)
                   ========================================= */}
               <div className="hidden lg:block space-y-8">
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
