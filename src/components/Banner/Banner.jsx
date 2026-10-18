import './Banner.css';

const Banner = () => {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="status-badge">
            <span className="status-dot"></span>
            Ing. Software con AI
          </p>

          <h1 className="hero-title">
            Hola, soy <span>Sebastián Mendoza Chávez</span>
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
              src="/sebastian-mendoza.jpg"
              alt="Sebastián Mendoza Chávez"
              className="profile-photo"
            />
          </div>
          <p className="hero-photo-caption">Lima, Perú</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;