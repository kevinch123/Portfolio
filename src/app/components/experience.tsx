import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Desarrollador Frontend',
    company: 'Tech Company',
    dates: 'Enero 2020 - Presente',
    description: 'Desarrollo de aplicaciones web utilizando React y Tailwind CSS. Implementación de interfaces de usuario interactivas y responsivas.',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Tech Company',
    dates: 'Enero 2020 - Presente',
    description: 'Desarrollo de aplicaciones web utilizando React y Tailwind CSS. Implementación de interfaces de usuario interactivas y responsivas.',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Tech Company',
    dates: 'Enero 2020 - Presente',
    description: 'Desarrollo de aplicaciones web utilizando React y Tailwind CSS. Implementación de interfaces de usuario interactivas y responsivas.',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Tech Company',
    dates: 'Enero 2020 - Presente',
    description: 'Desarrollo de aplicaciones web utilizando React y Tailwind CSS. Implementación de interfaces de usuario interactivas y responsivas.',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Tech Company',
    dates: 'Enero 2020 - Presente',
    description: 'Desarrollo de aplicaciones web utilizando React y Tailwind CSS. Implementación de interfaces de usuario interactivas y responsivas.',
  },
];

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const experiencesPerPage = 4; // Número de experiencias por página
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
          <h2 className="text-2xl font-semibold text-white mb-6">Academico Laboral</h2>
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
            previousLabel={'before'}
            nextLabel={'next'}
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
