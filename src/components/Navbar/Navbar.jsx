import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Estado para controlar el menú hamburguesa en móviles
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <nav className="navbar">
      {/* Sección del Logo */}
      <a className="navbar-logo" href="#inicio">
        <span>Sebastián Mendoza Chávez</span>
        <span className="navbar-logo-caption">Ing. Software con AI</span>
      </a>

      {/* Enlaces de Navegación */}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={() => setIsOpen(false)}>
          Inicio
        </a>
        <a href="#sobre-mi" onClick={() => setIsOpen(false)}>
          Sobre mí
        </a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>
          Proyectos
        </a>
        <a href="#tech-stack" onClick={() => setIsOpen(false)}>
          Habilidades
        </a>
        <a href="#certificaciones" onClick={() => setIsOpen(false)}>
          Certificaciones
        </a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>
          Contacto
        </a>
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
        title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      >
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" />
          </svg>
        )}
      </button>

      {/* Ícono de Menú Hamburguesa (Solo visible en móviles) */}
      <button
        type="button"
        className="navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;