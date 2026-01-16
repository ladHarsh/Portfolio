import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTerminal,
  FaUserSecret,
  FaUniversity,
  FaCodeBranch,
  FaHistory,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaCircle,
  FaNetworkWired,
  FaCogs,
  FaLightbulb,
  FaRocket,
  FaBrain,
  FaServer,
  FaDatabase
} from "react-icons/fa";

const About = () => {
  // Mock Terminal Typing Effect
  const [terminalText, setTerminalText] = useState("");
  const fullText = `> Loading AI Identity Protocol...
> Subject: Harsh Lad
> Primary Function: AI Engineer & Intelligent System Architect
> Core Capabilities: Deep Learning, NLP, Computer Vision
> Objective: Engineering the next generation of cognitive software.
> Status: Model Converged. Ready for Inference.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const valueProps = [
    {
      icon: <FaBrain />,
      title: "Model Architecture & Design",
      desc: "Specializing in designing and fine-tuning Deep Neural Networks. I build custom architectures (Transformers, CNNs) tailored to solve complex, domain-specific problems."
    },
    {
      icon: <FaServer />,
      title: "Scalable AI Deployment",
      desc: "Bridging the gap between research and reality. I engineer robust MLOps pipelines to deploy, monitor, and scale AI models in production environments."
    },
    {
      icon: <FaDatabase />,
      title: "Data-Centric Engineering",
      desc: "Believing that better data beats better algorithms. I architect sophisticated data preprocessing and augmentation pipelines to ensure high-fidelity model performance."
    }
  ];

  const education = [
    {
      epoch: "2022-2026",
      title: "B.Tech in Computer Science",
      org: "KPGU, Vadodara",
      metrics: "CGPA: 8.77 / 10",
      desc: "Specialized in AI/ML & Advanced Software Engineering. Active in technical leadership.",
      status: "Final Year"
    },
    {
      epoch: "2019-2022",
      title: "Higher Secondary (Science)",
      org: "AB School, Navsari",
      metrics: "HSC: 75% | SSC: 92%",
      desc: "Built rigorous analytical foundation in Mathematics & Physics.",
      status: "Completed"
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-dark-900 min-h-screen relative overflow-hidden pt-24 pb-20 font-sans">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="section-container relative z-10 max-w-6xl mx-auto">
        
        {/* 1. HEADER: The "Identity Dossier" */}
        <div className="flex flex-col lg:flex-row gap-10 mb-20 items-stretch">
          
          {/* LEFT: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex flex-col"
          >
             <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-1 shadow-2xl border border-dark-100 dark:border-dark-700 overflow-hidden h-full">
                {/* Scanner Animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-[scan_3s_ease-in-out_infinite] z-20"></div>
                
                <div className="relative bg-gray-50 dark:bg-dark-900 p-8 rounded-xl text-center h-full flex flex-col items-center justify-center">
                   <div className="w-36 h-36 mx-auto mb-6 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500 animate-spin-slow"></div>
                      <img src="/1767449525085.jpg" alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white dark:border-dark-800 relative z-10" />
                      <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white dark:border-dark-800 rounded-full z-20 animate-pulse"></div>
                   </div>
                   
                   <h2 className="text-3xl font-display font-bold text-dark-900 dark:text-white mb-2">Harsh Lad</h2>
                   <p className="text-sm font-mono text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full mb-6">
                     AI_ARCHITECT :: DEEP_LEARNING
                   </p>
                   
                   <div className="w-full grid grid-cols-2 gap-3 text-left text-xs font-mono text-dark-500 dark:text-dark-400">
                     <div className="bg-white dark:bg-dark-800 p-3 rounded border border-dark-100 dark:border-dark-700">
                       <span className="block opacity-70 uppercase tracking-widest text-[10px] mb-1">Base</span>
                       <span className="font-bold text-dark-800 dark:text-white">Vadodara, IN</span>
                     </div>
                     <div className="bg-white dark:bg-dark-800 p-3 rounded border border-dark-100 dark:border-dark-700">
                       <span className="block opacity-70 uppercase tracking-widest text-[10px] mb-1">Status</span>
                       <span className="font-bold text-green-600 dark:text-green-400">Training...</span>
                     </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: The "Impact Analysis" */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
              
              {/* TERMINAL BLOCK */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-dark-900 rounded-xl overflow-hidden shadow-2xl border border-dark-700 font-mono text-sm h-full max-h-[200px]"
              >
                <div className="bg-dark-800 px-4 py-2 flex items-center gap-2 border-b border-dark-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-dark-400">neural_init.sh</span>
                </div>
                <div className="p-6 text-green-400 whitespace-pre-line leading-relaxed">
                  {terminalText}
                  <span className="animate-pulse">_</span>
                </div>
              </motion.div>

              {/* MISSION STATEMENT CARD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-dark-100 dark:border-dark-700 flex-1 flex flex-col justify-center"
              >
                 <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-3">
                   <FaUserSecret className="text-primary-500" /> Cognitive Engineering
                 </h3>
                 <div className="text-dark-600 dark:text-dark-300 leading-relaxed space-y-4">
                    <p>
                      I am an <strong>Artificial Intelligence Engineer</strong> focused on designing intelligent systems that learn, adapt, and scale. My passion lies in demystifying deep learning models and engineering them into robust, user-centric applications.
                    </p>
                    <p>
                      From <strong>Fine-Tuning LLMs</strong> to architecting <strong>Computer Vision pipelines</strong>, I possess the specialized skillset to transform raw data into predictive power. I don't just use AI APIs; I understand the mathematics and architecture that power them.
                    </p>
                 </div>
              </motion.div>
          </div>
        </div>

        {/* 2. INDUSTRY VALUE MODULES */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-display text-dark-900 dark:text-white">AI-First Capability</h2>
            <p className="text-dark-500 mt-2">Engineering the future with Data, Algorithms, and Scale.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-dark-100 dark:border-dark-700 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-2xl text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. EDUCATION: The Foundation */}
        <div className="mb-20 max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-8">
               <h3 className="text-2xl font-bold font-display text-dark-900 dark:text-white uppercase tracking-wider">
                 Technical Foundation
               </h3>
               <div className="h-px bg-dark-200 dark:bg-dark-700 flex-1"></div>
             </div>

             <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 bg-white dark:bg-dark-800 p-6 md:p-8 rounded-2xl border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="min-w-[140px] flex flex-col justify-center">
                       <span className="text-3xl font-bold text-primary-200 dark:text-primary-900/50 font-display">
                         {item.epoch.split('-')[0]}
                       </span>
                       <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                         {item.status}
                       </span>
                    </div>
                    
                    <div className="flex-1 border-l border-dark-100 dark:border-dark-700 pl-6 md:pl-8">
                       <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                         {item.title}
                       </h4>
                       <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-dark-500 mb-4">
                          <span className="flex items-center gap-1"><FaUniversity /> {item.org}</span>
                          <span className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded"><FaCodeBranch size={10} /> {item.metrics}</span>
                       </div>
                       <p className="text-dark-600 dark:text-dark-300 text-sm">
                         {item.desc}
                       </p>
                    </div>
                  </motion.div>
                ))}
             </div>
        </div>

        {/* 4. FINAL CTA */}
        <div className="bg-dark-900 text-white rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Invest in a Scalable Future</h2>
               <p className="text-dark-300 mb-8 text-lg">
                 I am currently available for full-time roles where I can apply my skills in AI, Backend Engineering, and Product Development to deliver measurable results.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="mailto:harshlad.dev@gmail.com" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-lg">
                    <FaEnvelope /> Hire Me
                  </a>
                  <a href="https://linkedin.com/in/harsh-lad-dev" target="_blank" className="px-8 py-4 rounded-xl bg-transparent border border-dark-600 hover:bg-dark-800 hover:border-dark-500 transition-all font-bold flex items-center justify-center gap-2">
                    <FaLinkedin /> View Professional Profile
                  </a>
               </div>
            </div>
        </div>

      </div>
      
      {/* GLOBAL KEYFRAMES FOR SCANNER */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};
export default About;
