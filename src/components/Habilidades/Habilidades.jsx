import { useState } from 'react';
import './Habilidades.css';

const skillsData = [
  {
    id: 2,
    categoria: 'Bases de datos',
    imagen: '/habilidades/bases-datos.svg',
    titulo: 'SQL: SQL Server, MySQL y PostgreSQL',
    descripcion: 'Consultas SQL y manejo básico de bases de datos relacionales.',
    nivel: 'Básico',
  },
  {
    id: 3,
    categoria: 'Lenguajes de programación',
    imagen: '/habilidades/python.svg',
    titulo: 'Python',
    descripcion: 'Fundamentos de programación y análisis básico de datos.',
    nivel: 'Básico',
  },
  {
    id: 4,
    categoria: 'Herramientas',
    imagen: '/habilidades/excel.svg',
    titulo: 'Excel',
    descripcion: 'Organización de datos, fórmulas y tablas dinámicas.',
    nivel: 'Básico',
  },
  {
    id: 24,
    categoria: 'Herramientas',
    imagen: '/habilidades/power-bi.svg',
    titulo: 'Power BI',
    descripcion: 'Creación de visualizaciones e informes básicos de datos.',
    nivel: 'Básico',
  },
  {
    id: 5,
    categoria: 'Desarrollo web',
    imagen: '/habilidades/laravel.svg',
    titulo: 'Laravel',
    descripcion: 'Primeros pasos en desarrollo backend con Laravel.',
    nivel: 'Básico',
  },
  {
    id: 6,
    categoria: 'Desarrollo web',
    imagen: '/habilidades/react.svg',
    titulo: 'React',
    descripcion: 'Construcción de interfaces con componentes y estado.',
    nivel: 'Básico',
  },
  {
    id: 9,
    categoria: 'Herramientas',
    imagen: '/habilidades/github.svg',
    titulo: 'GitHub',
    descripcion: 'Gestión de repositorios y publicación de proyectos.',
    nivel: 'Básico',
  },
  {
    id: 10,
    categoria: 'Lenguajes de programación',
    imagen: '/habilidades/javascript.svg',
    titulo: 'JavaScript',
    descripcion: 'Fundamentos del lenguaje aplicados a proyectos web.',
    nivel: 'Básico',
  },
  {
    id: 11,
    categoria: 'Desarrollo web',
    imagen: '/habilidades/grid.svg',
    titulo: 'CSS Grid',
    descripcion: 'Distribución de contenido en diseños de cuadrícula.',
    nivel: 'Básico',
  },
  {
    id: 12,
    categoria: 'Desarrollo web',
    imagen: '/habilidades/flexbox.svg',
    titulo: 'CSS Flexbox',
    descripcion: 'Alineación y distribución de elementos en interfaces.',
    nivel: 'Básico',
  },
  {
    id: 13,
    categoria: 'Datos e IA',
    imagen: '/habilidades/machine-learning.svg',
    titulo: 'Machine Learning',
    descripcion: 'Conceptos iniciales de aprendizaje automático.',
    nivel: 'Básico',
  },
  {
    id: 14,
    categoria: 'Herramientas',
    imagen: '/habilidades/mobile.svg',
    titulo: 'Android Studio',
    descripcion: 'Desarrollo y prueba de aplicaciones Android con Java.',
    nivel: 'Básico',
  },
  {
    id: 21,
    categoria: 'Lenguajes de programación',
    imagen: '/habilidades/java.svg',
    titulo: 'Java',
    descripcion: 'Fundamentos aplicados a proyectos de aplicaciones Android.',
    nivel: 'Básico',
  },
  {
    id: 22,
    categoria: 'Bases de datos',
    imagen: '/habilidades/bases-datos.svg',
    titulo: 'SQLite',
    descripcion: 'Almacenamiento local de datos para aplicaciones móviles.',
    nivel: 'Básico',
  },
  {
    id: 23,
    categoria: 'Desarrollo web',
    imagen: '/habilidades/react.svg',
    titulo: 'HTML y CSS',
    descripcion: 'Estructura y estilos para páginas web responsivas.',
    nivel: 'Básico',
  },
  {
    id: 15,
    categoria: 'Idiomas',
    imagen: '/habilidades/english.svg',
    titulo: 'Inglés',
    descripcion: 'Comprensión y comunicación en situaciones cotidianas.',
    nivel: 'Básico',
  },
  {
    id: 16,
    categoria: 'Hardware',
    imagen: '/habilidades/ensamblaje.svg',
    titulo: 'Ensamblaje de computadoras',
    descripcion: 'Selección e instalación de componentes de hardware.',
    nivel: 'Básico',
  },
  {
    id: 17,
    categoria: 'Hardware',
    imagen: '/habilidades/mantenimiento.svg',
    titulo: 'Mantenimiento de computadoras',
    descripcion: 'Mantenimiento preventivo y revisión de equipos.',
    nivel: 'Básico',
  },
  {
    id: 18,
    categoria: 'Hardware',
    imagen: '/habilidades/electronica-basica.svg',
    titulo: 'Electrónica básica',
    descripcion: 'Conocimientos básicos de circuitos y componentes electrónicos.',
    nivel: 'Básico',
  },
  {
    id: 19,
    categoria: 'Lenguajes de programación',
    imagen: '/habilidades/cpp.svg',
    titulo: 'C++',
    descripcion: 'Fundamentos aplicados a la programación de proyectos en Tinkercad.',
    nivel: 'Básico',
  },
  {
    id: 20,
    categoria: 'Hardware',
    imagen: '/habilidades/arduino.svg',
    titulo: 'Arduino',
    descripcion: 'Prototipado de circuitos con sensores y componentes electrónicos.',
    nivel: 'Básico',
  },
];

