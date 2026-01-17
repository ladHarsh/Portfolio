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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-black border border-yellow-500/30 rounded-xl p-6 relative overflow-hidden group"
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
  );
};

export default DemoCredentials;
