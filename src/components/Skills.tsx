import React, { useState, useEffect, useRef } from 'react';
import { 
  SiDocker, SiKubernetes, SiJenkins, SiGithubactions,
  SiTerraform, SiAmazonwebservices as SiAmazonaws, SiAnsible,
  SiPrometheus, SiGrafana, SiPython,SiGnubash as SiBash,
  SiSonarqube, SiMongodb
} from 'react-icons/si';
import { VscAzure as SiMicrosoftazure } from "react-icons/vsc";
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
  color?: string;
}

// Enhanced skills array with actual tool logos and colors
const skills: Skill[] = [
  { name: 'Docker', level: 90, category: 'Containerization', icon: <SiDocker size={20} />, color: 'from-blue-500 to-blue-600' },
  { name: 'Kubernetes', level: 85, category: 'Orchestization', icon: <SiKubernetes size={20} />, color: 'from-blue-400 to-blue-500' },
  { name: 'Jenkins', level: 80, category: 'CI/CD', icon: <SiJenkins size={20} />, color: 'from-indigo-500 to-indigo-600' },
  { name: 'GitHub Actions', level: 85, category: 'CI/CD', icon: <SiGithubactions size={20} />, color: 'from-indigo-400 to-indigo-500' },
  { name: 'Terraform', level: 75, category: 'IaC', icon: <SiTerraform size={20} />, color: 'from-purple-500 to-purple-600' },
  { name: 'AWS', level: 85, category: 'Cloud', icon: <SiAmazonaws size={20} />, color: 'from-orange-500 to-orange-600' },
  { name: 'Azure', level: 80, category: 'Cloud', icon: <SiMicrosoftazure size={20} />, color: 'from-orange-400 to-orange-500' },
  { name: 'Ansible', level: 75, category: 'Configuration Management', icon: <SiAnsible size={20} />, color: 'from-red-500 to-red-600' },
  { name: 'Prometheus', level: 70, category: 'Monitoring', icon: <SiPrometheus size={20} />, color: 'from-green-500 to-green-600' },
  { name: 'Grafana', level: 75, category: 'Monitoring', icon: <SiGrafana size={20} />, color: 'from-green-400 to-green-500' },
  { name: 'Python', level: 80, category: 'Programming', icon: <SiPython size={20} />, color: 'from-yellow-500 to-yellow-600' },
  { name: 'Bash', level: 85, category: 'Programming', icon: <SiBash size={20} />, color: 'from-yellow-400 to-yellow-500' },
  { name: 'SonarQube', level: 75, category: 'Security', icon: <SiSonarqube size={20} />, color: 'from-red-500 to-red-600' },
  { name: 'MongoDB', level: 70, category: 'Data', icon: <SiMongodb size={20} />, color: 'from-cyan-500 to-cyan-600' },
];

// Category icons mapping with actual tool logos
const categoryIcons: Record<string, React.ReactNode> = {
  'Containerization': <SiDocker size={24} className="text-blue-500" />,
  'Orchestization': <SiKubernetes size={24} className="text-blue-500" />,
  'CI/CD': <SiJenkins size={24} className="text-indigo-500" />,
  'IaC': <SiTerraform size={24} className="text-purple-500" />,
  'Cloud': <SiAmazonaws size={24} className="text-orange-500" />,
  'Configuration Management': <SiAnsible size={24} className="text-red-500" />,
  'Monitoring': <SiPrometheus size={24} className="text-green-500" />,
  'Programming': <SiPython size={24} className="text-yellow-500" />,
  'Security': <SiSonarqube size={24} className="text-red-500" />,
  'Data': <SiMongodb size={24} className="text-cyan-500" />,
};

const categories = Array.from(new Set(skills.map((skill) => skill.category)));

