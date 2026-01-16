import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/projects/ProjectCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { projectsApi } from "../services/api";
import { FaLaptopCode, FaBrain, FaTools, FaLayerGroup } from "react-icons/fa";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Cases", icon: <FaLayerGroup /> },
    { key: "ai", label: "AI Intelligence", icon: <FaBrain /> },
    { key: "web", label: "Full Stack", icon: <FaLaptopCode /> },
    { key: "edtech", label: "SaaS Platforms", icon: <FaTools /> },
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(allProjects);
    } else if (activeFilter === "web") {
       setFilteredProjects(allProjects.filter(p => ["web", "fullstack"].includes(p.category)));
    } else if (activeFilter === "edtech") {
       setFilteredProjects(allProjects.filter(p => ["edtech", "saas"].includes(p.category)));
    } else {
      setFilteredProjects(allProjects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter, allProjects]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await projectsApi.getAll({});
      setAllProjects(response.data);
      setFilteredProjects(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to load projects. Please try again later.");
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white dark:bg-dark-900">
      <section className="section-container section-padding">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-primary mb-6">
              Engineering <span className="text-primary-600">Portfolio</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300 leading-relaxed">
              A curated collection of scalable systems, AI experiments, and full-stack applications solving real-world challenges.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                activeFilter === filter.key
                  ? "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/30 scale-105"
                  : "bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 border-dark-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-dark-700"
              }`}
            >
              <span className="text-lg">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="min-h-[400px] flex items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
               <span className="text-2xl">⚠️</span>
            </div>
            <p className="text-dark-600 dark:text-dark-400 mb-4">{error}</p>
            <button onClick={fetchProjects} className="btn-primary">
              Try Again
            </button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project._id}
                      project={project}
                      index={index}
                    />
                ))}
              </motion.div>
            ) : (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-dark-100 dark:bg-dark-800 rounded-full flex items-center justify-center mb-4 text-3xl">
                  🔍
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">No Projects Found</h3>
                <p className="text-dark-500 dark:text-dark-400 max-w-md mx-auto">
                  We couldn't find any case studies matching this category. Please try selecting a different filter.
                </p>
              </div>
            )}
          </AnimatePresence>
        )}
      </section>
    </div>
  );
};

export default Projects;
