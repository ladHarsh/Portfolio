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
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden font-sans selection:bg-green-500 selection:text-black">
      
      {/* 0. Matrix Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] mix-blend-color-dodge bg-[length:100%_4px,6px_100%]"></div>
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
         
         {/* 1. LEFT: VISUALIZATION & INFO */}
         <div className="space-y-12">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-500/30 rounded text-green-400 font-mono text-xs tracking-widest mb-6 animate-pulse">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  SIGNAL_STRENGTH: 100%
               </div>
               <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                  ESTABLISH <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">UPLINK</span>
               </h1>
               <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  Open frequency for collaboration, recruitment, or technical consultation. All transmissions are encrypted and prioritized.
               </p>
            </div>

            {/* Holographic Globe Placeholder */}
            <div className="relative w-64 h-64 border border-green-500/20 rounded-full flex items-center justify-center bg-green-500/5 backdrop-blur-sm animate-[spin_60s_linear_infinite]">
               <FaGlobeAmericas className="text-9xl text-green-500/20 animate-pulse" />
               <div className="absolute inset-0 border border-t-green-500/50 rounded-full animate-[spin_4s_linear_infinite]"></div>
               <FaSatellite className="absolute -top-6 right-10 text-2xl text-white animate-bounce" />
               
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black border border-green-500/50 text-[10px] font-mono text-green-400">
                  LOC: INDIA
               </div>
            </div>

            {/* Social Frequencies */}
            <div className="flex gap-4">
               {[
                  { icon: FaGithub, href: "https://github.com/ladHarsh", label: "GITHUB_REPO" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/harsh-lad-dev", label: "LINKED_NET" },
                  { icon: FaEnvelope, href: "mailto:harshlad.dev@gmail.com", label: "MAIL_Relay" }
               ].map((social, i) => (
                  <a 
                     key={i}
                     href={social.href}
                     target="_blank" 
                     className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400 transition-all font-mono text-xs tracking-widest flex items-center gap-2"
                  >
                     <social.icon size={16} />
                     {social.label}
                  </a>
               ))}
            </div>
         </div>

         {/* 2. RIGHT: TERMINAL FORM */}
         <div className="relative">
            {/* Terminal Header */}
            <div className="bg-[#1e1e1e] border-t border-x border-gray-700 rounded-t-lg p-3 flex items-center gap-2">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="font-mono text-xs text-gray-400 ml-2">secure_msg_protocol.exe</div>
            </div>

            {/* Terminal Body */}
            <div className="bg-black/80 backdrop-blur-xl border border-gray-700 rounded-b-lg p-6 shadow-2xl relative overflow-hidden">
               
               {/* Scanline Effect */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none opacity-10"></div>

               {/* Log Output */}
               <div className="mb-6 font-mono text-xs text-green-500/70 space-y-1">
                  {logLines.map((line, i) => (
                     <div key={i}>{line}</div>
                  ))}
               </div>

               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="group">
                     <label className="block font-mono text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                        &gt; ENTER_IDENTITY
                     </label>
                     <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 text-white font-mono py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800"
                        placeholder="Name or Alias..."
                        autoComplete="off"
                     />
                  </div>

                  <div className="group">
                     <label className="block font-mono text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                        &gt; TARGET_RETURN_ADDRESS
                     </label>
                     <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 text-white font-mono py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800"
                        placeholder="name@server.com..."
                        autoComplete="off"
                     />
                  </div>

                  <div className="group">
                     <label className="block font-mono text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                        &gt; DATA_PAYLOAD
                     </label>
                     <textarea 
                        name="message" 
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 text-white font-mono py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800 resize-none"
                        placeholder="Enter message content..."
                     ></textarea>
                  </div>

                  <button 
                     type="submit" 
                     disabled={status === "SENDING" || status === "SUCCESS"}
                     className={`w-full py-4 border border-green-500 text-green-500 font-mono font-bold tracking-widest hover:bg-green-500 hover:text-black transition-all flex items-center justify-center gap-3 relative overflow-hidden group ${status === "SUCCESS" ? "bg-green-500 text-black border-transparent" : ""}`}
                  >
                     {status === "SENDING" ? (
                        <span className="animate-pulse">TRANSMITTING...</span>
                     ) : status === "SUCCESS" ? (
                        <span>TRANSMISSION SENT</span>
                     ) : (
                        <>
                           INITIATE_TRANSFER <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