const categorias = [
  'Lenguajes de programación',
  'Bases de datos',
  'Desarrollo web',
  'Datos e IA',
  'Hardware',
  'Herramientas',
  'Idiomas',
];

const Habilidades = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0]);
  const [habilidadSeleccionada, setHabilidadSeleccionada] = useState(10);
  const habilidadesVisibles = skillsData.filter(
    (skill) => skill.categoria === categoriaSeleccionada,
  );
  const habilidadActiva =
    habilidadesVisibles.find((skill) => skill.id === habilidadSeleccionada) ??
    habilidadesVisibles[0];

  const seleccionarCategoria = (categoria) => {
    const primeraHabilidad = skillsData.find((skill) => skill.categoria === categoria);
    setCategoriaSeleccionada(categoria);
    setHabilidadSeleccionada(primeraHabilidad.id);
  };

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <header className="skills-intro">
          <div>
            <p className="skills-kicker">SKILLS / TECNOLOGÍAS</p>
            <h2 className="skills-title">Tecnologías que uso</h2>
          </div>
          <p className="skills-summary">
            Explora las herramientas y conocimientos que voy desarrollando.
          </p>
        </header>

        <div className="skills-dashboard">
          <nav className="skills-categories" aria-label="Categorías de habilidades">
            <p className="skills-panel-label">ÁREAS</p>
            {categorias.map((categoria) => {
              const cantidad = skillsData.filter(
                (skill) => skill.categoria === categoria,
              ).length;
              const activa = categoria === categoriaSeleccionada;

              return (
                <button
                  key={categoria}
                  type="button"
                  className={`skills-category${activa ? ' active' : ''}`}
                  onClick={() => seleccionarCategoria(categoria)}
                  aria-pressed={activa}
                >
                  <span className="skills-category-mark" aria-hidden="true" />
                  <span>{categoria}</span>
                  <span className="skills-category-count">{cantidad}</span>
                </button>
              );
            })}
          </nav>

          <div
            className="skills-workspace"
            role="region"
            aria-label={`Habilidades de ${categoriaSeleccionada}`}
          >
            <div className="skills-workspace-heading">
              <div>
                <p className="skills-panel-label">CATEGORÍA SELECCIONADA</p>
                <h3>{categoriaSeleccionada}</h3>
              </div>
              <span className="skills-result-count">
                {String(habilidadesVisibles.length).padStart(2, '0')} HABILIDADES
              </span>
            </div>

            <div className="skills-grid">
              {habilidadesVisibles.map((skill) => {
                const activa = skill.id === habilidadActiva.id;

                return (
                  <button
                    key={skill.id}
                    type="button"
                    className={`skill-tile${activa ? ' active' : ''}`}
                    onClick={() => setHabilidadSeleccionada(skill.id)}
                    aria-pressed={activa}
                  >
                    <span className="skill-tile-icon">
                      <img src={skill.imagen} alt="" />
                    </span>
                    <span className="skill-tile-title">{skill.titulo}</span>
                  </button>
                );
              })}
            </div>

            <div className="skills-proficiency">
              <span>NIVEL DECLARADO</span>
              <span className="skills-proficiency-line" aria-hidden="true" />
              <strong>{habilidadActiva.nivel}</strong>
            </div>
          </div>

          <aside className="skills-feature" aria-live="polite">
            <div className="skills-orbit" aria-hidden="true">
              <span className="skills-orbit-ring skills-orbit-ring-outer" />
              <span className="skills-orbit-ring skills-orbit-ring-inner" />
              <img src={habilidadActiva.imagen} alt="" />
            </div>
            <p className="skills-feature-label">EN FOCO</p>
            <h3>{habilidadActiva.titulo}</h3>
            <p className="skills-feature-description">
              {habilidadActiva.descripcion}
            </p>
            <span className="skills-feature-level">{habilidadActiva.nivel}</span>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
