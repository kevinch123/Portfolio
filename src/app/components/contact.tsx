import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from './footer';

const Contact = () => {
  return (
    <section className='section text-white py-12 flex flex-col min-h-screen' id='Contact'>
      <div className='flex-grow'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Contáctame</h1>
          </header>
          <div className='bg-gray-800 p-8 rounded-lg shadow-md max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <section className='text-2xl font-roboto mb-8'>
                "Fue un honor que hayas llegado hasta aquí. Si consideras que soy el candidato adecuado para lo que buscas,
                ya sabes dónde encontrarme. ¡Espero saber de ti pronto y ser parte de tu próximo proyecto!"
              </section>
              <div className='space-y-6'>
                <div>
                  <h2 className='text-xl font-semibold'>Información de Contacto</h2>
                  <ul className='mt-4 space-y-4'>
                    <li className='flex items-center'>
                      <FaEnvelope className='text-blue-400 mr-2' />
                      <span className='block text-sm font-medium'>Correo Electrónico:</span>
                      <a href='mailto:kevinchi78@gmail.com' className='text-blue-400 ml-2'>kevinchi78@gmail.com</a>
                    </li>
                    <li className='flex items-center'>
                      <FaWhatsapp className='text-green-400 mr-2' />
                      <span className='block text-sm font-medium'>WhatsApp:</span>
                      <a href='https://wa.me/1234567890' className='text-blue-400 ml-2' target='_blank' rel='noopener noreferrer'>+57 3235087561</a>
                    </li>
                    <li className='flex items-center'>
                      <FaMapMarkerAlt className='text-red-400 mr-2' />
                      <span className='block text-sm font-medium'>Ubicación:</span>
                      <p className='text-gray-400 ml-2'>San Juan de Pasto, Nariño, Colombia</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='mt-8'>
        <Footer />
      </footer>
    </section>
  );
};

export default Contact;
