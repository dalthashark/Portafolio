import './Certificaciones.css';

const certificaciones = [
  {
    nombre: 'Computer Hardware Basics',
    institucion: 'SENATI',
    archivo: '/certificados/computer-hardware-basics-senati.pdf',
    vistaPrevia: '/certificados/previews/computer-hardware-basics-senati.jpg',
  },
  {
    nombre: 'Introduction to Cybersecurity',
    institucion: 'SENATI',
    archivo: '/certificados/introduction-to-cybersecurity-senati.pdf',
    vistaPrevia: '/certificados/previews/introduction-to-cybersecurity-senati.jpg',
  },
  {
    nombre: 'Introduction to Data Science',
    institucion: 'SENATI',
    archivo: '/certificados/introduction-to-data-science-senati.pdf',
    vistaPrevia: '/certificados/previews/introduction-to-data-science-senati.jpg',
  },
  {
    nombre: 'Introduction to IoT',
    institucion: 'SENATI',
    archivo: '/certificados/introduction-to-iot-senati.pdf',
    vistaPrevia: '/certificados/previews/introduction-to-iot-senati.jpg',
  },
  {
    nombre: 'Networking Basics',
    institucion: 'SENATI',
    archivo: '/certificados/networking-basics-senati.pdf',
    vistaPrevia: '/certificados/previews/networking-basics-senati.jpg',
  },
  {
    nombre: 'Python Essentials 1',
    institucion: 'SENATI',
    archivo: '/certificados/python-essentials-1-senati.pdf',
    vistaPrevia: '/certificados/previews/python-essentials-1-senati.jpg',
  },
];

const Certificaciones = () => {
  return (
    <section id="certificaciones" className="certificaciones-section">
      <div className="certificaciones-container">
        <h2 className="section-title">Certificaciones</h2>
        <div className="certificaciones-grid">
          {certificaciones.map((certificacion) => (
            <article
              className="certificacion-card"
              key={certificacion.archivo}
            >
              <div className="certificacion-header">
                <div className="certificacion-icon" aria-hidden="true">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="8" y1="13" x2="16" y2="13"></line>
                    <line x1="8" y1="17" x2="16" y2="17"></line>
                  </svg>
                </div>
                <a
                  className="certificacion-link"
                  href={certificacion.archivo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver certificado
                </a>
              </div>
              <div className="certificacion-info">
                <h3>{certificacion.nombre}</h3>
                <p>{certificacion.institucion}</p>
              </div>
              <div className="certificacion-preview">
                <img
                  src={certificacion.vistaPrevia}
                  alt={`Vista previa del certificado ${certificacion.nombre}`}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificaciones;
