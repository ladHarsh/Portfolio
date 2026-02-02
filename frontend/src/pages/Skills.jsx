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
      ? "absolute top-1/2 -right-8 w-2 h-2 bg-gray-800 rounded-full translate-x/2 -translate-y-1/2 hidden lg:block group-hover:bg-primary-500 transition-colors"
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
                     <p className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">{category.id.toUpperCase()}</p>
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
      id: "AI_ML",
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
      id: "GEN_AI",
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
      id: "BACKEND",
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
      id: "FRONTEND",
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
      id: "DEVOPS_STACK",
      title: "DevOps & Tools",
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
    },
    {
      id: "CS_CORE",
      title: "Computer Science",
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
    }
  ];

  // Reorder for mobile: AI/ML first (now matches desktop order)
  const mobileOrderedCategories = skillCategories; // No need to reorder anymore

  // Count total skills
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 font-sans selection:bg-primary-500 selection:text-white">
      
      {/* 0. Background Grid */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] sm:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden="true"></div>

      <div className="section-container relative z-10">
        
        {/* 1. HEADER - Diagnostic Style */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-16 gap-6 md:gap-8">
           {/* MOBILE HEADER (< md) */}
           <div className="block md:hidden w-full">
              <h1 className="text-2xl font-display font-bold mb-3 leading-tight">Technical Skills</h1>
              
              {/* Diagnostic Terminal Block */}
              <div className="bg-black border-l-2 border-emerald-500 pl-4 py-2 my-4">
                 <div className="font-mono text-xs text-emerald-400 leading-relaxed space-y-1">
                    <div>My technical expertise across AI/ML and full-stack development</div>
                    <div>{totalSkills} technologies and frameworks</div>
                    <div className="text-cyan-400 mt-2">[ PROFICIENCY: PRODUCTION-READY ]</div>
                 </div>
              </div>
           </div>

           {/* DESKTOP HEADER (>= md) */}
           <div className="hidden md:block text-center md:text-left w-full md:w-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary-500/30 bg-primary-500/10 rounded-full text-xs font-mono text-primary-400 mb-4">
                 <FaTerminal className="w-3 h-3" aria-hidden="true" />
                 <span>RUNNING DIAGNOSTIC...</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-4 leading-tight">
                 SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">CAPABILITIES</span>
              </h1>
              <p className="text-gray-400 max-w-xl text-base lg:text-lg leading-relaxed">
                 Authorized personnel only. Below is a complete breakdown of the active neural modules and engineering protocols currently installed.
              </p>
           </div>

           {/* Neural Processor - Desktop Only */}
           <div className="hidden md:flex justify-center md:justify-end">
              <NeuralProcessor />
           </div>
        </div>


        {/* 2. CATEGORY NAVIGATION - Mobile Sticky Filter */}
        <div className="md:hidden sticky top-16 z-20 bg-black/95 backdrop-blur-md border-b border-white/10 -mx-4 px-4 py-3 mb-8">
           {/* Scrollable Container - CSS Mask Fade */}
           <div 
              className="overflow-x-auto -mx-4 px-4 pr-8 no-scrollbar"
              style={{
                maskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)'
              }}
           >
              <div className="inline-flex gap-2 min-w-max pb-2">
                 {mobileOrderedCategories.map((cat, idx) => (
                    <a 
                       key={cat.id}
                       href={`#${cat.id}`}
                       className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono font-bold tracking-wider text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all whitespace-nowrap"
                    >
                       {cat.id.split('_')[0]}
                    </a>
                 ))}
              </div>
           </div>
        </div>

        {/* 3. SKILLS GRID */}
        <section className="relative" aria-label="Skills and capabilities">
           {/* MOBILE LAYOUT (< md) - "Stacked Schematic" */}
           <div className="block md:hidden space-y-12">
               {mobileOrderedCategories.map((category) => {
                  const isAICore = category.id.includes('NEURAL') || category.id.includes('GENERATIVE');
                  
                  const HEADER_MAP = {
                     AI_ML: "AI / ML // DATA_SCIENCE",
                     GEN_AI: "GENERATIVE // LLM_AGENTS",
                     BACKEND: "BACKEND // SYSTEM_ARCH",
                     FRONTEND: "FRONTEND // INTERFACE_L2",
                     DEVOPS_STACK: "DEVOPS // INFRA_GRID",
                     CS_CORE: "CS_CORE // FOUNDATION"
                  };

                  const headerText = HEADER_MAP[category.id] || category.title;
                  const [mainTitle, subTitle] = headerText.split(' // ');
                  
                  return (
                     <div key={category.id} id={category.id} className="scroll-mt-32">
                        {/* Category Header - Diagnostic Vibe */}
                        <div className="flex items-center gap-3 mb-4 pl-2 border-l-2 border-emerald-500/50">
                           <h2 className="text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
                              {mainTitle}
                              <span className="text-gray-600 ml-1">// {subTitle || `MODULE_V${category.skills.length}.0`}</span>
                           </h2>
                        </div>

                        {/* Neural Grid - Stacked Schematic Layout */}
                        <div className="grid grid-cols-2 gap-3">
                           {category.skills.map((skill, idx) => {
                              // Proficiency Logic for Segmented Ticks
                              const activeBlocks = skill.level === 3 ? 5 : skill.level === 2 ? 3 : 2;
                              
                              return (
                                 <div 
                                    key={idx} 
                                    className={`
                                       relative overflow-hidden group p-3 rounded-lg min-h-[80px] h-auto flex flex-col
                                       bg-white/[0.03] backdrop-blur-sm border border-white/10
                                       ${isAICore ? 'border-l-2 border-l-cyan-500' : ''}
                                    `}
                                 >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                                    {/* Top Row: Icon + Name (Full Width) */}
                                    <div className="flex items-center gap-2 mb-auto">
                                       <span className="text-gray-400 text-xs group-hover:text-white transition-colors shrink-0">
                                          {skill.icon}
                                       </span>
                                       <span className="text-[11px] font-bold text-white whitespace-normal break-words leading-tight">
                                          {skill.name}
                                       </span>
                                    </div>

                                    {/* Bottom Row: Progress Bar + Tag */}
                                    <div className="flex items-center justify-between gap-2 mt-2">
                                       {/* Segmented Ticks Progress Bar */}
                                       <div className="flex gap-0.5 flex-1">
                                          {[1, 2, 3, 4, 5].map((block) => (
                                             <div 
                                                key={block}
                                                className={`
                                                   h-1.5 flex-1 rounded-[1px]
                                                   ${block <= activeBlocks 
                                                      ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]' 
                                                      : 'bg-gray-800'}
                                                `}
                                             ></div>
                                          ))}
                                       </div>
                                       
                                       {/* Proficiency Tag */}
                                       <span className="text-[9px] font-mono text-cyan-500 whitespace-nowrap">
                                          {skill.level === 3 ? ':: CORE' : '// STD'}
                                       </span>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  );
               })}
           </div>

           {/* DESKTOP LAYOUT (>= md) - Tree Structure (Preserved) */}
           <div className="hidden md:block">
              {/* Central Line for Tree Layout */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-gray-800 to-transparent -translate-x-1/2" aria-hidden="true"></div>

              {/* Grid - Tree on desktop */}
              <div className="grid grid-cols-2 gap-x-32 gap-y-16">
                 {skillCategories.map((category, index) => (
                    <div 
                       key={index} 
                       className={`${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                       <SkillNode category={category} index={index} />
                    </div>
                 ))}
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Skills;
