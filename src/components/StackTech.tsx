import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiPostgresql, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiFigma, SiTailwindcss, SiExpress } from "react-icons/si";

export const StackTech = () => {
  return (
    <section
      id="tecnologias"
      className="bg-[#1A1A40] w-full flex flex-col items-center text-center gap-8 p-12"
    >
      <h2 className="text-3xl font-bold mb-10">Tecnologías que utilizo</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16 p-3">
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-5xl text-orange-600" />
          <h3 className="mt-4 text-xl font-semibold">HTML5</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-5xl text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">CSS3</h3>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-5xl text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">Tailwind CSS</h3>
        </div>
        <div className="flex flex-col items-center">
          <SiFigma className="text-5xl text-purple-600" />
          <h3 className="mt-4 text-xl font-semibold">Figma</h3>
        </div>
        <div className="flex flex-col items-center">
          <DiJavascript1 className="text-5xl text-yellow-500" />
          <h3 className="mt-4 text-xl font-semibold">JavaScript</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-5xl text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">React</h3>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs className="text-5xl text-black" />
          <h3 className="mt-4 text-xl font-semibold">Next.js</h3>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress className="text-5xl text-black" />
          <h3 className="mt-4 text-xl font-semibold">Express.js</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-5xl text-green-600" />
          <h3 className="mt-4 text-xl font-semibold">Node.js</h3>
        </div>
        <div className="flex flex-col items-center">
          <DiPostgresql className="text-5xl text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">PostgreSQL</h3>
        </div>
        <div className="flex flex-col items-center">
          <DiMongodb className="text-5xl text-green-700" />
          <h3 className="mt-4 text-xl font-semibold">MongoDB</h3>
        </div>
      </div>
    </section>
  );
};
