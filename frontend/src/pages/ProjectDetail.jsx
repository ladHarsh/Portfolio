import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaServer, 
  FaBrain, FaChartPie, FaKey, FaArrowLeft, FaExclamationTriangle, FaBolt, FaCopy, FaLightbulb,
  FaLayerGroup, FaCheck, FaTerminal, FaCode, FaMicrochip, FaNetworkWired, FaMemory
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiStreamlit, SiScikitlearn, 
  SiPandas, SiNumpy, SiOpenai, SiFramer, SiGoogle, SiSocketdotio, SiVite,
  SiNextdotjs, SiFlask, SiJsonwebtokens
} from 'react-icons/si';

import { projectsApi } from "../services/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ProjectRating from "../components/ui/ProjectRating";
import AIEngineStatus from "../components/ui/AIEngineStatus";
import MLEngineStatus from "../components/ui/MLEngineStatus";
import NLPEngineStatus from "../components/ui/NLPEngineStatus";
import DemoCredentials from "../components/ui/DemoCredentials";

// --- RICH CONTENT MAP ---
const RICHER_CONTENT = {
  "otakutrack": {
    videoUrl: "https://youtu.be/uHt8Zom13cw", 
    architecture: [
       { title: "JWT_ACCESS_CONTROL", desc: "Custom Middleware enforcing Role-Based Access (User/Mod/Admin)." },
       { title: "AGGREGATION_PIPELINE", desc: "MongoDB $lookup & $group stages computing metrics in <60ms." },
       { title: "OPTIMISTIC_UI", desc: "React Query cache invalidation for zero-latency feedback." }
    ],
    impact: [
       { title: "HIGH_CONCURRENCY", desc: "Handlers optimized for 1000+ simultaneous analytics requests." },
       { title: "VISUAL_TELEMETRY", desc: "Raw logs transformed into 'Viewing Velocity' graphs." },
       { title: "AUTONOMOUS_MOD", desc: "Decentralized community governance protocols." }
    ],
    status: { cpu: "45%", ram: "1.2GB", net: "ACTIVE" }
  },
  "designmate-ai": {
    videoUrl: "https://youtu.be/ReS6LMpoUiQ",
    architecture: [
       { title: "BUFFER_STREAMING", desc: "In-memory image processing avoiding disk I/O bottlenecks." },
       { title: "VISION_TRANSFORMER", desc: "Gemini 1.5 Pro extracting UI topology & hex codes." },
       { title: "CODE_SYNTHESIS", desc: "Recursive mapping of visual elements to Tailwind utility classes." }
    ],
    impact: [
       { title: "VELOCITY_INCREASE", desc: "90% reduction in frontend boilerplate generation time." },
       { title: "COMPLIANCE_CHECK", desc: "Automated WCAG accessibility validation pre-render." },
       { title: "MULTIMODAL_INPUT", desc: "Native support for wireframe sketches & high-fidelity mocks." }
    ],
    status: { cpu: "88%", ram: "4.1GB", net: "UPLINK" }
  },
  "career-launch": {
    videoUrl: "https://youtu.be/jdLr-34M-_A",
    architecture: [
       { title: "PDF_EXTRACTION", desc: "Dual-engine parsing (OCR + Text Layer) for multi-column resumes." },
       { title: "TF-IDF_VECTORIZER", desc: "Statistical weighting of domain-specific keywords." },
       { title: "COSINE_SIMILARITY", desc: "High-dimensional vector comparison for relevance scoring." }
    ],
    impact: [
       { title: "QUANTIFIED_MATCH", desc: "Deterministic 0-100% scoring replacing subjective review." },
       { title: "GAP_ANALYSIS", desc: "Instant identification of missing competencies." },
       { title: "ZERO_RETENTION", desc: "Privacy-first architecture; data purged post-session." }
    ],
    status: { cpu: "12%", ram: "512MB", net: "SECURE" }
  },
  "vibestream": {
      videoUrl: "https://youtu.be/0zz2Y1T1cqg",
      architecture: [
          { title: "METADATA_VECTORIZATION", desc: "Embedding plot, genre, and cast into N-dimensional space." },
          { title: "PRECOMPUTED_MATRIX", desc: "O(1) lookups via cached similarity scores." },
          { title: "HYBRID_FALLBACK", desc: "Popularity heuristics injected when confidence scores drop." }
      ],
      impact: [
          { title: "COLD_START_ZERO", desc: "Context-aware suggestions without user history." },
          { title: "LATENCY_OPTIMIZED", desc: "Sub-100ms response time via matrix caching." },
          { title: "SERENDIPITY_ENGINE", desc: "Discovery of hidden gems via semantic linkages." }
      ],
      status: { cpu: "67%", ram: "2.4GB", net: "LIVE" }
  }
};

