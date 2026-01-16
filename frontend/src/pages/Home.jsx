import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaBrain, FaServer, FaUsers, FaArrowRight 
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiPython, SiDocker, SiMongodb } from "react-icons/si";
import ProjectCard from "../components/projects/ProjectCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { projectsApi } from "../services/api";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await projectsApi.getFeatured();
      setProjects(response.data.slice(0, 3));
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  const profileImage = darkMode 
    ? "/1767449525085.jpg" 
    : "/A_professional_headshot_2k_202601140025.jpeg";

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-dark-900 pt-20">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

        <div className="section-container relative z-10 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary-200 dark:border-primary-800 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                Available for Full-Time Roles
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-900 dark:text-white leading-[1.1] mb-6">
                Engineering Scalable <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                  AI Solutions
                </span>
              </h1>

              <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I bridge the gap between robust backend architectures and intelligent machine learning systems to build products that solve real problems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Link to="/projects" className="btn-primary w-full sm:w-auto h-12 flex items-center justify-center gap-2">
                  View My Work <FaArrowRight />
                </Link>
                <a href="/resume.pdf" target="_blank" className="btn-secondary w-full sm:w-auto h-12 flex items-center justify-center gap-2">
                  <FaFileDownload /> Download Resume
                </a>
              </div>

              {/* Tech Stack Ticker */}
              <div className="border-t border-dark-100 dark:border-dark-800 pt-8">
                <p className="text-xs uppercase tracking-widest text-dark-500 mb-4 font-semibold">Powering Solutions With</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-2xl text-dark-400 dark:text-dark-500">
                  <SiReact title="React" className="hover:text-blue-500 transition-colors cursor-help" />
                  <SiNodedotjs title="Node.js" className="hover:text-green-500 transition-colors cursor-help" />
                  <SiPython title="Python" className="hover:text-yellow-500 transition-colors cursor-help" />
                  <SiDocker title="Docker" className="hover:text-blue-600 transition-colors cursor-help" />
                  <SiMongodb title="MongoDB" className="hover:text-green-600 transition-colors cursor-help" />
                </div>
              </div>
            </motion.div>

            {/* Right Profile - Dynamic Theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img 
                  src={profileImage}
                  alt="Harsh Lad"
                  className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border border-white/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PILLARS - INDUSTRY KNOWLEDGE */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800/30">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-secondary">Why Hire Me?</h2>
            <p className="text-body">I bring deeper engineering value than just writing code. I focus on system integrity, user experience, and business impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-dark-100 dark:border-dark-700 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6">
                <FaServer />
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">Scalable Architecture</h3>
              <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                Designing systems that handle growth. Experienced with RESTful APIs, database optimization, and modular code structures.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-dark-100 dark:border-dark-700 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg flex items-center justify-center text-2xl mb-6">
                <FaBrain />
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">AI-First Mindset</h3>
              <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                Seamlessly integrating ML models into production apps. From Python preprocessing to model deployment.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-dark-100 dark:border-dark-700 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg flex items-center justify-center text-2xl mb-6">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">User-Centric Product</h3>
              <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                Building intuitive interfaces that users love. Focusing on performance, accessibility (A11y), and responsive design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED CASE STUDIES */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-primary-600 font-semibold tracking-wider uppercase mb-2">Portfolio</p>
              <h2 className="heading-secondary mb-0">Selected Case Studies</h2>
            </div>
            <Link to="/projects" className="hidden md:flex text-primary-600 hover:text-primary-700 items-center font-medium group">
              View All Projects <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/projects" className="btn-secondary w-full">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS / TRUST BAR */}
      <section className="py-10 border-y border-dark-100 dark:border-dark-800 bg-dark-50 dark:bg-dark-800/20">
        <div className="section-container flex flex-wrap justify-around gap-8 text-center">
          <div className="space-y-1">
            <p className="text-4xl font-bold text-primary-600">5+</p>
            <p className="text-sm font-medium text-dark-600 dark:text-dark-300">Production Projects</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-bold text-primary-600">8.77</p>
            <p className="text-sm font-medium text-dark-600 dark:text-dark-300">CGPA (KPGU)</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-bold text-primary-600">3+</p>
            <p className="text-sm font-medium text-dark-600 dark:text-dark-300">Years Coding</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-primary-700 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="section-container relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to hire an engineer who delivers?</h2>
          <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
            I'm currently opening my schedule for Full-Time opportunities and high-impact freelance projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-primary-700 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Start a Conversation
             </Link>
             <a href="https://linkedin.com/in/harsh-lad-dev" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-primary-800/50 text-white font-bold rounded-xl border border-white/20 hover:bg-primary-800 transition-all backdrop-blur-sm">
                Connect on LinkedIn
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
