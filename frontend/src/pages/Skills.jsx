import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3, FaDocker, 
  FaGitAlt, FaGithub, FaDatabase, FaBrain, FaServer, FaCode, FaLaptopCode,
  FaCheckCircle, FaStar, FaTools, FaCloud, FaTerminal, FaNetworkWired, FaMicrochip,
  FaRobot, FaLayerGroup, FaCubes, FaLock, FaKey, FaChartLine, FaCogs, FaProjectDiagram, FaAws,
  FaCalculator, FaFileWord, FaMousePointer
} from "react-icons/fa";
import { 
  SiNumpy, SiPandas, SiScikitlearn, SiMongodb, SiMysql, SiExpress, 
  SiTailwindcss, SiPostman, SiTensorflow, SiNextdotjs, SiTypescript, 
  SiOpencv, SiKeras, SiPytorch, SiLinux, SiOpenai, 
  SiRedis, SiPostgresql, SiGraphql, SiFastapi, SiVite, SiStreamlit, SiDaisyui, SiZod,
  SiSocketdotio, SiReactquery, SiGoogle, SiKubernetes,
  SiCplusplus, SiBootstrap, SiCanva, SiIntellijidea, SiPycharm, SiJupyter, SiAnaconda, 
  SiVercel, SiHeroku, SiKaggle, SiRender
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Mobile-First Skill Card Component
const SkillNode = ({ category, index }) => {
   // Determine if the card is on the left side (even index) or right side (odd index) of the tree
   const isLeft = index % 2 === 0;

   // Connector positioning classes - Only visible on desktop
   const lineClass = isLeft 
      ? "absolute top-1/2 -right-8 w-8 h-px bg-gray-800 hidden lg:block group-hover:bg-primary-500 transition-colors" 
      : "absolute top-1/2 -left-8 w-8 h-px bg-gray-800 hidden lg:block group-hover:bg-primary-500 transition-colors";
      
   const dotClass = isLeft
      ? "absolute top-1/2 -right-8 w-2 h-2 bg-gray-800 rounded-full translate-x-1/2 -translate-y-1/2 hidden lg:block group-hover:bg-primary-500 transition-colors"
      : "absolute top-1/2 -left-8 w-2 h-2 bg-gray-800 rounded-full -translate-x-1/2 -translate-y-1/2 hidden lg:block group-hover:bg-primary-500 transition-colors";

   return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.05 }}
        className="relative group perspective-1000"
      >
         {/* Connector Lines (Desktop Only) */}
         <div className={lineClass} aria-hidden="true"></div>
         <div className={dotClass} aria-hidden="true"></div>

         <div className="relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary-500/50 active:border-primary-500/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:-translate-y-1 active:scale-[0.98]">
            {/* Background Grid - Reduced opacity on mobile */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] sm:opacity-5 pointer-events-none" aria-hidden="true"></div>
            
            {/* Header - Mobile optimized */}
            <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-10">
               <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg border border-white/10 text-primary-400 group-hover:text-white group-hover:bg-primary-500 transition-colors duration-300">
                     <div className="text-lg sm:text-2xl">
                        {category.icon}
                     </div>
                  </div>
                  <div className="text-left">
                     <h3 className="font-display font-bold text-sm sm:text-base lg:text-lg text-white tracking-wide leading-none mb-1">{category.title}</h3>
                     <p className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">{category.id}_MODULE::V1.0</p>
                  </div>
               </div>
               <div className="hidden sm:block text-[9px] sm:text-[10px] font-mono text-gray-600 px-2 py-1 border border-white/5 rounded">
                  Status: ACTIVE
               </div>
            </div>

            {/* Skills Grid - Mobile optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 relative z-10">
               {category.skills.map((skill, i) => (
                  <div 
                     key={i} 
                     className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer text-left group/skill min-h-[44px] sm:min-h-0"
                  >
                     <span className="text-gray-400 text-base sm:text-lg group-hover/skill:text-primary-400 transition-colors flex-shrink-0" aria-hidden="true">
                        {skill.icon}
                     </span>
                     <span className="text-xs sm:text-sm font-mono text-gray-300 flex-1">
                        {skill.name}
                     </span>
                     
                     {/* Proficiency Bar - Mobile optimized */}
                     <div className="ml-auto flex gap-0.5 flex-shrink-0" aria-label={`Proficiency level ${skill.level || 2} out of 3`}>
                        {[1,2,3].map(d => (
                           <div 
                              key={d} 
                              className={`w-1 h-2.5 sm:h-3 rounded-full ${d <= (skill.level || 2) ? "bg-primary-500/50" : "bg-gray-800"}`}
                              aria-hidden="true"
                           ></div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </motion.article>
   );
};

// Neural Processor - Hidden on mobile for performance
const NeuralProcessor = () => {
   return (
      <div className="relative w-64 sm:w-72 h-64 sm:h-72 flex items-center justify-center" aria-hidden="true">
         {/* 1. Orbiting Data Packet */}
         <div className="absolute w-56 sm:w-64 h-56 sm:h-64 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]">
            <div className="absolute -top-1 left-1/2 w-3 sm:w-4 h-1.5 sm:h-2 bg-primary-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
         </div>

         {/* 2. Reverse Orbit */}
         <div className="absolute w-40 sm:w-48 h-40 sm:h-48 rounded-full border border-dashed border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>

         {/* 3. Central Core (The Brain) */}
         <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="relative">
               <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full animate-pulse"></div>
               <FaBrain className="text-5xl sm:text-7xl text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            
               {/* Floating Icons (Satellites) - Smaller on mobile */}
               <motion.div 
                  animate={{ y: [-5, 5, -5] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 p-1.5 sm:p-2 bg-black/80 border border-white/20 rounded-lg"
               >
                  <FaCode className="text-cyan-400 text-sm sm:text-lg" />
               </motion.div>
               
               <motion.div 
                   animate={{ y: [5, -5, 5] }} 
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-4 sm:-bottom-6 -left-6 sm:-left-8 p-1.5 sm:p-2 bg-black/80 border border-white/20 rounded-lg"
               >
                   <FaServer className="text-purple-400 text-sm sm:text-lg" />
               </motion.div>
               
               <motion.div 
                   animate={{ x: [-5, 5, -5] }} 
                   transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-1/2 -right-12 sm:-right-16 p-1.5 sm:p-2 bg-black/80 border border-white/20 rounded-lg"
               >
                   <SiTensorflow className="text-orange-400 text-sm sm:text-lg" />
               </motion.div>
            </div>
         </div>
         
         {/* 4. Scanning Radar Sector */}
         <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
             <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-500 to-transparent absolute top-0 right-0 origin-bottom-left animate-[spin_4s_linear_infinite]"></div>
         </div>
      </div>
   );
};

const Skills = () => {
  const skillCategories = [
    {
      id: "COGNITIVE_FOUNDATION",
      title: "Computer Science & Math",
      icon: <FaCalculator className="text-2xl" />,
      skills: [
        { name: "DSA", icon: <FaCode />, level: 3 },
        { name: "DBMS", icon: <FaDatabase />, level: 3 },
        { name: "OS / Linux", icon: <SiLinux />, level: 2 },
        { name: "Computer Networks", icon: <FaNetworkWired />, level: 3 },
        { name: "Software Eng", icon: <FaCogs />, level: 3 },
        { name: "Linear Algebra", icon: <FaCalculator />, level: 3 },
        { name: "Probability/Stats", icon: <FaChartLine />, level: 3 }
      ]
    },
    {
      id: "NEURAL_CORE",
      title: "AI / ML / Data Science",
      icon: <FaBrain className="text-2xl" />,
      skills: [
        { name: "Python", icon: <FaPython />, level: 3 },
        { name: "TensorFlow", icon: <SiTensorflow />, level: 2 },
        { name: "Scikit-Learn", icon: <SiScikitlearn />, level: 3 },
        { name: "Pandas / NumPy", icon: <SiPandas />, level: 3 },
        { name: "Matplotlib/Seaborn", icon: <FaChartLine />, level: 3 },
        { name: "EDA / Feature Eng", icon: <FaCogs />, level: 3 },
        { name: "NLP / CNN / RNN", icon: <FaBrain />, level: 3 },
        { name: "OpenCV", icon: <SiOpencv />, level: 2 },
        { name: "Kaggle", icon: <SiKaggle />, level: 2 }
      ]
    },
     {
      id: "GENERATIVE_NEXUS",
      title: "Generative AI & LLMs",
      icon: <FaRobot className="text-2xl" />,
      skills: [
        { name: "Gemini / OpenAI", icon: <SiGoogle />, level: 3 },
        { name: "Claude / Groq", icon: <FaRobot />, level: 3 },
        { name: "Prompt Eng", icon: <FaMicrochip />, level: 3 },
        { name: "GitHub Copilot", icon: <FaGithub />, level: 3 },
        { name: "Antigravity/Agents", icon: <FaRobot />, level: 3 }
      ]
    },
    {
      id: "SYSTEM_ARCH",
      title: "Backend & Languages",
      icon: <FaServer className="text-2xl" />,
      skills: [
        { name: "C / C++", icon: <SiCplusplus />, level: 2 },
        { name: "Java", icon: <FaJava />, level: 2 },
        { name: "Node.js / Express", icon: <FaNodeJs />, level: 3 },
        { name: "FastAPI", icon: <SiFastapi />, level: 3 },
        { name: "MongoDB Atlas", icon: <SiMongodb />, level: 3 },
        { name: "MySQL / SQL", icon: <SiMysql />, level: 2 },
        { name: "REST APIs", icon: <FaNetworkWired />, level: 3 },
        { name: "JWT / Bcrypt", icon: <FaKey />, level: 3 }
      ]
    },
    {
      id: "INTERFACE_MATRIX",
      title: "Frontend & UI",
      icon: <FaLaptopCode className="text-2xl" />,
      skills: [
        { name: "React", icon: <FaReact />, level: 3 },
        { name: "Vite", icon: <SiVite />, level: 3 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 3 },
        { name: "Bootstrap", icon: <SiBootstrap />, level: 3 },
        { name: "HTML5 / CSS3", icon: <FaHtml5 />, level: 3 },
        { name: "Canva", icon: <SiCanva />, level: 2 },
        { name: "Streamlit", icon: <SiStreamlit />, level: 3 }
      ]
    },
    {
      id: "INFRA_GRID",
      title: "DevOps, Tools & Cloud",
      icon: <FaCloud className="text-2xl" />,
      skills: [
        { name: "Git / GitHub", icon: <FaGithub />, level: 3 },
        { name: "Docker", icon: <FaDocker />, level: 2 },
        { name: "VS Code / Cursor", icon: <VscVscode />, level: 3 },
        { name: "IntelliJ / PyCharm", icon: <SiIntellijidea />, level: 2 },
        { name: "Jupyter / Colab", icon: <SiJupyter />, level: 3 },
        { name: "Postman", icon: <SiPostman />, level: 3 },
        { name: "Vercel / Render", icon: <SiVercel />, level: 3 },
        { name: "MS Word", icon: <FaFileWord />, level: 3 }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 font-sans selection:bg-primary-500 selection:text-white">
      
      {/* 0. Background Grid - Reduced on mobile */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] sm:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden="true"></div>

      <div className="section-container relative z-10">
        
        {/* 1. Header - Mobile optimized */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
           <div className="text-center md:text-left w-full md:w-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary-500/30 bg-primary-500/10 rounded-full text-[10px] sm:text-xs font-mono text-primary-400 mb-3 sm:mb-4">
                 <FaTerminal className="w-2.5 h-2.5 sm:w-3 sm:h-3" aria-hidden="true" />
                 <span>RUNNING DIAGNOSTIC...</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-3 sm:mb-4 leading-tight">
                 SYSTEM <br className="sm:hidden"/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">CAPABILITIES</span>
              </h1>
              <p className="text-gray-400 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed px-4 md:px-0">
                 Authorized personnel only. Below is a complete breakdown of the active neural modules and engineering protocols currently installed.
              </p>
           </div>

           {/* 2. Neural Processor - Hidden on small mobile */}
           <div className="hidden md:flex justify-center md:justify-end">
              <NeuralProcessor />
           </div>
        </div>

        {/* 3. Skills Grid - Mobile-first layout */}
        <section className="relative" aria-label="Skills and capabilities">
           {/* Central Line for Tree Layout - Desktop Only */}
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-gray-800 to-transparent hidden lg:block -translate-x-1/2" aria-hidden="true"></div>

           {/* Grid - Vertical on mobile, tree on desktop */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-32 lg:gap-y-16">
              {skillCategories.map((category, index) => (
                 <div 
                    key={index} 
                    className={`${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                 >
                    <SkillNode category={category} index={index} />
                 </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
};

export default Skills;
