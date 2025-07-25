import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiPostgresql, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiFigma, SiTailwindcss, SiExpress } from "react-icons/si";

export const StackTech = () => {
  return (
    <section
      id="tecnologias"
      className="w-full flex flex-col items-center text-center gap-8 px-6 py-20 "
    >
      <h2 className="text-3xl font-bold mb-10 text-white drop-shadow-lg">
        Tecnologías que utilizo
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8  w-full max-w-5xl">
        {[
          {
            icon: <FaHtml5 className="text-5xl text-orange-600" />,
            name: "HTML5",
          },
          {
            icon: <FaCss3Alt className="text-5xl text-blue-600" />,
            name: "CSS3",
          },
          {
            icon: <SiTailwindcss className="text-5xl text-blue-600" />,
            name: "Tailwind CSS",
          },
          {
            icon: <SiFigma className="text-5xl text-purple-600" />,
            name: "Figma",
          },
          {
            icon: <DiJavascript1 className="text-5xl text-yellow-500" />,
            name: "JavaScript",
          },
          {
            icon: <FaReact className="text-5xl text-blue-600" />,
            name: "React",
          },
          {
            icon: <SiNextdotjs className="text-5xl text-black" />,
            name: "Next.js",
          },
          {
            icon: <SiExpress className="text-5xl text-black" />,
            name: "Express.js",
          },
          {
            icon: <FaNodeJs className="text-5xl text-green-600" />,
            name: "Node.js",
          },
          {
            icon: <DiPostgresql className="text-5xl text-blue-600" />,
            name: "PostgreSQL",
          },
          {
            icon: <DiMongodb className="text-5xl text-green-700" />,
            name: "MongoDB",
          },
        ].map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-800 bg-opacity-90 rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {tech.icon}
            <h3 className="mt-4 text-lg font-semibold text-white">
              {tech.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
