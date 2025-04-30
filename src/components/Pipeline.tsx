import React, { useState } from 'react';
import { 
  Code, GitBranch, GitMerge, Package, 
  Check, AlertTriangle, Server, Lock 
} from 'lucide-react';

interface PipelineStage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Pipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  const stages: PipelineStage[] = [
    {
      id: 'code',
      title: 'Code',
      description: 'Write and commit code to version control. Implement features, fix bugs, and improve functionality while following coding standards and best practices.',
      icon: <Code size={24} />,
      color: 'bg-blue-500'
    },
    {
      id: 'build',
      title: 'Build',
      description: 'Compile code and create artifacts. Run linters and static code analysis to ensure code quality and consistency.',
      icon: <Package size={24} />,
      color: 'bg-indigo-500'
    },
    {
      id: 'test',
      title: 'Test',
      description: 'Execute automated tests including unit tests, integration tests, and end-to-end tests to ensure functionality and prevent regressions.',
      icon: <Check size={24} />,
      color: 'bg-green-500'
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Perform security scanning for vulnerabilities in code and dependencies. Ensure compliance with security policies and best practices.',
      icon: <Lock size={24} />,
      color: 'bg-red-500'
    },
    {
      id: 'deploy',
      title: 'Deploy',
      description: 'Automatically deploy code to staging environments for verification. Monitor deployment process and collect metrics for improvement.',
      icon: <Server size={24} />,
      color: 'bg-purple-500'
    },
    {
      id: 'monitor',
      title: 'Monitor',
      description: 'Continuously monitor applications and infrastructure. Gather metrics, logs, and trace data to ensure optimal performance and reliability.',
      icon: <AlertTriangle size={24} />,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="pipeline" className="py-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">CI/CD Pipeline</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
        My approach to continuous integration and deployment
      </p>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 transition-all duration-300 hover:shadow-md">
        <div className="flex flex-wrap justify-center md:justify-between gap-4 mb-8">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <div 
                className={`relative cursor-pointer transition-all duration-300 transform ${
                  activeStage === stage.id ? 'scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setActiveStage(stage.id === activeStage ? null : stage.id)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${stage.color} text-white`}>
                  {stage.icon}
                </div>
                <p className="text-center text-sm font-medium mt-2 text-slate-700 dark:text-slate-300">
                  {stage.title}
                </p>
              </div>
              
              {index < stages.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <div className="h-0.5 w-8 bg-slate-300 dark:bg-slate-600"></div>
                  <GitBranch size={20} className="text-slate-400 dark:text-slate-500 mx-1" />
                  <div className="h-0.5 w-8 bg-slate-300 dark:bg-slate-600"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        {activeStage && (
          <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-700 rounded-lg transition-all duration-300 animate-fadeIn">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
              {stages.find(s => s.id === activeStage)?.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {stages.find(s => s.id === activeStage)?.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pipeline;