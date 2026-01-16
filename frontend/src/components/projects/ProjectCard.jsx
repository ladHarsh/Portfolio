import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const ProjectCard = ({ project, index }) => {
  const { darkMode } = useTheme();

  // Determine which thumbnail to show
  // If not dark mode AND a light thumbnail exists, use it. Otherwise default to dark thumbnail.
  const currentThumbnail = (!darkMode && project.thumbnailLight) 
    ? project.thumbnailLight 
    : project.thumbnail;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card card-hover group"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-dark-800 overflow-hidden group">
        {currentThumbnail ? (
          <img 
            src={currentThumbnail} 
            srcSet={currentThumbnail.includes('-800.webp') 
              ? `${currentThumbnail.replace('-800.webp', '-400.webp')} 400w, ${currentThumbnail} 800w`
              : undefined
            }
            sizes="(max-width: 600px) 400px, 800px"
            alt={project.title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-4xl font-bold text-primary-300 dark:text-primary-700">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        
        {project.category && (
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-white/90 dark:bg-dark-800/90 text-primary-600 dark:text-primary-400 rounded-full shadow-sm z-10">
            {project.category.toUpperCase()}
          </span>
        )}
        {project.evaluation && project.evaluation.score > 0 && (
          <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-white/90 dark:bg-dark-800/90 rounded-full border shadow-sm z-10 ${
            project.evaluation.score >= 90 ? 'text-green-600 border-green-200 dark:text-green-400 dark:border-green-900' :
            project.evaluation.score >= 70 ? 'text-yellow-600 border-yellow-200 dark:text-yellow-400 dark:border-yellow-900' :
            'text-red-600 border-red-200 dark:text-red-400 dark:border-red-900'
          }`}>
            Score: {project.evaluation.score}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="text-body text-sm line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Features Preview */}
        <ul className="space-y-1">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li
              key={idx}
              className="text-sm text-dark-500 dark:text-dark-400 flex items-start"
            >
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            to={`/projects/${project.slug}`}
            className="flex-1 btn-primary text-center text-sm py-2"
          >
            View Details
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-dark-200 dark:border-dark-600 text-dark-600 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
            aria-label="GitHub Repository"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-dark-200 dark:border-dark-600 text-dark-600 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
