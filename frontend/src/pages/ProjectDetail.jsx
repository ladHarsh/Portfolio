import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaServer, 
  FaBrain, FaChartPie, FaKey, FaArrowLeft, FaExclamationTriangle, FaBolt, FaCopy, FaLightbulb,
  FaLayerGroup, FaCheck, FaTerminal, FaCode, FaMicrochip, FaNetworkWired, FaMemory, FaGem, FaUpload, FaChartLine,
  FaRegEnvelope, FaPaw, FaLink, FaDna, FaFilePdf, FaCalculator
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiStreamlit, SiScikitlearn, 
  SiPandas, SiNumpy, SiOpenai, SiFramer, SiGoogle, SiSocketdotio, SiVite,
  SiNextdotjs, SiFlask, SiJsonwebtokens, SiFirebase, SiLeaflet, SiOpenstreetmap, SiGooglemaps, SiAxios,
  SiBootstrap, SiThemoviedatabase, SiReactquery, SiPlotly
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
    features: [
       { title: "REAL_TIME_AGGREGATION_PIPELINE", description: "Executes complex MongoDB $lookup and $group stages to compute user statistics in under 60ms." },
       { title: "RBAC_GOVERNANCE_LAYER", description: "Cryptographic role enforcement (Admin/Mod/User) protecting community integrity via custom middleware." },
       { title: "OPTIMISTIC_STATE_SYNC", description: "React Query implementation providing zero-latency UI feedback before server confirmation." },
       { title: "DATA_VISUALIZATION_KERNEL", description: "Transforms raw watch history logs into interactive velocity charts and heatmaps via Recharts." }
    ],
    status: { cpu: "45%", ram: "1.2GB", net: "ACTIVE" }
  },
  "smartassign": {
    videoUrl: "https://youtu.be/cqtb4iDCn2M",
    architecture: [
       { title: "TIER_1_INGESTION", desc: "Multer/PDF-Parse buffering raw document streams for high-throughput intake." },
       { title: "TIER_2_INFERENCE", desc: "LangChain RAG pipeline feeding Groq Llama-3-70B via Context Windows." },
       { title: "TIER_3_PERSISTENCE", desc: "MongoDB indexing with relational pointers for O(log n) retrieval." }
    ],
    impact: [
       { title: "LATENCY_ELIMINATION", desc: "99% reduction in feedback time (weeks to seconds)." },
       { title: "VARIANCE_ZERO", desc: "Absolute scoring consistency across thousands of submissions." },
       { title: "COGNITIVE_FREEDOM", desc: "Liberates faculty from 60% of repetitive administrative load." }
    ],
    features: [
       { title: "ZERO_SHOT_AUDIT", description: "Deploys LLMs to audit student reasoning against ground truth schemas without prior fine-tuning." },
       { title: "RECURSIVE_CHAINING", description: "Deconstructs complex prompts into atomic logic gates using Chain-of-Thought reasoning for granular scoring." },
       { title: "VELOCITY_DASHBOARD", description: "Live telemetry visualization of learning curves and grade distribution via Chart.js." },
       { title: "ASYNC_EVENT_BUS", description: "Non-blocking notification queues triggering instant alerts upon evaluation completion." }
    ],
    engineStatus: {
      algorithm: "LLAMA-3-70B",
      metric: "75ms/TOKEN SPEED"
    },
    status: { cpu: "72%", ram: "3.5GB", net: "ACTIVE" }
  },
  "designmate-ai": {
    videoUrl: "https://youtu.be/ReS6LMpoUiQ",
    architecture: [
       { title: "MULTI_MODAL_INGESTION", desc: "Gemini 2.5 Flash Vision pipeline implementing Chain-of-Thought reasoning on raw pixels." },
       { title: "STRUCTURAL_DETERMINISM", desc: "Zod Schema Validation forcing LLM output into strictly typed, compilable JSON." },
       { title: "MEMORY_STREAM_PROCESSING", desc: " Zero-disk latency via in-memory Multer buffer streams for image analysis." },
       { title: "ATOMIC_SYNTHESIS", desc: "Recursive algorithm mapping abstract design tokens to Tailwind utility classes." }
    ],
    impact: [
       { title: "VELOCITY_ACCELERATION", desc: "Automates 40% of the design-to-code feedback loop." },
       { title: "COMPLIANCE_ENFORCEMENT", desc: "Mathematical verification of WCAG AA/AAA contrast ratios." },
       { title: "COGNITIVE_OFFLOAD", desc: "Eliminates decision fatigue for typography and color theory." }
    ],
    features: [
       { title: "HEURISTIC_VISION_AUDIT", description: "Uses Vision models to 'see' uploaded designs and generate a Senior-level critique based on Usability, Accessibility, and Visual Hierarchy." },
       { title: "DETERMINISTIC_LAYOUT_SYNTHESIS", description: "Transforms abstract text requirements into strictly typed, responsive HTML/Tailwind components relative to industry best practices." },
       { title: "ACCESSIBILITY_ENFORCER", description: "Auto-generates color palettes and typestyles that mathematically pass WCAG AA/AAA contrast ratios." },
       { title: "TREND_ANALYSIS_ENGINE", description: "Aggregates current design patterns to ensure output styles match modern market standards (Glassmorphism, Bento Grids, etc.)." }
    ],
    engineStatus: { 
       algorithm: "GEMINI 2.5 FLASH", 
       metric: "45ms INFERENCE" 
    },
    status: { cpu: "88%", ram: "4.1GB", net: "UPLINK" }
  },
  "career-launch": {
    videoUrl: "https://youtu.be/jdLr-34M-_A",
    architecture: [
       { title: "VECTOR_SPACE_PROJECTION", desc: "Mapping textual data into high-dimensional coordinator systems for mathematical comparison." },
       { title: "B.O.W_TOKENIZATION", desc: "Scikit-learn pipeline converting raw strings into numerical feature arrays." },
       { title: "SEMANTIC_DISTANCE_CALC", desc: "Calculating the exact cosine angle between candidate vectors and target requirements." }
    ],
    impact: [
       { title: "ALGORITHMIC_PENETRATION", desc: "Reverse-engineering the logic used by 98% of Fortune 500 hiring bots." },
       { title: "DETERMINISTIC_SCORING", desc: "Replacing subjective guessing with hard mathematical probability metrics." },
       { title: "PRIVACY_SOVEREIGNTY", desc: "All NLP operations execute locally in a stateless environment." }
    ],
    features: [
       { title: "COSINE_SCORING_KERNEL", description: "Replaces confidence intervals with hardness 0-100% similarity metrics derived from vector dot products." },
       { title: "VECTOR_SPACE_PROJECTION", description: "Maps candidate profiles into n-dimensional feature space to identify semantic proximity to job requirements." },
       { title: "SEMANTIC_GAP_DETECTOR", description: "Categorizes missing keywords as 'False Negatives' or 'Hard Gaps' for actionable injection strategies." },
       { title: "PRIVACY_ENCLAVE", description: "Executes all NLP operations in local memory or stateless sessions to ensure zero data retention." }
    ],
    status: { cpu: "82%", ram: "600MB", net: "SECURE" }
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
      features: [
          { title: "SEMANTIC_DNA_PROFILING", description: "Deconstructs films into 5,000+ vector features to map narrative and tonal fingerprints." },
          { title: "ZERO_HISTORY_INFERENCE", description: "Delivers highly relevant recommendations instantly without requiring a single byte of user history." },
          { title: "VECTOR_SPACE_CACHING", description: "Pre-computed 4803x4803 similarity matrix enables constant-time O(1) query performance." },
          { title: "HYBRID_METADATA_FUSION", description: "Synthesizes plot keywords, cast nodes, and directorial style into a unified similarity index." }
      ],
      status: { cpu: "67%", ram: "2.4GB", net: "LIVE" }
  },
  "cookie-chat": {
      videoUrl: "https://youtu.be/YOUR_COOKIE_VIDEO_ID",
      architecture: [
          { title: "STREAM_SDK_INTEGRATION", desc: "Offloaded real-time chat and video to Stream API for enterprise-grade reliability." },
          { title: "LANGUAGE_MATCHING", desc: "MongoDB indexed queries match users by native/learning languages in <50ms." },
          { title: "JWT_COOKIE_AUTH", desc: "HTTP-only cookies with bcrypt hashing prevent XSS and ensure secure sessions." },
          { title: "STATE_ORCHESTRATION", desc: "Zustand (global) + React Query (server) for optimized data flow." }
      ],
      impact: [
          { title: "ZERO_LATENCY_CHAT", desc: "Stream SDK delivers sub-100ms message delivery with WebSocket fallback." },
          { title: "SMART_PAIRING", desc: "Language-based matching connects learners with compatible practice partners." },
          { title: "SCALABLE_VIDEO", desc: "Stream Video SDK handles multi-participant HD calls without custom WebRTC." },
          { title: "THEME_FLEXIBILITY", desc: "DaisyUI theming enables instant dark/light mode switching." }
      ],
      features: [
          { title: "EDGE_NETWORK_ROUTING", description: "Offloads heavy media transport to distributed edge nodes for sub-50ms global latency." },
          { title: "LINGUISTIC_MATCHING_KERNEL", description: "Indexed MongoDB queries map native-to-target language pairs for optimal user pairing." },
          { title: "STATELESS_JWT_AUTH", description: "Secure, scalable session management using short-lived tokens and HTTP-only cookies." },
          { title: "REACTIVE_UI_SYNCHRONIZATION", description: "Zustand state manager handles real-time socket events for instant UI updates." }
      ],
      status: { cpu: "38%", ram: "1.1GB", net: "STREAM" }
  },
  "ai-trip-planner": {
      videoUrl: "https://youtu.be/2isgUskJNqY",
      architecture: [
          { title: "DUAL_TOKEN_AUTH", desc: "JWT access (15min) + refresh (7d) tokens for seamless session management." },
          { title: "FLASH_INFERENCE_CORE", desc: "Gemini 2.5 Flash pipeline optimized for single-shot itinerary synthesis < 2s." },
          { title: "OPEN_SOURCE_GEO_GRID", desc: "Leaflet.js rendering OpenStreetMap vector tiles for cost-free, high-fidelity mapping." },
          { title: "REACTIVE_CACHE", desc: "React Query managing server state with optimistic updates and background sync." }
      ],
      impact: [
          { title: "ZERO_OVERHEAD_SCALING", desc: "Decoupled from expensive Maps APIs using community-driven OSM data." },
          { title: "SPATIAL_INTELLIGENCE", desc: "Integration of maps and text creates a cohesive travel planning experience." },
          { title: "USER_EMPOWERMENT", desc: "Allows users to focus on the 'what' instead of the 'how' of travel." }
      ],
      features: [
          { title: "GEOSPATIAL_REASONING_CORE", description: "Merges abstract user intent with rigid latitude/longitude constraints to generate viable routes." },
          { title: "CONSTRAINT_SATISFACTION_ENGINE", description: "Solving for budget, time, and rating thresholds simultaneously in < 2 seconds." },
          { title: "OPEN_METADATA_FUSION", description: "Aggregates live point-of-interest data via OpenStreetMap Overpass API." },
          { title: "DYNAMIC_ITINERARY_GENERATION", description: "Constructs day-by-day schedules optimized for proximity and 'flow'." }
      ],
      engineStatus: {
          algorithm: "GEMINI 2.5 FLASH",
          metric: "2s GENERATION"
      },
      status: { cpu: "89%", ram: "3.2GB", net: "ACTIVE" }
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

  if (loading) return <div className="h-screen bg-black flex items-center justify-center text-cyan-500 font-mono text-xs sm:text-sm">INITIALIZING_MODULE_VIEWER...</div>;
  if (!apiProject) return <div className="h-screen bg-black text-white flex items-center justify-center font-mono text-xs sm:text-sm">MODULE_NOT_FOUND_IN_REGISTRY</div>;

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

  // Helper for Tech Icons (Official Brand Colors)
  const getTechIcon = (name) => {
    const n = (typeof name === 'string' ? name : name.name).toLowerCase();
    
    if (n.includes('react')) return <FaReact className="text-[#61DAFB] text-base sm:text-lg" />;
    if (n.includes('node')) return <FaNodeJs className="text-[#68A063] text-base sm:text-lg" />;
    if (n.includes('express')) return <SiExpress className="text-white text-base sm:text-lg" />;
    if (n.includes('mongo')) return <SiMongodb className="text-[#47A248] text-base sm:text-lg" />;
    if (n.includes('gemini')) return <FaBolt className="text-yellow-400 text-base sm:text-lg" />;
    if (n.includes('framer')) return <SiFramer className="text-white text-base sm:text-lg" />;
    if (n.includes('tail')) return <SiTailwindcss className="text-[#38B2AC] text-base sm:text-lg" />;
    if (n.includes('socket')) return <SiSocketdotio className="text-white text-base sm:text-lg" />;
    if (n.includes('zod')) return <FaGem className="text-[#3E67B1] text-base sm:text-lg" />;
    if (n.includes('jwt')) return <SiJsonwebtokens className="text-[#D63AFF] text-base sm:text-lg" />;
    if (n.includes('multer')) return <FaUpload className="text-[#F06529] text-base sm:text-lg" />;
    if (n.includes('python')) return <FaBrain className="text-[#3776AB] text-base sm:text-lg" />;
    if (n.includes('next')) return <SiNextdotjs className="text-white text-base sm:text-lg" />;
    if (n.includes('vite')) return <SiVite className="text-[#646CFF] text-base sm:text-lg" />;
    if (n.includes('firebase')) return <SiFirebase className="text-[#FFCA28] text-base sm:text-lg" />;
    if (n.includes('map') && n.includes('google')) return <SiGooglemaps className="text-[#4285F4] text-base sm:text-lg" />;
    if (n.includes('leaflet')) return <SiLeaflet className="text-[#199900] text-base sm:text-lg" />;
    if (n.includes('openstreetmap')) return <SiOpenstreetmap className="text-[#7EBC6F] text-base sm:text-lg" />;
    if (n.includes('axios')) return <SiAxios className="text-[#5A29E4] text-base sm:text-lg" />;
    if (n.includes('rechart')) return <FaChartLine className="text-[#22B5BF] text-base sm:text-lg" />;
    if (n.includes('stream')) return <FaNetworkWired className="text-[#005FFF] text-base sm:text-lg" />;
    if (n.includes('bootstrap')) return <SiBootstrap className="text-[#7952B3] text-base sm:text-lg" />;
    if (n.includes('chart.js')) return <FaChartPie className="text-[#FF6384] text-base sm:text-lg" />;
    if (n.includes('nodemailer')) return <FaRegEnvelope className="text-[#2DD4BF] text-base sm:text-lg" />;
    if (n.includes('tmdb')) return <SiThemoviedatabase className="text-[#01B4E4] text-base sm:text-lg" />;
    if (n.includes('daisy')) return <FaDna className="text-[#1AD1A5] text-base sm:text-lg" />;
    if (n.includes('zustand')) return <FaPaw className="text-white text-base sm:text-lg" />;
    if (n.includes('query')) return <SiReactquery className="text-[#FF4154] text-base sm:text-lg" />;
    if (n.includes('groq')) return <FaMicrochip className="text-[#F55036] text-base sm:text-lg" />;
    if (n.includes('langchain')) return <FaLink className="text-white text-base sm:text-lg" />;
    if (n.includes('scikit')) return <SiScikitlearn className="text-[#F7931E] text-base sm:text-lg" />;
    if (n.includes('pandas')) return <SiPandas className="text-[#150458] text-base sm:text-lg" />;
    if (n.includes('numpy')) return <SiNumpy className="text-[#013243] text-base sm:text-lg" />;
    if (n.includes('plotly')) return <SiPlotly className="text-white text-base sm:text-lg" />;
    if (n.includes('pdf')) return <FaFilePdf className="text-red-500 text-base sm:text-lg" />;
    if (n.includes('vector') || n.includes('cosine')) return <FaCalculator className="text-gray-300 text-base sm:text-lg" />;

    return <FaMicrochip className="text-gray-400 text-base sm:text-lg" />;
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-16 md:pb-20 font-sans selection:bg-cyan-500 selection:text-black">
       
       {/* Global Grid Overlay - Reduced on mobile */}
       <div className="fixed inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-5 sm:opacity-10 pointer-events-none" aria-hidden="true"></div>

       <div className="section-container relative z-10 max-w-7xl mx-auto px-0 sm:px-4 md:px-6">
          
          {/* MOBILE HOLODECK HEADER (< md) */}
          <div className="block md:hidden">
             {/* Back Navigation */}
             <div className="px-4 mb-4 relative z-50">
                <Link to="/projects" className="flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-white transition-colors hover:translate-x-1 duration-200 min-h-[44px] items-center" aria-label="Return to projects grid">
                   <FaArrowLeft aria-hidden="true" /> Back to Projects
                 </Link>
              </div>

              {/* 1. Control Deck - Title & Overview First */}
              <div className="px-4 py-6 bg-black/80 backdrop-blur-sm border-y border-white/10 mb-6">
                 {/* Category Badge */}
                 <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-white/10 text-white text-[9px] font-bold font-mono tracking-widest rounded border border-white/20">
                       DOMAIN::{project.category ? project.category.toUpperCase() : "APPS"}
                    </span>
                </div>
                
                {/* Title */}
                <h1 className="text-3xl font-display font-bold text-white mb-2 leading-tight">{project.title}</h1>
                
                {/* Description */}
                <p className="text-gray-400 text-sm font-light leading-relaxed">{project.shortDescription}</p>
             </div>

             {/* 2. HOLODECK - Video with Viewfinder Overlay */}
             <div className="relative w-full aspect-video bg-gray-900 overflow-hidden border-y border-white/10">
                {/* Video/Thumbnail */}
                {project.videoUrl ? (
                   <iframe 
                      src={`https://www.youtube.com/embed/${project.videoUrl.split('/').pop().replace('watch?v=', '')}?autoplay=0&controls=1&showinfo=0&rel=0`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${project.title} demo video`}
                   ></iframe>
                ) : (
                   <img src={project.thumbnail} alt={`${project.title} preview`} className="w-full h-full object-cover opacity-80" loading="lazy" />
                )}
                
                {/* Viewfinder Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                   {/* Corner Brackets */}
                   <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500/70"></div>
                   <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-500/70"></div>
                   <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-500/70"></div>
                   <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500/70"></div>
                   
                   {/* REC Indicator */}
                   <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full border border-red-500/50">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-[9px] font-mono text-red-400 tracking-wider">SYSTEM_DEMO</span>
                   </div>
                   
                   {/* Scanline Effect */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-10"></div>
                </div>
             </div>
          </div>

          {/* DESKTOP HEADER (>= md) - Preserved Original */}
          <header className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-8 sm:mb-12 border-b border-white/10 pb-6 sm:pb-8 relative z-50">
             <div className="w-full md:w-auto">
                <Link to="/projects" className="flex items-center gap-2 text-xs font-mono text-cyan-500 mb-3 sm:mb-4 hover:text-white transition-colors relative z-50 hover:translate-x-1 duration-200 cursor-pointer min-h-[44px] sm:min-h-0 items-center" aria-label="Return to projects grid">
                   <FaArrowLeft aria-hidden="true" /> Back to Projects
                </Link>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                   <span className="px-2 py-0.5 bg-white/10 text-white text-[9px] sm:text-[10px] font-bold font-mono tracking-widest rounded border border-white/20">
                      DOMAIN::{project.category ? project.category.toUpperCase() : "APPS"}
                   </span>
                   {project.videoUrl && (
                      <span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-900/30 text-red-400 text-[9px] sm:text-[10px] font-bold font-mono tracking-widest rounded border border-red-500/30">
                         <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></span> SYSTEM_DEMO
                      </span>
                   )}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 sm:mb-3 leading-tight">{project.title}</h1>
                <p className="text-gray-400 max-w-2xl text-sm sm:text-base lg:text-lg font-light leading-relaxed">{project.shortDescription}</p>
             </div>

             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                {project.liveUrl && (
                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-cyan-500 text-black font-bold font-mono text-xs tracking-widest hover:bg-cyan-400 active:bg-cyan-600 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)] min-h-[48px] rounded-sm" aria-label="Launch live demo">
                      <FaExternalLinkAlt aria-hidden="true" /> <span className="hidden sm:inline">LAUNCH_DEMO</span><span className="sm:hidden">DEMO</span>
                   </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border-2 border-white/20 bg-white/5 text-white font-mono text-xs tracking-widest hover:bg-white/10 active:bg-white/15 hover:border-white/40 transition-all min-h-[48px] rounded-sm" aria-label="View source code on GitHub">
                   <FaGithub aria-hidden="true" /> <span className="hidden sm:inline">VIEW_SOURCE</span><span className="sm:hidden">CODE</span>
                   </a>
             </div>
          </header>

          {/* Sticky Bottom Action Bar - Mobile Only */}
          <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
             <div className="flex gap-3">
                {project.liveUrl && (
                   <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold font-mono text-xs tracking-widest hover:from-cyan-500 hover:to-cyan-400 active:scale-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] min-h-[48px] rounded-sm"
                      aria-label="Launch live demo"
                   >
                      <FaExternalLinkAlt aria-hidden="true" /> LAUNCH
                   </a>
                )}
                <a 
                   href={project.githubUrl} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-white/20 bg-white/5 text-white font-mono text-xs tracking-widest hover:bg-white/10 active:bg-white/15 hover:border-white/40 transition-all min-h-[48px] rounded-sm"
                   aria-label="View source code on GitHub"
                >
                   <FaGithub aria-hidden="true" /> CODE
                </a>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
             
             {/* LEFT: MAIN VISUAL & ARCHITECTURE - Mobile optimized */}
             <main className="lg:col-span-8 space-y-8 sm:space-y-12">
                
                {/* Visual Feed - DESKTOP ONLY (Hidden on mobile since video is now at top) */}
                <div className="hidden md:block w-full aspect-video bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl">
                   {/* Corner Accents */}
                   <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 z-20" aria-hidden="true"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 z-20" aria-hidden="true"></div>
                   
                   {project.videoUrl ? (
                      <iframe 
                         src={`https://www.youtube.com/embed/${project.videoUrl.split('/').pop().replace('watch?v=', '')}?autoplay=0&controls=1&showinfo=0&rel=0`}
                         className="w-full h-full"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen
                         title={`${project.title} demo video`}
                      ></iframe>
                   ) : (
                      <img src={project.thumbnail} alt={`${project.title} preview`} className="w-full h-full object-cover opacity-80" loading="lazy" />
                   )}
                   
                   {/* Scanline Overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] mix-blend-color-dodge bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" aria-hidden="true"></div>
                </div>

                {/* Challenge & Solution - MOBILE: Terminal Stream */}
                <div className="block md:hidden px-4">
                   {/* Terminal Stream Container */}
                   <div className="bg-black border-l-2 border-gray-800 pl-4 my-6 space-y-6">
                      {/* Error Log */}
                      <div>
                         <div className="font-mono text-xs text-red-500 mb-2 tracking-wider">
                            &gt;&gt; [PROBLEM_IDENTIFIED]
                         </div>
                         <p className="text-gray-400 text-sm font-sans leading-relaxed">
                            {project.problemStatement || "System constraints identified during initial reconnaissance."}
                         </p>
                      </div>

                      {/* Patch Log */}
                      <div>
                         <div className="font-mono text-xs text-emerald-500 mb-2 tracking-wider">
                            &gt;&gt; [ENGINEERING_SOLUTION]
                         </div>
                         <p className="text-white text-sm font-sans leading-relaxed">
                            {project.solution || "Optimization protocols deployed successfully."}
                         </p>
                      </div>
                   </div>
                </div>

                {/* Challenge & Solution - DESKTOP: Original Cards */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                   {/* Challenge */}
                   <article className="bg-red-900/10 border border-red-500/20 p-4 sm:p-6 rounded-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 sm:p-3 opacity-20" aria-hidden="true">
                         <FaExclamationTriangle className="text-3xl sm:text-4xl text-red-500" />
                      </div>
                         <h3 className="text-[10px] sm:text-xs font-bold font-mono text-red-500 mb-2 sm:mb-3 tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-sm animate-pulse" aria-hidden="true"></span>
                          PROBLEM_IDENTIFIED
                       </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                         {project.problemStatement || "System constraints identified during initial reconnaissance."}
                      </p>
                   </article>

                   {/* Solution */}
                   <article className="bg-green-900/10 border border-green-500/20 p-4 sm:p-6 rounded-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 sm:p-3 opacity-20" aria-hidden="true">
                         <FaLightbulb className="text-3xl sm:text-4xl text-green-500" />
                      </div>
                       <h3 className="text-[10px] sm:text-xs font-bold font-mono text-green-500 mb-2 sm:mb-3 tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-sm" aria-hidden="true"></span>
                          ENGINEERING_SOLUTION
                       </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                         {project.solution || "Optimization protocols deployed successfully."}
                      </p>
                   </article>
                </div>

                {/* Architecture Breakdown - MOBILE: Vertical Bus */}
                <section className="block md:hidden px-4 my-8" aria-labelledby="architecture-heading-mobile">
                   <h2 id="architecture-heading-mobile" className="flex items-center gap-2 text-xl font-bold text-white mb-6 font-display">
                      <FaServer className="text-cyan-500 text-base" aria-hidden="true" /> SYSTEM_ARCHITECTURE
                   </h2>
                   
                   {/* The Vertical Bus */}
                   <div className="relative border-l border-dashed border-cyan-900 ml-2 pl-6 space-y-6">
                      {architecture.map((item, i) => (
                         <div key={i} className="relative">
                            {/* Node Connector Dot */}
                            <div className="absolute -left-[25px] top-2 w-2 h-2 bg-cyan-500 rounded-full"></div>
                            
                            {/* Content Block */}
                            <div>
                               <h3 className="font-mono text-[10px] text-cyan-500 mb-1 tracking-widest uppercase">
                                  LAYER_0{i+1} :: {item.title.replace(/_/g, ' ')}
                               </h3>
                               <p className="text-white text-sm leading-relaxed font-sans">
                                  {item.desc}
                               </p>
                            </div>
                         </div>
                      ))}
                   </div>
                </section>

                {/* Architecture Breakdown - DESKTOP: Original */}
                <section className="hidden md:block relative" aria-labelledby="architecture-heading">
                    {/* Decorator Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5" aria-hidden="true"></div>
                    
                    <h2 id="architecture-heading" className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 font-display sm:pl-12 relative">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-cyan-500/50" aria-hidden="true"></span>
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500 rounded-full" aria-hidden="true"></span>
                        <FaServer className="text-cyan-500 text-base sm:text-xl" aria-hidden="true" /> SYSTEM_ARCHITECTURE
                    </h2>
                    
                    <div className="grid gap-3 sm:gap-4 sm:pl-12">
                      {architecture.map((item, i) => (
                          <article key={i} className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-lg hover:border-cyan-500/30 active:border-cyan-500/50 transition-colors group relative">
                              <div className="absolute -left-[53px] top-1/2 w-4 h-[1px] bg-white/20 group-hover:bg-cyan-500 transition-colors" aria-hidden="true"></div>
                              <div className="absolute -left-[37px] top-1/2 w-2 h-2 rounded-full border border-white/20 bg-black group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all" aria-hidden="true"></div>
                              
                              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                                <span className="font-mono text-[9px] sm:text-[10px] bg-cyan-900/30 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">LAYER_0{i+1}</span>
                                <h3 className="font-bold text-white font-display text-xs sm:text-sm uppercase tracking-wide">{item.title}</h3>
                              </div>
                              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed border-l-2 border-white/5 pl-2 sm:pl-3 group-hover:border-cyan-500/30 transition-colors">
                                {item.desc}
                              </p>
                          </article>
                      ))}
                    </div>
                </section>

                {/* Core Capabilities - MOBILE: Neural Synapse */}
                <section className="block md:hidden px-4 my-8" aria-labelledby="capabilities-heading-mobile">
                   <h2 id="capabilities-heading-mobile" className="flex items-center gap-2 text-xl font-bold text-white mb-6 font-display">
                      <FaMicrochip className="text-purple-500 text-base" aria-hidden="true" /> KEY_FEATURES
                   </h2>
                   
                   {/* The Synapse Line */}
                   <div className="relative border-l-2 border-purple-500/30 ml-3 pl-8 space-y-8">
                      {project.features?.map((feature, i) => (
                         <div key={i} className="relative">
                            {/* Glowing Node */}
                            <div className="absolute -left-[38px] top-2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                            
                            {/* Icon Watermark */}
                            <div className="absolute -right-4 top-0 opacity-5 pointer-events-none">
                               <FaCode className="text-6xl text-purple-500" />
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                               <h3 className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-2">
                                  {feature.title || `MODULE_${i+1}`}
                               </h3>
                               <p className="text-gray-300 text-sm leading-relaxed">
                                  {feature.description || feature}
                               </p>
                            </div>
                         </div>
                      ))}
                   </div>
                </section>

                {/* Core Capabilities - DESKTOP: Original */}
                <section className="hidden md:block relative" aria-labelledby="capabilities-heading">
                    {/* Decorator Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5" aria-hidden="true"></div>
                    
                    <h2 id="capabilities-heading" className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 font-display sm:pl-12 relative">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-purple-500/50" aria-hidden="true"></span>
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-purple-500 rounded-full" aria-hidden="true"></span>
                        <FaMicrochip className="text-purple-500 text-base sm:text-xl" aria-hidden="true" /> KEY_FEATURES
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 sm:pl-12">
                      {project.features?.map((feature, i) => (
                          <article key={i} className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-lg hover:border-purple-500/30 active:border-purple-500/50 transition-colors group relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
                                 <FaCode className="text-3xl sm:text-4xl text-purple-500" />
                              </div>
                              
                              <div className="flex items-center gap-2 sm:gap-3 mb-2 relative z-10">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm flex-shrink-0" aria-hidden="true"></span>
                                <h3 className="font-bold text-white font-display text-xs sm:text-sm uppercase tracking-wide">{feature.title || `MODULE_${i+1}`}</h3>
                              </div>
                              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                                {feature.description || feature}
                              </p>
                          </article>
                      ))}
                    </div>
                </section>

             </main>

             {/* RIGHT: HUD & METRICS - Mobile optimized */}
             <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
                
                {/* Live Status HUD */}
                {(slug === 'designmate-ai' || slug === 'smartassign' || slug === 'ai-trip-planner') ? (
                   <AIEngineStatus 
                      model={project.engineStatus?.algorithm}
                      provider={(slug === 'designmate-ai' || slug === 'ai-trip-planner') ? 'Google AI Studio' : undefined}
                      latency={project.engineStatus?.metric}
                   />
                ) : slug === 'vibestream' ? (
                   <MLEngineStatus />
                ) : slug === 'career-launch' ? (
                   <NLPEngineStatus />
                ) : (
                   <div className="bg-black border border-cyan-500/30 rounded-xl p-4 sm:p-6 relative overflow-hidden group hover:border-cyan-500/60 transition-colors">
                      <div className="absolute top-0 right-0 p-2">
                         <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" aria-hidden="true"></div>
                      </div>
                      <h3 className="text-[10px] sm:text-xs font-bold font-mono text-cyan-500 mb-4 sm:mb-6 tracking-widest">SYSTEM_METRICS</h3>
                      
                      <div className="space-y-3 sm:space-y-4">
                         <div className="flex justify-between items-center text-xs sm:text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-500 font-mono">CPU_LOAD</span>
                            <span className="text-white font-mono">{status.cpu}</span>
                         </div>
                         <div className="flex justify-between items-center text-xs sm:text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-500 font-mono">MEM_USAGE</span>
                            <span className="text-white font-mono">{status.ram}</span>
                         </div>
                         <div className="flex justify-between items-center text-xs sm:text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-500 font-mono">NET_STATUS</span>
                            <span className="text-green-500 font-bold font-mono">{status.net}</span>
                         </div>
                      </div>
                   </div>
                )}
                
                {/* Tech Stack - MOBILE: Module Grid (NO SCROLL) */}
                <div className="block md:hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 relative overflow-hidden">
                   {/* Background Grid */}
                   <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" aria-hidden="true"></div>
                   
                   <h3 className="font-mono text-gray-500 mb-4 uppercase tracking-widest flex items-center gap-2 text-xs font-bold relative z-10">
                      <FaMemory className="text-cyan-500" aria-hidden="true" /> TECHNOLOGIES_USED
                   </h3>
                   
                   {/* Compact Grid - Show ALL */}
                   <div className="relative z-10 grid grid-cols-3 gap-2">
                      {project.techStack?.map((tech, i) => (
                         <div key={i} className="bg-gray-900/50 border border-gray-800 rounded px-2 py-2 flex flex-col items-center justify-center gap-1 hover:bg-gray-800 hover:border-cyan-500/50 transition-colors">
                            <div className="text-xl">
                               {getTechIcon(tech)}
                            </div>
                            <span className="text-[10px] font-mono text-gray-400 uppercase text-center leading-tight">
                               {(typeof tech === 'string' ? tech : tech.name).substring(0, 10)}
                            </span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Tech Stack - DESKTOP: Original Grid */}
                <div className="hidden md:block bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1">
                   {/* Background Grid */}
                   <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" aria-hidden="true"></div>
                   
                   <h3 className="font-mono text-gray-500 mb-4 sm:mb-6 uppercase tracking-widest flex items-center gap-2 text-xs sm:text-sm font-bold relative z-10">
                      <FaMemory className="text-cyan-500" aria-hidden="true" /> TECHNOLOGIES_USED
                   </h3>
                   <div className="flex flex-wrap gap-2 relative z-10">
                      {project.techStack?.map((tech, i) => (
                         <div key={i} className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black border border-white/20 rounded-lg text-[10px] sm:text-xs font-bold font-mono text-white tracking-wider hover:bg-white/10 hover:border-cyan-500 transition-colors cursor-default">
                            {getTechIcon(tech)}
                            <span className="hidden sm:inline">{(typeof tech === 'string' ? tech : tech.name).toUpperCase()}</span>
                            <span className="sm:hidden">{(typeof tech === 'string' ? tech : tech.name).substring(0, 8).toUpperCase()}</span>
                         </div>
                      ))}
                   </div>
                </div>



                {/* Impact Analysis - MOBILE: HUD Telemetry Grid */}
                <div className="block md:hidden">
                   <h3 className="text-[10px] font-bold font-mono text-gray-500 uppercase tracking-widest mb-4 pl-4">BUSINESS_IMPACT</h3>
                   
                   <div className="grid grid-cols-2 gap-3">
                      {impact.map((item, i) => {
                        // Extract number/value from description if possible
                        const valueMatch = item.desc?.match(/(\d+%|\d+x|AAA|AA|LOW|HIGH|MAX)/i);
                        const value = valueMatch ? valueMatch[0] : (i === 0 ? "40%" : i === 1 ? "AAA" : "LOW");
                        
                        // Determine color scheme based on index
                        const config = [
                          { 
                            border: "border-l-cyan-500", 
                            shadow: "shadow-[inset_10px_0_20px_-10px_rgba(34,211,238,0.1)]",
                            text: "text-cyan-400",
                            glow: "drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                          },
                          { 
                            border: "border-l-emerald-500", 
                            shadow: "shadow-[inset_10px_0_20px_-10px_rgba(16,185,129,0.1)]",
                            text: "text-emerald-400",
                            glow: "drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                          },
                          { 
                            border: "border-l-purple-500", 
                            shadow: "shadow-[inset_10px_0_20px_-10px_rgba(168,85,247,0.1)]",
                            text: "text-purple-400",
                            glow: "drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          }
                        ];
                        const style = config[i % 3];
                        
                        return (
                          <article 
                            key={i} 
                            className={`${i === 0 ? 'col-span-2' : 'col-span-1'} bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-md border border-white/10 ${style.border} border-l-2 ${style.shadow} rounded-sm p-4 relative overflow-hidden`}
                          >
                             {/* Vertical Stack Layout - No Overlaps - No Icons */}
                             {/* Label - Top */}
                             <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">
                                // {item.title.replace(/ /g, '_').toUpperCase()}
                             </div>
                             
                             {/* Value - Middle (Hero Element with Glow) */}
                             <div className={`${i === 0 ? 'text-4xl' : 'text-2xl'} font-bold ${style.text} ${style.glow} tabular-nums`}>
                                {value}
                             </div>
                             
                             {/* Description - Bottom (with Divider) */}
                             <p className={`${i === 0 ? 'text-xs' : 'text-[10px]'} text-gray-400 leading-relaxed font-sans mt-3 pt-3 border-t border-white/5`}>
                                {item.desc}
                             </p>
                          </article>
                        );
                      })}
                   </div>
                </div>

                {/* Impact Analysis - DESKTOP: Original */}
                <div className="hidden md:block space-y-3 sm:space-y-4">
                   <h3 className="text-[10px] sm:text-xs font-bold font-mono text-gray-500 uppercase tracking-widest">BUSINESS_IMPACT</h3>
                   {impact.map((item, i) => (
                      <article key={i} className="bg-white/5 p-3 sm:p-4 rounded-lg border-l-2 border-white/10 hover:border-cyan-500 active:border-cyan-500 transition-colors group">
                         <h4 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                         <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                      </article>
                   ))}
                </div>

                {/* Credentials */}
                <DemoCredentials credentials={project.demoCredentials} />
                
                {/* Rating Component */}
                <div className="pt-4 border-t border-white/10">
                   <ProjectRating projectSlug={slug} />
                </div>

             </aside>
          </div>
       </div>
    </div>
  );
};

export default ProjectDetails;
