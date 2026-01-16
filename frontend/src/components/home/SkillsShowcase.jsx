import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVisualstudiocode,
  SiScikitlearn,
} from "react-icons/si";
import {
  FaJava,
  FaBrain,
  FaDatabase,
  FaServer,
  FaChartBar,
  FaLanguage,
} from "react-icons/fa";

const allSkills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#64748b" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "REST APIs", icon: FaServer, color: "#6366F1" },
  { name: "ML", icon: FaBrain, color: "#FF6F61" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "NLP", icon: FaLanguage, color: "#8B5CF6" },
  { name: "GitHub", icon: SiGithub, color: "#64748b" },
];

const SkillsShowcase = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-900">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-2 font-display">
            Technical Skills
          </h2>
          <p className="text-dark-500 dark:text-dark-400 text-sm">
            Technologies I use to build real-world applications
          </p>
        </motion.div>

        {/* Skills Grid - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3"
        >
          {allSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center p-3 bg-dark-50 dark:bg-dark-800 rounded-lg border border-dark-100 dark:border-dark-700 hover:border-dark-200 dark:hover:border-dark-600 hover:shadow-md transition-all duration-200"
              >
                <Icon
                  className="w-6 h-6 mb-1.5 transition-transform duration-200 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-[10px] font-medium text-dark-600 dark:text-dark-400 text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
