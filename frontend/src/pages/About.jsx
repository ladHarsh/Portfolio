import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaBrain, FaServer, FaDatabase, FaMicrochip, FaDownload, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { SiPython } from "react-icons/si";

const About = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  // Auto-cycle through the "DNA" segments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const timeline = [
    { year: "2026", event: "SYSTEM_UPGRADE: B.Tech Completion", desc: "Specializing in AI/ML Architectures", loc: "KPGU, Vadodara" },
    { year: "2024", event: "CORE_UPDATE: Full Stack Integration", desc: "Mastered MERN & Predictive Modeling", loc: "Remote / Hybrid" },
    { year: "2022", event: "INITIAL_BOOT: CS Foundation", desc: "Started Engineering Journey", loc: "Vadodara" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 0. Circuit Background */}
      <div className="fixed inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className="section-container relative z-10">

        {/* 1. HERO: SPLIT IDENTITY */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-center">
            
            {/* LEFT: The "Digital Soul" */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="lg:col-span-5 relative"
            >
               <div className="relative z-10 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden p-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-[scan_4s_ease-in-out_infinite] z-20 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
                  
                  <div className="relative h-[500px] w-full bg-gray-900 rounded-xl overflow-hidden group">
                     <img src="/1767449525085.jpg" alt="Harsh Lad" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125" />
                     
                     {/* HUD Overlay */}
                     <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                           <FaMicrochip className="text-4xl text-cyan-500/50 animate-pulse" />
                           <div className="text-right">
                              <div className="text-[10px] font-mono text-cyan-500">ID: HARSH_LAD</div>
                              <div className="text-[10px] font-mono text-gray-400">CLASS: ARCHITECT</div>
                           </div>
                        </div>

                        <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                           <div className="flex items-center gap-3 mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                              <span className="text-xs font-mono text-green-400 font-bold">SYSTEM_OPTIMIZED</span>
                           </div>
                           <p className="text-xs text-gray-300 font-mono leading-relaxed">
                              "Engineering is not just code; it is the architecture of intelligence. I build systems that think."
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Decorative Elements */}
               <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl"></div>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30 rounded-br-2xl"></div>
            </motion.div>

            {/* RIGHT: The "Specs" */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="lg:col-span-7 space-y-8"
            >
               <div>
                  <h1 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-4 tracking-tighter">
                     DIGITAL<br/>TWIN
                  </h1>
                  <div className="h-1 w-32 bg-cyan-500 rounded-full mb-6"></div>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light border-l-2 border-cyan-500/30 pl-6">
                     I am an <span className="text-white font-bold">AI Engineer</span> bridging the gap between biological cognition and silicon efficiency. 
                     My mission is to architect scalable, intelligent software that solves complexity with elegance.
                  </p>
               </div>

               {/* Animated Spec Grid */}
               <div className="grid grid-cols-2 gap-4">
                  {[
                     { label: "ARCH_TYPE", val: "Neural_Hybrid" },
                     { label: "CORE_LANG", val: "Python / JS" },
                     { label: "UPTIME", val: "99.9% (Always Learning)" },
                     { label: "VERSION", val: "2.0.4 (Stable)" }
                  ].map((spec, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col hover:bg-white/10 transition-colors">
                        <span className="text-[10px] text-cyan-500 font-mono tracking-widest mb-1">{spec.label}</span>
                        <span className="text-lg font-bold font-display">{spec.val}</span>
                     </div>
                  ))}
               </div>

               <div className="flex gap-4 pt-4">
                  <a href="/resume.pdf" target="_blank" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono tracking-widest text-xs flex items-center gap-2 transition-all hover:scale-105">
                     <FaDownload /> EXPORT_BLUEPRINT
                  </a>
                  <a href="https://linkedin.com/in/harsh-lad-dev" target="_blank" className="px-8 py-4 border border-white/20 hover:border-cyan-500 text-white font-mono tracking-widest text-xs flex items-center gap-2 transition-all">
                     <FaLinkedin /> LINK_NETWORK
                  </a>
               </div>
            </motion.div>
        </div>

        {/* 2. THE ALGORITHM: "How I Work" */}
        <div className="mb-32">
           <div className="flex items-center gap-4 mb-12">
              <span className="h-px bg-white/20 flex-1"></span>
              <h2 className="text-2xl font-bold font-mono text-cyan-500 tracking-[0.2em]">PROCESSING_LOGIC</h2>
              <span className="h-px bg-white/20 flex-1"></span>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                 { icon: FaBrain, title: "INGEST", desc: "Analyzing raw problem spaces and identifying data patterns." },
                 { icon: FaCode, title: "COMPILE", desc: "Architecting efficient, scalable code structures to solve the core issue." },
                 { icon: FaServer, title: "DEPLOY", desc: "Releasing robust solutions into production environments." }
              ].map((step, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="relative group bg-black border border-white/10 p-8 rounded-2xl overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <step.icon className="text-9xl text-white" />
                    </div>
                    <div className="text-cyan-500 text-xs font-mono mb-4">STEP_0{i+1}</div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light">{step.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* 3. VERSION HISTORY (Timeline) */}
        <div className="grid lg:grid-cols-12 gap-12">
           
           {/* Timeline Graphic */}
           <div className="lg:col-span-4 relative hidden lg:block">
              <div className="sticky top-32">
                 <h3 className="text-4xl font-display font-bold text-white mb-2">CHANGELOG</h3>
                 <p className="text-gray-500 font-mono text-sm mb-12">System updates and patches.</p>
                 
                 <div className="relative h-64 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <FaTerminal className="text-6xl text-white/5" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                       <div className="text-4xl font-bold text-cyan-500">v2.0</div>
                       <div className="text-xs font-mono text-gray-400">CURRENT_STABLE</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Timeline Items */}
           <div className="lg:col-span-8 space-y-8">
              {timeline.map((item, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                 >
                    {/* Time Marker */}
                    <div className="flex flex-col items-center">
                       <div className="w-4 h-4 rounded-full bg-cyan-700 border-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
                       {index !== timeline.length - 1 && <div className="w-px h-full bg-gray-800 my-2"></div>}
                    </div>

                    {/* Content */}
                    <div className="pb-12">
                       <div className="flex items-baseline gap-4 mb-2">
                          <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.year}</h4>
                          <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{item.loc}</span>
                       </div>
                       <h5 className="text-lg font-bold text-gray-300 mb-2 font-display">{item.event}</h5>
                       <p className="text-gray-400 max-w-lg">{item.desc}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default About;
