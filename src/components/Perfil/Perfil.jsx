import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <div className="sobre-mi-grid">
          <article className="profile-editorial">
            <p className="editorial-kicker"><span>01</span> SOBRE MÍ</p>
            <h2 className="section-title">Aprender.<br />Construir.<br /><span>Seguir creciendo.</span></h2>
            <div className="profile-copy">
              <p>
              Soy estudiante de Ingeniería de Software, con interés en el
              desarrollo web, la programación y la resolución de problemas
              mediante tecnología.
              </p>
              <p>
              Durante mi formación he trabajado con tecnologías como React,
              JavaScript, HTML, CSS, SQL, Python, Excel y Power BI, además de
              herramientas como Git y GitHub.
              </p>
              <p>
              Me interesa seguir aprendiendo, construir proyectos prácticos y
              fortalecer mis habilidades para desarrollar soluciones útiles,
              eficientes y bien diseñadas.
              </p>
            </div>
          </article>

          <div className="education-editorial">
            <p className="editorial-kicker"><span>02</span> MI FORMACIÓN</p>
            <h3>Educación</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-index">01</span>
                <div className="timeline-header">
                  <h4>Educación primaria y secundaria</h4>
                </div>
                <span className="timeline-date">
                  COLEGIO SANTO DOMINGO DE GUZMÁN
                </span>
              </div>

              <div className="timeline-item">
                <span className="timeline-index">02</span>
                <div className="timeline-header">
                  <h4>Ingeniería Electrónica</h4>
                  <span className="badge badge-outline">Hasta 5.º ciclo</span>
                </div>
                <span className="timeline-date">
                  UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)
                </span>
              </div>

              <div className="timeline-item">
                <span className="timeline-index">03</span>
                <div className="timeline-header">
                  <h4>Ingeniería de Software con IA</h4>
                  <span className="badge badge-outline">En curso · 5.º ciclo</span>
                </div>
                <span className="timeline-date">SENATI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
