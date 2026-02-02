import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsApi } from "../services/api";
import { 
  FaBrain, FaServer, FaCode, FaSearch, FaDatabase, FaNetworkWired, 
  FaLaptopCode, FaMicrochip, FaArrowRight 
} from "react-icons/fa";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
     try {
       const res = await projectsApi.getAll();
       setData(res.data);
     } catch (err) {
       console.error("Failed to load modules:", err);
     } finally {
       setLoading(false);
     }
  };

  const categories = [
    { id: "ai", label: "AI / MACHINE LEARNING", shortLabel: "AI", icon: FaBrain },
    { id: "all", label: "ALL PROJECTS", shortLabel: "ALL", icon: FaDatabase },
    { id: "web", label: "WEB APPLICATIONS", shortLabel: "WEB", icon: FaServer },
    { id: "edtech", label: "EDTECH", shortLabel: "EDU", icon: FaLaptopCode },
  ];

  // Filter Logic
  const filteredData = activeTab === "all" 
     ? data 
     : data.filter(d => {
         if (activeTab === "web") return ["web", "fullstack"].includes(d.category);
         if (activeTab === "edtech") return ["edtech", "saas"].includes(d.category);
         return d.category === activeTab;
       });

  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 font-sans selection:bg-primary-500 selection:text-white">
      
      {/* 0. Background Grid - Reduced on mobile */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] sm:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" aria-hidden="true"></div>

      <div className="section-container relative z-10">
        
        {/* 1. HEADER - Mobile optimized ("Console Terminal") */}
        <header className="mb-8 md:mb-16 border-b border-white/10 pb-4 md:pb-8">
           {/* MOBILE HEADER (< md) */}
           <div className="block md:hidden">
              <h1 className="text-2xl font-display font-bold text-white mb-3 leading-tight">Projects</h1>
              
              {/* Terminal Block with Context */}
              <div className="bg-black border-l-2 border-cyan-500 pl-4 py-2 my-4">
                 <div className="font-mono text-xs text-cyan-400/80 leading-relaxed space-y-1">
                    <div>Browse my portfolio of AI/ML and full-stack applications.</div>
                    <div>All projects include live demos and source code.</div>
                    <div className="text-emerald-400 mt-2">[ {filteredData.length} PROJECTS FOUND ]</div>
                 </div>
              </div>
           </div>

           {/* DESKTOP HEADER (>= md) */}
           <div className="hidden md:flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                 <div className="flex items-center gap-3 mb-2 text-primary-500 font-mono text-xs tracking-[0.3em]">
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-ping" aria-hidden="true"></span>
                    <span>DATABASE_ACCESS_GRANTED</span>
                 </div>
                 <h1 className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 leading-tight">
                    Projects
                 </h1>
              </div>
              
              <div className="max-w-md text-gray-400 text-sm leading-relaxed border-l-2 border-white/20 pl-4">
                 Collection of <span className="text-white font-bold">production-ready AI/ML</span> and <span className="text-white font-bold">full-stack applications</span>. 
                 Each project includes live demos, source code, and detailed documentation.
              </div>
           </div>
        </header>

        {/* 2. CONTROLS: QUERY MATRIX - Mobile optimized */}
        <div className="mb-8 md:mb-12">
           {/* MOBILE MATRIX (< md) */}
           <div className="block md:hidden overflow-x-auto pb-2">
              <div className="inline-flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
                 {categories.map((cat) => (
                    <button 
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`
                        relative px-5 py-2 rounded-full text-[10px] font-mono font-bold tracking-widest transition-all whitespace-nowrap
                        ${activeTab === cat.id 
                           ? 'bg-gray-800 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
                           : 'text-gray-500 hover:text-gray-300'
                        }
                      `}
                    >
                       {cat.shortLabel}
                       {activeTab === cat.id && <span className="absolute inset-0 rounded-full ring-1 ring-white/10" aria-hidden="true"></span>}
                    </button>
                 ))}
              </div>
           </div>
           
           {/* DESKTOP TABS (>= md) */}
           <div className="hidden md:flex items-center justify-between gap-6">
              <nav className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" aria-label="Project categories">
                 {categories.map((cat) => (
                    <button 
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`
                        relative px-4 py-2 rounded-md text-sm font-mono font-bold tracking-wider transition-all flex items-center gap-2
                        ${activeTab === cat.id 
                           ? 'text-black bg-primary-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                           : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                       <cat.icon className={activeTab === cat.id ? "text-black" : "text-gray-500"} />
                       {cat.label}
                    </button>
                 ))}
              </nav>
              <div className="font-mono text-xs text-gray-500">
                 [ DIRECTORY_COUNT: <span className="text-primary-400">{filteredData.length}</span> ]
              </div>
           </div>
        </div>

        {/* 3. GRID LAYOUT - Unified Cyberdeck Cards */}
        {loading ? (
           <div className="h-64 sm:h-96 flex items-center justify-center">
              <LoadingSpinner />
           </div>
        ) : (
           <motion.div 
             layout
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
           >
              <AnimatePresence mode="popLayout">
                 {filteredData.map((project, idx) => (
                    <motion.div
                       layout
                       key={project._id}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 0.95 }}
                       transition={{ duration: 0.3, delay: idx * 0.03 }}
                    >
                       {/* Use default Cyberdeck design (same as Home page) */}
                       <ProjectCard project={project} index={idx} />
                    </motion.div>
                 ))}
              </AnimatePresence>
           </motion.div>
        )}
        
        {/* Empty State - Mobile optimized */}
        {!loading && filteredData.length === 0 && (
           <div className="py-12 sm:py-20 text-center border border-dashed border-white/10 rounded-xl bg-white/5">
              <FaSearch className="text-3xl sm:text-4xl text-gray-600 mx-auto mb-3 sm:mb-4" aria-hidden="true" />
              <h2 className="text-lg sm:text-xl text-white font-bold mb-2">NO RECORDS FOUND</h2>
              <p className="text-sm sm:text-base text-gray-400 px-4">The requested query returned zero results. Adjust filters.</p>
           </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
