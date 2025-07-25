const Footer = () => {
  return (
    <footer id="contacto">
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
