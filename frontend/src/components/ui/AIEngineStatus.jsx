import { FaServer, FaMicrochip, FaBolt, FaCloud, FaCircle } from 'react-icons/fa';

const AIEngineStatus = ({ model, provider, latency }) => {
  return (
    <div className="bg-black border border-indigo-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(99,102,241,0.15)] relative overflow-hidden group">
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-indigo-500/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10">
         <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
               <FaServer className="text-indigo-500" />
               <h4 className="font-mono font-bold text-indigo-400 text-xs tracking-widest uppercase">AI_ENGINE_CORE</h4>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
               </span>
               <span className="text-[10px] font-bold font-mono text-indigo-300">ONLINE</span>
            </div>
         </div>

         <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-indigo-500/20 pb-2">
               <span className="text-gray-500">MODEL_TYPE</span>
               <span className="text-white font-bold flex items-center gap-2">
                  <FaMicrochip className="text-indigo-500" /> {model || 'LLAMA-3 (70B)'}
               </span>
            </div>
            <div className="flex justify-between items-center border-b border-indigo-500/20 pb-2">
               <span className="text-gray-500">PROVIDER_NET</span>
               <span className="text-white font-bold flex items-center gap-2">
                  <FaCloud className="text-indigo-500" /> {provider || 'GROQ_CLOUD'}
               </span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-gray-500">INFERENCE_LATENCY</span>
               <span className="text-indigo-400 font-bold flex items-center gap-2 animate-pulse">
                  <FaBolt /> {latency || '< 600ms'}
               </span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AIEngineStatus;
