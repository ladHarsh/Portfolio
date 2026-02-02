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
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiGoogle,
  SiOpenai,
  SiKaggle,
  SiStreamlit,
  SiJupyter,
  SiFastapi,
  SiMysql,
  SiPostman,
  SiCplusplus,
  SiPytorch,
  SiVercel,
  SiFigma,
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

      {/* 1. HERO: THE SYSTEM CORE - Final Mobile Polish */}
      <section className="min-h-screen flex items-center justify-center relative z-10 pt-32 sm:pt-40 pb-32 px-4 sm:px-6">
        <div className="section-container w-full">
          
          {/* Mobile-First Layout: Title → Profile */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Content Column - Clean & Open */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5 sm:space-y-6 lg:space-y-8 w-full order-1 lg:order-1"
            >
              {/* Main Heading - Improved Spacing */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.15] sm:leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
                    AI ENGINEER
                  </span>
                  <br />
                  HARSH LAD
                </h1>
                {/* Role Identity - Clear and Searchable */}
                <p className="text-xs sm:text-sm font-mono text-cyan-400/80 tracking-widest mt-2 sm:mt-3 uppercase">
                  Machine Learning Engineer | Applied AI
                </p>
              </div>

              {/* Mission Profile - Concrete Technical Details */}
              <div className="p-3 sm:p-4 lg:p-6 border-l-2 border-primary-500 bg-white/5 backdrop-blur-sm rounded-r-xl max-w-xl">
                <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">
                  // TECHNICAL_PROFILE
                </p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-400 leading-relaxed">
                  <span className="text-white font-bold">B.Tech in Computer Science</span> (2026) specializing in{" "}
                  <span className="text-primary-400 font-bold">Generative AI and Machine Learning</span>.
                  Building production-ready AI systems with{" "}
                  <span className="text-white font-bold">TensorFlow, PyTorch, LangChain</span>, and modern full-stack technologies.
                  Experienced in <span className="text-primary-400 font-bold">NLP, Computer Vision</span>, and deploying intelligent applications at scale.
                </p>
              </div>

              {/* CTA Buttons - 2-Column Grid on Mobile */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
                <Link
                  to="/projects"
                  className="relative overflow-hidden group px-4 sm:px-6 py-4 bg-primary-600 font-bold text-white tracking-wider uppercase text-xs sm:text-sm min-h-[48px] flex items-center justify-center rounded-sm col-span-2 sm:col-span-1"
                  aria-label="View all projects"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="hidden sm:inline">VIEW PROJECTS</span>
                    <span className="sm:hidden">VIEW PROJECTS</span>
                    <FaArrowRight aria-hidden="true" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true"></div>
                </Link>
                <Link
                  to="/about"
                  className="px-4 sm:px-6 py-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 active:bg-white/15 transition-all font-mono text-xs sm:text-sm uppercase tracking-wider text-gray-300 min-h-[48px] flex items-center justify-center rounded-sm col-span-2 sm:col-span-1"
                  aria-label="Learn more about me"
                >
                  <span className="hidden sm:inline">ABOUT ME</span>
                  <span className="sm:hidden">ABOUT ME</span>
                </Link>
              </div>
            </motion.div>

            {/* Profile Card - Transforms on Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full order-2 lg:order-2"
            >
              {/* Desktop: Portrait Card (md and up) */}
              <div className="hidden md:flex justify-center perspective-1000 will-change-transform">
                {/* Holographic Circle */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-purple-500/20 rounded-full blur-[100px] animate-pulse" aria-hidden="true"></div>

                {/* Tech Orbitals */}
                <div className="absolute w-[120%] h-[120%] border border-white/10 rounded-full animate-[spin_60s_linear_infinite] will-change-transform" aria-hidden="true"></div>
                <div className="absolute w-[140%] h-[140%] border border-dashed border-primary-500/20 rounded-full animate-[spin_80s_linear_infinite_reverse] will-change-transform" aria-hidden="true"></div>

                {/* The Portrait Card */}
                <div className="relative z-10 w-full max-w-[320px] lg:max-w-[360px] h-[26rem] lg:h-[28rem] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>

                  {/* Scanner Line */}
                  <div className="absolute top-0 w-full h-1 bg-primary-400 shadow-[0_0_15px_rgba(99,102,241,1)] animate-[scan_4s_ease-in-out_infinite] z-20 opacity-30" aria-hidden="true"></div>

                  {/* Profile Image */}
                  <img
                    src={profileImage}
                    alt="Harsh Lad - AI Engineer and Full Stack Developer"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 ease-in-out grayscale contrast-[1.2] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.02]"
                    style={{
                      maskImage:
                        "radial-gradient(circle at center, black 50%, transparent 90%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at center, black 50%, transparent 90%)",
                    }}
                  />

                  {/* Holographic Tint */}
                  <div className="absolute inset-0 bg-primary-500 mix-blend-overlay opacity-30 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10" aria-hidden="true"></div>

                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" aria-hidden="true"></div>

                  {/* HUD Overlays */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="flex justify-between text-xs font-mono text-primary-300 mb-2">
                      <span>STATUS: ONLINE</span>
                      <span>CPU: 98%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 w-[98%] shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                    </div>
                    <h2 className="text-xl font-bold font-display mt-4 text-white">
                      Harsh Lad
                    </h2>
                    <p className="text-xs font-mono text-gray-400">
                      AI Engineer | ML Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile: Full-Width Bottom HUD "Iron Man Style" (<md) */}
              <div className="md:hidden w-full">
                {/* Avatar with Fade-In Effect */}
                <div className="relative w-full">
                  {/* Main Container - Full Width, Dark Glass */}
                  <div className="w-full bg-black/80 backdrop-blur-xl border-t border-white/10 shadow-2xl">
                    {/* Fade-in Gradient Mask */}
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)'
                      }}
                      aria-hidden="true"
                    ></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5">
                      {/* Left: Small Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-primary-500/40 shadow-lg">
                          <img
                            src={profileImage}
                            alt="Harsh Lad"
                            loading="lazy"
                            className="w-full h-full object-cover grayscale contrast-[1.2] brightness-90"
                          />
                          {/* Holographic Tint */}
                          <div className="absolute inset-0 bg-primary-500 mix-blend-overlay opacity-30 pointer-events-none"></div>
                        </div>
                        {/* Scanner Line */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary-400 shadow-[0_0_10px_rgba(99,102,241,1)] animate-[scan_4s_ease-in-out_infinite] opacity-50" aria-hidden="true"></div>
                      </div>

                      {/* Right: Identity Data */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-sm sm:text-base font-bold font-display text-white mb-0.5 truncate">
                          Harsh Lad
                        </h2>
                        <p className="text-[9px] sm:text-[10px] font-mono text-gray-400 mb-2">
                          AI Engineer | ML Developer
                        </p>
                        
                        {/* Status Indicator - Compact */}
                        <div className="flex items-center gap-2 text-[9px] sm:text-[10px]">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-mono text-green-400 uppercase tracking-wider">Online</span>
                          </div>
                          <span className="text-gray-600">•</span>
                          <span className="font-mono text-primary-300">CPU: 98%</span>
                        </div>
                        
                        {/* Mini Progress Bar */}
                        <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden mt-1.5">
                          <div className="h-full bg-primary-500 w-[98%] shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Hint - Hidden on mobile */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30" aria-hidden="true">
          <span className="text-[10px] font-mono tracking-widest text-primary-400">
            SCROLL TO DECRYPT
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID - Mobile Optimized */}
      {/* 2. CAPABILITIES GRID - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 relative z-10" aria-labelledby="capabilities-heading">
        <div className="section-container">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-16">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" aria-hidden="true"></span>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-primary-500/30 bg-primary-500/10 rounded-full">
              <FaNetworkWired className="text-primary-400 text-sm sm:text-base" aria-hidden="true" />
              <h2 id="capabilities-heading" className="font-mono text-xs sm:text-sm text-primary-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                My Expertise
              </h2>
            </div>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" aria-hidden="true"></span>
          </div>

          {/* Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="flex flex-row overflow-x-auto snap-x snap-mandatory px-4 gap-4 pb-8 -mx-4 sm:mx-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {[
              {
                icon: FaBrain,
                title: "AI & Machine Learning",
                desc: "Building Deep Learning models (CNN/RNN/Transformers) with TensorFlow and PyTorch for NLP and Computer Vision.",
              },
              {
                icon: FaServer,
                title: "Backend Development",
                desc: "Scalable Node.js/FastAPI microservices with MongoDB/PostgreSQL. RESTful APIs with JWT authentication.",
              },
              {
                icon: FaDatabase,
                title: "Data Engineering",
                desc: "ETL pipelines with Pandas/NumPy. Feature engineering and data visualization for ML workflows.",
              },
              {
                icon: FaTerminal,
                title: "Full-Stack Development",
                desc: "React applications with Tailwind CSS. Real-time features using Socket.io and WebRTC.",
              },
            ].map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                tabIndex={0}
                className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all group overflow-hidden min-w-[85vw] sm:min-w-0 snap-center focus:outline-none focus:border-primary-500/50"
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
            
            {/* Spacer for mobile to show last card fully if needed, or margin handles it */}
            <div className="w-1 sm:hidden"></div>
          </div>

          {/* Swipe Hint - Mobile Only */}
          <div className="flex sm:hidden justify-center mt-2">
             <div className="flex items-center gap-2 text-[10px] font-mono text-primary-400/60 animate-pulse">
                <span>SWIPE TO INSPECT</span>
                <span className="text-lg">→</span>
             </div>
          </div>
        </div>
      </section>

      {/* 3. DEPLOYED MODULES (Projects) - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 bg-black/50 relative z-10" aria-labelledby="projects-heading">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-12 sm:mb-16">
            <div>
              <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-400 max-w-xl font-mono text-xs sm:text-sm border-l-2 border-primary-500 pl-3 sm:pl-4 py-1">
                Production-ready AI and full-stack applications with live demos
              </p>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-primary-400 hover:text-white active:text-white transition-colors font-bold tracking-wider text-xs sm:text-sm border-b border-primary-400/30 pb-1 min-h-[44px]"
              aria-label="View all projects"
            >
              VIEW ALL PROJECTS <FaArrowRight aria-hidden="true" />
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

      {/* 5. CTA: SECURE HANDSHAKE (Moved UP) - The "Uplink Terminal" */}
      <section className="py-16 sm:py-24 lg:py-32 relative z-10 text-center overflow-hidden" aria-labelledby="cta-heading">
        {/* Background Pulse & Radar Scan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-900/10 rounded-full blur-[80px] animate-pulse" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,rgba(59,130,246,0.05)_90deg,transparent_90deg)] animate-[spin_5s_linear_infinite] opacity-50 pointer-events-none" aria-hidden="true"></div>

        <div className="section-container relative z-20">
          
          {/* Signal Badge */}
          <div className="flex justify-center mb-6">
             <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span>
                <span className="text-[10px] sm:text-xs font-mono text-green-400 tracking-widest uppercase">
                   ● UPLINK ESTABLISHED
                </span>
             </div>
          </div>

          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 sm:mb-8 px-4 leading-[0.9] sm:leading-tight flex flex-col items-center">
            <span>LET'S BUILD</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400 flex items-center gap-1">
              TOGETHER<span className="text-primary-400 animate-pulse">_</span>
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 font-mono">
            Open to new opportunities and collaborations
          </p>

          {/* Holographic Keys */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-md mx-auto sm:max-w-none sm:flex sm:justify-center gap-4 px-4">
            <a
              href="mailto:harshlad.dev@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-blue-500/50 text-blue-400 font-bold font-mono text-xs sm:text-sm tracking-widest hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300 hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.4)] active:scale-[0.98] transition-all duration-300 min-h-[52px] rounded-sm group uppercase shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]"
              aria-label="Send email"
            >
              <FaEnvelope className="text-lg group-hover:animate-pulse" /> 
              <span>SEND EMAIL {'->'}</span>
            </a>
            <a
              href="https://linkedin.com/in/harsh-lad-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-white/20 text-white font-bold font-mono text-xs sm:text-sm tracking-widest hover:bg-white/5 hover:border-white/40 active:scale-[0.98] transition-all duration-300 min-h-[52px] rounded-sm uppercase"
              aria-label="Connect on LinkedIn"
            >
              <FaLinkedin className="text-lg" /> 
              <span>CONNECT ON LINKEDIN</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK (Dual-Stream Command Center) */}
      <section className="py-10 sm:py-16 border-t border-white/5 relative z-10 overflow-hidden bg-black/40 backdrop-blur-sm" aria-labelledby="tech-stack-heading">
        <h2 id="tech-stack-heading" className="sr-only">Technology Stack</h2>
        
        {/* Dual-Stream Layout with Mask Image Fade */}
        <div className="relative flex flex-col gap-8 sm:gap-12 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          {/* ROW 1: AI & DATA (Moving Left - 40s) */}
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] group">
             {[
               { Icon: SiPython, label: "Python" },
               { Icon: SiTensorflow, label: "TensorFlow" },
               { Icon: SiPytorch, label: "PyTorch" },
               { Icon: SiOpencv, label: "OpenCV" },
               { Icon: SiScikitlearn, label: "Scikit-Learn" },
               { Icon: SiPandas, label: "Pandas" },
               { Icon: SiNumpy, label: "NumPy" },
               { Icon: SiGoogle, label: "Gemini" },
               { Icon: SiOpenai, label: "OpenAI" },
               { Icon: SiKaggle, label: "Kaggle" },
               { Icon: SiJupyter, label: "Jupyter" },
               { Icon: SiStreamlit, label: "Streamlit" },
               // Duplicate for Loop
               { Icon: SiPython, label: "Python" },
               { Icon: SiTensorflow, label: "TensorFlow" },
               { Icon: SiPytorch, label: "PyTorch" },
               { Icon: SiOpencv, label: "OpenCV" },
               { Icon: SiScikitlearn, label: "Scikit-Learn" },
               { Icon: SiPandas, label: "Pandas" },
               { Icon: SiNumpy, label: "NumPy" },
               { Icon: SiGoogle, label: "Gemini" },
               { Icon: SiOpenai, label: "OpenAI" },
               { Icon: SiKaggle, label: "Kaggle" },
               { Icon: SiJupyter, label: "Jupyter" },
               { Icon: SiStreamlit, label: "Streamlit" },
             ].map((tech, idx) => (
               <div key={idx} className="flex items-center gap-2 mx-6 sm:mx-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110 cursor-pointer">
                 <tech.Icon className="text-3xl sm:text-5xl" aria-label={tech.label} />
               </div>
             ))}
          </div>

          {/* ROW 2: ENGINEERING & TOOLS (Moving Right - 50s) */}
          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] group">
             {[
               { Icon: SiReact, label: "React" },
               { Icon: SiNodedotjs, label: "Node.js" },
               { Icon: SiMongodb, label: "MongoDB" },
               { Icon: SiDocker, label: "Docker" },
               { Icon: FaGitAlt, label: "Git" },
               { Icon: FaLinux, label: "Linux" },
               { Icon: SiCplusplus, label: "C++" },
               { Icon: SiMysql, label: "SQL" },
               { Icon: SiTailwindcss, label: "Tailwind" },
               { Icon: SiPostman, label: "Postman" },
               { Icon: SiVercel, label: "Vercel" },
               { Icon: SiFigma, label: "Figma" },
               // Duplicate for Loop
               { Icon: SiReact, label: "React" },
               { Icon: SiNodedotjs, label: "Node.js" },
               { Icon: SiMongodb, label: "MongoDB" },
               { Icon: SiDocker, label: "Docker" },
               { Icon: FaGitAlt, label: "Git" },
               { Icon: FaLinux, label: "Linux" },
               { Icon: SiCplusplus, label: "C++" },
               { Icon: SiMysql, label: "SQL" },
               { Icon: SiTailwindcss, label: "Tailwind" },
               { Icon: SiPostman, label: "Postman" },
               { Icon: SiVercel, label: "Vercel" },
               { Icon: SiFigma, label: "Figma" },
             ].map((tech, idx) => (
               <div key={idx} className="flex items-center gap-2 mx-6 sm:mx-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110 cursor-pointer">
                 <tech.Icon className="text-3xl sm:text-5xl" aria-label={tech.label} />
               </div>
             ))}
          </div>

        </div>
      </section>

      {/* GLOBAL KEYFRAMES */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-reverse 50s linear infinite;
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
