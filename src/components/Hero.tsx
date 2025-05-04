import { FaLinkedin, FaDownload } from "react-icons/fa"; // Importando el ícono de descarga

const Hero = () => {
  return (
    <section className="py-16 md:py-36 scroll-m-20 ">
      <div className="container px-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="flex justify-center flex-col items-center md:items-start gap-6">
            <img
              src="/profile.jpeg"
              alt="Foto de Gastón"
              className="w-40 h-40 rounded-full object-cover border-4 border-white"
            />
            <a
              href="https://www.linkedin.com/in/gastontimchuk/"
              target="_blank"
              className="transition hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-green-700 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                Disponible para trabajar
              </div>
            </a>
          </div>

          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">
              Hola, soy Gastón
            </h1>
            <h2 className="text-yellow-200 text-5xl md:text-5xl font-bold mb-4">
              Desarrollador Fullstack
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Apasionado por la tecnología y la creación de experiencias web
              fluidas, modernas y atractivas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
              <a
                href="/CVGaston2025.pdf" // Ruta al archivo PDF en la carpeta public
                download="CV_Gaston_Timchuk.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2"
              >
                <FaDownload className="text-lg" /> {/* Icono de descarga */}
                Descargar CV
              </a>
              <a
                href="https://www.linkedin.com/in/gastontimchuk/"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2"
              >
                <FaLinkedin className="text-lg" /> {/* Icono de LinkedIn */}
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
