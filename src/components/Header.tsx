import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Code, Server, Send, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  // Handle dark mode
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle scroll events and outside clicks for mobile menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'pipeline', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Close mobile menu when clicking or touching outside
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (mobileMenuOpen) {
        const target = e.target as HTMLElement;

        // Check if the click/touch is on the menu button or inside the menu content
        const isMenuButton = menuButtonRef.current && (menuButtonRef.current.contains(target) || target.closest('[aria-label="Toggle menu"]'));
        const isMenuContent = menuContentRef.current && (menuContentRef.current.contains(target) || target.closest('.mobile-menu-content'));

        if (!isMenuButton && !isMenuContent) {
          // Small delay to ensure any link clicks are processed first
          setTimeout(() => {
            setMobileMenuOpen(false);
          }, 50);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchend', handleOutsideClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchend', handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  const navItems = [
    { name: 'About', icon: <Terminal size={16} />, href: '#about' },
    { name: 'Skills', icon: <Code size={16} />, href: '#skills' },
    { name: 'Pipeline', icon: <Server size={16} />, href: '#pipeline' },
    { name: 'Contact', icon: <Send size={16} />, href: '#contact' }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md dark:shadow-slate-800/30' 
          : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#about" className="group flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-3 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                G
              </div>
              <div>
                <span className="font-bold text-xl text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  Gireesh
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  DevOps Engineer
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-1 flex items-center mr-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeSection === item.name.toLowerCase()
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode 
                  ? 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-800/40'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              ref={menuButtonRef}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              onMouseDown={(e) => e.preventDefault()}
              className={`p-3 rounded-lg shadow-sm transition-all duration-200 select-none outline-none ${
                mobileMenuOpen
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              aria-label="Toggle menu"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-800/30 transition-all duration-300 animate-fadeIn">
          <div ref={menuContentRef} className="px-4 py-6 space-y-3 mobile-menu-content">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center py-4 px-5 rounded-xl text-base font-medium transition-all duration-200 transform active:bg-blue-50 dark:active:bg-blue-900/10 ${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-600 dark:text-blue-400 shadow-sm scale-102'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-blue-400 hover:scale-102'
                }`}
                onClick={(e) => {
                  // Prevent default to ensure the click handler completes before navigation
                  e.preventDefault();

                  // Navigate to the href after a small delay
                  setTimeout(() => {
                    window.location.href = item.href;
                    setMobileMenuOpen(false);
                  }, 150);
                }}
                onTouchStart={() => {}} // Empty handler to activate mobile tap highlight
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {item.icon}
                </div>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