// Fallback architecture for projects without specific rich data
const DEFAULT_ARCHITECTURE = [
   { title: "CLIENT_INTERFACE_LAYER", desc: "High-performance React/Vite frontend with component-based architecture." },
   { title: "LOGIC_CONTROLLER", desc: "RESTful API services managing data flow and business logic." },
   { title: "DATA_PERSISTENCE", desc: "Scalable database layer ensuring data integrity and rapid retrieval." }
];

const ProjectDetails = () => {
  const { slug } = useParams();
  const [apiProject, setApiProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetch = async () => {
       try {
          const res = await projectsApi.getBySlug(slug);
          setApiProject(res.data);
       } catch (e) {
          console.error(e);
       } finally {
          setLoading(false);
       }
    };
    fetch();
  }, [slug]);

  if (loading) return <div className="h-screen bg-black flex items-center justify-center text-cyan-500 font-mono">INITIALIZING_MODULE_VIEWER...</div>;
  if (!apiProject) return <div className="h-screen bg-black text-white">MODULE_NOT_FOUND_IN_REGISTRY</div>;

  const richData = RICHER_CONTENT[slug] || {};
  const project = { ...apiProject, ...richData };
  const architecture = (Array.isArray(project.architecture) && project.architecture.length > 0) 
      ? project.architecture 
      : DEFAULT_ARCHITECTURE;
      
  const impact = project.impact || [
     { title: "SYSTEM_OPTIMIZATION", desc: "Improved workflow efficiency through automated processes." },
     { title: "USER_ENGAGEMENT", desc: "Enhanced user interaction with intuitive design patterns." },
     { title: "SCALABLE_INFRASTRUCTURE", desc: "Built to handle growing data and user concurrency." }
  ];
  const status = project.status || { cpu: "30%", ram: "1GB", net: "STANDBY" };

  // Helper for Tech Icons
  const getTechIcon = (name) => {
    const n = (typeof name === 'string' ? name : name.name).toLowerCase();
    if (n.includes('react')) return <FaReact />;
    if (n.includes('node')) return <FaNodeJs />;
    if (n.includes('mongo')) return <SiMongodb />;
    if (n.includes('python')) return <FaBrain />;
    if (n.includes('flask')) return <SiFlask />;
    if (n.includes('next')) return <SiNextdotjs />;
    if (n.includes('type')) return <FaCode />;
    if (n.includes('tail')) return <SiTailwindcss />;
    return <FaMicrochip />;
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 font-sans selection:bg-cyan-500 selection:text-black">
       
       {/* Global Grid Overlay */}
       <div className="fixed inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

       <div className="section-container relative z-10 max-w-7xl mx-auto px-6">
          
          {/* 1. HEADER: Command Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/10 pb-8 relative z-50">
             <div>
                <Link to="/projects" className="flex items-center gap-2 text-xs font-mono text-cyan-500 mb-4 hover:text-white transition-colors relative z-50 hover:translate-x-1 duration-200 cursor-pointer">
                   <FaArrowLeft /> RETURN_TO_GRID
                </Link>
                <div className="flex items-center gap-3 mb-2">
                   <span className="px-2 py-0.5 bg-white/10 text-white text-[10px] font-bold font-mono tracking-widest rounded border border-white/20">
                      MOD::{project.category ? project.category.toUpperCase() : "APPS"}
                   </span>
                   {project.videoUrl && (
                      <span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-900/30 text-red-400 text-[10px] font-bold font-mono tracking-widest rounded border border-red-500/30">
                         <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> LIVE_FEED
                      </span>
                   )}
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">{project.title}</h1>
                <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">{project.shortDescription}</p>
             </div>

             <div className="flex gap-4">
                {project.liveUrl && (
                   <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold font-mono text-xs tracking-widest hover:bg-cyan-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                      <FaExternalLinkAlt /> LAUNCH_SYS
                   </a>
                )}
                <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 border border-white/20 bg-white/5 text-white font-mono text-xs tracking-widest hover:bg-white/10 hover:border-white/40 transition-all">
                   <FaGithub /> SOURCE_CODE
                </a>
             </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
             
             {/* LEFT: MAIN VISUAL & ARCHITECTURE */}
             <div className="lg:col-span-8 space-y-12">
                
                {/* Visual Feed */}
                <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl">
                   {/* Corner Accents */}
                   <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 z-20"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 z-20"></div>
                   
                   {project.videoUrl ? (
                      <iframe 
                         src={`https://www.youtube.com/embed/${project.videoUrl.split('/').pop().replace('watch?v=', '')}?autoplay=0&controls=1&showinfo=0&rel=0`}
                         className="w-full h-full"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                      ></iframe>
                   ) : (
                      <img src={project.thumbnail} className="w-full h-full object-cover opacity-80" />
                   )}
                   
                   {/* Scanline Overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] mix-blend-color-dodge bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20"></div>
                </div>

                {/* Challenge & Solution Modules */}
                <div className="grid md:grid-cols-2 gap-6">
                   {/* Challenge */}
                   <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-20">
                         <FaExclamationTriangle className="text-4xl text-red-500" />
                      </div>
                      <h3 className="text-xs font-bold font-mono text-red-500 mb-3 tracking-widest flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-red-500 rounded-sm animate-pulse"></span>
                         CONFLICT_DETECTED
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                         {project.problemStatement || "System constraints identified during initial reconnaissance."}
                      </p>
                   </div>

                   {/* Solution */}
                   <div className="bg-green-900/10 border border-green-500/20 p-6 rounded-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-20">
                         <FaLightbulb className="text-4xl text-green-500" />
                      </div>
                      <h3 className="text-xs font-bold font-mono text-green-500 mb-3 tracking-widest flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-green-500 rounded-sm"></span>
                         PROTOCOL_EXECUTED
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                         {project.solution || "Optimization protocols deployed successfully."}
                      </p>
                   </div>
                </div>

                {/* Architecture Breakdown */}
                <div className="relative">
                    {/* Decorator Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5"></div>
                    
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-8 font-display pl-12 relative">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-cyan-500/50"></span>
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500 rounded-full"></span>
                        <FaServer className="text-cyan-500" /> SYSTEM_ARCHITECTURE
                    </h2>
                    
                    <div className="grid gap-4 pl-12">
                      {architecture.map((item, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-lg hover:border-cyan-500/30 transition-colors group relative">
                              <div className="absolute -left-[53px] top-1/2 w-4 h-[1px] bg-white/20 group-hover:bg-cyan-500 transition-colors"></div>
                              <div className="absolute -left-[37px] top-1/2 w-2 h-2 rounded-full border border-white/20 bg-black group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all"></div>
                              
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-mono text-[10px] bg-cyan-900/30 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">LAYER_0{i+1}</span>
                                <h3 className="font-bold text-white font-display text-sm uppercase tracking-wide">{item.title}</h3>
                              </div>
                              <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-3 group-hover:border-cyan-500/30 transition-colors">
                                {item.desc}
                              </p>
                          </div>
                      ))}
                    </div>
                </div>

                {/* Core Capabilities */}
                <div className="relative">
                    {/* Decorator Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5"></div>
                    
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-8 font-display pl-12 relative">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-purple-500/50"></span>
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-purple-500 rounded-full"></span>
                        <FaMicrochip className="text-purple-500" /> CORE_LOGIC_MODULES
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-4 pl-12">
                      {project.features?.map((feature, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-lg hover:border-purple-500/30 transition-colors group relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                 <FaCode className="text-4xl text-purple-500" />
                              </div>
                              
                              <div className="flex items-center gap-3 mb-2 relative z-10">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></span>
                                <h3 className="font-bold text-white font-display text-sm uppercase tracking-wide">{feature.title || `MODULE_${i+1}`}</h3>
                              </div>
                              <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                                {feature.description || feature}
                              </p>
                          </div>
                      ))}
                    </div>
                </div>

             </div>

             {/* RIGHT: HUD & METRICS */}
             <div className="lg:col-span-4 space-y-8">
                
                {/* Live Status HUD (Specialized or Generic) */}
                {slug === 'designmate-ai' || slug === 'smartassign' ? (
                   <AIEngineStatus 
                      model={project.engineStatus?.algorithm}
                      provider={slug === 'designmate-ai' ? 'Google AI Studio' : undefined}
                      latency={project.engineStatus?.metric}
                   />
                ) : slug === 'vibestream' ? (
                   <MLEngineStatus />
                ) : slug === 'career-launch' ? (
                   <NLPEngineStatus />
                ) : (
                   <div className="bg-black border border-cyan-500/30 rounded-xl p-6 relative overflow-hidden group hover:border-cyan-500/60 transition-colors">
                      <div className="absolute top-0 right-0 p-2">
                         <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                      </div>
                      <h3 className="text-xs font-bold font-mono text-cyan-500 mb-6 tracking-widest">REALTIME_METRICS</h3>
                      
                      <div className="space-y-4">
                         <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-500 font-mono">CPU_LOAD</span>
                            <span className="text-white font-mono">{status.cpu}</span>
                         </div>
                         <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-500 font-mono">MEM_USAGE</span>
                            <span className="text-white font-mono">{status.ram}</span>
                         </div>
                         <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-500 font-mono">NET_STATUS</span>
                            <span className="text-green-500 font-bold font-mono">{status.net}</span>
                         </div>
                      </div>
                   </div>
                )}
                
                {/* Tech Stack Chips (Moved from Left) */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                   <h3 className="font-mono text-xs text-gray-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                      <FaMemory /> DEPENDENCIES_INSTALLED
                   </h3>
                   <div className="flex flex-wrap gap-2">
                      {project.techStack?.map((tech, i) => (
                         <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-black border border-white/20 rounded text-xs font-mono text-gray-300 hover:text-white hover:border-cyan-500 transition-colors cursor-default">
                            {getTechIcon(tech)}
                            {(typeof tech === 'string' ? tech : tech.name).toUpperCase()}
                         </div>
                      ))}
                   </div>
                </div>

                {/* Impact Analysis */}
                <div className="space-y-4">
                   <h3 className="text-xs font-bold font-mono text-gray-500 uppercase tracking-widest">IMPACT_ASSESSMENT</h3>
                   {impact.map((item, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-lg border-l-2 border-white/10 hover:border-cyan-500 transition-colors group">
                         <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                         <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                   ))}
                </div>

                {/* Credentials */}
                <DemoCredentials credentials={project.demoCredentials} />
                
                {/* Rating Component */}
                <div className="pt-4 border-t border-white/10">
                   <ProjectRating projectSlug={slug} />
                </div>

             </div>
          </div>
       </div>
    </div>
  );
};

export default ProjectDetails;
