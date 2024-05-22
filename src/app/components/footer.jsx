
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { GiCog } from 'react-icons/gi';  // Un icono de ejemplo para reemplazar el SVG actual

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-white bg-gray-900">
      <aside className="mb-6">
        <GiCog size={50} className="inline-block text-current" />
        <p className="font-bold">
          KevinCH <br />Estudiante de Ingeniería de Software
        </p>
        <p>Copyright © 2024 - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-3">
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter size={24} className="fill-current" />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <FaYoutube size={24} className="fill-current" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook size={24} className="fill-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
