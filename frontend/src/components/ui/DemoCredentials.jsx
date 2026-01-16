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
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      // User-requested styling: Dynamic Backgrounds, Borders, Spacing
      className="mb-6 p-6 rounded-2xl bg-white dark:bg-slate-800 backdrop-blur-sm bg-opacity-90 shadow-lg border border-gray-200 dark:border-slate-700"
    >
      <div className="flex items-center gap-2 mb-4">
        {/* Accent Color: Indigo */}
        <FaKey className="text-indigo-600 dark:text-indigo-400" />
        <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs">
          Demo Credentials
        </h4>
      </div>

      <div className="space-y-4">
        {credentials.map((cred, idx) => (
          <div key={idx} className="space-y-2">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {cred.role}
            </p>
            
            {/* Email Field */}
            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-slate-900/50 rounded-lg border border-gray-200 dark:border-slate-700">
              <code className="flex-1 font-mono text-sm text-gray-800 dark:text-gray-200 truncate">
                {cred.email}
              </code>
              <button
                onClick={() => copyToClipboard(cred.email, `${idx}-email`)}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-500 dark:text-gray-400"
                title="Copy email"
              >
                {copiedField === `${idx}-email` ? (
                  <FaCheck className="w-4 h-4 text-green-500" />
                ) : (
                  <FaCopy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Password Field */}
            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-slate-900/50 rounded-lg border border-gray-200 dark:border-slate-700">
              <code className="flex-1 font-mono text-sm text-gray-800 dark:text-gray-200 truncate">
                {cred.password}
              </code>
              <button
                onClick={() => copyToClipboard(cred.password, `${idx}-password`)}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-500 dark:text-gray-400"
                title="Copy password"
              >
                {copiedField === `${idx}-password` ? (
                  <FaCheck className="w-4 h-4 text-green-500" />
                ) : (
                  <FaCopy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[10px] text-gray-500 dark:text-gray-400 italic text-center">
        Use these details to access the live dashboard
      </p>
    </motion.div>
  );
};

export default DemoCredentials;
