import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import LogoH from '../../assets/img/LogoH.png';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center p-6 md:p-10 bg-gray-800 text-white">
      <section className="flex items-center justify-center mb-7 md:mb-0 w-full md:w-auto">
        <img src={LogoH} alt="Logo" className="w-32 h-24 md:w-40 md:h-32 mr-4 py-5" />
      </section>
      <div className="text-center mb-4 md:mb-0">
        <p className="font-bold text-lg md:text-xl">
          KevinCH <br />Estudiante de Ingeniería de Software
        </p>
        <p className="text-sm md:text-base">Copyright © 2024 - All rights reserved</p>
      </div>
      <section className="flex space-x-4 md:space-x-5">
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-200">
          <FaTwitter size={24} className="fill-current" />
        </a>
        <a href="https://youtube.com" aria-label="YouTube" className="hover:text-red-500 transition-colors duration-200">
          <FaYoutube size={24} className="fill-current" />
        </a>
        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600 transition-colors duration-200">
          <FaFacebook size={24} className="fill-current" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
