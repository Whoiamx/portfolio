import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiPostgresql, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiFigma, SiVercel, SiTailwindcss } from "react-icons/si";

export const StackTech = () => {
  return (
    <section
      id="tecnologias"
      className="w-full  mx-auto container lg:max-w-4xl md:max-w-2xl"
    >
      <div className="flex justify-center items-center gap-4">
        <h2 className="text-3xl font-bold mb-6">Tecnologías que utilizo</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-5xl text-orange-600" />
          <h3 className="mt-2 text-xl font-semibold">HTML5</h3>
        </div>

        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-5xl text-blue-600" />
          <h3 className="mt-2 text-xl font-semibold">CSS3</h3>
        </div>

        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-5xl text-purple-600" />
          <h3 className="mt-2 text-xl font-semibold">Figma</h3>
        </div>

        <div className="flex flex-col items-center">
          <SiFigma className="text-5xl text-purple-600" />
          <h3 className="mt-2 text-xl font-semibold">Figma</h3>
        </div>

        <div className="flex flex-col items-center">
          <DiJavascript1 className="text-5xl text-yellow-500" />
          <h3 className="mt-2 text-xl font-semibold">JavaScript</h3>
        </div>

        <div className="flex flex-col items-center">
          <SiVercel className="text-5xl text-black" />
          <h3 className="mt-2 text-xl font-semibold">Vercel</h3>
        </div>

        <div className="flex flex-col items-center">
          <FaReact className="text-5xl text-blue-600" />
          <h3 className="mt-2 text-xl font-semibold">React</h3>
        </div>

        <div className="flex flex-col items-center">
          <SiNextdotjs className="text-5xl text-black" />
          <h3 className="mt-2 text-xl font-semibold">Next.js</h3>
        </div>

        <div className="flex flex-col items-center">
          <FaNodeJs className="text-5xl text-green-600" />
          <h3 className="mt-2 text-xl font-semibold">Express.js</h3>
        </div>

        <div className="flex flex-col items-center">
          <FaNodeJs className="text-5xl text-green-600" />
          <h3 className="mt-2 text-xl font-semibold">Node.js</h3>
        </div>

        <div className="flex flex-col items-center">
          <DiPostgresql className="text-5xl text-blue-600" />
          <h3 className="mt-2 text-xl font-semibold">PostgreSQL</h3>
        </div>

        <div className="flex flex-col items-center">
          <DiMongodb className="text-5xl text-green-700" />
          <h3 className="mt-2 text-xl font-semibold">MongoDB</h3>
        </div>
      </div>
    </section>
  );
};
