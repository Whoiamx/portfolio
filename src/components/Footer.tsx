const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-[#0f0f2d] px-6 py-10 text-center text-gray-400"
    >
      <p>
        © {new Date().getFullYear()} Gastón Timchuk. Todos los derechos
        reservados.
      </p>
      <div className="mt-4">
        <a href="mailto:gaastontimchuk@gmail.com" className="underline">
          gaastontimchuk@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
