import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="sobre-mi-grid">
          {/* =====================================
              TARJETA 1: PERFIL PROFESIONAL
          ====================================== */}
          <div className="card">
            <div className="card-header">
              {/* Ícono de Usuario (SVG) */}
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>
            <p className="card-text">
              Soy estudiante de Ingeniería de Software, con interés en el
              desarrollo web, la programación y la resolución de problemas
              mediante tecnología.
              <br />
              <br />
              Durante mi formación he trabajado con tecnologías como React,
              JavaScript, HTML, CSS, SQL, Python, Excel y Power BI, además de
              herramientas como Git y GitHub.
              <br />
              <br />
              Me interesa seguir aprendiendo, construir proyectos prácticos y
              fortalecer mis habilidades para desarrollar soluciones útiles,
              eficientes y bien diseñadas.
            </p>
          </div>

          {/* =====================================
              TARJETA 2: EDUCACIÓN
          ====================================== */}
          <div className="card">
            <div className="card-header">
              {/* Ícono de Educación / Sombrero (SVG) */}
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educación</h3>
            </div>

            <div className="timeline">
              {/* Ítem de Educación 1 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Educación primaria y secundaria</h4>
                </div>
                <span className="timeline-date">
                  COLEGIO SANTO DOMINGO DE GUZMÁN
                </span>
              </div>

              {/* Ítem de Educación 2 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Ingeniería Electrónica</h4>
                  <span className="badge badge-outline">Hasta 5.º ciclo</span>
                </div>
                <span className="timeline-date">
                  UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)
                </span>
              </div>

              {/* Ítem de Educación 3 */}
              <div className="timeline-item">
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
