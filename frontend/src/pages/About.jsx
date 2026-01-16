import { motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaTools,
  FaCloud,
  FaLaptopCode,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: FaBrain,
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Data Preprocessing",
        "Model Training",
      ],
    },
    {
      title: "Web & Backend",
      icon: FaServer,
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "HTML/CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Languages & Core",
      icon: FaCode,
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "DSA",
        "OOP",
        "REST APIs",
      ],
    },
    {
      title: "Tools & Cloud",
      icon: FaCloud,
      skills: [
        "Git & GitHub",
        "Docker",
        "Render",
        "Postman",
        "VS Code",
        "MongoDB",
        "MySQL",
      ],
    },
  ];

  const education = [
    {
      type: "education",
      title: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      organization: "Drs. Kiran & Pallavi Patel Global University (KPGU), Vadodara",
      period: "2022 – 2026",
      description: "CGPA: 8.77/10. Specializing in AI/ML and detailed software engineering principles.",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="section-container section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="heading-primary mb-6">About Me</h1>
            <p className="text-body text-lg leading-relaxed max-w-2xl mx-auto">
              An aspiring AI Engineer with a strong foundation in Machine Learning and Python, backed by solid knowledge of DSA, OOP, and web application development.
            </p>
          </motion.div>

          {/* Profile Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card p-8 mb-16"
          >
            <h2 className="heading-secondary mb-6">Profile</h2>
            <div className="space-y-4 text-body text-lg">
              <p>
                I am an aspiring AI Engineer with hands-on experience working on data-driven and AI-assisted applications. My journey involves a deep dive into data preprocessing, model training, and integrating intelligent capabilities into backend systems.
              </p>
              <p>
                With a strong technical foundation in <strong>Python, React.js, and Node.js</strong>, I bridge the gap between complex machine learning models and user-friendly web interfaces. I am passionate about building practical AI-based solutions that solve real-world problems.
              </p>
              <p>
                Soft skills include strong problem-solving abilities, effective communication, and teamwork. I am fluent in English, Hindi, and Gujarati.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="mb-16">
            <SectionHeader
              title="Technical Skills"
              subtitle="My toolkit for building intelligent solutions"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 border-t-4 border-primary-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                      <category.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="font-semibold text-dark-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <SectionHeader
              title="Education"
              subtitle="My academic background"
            />
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 border-l-4 border-primary-500 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaGraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-semibold text-dark-900 dark:text-white text-lg">
                          {item.title}
                        </h3>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-bold px-3 py-1 bg-primary-50 dark:bg-primary-900/20 rounded-full mt-2 sm:mt-0 w-fit">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-dark-700 dark:text-dark-300 font-medium mb-1">
                        {item.organization}
                      </p>
                      <p className="text-body text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card p-8 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-dark-800 text-center"
          >
            <h2 className="heading-secondary mb-6">Let's Connect</h2>
            <p className="text-body mb-8 max-w-xl mx-auto">
              I am currently based in <strong>Vadodara, Gujarat, India</strong> and open to new opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:harshlad.dev@gmail.com" 
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-700 rounded-xl shadow-sm border border-dark-100 dark:border-dark-600 hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
                <span className="font-medium text-dark-700 dark:text-dark-200 group-hover:text-primary-600 dark:group-hover:text-primary-400">Email</span>
              </a>
              <a 
                href="https://linkedin.com/in/harsh-lad-dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-700 rounded-xl shadow-sm border border-dark-100 dark:border-dark-600 hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium text-dark-700 dark:text-dark-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">LinkedIn</span>
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;
