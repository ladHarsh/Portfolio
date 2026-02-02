import { FaServer, FaMicrochip, FaBolt, FaCloud, FaCircle } from 'react-icons/fa';

const AIEngineStatus = ({ model, provider, latency }) => {
  return (
    <>
      {/* MOBILE: Reactor Core */}
      <div className="block md:hidden bg-black border border-indigo-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(99,102,241,0.15)] relative overflow-hidden">
        {/* Radial Glow Background */}
        <div className="absolute inset-0 bg-indigo-500/10 blur-3xl opacity-50"></div>
        
        <div className="relative z-10">
          {/* The Core - Centered Pulsing Icon */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              {/* Pulsing Rings */}
              <div className="absolute inset-0 animate-ping">
                <FaMicrochip className="text-6xl text-indigo-500/30" />
              </div>
              {/* Core Icon */}
              <FaMicrochip className="text-6xl text-indigo-500 animate-pulse relative z-10" />
            </div>
            <h4 className="font-mono font-bold text-indigo-400 text-xs tracking-widest uppercase">AI PERFORMANCE METRICS</h4>
          </div>

          {/* Orbit Stats - 3 Column Grid */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-indigo-500/5 border border-indigo-500/20 rounded p-2">
              <div className="text-[9px] text-indigo-400 font-mono mb-1">MODEL</div>
              <div className="text-[10px] text-white font-bold font-mono">{model || 'LLAMA-3'}</div>
            </div>
            <div className="bg-indigo-500/5 border border-indigo-500/20 rounded p-2">
              <div className="text-[9px] text-indigo-400 font-mono mb-1">LATENCY</div>
              <div className="text-[10px] text-indigo-400 font-bold font-mono animate-pulse">{latency || '<600ms'}</div>
            </div>
            <div className="bg-indigo-500/5 border border-indigo-500/20 rounded p-2">
              <div className="text-[9px] text-indigo-400 font-mono mb-1">PROVIDER</div>
              <div className="text-[10px] text-white font-bold font-mono">{provider || 'GROQ'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP: Original Layout */}
      <div className="hidden md:block bg-black border border-indigo-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(99,102,241,0.15)] relative overflow-hidden group">
        {/* Background Pulse */}
        <div className="absolute inset-0 bg-indigo-500/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="relative z-10">
           <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                 <FaServer className="text-indigo-500" />
                 <h4 className="font-mono font-bold text-indigo-400 text-xs tracking-widest uppercase">AI PERFORMANCE METRICS</h4>
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
                 <span className="text-gray-500">MODEL</span>
                 <span className="text-white font-bold flex items-center gap-2">
                    <FaMicrochip className="text-indigo-500" /> {model || 'LLAMA-3 (70B)'}
                 </span>
              </div>
              <div className="flex justify-between items-center border-b border-indigo-500/20 pb-2">
                 <span className="text-gray-500">PROVIDER</span>
                 <span className="text-white font-bold flex items-center gap-2">
                    <FaCloud className="text-indigo-500" /> {provider || 'GROQ_CLOUD'}
                 </span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-gray-500">LATENCY</span>
                 <span className="text-indigo-400 font-bold flex items-center gap-2 animate-pulse">
                    <FaBolt /> {latency || '< 600ms'}
                 </span>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default AIEngineStatus;
