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

// 3D Tilt Card Component for Skill Categories
const SkillNode = ({ category, index }) => {
   // Determine if the card is on the left side (even index) or right side (odd index) of the tree
   const isLeft = index % 2 === 0;

   // Connector positioning classes
   const lineClass = isLeft 
      ? "absolute top-1/2 -right-8 w-8 h-px bg-gray-800 hidden lg:block group-hover:bg-primary-500 transition-colors" 
      : "absolute top-1/2 -left-8 w-8 h-px bg-gray-800 hidden lg:block group-hover:bg-primary-500 transition-colors";
      
   const dotClass = isLeft
      ? "absolute top-1/2 -right-8 w-2 h-2 bg-gray-800 rounded-full translate-x-1/2 -translate-y-1/2 hidden lg:block group-hover:bg-primary-500 transition-colors"
      : "absolute top-1/2 -left-8 w-2 h-2 bg-gray-800 rounded-full -translate-x-1/2 -translate-y-1/2 hidden lg:block group-hover:bg-primary-500 transition-colors";

   return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative group perspective-1000"
      >
         {/* Connector Lines (Decoration) */}
         <div className={lineClass}></div>
         <div className={dotClass}></div>

         <div className="relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:-translate-y-1">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-primary-400 group-hover:text-white group-hover:bg-primary-500 transition-colors duration-300">
                     {category.icon}
                  </div>
                  <div className="text-left">
                     <h3 className="font-display font-bold text-lg text-white tracking-wide leading-none mb-1">{category.title}</h3>
                     <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">{category.id}_MODULE::V1.0</p>
                  </div>
               </div>
               <div className="hidden sm:block text-[10px] font-mono text-gray-600 px-2 py-1 border border-white/5 rounded">
                  Status: ACTIVE
               </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 relative z-10">
               {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-crosshair text-left">
                     <span className="text-gray-400 text-lg group-hover/skill:text-primary-400 transition-colors">
                        {skill.icon}
                     </span>
                     <span className="text-sm font-mono text-gray-300">
                        {skill.name}
                     </span>
                     
                     {/* Proficiency Bar (Fake) */}
                     <div className="ml-auto flex gap-0.5">
                        {[1,2,3].map(d => (
                           <div key={d} className={`w-1 h-3 rounded-full ${d <= (skill.level || 2) ? "bg-primary-500/50" : "bg-gray-800"}`}></div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </motion.div>
   );
};

// --- NEW ANIMATION COMPONENT: THE NEURAL PROCESSOR ---
const NeuralProcessor = () => {
   return (
      <div className="relative w-72 h-72 flex items-center justify-center">
         {/* 1. Orbiting Data Packet */}
         <div className="absolute w-64 h-64 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]">
            <div className="absolute -top-1 left-1/2 w-4 h-2 bg-primary-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
         </div>

         {/* 2. Reverse Orbit */}
         <div className="absolute w-48 h-48 rounded-full border border-dashed border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>

         {/* 3. Central Core (The Brain) */}
         <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="relative">
               <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full animate-pulse"></div>
               <FaBrain className="text-7xl text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            
               {/* Floating Icons (Satellites) */}
               <motion.div 
                  animate={{ y: [-5, 5, -5] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 p-2 bg-black/80 border border-white/20 rounded-lg"
               >
                  <FaCode className="text-cyan-400 text-lg" />
               </motion.div>
               
               <motion.div 
                   animate={{ y: [5, -5, 5] }} 
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-6 -left-8 p-2 bg-black/80 border border-white/20 rounded-lg"
               >
                   <FaServer className="text-purple-400 text-lg" />
               </motion.div>
               
               <motion.div 
                   animate={{ x: [-5, 5, -5] }} 
                   transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-1/2 -right-16 p-2 bg-black/80 border border-white/20 rounded-lg"
               >
                   <SiTensorflow className="text-orange-400 text-lg" />
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
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-24 pb-20 font-sans selection:bg-primary-500 selection:text-white">
      
      {/* 0. Background Grid (Ambient) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="section-container relative z-10">
        
        {/* 1. Header: System Diagnostic */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
           <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-500/30 bg-primary-500/10 rounded-full text-xs font-mono text-primary-400 mb-4">
                 <FaTerminal className="w-3 h-3" />
                 <span>RUNNING DIAGNOSTIC...</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
                 SYSTEM <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">CAPABILITIES</span>
              </h1>
              <p className="text-gray-400 max-w-xl text-lg">
                 Authorized personnel only. Below is a complete breakdown of the active neural modules and engineering protocols currently installed.
              </p>
           </div>

           {/* 2. The New Animated Neural Processor */}
           <div className="hidden md:block">
              <NeuralProcessor />
           </div>
        </div>

        {/* 3. Skills Grid (Tree Structure) */}
        <div className="relative">
           {/* Central Line for Tree Layout on Desktop */}
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-gray-800 to-transparent hidden lg:block -translate-x-1/2"></div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-16">
              {skillCategories.map((category, index) => (
                 <div key={index} className={index % 2 === 0 ? "lg:text-right" : "lg:text-left"}>
                    <SkillNode category={category} index={index} />
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
