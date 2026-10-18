import './Habilidades.css';

const Habilidades = () => {
  // Arreglo de datos: Simulamos la información que podría venir de una API
  const skillsData = [
    {
      id: 2,
      titulo: 'SQL Server / MySQL / PostGreSQL / Oracle',
      descripcion: 'SQL, T-SQL, Optimización, Procedimientos Almacenados.',
      nivel: 'Avanzado',
    },
    {
      id: 3,
      titulo: 'Python for Data Analyst',
      descripcion: 'Pandas, NumPy, Matplotlib, Automatización, Keras.',
      nivel: 'Avanzado',
    },
    {
      id: 4,
      titulo: 'Excel / VBA',
      descripcion: 'Macros, Power Pivot, Power Query, Pivot Tables, Dashboards complejos.',
      nivel: 'Experto',
    },
    {
      id: 5,
      titulo: 'Laravel',
      descripcion: 'Backend Developer',
      nivel: 'Avanzado',
    },
    {
      id: 6,
      titulo: 'React',
      descripcion:
        'Construcción de Interfaces de Usuario Modernas a partir de Componentes',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 9,
      titulo: 'GitHub',
      descripcion: 'Repositorio en la nube.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 10,
      titulo: 'JavaScript',
      descripcion:
        'Lenguaje de programación interpretado, dialecto del estándar ECMAScript.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 11,
      titulo: 'Grid',
      descripcion: 'Contrucción de rejillas responsivas.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 12,
      titulo: 'Flexbox',
      descripcion:
        'Método de diseño de página unidimensional para compaginar elementos en filas o columnas.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 13,
      titulo: 'Machine Learning',
      descripcion: 'Algoritmos y modelos de aprendizaje automático.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 14,
      titulo: 'Aplicaciones móviles',
      descripcion: 'Desarrollo de aplicaciones para dispositivos móviles.',
      nivel: 'Aprendizaje Activo',
    },
    {
      id: 15,
      titulo: 'Inglés',
      descripcion: 'Comprensión y comunicación en situaciones cotidianas.',
      nivel: 'Básico',
    },
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <h2 className="section-title">Habilidades</h2>
        {/* Iteramos sobre el arreglo de datos usando .map() */}
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              {/* Cabecera de la tarjeta: Ícono y Botón */}
              <div className="skill-header">
                <div className="skill-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
              </div>

              {/* Cuerpo de la tarjeta: Textos */}
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
