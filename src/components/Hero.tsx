import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            DevOps Engineer & <span className="text-blue-600 dark:text-blue-400">Cloud Specialist</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I specialize in designing resilient, scalable infrastructure and automating deployment pipelines
            with a focus on security, efficiency, and reliability.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-200 shadow-sm hover:shadow"
            >
              View Projects
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="flex items-center text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200 group"
              aria-label="Resume"
            >
              <ExternalLink size={20} className="mr-1" />
              <span className="text-sm font-medium group-hover:underline">Resume</span>
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
            <img
              src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
              className="absolute inset-2 rounded-full object-cover border-4 border-white dark:border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;