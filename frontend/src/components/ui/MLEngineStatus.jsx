import { FaBrain, FaVectorSquare, FaRulerCombined, FaMicrochip } from 'react-icons/fa';

const MLEngineStatus = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-800 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaBrain className="text-pink-500 text-sm" />
          <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">
            ML Engine
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
            <FaMicrochip className="text-pink-400" />
            Cosine Similarity
          </span>
        </div>

        {/* 2. Matrix Size */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-slate-800 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Matrix
          </span>
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
            <FaRulerCombined className="text-pink-400" />
            4803 x 4803
          </span>
        </div>

        {/* 3. Features Highlight */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-pink-50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800/30 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-300">
            Features
          </span>
          <span className="text-xs font-bold text-pink-700 dark:text-pink-300 flex items-center gap-1.5">
             <FaVectorSquare className="text-pink-500" /> 5,000 Vectors
          </span>
        </div>
      </div>
    </div>
  );
};

export default MLEngineStatus;
