import React from 'react';

const skillsData = [
  {
    category: 'Backend',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'C#' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    category: 'Frameworks Usados',
    skills: [
      { name: 'React' },
      { name: 'Django' },
      { name: 'Spring' },
    ],
  },
  {
    category: 'Bases de Datos',
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
    ],
  },
];

const Skills = () => {
  return (
    <section className='section' id='Skills'>
      <div className="container mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-1">Habilidades</h1>
          <h2 className="text-2xl font-semibold text-white mb-10">Tecnologías</h2>
        </header>
        
        <div className="flex flex-col items-center">
          {skillsData.map((category) => (
            <div key={category.category} className="mb-8 w-full">
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
