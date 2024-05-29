import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Estudiante de Ingeniería de Software',
    company: 'Universidad Cooperativa de Colombia',
    dates: 'Enero 2022 - Presente',
    description: 'Actualmente cursando la carrera de Ingeniería de Software, adquiriendo habilidades en programación, desarrollo web y bases de datos.',
  },
  {
    title: 'Desarrollo Backend',
    company: 'Universidad Cooperativa de Colombia',
    dates: 'Enero 2022 - Mayo 2024',
    description: 'Desarrollé un CRUD en Java junto con consultas SQL para geolocalización, mejorando el rendimiento y la eficiencia en la gestión de datos.',
  },
  {
    title: 'Portafolio Personal',
    company: 'Universidad Cooperativa de Colombia',
    dates: 'Enero 2022 - Mayo 2024',
    description: 'Creación de un portafolio personal utilizando React y Vite, destacando mis proyectos y habilidades técnicas.',
  },
  {
    title: 'E-commerce',
    company: 'Universidad Cooperativa de Colombia',
    dates: 'Enero 2022 - Mayo 2022',
    description: 'Desarrollé un CRUD web en Django y React para la gestión de productos de una fábrica de embutidos, optimizando los procesos de venta y administración.',
  },
  {
    title: 'Web de Películas',
    company: 'Universidad Cooperativa de Colombia',
    dates: 'Enero 2022 - Mayo 2024',
    description: 'Creé un CRUD para la gestión de una página de películas utilizando Django y Angular, mejorando la experiencia del usuario y la administración de contenidos.',
  },
];

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const experiencesPerPage = 4;
  const offset = currentPage * experiencesPerPage;
  const currentExperiences = experiences.slice(offset, offset + experiencesPerPage);
  const pageCount = Math.ceil(experiences.length / experiencesPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="section py-10 bg-gradient-to-r to-gray-900 text-white w-full" id="Experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <header className="text-center mb-8 mt-4">
          <h1 className="text-4xl font-bold text-white mb-1">Experiencia</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Académico y Profesional</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {currentExperiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <p className="text-gray-300">{experience.company}</p>
              <p className="text-gray-200 italic">{experience.dates}</p>
              <p className="text-gray-400 mt-2">{experience.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center sm:justify-end mt-8">
          <ReactPaginate
            previousLabel={'Anterior'}
            nextLabel={'Siguiente'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'page-item mx-1'}
            pageLinkClassName={'page-link py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link py-1 px-2 bg-gray-800 text-white rounded-md hover:bg-gray-700'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link py-1 px-2 bg-gray-800 text-white rounded-md hover:bg-gray-700'}
            breakLinkClassName={'page-link py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700'}
            activeClassName={'custom-active'}
            activeLinkClassName={'page-link py-2 px-4 bg-green-500 text-white rounded-md'}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
