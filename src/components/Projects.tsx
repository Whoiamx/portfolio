import {
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="px-6 py-20  from-gray-900 via-gray-800 to-gray-900"
    >
      <h2 className="text-4xl font-bold mb-10 text-yellow-200 text-center drop-shadow-lg">
        Proyectos
      </h2>

      <div className="flex flex-col gap-12 items-center">
        <div className="p-6 rounded-2xl w-full md:w-3/4 lg:w-1/2 gap-4 bg-gray-800 bg-opacity-90 border border-yellow-200/20 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <a
            href="https://fit-2-work.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/fit2workimage.png"
              className="mb-4 rounded-lg shadow-lg"
            />
          </a>

          <h3
            className="text-3xl font-extrabold mb-2 text-white
           text-center"
          >
            Fit 2 Work{" "}
          </h3>
          <p className="text-gray-300 mb-2 text-center">
            Aplicación para buscar trabajo con ayuda de la IA
          </p>
          <div className="flex justify-center gap-3 text-sm text-gray-400 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <SiNextdotjs className="text-black text-sm" />
              <span className="text-white">Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTypescript className="text-blue-600 text-xl" />
              <span className="text-white">TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiNestjs className="text-blue-600 text-xl" />
              <span className="text-white">Nest JS</span>
            </div>

            <div className="flex items-center gap-2">
              <SiTailwindcss className="text-blue-600 text-xl" />
              <span className="text-white">Tailwind CSS</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Whoiamx/fit-2-work"
              className="  font-semibold text-white transition hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
            <a
              className=" text-white font-semibold transition hover:text-yellow-300"
              href="https://fit-2-work.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL
            </a>
          </div>
        </div>

        <div className="p-6 rounded-2xl w-full md:w-3/4 lg:w-1/2 gap-4 bg-gray-800 bg-opacity-90 border border-yellow-200/20 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
          <a
            href="https://sup-today-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/sup.PNG" className="mb-4 rounded-lg shadow-lg" />
          </a>
          <h3 className="text-3xl font-extrabold mb-2 text-white text-center">
            Sup Today
          </h3>
          <p className="text-gray-300 mb-2 text-center">
            Aplicación para anotar recordatorios con notificaciones vía WhatsApp
            y Email.
          </p>
          <div className="flex justify-center gap-3 text-sm text-gray-400 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <SiNextdotjs className="text-black text-sm" />
              <span className="text-white">Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTypescript className="text-blue-600 text-xl" />
              <span className="text-white">TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiPrisma className="text-blue-600 text-xl" />
              <span className="text-white">Prisma</span>
            </div>
            <div className="flex items-center gap-2">
              <SiPostgresql className="text-blue-600 text-xl" />
              <span className="text-white">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss className="text-blue-600 text-xl" />
              <span className="text-white">Tailwind CSS</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Whoiamx/sup-today-app"
              className=" text-white font-semibold transition hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
            <a
              href="https://sup-today-app.vercel.app/"
              className=" text-white font-semibold transition hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
