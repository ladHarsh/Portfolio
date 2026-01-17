import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
       {/* Rotating Cyber Ring */}
       <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-t-2 border-l-2 border-primary-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-b-2 border-r-2 border-purple-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
       </div>
       
       {/* Terminal Text */}
       <div className="flex items-center gap-2 font-mono text-xs text-primary-400 font-bold uppercase tracking-widest">
          <FaTerminal className="animate-pulse" />
          <span>INITIALIZING_SYSTEM...</span>
       </div>
    </div>
  );
};

export default LoadingSpinner;
