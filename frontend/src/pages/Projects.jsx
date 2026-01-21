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
  const [activeTab, setActiveTab] = useState("all");
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
    { id: "all", label: "ALL_MODULES", shortLabel: "ALL", icon: FaDatabase },
    { id: "web", label: "FULL_STACK", shortLabel: "WEB", icon: FaServer },
    { id: "ai", label: "NEURAL_NETS", shortLabel: "AI", icon: FaBrain },
    { id: "edtech", label: "PLATFORMS", shortLabel: "EDU", icon: FaLaptopCode },
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
    <div className="min-h-screen bg-black text-white pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 font-sans selection:bg-primary-500 selection:text-white">
      
      {/* 0. Background Grid - Reduced on mobile */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] sm:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" aria-hidden="true"></div>

      <div className="section-container relative z-10">
        
        {/* 1. HEADER - Mobile optimized */}
        <header className="mb-12 sm:mb-16 border-b border-white/10 pb-6 sm:pb-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
              <div>
                 <div className="flex items-center gap-2 sm:gap-3 mb-2 text-primary-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em]">
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-ping" aria-hidden="true"></span>
                    <span className="hidden sm:inline">DATABASE_ACCESS_GRANTED</span>
                    <span className="sm:hidden">ACCESS_GRANTED</span>
                 </div>
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 leading-tight">
                    DEPLOYED <br className="sm:hidden"/>ARCHITECTURES
                 </h1>
              </div>
              
              <div className="max-w-md text-gray-400 text-xs sm:text-sm leading-relaxed border-l-2 border-white/20 pl-3 sm:pl-4">
                 Exploration of <span className="text-white font-bold">cognitive systems</span>, <span className="text-white font-bold">distributed networks</span>, and <span className="text-white font-bold">production-grade interfaces</span>. 
                 Select a protocol below to inspect the codebase.
              </div>
           </div>
        </header>

        {/* 2. CONTROLS: TABS & RESULTS - Mobile optimized */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
           {/* Futuristic Tabs - Touch optimized */}
           <nav className="w-full sm:w-auto overflow-x-auto" aria-label="Project categories">
              <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm min-w-max">
                 {categories.map((cat) => (
                    <button 
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`
                        relative px-3 sm:px-4 py-2.5 sm:py-2 rounded-md text-xs sm:text-sm font-mono font-bold tracking-wider transition-all min-h-[44px] sm:min-h-0 flex items-center justify-center
                        ${activeTab === cat.id 
                           ? 'text-black bg-primary-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                           : 'text-gray-400 hover:text-white active:text-white hover:bg-white/5 active:bg-white/10'
                        }
                      `}
                      aria-label={`Filter by ${cat.label}`}
                      aria-pressed={activeTab === cat.id}
                    >
                       <span className="flex items-center gap-1.5 sm:gap-2">
                          <cat.icon className={`text-sm sm:text-base ${activeTab === cat.id ? "text-black" : "text-gray-500"}`} aria-hidden="true" />
                          <span className="hidden sm:inline">{cat.label}</span>
                          <span className="sm:hidden">{cat.shortLabel}</span>
                       </span>
                    </button>
                 ))}
              </div>
           </nav>
           
           {/* Results Count - Mobile optimized */}
           <div className="font-mono text-[10px] sm:text-xs text-gray-500" aria-live="polite">
              [ DIRECTORY_COUNT: <span className="text-primary-400">{filteredData.length}</span> ]
           </div>
        </div>

        {/* 3. GRID LAYOUT - Mobile optimized */}
        {loading ? (
           <div className="h-64 sm:h-96 flex items-center justify-center">
              <LoadingSpinner />
           </div>
        ) : (
           <motion.div 
             layout
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
