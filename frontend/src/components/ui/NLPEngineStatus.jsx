import { FaBook, FaCogs, FaClock } from 'react-icons/fa';

const NLPEngineStatus = () => {
  return (
    <div className="bg-black border border-emerald-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(16,185,129,0.15)] relative overflow-hidden group">
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-emerald-500/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10">
         <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
               <FaBook className="text-emerald-500" />
               <h4 className="font-mono font-bold text-emerald-400 text-xs tracking-widest uppercase">NLP_PROCESSOR</h4>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
               <span className="text-[10px] font-bold font-mono text-emerald-300">ONLINE</span>
            </div>
         </div>

         <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-emerald-500/20 pb-2">
               <span className="text-gray-500">PIPELINE</span>
               <span className="text-white font-bold flex items-center gap-2">
                  <FaCogs className="text-emerald-500" /> TF-IDF / COSINE
               </span>
            </div>
            <div className="flex justify-between items-center border-b border-emerald-500/20 pb-2">
               <span className="text-gray-500">CORPUS_SIZE</span>
               <span className="text-white font-bold flex items-center gap-2">
                  <FaBook className="text-emerald-500" /> ~10K TERMS
               </span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-gray-500">THROUGHPUT</span>
               <span className="text-emerald-400 font-bold flex items-center gap-2">
                  <FaClock /> &lt; 2s / DOC
               </span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default NLPEngineStatus;
