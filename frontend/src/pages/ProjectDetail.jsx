import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaServer, 
  FaBrain, FaChartPie, FaKey, FaFilm, FaCheckCircle, FaLeaf, FaArrowLeft, FaExclamationTriangle, FaBolt, FaCopy, FaLightbulb,
  FaLayerGroup, FaCheck
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

// --- 1. RICH CONTENT MAP (Augments API Data) ---
const RICHER_CONTENT = {
  "otakutrack": {
    videoUrl: "https://youtu.be/uHt8Zom13cw", 
    architecture: [
      { title: "RBAC Middleware", desc: "Custom JWT middleware enforces User/Mod/Admin permissions." },
      { title: "Aggregation Engine", desc: "MongoDB pipeline ($group, $match) calculates stats in <60ms." },
      { title: "Optimistic UI", desc: "React Query manages server state for instant user feedback." }
    ],
    impact: [
      { title: "High-Concurrency", desc: "Optimized pipelines handle 1000+ concurrent aggregation requests." },
      { title: "Visual Insights", desc: "Transforms raw logs into 'Viewing Velocity' and 'Genre Bias' charts." },
      { title: "Scalable Moderation", desc: "Decentralized moderation via RBAC allows community self-governance." }
    ],
    engineStatus: { status: "Online", algorithm: "Aggregation Pipeline", metric: "Latency < 60ms" }
  },

  "designmate-ai": {
    videoUrl: "https://youtu.be/ReS6LMpoUiQ",
    architecture: [
      { title: "Visual Ingestion", desc: "Processes uploaded images via in-memory buffers to avoid disk I/O." },
      { title: "Gemini Vision Analysis", desc: "Extracts layout structure and hex codes using multimodal AI." },
      { title: "Code Synthesis", desc: "Maps visual elements to Tailwind CSS utility classes automatically." }
    ],
    impact: [
      { title: "90% Faster Handoff", desc: "Eliminates manual 'pixel-pushing' by automating boilerplate." },
      { title: "Zero Compliance Debt", desc: "Ensures accessibility standards are met before coding begins." },
      { title: "Multimodal Processing", desc: "Seamlessly handles image inputs via Gemini 1.5 Flash." }
    ],
    engineStatus: { status: "Online", algorithm: "Gemini 2.5 Flash", metric: "< 0.85s" }
  },

  "career-launch": {
    videoUrl: "https://youtu.be/jdLr-34M-_A",
    architecture: [
      { title: "PDF Parsing", desc: "Dual-engine (pdfplumber) extraction handles complex multi-column layouts." },
      { title: "TF-IDF Vectorization", desc: "Converts text to frequency vectors to weigh keyword importance." },
      { title: "Cosine Similarity", desc: "Calculates the angle between vectors to derive a match percentage." }
    ],
    impact: [
      { title: "Quantifiable Matching", desc: "Replaces guessing with a mathematical 0-100% score." },
      { title: "Granular Gap Analysis", desc: "Instantly categorizes skills into 'Missing', 'Matched', and 'Extra'." },
      { title: "100% Privacy", desc: "No data is stored; all processing happens in the user session." }
    ],
    engineStatus: { status: "Online", algorithm: "TF-IDF + Cosine", metric: "~10k Terms" }
  },
  
  "vibestream": {
      videoUrl: "https://youtu.be/0zz2Y1T1cqg",
      architecture: [
          { title: "Tag Vectorization", desc: "Converts movie metadata (plot, genre, cast) into high-dimensional vectors." },
          { title: "Cosine Similarity Matrix", desc: "Pre-computed N*N matrix for O(1) recommendation lookups." },
          { title: "Hybrid Fallback", desc: "Uses popularity heuristics when vector similarity confidence is low." }
      ],
      impact: [
          { title: "Cold Start Solved", desc: "Delivers relevant suggestions without needing user history." },
          { title: "Sub-100ms Latency", desc: "Matrix pre-computation removes runtime calculation overhead." },
          { title: "Discovery", desc: "Surfaces hidden gems that share semantic traits with favorites." }
      ],
      engineStatus: { status: "Online", algorithm: "Cosine Similarity", metric: "4800 Vectors" }
  },



  "smartassign": {
      videoUrl: "https://youtu.be/cqtb4iDCn2M"
  }
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [apiProject, setApiProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await projectsApi.getBySlug(slug);
        if (response.data) {
          setApiProject(response.data);
        } else {
          setError("Project data is empty");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Project not found in database.");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading) return <LoadingSpinner />;
  
  if (!apiProject) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-950 text-center">
        <h2 className="text-2xl font-bold text-gray-400 mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-primary-600 hover:text-primary-500 font-medium flex items-center gap-2">
            <FaArrowLeft /> Back to Projects
        </Link>
    </div>
  );

  // --- MERGE DATA ---
  const richData = RICHER_CONTENT[slug] || {};
  
  const project = {
    ...apiProject,
    videoUrl: richData.videoUrl || apiProject.videoUrl,
    architecture: richData.architecture || [
       { title: "Tech Stack Integration", desc: `Built with ${apiProject.techStack?.join(', ')} for optimal performance.` },
       { title: "Data Flow", desc: "Standard MVC/MVT pattern with RESTful API communication." },
       { title: "Deployment", desc: "Hosted on cloud infrastructure with CI/CD pipelines." }
    ],
    impact: richData.impact || [
       { title: "Project Outcome", desc: apiProject.outcome || "Succesfully delivered functional requirements." },
    ],
    capabilities: apiProject.features || [],
    engineStatus: richData.engineStatus
  };

  const getTechIcon = (name) => {
      const n = (typeof name === 'string' ? name : name.name).toLowerCase();
      if (n.includes('react')) return <FaReact className="text-[#61DAFB]" />;
      if (n.includes('node')) return <FaNodeJs className="text-[#339933]" />;
      if (n.includes('mongo')) return <SiMongodb className="text-[#47A248]" />;
      if (n.includes('express')) return <SiExpress className="text-gray-500 dark:text-gray-300" />;
      if (n.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4]" />;
      if (n.includes('python')) return <FaBrain className="text-[#3776AB]" />;
      if (n.includes('chart')) return <FaChartPie className="text-[#FF6384]" />;
      if (n.includes('socket')) return <SiSocketdotio className="text-dark-900 dark:text-white" />;
      if (n.includes('google') || n.includes('gemini')) return <SiGoogle className="text-[#4285F4]" />;
      if (n.includes('vite')) return <SiVite className="text-[#646CFF]" />;
      if (n.includes('streamlit')) return <SiStreamlit className="text-[#FF4B4B]" />;
      if (n.includes('pandas')) return <SiPandas className="text-[#150458]" />;
      if (n.includes('numpy')) return <SiNumpy className="text-[#013243]" />;
      if (n.includes('next')) return <SiNextdotjs className="text-black dark:text-white" />;
      if (n.includes('flask')) return <SiFlask className="text-black dark:text-white" />;
      if (n.includes('jwt')) return <SiJsonwebtokens className="text-[#D63AFF]" />;
      if (n.includes('scikit')) return <SiScikitlearn className="text-[#F7931E]" />;
      if (n.includes('tmdb') || n.includes('api')) return <FaDatabase className="text-gray-400" />;
      if (n.includes('count') || n.includes('vector')) return <FaLayerGroup className="text-gray-400" />;
      if (n.includes('cosine') || n.includes('similarity')) return <FaLayerGroup className="text-gray-400" />;
      return <FaServer className="text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      
      {/* TOP NAVIGATION (Breadcrumb) */}
      <div className="pt-28 pb-6 bg-gradient-to-b from-primary-50 to-transparent dark:from-dark-800/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <Link to="/projects" className="inline-flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group text-sm font-medium">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* HEADER INFO (Moved inside grid for alignment) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4 border border-primary-200 dark:border-primary-800">
                    {project.category || "Development"}
                </span>
                <h1 className="heading-primary leading-tight mb-4">{project.title}</h1>
                <p className="text-xl text-body max-w-2xl">{project.shortDescription}</p>
            </motion.div>

            {/* HERO MEDIA */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-dark-200 dark:border-dark-700 shadow-lg bg-black aspect-video relative group"
            >
               {(() => {
                 const getYouTubeId = (url) => {
                   if (!url) return null;
                   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                   const match = url.match(regExp);
                   return (match && match[2].length === 11) ? match[2] : null;
                 };
                 
                 const youtubeId = getYouTubeId(project.videoUrl);

                 if (youtubeId) {
                   return (
                     <iframe 
                       className="w-full h-full"
                       src={`https://www.youtube.com/embed/${youtubeId}`}
                       title="YouTube video player"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                     ></iframe>
                   );
                 } else if (project.videoUrl) {
                   return (
                      <video 
                        src={project.videoUrl} 
                        className="w-full h-full object-cover" 
                        controls 
                        muted 
                        playsInline
                        loop
                      >
                        Your browser does not support the video tag.
                      </video>
                   );
                 } else {
                   return (
                       <img src={project.thumbnail || project.thumbnailLight} alt="Project Demo" className="w-full h-full object-cover" />
                   );
                 }
               })()}
            </motion.div>

            {/* CHALLENGE & SOLUTION */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
                    <FaExclamationTriangle className="text-sm" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest ml-4">
                    The Challenge
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.problemStatement || "No problem statement available."}
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                    <FaLightbulb className="text-sm" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest ml-4">
                    The Solution
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.solution || "No solution description available."}
                </p>
              </div>
            </div>

            {/* SYSTEM ARCHITECTURE */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="bg-[#F8FAFC] dark:bg-dark-800 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-dark-700 transition-colors">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <FaDatabase className="text-lg"/>
                      </span>
                      System Architecture
                  </h2>
                  
                  <div className="space-y-6">
                    {project.architecture.map((step, index) => (
                        <div key={index} className="flex gap-4">
                            {/* Number Bubble */}
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                                {index + 1}
                            </div>
                            
                            {/* Content */}
                            <div>
                                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                                    {step.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                  </div>
              </div>
            )}

            {/* CORE CAPABILITIES */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <FaLayerGroup className="text-cyan-600 dark:text-cyan-400" /> Core Capabilities
              </h2>
              <div className="space-y-4">
                {project.capabilities.map((cap, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm"
                  >
                    <FaCheck className="text-green-500 text-lg flex-shrink-0" />
                    <span className="text-gray-700 dark:text-slate-300 font-medium text-base">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR (4 cols) */}
          {/* RIGHT SIDEBAR (4 cols) */}
          <div className="lg:col-span-4 space-y-6 h-fit lg:sticky lg:top-24">
            
            {/* LINKS */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-800">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">Project Links</h3>
              <div className="space-y-3">
                <a href={project.liveUrl || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 text-sm text-white font-semibold rounded-xl bg-[#0088CC] hover:bg-[#0077b3] transition-colors shadow-lg shadow-blue-500/30">
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                <a href={project.githubUrl || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 text-sm text-gray-900 dark:text-white font-semibold rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700">
                  <FaGithub className="mr-2" /> View Code
                </a>
              </div>
            </div>

            {/* DEMO CREDENTIALS */}
            {(project.demoCredentials?.length > 0) && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-800">
                <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <FaKey className="text-purple-600" /> Demo Credentials
                </h3>
                
                {project.demoCredentials.map((cred, i) => (
                  <div key={i} className="mb-4 last:mb-2">
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">{cred.role}</span>
                    
                    <div className="space-y-2">
                        {/* Email Box */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-black/40 rounded-xl border border-gray-100 dark:border-slate-800 group cursor-pointer transition-colors hover:border-blue-200" onClick={() => navigator.clipboard.writeText(cred.email)}>
                            <code className="text-xs font-mono text-gray-700 dark:text-gray-300 truncate mr-2">{cred.email}</code>
                            <FaCopy className="text-gray-400 group-hover:text-blue-500 transition-colors text-base" /> 
                        </div>
                        
                        {/* Password Box */}
                         <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-black/40 rounded-xl border border-gray-100 dark:border-slate-800 group cursor-pointer transition-colors hover:border-blue-200" onClick={() => navigator.clipboard.writeText(cred.password)}>
                            <code className="text-xs font-mono text-gray-700 dark:text-gray-300 truncate mr-2">{cred.password}</code>
                            <FaCopy className="text-gray-400 group-hover:text-blue-500 transition-colors text-base" /> 
                        </div>
                    </div>
                  </div>
                ))}
                
                <p className="text-center text-[10px] text-gray-400 italic mt-4">
                    Use these details to access the live dashboard
                </p>
              </div>
            )}

            {/* IMPACT CARD (Always Dark/Black) */}
            <div className="bg-[#0F172A] dark:bg-black p-6 rounded-3xl shadow-lg border border-slate-800">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-3">
                    <FaBolt className="text-orange-500" /> Impact
                </h3>
                
                <div className="space-y-3 text-slate-300 leading-relaxed text-xs">
                    {project.impact.map((item, i) => (
                        <p key={i}>
                            <span className="text-white font-semibold block mb-1">{item.title}:</span>
                            {item.desc}
                        </p>
                    ))}
                </div>
            </div>

            {/* BUILT WITH */}
            <div>
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-3 border-b border-gray-100 dark:border-slate-800 pb-2">
                Built With
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {(project.techStack || []).map((tech, i) => (
                  <div key={i} className="flex items-center justify-center gap-2 p-2 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all cursor-default">
                    <span className="text-base">
                      {getTechIcon(tech)}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
                      {typeof tech === 'string' ? tech : tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI ENGINE STATUS (SmartAssign & DesignMate) */}
            {(slug === 'smartassign' || slug === 'designmate-ai') && (
              <div>
                 <AIEngineStatus 
                    model={project.engineStatus?.algorithm}
                    provider={slug === 'designmate-ai' ? 'Google AI Studio' : undefined}
                    latency={project.engineStatus?.metric}
                 />
              </div>
            )}

            {/* ML ENGINE STATUS (VibeStream Only) */}
            {(slug === 'vibestream' || slug === 'movie-recommendation-system') && (
              <div>
                 <MLEngineStatus />
              </div>
            )}

            {/* NLP ENGINE STATUS (Career Launch Only) */}
            {slug === 'career-launch' && (
              <div>
                 <NLPEngineStatus />
              </div>
            )}

            {/* PROJECT RATING */}
            <div>
               <ProjectRating projectSlug={slug} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
