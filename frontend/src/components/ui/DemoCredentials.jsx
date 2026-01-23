import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaKey, FaCopy, FaCheck } from 'react-icons/fa';

const DemoCredentials = ({ credentials }) => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!credentials || credentials.length === 0) return null;

  return (
    <>
      {/* MOBILE: Phantom Keycard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="block md:hidden bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 relative overflow-hidden"
      >
        <div className="relative z-10">
           {/* Header */}
           <h4 className="text-xs font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">ACCESS_TOKENS</h4>

           {/* Copy Slots */}
           <div className="space-y-0">
              {credentials.map((cred, idx) => (
                 <div key={idx} className="space-y-3">
                    {/* Email Row */}
                    <div className="flex items-center justify-between py-3">
                       <div className="flex-1 flex items-center gap-3">
                          <span className="text-[10px] font-mono text-gray-600 uppercase w-8">USR</span>
                          <code className="text-sm font-sans text-white truncate">{cred.email}</code>
                       </div>
                       <button
                          onClick={() => copyToClipboard(cred.email, `${idx}-email`)}
                          className="ml-3 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                       >
                          {copiedField === `${idx}-email` ? 
                             <FaCheck className="text-sm text-green-500" /> : 
                             <FaCopy className="text-sm" />
                          }
                       </button>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/5"></div>

                    {/* Password Row */}
                    <div className="flex items-center justify-between py-3">
                       <div className="flex-1 flex items-center gap-3">
                          <span className="text-[10px] font-mono text-gray-600 uppercase w-8">PWD</span>
                          <code className="text-sm font-sans text-white truncate">{cred.password}</code>
                       </div>
                       <button
                          onClick={() => copyToClipboard(cred.password, `${idx}-password`)}
                          className="ml-3 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                       >
                          {copiedField === `${idx}-password` ? 
                             <FaCheck className="text-sm text-green-500" /> : 
                             <FaCopy className="text-sm" />
                          }
                       </button>
                    </div>

                    {idx < credentials.length - 1 && <div className="border-t border-white/10 my-3"></div>}
                 </div>
              ))}
           </div>
        </div>
      </motion.div>

      {/* DESKTOP: Original Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="hidden md:block bg-black border border-yellow-500/30 rounded-xl p-6 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="relative z-10">
           <div className="flex items-center gap-2 mb-6">
              <FaKey className="text-yellow-500" />
              <h4 className="font-mono font-bold text-yellow-500 text-xs tracking-widest uppercase">SECURE_ACCESS_KEYS</h4>
           </div>

           <div className="space-y-4">
              {credentials.map((cred, idx) => (
                 <div key={idx} className="space-y-2">
                    <p className="text-[10px] font-mono text-gray-500 uppercase">{cred.role}</p>
                    
                    {/* Email */}
                    <div 
                       onClick={() => copyToClipboard(cred.email, `${idx}-email`)}
                       className="flex items-center justify-between p-2 bg-white/5 border border-white/10 rounded cursor-pointer hover:border-yellow-500/50 hover:bg-white/10 transition-all group/field"
                    >
                       <code className="text-xs font-mono text-gray-300 truncate">{cred.email}</code>
                       {copiedField === `${idx}-email` ? <FaCheck className="text-green-500 text-xs" /> : <FaCopy className="text-gray-600 group-hover/field:text-yellow-500 text-xs transition-colors" />}
                    </div>

                    {/* Password */}
                    <div 
                       onClick={() => copyToClipboard(cred.password, `${idx}-password`)}
                       className="flex items-center justify-between p-2 bg-white/5 border border-white/10 rounded cursor-pointer hover:border-yellow-500/50 hover:bg-white/10 transition-all group/field"
                    >
                       <code className="text-xs font-mono text-gray-300 truncate">{cred.password}</code>
                       {copiedField === `${idx}-password` ? <FaCheck className="text-green-500 text-xs" /> : <FaCopy className="text-gray-600 group-hover/field:text-yellow-500 text-xs transition-colors" />}
                    </div>
                 </div>
              ))}
           </div>
           
           <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <p className="text-[10px] font-mono text-gray-600 uppercase">CAUTION: FOR AUTHORIZED TESTING ONLY</p>
           </div>
        </div>
      </motion.div>
    </>
  );
};

export default DemoCredentials;
