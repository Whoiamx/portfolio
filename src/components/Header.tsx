const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#0f0f2d] z-50 py-4 px-6 shadow-md">
      <nav className="flex justify-center gap-6 text-sm text-gray-300">
        <a href="#experiencia" className="hover:text-white">
          Experiencia
        </a>
        <a href="#proyectos" className="hover:text-white">
          Proyectos
        </a>
        <a href="#sobre-mi" className="hover:text-white">
          Sobre mí
        </a>
        <a href="#contacto" className="hover:text-white">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