// Animated skill bar component
const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const [animate, setAnimate] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimate(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [delay]);

  return (
    <div className="mb-6 group" ref={barRef}>
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <div className="mr-2 text-slate-600 dark:text-slate-400">
            {skill.icon}
          </div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-105 origin-left`}
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

// Category card component
const CategoryCard: React.FC<{ 
  category: string; 
  skills: Skill[]; 
  isActive: boolean;
  onClick: () => void;
}> = ({ category, skills, isActive, onClick }) => {
  return (
    <div 
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 transition-all duration-300 cursor-pointer transform ${
        isActive ? 'shadow-lg scale-105 border-l-4 border-blue-500 dark:border-blue-400' : 'hover:shadow-md hover:scale-102'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3">
          {categoryIcons[category]}
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{category}</h3>
      </div>

      {isActive && (
        <div className="mt-4 animate-fadeIn">
          {skills
            .filter((skill) => skill.category === category)
            .map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
        </div>
      )}
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !activeCategory) {
          setActiveCategory(categories[0]);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeCategory]);

  // Function to scroll categories horizontally on mobile
  const scrollCategories = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust as needed
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Function to navigate through skills in the carousel
  const navigateSkills = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentSkillIndex(prev => (prev === 0 ? skills.length - 1 : prev - 1));
    } else {
      setCurrentSkillIndex(prev => (prev === skills.length - 1 ? 0 : prev + 1));
    }
  };


  return (
    <section id="skills" className="py-16 relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <div className="inline-block px-4 py-1 mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-800 dark:text-indigo-300 font-medium text-sm">
          <span className="animate-pulse">⚡</span> Technical Expertise
        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Technical Skills</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl">
          My expertise in DevOps technologies and cloud platforms, with a focus on building resilient and scalable infrastructure.
        </p>

        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              skills={skills}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category === activeCategory ? null : category)}
            />
          ))}
        </div>

        {/* Mobile view - Horizontal scrolling */}
        <div className="md:hidden relative">
          <div className="flex items-center mb-4">
            <button 
              onClick={() => scrollCategories('left')}
              className="p-2 rounded-full bg-white dark:bg-slate-700 shadow-md text-slate-700 dark:text-slate-300 focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-x-auto mx-2 py-2 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex space-x-4 px-2">
                {categories.map((category) => (
                  <div 
                    key={category}
                    className={`flex-shrink-0 w-56 sm:w-64 bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 sm:p-6 transition-all duration-300 cursor-pointer transform ${
                      activeCategory === category ? 'shadow-lg border-l-4 border-blue-500 dark:border-blue-400' : 'hover:shadow-md'
                    }`}
                    onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-3">
                        {categoryIcons[category]}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{category}</h3>
                    </div>

                    {activeCategory === category && (
                      <div className="mt-4 animate-fadeIn">
                        {skills
                          .filter((skill) => skill.category === category)
                          .slice(0, 3) // Show only first 3 skills on mobile
                          .map((skill, index) => (
                            <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                          ))}
                        {skills.filter((skill) => skill.category === category).length > 3 && (
                          <div className="text-center mt-2">
                            <span className="text-sm text-blue-600 dark:text-blue-400">
                              +{skills.filter((skill) => skill.category === category).length - 3} more
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => scrollCategories('right')}
              className="p-2 rounded-full bg-white dark:bg-slate-700 shadow-md text-slate-700 dark:text-slate-300 focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Skill Proficiency Overview - Desktop view */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hidden sm:block">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
            <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <SiDocker className="text-blue-600 dark:text-blue-400" />
            </span>
            Skill Proficiency Overview
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="group"
              >
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                  {/* Tool Logo */}
                  <div className="w-16 h-16 flex items-center justify-center mb-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                    <div className="text-3xl text-slate-700 dark:text-slate-300">
                      {skill.icon}
                    </div>
                  </div>

                  {/* Tool Name */}
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 text-center">
                    {skill.name}
                  </h4>

                  {/* Skill Level */}
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5 mb-1 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  {/* Percentage */}
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Proficiency Overview - Mobile carousel */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl sm:hidden">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
            <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <SiDocker className="text-blue-600 dark:text-blue-400" />
            </span>
            Skill Proficiency Overview
          </h3>

          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={() => navigateSkills('prev')}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Previous skill"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {currentSkillIndex + 1} of {skills.length}
              </div>
              <button 
                onClick={() => navigateSkills('next')}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Next skill"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="overflow-hidden">
              <div className="flex transition-all duration-300 transform touch-pan-x" style={{ transform: `translateX(-${currentSkillIndex * 100}%)` }}>
                {skills.map((skill, index) => (
                  <div 
                    key={`${skill.name}-${index}`}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 sm:p-6 flex flex-col items-center">
                      {/* Tool Logo */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-3 sm:mb-4 bg-white dark:bg-slate-800 rounded-full shadow-md">
                        <div className="text-3xl sm:text-4xl text-slate-700 dark:text-slate-300">
                          {skill.icon}
                        </div>
                      </div>

                      {/* Tool Name */}
                      <h4 className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 mb-2 sm:mb-3 text-center">
                        {skill.name}
                      </h4>

                      {/* Skill Level */}
                      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-3 mb-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      {/* Percentage */}
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {skill.level}% Proficiency
                      </span>

                      {/* Category */}
                      <span className="mt-2 px-3 py-1 bg-slate-200 dark:bg-slate-600 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkillIndex(index)}
                  className={`w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSkillIndex 
                      ? 'bg-blue-500 dark:bg-blue-400 w-6 sm:w-5' 
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  aria-label={`Go to skill ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
