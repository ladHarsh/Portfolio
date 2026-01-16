import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";
import SectionHeader from "../components/ui/SectionHeader";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { contactApi } from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type === "error") {
      setStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await contactApi.submit(formData);
      setStatus({ type: "success", message: response.message });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const message = error.response?.data?.message || "Failed to send message. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "harshlad.dev@gmail.com",
      href: "mailto:harshlad.dev@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Vadodara, Gujarat, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/ladHarsh",
      color: "hover:bg-gray-800 hover:text-white"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/harsh-lad-dev",
      color: "hover:bg-blue-600 hover:text-white"
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen flex flex-col justify-center bg-white dark:bg-dark-900">
      <section className="section-container section-padding">
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Context & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-900 dark:text-white mb-6 leading-tight">
                Let's start a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                  conversation.
                </span>
              </h1>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-10 leading-relaxed max-w-md">
                Interested in collaborating on an AI project or have a full-time opportunity? I'm ready to discuss how my skills can bring value to your team.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center group">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-dark-800 flex items-center justify-center mr-5 group-hover:scale-110 group-hover:bg-primary-100 dark:group-hover:bg-dark-700 transition-all duration-300 shadow-sm">
                      <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-dark-400 dark:text-dark-500 mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a href={info.href} className="text-lg font-medium text-dark-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-dark-900 dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

               <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 rounded-full bg-dark-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 border border-dark-100 dark:border-dark-700 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
            </motion.div>

            {/* Right Column: The Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative elements behind form */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>

              <div className="card p-8 md:p-10 relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name 
                          ? '-top-2.5 bg-white dark:bg-dark-800 px-2 text-xs text-primary-500 font-medium' 
                          : 'top-3.5 text-dark-400'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-transparent border border-dark-200 dark:border-dark-600 rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all dark:text-white"
                      disabled={loading}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                     <label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email 
                          ? '-top-2.5 bg-white dark:bg-dark-800 px-2 text-xs text-primary-500 font-medium' 
                          : 'top-3.5 text-dark-400'
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-transparent border border-dark-200 dark:border-dark-600 rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all dark:text-white"
                      disabled={loading}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                     <label 
                      htmlFor="message" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 bg-white dark:bg-dark-800 px-2 text-xs text-primary-500 font-medium' 
                          : 'top-3.5 text-dark-400'
                      }`}
                    >
                      Tell me about your project...
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-4 py-3.5 bg-transparent border border-dark-200 dark:border-dark-600 rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all resize-none dark:text-white"
                      disabled={loading}
                    />
                  </div>

                  {/* Status Message */}
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`p-3 rounded-lg text-sm flex items-center ${
                        status.type === "success"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {status.type === "success" && <FaCheck className="mr-2" />}
                      {status.message}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg hover:shadow-primary-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <LoadingSpinner size="sm" />
                    ) : (
                      <>
                        Send Message 
                        <FaPaperPlane className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
