import { motion } from "framer-motion";
import { 
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3, FaDocker, 
  FaGitAlt, FaGithub, FaDatabase, FaBrain, FaServer, FaCode, FaLaptopCode,
  FaCheckCircle, FaStar, FaTools, FaCloud
} from "react-icons/fa";
import { 
  SiNumpy, SiPandas, SiScikitlearn, SiMongodb, SiMysql, SiExpress, 
  SiTailwindcss, SiPostman, SiVisualstudiocode, SiTensorflow, SiNextdotjs, SiTypescript
} from "react-icons/si";

const Skills = () => {
  // 1. High-Level Competencies (The "Why")
  const competencies = [
    {
      title: "AI & ML Foundation",
      icon: <FaBrain />,
      desc: "Experience in data preprocessing, model training, and integrating predictive AI capabilities into backend systems.",
      color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Full-Stack Development",
      icon: <FaLaptopCode />,
      desc: "Building data-driven web applications using the MERN stack (MongoDB, Express, React, Node) with secure REST APIs.",
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Core CS Concepts",
      icon: <FaCode />,
      desc: "Strong grasp of Data Structures (DSA), Object-Oriented Programming (OOP), and Computer Networks.",
      color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30",
      border: "hover:border-emerald-500/50"
    }
  ];

  // 2. The Toolbelt (The "What")
  const skillCategories = [
    {
      id: "ai",
      title: "AI & Data Science",
      description: "Python-based ecosystem for data analysis and machine learning.",
      icon: <FaBrain className="text-purple-500" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
        { name: "Pandas", icon: <SiPandas className="text-[#150458] dark:text-white" /> },
        { name: "NumPy", icon: <SiNumpy className="text-[#013243] dark:text-blue-300" /> },
        { name: "Matplotlib", icon: <FaStar className="text-yellow-500" /> },
        { name: "Data Preprocessing", icon: <FaDatabase className="text-gray-500" /> }
      ]
    },
    {
      id: "web",
      title: "Web & Backend",
      description: "Modern stack for scalable application development.",
      icon: <FaLaptopCode className="text-blue-500" />,
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Tailwind / CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> }
      ]
    },
    {
      id: "languages",
      title: "Programming",
      description: "Core languages and foundational problem-solving tools.",
      icon: <FaCode className="text-emerald-500" />,
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "DSA", icon: <FaCloud className="text-gray-600 dark:text-gray-300" /> },
        { name: "OOP", icon: <FaTools className="text-orange-500" /> },
        { name: "REST APIs", icon: <FaServer className="text-blue-400" /> }
      ]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      description: "Version control, IDEs, and deployment infrastructure.",
      icon: <FaTools className="text-orange-500" />,
      skills: [
        { name: "Git / GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
        { name: "IntelliJ IDEA", icon: <FaJava className="text-purple-600" /> }, // Representing IntelliJ which is often used for Java
        { name: "Render", icon: <FaCloud className="text-black dark:text-white" /> }
      ]
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-dark-900 min-h-screen relative overflow-hidden pt-24 pb-20">
      
      {/* BACKGROUND BLOBS (Matches Home.jsx) */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* 1. HERO HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary-200 dark:border-primary-800 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
             <FaTools className="text-sm" /> Technical Arsenal
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-900 dark:text-white mb-6 leading-tight">
            Aspiring AI Engineer with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              Foundation in Excellence
            </span>
          </h1>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto leading-relaxed">
            I combine a strong background in Machine Learning and Python with solid knowledge of DSA and Object-Oriented Programming to build practical, data-driven solutions.
          </p>
        </motion.div>

        {/* 2. COMPETENCY CARDS (Matches Home.jsx style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {competencies.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               viewport={{ once: true }}
               whileHover={{ y: -5 }}
               className={`p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-dark-100 dark:border-dark-700 hover:shadow-xl transition-all duration-300 ${item.border}`}
             >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
             </motion.div>
          ))}
        </div>

        {/* 3. SKILL ECOSYSTEM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {skillCategories.map((category, index) => (
             <motion.div
               key={category.id}
               initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-xl border border-white/20 dark:border-dark-700 p-8 rounded-3xl shadow-lg"
             >
               <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-white dark:bg-dark-900 rounded-lg shadow-sm text-xl border border-dark-100 dark:border-dark-700">
                    {category.icon}
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-dark-500 dark:text-dark-400 font-medium tracking-wide">
                      {category.description}
                    </p>
                 </div>
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                 {category.skills.map((skill, idx) => (
                   <div 
                    key={idx} 
                    className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-900 rounded-xl border border-dark-100 dark:border-dark-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:shadow-md transition-all duration-300 cursor-default"
                   >
                      <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-semibold text-dark-700 dark:text-dark-300 text-center">
                        {skill.name}
                      </span>
                   </div>
                 ))}
               </div>
             </motion.div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
