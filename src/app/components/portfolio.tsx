import React from 'react';
import PortfolioBox from './PortafolioBox';
import Prueba from '../../assets/img/prueba.jpg'; // Importa la imagen aquí

const portfolioData = [
  {
    id: 1,
    title: 'Project One',
    image: Prueba,
    urlGithub: 'https://github.com/kevinch123',
  },
  {
    id: 2,
    title: 'Project Two',
    image: Prueba,
    urlGithub: 'https://github.com/kevinch123',
  },
  {
    id: 3,
    title: 'Project Three',
    image: Prueba,
    urlGithub: 'https://github.com/kevinch123',
  },
  {
    id: 4,
    title: 'Project Four',
    image: Prueba,
    urlGithub: 'https://github.com/kevinch123',
  },
  {
    id: 5,
    title: 'Project Five',
    image: Prueba,
    urlGithub: 'https://github.com/kevinch123',
  },
  {
    id: 6,
    title: 'Project Six',
    image: Prueba,
    urlGithub: 'https://github.com/kevinch123',
  },
];

const Portfolio = () => {
  return (
    <section className="section flex flex-col justify-center min-h-screen p-10 " id="Portfolio">
      <div className="container mx-auto p-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-1">Portafolio</h1>
          <h2 className="text-2xl font-semibold text-white mb-10">Proyectos</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {portfolioData.map((project) => (
            <PortfolioBox key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
