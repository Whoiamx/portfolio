import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Projects = () => {
  return (
    <section id="proyectos" className="px-6 py-20 bg-[#141432]">
      <h2 className="text-3xl font-bold mb-10 text-white text-center">
        Proyectos
      </h2>

      <div className="flex flex-col gap-8 items-center">
        <div className="bg-[#1f1f3b] p-6 rounded-lg w-full md:w-3/4 lg:w-1/2 gap-4">
          <img
            src="/fit2.PNG" // Cambia esta ruta por la imagen de tu proyecto
            alt="SVGL Project"
            className="mb-4 rounded-lg"
          />
          <h3 className="text-3xl font-semibold mb-2 text-white text-center">
            Fit 2 Work - <i>En proceso...</i>
          </h3>
          <p className="text-gray-300 mb-2 text-center">
            Aplicacion para buscar trabajo con ayuda de la IA
          </p>
          <div className="flex justify-center gap-3 text-sm text-gray-400 mb-4">
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
              href="https://github.com/Whoiamx/fit-to-work"
              className="underline text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
            <a
              href="https://your-project-preview-url"
              className="underline text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#1f1f3b] p-6 rounded-lg w-full md:w-3/4 lg:w-1/2 gap-3">
          <a href="https://sup-today-app.vercel.app/" target="_blank">
            <img src="/sup.PNG" className="mb-4 rounded-lg" />
          </a>
          <h3 className="text-3xl font-semibold mb-2 text-white text-center">
            Sup Today
          </h3>
          <p className="text-gray-300 mb-2 text-center">
            Aplicacion para anotar recordatorios con notificaciones via Whatsapp
            e Email.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-400 mb-4">
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
              className="underline text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
            <a
              href="https://sup-today-app.vercel.app/"
              className="underline text-yellow-400"
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
