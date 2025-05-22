import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code, Server, Terminal, Cloud } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      name: 'GitHub', 
      href: 'https://github.com/immrdg',
      color: 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
    },
    { 
      icon: <Linkedin size={20} />, 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/immrdg',
      color: 'bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/40'
    },
    { 
      icon: <Twitter size={20} />, 
      name: 'Twitter', 
      href: 'https://twitter.com/',
      color: 'bg-sky-100 dark:bg-sky-900/30 hover:bg-sky-200 dark:hover:bg-sky-800/40'
    },
    { 
      icon: <Mail size={20} />, 
      name: 'Email', 
      href: 'mailto:d.gireesh21@gmail.com',
      color: 'bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-800/40'
    }
  ];

  const resources = [
    { 
      name: 'Resume', 
      href: './Resume-Dg.pdf',
      icon: <ExternalLink size={16} className="mr-2" />
    },
    { 
      name: 'Blog', 
      href: 'https://immrdg.hashnode.dev/',
      icon: <Code size={16} className="mr-2" />
    },
    { 
      name: 'Certifications', 
      href: '#',
      icon: <Terminal size={16} className="mr-2" />
    },
    { 
      name: 'GitHub Repositories', 
      href: 'https://github.com/immrdg/',
      icon: <Github size={16} className="mr-2" />
    },
  ];

  const navItems = ['About', 'Skills', 'Pipeline', 'Contact'];

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-3 shadow-md">
                G
              </div>
              <div>
                <span className="font-bold text-xl sm:text-2xl text-slate-800 dark:text-white">
                  Gireesh
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  DevOps Engineer & Cloud Specialist
                </span>
              </div>
            </div>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Building resilient, scalable infrastructure and streamlining deployment pipelines for modern applications with a focus on security, efficiency, and reliability.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-2.5 sm:p-2 rounded-lg text-slate-700 dark:text-slate-300 ${link.color} transition-all duration-300 transform hover:-translate-y-1`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation and Resources in a grid for mobile */}
          <div className="col-span-1 md:col-span-7 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-7">
            {/* Navigation */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-wider uppercase mb-3 sm:mb-4 flex items-center">
                <Server size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                Navigation
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mr-2 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-1 md:col-span-4">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-wider uppercase mb-3 sm:mb-4 flex items-center">
                <Cloud size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                Resources
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1 sm:mb-2 text-sm">Get in Touch</h4>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-400 mb-2 sm:mb-3">Have a project in mind? Let's discuss how I can help.</p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail size={14} className="mr-1.5 sm:mr-2" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 sm:mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Desineni Gireesh. All rights reserved.
          </p>
          <div className="flex items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <span>Made with</span>
            <span className="text-red-500 mx-1">❤</span>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
