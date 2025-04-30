import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Docker', level: 90, category: 'Containerization' },
  { name: 'Kubernetes', level: 85, category: 'Orchestration' },
  { name: 'Jenkins', level: 80, category: 'CI/CD' },
  { name: 'GitHub Actions', level: 85, category: 'CI/CD' },
  { name: 'Terraform', level: 75, category: 'IaC' },
  { name: 'AWS', level: 85, category: 'Cloud' },
  { name: 'Azure', level: 80, category: 'Cloud' },
  { name: 'Ansible', level: 75, category: 'Configuration Management' },
  { name: 'Prometheus', level: 70, category: 'Monitoring' },
  { name: 'Grafana', level: 75, category: 'Monitoring' },
  { name: 'Python', level: 80, category: 'Programming' },
  { name: 'Bash', level: 85, category: 'Programming' },
];

const categories = Array.from(new Set(skills.map((skill) => skill.category)));

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Technical Skills</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
        My expertise in DevOps technologies and cloud platforms
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{category}</h3>
            <div>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;