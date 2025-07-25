import {
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const projects = [
  {
    title: "Fit 2 Work",
    image: "/fit2workimage.png",
    description: "Aplicación para buscar trabajo con ayuda de la IA",
    tech: [
      { icon: <SiNextdotjs className="text-black text-sm" />, name: "Next.js" },
      {
        icon: <SiTypescript className="text-blue-600 text-xl" />,
        name: "TypeScript",
      },
      { icon: <SiNestjs className="text-blue-600 text-xl" />, name: "Nest JS" },
      {
        icon: <SiTailwindcss className="text-blue-600 text-xl" />,
        name: "Tailwind CSS",
      },
    ],
    repo: "https://github.com/Whoiamx/fit-2-work",
    url: "https://fit-2-work.vercel.app/",
  },
  {
    title: "Sup Today",
    image: "/sup.PNG",
    description:
      "Aplicación para anotar recordatorios con notificaciones vía WhatsApp y Email.",
    tech: [
      { icon: <SiNextdotjs className="text-black text-sm" />, name: "Next.js" },
      {
        icon: <SiTypescript className="text-blue-600 text-xl" />,
        name: "TypeScript",
      },
      { icon: <SiPrisma className="text-blue-600 text-xl" />, name: "Prisma" },
      {
        icon: <SiPostgresql className="text-blue-600 text-xl" />,
        name: "PostgreSQL",
      },
      {
        icon: <SiTailwindcss className="text-blue-600 text-xl" />,
        name: "Tailwind CSS",
      },
    ],
    repo: "https://github.com/Whoiamx/sup-today-app",
    url: "https://sup-today-app.vercel.app/",
  },
  {
    title: "Kick Store",
    image: "/meliecommerce.png",
    description: "Aplicación eCommerce replica Mercado Libre",
    tech: [
      { icon: <SiReact className="text-blue-400 text-sm" />, name: "React.js" },
      {
        icon: <SiJavascript className="text-yellow-200 text-sm" />,
        name: "Javascript",
      },
    ],
    repo: "https://github.com/Whoiamx/eCommerce-React",
    url: "https://kick-store-js.vercel.app/",
  },
  {
    title: "Sup Today",
    image: "/sup.PNG",
    description:
      "Aplicación para anotar recordatorios con notificaciones vía WhatsApp y Email.",
    tech: [
      { icon: <SiNextdotjs className="text-black text-sm" />, name: "Next.js" },
      {
        icon: <SiTypescript className="text-blue-600 text-xl" />,
        name: "TypeScript",
      },
      { icon: <SiPrisma className="text-blue-600 text-xl" />, name: "Prisma" },
      {
        icon: <SiPostgresql className="text-blue-600 text-xl" />,
        name: "PostgreSQL",
      },
      {
        icon: <SiTailwindcss className="text-blue-600 text-xl" />,
        name: "Tailwind CSS",
      },
    ],
    repo: "https://github.com/Whoiamx/sup-today-app",
    url: "https://sup-today-app.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="px-6 py-20">
      <h2 className="text-4xl font-bold mb-10 text-yellow-200 text-center drop-shadow-lg">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center w-full max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl w-full max-w-xs bg-gray-800 bg-opacity-90 border border-yellow-200/20 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                className="mb-4 rounded-lg shadow-lg w-full h-40 object-cover"
              />
            </a>
            <h3 className="text-2xl font-extrabold mb-2 text-white text-center">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-2 text-center">
              {project.description}
            </p>
            <div className="flex justify-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
              {project.tech.map((tech, i) => (
                <div key={i} className="flex items-center gap-1">
                  {tech.icon}
                  <span className="text-white">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={project.repo}
                className="underline font-semibold text-white transition hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio
              </a>
              <a
                href={project.url}
                className="underline text-white font-semibold transition hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                URL
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
