import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/harshlad",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/harshlad",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:harsh@example.com",
    },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-dark-50 dark:bg-dark-800 border-t border-dark-100 dark:border-dark-700">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">
                  H
                </span>
              </div>
              <span className="font-display font-semibold text-xl text-dark-900 dark:text-white">
                Harsh Lad
              </span>
            </Link>
            <p className="text-body text-sm max-w-xs">
              Full Stack Developer specializing in building exceptional web
              applications and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-body text-sm mt-4">
              Open to opportunities and collaborations.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-dark-200 dark:border-dark-700">
          <p className="text-center text-sm text-dark-500 dark:text-dark-400">
            © {currentYear} Harsh Lad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
