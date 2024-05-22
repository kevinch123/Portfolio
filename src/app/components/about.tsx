import React from 'react';
import FotoA from '../../assets/img/FotoA.jpg';

export const About = () => {
  return (
    <section className='section' id='About'>
      <div className="container mx-auto p-6 md:p-12">
        {/* Encabezado para los títulos */}
        <header className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-white mb-1'>Sobre mí</h1>
          <h2 className='text-2xl font-semibold text-white mb-10'>Resumen</h2>
        </header>
        
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-32'>
          <div className='flex justify-center lg:justify-start'>
            <img
              className='object-cover h-[300px] w-[250px] md:h-[450px] md:w-[320px] rounded-2xl'
              src={FotoA}
              alt='Foto de perfil de Kevin'
            />
          </div>
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 text-white relative'>
              Encantado de conocerte,
              <h3 className='text-neon-green'>Soy Kevin Chachinoy</h3>
            </h2>
            <div className='max-w-xl'>
              <p className='mb-4 text-accent text-white'>
                La ingeniería de software es mi pasión principal, pero también encuentro alegría y liberación en el gimnasio, donde desafío mis límites físicos levantando pesas y superando mis marcas personales. Para mí, la combinación de la mente ágil y la fuerza física crea un equilibrio perfecto que impulsa mi crecimiento personal y profesional. ¡Y estoy emocionado por seguir explorando y creciendo en ambos mundos!
                "La programación me apasiona, pero lo que realmente me motiva es superarme cada día, ya sea escribiendo código o levantando pesas. Cada repetición en el gimnasio refleja mi constante deseo de superación en la vida."
              </p>
            </div>
            <button className='btn btn-lg h-[50px] px-7 my-6 text-base rounded-full'>
              Descargar CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
