import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-16 ${centered ? "text-center" : "text-left"}`}
    >
      <div className={`inline-flex items-center gap-3 mb-4 ${centered ? "mx-auto" : ""}`}>
         <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
         <span className="h-px w-12 bg-gradient-to-r from-primary-500/50 to-transparent"></span>
         <span className="font-mono text-xs text-primary-400 tracking-[0.3em] uppercase">SYSTEM_SECTION</span>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{title}</span>
      </h2>
      
      {subtitle && (
        <p className={`text-gray-400 text-lg leading-relaxed max-w-2xl font-light ${centered ? "mx-auto" : ""}`}>
          <span className="text-primary-500 font-mono text-xs mr-2">{">"}</span>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
