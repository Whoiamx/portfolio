import { FaClipboardList } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-5xl md:max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Experiencia laboral
        </h2>
      </div>
      <ol className="relative mt-16">
        <li>
          <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-1 md:gap-4 md:space-x-4">
            <div className="relative pb-12 md:col-span-1 flex items-center gap-4">
              <span className="text-yellow-200 text-5xl">
                <FaClipboardList />
              </span>
              <div>
                <h3 className="text-xl font-bold text-yellow-200">
                  Analista Técnico Funcional Ssr
                </h3>
                <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                  Universal Assistance
                </h4>
                <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                  Noviembre 2022 - Actualidad
                </time>
                <p className="mt-2 text-gray-600 dark:text-white/80">
                  Encargado de analizar y diseñar soluciones tecnológicas para
                  optimizar procesos operativos dentro de la empresa. Trabajo en
                  estrecha colaboración con los equipos de desarrollo y gestión
                  de proyectos.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-1 md:gap-4 md:space-x-4">
            <div className="relative pb-12 md:col-span-1 flex items-center gap-4">
              <span className="text-yellow-200 text-5xl">
                <FaClipboardList />
              </span>
              <div>
                <h3 className="text-xl font-bold text-yellow-200">
                  Analista QA
                </h3>
                <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                  UPEX
                </h4>
                <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                  Mayo 2022 - Noviembre 2022
                </time>
                <p className="mt-2 text-gray-600 dark:text-white/80">
                  Responsable de la planificación y ejecución de pruebas de
                  calidad en aplicaciones móviles y web. Asegurando que los
                  productos cumplan con los requisitos y estándares establecidos
                  antes de su lanzamiento.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Experience;
