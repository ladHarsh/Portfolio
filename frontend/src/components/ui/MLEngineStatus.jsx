import { FaBrain, FaVectorSquare, FaRulerCombined, FaMicrochip } from 'react-icons/fa';

const MLEngineStatus = () => {
  return (
    <div className="bg-black border border-pink-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(236,72,153,0.15)] relative overflow-hidden group">
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-pink-500/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10">
         <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
               <FaBrain className="text-pink-500" />
               <h4 className="font-mono font-bold text-pink-400 text-xs tracking-widest uppercase">ML_PREDICTOR_NODE</h4>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-pink-500/10 border border-pink-500/20 rounded">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
               </span>
               <span className="text-[10px] font-bold font-mono text-pink-300">ACTIVE</span>
            </div>
         </div>

         <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-pink-500/20 pb-2">
               <span className="text-gray-500">ALGORITHM</span>
               <span className="text-white font-bold flex items-center gap-2">
                  <FaMicrochip className="text-pink-500" /> COSINE_SIMILARITY
               </span>
            </div>
            <div className="flex justify-between items-center border-b border-pink-500/20 pb-2">
               <span className="text-gray-500">MATRIX_DIM</span>
               <span className="text-white font-bold flex items-center gap-2">
                  <FaRulerCombined className="text-pink-500" /> 4803 x 4803
               </span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-gray-500">VECTOR_SPACE</span>
               <span className="text-pink-400 font-bold flex items-center gap-2">
                  <FaVectorSquare /> 5,000 EMBEDDINGS
               </span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MLEngineStatus;
