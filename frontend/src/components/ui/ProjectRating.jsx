import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

const ProjectRating = ({ projectSlug }) => {
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [log, setLog] = useState("");

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating_${projectSlug}`);
    if (storedRating) {
      setRating(parseInt(storedRating));
      setHasRated(true);
      setLog("PREVIOUS_AUDIT_FOUND");
    }
  }, [projectSlug]);

  const handleRating = (value) => {
    if (hasRated) return;
    setRating(value);
    setHasRated(true);
    setLog(`AUDIT_SUBMITTED::SCORE_[${value}/5]`);
    localStorage.setItem(`rating_${projectSlug}`, value.toString());
  };

  return (
    <div className="bg-black rounded-xl p-6 border border-white/10 relative overflow-hidden group">
       {/* Background Scan */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] opacity-10 pointer-events-none"></div>

       <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
             <div>
                <h4 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest mb-1">
                   <FaTerminal className="text-cyan-500" /> SYSTEM_AUDIT
                </h4>
                <p className="text-[10px] font-mono text-gray-500">{log || "WAITING_FOR_INPUT..."}</p>
             </div>
             
             {hasRated && (
                <div className="px-2 py-0.5 bg-green-900/30 text-green-400 border border-green-500/30 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
                   LOGGED
                </div>
             )}
          </div>

          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => handleRating(score)}
                disabled={hasRated}
                className={`
                   h-8 flex-1 rounded-sm border border-white/10 transition-all duration-300 relative overflow-hidden group/btn
                   ${score <= rating 
                     ? "bg-cyan-500/20 border-cyan-500/50" 
                     : "bg-white/5 hover:bg-white/10 hover:border-white/30"
                   }
                `}
              >
                 {score <= rating && (
                    <motion.div 
                       initial={{ height: 0 }} 
                       animate={{ height: "100%" }} 
                       className="absolute bottom-0 left-0 w-full bg-cyan-500 opacity-50"
                    ></motion.div>
                 )}
                 <span className={`relative z-10 text-xs font-mono font-bold ${score <= rating ? "text-cyan-400" : "text-gray-600"}`}>
                    {score}
                 </span>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-white/5 pt-3">
             <span className="text-[10px] text-gray-500 font-mono">PROTOCOL: USER_FEEDBACK_V1</span>
             <span className="text-[10px] text-gray-500 font-mono">{hasRated ? "ACCESS_LOCKED" : "ACCESS_OPEN"}</span>
          </div>
       </div>
    </div>
  );
};

export default ProjectRating;
