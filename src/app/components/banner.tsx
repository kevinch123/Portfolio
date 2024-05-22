import React from 'react'
import LogoH from '../../assets/img/LogoH.png';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <section className=' section min-h-[78vh] lg:min-h-[65vh] flex items-center ' id='Banner'>
      <div className='container mx-20 p-12'>
        <div className='flex flex-col gap-y-8 lg:flex-row'>
          <div className='flex-1 text-center font-secondary lg:text-left lg:items-center lg:gap-x-12'> 
            <h1 className='text-[30px] font-bold leading-[1] lg:text-[60px] text-white'>!Hola¡
            </h1>
            <h2 className='text-[30px] font-bold leading-[1] lg:text-[60px] text-white'>Yo soy kevin
            </h2>

            <div className='mb-6 text-[20px] lg:text-[30px] text-white'>
              <span>Estudiante </span>
              <TypeAnimation 
                sequence={[
                  'De ingenieria de software ',
                  2000,
                  'y levantador de pesas',
                  2000,
                ]}
                speed={50}
                className='text-neon-green'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0 text-white'>
            Soy un estudiante apasionado de ingeniería de software que combina mi amor
             por el levantamiento de pesas y la música para crear 
             un estilo de vida equilibrado y emocionante.
             <div className='flex text-[35px] gap-x-6 max-w-max mx-auto lg:mx-3 my-5 '>
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
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-25 mx-auto py-auto lg:mx-0 '>
              <button className='btn btn-lg h-[50px] px-8 text-base rounded-full '>Contactame</button>
            </div>

          </div> 

          <div className='lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={LogoH} alt='' />
          </div>


        </div>
      </div>
    </section>
  )
}

export default Banner;
