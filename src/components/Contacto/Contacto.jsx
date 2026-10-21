import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

const Contacto = () => {
  // Estado centralizado para el formulario (Formulario Controlado)
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [cargando, setCargando] = useState(false);

  // Función para manejar los cambios en los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  // Función para simular el envío
  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const templateParams = {
        nombre: formulario.nombre,
        email: formulario.email,
        mensaje: formulario.mensaje,
        // Alias comunes en plantillas de EmailJS
        message: formulario.mensaje,
        name: formulario.nombre,
        from_name: formulario.nombre,
        from_email: formulario.email,
        reply_to: formulario.email
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Gracias por contactarme. Te respondere a la brevedad.',
        icon: 'success',
        confirmButtonColor: '#00d8ff',
        background: '#111a2e',
        color: '#ffffff'
      });

      setFormulario({ nombre: '', email: '', mensaje: '' });

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.',
        icon: 'error',
        confirmButtonColor: '#00d8ff',
        background: '#111a2e',
        color: '#ffffff'
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <header className="contacto-banner-heading">
          <p className="contacto-kicker">CONTACTO / COLABOREMOS</p>
          <h2 className="section-title">Trabajemos Juntos</h2>
        </header>
        <div className="contacto-grid">
          {/* =====================================
              COLUMNA IZQUIERDA: INFORMACIÓN
          ====================================== */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente o necesitas ayuda para automatizar
              tus flujos de trabajo? Me encantaría escucharte.
            </p>
            <div className="info-items">
              {/* Ítem Email */}
              <div className="info-item">
                <div className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Email</span>
                  <a
                    className="item-text"
                    href={`mailto:seba.m.ch.2000@gmail.com?subject=${encodeURIComponent('Contacto desde tu portafolio')}`}
                  >
                    seba.m.ch.2000@gmail.com
                  </a>
                </div>
              </div>

              {/* Ítem Teléfono */}
              <div className="info-item">
                <div className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.92a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">WhatsApp</span>
                  <a
                    className="item-text"
                    href="https://wa.me/51985116736"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +51 985 116 736
                  </a>
                </div>
              </div>

              {/* Ítem Ubicación */}
              <div className="info-item">
                <div className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima - Perú</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">LinkedIn</span>
                  <a
                    className="item-text"
                    href="https://www.linkedin.com/in/sebasti%C3%A1n-julio-mendoza-chavez-aa0477260/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sebastián Mendoza Chávez
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.77S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">GitHub</span>
                  <a
                    className="item-text"
                    href="https://github.com/dalthashark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/dalthashark
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================
              COLUMNA DERECHA: FORMULARIO
          ====================================== */}
          <div className="contacto-form-wrapper">
            <form onSubmit={manejarEnvio} className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={cargando}>
                {cargando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacto;
