import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LogoH from '../../assets/img/LogoH.png';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gray-800 text-white">
      <section className="flex justify-center mb-5 md:mb-0 md:mr-4">
        <img src={LogoH} alt="Logo" className="w-32 h-24 md:w-40 md:h-32 py-4" />
      </section>
      <div className="text-center md:text-left mb-4 md:mb-0 md:mr-4">
        <p className="font-bold text-lg md:text-xl">
          KevinCH <br />Estudiante de Ingeniería de Software
        </p>
        <p className="text-sm md:text-base">Copyright © 2024 - All rights reserved</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/kevinch123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={30} className="hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/kevin-chachinoy-54b615304/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} className="hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
