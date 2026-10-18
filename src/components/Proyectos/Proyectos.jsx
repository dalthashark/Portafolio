import { useRef, useState } from 'react';
import './Proyectos.css';

const Proyectos = () => {
  const proyectosTrackRef = useRef(null);
  const [puedeRetroceder, setPuedeRetroceder] = useState(false);
  const [puedeAvanzar, setPuedeAvanzar] = useState(true);

  const actualizarControles = () => {
    const track = proyectosTrackRef.current;

    if (!track) {
      return;
    }

    setPuedeRetroceder(track.scrollLeft > 1);
    setPuedeAvanzar(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  };

  const moverCarrusel = (direccion) => {
    const track = proyectosTrackRef.current;

    if (track) {
      track.scrollBy({
        left: direccion * track.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  // Arreglo de proyectos (Simulando una base de datos o API)
  const proyectosData = [
    {
      id: 5,
      imagen: '/proyectos/data-lab-hardware.svg',
      titulo: 'DataLab Hardware Validation',
      categoria: 'Herramienta de diagnóstico',
      descripcion:
        'Herramienta CLI en PowerShell para validar componentes y conexiones de hardware antes y después del mantenimiento, con comprobaciones de red, periféricos, audio, cámara y energía.',
      tecnologias: ['PowerShell', 'Windows', 'Hardware QA', 'Diagnóstico'],
      linkDemo: null,
      linkCodigo: 'https://github.com/dalthashark/DataLab-Hardware-Validation',
    },
    {
      id: 1,
      imagen: '/proyectos/app-tareas-login.png',
      titulo: 'App de Gestión de Tareas',
      categoria: 'Aplicación móvil',
      descripcion:
        'Aplicación Android para organizar actividades diarias: permite registrarse e iniciar sesión, crear, editar y eliminar tareas, y filtrarlas por estado (pendientes, en progreso o completadas). Los datos se guardan localmente para poder consultarlos sin conexión.',
      tecnologias: ['Java', 'Android Studio', 'SQLite', 'XML', 'Material Design 3'],
      linkDemo: null,
      linkCodigo: 'https://github.com/dalthashark/appTareas',
      esAplicacionMovil: true,
    },
    {
      id: 2,
      imagen: '/proyectos/ecoreg.svg',
      titulo: 'EcoReg - Gestión de Residuos',
      categoria: 'Aplicación móvil',
      descripcion:
        'Aplicación móvil offline-first para digitalizar la recolección de residuos. Los operarios pueden iniciar sesión, registrar el tipo y peso de los residuos, consultar los registros del día y revisar historiales y reportes mensuales.',
      tecnologias: [
        'Java',
        'Android',
        'SQLite',
        'Retrofit',
        'Node.js',
        'Express',
        'MongoDB',
      ],
      linkDemo: null,
      linkCodigo: 'https://github.com/dalthashark/appAlicomProMax',
      esAplicacionMovil: true,
    },
    {
      id: 3,
      imagen: '/proyectos/arduino-keypad-lcd-servo.png',
      titulo: 'Circuito interactivo con Arduino',
      categoria: 'Prototipo electrónico',
      descripcion:
        'Simulación de un circuito con Arduino UNO, teclado matricial 4×4, pantalla LCD, servomotor y buzzer. El proyecto muestra cómo integrar estos componentes en un prototipo electrónico interactivo.',
      tecnologias: [
        'Arduino UNO',
        'Teclado matricial 4×4',
        'Pantalla LCD',
        'Servomotor',
        'Buzzer',
        'Tinkercad',
      ],
      linkDemo:
        'https://www.tinkercad.com/things/leToStnasP1/editel?sharecode=Ilo1zBeZOuc3GDPOBuum40grkvuLgBDdxG0LgGskB7M',
      textoDemo: 'Ver circuito Tinkercad',
      linkCodigo: null,
      esCircuito: true,
    },
    {
      id: 4,
      imagen: '/proyectos/arduino-office-pir-lcd.png',
      titulo: 'Sistema de detección para oficina',
      categoria: 'Prototipo electrónico',
      descripcion:
        'Prototipo de automatización con Arduino para detectar movimiento mediante un sensor PIR y mostrar información en una pantalla LCD, con una alerta sonora mediante buzzer.',
      tecnologias: [
        'Arduino UNO',
        'Sensor PIR',
        'Pantalla LCD',
        'Buzzer',
        'Tinkercad',
      ],
      linkDemo:
        'https://www.tinkercad.com/things/5C75XN3sfPt-grupo-3-oficina/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard&sharecode=NLvkJETw2bR7wzmw8UhansSpyZAubrEeuRjmSxt68pQ',
      textoDemo: 'Ver circuito Tinkercad',
      linkCodigo: null,
      esCircuito: true,
    },
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <div className="proyectos-heading">
          <div className="proyectos-heading-copy">
            <p className="proyectos-kicker">PORTAFOLIO / SELECCIÓN</p>
            <h2 className="section-title">Proyectos</h2>
          </div>
          <div className="proyectos-carousel-controls" role="group" aria-label="Controles de proyectos">
            <button
              type="button"
              className="proyectos-carousel-button"
              onClick={() => moverCarrusel(-1)}
              disabled={!puedeRetroceder}
              aria-label="Ver proyectos anteriores"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="proyectos-carousel-button"
              onClick={() => moverCarrusel(1)}
              disabled={!puedeAvanzar}
              aria-label="Ver más proyectos"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="proyectos-carousel"
          ref={proyectosTrackRef}
          onScroll={actualizarControles}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Lista de proyectos destacados"
        >
          {proyectosData.map((proyecto, index) => (
            <article key={proyecto.id} className="proyecto-card">
              {/* 1. Imagen del Proyecto */}
              <div
                className={`proyecto-imagen ${
                  proyecto.esAplicacionMovil
                    ? 'proyecto-imagen-app'
                    : proyecto.esCircuito
                      ? 'proyecto-imagen-circuito'
                      : ''
                }`}
              >
                <span className="proyecto-index">{String(index + 1).padStart(2, '0')}</span>
                <img
                  src={proyecto.imagen}
                  alt={`Imagen representativa de ${proyecto.titulo}`}
                />
              </div>

              {/* 2. Contenido de la Tarjeta */}
              <div className="proyecto-contenido">
                <p className="proyecto-category">
                  {proyecto.categoria}
                </p>
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                {/* 3. Etiquetas de Tecnologías (Mapeo Anidado) */}
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 4. Botones de Acción */}
                <div className="proyecto-links">
                  {proyecto.linkDemo && (
                    <a
                      href={proyecto.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-proyecto btn-demo"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      {proyecto.textoDemo || 'Demo en Vivo'}
                    </a>
                  )}
                  {proyecto.linkCodigo && (
                    <a
                      href={proyecto.linkCodigo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-proyecto btn-codigo"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.77S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
