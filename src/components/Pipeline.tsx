import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Package, Check, AlertTriangle, 
  Server, Lock, Play, RefreshCw, 
  Zap, ChevronRight
} from 'lucide-react';

interface PipelineStage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tools: string[];
  benefits: string[];
}

const Pipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [animatingStage, setAnimatingStage] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);

  const stages: PipelineStage[] = [
    {
      id: 'code',
      title: 'Code',
      description: 'Write and commit code to version control. Implement features, fix bugs, and improve functionality while following coding standards and best practices.',
      icon: <Code size={24} />,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      tools: ['Git', 'GitHub', 'VS Code', 'ESLint'],
      benefits: ['Version Control', 'Code Reviews', 'Collaboration']
    },
    {
      id: 'build',
      title: 'Build',
      description: 'Compile code and create artifacts. Run linters and static code analysis to ensure code quality and consistency.',
      icon: <Package size={24} />,
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      tools: ['Docker', 'Webpack', 'Babel', 'npm/yarn'],
      benefits: ['Reproducible Builds', 'Dependency Management']
    },
    {
      id: 'test',
      title: 'Test',
      description: 'Execute automated tests including unit tests, integration tests, and end-to-end tests to ensure functionality and prevent regressions.',
      icon: <Check size={24} />,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      tools: ['Jest', 'Cypress', 'Selenium', 'Mocha'],
      benefits: ['Quality Assurance', 'Regression Prevention']
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Perform security scanning for vulnerabilities in code and dependencies. Ensure compliance with security policies and best practices.',
      icon: <Lock size={24} />,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      tools: ['SonarQube', 'OWASP ZAP', 'Snyk', 'Dependabot'],
      benefits: ['Vulnerability Detection', 'Compliance', 'Risk Mitigation']
    },
    {
      id: 'deploy',
      title: 'Deploy',
      description: 'Automatically deploy code to staging and production environments. Implement blue-green deployments and canary releases for zero-downtime updates.',
      icon: <Server size={24} />,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      tools: ['Kubernetes', 'AWS/Azure', 'Terraform', 'Ansible'],
      benefits: ['Automated Delivery', 'Infrastructure as Code', 'Scalability']
    },
    {
      id: 'monitor',
      title: 'Monitor',
      description: 'Continuously monitor applications and infrastructure. Gather metrics, logs, and trace data to ensure optimal performance and reliability.',
      icon: <AlertTriangle size={24} />,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
      benefits: ['Real-time Insights', 'Proactive Alerts', 'Performance Optimization']
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const currentIndex = activeStage ? stages.findIndex(s => s.id === activeStage) : -1;
      const nextIndex = currentIndex === stages.length - 1 ? 0 : currentIndex + 1;

      autoPlayTimerRef.current = setTimeout(() => {
        const nextStage = stages[nextIndex].id;
        setAnimatingStage(nextStage);
        setTimeout(() => {
          setActiveStage(nextStage);
          setAnimatingStage(null);
        }, 500);
      }, 3000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, activeStage, stages]);

  // Intersection Observer to start animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !activeStage) {
          setActiveStage(stages[0].id);
        }
      },
      { threshold: 0.3 }
    );

    if (pipelineRef.current) {
      observer.observe(pipelineRef.current);
    }

    return () => {
      if (pipelineRef.current) {
        observer.unobserve(pipelineRef.current);
      }
    };
  }, []);

  const handleStageClick = (stageId: string) => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    }

    if (stageId === activeStage) {
      return;
    }

    setAnimatingStage(stageId);
    setTimeout(() => {
      setActiveStage(stageId);
      setAnimatingStage(null);
    }, 300);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="pipeline" className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        <div className="inline-block px-4 py-1 mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-800 dark:text-purple-300 font-medium text-sm">
          <span className="animate-pulse">🔄</span> DevOps Workflow
        </div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">CI/CD Pipeline</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
          My approach to continuous integration and deployment, ensuring reliable and efficient software delivery.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button 
            onClick={toggleAutoPlay}
            className={`flex items-center px-4 py-3 sm:py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' 
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900/30 dark:hover:text-purple-300'
            }`}
          >
            {isAutoPlaying ? <RefreshCw size={18} className="mr-2 animate-spin" /> : <Play size={18} className="mr-2" />}
            {isAutoPlaying ? 'Auto-Playing' : 'Auto-Play'}
          </button>

          <div className="text-sm text-slate-500 dark:text-slate-400">
            Tap any stage to learn more
          </div>
        </div>

        <div 
          ref={pipelineRef}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 transition-all duration-300 hover:shadow-md"
        >
          {/* Pipeline visualization - Desktop */}
          <div className="relative mb-12 hidden md:block">
            {/* Pipeline track */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-slate-200 dark:bg-slate-700 rounded-full transform -translate-y-1/2"></div>

            {/* Active stage progress */}
            {activeStage && (
              <div 
                className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-y-1/2 transition-all duration-1000 ease-in-out"
                style={{ 
                  width: `${((stages.findIndex(s => s.id === activeStage) + 1) / stages.length) * 100}%`,
                }}
              ></div>
            )}

            {/* Stage markers */}
            <div className="relative flex justify-between">
              {stages.map((stage, index) => (
                <div 
                  key={stage.id}
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`relative cursor-pointer transition-all duration-300 transform ${
                      activeStage === stage.id 
                        ? 'scale-110 z-10' 
                        : animatingStage === stage.id 
                          ? 'scale-105 z-10' 
                          : 'hover:scale-105'
                    }`}
                    onClick={() => handleStageClick(stage.id)}
                  >
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${stage.color} text-white shadow-lg ${
                        activeStage === stage.id ? 'ring-4 ring-offset-2 ring-blue-300 dark:ring-blue-700 dark:ring-offset-slate-800' : ''
                      }`}
                    >
                      {stage.icon}
                    </div>

                    {/* Pulse effect for active stage */}
                    {activeStage === stage.id && (
                      <div className="absolute inset-0 rounded-full bg-white dark:bg-blue-400 mix-blend-screen animate-ping opacity-75"></div>
                    )}

                    <p className={`text-center text-sm font-medium mt-2 ${
                      activeStage === stage.id 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {stage.title}
                    </p>
                  </div>

                  {/* Connection lines between stages */}
                  {index < stages.length - 1 && (
                    <div className="absolute top-8 left-0 right-0 flex items-center justify-center pointer-events-none" style={{ left: `${(index + 0.5) * (100 / (stages.length - 1))}%` }}>
                      <ChevronRight size={20} className="text-slate-400 dark:text-slate-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline visualization - Mobile (Vertical) */}
          <div className="md:hidden mb-8">
            <div className="relative px-2">
              {/* Vertical pipeline track */}
              <div className="absolute left-7 sm:left-6 top-0 bottom-0 w-1.5 sm:w-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>

              {/* Active stage progress */}
              {activeStage && (
                <div 
                  className="absolute left-7 sm:left-6 top-0 w-1.5 sm:w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ 
                    height: `${((stages.findIndex(s => s.id === activeStage) + 1) / stages.length) * 100}%`,
                  }}
                ></div>
              )}

              {/* Stage markers */}
              <div className="space-y-6 sm:space-y-8 py-2">
                {stages.map((stage, index) => (
                  <div 
                    key={stage.id}
                    className="flex items-start relative"
                  >
                    <div 
                      className={`relative cursor-pointer transition-all duration-300 transform ${
                        activeStage === stage.id 
                          ? 'scale-110 z-10' 
                          : animatingStage === stage.id 
                            ? 'scale-105 z-10' 
                            : 'hover:scale-105'
                      }`}
                      onClick={() => handleStageClick(stage.id)}
                    >
                      <div 
                        className={`w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${stage.color} text-white shadow-lg ${
                          activeStage === stage.id ? 'ring-4 ring-offset-2 ring-blue-300 dark:ring-blue-700 dark:ring-offset-slate-800' : ''
                        }`}
                      >
                        {stage.icon}
                      </div>

                      {/* Pulse effect for active stage */}
                      {activeStage === stage.id && (
                        <div className="absolute inset-0 rounded-full bg-white dark:bg-blue-400 mix-blend-screen animate-ping opacity-75"></div>
                      )}
                    </div>

                    <div className="ml-4 flex-1">
                      <h4 className={`text-base sm:text-sm font-medium ${
                        activeStage === stage.id 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-slate-700 dark:text-slate-300'
                      }`}>
                        {stage.title}
                      </h4>

                      {activeStage === stage.id && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 animate-fadeIn">
                          {stage.description.length > 60 
                            ? `${stage.description.substring(0, 60)}...` 
                            : stage.description}
                        </p>
                      )}
                    </div>

                    {/* Connection lines between stages */}
                    {index < stages.length - 1 && (
                      <div className="absolute left-7 sm:left-6 top-14 sm:top-12 h-6 sm:h-8 flex items-center justify-center pointer-events-none">
                        <ChevronRight size={16} className="text-slate-400 dark:text-slate-500 transform rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stage details */}
          {activeStage && (
            <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-700 rounded-lg p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`w-12 h-12 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${stages.find(s => s.id === activeStage)?.color} text-white mr-3`}>
                    {stages.find(s => s.id === activeStage)?.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200">
                    {stages.find(s => s.id === activeStage)?.title} Stage
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4">
                  {stages.find(s => s.id === activeStage)?.description}
                </p>

                <h4 className="font-medium text-slate-800 dark:text-slate-200 mt-4 sm:mt-6 mb-2">Key Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {stages.find(s => s.id === activeStage)?.benefits.map(benefit => (
                    <span 
                      key={benefit} 
                      className="inline-flex items-center px-3 py-1.5 sm:py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      <Zap size={12} className="mr-1" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 sm:p-6">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Tools & Technologies</h4>
                <ul className="grid grid-cols-2 sm:block sm:space-y-2 gap-2">
                  {stages.find(s => s.id === activeStage)?.tools.map(tool => (
                    <li key={tool} className="flex items-center">
                      <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-2"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
