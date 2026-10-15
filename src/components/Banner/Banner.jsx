import './Banner.css';
import miFoto from '../../assets/portrait-placeholder.svg';

const Banner = () => {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img
            src={miFoto}
            alt="Foto de Perfil"
            className="profile-photo"
          />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          <span className="text-white">Mendoza Chavez</span> <br />
          <span className="text-cyan">Sebastián</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Estudiante de Ingeniería de Software • Frontend • React • SQL •
          Python • Web
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Soy estudiante de Ingeniería de Software con interés en el desarrollo
          web, la lógica de programación y la creación de soluciones prácticas.
          Me gusta aprender nuevas tecnologías y aplicarlas para construir
          proyectos funcionales, ordenados y con buena experiencia de usuario.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">
            Ver Proyectos
          </a>
          <a href="#contacto" className="btn btn-secondary">
            Contáctame
          </a>
        </div>
      </div>

      {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default Banner;