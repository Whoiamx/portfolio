import { FaClipboardList } from "react-icons/fa";

const experiences = [
  {
    role: "Analista Técnico Funcional SSR",
    company: "Universal Assistance",
    period: "Noviembre 2022 - Actualidad",
    description:
      "Encargado de analizar y diseñar soluciones tecnológicas para optimizar procesos operativos dentro de la empresa. Trabajo en estrecha colaboración con los equipos de desarrollo y gestión de proyectos.",
  },
  {
    role: "Analista QA",
    company: "UPEX",
    period: "Mayo 2022 - Noviembre 2022",
    description:
      "Responsable de la planificación y ejecución de pruebas de calidad en aplicaciones móviles y web. Asegurando que los productos cumplan con los requisitos y estándares establecidos antes de su lanzamiento.",
  },
];

const Experience = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20  from-gray-900 via-gray-800 to-gray-900 min-h-[70vh]">
      <div className="text-center mb-12 w-full">
        <h2 className="text-4xl font-extrabold mb-6 text-yellow-200 drop-shadow-lg">
          Experiencia laboral
        </h2>
      </div>
      <ol className="relative border-l-4 border-yellow-200/40 max-w-2xl w-full flex flex-col items-center mx-auto">
        {experiences.map((exp, idx) => (
          <li key={idx} className="mb-12 w-full flex justify-center">
            <div className="flex flex-col items-center gap-6 w-full">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-200/20 shadow-lg text-yellow-200 text-4xl transition-transform duration-300 hover:scale-110">
                <FaClipboardList />
              </span>
              <div className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-xl p-6 w-full max-w-md transition-shadow duration-300 hover:shadow-2xl text-center mx-auto">
                <h3 className="text-2xl font-bold text-yellow-200 mb-1">
                  {exp.role}
                </h3>
                <h4 className="font-semibold text-lg text-gray-300 mb-1">
                  {exp.company}
                </h4>
                <time className="block text-sm text-gray-400 mb-2">
                  {exp.period}
                </time>
                <p className="text-gray-200 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
