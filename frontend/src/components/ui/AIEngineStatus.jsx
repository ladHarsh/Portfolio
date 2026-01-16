import { FaServer, FaMicrochip, FaBolt, FaCloud } from 'react-icons/fa';

const AIEngineStatus = ({ model, provider, latency }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-800 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaServer className="text-indigo-500 text-sm" />
          <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">
            AI Engine
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
        {/* 1. Model Info */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-slate-800 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Model
          </span>
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
            <FaMicrochip className="text-indigo-400" />
            {model || 'Llama-3 (70B)'}
          </span>
        </div>

        {/* 2. Provider Info */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-slate-800 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Provider
          </span>
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
            <FaCloud className="text-sky-400" />
            {provider || 'Groq Cloud'}
          </span>
        </div>

        {/* 3. Latency - Highlighted */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
            Latency
          </span>
          <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
             <FaBolt className="text-indigo-500" /> {latency || '< 0.6s'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIEngineStatus;
