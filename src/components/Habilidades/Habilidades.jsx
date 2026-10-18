import { useRef, useState } from 'react';
import './Habilidades.css';

const Habilidades = () => {
  const habilidadesTrackRef = useRef(null);
  const [puedeRetroceder, setPuedeRetroceder] = useState(false);
  const [puedeAvanzar, setPuedeAvanzar] = useState(true);

  const actualizarControles = () => {
    const track = habilidadesTrackRef.current;

    if (!track) {
      return;
    }

    setPuedeRetroceder(track.scrollLeft > 1);
    setPuedeAvanzar(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  };

  const moverCarrusel = (direccion) => {
    const track = habilidadesTrackRef.current;

    if (track) {
      track.scrollBy({
        left: direccion * track.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  // Arreglo de datos: Simulamos la información que podría venir de una API
  const skillsData = [
    {
      id: 2,
      imagen: '/habilidades/bases-datos.svg',
      titulo: 'SQL Server / MySQL / PostGreSQL / Oracle',
      descripcion: 'SQL, T-SQL, Optimización, Procedimientos Almacenados.',
      nivel: 'Avanzado',
    },
    {
      id: 3,
      imagen: '/habilidades/python.svg',
      titulo: 'Python for Data Analyst',
      descripcion: 'Pandas, NumPy, Matplotlib, Automatización, Keras.',
      nivel: 'Avanzado',
    },
    {
      id: 4,
      imagen: '/habilidades/excel.svg',
      titulo: 'Excel / VBA',
      descripcion: 'Macros, Power Pivot, Power Query, Pivot Tables, Dashboards complejos.',
      nivel: 'Experto',
    },
    {
      id: 5,
      imagen: '/habilidades/laravel.svg',
      titulo: 'Laravel',
      descripcion: 'Backend Developer',
      nivel: 'Avanzado',
    },
    {
      id: 6,
      imagen: '/habilidades/react.svg',
      titulo: 'React',
      descripcion:
        'Construcción de Interfaces de Usuario Modernas a partir de Componentes',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 9,
      imagen: '/habilidades/github.svg',
      titulo: 'GitHub',
      descripcion: 'Repositorio en la nube.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 10,
      imagen: '/habilidades/javascript.svg',
      titulo: 'JavaScript',
      descripcion:
        'Lenguaje de programación interpretado, dialecto del estándar ECMAScript.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 11,
      imagen: '/habilidades/grid.svg',
      titulo: 'Grid',
      descripcion: 'Contrucción de rejillas responsivas.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 12,
      imagen: '/habilidades/flexbox.svg',
      titulo: 'Flexbox',
      descripcion:
        'Método de diseño de página unidimensional para compaginar elementos en filas o columnas.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 13,
      imagen: '/habilidades/machine-learning.svg',
      titulo: 'Machine Learning',
      descripcion: 'Algoritmos y modelos de aprendizaje automático.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 14,
      imagen: '/habilidades/mobile.svg',
      titulo: 'Aplicaciones móviles',
      descripcion: 'Desarrollo de aplicaciones para dispositivos móviles.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 15,
      imagen: '/habilidades/english.svg',
      titulo: 'Inglés',
      descripcion: 'Comprensión y comunicación en situaciones cotidianas.',
      nivel: 'Básico',
    },
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <div className="habilidades-heading">
          <h2 className="section-title">Habilidades</h2>
          <div
            className="habilidades-carousel-controls"
            role="group"
            aria-label="Controles de habilidades"
          >
            <button
              type="button"
              className="habilidades-carousel-button"
              onClick={() => moverCarrusel(-1)}
              disabled={!puedeRetroceder}
              aria-label="Ver habilidades anteriores"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="habilidades-carousel-button"
              onClick={() => moverCarrusel(1)}
              disabled={!puedeAvanzar}
              aria-label="Ver más habilidades"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="habilidades-carousel"
          ref={habilidadesTrackRef}
          onScroll={actualizarControles}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Lista de habilidades"
        >
          {skillsData.map((skill) => (
            <article key={skill.id} className="skill-card">
              <div className="skill-image">
                <img src={skill.imagen} alt="" loading="lazy" />
              </div>
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
