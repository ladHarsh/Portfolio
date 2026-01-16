import { motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader";
import { 
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3, FaDocker, 
  FaGitAlt, FaGithub, FaDatabase, FaBrain, FaServer, FaCode, FaLaptopCode,
  FaCheckCircle, FaStar
} from "react-icons/fa";
import { 
  SiNumpy, SiPandas, SiScikitlearn, SiMongodb, SiMysql, SiExpress, 
  SiTailwindcss, SiPostman, SiVisualstudiocode, SiTensorflow 
} from "react-icons/si";

const Skills = () => {
  // Top-tier skills to highlight prominently
  const spotlightSkills = [
    {
      name: "Artificial Intelligence",
      icon: <FaBrain className="w-8 h-8 text-purple-500" />,
      level: "Focus Area",
      desc: "Building intelligence into apps using Python, Scikit-learn, and NLP.",
      color: "border-purple-200 dark:border-purple-900/50 bg-purple-50 dark:bg-purple-900/10"
    },
    {
      name: "Full Stack Dev",
      icon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
      level: "Proficient",
      desc: "End-to-end web apps with React, Node.js, and MongoDB (MERN).",
      color: "border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/10"
    },
    {
      name: "Python Ecosystem",
      icon: <FaPython className="w-8 h-8 text-yellow-500" />,
      level: "Advanced",
      desc: "Data analysis, scripting, and backend development excellence.",
      color: "border-yellow-200 dark:border-yellow-900/50 bg-yellow-50 dark:bg-yellow-900/10"
    },
  ];

  const skillGroups = [
    {
      title: "Frontend & UI",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "HTML5/CSS3", icon: <span className="flex gap-1"><FaHtml5 className="text-orange-500"/><FaCss3 className="text-blue-500"/></span> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
        { name: "Bootstrap", icon: null },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-dark-500 dark:text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "RESTful APIs", icon: <FaServer className="text-indigo-400" /> },
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas", icon: <SiPandas className="text-purple-600" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-500" /> },
        { name: "Matplotlib", icon: null },
        { name: "Data Preprocessing", icon: <FaDatabase className="text-gray-400"/> },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub className="text-dark-900 dark:text-white" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
        { name: "Agile/Scrum", icon: <FaCheckCircle className="text-teal-500" /> },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white dark:bg-dark-900">
      <section className="section-container section-padding">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-primary mb-6">Technical Arsenal</h1>
            <p className="text-xl text-dark-600 dark:text-dark-300">
              A curated set of technologies I leverage to build scalable, intelligent, and user-centric solutions.
            </p>
          </motion.div>
        </div>

        {/* 1. Spotlight Section - The "Hook" for recruiters */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-8 flex items-center">
            <FaStar className="text-yellow-400 mr-3" /> Key Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spotlightSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border ${skill.color} hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white dark:bg-dark-800 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/50 dark:bg-dark-800/50 rounded-full text-dark-700 dark:text-dark-200 border border-dark-100 dark:border-dark-700">
                    {skill.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Detailed Ecosystem - The "Proof" */}
        <div className="mb-16">
           <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-10 flex items-center">
            <FaCode className="text-primary-500 mr-3" /> Comprehensive Skill Set
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {skillGroups.map((group, groupIdx) => (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1 }}
              >
                <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100 mb-6 border-b border-dark-100 dark:border-dark-800 pb-2">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-800/50 hover:bg-white dark:hover:bg-dark-800 hover:shadow-md transition-all border border-transparent hover:border-dark-100 dark:hover:border-dark-700"
                    >
                      <div className="min-w-[2rem] w-auto flex-shrink-0 text-xl flex justify-center text-dark-500 dark:text-dark-400">
                        {skill.icon || <FaCheckCircle className="w-4 h-4 text-primary-300" />}
                      </div>
                      <span className="font-medium text-dark-700 dark:text-dark-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Skills;
