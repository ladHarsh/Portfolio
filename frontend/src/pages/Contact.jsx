import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaSatellite, FaGlobeAmericas, FaPaperPlane } from "react-icons/fa";
import { contactApi } from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE"); // IDLE, SENDING, SUCCESS, ERROR
  const [logLines, setLogLines] = useState([
     "> ESTABLISHING SECURE CONNECTION...",
     "> ENCRYPTING DATA PACKETS...",
     "> AWAITING INPUT..."
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("SENDING");
    addToLog(`> UPLOADING PACKET FROM [${formData.email}]...`);

    try {
      await contactApi.submit(formData);
      setTimeout(() => {
         setStatus("SUCCESS");
         addToLog("> TRANSMISSION COMPLETE. ACKNOWLEDGEMENT RECEIVED.");
         setFormData({ name: "", email: "", message: "" });
      }, 1500);
    } catch (error) {
       setStatus("ERROR");
       addToLog("> FATAL ERROR: CONNECTION INTERRUPTED.");
    }
  };

  const addToLog = (line) => {
     setLogLines(prev => [...prev.slice(-4), line]);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden font-sans selection:bg-green-500 selection:text-black">
      
      {/* 0. Matrix Background - Reduced on mobile */}
      <div className="fixed inset-0 z-0 opacity-10 sm:opacity-20 pointer-events-none" aria-hidden="true">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] mix-blend-color-dodge bg-[length:100%_4px,6px_100%]"></div>
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start lg:items-center">
         
         {/* 1. LEFT: VISUALIZATION & INFO - Mobile optimized */}
         <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/20 border border-green-500/30 rounded text-green-400 font-mono text-[10px] sm:text-xs tracking-widest mb-4 sm:mb-6 animate-pulse">
                  <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                  SIGNAL_STRENGTH: 100%
               </div>
               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                  ESTABLISH <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">UPLINK</span>
               </h1>
               <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed">
                  Open frequency for collaboration, recruitment, or technical consultation. All transmissions are encrypted and prioritized.
               </p>
            </div>

            {/* Holographic Globe - Hidden on small mobile */}
            <div className="hidden sm:flex relative w-48 sm:w-64 h-48 sm:h-64 border border-green-500/20 rounded-full items-center justify-center bg-green-500/5 backdrop-blur-sm animate-[spin_60s_linear_infinite] mx-auto lg:mx-0" aria-hidden="true">
               <FaGlobeAmericas className="text-7xl sm:text-9xl text-green-500/20 animate-pulse" />
               <div className="absolute inset-0 border border-t-green-500/50 rounded-full animate-[spin_4s_linear_infinite]"></div>
               <FaSatellite className="absolute -top-4 sm:-top-6 right-8 sm:right-10 text-xl sm:text-2xl text-white animate-bounce" />
               
               <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black border border-green-500/50 text-[9px] sm:text-[10px] font-mono text-green-400">
                  LOC: INDIA
               </div>
            </div>

            {/* Social Frequencies - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
               {[
                  { icon: FaGithub, href: "https://github.com/ladHarsh", label: "GITHUB_REPO", shortLabel: "GITHUB" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/harsh-lad-dev", label: "LINKED_NET", shortLabel: "LINKEDIN" },
                  { icon: FaEnvelope, href: "mailto:harshlad.dev@gmail.com", label: "MAIL_Relay", shortLabel: "EMAIL" }
               ].map((social, i) => (
                  <a 
                     key={i}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-4 sm:px-6 py-3 border border-white/10 bg-white/5 hover:bg-green-500/20 active:bg-green-500/30 hover:border-green-500/50 hover:text-green-400 transition-all font-mono text-xs tracking-widest flex items-center justify-center gap-2 min-h-[48px] rounded-sm"
                     aria-label={social.label}
                  >
                     <social.icon size={16} aria-hidden="true" />
                     <span className="hidden sm:inline">{social.label}</span>
                     <span className="sm:hidden">{social.shortLabel}</span>
                  </a>
               ))}
            </div>
         </div>

         {/* 2. RIGHT: TERMINAL FORM - Mobile optimized */}
         <div className="relative order-1 lg:order-2">
            {/* Terminal Header - Mobile optimized */}
            <div className="bg-[#1e1e1e] border-t border-x border-gray-700 rounded-t-lg p-2 sm:p-3 flex items-center gap-2">
               <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" aria-hidden="true"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" aria-hidden="true"></div>
               </div>
               <div className="font-mono text-[10px] sm:text-xs text-gray-400 ml-1 sm:ml-2">secure_msg_protocol.exe</div>
            </div>

            {/* Terminal Body - Mobile optimized */}
            <div className="bg-black/80 backdrop-blur-xl border border-gray-700 rounded-b-lg p-4 sm:p-6 shadow-2xl relative overflow-hidden">
               
               {/* Scanline Effect - Reduced on mobile */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none opacity-5 sm:opacity-10" aria-hidden="true"></div>

               {/* Log Output - Mobile optimized */}
               <div className="mb-4 sm:mb-6 font-mono text-[10px] sm:text-xs text-green-500/70 space-y-1" role="log" aria-live="polite" aria-atomic="false">
                  {logLines.map((line, i) => (
                     <div key={i}>{line}</div>
                  ))}
               </div>

               <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 relative z-10">
                  {/* Name Input - Touch optimized */}
                  <div className="group">
                     <label htmlFor="contact-name" className="block font-mono text-[10px] sm:text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                        &gt; ENTER_IDENTITY
                     </label>
                     <input 
                        type="text" 
                        id="contact-name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-700 text-white font-mono py-2.5 sm:py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800 text-sm sm:text-base min-h-[44px] sm:min-h-0"
                        placeholder="Name or Alias..."
                        autoComplete="name"
                        required
                        aria-required="true"
                     />
                  </div>

                  {/* Email Input - Touch optimized */}
                  <div className="group">
                     <label htmlFor="contact-email" className="block font-mono text-[10px] sm:text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                        &gt; TARGET_RETURN_ADDRESS
                     </label>
                     <input 
                        type="email" 
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-700 text-white font-mono py-2.5 sm:py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800 text-sm sm:text-base min-h-[44px] sm:min-h-0"
                        placeholder="name@server.com..."
                        autoComplete="email"
                        required
                        aria-required="true"
                     />
                  </div>

                  {/* Message Textarea - Touch optimized */}
                  <div className="group">
                     <label htmlFor="contact-message" className="block font-mono text-[10px] sm:text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                        &gt; DATA_PAYLOAD
                     </label>
                     <textarea 
                        id="contact-message"
                        name="message" 
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-gray-700 text-white font-mono py-2.5 sm:py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800 resize-none text-sm sm:text-base"
                        placeholder="Enter message content..."
                        required
                        aria-required="true"
                     ></textarea>
                  </div>

                  {/* Submit Button - Touch optimized */}
                  <button 
                     type="submit" 
                     disabled={status === "SENDING" || status === "SUCCESS"}
                     className={`w-full py-4 border-2 border-green-500 text-green-500 font-mono font-bold tracking-widest hover:bg-green-500 active:bg-green-600 hover:text-black active:text-black transition-all flex items-center justify-center gap-3 relative overflow-hidden group min-h-[52px] rounded-sm ${status === "SUCCESS" ? "bg-green-500 text-black border-transparent" : ""} disabled:opacity-50 disabled:cursor-not-allowed`}
                     aria-live="polite"
                  >
                     {status === "SENDING" ? (
                        <span className="animate-pulse">TRANSMITTING...</span>
                     ) : status === "SUCCESS" ? (
                        <span>TRANSMISSION SENT</span>
                     ) : (
                        <>
                           <span className="hidden sm:inline">INITIATE_TRANSFER</span>
                           <span className="sm:hidden">SEND</span>
                           <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                        </>
                     )}
                  </button>
               </form>
            </div>
         </div>

      </div>
    </div>
  );
};

export default Contact;
