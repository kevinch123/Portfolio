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
      { name: 'Angular' },
      { name: 'Vue.js' },
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
    <section className='section py-10' id='Skills'>
      <div className="container mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-1">Habilidades</h1>
          <h2 className="text-2xl font-semibold text-white mb-10">Tecnologías</h2>
        </header>
        
        <div className="flex flex-col items-center">
          {skillsData.map((category) => (
            <div key={category.category} className="mb-8 w-full">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                    <span className="text-white">{skill.name}</span>
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
