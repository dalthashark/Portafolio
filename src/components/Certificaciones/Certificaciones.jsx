import { useRef, useState } from 'react';
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
  const certificacionesTrackRef = useRef(null);
  const [puedeRetroceder, setPuedeRetroceder] = useState(false);
  const [puedeAvanzar, setPuedeAvanzar] = useState(true);

  const actualizarControles = () => {
    const track = certificacionesTrackRef.current;

    if (!track) {
      return;
    }

    setPuedeRetroceder(track.scrollLeft > 1);
    setPuedeAvanzar(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  };

  const moverCarrusel = (direccion) => {
    const track = certificacionesTrackRef.current;

    if (track) {
      track.scrollBy({
        left: direccion * track.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certificaciones" className="certificaciones-section">
      <div className="certificaciones-container">
        <div className="certificaciones-heading">
          <div className="certificaciones-heading-copy">
            <p className="certificaciones-kicker">FORMACIÓN / CURSOS</p>
            <h2 className="section-title">Certificaciones</h2>
          </div>
          <div
            className="certificaciones-carousel-controls"
            role="group"
            aria-label="Controles de certificaciones"
          >
            <button
              type="button"
              className="certificaciones-carousel-button"
              onClick={() => moverCarrusel(-1)}
              disabled={!puedeRetroceder}
              aria-label="Ver certificaciones anteriores"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="certificaciones-carousel-button"
              onClick={() => moverCarrusel(1)}
              disabled={!puedeAvanzar}
              aria-label="Ver más certificaciones"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="certificaciones-carousel"
          ref={certificacionesTrackRef}
          onScroll={actualizarControles}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Lista de certificaciones"
        >
          {certificaciones.map((certificacion, index) => (
            <article
              className="certificacion-card"
              key={certificacion.archivo}
            >
              <div className="certificacion-content">
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
              </div>
              <div className="certificacion-preview">
                <span className="certificacion-index">{String(index + 1).padStart(2, '0')}</span>
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
