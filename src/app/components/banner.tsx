import React from 'react'
import Foto from '../../assets/img/Foto.jpg';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='Banner'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row'>
          <div className='flex-1 text-center font-secondary lg:text-left lg:items-center lg:gap-x-12'> 
            <h1 className='text-[40px] font-bold leading-[0.8] lg:text-[70px]'>!HOLA¡,
              <span className='mr-4'> Yo soy kevin</span>
                <span className='mr-4'> </span>
            </h1>
            <div className='mb-6 text-[30px] lg:text-[50px]'>
              <span>Estudiante </span>
              <TypeAnimation 
                sequence={[
                  'De ingenieria de software ',
                  2000,
                  'y levantador de pesas',
                  2000,
                ]}
                speed={50}
                className='text-black'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Soy un estudiante apasionado de ingeniería de software que combina mi amor
             por el levantamiento de pesas y la música para crear 
             un estilo de vida equilibrado y emocionante.
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contactame</button>
              <a href='#' className='text-gradient btn-link'>My portafolio</a>
            </div>
            <div className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div> 

          <div className='hidden lg:flex flex-1 max-w-[200px] lg:max-w-[250px]'>
            <img src={Foto} alt=''/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner;
