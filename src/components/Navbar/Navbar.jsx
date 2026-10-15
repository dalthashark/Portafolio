import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Estado para controlar el menú hamburguesa en móviles
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Sección del Logo */}
      <div className="navbar-logo">
        <span className="text-white">Mendoza Chavez</span> <span className="text-cyan">Sebastián</span>
      </div>

      {/* Enlaces de Navegación */}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={() => setIsOpen(false)}>
          Inicio
        </a>
        <a href="#sobre-mi" onClick={() => setIsOpen(false)}>
          Sobre mí
        </a>
        <a href="#tech-stack" onClick={() => setIsOpen(false)}>
          Habilidades
        </a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>
          Proyectos
        </a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>
          Contacto
        </a>
      </div>

      {/* Ícono de Menú Hamburguesa (Solo visible en móviles) */}
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;