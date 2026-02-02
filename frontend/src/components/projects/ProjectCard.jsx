import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaMicrochip } from "react-icons/fa";


const ProjectCard = ({ project, index, variant }) => {
  // Always use the standard thumbnail in dark mode
  const currentThumbnail = project.thumbnail;

  return (
    <article className="w-full h-auto">
       
       {/* ==============================================
           MOBILE LAYOUT: CONDITIONAL VARIANTS
           (Visible only on < md screens)
           ============================================== */}
       
       {variant === 'case_file' ? (
          /* VARIANT: CASE FILE (Projects Archive) */
          <div className="md:hidden w-full bg-black border border-white/20 rounded-sm overflow-hidden relative shadow-lg group">
              {/* File Header */}
              <div className="flex justify-between items-center bg-white/5 p-2 border-b border-white/10 h-8">
                  <div className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest">
                      PRJ_{index < 9 ? `0${index + 1}` : index + 1}
                  </div>
                  <div className="flex gap-1">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                          <div key={i} className="text-[8px] font-mono text-gray-500 bg-white/5 px-1 rounded-sm uppercase">
                              {tech}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Viewfinder Image */}
              <div className="relative w-full aspect-video border-b border-white/10 bg-gray-900 group-hover:opacity-90 transition-opacity">
                  {/* Viewfinder Brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/30 z-20"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30 z-20"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30 z-20"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/30 z-20"></div>
                  
                  {/* Center Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                      <div className="w-4 h-px bg-white"></div>
                      <div className="h-4 w-px bg-white absolute"></div>
                  </div>

                  <Link to={`/projects/${project.slug}`}>
                      {currentThumbnail ? (
                        <img 
                          src={currentThumbnail} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscaleContrast" 
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-700">
                           <FaMicrochip size={24} />
                        </div>
                      )}
                  </Link>
              </div>

              {/* Minimal Footer */}
              <div className="p-3 bg-black">
                  <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold font-display text-white tracking-wide truncate pr-4">
                          {project.title}
                      </h3>
                      <Link to={`/projects/${project.slug}`} className="text-[9px] font-mono text-cyan-400 hover:underline">
                          &gt; OPEN_FILE
                      </Link>
                  </div>
              </div>
          </div>
       ) : (
          /* VARIANT: CYBERDECK (Home Page Default) */
          <div className="md:hidden w-full bg-black/80 backdrop-blur-md border border-primary-500/30 rounded-lg overflow-hidden relative flex flex-col shadow-2xl">
              
              {/* 1. The Monitor Frame */}
              <div className="relative w-full aspect-video border-b border-primary-500/30 bg-black/50 p-1">
                   {/* Visual: Corner Markers */}
                   <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary-400" aria-hidden="true"></div>
                   <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary-400" aria-hidden="true"></div>
                   <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary-400" aria-hidden="true"></div>
                   <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary-400" aria-hidden="true"></div>
                   
                   {/* Visual: Scanline Overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-10 opacity-20" aria-hidden="true"></div>

                   {/* Project Image */}
                   {currentThumbnail ? (
                     <img 
                       src={currentThumbnail} 
                       alt={`${project.title} schematic`}
                       className="w-full h-full object-cover" 
                       loading="lazy"
                     />
                   ) : (
                     <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                        <FaMicrochip className="text-3xl text-gray-700" />
                     </div>
                   )}
                   
                   {/* Live Status Badge removed */}

              </div>

              {/* 2. Visual Connector */}
              <div className="h-1 w-full bg-black flex items-center justify-center relative z-20 overflow-hidden">
                   <div className="h-full w-1/3 bg-primary-500/20 flex justify-center sticky">
                       <div className="w-full h-px bg-primary-500/50 mt-0.5 shadow-[0_0_5px_rgba(99,102,241,0.8)]"></div>
                   </div>
              </div>

              {/* 3. The Data Console */}
              <div className="p-4 bg-gradient-to-b from-gray-900/95 to-black">
                   <div className="flex justify-between items-start mb-2">
                     <Link to={`/projects/${project.slug}`}>
                         <h3 className="text-lg font-bold font-display text-white tracking-wide">
                            {project.title}
                         </h3>
                     </Link>
                     <span className="px-1.5 py-0.5 border border-primary-500/30 text-[9px] font-mono text-primary-400 bg-primary-500/10 rounded-sm">
                        STATUS: LIVE
                     </span>
                   </div>
                   
                   <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4 font-mono border-l-2 border-primary-500/30 pl-3">
                       {project.shortDescription}
                   </p>

                   {/* Tech Tags */}
                   <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                         <span key={idx} className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded-sm">
                            {tech}
                         </span>
                      ))}
                   </div>

                   {/* Physical Keys Action Bar */}
                   <div className="grid grid-cols-[1fr_auto_auto] gap-2 pt-2 border-t border-white/5">
                       <Link 
                          to={`/projects/${project.slug}`} 
                          className="bg-primary-600/20 border border-primary-500/50 text-primary-400 text-[10px] font-bold font-mono tracking-widest uppercase flex items-center justify-center h-9 hover:bg-primary-600 hover:text-white transition-all active:scale-[0.98] rounded-sm group relative overflow-hidden"
                       >
                           <span className="relative z-10">INITIATE_LINK -&gt;</span>
                           <div className="absolute inset-0 bg-primary-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                       </Link>
                       <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 rounded-sm transition-all active:scale-95"
                          aria-label="GitHub Source"
                       >
                           <FaGithub size={16} />
                       </a>
                        {project.liveUrl && (
                         <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 rounded-sm transition-all active:scale-95"
                          aria-label="Live Demo"
                       >
                           <FaExternalLinkAlt size={12} />
                       </a>
                       )}
                   </div>
              </div>
          </div>
       )}


       {/* ==============================================
           DESKTOP LAYOUT: THE "STANDARD GRID"
           (Visible only on >= md screens)
           ============================================== */}
       <div className="hidden md:block group relative h-full">
          {/* Holographic Border Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-200" aria-hidden="true"></div>
          
          {/* Main Card Content */}
          <div className="relative h-full flex flex-col bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
             
             {/* Image Section */}
             <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30 z-10 pointer-events-none" aria-hidden="true"></div>
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
                      <FaMicrochip className="text-4xl text-gray-700" aria-hidden="true" />
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
                       <h3 className="text-xl font-bold font-display text-white mb-2 leading-tight flex items-center gap-2">
                          {project.title}
                       </h3>
                   </Link>
                   <div className="h-0.5 w-12 bg-primary-500/50 rounded-full mb-3 group-hover:w-full transition-all duration-500" aria-hidden="true"></div>
                   
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

                {/* Footer Actions */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                   <Link to={`/projects/${project.slug}`} className="text-primary-400 text-xs font-bold font-mono tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                      View Details <span className="text-lg">→</span>
                   </Link>

                   <div className="flex gap-3">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="View Source">
                         <FaGithub size={18} />
                      </a>
                      {project.liveUrl && (
                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Live Demo">
                            <FaExternalLinkAlt size={16} />
                         </a>
                      )}
                   </div>
                </div>
             </div>
          </div>
       </div>

    </article>
  );
};
export default ProjectCard;
