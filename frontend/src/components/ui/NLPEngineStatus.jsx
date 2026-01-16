import { FaBook, FaCogs, FaClock, FaCheckCircle, FaMicrochip } from 'react-icons/fa';

const NLPEngineStatus = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-800 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaBook className="text-emerald-500 text-sm" />
          <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">
            NLP Engine
          </h4>
        </div>
        
        {/* Online Badge */}
        <div className="flex items-center gap-1.5 bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-full border border-green-100 dark:border-green-800/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
              Online
            </span>
        </div>
      </div>

      <div className="space-y-3">
        {/* 1. Algorithm */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-slate-800 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Algorithm
          </span>
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
            <FaCogs className="text-emerald-400" />
            TF-IDF + Cosine
          </span>
        </div>

        {/* 2. Dictionary */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-slate-800 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Dictionary
          </span>
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
            <FaBook className="text-emerald-400" />
            ~10k Terms
          </span>
        </div>

        {/* 3. Processing Speed - Highlighted */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
            Processing
          </span>
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
             <FaClock className="text-emerald-500" /> &lt; 2s/Resume
          </span>
        </div>
      </div>
    </div>
  );
};

export default NLPEngineStatus;
