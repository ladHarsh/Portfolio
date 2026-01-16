import { motion } from "framer-motion";
import { HiCode, HiServer, HiDatabase, HiLightningBolt } from "react-icons/hi";

const expertiseData = [
  {
    id: 1,
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible, and high-performance user interfaces with a strong focus on clean design systems and user experience.",
    icon: HiCode,
    technologies: ["React", "Tailwind CSS", "JavaScript", "UI Architecture"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Backend & API Development",
    description:
      "Designing scalable backend services and RESTful APIs with secure authentication and clean system architecture.",
    icon: HiServer,
    technologies: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Databases & System Design",
    description:
      "Structuring reliable data models and storage solutions optimized for performance, scalability, and maintainability.",
    icon: HiDatabase,
    technologies: ["MongoDB", "MySQL", "Database Design", "Data Modeling"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description:
      "Developing practical machine learning and NLP solutions focused on real-world data analysis and intelligent automation.",
    icon: HiLightningBolt,
    technologies: ["Python", "Scikit-learn", "Data Analysis", "NLP"],
    gradient: "from-orange-500 to-amber-500",
  },
];

const ExpertiseCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className="relative h-full bg-white dark:bg-dark-800 rounded-2xl p-6 lg:p-8 border border-dark-100 dark:border-dark-700 transition-all duration-300 hover:border-dark-200 dark:hover:border-dark-600 hover:shadow-xl hover:shadow-dark-900/5 dark:hover:shadow-black/20 hover:-translate-y-1">
        {/* Subtle gradient glow on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}
        />

        {/* Icon */}
        <motion.div
          className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <item.icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="relative text-lg font-semibold text-dark-900 dark:text-white mb-3 group-hover:text-dark-800 dark:group-hover:text-white transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="relative text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-5">
          {item.description}
        </p>

        {/* Technologies */}
        <div className="relative flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-dark-50 dark:bg-dark-700/50 text-dark-600 dark:text-dark-300 rounded-lg border border-dark-100 dark:border-dark-600/50 transition-colors group-hover:border-dark-200 dark:group-hover:border-dark-500/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExpertiseSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-dark-50 to-white dark:from-dark-900 dark:to-dark-800/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full"
          >
            What I Do
          </motion.span>

          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4 font-display">
            Professional Expertise
          </h2>

          <p className="text-dark-500 dark:text-dark-400 max-w-lg mx-auto">
            Key technical areas where I build production-ready solutions.
          </p>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
