const About = () => {
  return (
    <section id="sobre-mi" className="px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Sobre mí</h2>
      <div className="flex  flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
        <div className="md:w-2/3  text-gray-300 text-center md:text-left">
          <p className="text-xl font-semibold">
            Me llamo Gastón, tengo 25 años, soy{" "}
            <span className="text-yellow-200">Analista Funcional</span> y{" "}
            <span className="text-yellow-200">Desarrollador Fullstack </span>{" "}
            <br />
            <br />
            Empecé en el mundo de la programación con pasión por el desarrollo
            web y la lógica. Me encanta crear aplicaciones útiles, responsivas y
            con una experiencia de usuario clara.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
