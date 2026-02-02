import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaSatellite, FaGlobeAmericas, FaPaperPlane, FaCircle } from "react-icons/fa";
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
      const response = await contactApi.submit(formData);
      
      setStatus("SUCCESS");
      addToLog("> TRANSMISSION COMPLETE. ACKNOWLEDGEMENT RECEIVED.");
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-reset form state after 3 seconds
      setTimeout(() => {
        setStatus("IDLE");
        addToLog("> READY FOR NEW TRANSMISSION.");
      }, 3000);
    } catch (error) {
      setStatus("ERROR");
      const errorMessage = error.response?.data?.message || "CONNECTION INTERRUPTED";
      addToLog(`> FATAL ERROR: ${errorMessage.toUpperCase()}`);
    }
  };

  const addToLog = (line) => {
     setLogLines(prev => [...prev.slice(-4), line]);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 0. Data Mesh Background - Very subtle */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" aria-hidden="true">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start lg:items-center">
         
         {/* 1. LEFT: VISUALIZATION & INFO - Mobile optimized */}
         <div className="space-y-8 sm:space-y-12 order-1 lg:order-1">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-900/20 border border-emerald-500/30 rounded text-emerald-400 font-mono text-[10px] sm:text-xs tracking-widest mb-4 sm:mb-6 animate-pulse">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true"></span>
                  SIGNAL_STRENGTH: 100%
               </div>
               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                  LET'S <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">CONNECT</span>
               </h1>
               <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed">
                  Open frequency for collaboration, recruitment, or technical consultation. All transmissions are encrypted and prioritized.
               </p>
            </div>

            {/* Holographic Globe - Hidden on small mobile */}
            <div className="hidden sm:flex relative w-48 sm:w-64 h-48 sm:h-64 border border-cyan-500/20 rounded-full items-center justify-center bg-cyan-500/5 backdrop-blur-sm animate-[spin_60s_linear_infinite] mx-auto lg:mx-0" aria-hidden="true">
               <FaGlobeAmericas className="text-7xl sm:text-9xl text-cyan-500/20 animate-pulse" />
               <div className="absolute inset-0 border border-t-cyan-500/50 rounded-full animate-[spin_4s_linear_infinite]"></div>
               <FaSatellite className="absolute -top-4 sm:-top-6 right-8 sm:right-10 text-xl sm:text-2xl text-white animate-bounce" />
               
               <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black border border-cyan-500/50 text-[9px] sm:text-[10px] font-mono text-cyan-400">
                  LOC: INDIA
               </div>
            </div>

            {/* OLD Social Buttons - DESKTOP ONLY (Hidden on mobile, shown on desktop) */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4">
               {[
                  { icon: FaGithub, href: "https://github.com/ladHarsh", label: "GITHUB", shortLabel: "GITHUB" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/harsh-lad-dev", label: "LINKEDIN", shortLabel: "LINKEDIN" },
                  { icon: FaEnvelope, href: "mailto:harshlad.dev@gmail.com", label: "EMAIL", shortLabel: "EMAIL" }
               ].map((social, i) => (
                  <a 
                     key={i}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-4 sm:px-6 py-3 border border-white/10 bg-white/5 hover:bg-cyan-500/20 active:bg-cyan-500/30 hover:border-cyan-500/50 hover:text-cyan-400 transition-all font-mono text-xs tracking-widest flex items-center justify-center gap-2 min-h-[48px] rounded-sm"
                     aria-label={social.label}
                  >
                     <social.icon size={16} aria-hidden="true" />
                     <span className="hidden sm:inline">{social.label}</span>
                     <span className="sm:hidden">{social.shortLabel}</span>
                  </a>
               ))}
            </div>
         </div>

         {/* 1.5 DATA PORTS - Mobile order-3 (after form), Desktop hidden */}
         <div className="block md:hidden order-3">
            {/* Divider & Label */}
            <div className="flex items-center gap-4 mb-6">
               <div className="flex-1 h-px bg-gray-800"></div>
               <span className="text-[10px] text-gray-600 font-mono tracking-widest">// ALTERNATIVE_FREQUENCIES</span>
               <div className="flex-1 h-px bg-gray-800"></div>
            </div>

            {/* Server Rack - Data Ports */}
            <div className="rounded-lg overflow-hidden border border-gray-800 divide-y divide-gray-800">
               {/* GitHub Port */}
               <a
                  href="https://github.com/ladHarsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between h-14 px-4 bg-black border-none hover:border-cyan-500/50 hover:bg-white/5 transition-all group"
                  aria-label="GitHub Repository"
               >
                  <div className="flex items-center gap-3">
                     <FaGithub className="text-white text-lg" />
                     <span className="font-mono text-xs text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">:: GITHUB</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-mono text-gray-600">[ ONLINE ]</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
                  </div>
               </a>

               {/* LinkedIn Port */}
               <a
                  href="https://linkedin.com/in/harsh-lad-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between h-14 px-4 bg-black border-none hover:border-cyan-500/50 hover:bg-white/5 transition-all group"
                  aria-label="LinkedIn Professional Network"
               >
                  <div className="flex items-center gap-3">
                     <FaLinkedin className="text-white text-lg" />
                     <span className="font-mono text-xs text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">:: LINKEDIN</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-mono text-gray-600">[ ONLINE ]</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
                  </div>
               </a>

               {/* Email Port */}
               <a
                  href="mailto:harshlad.dev@gmail.com"
                  className="flex items-center justify-between h-14 px-4 bg-black border-none hover:border-cyan-500/50 hover:bg-white/5 transition-all group"
                  aria-label="Direct Email"
               >
                  <div className="flex items-center gap-3">
                     <FaEnvelope className="text-white text-lg" />
                     <span className="font-mono text-xs text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">:: EMAIL</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-mono text-gray-600">[ ONLINE ]</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
                  </div>
               </a>
            </div>
         </div>

         {/* 2. RIGHT: SECURE CHANNEL FORM - Mobile optimized */}
         <div className="relative order-2 lg:order-2">
            
            {/* MOBILE LAYOUT (< md) - Holographic Entry System */}
            <div className="block md:hidden">
               {/* Network Status Bar */}
               <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-t-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                     <span className="font-mono text-xs text-emerald-400 tracking-wider">LINK_ESTABLISHED</span>
                  </div>
                  <span className="font-mono text-[9px] text-gray-500">LATENCY: 12ms</span>
               </div>

               {/* Form Container */}
               <div className="bg-black/80 backdrop-blur-xl border-x border-b border-white/10 rounded-b-lg p-6 shadow-2xl relative overflow-hidden">
                  
                  {/* Subtle Background Texture */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-30" aria-hidden="true"></div>

                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                     
                     {/* Name Input - Holographic Data Slot */}
                     <div className="relative group">
                        {/* Line Number */}
                        <div className="absolute -left-6 top-3 text-gray-700 font-mono text-xs">01</div>
                        
                        {/* Label - Top Right */}
                        <div className="flex justify-end mb-2">
                           <span className="text-[10px] font-mono text-cyan-500/80 tracking-widest">// YOUR NAME</span>
                        </div>
                        
                        {/* Input Container with Bottom Border + Corner Bracket */}
                        <div className="relative border-b-2 border-gray-800 group-focus-within:border-cyan-500 transition-colors duration-300">
                           <input 
                              type="text" 
                              id="contact-name"
                              name="name" 
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-transparent text-white font-sans text-lg py-3 focus:outline-none placeholder-gray-600 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs"
                              placeholder="Enter your name"
                              autoComplete="name"
                              required
                              aria-required="true"
                           />
                           {/* Corner Bracket */}
                           <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                        </div>
                     </div>

                     {/* Email Input - Holographic Data Slot */}
                     <div className="relative group">
                        {/* Line Number */}
                        <div className="absolute -left-6 top-3 text-gray-700 font-mono text-xs">02</div>
                        
                        {/* Label - Top Right */}
                        <div className="flex justify-end mb-2">
                           <span className="text-[10px] font-mono text-cyan-500/80 tracking-widest">// YOUR EMAIL</span>
                        </div>
                        
                        {/* Input Container with Bottom Border + Corner Bracket */}
                        <div className="relative border-b-2 border-gray-800 group-focus-within:border-cyan-500 transition-colors duration-300">
                           <input 
                              type="email" 
                              id="contact-email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-transparent text-white font-sans text-lg py-3 focus:outline-none placeholder-gray-600 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs"
                              placeholder="your.email@domain.com"
                              autoComplete="email"
                              required
                              aria-required="true"
                           />
                           {/* Corner Bracket */}
                           <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                        </div>
                     </div>

                     {/* Message Textarea - Holographic Data Slot */}
                     <div className="relative group">
                        {/* Line Number */}
                        <div className="absolute -left-6 top-3 text-gray-700 font-mono text-xs">03</div>
                        
                        {/* Label - Top Right */}
                        <div className="flex justify-end mb-2">
                           <span className="text-[10px] font-mono text-cyan-500/80 tracking-widest">// YOUR MESSAGE</span>
                        </div>
                        
                        {/* Textarea Container with Bottom Border + Corner Bracket */}
                        <div className="relative border-b-2 border-gray-800 group-focus-within:border-cyan-500 transition-colors duration-300">
                           <textarea 
                              id="contact-message"
                              name="message" 
                              rows="4"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full bg-transparent text-white font-sans text-lg py-3 focus:outline-none placeholder-gray-600 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs resize-none"
                              placeholder="Enter your message"
                              required
                              aria-required="true"
                           ></textarea>
                           {/* Corner Bracket */}
                           <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                        </div>
                     </div>

                     {/* Transmit Button - Physical Launch Key */}
                     <button 
                        type="submit" 
                        disabled={status === "SENDING" || status === "SUCCESS"}
                        className={`
                           w-full py-5 font-mono font-bold tracking-widest text-sm
                           relative overflow-hidden group min-h-[60px] rounded-sm
                           transition-all
                           ${status === "SUCCESS" 
                              ? "bg-emerald-500 text-black shadow-[0_4px_20px_-5px_rgba(16,185,129,0.8)]" 
                              : "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white hover:from-cyan-500 hover:to-cyan-400 active:scale-[0.98] shadow-[0_4px_20px_-5px_rgba(6,182,212,0.6)]"
                           }
                           disabled:opacity-50 disabled:cursor-not-allowed
                        `}
                        aria-live="polite"
                     >
                        {/* Carbon Fiber Pattern Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%)] bg-[length:10px_10px] pointer-events-none"></div>
                        
                        <span className={`relative z-10 ${status === "SENDING" || status === "SUCCESS" ? '' : 'animate-pulse'}`}>
                           {status === "SENDING" ? (
                              <span>TRANSMITTING...</span>
                           ) : status === "SUCCESS" ? (
                              <span>TRANSMISSION_COMPLETE</span>
                           ) : (
                              "SEND MESSAGE"
                           )}
                        </span>
                     </button>
                  </form>
               </div>
            </div>

            {/* DESKTOP LAYOUT (>= md) - Preserved Original */}
            <div className="hidden md:block">
               {/* Terminal Header */}
               <div className="bg-[#1e1e1e] border-t border-x border-gray-700 rounded-t-lg p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true"></div>
                  </div>
                  <div className="font-mono text-xs text-gray-400 ml-2">secure_msg_protocol.exe</div>
               </div>

               {/* Terminal Body */}
               <div className="bg-black/80 backdrop-blur-xl border border-gray-700 rounded-b-lg p-6 shadow-2xl relative overflow-hidden">
                  
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none opacity-10" aria-hidden="true"></div>

                  {/* Log Output */}
                  <div className="mb-6 font-mono text-xs text-green-500/70 space-y-1" role="log" aria-live="polite" aria-atomic="false">
                     {logLines.map((line, i) => (
                        <div key={i}>{line}</div>
                     ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                     {/* Name Input */}
                     <div className="group">
                        <label htmlFor="contact-name-desktop" className="block font-mono text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                           &gt; YOUR NAME
                        </label>
                        <input 
                           type="text" 
                           id="contact-name-desktop"
                           name="name" 
                           value={formData.name}
                           onChange={handleChange}
                           className="w-full bg-transparent border-b-2 border-gray-700 text-white font-mono py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800 text-base"
                           placeholder="Name or Alias..."
                           autoComplete="name"
                           required
                           aria-required="true"
                        />
                     </div>

                     {/* Email Input */}
                     <div className="group">
                        <label htmlFor="contact-email-desktop" className="block font-mono text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                           &gt; YOUR EMAIL
                        </label>
                        <input 
                           type="email" 
                           id="contact-email-desktop"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           className="w-full bg-transparent border-b-2 border-gray-700 text-white font-mono py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800 text-base"
                           placeholder="name@server.com..."
                           autoComplete="email"
                           required
                           aria-required="true"
                        />
                     </div>

                     {/* Message Textarea */}
                     <div className="group">
                        <label htmlFor="contact-message-desktop" className="block font-mono text-xs text-green-500 mb-2 group-focus-within:text-white transition-colors">
                           &gt; YOUR MESSAGE
                        </label>
                        <textarea 
                           id="contact-message-desktop"
                           name="message" 
                           rows="4"
                           value={formData.message}
                           onChange={handleChange}
                           className="w-full bg-transparent border-b-2 border-gray-700 text-white font-mono py-2 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-800 resize-none text-base"
                           placeholder="Enter message content..."
                           required
                           aria-required="true"
                        ></textarea>
                     </div>

                     {/* Submit Button */}
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
                              <span>SEND MESSAGE</span>
                              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                           </>
                        )}
                     </button>
                  </form>
               </div>
            </div>

         </div>

      </div>
    </div>
  );
};

export default Contact;
