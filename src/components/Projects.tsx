import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Microservices Deployment',
    description: 'A scalable microservices architecture with Kubernetes, featuring automated deployment pipelines, service mesh with Istio, and comprehensive monitoring.',
    technologies: ['Kubernetes', 'Docker', 'Istio', 'GitHub Actions', 'Prometheus', 'Grafana'],
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/',
    demo: 'https://example.com/'
  },
  {
    id: 2,
    title: 'Infrastructure as Code Platform',
    description: 'Multi-cloud infrastructure provisioning system using Terraform with CI/CD integration, automated testing, and comprehensive documentation.',
    technologies: ['Terraform', 'AWS', 'Azure', 'GitLab CI', 'Packer'],
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/',
  },
  {
    id: 3,
    title: 'Automated Monitoring System',
    description: 'Comprehensive monitoring and alerting system with custom dashboards, auto-remediation, and incident management integration.',
    technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'PagerDuty', 'Python'],
    image: 'https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/',
    demo: 'https://example.com/'
  },
  {
    id: 4,
    title: 'Cloud Cost Optimization',
    description: 'Automated cost optimization tool for AWS resources with reporting, anomaly detection, and recommendations engine.',
    technologies: ['AWS', 'Lambda', 'Python', 'DynamoDB', 'CloudWatch'],
    image: 'https://images.pexels.com/photos/5980866/pexels-photo-5980866.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Projects</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
        Showcasing my DevOps and infrastructure engineering work
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;