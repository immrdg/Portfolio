import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ExternalLink, Terminal, Server, Cloud, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const roles = ["DevOps Engineer", "Cloud Specialist", "Infrastructure Architect", "Automation Expert"];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing the next word
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="inline-block px-4 py-1 mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 font-medium text-sm">
            <span className="animate-pulse">✨</span> Welcome to my portfolio
          </div>

          <h4 className="text-xl mb-2">Hi, I'm <span className="text-red-800 dark:text-blue-400 font-semibold">Desineni Gireesh</span></h4>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            I'm a <span ref={typingRef} className="text-blue-600 dark:text-blue-400"></span><span className="animate-blink">|</span>
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              I'm a passionate DevOps Engineer with 3+ years of experience building and optimizing CI/CD pipelines,
              cloud infrastructure, and containerized applications. I specialize in designing resilient, scalable 
              infrastructure and automating deployment workflows with a focus on security and efficiency.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get in Touch
            </a>
            <a
              href="./Resume-Dg.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center"
            >
              <ExternalLink size={18} className="mr-2" />
              View Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex space-x-4">
              <a
                href="https://github.com/immrdg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/immrdg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            {/* Floating icons around the profile image - positioned relative to container size */}
            <div className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center animate-float z-10">
              <Terminal size={20} className="sm:text-[24px] text-blue-600 dark:text-blue-400" />
            </div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center animate-float animation-delay-2000 z-10">
              <Server size={20} className="sm:text-[24px] text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center animate-float animation-delay-1000 z-10">
              <Cloud size={20} className="sm:text-[24px] text-purple-600 dark:text-purple-400" />
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center animate-float animation-delay-3000 z-10">
              <Shield size={20} className="sm:text-[24px] text-green-600 dark:text-green-400" />
            </div>

            {/* Profile image with enhanced styling - responsive sizing */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-xl p-1 animate-pulse-slow">
              <img
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
