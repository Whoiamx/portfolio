import { FaDownload, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="p-16 md:pt-28 md:pb-28  from-gray-900 via-gray-800 to-gray-900 scroll-mt-20">
      <div className="container px-6 md:px-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="flex justify-center flex-col items-center  gap-6">
            <img
              src="/profile.jpeg"
              alt="Foto de Gastón"
              className="w-44 h-44 rounded-full object-cover border-4 border-green-200 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <a
              href="https://www.linkedin.com/in/gastontimchuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-full px-4 py-2 text-black bg-green-400 rounded-full shadow-md cursor-pointer backdrop-blur-3xl whitespace-nowrap font-semibold hover:bg-yellow-300 transition">
                Disponible para trabajar
              </div>
            </a>
          </div>

          <div className="text-center p-24 md:text-left max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
              Hola, soy Gastón
            </h1>
            <h2 className="text-yellow-200 text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Desarrollador Fullstack
            </h2>
            <p className="text-xl text-gray-200 mb-8 font-medium">
              Apasionado por la tecnología y la creación de experiencias web
              fluidas, modernas y atractivas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
              <a
                href="/CVGaston2025.pdf"
                download="CV_Gaston_Timchuk.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 text-black bg-yellow-200 rounded-full shadow-md font-semibold text-md transition hover:bg-yellow-300 hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-yellow-200 focus-visible:ring-offset-2"
              >
                <FaDownload className="text-lg" />
                Descargar CV
              </a>
              <a
                href="https://www.linkedin.com/in/gastontimchuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 text-black bg-yellow-200 rounded-full shadow-md font-semibold text-md transition hover:bg-yellow-300 hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-yellow-200 focus-visible:ring-offset-2"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
