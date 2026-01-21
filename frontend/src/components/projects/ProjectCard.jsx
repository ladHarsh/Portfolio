import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaMicrochip } from "react-icons/fa";


const ProjectCard = ({ project, index }) => {
  // Always use the standard thumbnail in dark mode
  const currentThumbnail = project.thumbnail;

  return (
    <article className="group relative h-full">
       {/* 1. Holographic Border Effect - Reduced on mobile */}
       <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-10 sm:opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-200" aria-hidden="true"></div>
       
       {/* 2. Main Card Content */}
       <div className="relative h-full flex flex-col bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-1 active:scale-[0.98]">
          
          {/* Image Section - Mobile optimized */}
          <div className="relative h-44 sm:h-52 overflow-hidden">
             {/* Tech Overlay Grid on Image - Reduced on mobile */}
             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 sm:opacity-30 z-10 pointer-events-none" aria-hidden="true"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" aria-hidden="true"></div>
             
             {currentThumbnail ? (
                <img 
                  src={currentThumbnail} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
             ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                   <FaMicrochip className="text-3xl sm:text-4xl text-gray-700" aria-hidden="true" />
                </div>
             )}

             {/* Floating Category Badge - Mobile optimized */}
             <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono font-bold text-primary-400 uppercase tracking-widest rounded-full">
                   {project.category}
                </span>
             </div>
             
             {/* Score Badge - Mobile optimized */}
             {project.evaluation && project.evaluation.score > 0 && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                   <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-bold rounded-md ${
                      project.evaluation.score >= 90 ? 'text-green-400' : 'text-yellow-400'
                   }`}>
                      SCORE::{project.evaluation.score}
                   </span>
                </div>
             )}
          </div>

          {/* Details Section - Mobile optimized */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col">
             <div className="mb-3 sm:mb-4">
                <Link to={`/projects/${project.slug}`} className="block group-hover:text-primary-400 transition-colors" aria-label={`View ${project.title} details`}>
                   <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 leading-tight">
                      {project.title}
                   </h3>
                </Link>
                <div className="h-0.5 w-12 bg-primary-500/50 rounded-full mb-2 sm:mb-3 group-hover:w-full transition-all duration-500" aria-hidden="true"></div>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                   {project.shortDescription}
                </p>
             </div>

             {/* Tech Grid - Mobile optimized */}
             <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.techStack.slice(0, 4).map((tech, idx) => (
                   <span key={idx} className="text-[9px] sm:text-[10px] uppercase font-mono px-1.5 py-0.5 border border-white/10 rounded text-gray-500">
                      {tech}
                   </span>
                ))}
             </div>

             {/* Footer / Actions - Touch optimized */}
             <div className="mt-auto pt-4 sm:pt-6 border-t border-white/5 flex items-center justify-between gap-3">
                <Link 
                   to={`/projects/${project.slug}`} 
                   className="text-primary-400 text-[10px] sm:text-xs font-bold font-mono tracking-widest uppercase hover:text-white active:text-white transition-colors flex items-center gap-1.5 sm:gap-2 min-h-[44px] sm:min-h-0"
                   aria-label={`View ${project.title} details`}
                >
                   <span className="hidden xs:inline">Initialize</span>
                   <span className="xs:hidden">View</span>
                   <span className="text-base sm:text-lg" aria-hidden="true">→</span>
                </Link>

                <div className="flex gap-3 sm:gap-4">
                   <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white active:text-white transition-colors p-2 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 sm:p-0 flex items-center justify-center rounded-lg hover:bg-white/5 active:bg-white/10 sm:bg-transparent" 
                      aria-label="View source code on GitHub"
                   >
                      <FaGithub size={18} aria-hidden="true" />
                   </a>
                   {project.liveUrl && (
                      <a 
                         href={project.liveUrl} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-gray-500 hover:text-white active:text-white transition-colors p-2 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 sm:p-0 flex items-center justify-center rounded-lg hover:bg-white/5 active:bg-white/10 sm:bg-transparent" 
                         aria-label="View live demo"
                      >
                         <FaExternalLinkAlt size={16} aria-hidden="true" />
                      </a>
                   )}
                </div>
             </div>
          </div>
       </div>
    </article>
  );
};

export default ProjectCard;
