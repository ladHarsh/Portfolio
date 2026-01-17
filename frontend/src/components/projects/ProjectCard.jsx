import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaMicrochip } from "react-icons/fa";


const ProjectCard = ({ project, index }) => {
  // Always use the standard thumbnail in dark mode
  const currentThumbnail = project.thumbnail;

  return (
    <div className="group relative h-full">
       {/* 1. Holographic Border Effect */}
       <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
       
       {/* 2. Main Card Content */}
       <div className="relative h-full flex flex-col bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
          
          {/* Image Section */}
          <div className="relative h-52 overflow-hidden">
             {/* Tech Overlay Grid on Image */}
             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30 z-10 pointer-events-none"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
             
             {currentThumbnail ? (
                <img 
                  src={currentThumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
             ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                   <FaMicrochip className="text-4xl text-gray-700" />
                </div>
             )}

             {/* Floating Category Badge */}
             <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-primary-400 uppercase tracking-widest rounded-full">
                   {project.category}
                </span>
             </div>
             
             {/* Score Badge */}
             {project.evaluation && project.evaluation.score > 0 && (
                <div className="absolute top-4 right-4 z-20">
                   <span className={`px-2 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold rounded-md ${
                      project.evaluation.score >= 90 ? 'text-green-400' : 'text-yellow-400'
                   }`}>
                      SCORE::{project.evaluation.score}
                   </span>
                </div>
             )}
          </div>

          {/* Details Section */}
          <div className="flex-1 p-6 flex flex-col">
             <div className="mb-4">
                <Link to={`/projects/${project.slug}`} className="block group-hover:text-primary-400 transition-colors">
                   <h3 className="text-xl font-bold font-display text-white mb-2 leading-tight">
                      {project.title}
                   </h3>
                </Link>
                <div className="h-0.5 w-12 bg-primary-500/50 rounded-full mb-3 group-hover:w-full transition-all duration-500"></div>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                   {project.shortDescription}
                </p>
             </div>

             {/* Tech Grid */}
             <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 4).map((tech, idx) => (
                   <span key={idx} className="text-[10px] uppercase font-mono px-1.5 py-0.5 border border-white/10 rounded text-gray-500">
                      {tech}
                   </span>
                ))}
             </div>

             {/* Footer / Actions */}
             <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <Link to={`/projects/${project.slug}`} className="text-primary-400 text-xs font-bold font-mono tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                   Initialize <span className="text-lg">→</span>
                </Link>

                <div className="flex gap-3">
                   <a href={project.githubUrl} target="_blank" className="text-gray-500 hover:text-white transition-colors" title="View Source">
                      <FaGithub size={18} />
                   </a>
                   {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" className="text-gray-500 hover:text-white transition-colors" title="Live Demo">
                         <FaExternalLinkAlt size={16} />
                      </a>
                   )}
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default ProjectCard;
