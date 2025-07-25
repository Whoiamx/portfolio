const About = () => {
  return (
    <section
      id="sobre-mi"
      className="px-6 py-20  from-gray-900 via-gray-800 to-gray-900"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-center text-yellow-200 drop-shadow-lg">
        Sobre mí
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-4xl mx-auto bg-gray-800 bg-opacity-80 rounded-3xl shadow-2xl p-8">
        <div className="flex justify-center flex-col items-center  gap-6">
          <img
            src="/gastongh.png"
            alt="Foto de Gastón"
            className="w-44 h-44 rounded-full object-cover border-4 border-yellow-200 shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <span className="text-yellow-200 font-bold text-lg bg-gray-900 bg-opacity-70 px-4 py-2 rounded-xl shadow">
            Desarrollador Fullstack
          </span>
        </div>
        <div className="md:w-2/3 text-gray-200 text-center md:text-left">
          <p className="text-xl font-semibold leading-relaxed">
            ¡Hola! Soy Gastón, tengo 25 años y me apasiona el desarrollo web y
            la lógica.
            <br />
            <br />
            Disfruto creando aplicaciones útiles, responsivas y con una
            experiencia de usuario clara.
            <br />
            <br />
            Siempre busco aprender nuevas tecnologías y mejorar mis habilidades
            para aportar soluciones innovadoras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
