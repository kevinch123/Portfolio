
import ExperienceSection from "./experience";

export const workExperiences = [
    {
      title: 'Desarrollador Frontend',
      company: 'Tech Company',
      dates: 'Enero 2020 - Presente',
      description: 'Desarrollo de aplicaciones web utilizando React y Tailwind CSS. Implementación de interfaces de usuario interactivas y responsivas.',
    },
    {
      title: 'Desarrollador Backend',
      company: 'Another Tech Company',
      dates: 'Junio 2018 - Diciembre 2019',
      description: 'Desarrollo de APIs RESTful utilizando Node.js y Express. Integración con bases de datos y servicios externos.',
    },
    {
      title: 'Ingeniero de Software',
      company: 'Software Solutions',
      dates: 'Marzo 2016 - Mayo 2018',
      description: 'Diseño y desarrollo de sistemas de software personalizados para clientes. Mantenimiento y mejora de aplicaciones existentes.',
    },
    // Añade más experiencias laborales aquí...
  ];
  
  export const academicExperiences = [
    {
      title: 'Licenciatura en Ciencias de la Computación',
      institution: 'Universidad de Ejemplo',
      dates: 'Septiembre 2012 - Junio 2016',
      description: 'Estudios centrados en algoritmos, estructuras de datos, desarrollo web y sistemas operativos.',
    },
    {
      title: 'Máster en Ingeniería de Software',
      institution: 'Instituto Tecnológico de Ejemplo',
      dates: 'Septiembre 2016 - Junio 2018',
      description: 'Especialización en desarrollo de software a gran escala, metodologías ágiles y arquitectura de software.',
    },
    // Añade más experiencias académicas aquí...
  ];
  

const Experience = () => {
  return (
    <div id='Experience'>
      <ExperienceSection title='Experiencia Laboral' experiences={workExperiences} />
      <ExperienceSection title='Experiencia Académica' experiences={academicExperiences} />
    </div>
  );
};

export default Experience;
