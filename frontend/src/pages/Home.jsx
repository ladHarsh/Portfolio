import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaBrain,
  FaServer,
  FaCode,
  FaMicrochip,
  FaTerminal,
  FaDatabase,
  FaNetworkWired,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiMongodb,
} from "react-icons/si";
import ProjectCard from "../components/projects/ProjectCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import NeuralBackground from "../components/ui/NeuralBackground";
import { projectsApi } from "../services/api";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated Boot Sequence State
  const [terminalLines, setTerminalLines] = useState([
    "> INITIALIZING KERNEL...",
    "> LOADING NEURAL MODULES...",
    "> CONNECTING TO MAINNET...",
  ]);

  /* 
    Updated to only run once per session using sessionStorage.
    This prevents the user from seeing the boot screen every time they navigate back to Home.
  */
  const [bootSequence, setBootSequence] = useState(() => {
    return !sessionStorage.getItem("hasBooted");
  });

  useEffect(() => {
    fetchProjects();

    // Only run boot logic if we haven't booted yet
    if (bootSequence) {
      const sequence = [
        { text: "> MOUNTING FILE SYSTEM... [OK]", delay: 500 },
        { text: "> OPTIMIZING TENSORS... [OK]", delay: 1000 },
        { text: "> ESTABLISHING SECURE LINK... [OK]", delay: 1600 },
        { text: "> SYSTEM READY.", delay: 2200 },
      ];

      let timeouts = [];
      sequence.forEach(({ text, delay }) => {
        const timeout = setTimeout(() => {
          setTerminalLines((prev) => [...prev, text]);
        }, delay);
        timeouts.push(timeout);
      });

      const finishBoot = setTimeout(() => {
        setBootSequence(false);
        sessionStorage.setItem("hasBooted", "true"); // Mark as booted
      }, 2800);

      return () => {
        timeouts.forEach(clearTimeout);
        clearTimeout(finishBoot);
      };
    }
  }, [bootSequence]);

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

  const profileImage = "/I_need_to_2k_202601172105.jpeg";

  // If Booting, show Terminal - Mobile optimized
  if (bootSequence) {
    return (
      <div className="fixed inset-0 bg-black text-green-500 font-mono p-4 sm:p-6 md:p-10 z-[100] flex flex-col justify-end">
        {terminalLines.map((line, i) => (
          <div key={i} className="text-xs sm:text-sm md:text-base opacity-90">
            {line}
          </div>
        ))}
        <div className="animate-pulse mt-2">_</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen relative overflow-hidden font-sans bg-gray-900 text-white selection:bg-primary-500 selection:text-white">
      {/* 0. NEURAL BACKGROUND LAYER */}
      <NeuralBackground />

      {/* 1. HERO: THE SYSTEM CORE - Mobile Optimized */}
      <section className="min-h-screen flex items-center justify-center relative z-10 pt-16 sm:pt-20 px-4 sm:px-6">
        <div className="section-container w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left: Data Stream - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            {/* Status Badge - Mobile optimized */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border border-primary-500/30 bg-primary-500/10 rounded-none backdrop-blur-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="font-mono text-[10px] sm:text-xs text-primary-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                System Identity :: Architect
              </span>
            </div>

            {/* Main Heading - Responsive Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
                NEURAL
              </span>
              <br />
              ARCHITECT
            </h1>

            {/* Mission Profile - Mobile optimized */}
            <div className="p-4 sm:p-6 border-l-2 border-primary-500 bg-white/5 backdrop-blur-sm rounded-r-xl max-w-xl">
              <p className="font-mono text-xs sm:text-sm text-gray-400 mb-2">
                // MISSION_PROFILE
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                I engineer{" "}
                <span className="text-primary-400 font-bold">Intelligence</span>
                , not just interfaces. My focus is absolute: advancing as an AI
                Engineer to build the autonomous systems of tomorrow. I fuse
                robust Software Architecture with Machine Learning to create
                intelligent, adaptive solutions.
              </p>
            </div>

            {/* CTA Buttons - Touch Optimized */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                to="/projects"
                className="relative overflow-hidden group px-6 sm:px-8 py-4 bg-primary-600 font-bold text-white tracking-wider uppercase text-xs sm:text-sm min-h-[48px] flex items-center justify-center rounded-sm"
                aria-label="View all projects"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="hidden sm:inline">Initialize Portfolio</span>
                  <span className="sm:hidden">Projects</span>
                  <FaArrowRight aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true"></div>
              </Link>
              <Link
                to="/about"
                className="px-6 sm:px-8 py-4 border-2 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 active:bg-white/15 hover:border-white/30 transition-all font-mono text-xs sm:text-sm uppercase tracking-wider text-gray-300 min-h-[48px] flex items-center justify-center rounded-sm"
                aria-label="Learn more about me"
              >
                <span className="hidden sm:inline">Access Dossier</span>
                <span className="sm:hidden">About</span>
              </Link>
            </div>
          </motion.div>

          {/* Right: The Core Visual - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center perspective-1000 will-change-transform order-1 lg:order-2"
          >
            {/* Holographic Circle - Reduced on mobile */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 sm:from-primary-500/30 to-purple-500/10 sm:to-purple-500/20 rounded-full blur-[60px] sm:blur-[100px] animate-pulse" aria-hidden="true"></div>

            {/* Tech Orbitals - Hidden on mobile for performance */}
            <div className="hidden sm:block absolute w-[120%] h-[120%] border border-white/10 rounded-full animate-[spin_60s_linear_infinite] will-change-transform" aria-hidden="true"></div>
            <div className="hidden sm:block absolute w-[140%] h-[140%] border border-dashed border-primary-500/20 rounded-full animate-[spin_80s_linear_infinite_reverse] will-change-transform" aria-hidden="true"></div>

            {/* The "Card" - Responsive sizing */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-[24rem] sm:h-[26rem] lg:h-[28rem] bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-500 active:scale-[0.98] lg:hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>

              {/* Scanner Line */}
              <div className="absolute top-0 w-full h-1 bg-primary-400 shadow-[0_0_15px_rgba(99,102,241,1)] animate-[scan_4s_ease-in-out_infinite] z-20 opacity-30" aria-hidden="true"></div>

              {/* Profile Image - Lazy loading */}
              <img
                src={profileImage}
                alt="Harsh Lad - AI Engineer and Full Stack Developer"
                loading="lazy"
                className="w-full h-full object-cover opacity-90 active:opacity-100 lg:group-hover:opacity-100 transition-all duration-500 ease-in-out grayscale contrast-[1.2] brightness-90 active:grayscale-0 active:contrast-100 active:brightness-100 lg:group-hover:grayscale-0 lg:group-hover:contrast-100 lg:group-hover:brightness-100 lg:group-hover:scale-[1.02]"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, black 50%, transparent 90%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 50%, transparent 90%)",
                }}
              />

              {/* Holographic Tint */}
              <div className="absolute inset-0 bg-primary-500 mix-blend-overlay opacity-30 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-500 pointer-events-none z-10" aria-hidden="true"></div>

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" aria-hidden="true"></div>

              {/* HUD Overlays - Mobile optimized */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                <div className="flex justify-between text-[10px] sm:text-xs font-mono text-primary-300 mb-2">
                  <span>STATUS: ONLINE</span>
                  <span>CPU: 98%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 w-[98%] shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                </div>
                <h2 className="text-lg sm:text-xl font-bold font-display mt-3 sm:mt-4 text-white">
                  Harsh Lad
                </h2>
                <p className="text-[10px] sm:text-xs font-mono text-gray-400">
                  AI_ENGINEER :: V.2.0
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Hint - Hidden on mobile */}
        <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50" aria-hidden="true">
          <span className="text-[10px] font-mono tracking-widest text-primary-400">
            SCROLL TO DECRYPT
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 relative z-10" aria-labelledby="capabilities-heading">
        <div className="section-container">
          <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" aria-hidden="true"></span>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-primary-500/30 bg-primary-500/10 rounded-full">
              <FaNetworkWired className="text-primary-400 text-sm sm:text-base" aria-hidden="true" />
              <h2 id="capabilities-heading" className="font-mono text-xs sm:text-sm text-primary-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                System Architecture
              </h2>
            </div>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" aria-hidden="true"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: FaBrain,
                title: "Neural Networks",
                desc: "Architecting Deep Learning models (CNN/RNN/Transformers) that predict and adapt.",
              },
              {
                icon: FaServer,
                title: "Backend Ops",
                desc: "Building fault-tolerant Node.js/Python microservices capable of massive scale.",
              },
              {
                icon: FaDatabase,
                title: "Data Engineering",
                desc: "Designing pipelines that transform raw chaos into structured, queryable insight.",
              },
              {
                icon: FaTerminal,
                title: "System Sec",
                desc: "End-to-end proprietary software design with security and efficiency at the core.",
              },
            ].map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(99,102,241,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>

                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary-400 mb-4 sm:mb-6 group-hover:text-white group-hover:bg-primary-500 transition-colors">
                    <item.icon className="text-xl sm:text-2xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-mono">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEPLOYED MODULES (Projects) - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 bg-black/50 relative z-10" aria-labelledby="projects-heading">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-12 sm:mb-16">
            <div>
              <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
                Deployed Modules
              </h2>
              <p className="text-gray-400 max-w-xl font-mono text-xs sm:text-sm border-l-2 border-primary-500 pl-3 sm:pl-4 py-1">
                // ACCESSING LIVE PROJECT DATABASES...
              </p>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-primary-400 hover:text-white active:text-white transition-colors font-bold tracking-wider text-xs sm:text-sm border-b border-primary-400/30 pb-1 min-h-[44px]"
              aria-label="View all projects"
            >
              VIEW ALL LOGS <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          {loading ? (
            <div className="h-64 flex justify-center items-center">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div key={project._id} className="relative group">
                  {/* Decoration corner - Hidden on mobile */}
                  <div className="hidden sm:block absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                  <div className="hidden sm:block absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>

                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. TECH STACK - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 border-t border-white/5 relative z-10" aria-labelledby="tech-stack-heading">
        <div className="section-container">
          <h2 id="tech-stack-heading" className="sr-only">Technology Stack</h2>
          <p className="text-center font-mono text-[10px] sm:text-xs text-gray-600 mb-6 sm:mb-8 uppercase tracking-widest">
            Powered By
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 opacity-40 sm:opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <SiPython className="text-3xl sm:text-4xl lg:text-5xl hover:text-yellow-400 transition-colors" aria-label="Python" />
            <SiTensorflow className="text-3xl sm:text-4xl lg:text-5xl hover:text-orange-500 transition-colors" aria-label="TensorFlow" />
            <SiReact className="text-3xl sm:text-4xl lg:text-5xl hover:text-cyan-400 transition-colors" aria-label="React" />
            <SiNodedotjs className="text-3xl sm:text-4xl lg:text-5xl hover:text-green-500 transition-colors" aria-label="Node.js" />
            <SiDocker className="text-3xl sm:text-4xl lg:text-5xl hover:text-blue-500 transition-colors" aria-label="Docker" />
          </div>
        </div>
      </section>

      {/* 5. CTA: SECURE HANDSHAKE - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 relative z-10 text-center overflow-hidden" aria-labelledby="cta-heading">
        {/* Background Pulse - Reduced on mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary-900/10 sm:bg-primary-900/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" aria-hidden="true"></div>

        <div className="section-container relative z-20">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 sm:mb-8 px-4">
            INITIATE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
              COLLABORATION
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            I am actively accepting signals for high-impact engineering roles.{" "}
            <br className="hidden sm:inline" />
            If your team requires a cognitive upgrade, transmit your protocol
            below.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a
              href="mailto:harshlad.dev@gmail.com"
              className="flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-bold text-sm sm:text-base lg:text-lg hover:bg-primary-400 active:bg-primary-500 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] min-h-[52px] rounded-sm"
              aria-label="Send email to Harsh Lad"
            >
              <FaEnvelope aria-hidden="true" /> 
              <span className="hidden sm:inline">TRANSMIT MAIL</span>
              <span className="sm:hidden">EMAIL</span>
            </a>
            <a
              href="https://linkedin.com/in/harsh-lad-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 text-white font-bold text-sm sm:text-base lg:text-lg hover:bg-white/10 active:bg-white/15 hover:border-white/40 transition-all min-h-[52px] rounded-sm"
              aria-label="Connect on LinkedIn"
            >
              <FaLinkedin aria-hidden="true" /> 
              <span className="hidden sm:inline">ESTABLISH UPLINK</span>
              <span className="sm:hidden">LINKEDIN</span>
            </a>
          </div>
        </div>
      </section>

      {/* GLOBAL KEYFRAMES */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        /* Screen reader only class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;
