import './Banner.css';

const Banner = () => {
  return (
    <section className="hero-section" id="inicio">
      <span className="hero-name-backdrop" aria-hidden="true">
        SEBASTIÁN
      </span>

      <div className="hero-layout">
        <div className="hero-content">
          <p className="status-badge">
            <span className="status-dot" aria-hidden="true"></span>
            Ing. Software con AI
          </p>

          <h1 className="hero-title">
            Hola, soy
            <span>Sebastián Mendoza Chávez</span>
          </h1>

          <h2 className="hero-subtitle">
            Estudiante de Ingeniería de Software con IA
          </h2>

          <p className="hero-description">
            Me interesa crear aplicaciones y soluciones útiles con tecnología.
            Aquí comparto algunos proyectos, lo que voy aprendiendo y mi camino
            en el desarrollo de software.
          </p>

          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Hablemos
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-photo-container">
            <img
              src="/sebastian-mendoza-perfil.png?v=2"
              alt="Sebastián Mendoza Chávez"
              className="profile-photo"
            />
          </div>
        </div>

        <aside className="hero-details" aria-label="Áreas de interés">
          <div className="hero-detail">
            <span className="hero-detail-index">01</span>
            <p>
              <span>Aplicaciones</span>
              Soluciones móviles útiles
            </p>
          </div>
          <div className="hero-detail">
            <span className="hero-detail-index">02</span>
            <p>
              <span>Datos e IA</span>
              Tecnología que aprende
            </p>
          </div>
          <div className="hero-detail">
            <span className="hero-detail-index">03</span>
            <p>
              <span>Prototipos</span>
              Electrónica y automatización
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Banner;