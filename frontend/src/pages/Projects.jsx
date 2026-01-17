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
    { id: "all", label: "ALL_MODULES", icon: FaDatabase },
    { id: "web", label: "FULL_STACK", icon: FaServer },
    { id: "ai", label: "NEURAL_NETS", icon: FaBrain },
    { id: "edtech", label: "PLATFORMS", icon: FaLaptopCode },
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
    <div className="min-h-screen bg-black text-white pt-24 pb-20 font-sans selection:bg-primary-500 selection:text-white">
      
      {/* 0. Background Grid (Ambient) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="section-container relative z-10">
        
        {/* 1. HEADER: COMMAND CENTER STYLE */}
        <div className="mb-16 border-b border-white/10 pb-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                 <div className="flex items-center gap-3 mb-2 text-primary-500 font-mono text-xs tracking-[0.3em]">
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-ping"></span>
                    DATABASE_ACCESS_GRANTED
                 </div>
                 <h1 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    DEPLOYED <br/> ARCHITECTURES
                 </h1>
              </div>
              
              <div className="max-w-md text-gray-400 text-sm leading-relaxed border-l-2 border-white/20 pl-4">
                 Exploration of <span className="text-white font-bold">cognitive systems</span>, <span className="text-white font-bold">distributed networks</span>, and <span className="text-white font-bold">production-grade interfaces</span>. 
                 Select a protocol below to inspect the codebase.
              </div>
           </div>
        </div>

        {/* 2. CONTROLS: TABS & SEARCH */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
           {/* Futuristic Tabs */}
           <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
              {categories.map((cat) => (
                 <button 
                   key={cat.id}
                   onClick={() => setActiveTab(cat.id)}
                   className={`
                     relative px-4 py-2 rounded-md text-sm font-mono font-bold tracking-wider transition-all
                     ${activeTab === cat.id 
                        ? 'text-black bg-primary-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                     }
                   `}
                 >
                    <span className="flex items-center gap-2">
                       <cat.icon className={activeTab === cat.id ? "text-black" : "text-gray-500"} />
                       {cat.label}
                    </span>
                 </button>
              ))}
           </div>
           
           {/* Results Count */}
           <div className="font-mono text-xs text-gray-500">
              [ DIRECTORY_COUNT: <span className="text-primary-400">{filteredData.length}</span> ]
           </div>
        </div>

        {/* 3. GRID LAYOUT */}
        {loading ? (
           <div className="h-96 flex items-center justify-center">
              <LoadingSpinner />
           </div>
        ) : (
           <motion.div 
             layout
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
           >
              <AnimatePresence>
                 {filteredData.map((project, idx) => (
                    <motion.div
                       layout
                       key={project._id}
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.9 }}
                       transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                       <ProjectCard project={project} index={idx} />
                    </motion.div>
                 ))}
              </AnimatePresence>
           </motion.div>
        )}
        
        {/* Empty State */}
        {!loading && filteredData.length === 0 && (
           <div className="py-20 text-center border border-dashed border-white/10 rounded-xl bg-white/5">
              <FaSearch className="text-4xl text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl text-white font-bold mb-2">NO RECORDS FOUND</h3>
              <p className="text-gray-400">The requested query returned zero results. Adjust filters.</p>
           </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
