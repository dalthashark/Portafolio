import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="brand-name">Mendoza Chavez</span>
          <span className="brand-accent">Sebastián</span>
        </div>

        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#tech-stack">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>

        <p className="footer-copy">© 2025 Sebastián Mendoza Chávez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
