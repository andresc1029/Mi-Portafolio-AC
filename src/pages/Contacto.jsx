import { useState } from "react";
import "../App.css";
import "./Contacto.css";
import GithubIcon from "../assets/iconos/InconoGitHub.png";

function Contacto() {
  //  mensaje flotante de copiado
  const [copiarMensaje, setCopiarMensaje] = useState("");

  const handleCopiar = (texto, tipo) => {
    navigator.clipboard.writeText(texto);
    setCopiarMensaje(`${tipo} copiado!`);
    
    // Ocultar  mensaje después de 2 segundos
    setTimeout(() => {
      setCopiarMensaje("");
    }, 2000);
  };

  return (
    <div className="layout-claro">
      {/* Notificación flotante */}
      {copiarMensaje && (
        <div className="toast-copiado">
          {copiarMensaje}
        </div>
      )}

      {/* Hero Superior */}
      <header className="hero-cielo">
        <div className="hero-content">
          <span className="badge-redes">Contacto</span>
          <h1>¿Hablamos de un proyecto?</h1>
          <p>
            Estoy abierto a oportunidades profesionales, colaboraciones en desarrollo backend 
            o proyectos de infraestructura y bases de datos.
          </p>
        </div>

        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path 
              fill="#ffffff" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
            </path>
          </svg>
        </div>
      </header>

      {/* Contenido principal de contacto */}
      <main className="main-content">
        <div className="content-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          
          {/* Información y canales directos */}
          <section className="feed-section">
            <article className="post-card" style={{ borderBottom: 'none' }}>
              <h4 className="section-label">MEDIOS DIRECTOS</h4>
              <h2>Información de Contacto</h2>
              <p className="post-excerpt" style={{ marginBottom: '2rem' }}>
                Haz clic en cualquier opción para copiarla al instante. ¡Respondo con agilidad!
              </p>

              <div className="contact-cards-list">
                
                {/* Correo */}
                <div 
                  className="contact-item" 
                  onClick={() => handleCopiar("kevincuesta.2710@gmail.com", "Correo")}
                >
                  <div className="contact-icon">📧</div>
                  <div>
                    <span className="contact-label">Correo Electrónico (Clic para copiar)</span>
                    <span className="contact-value">kevincuesta.2710@gmail.com</span>
                  </div>
                </div>

                {/* Teléfono */}
                <div 
                  className="contact-item" 
                  onClick={() => handleCopiar("+573184516104", "Número")}
                >
                  <div className="contact-icon">📱</div>
                  <div>
                    <span className="contact-label">Teléfono / WhatsApp (Clic para copiar)</span>
                    <span className="contact-value">+57 318 451 6104</span>
                  </div>
                </div>

                {/* Ubicación */}
                <div 
                  className="contact-item" 
                  onClick={() => handleCopiar("Medellín - Colombia (Barrio La Libertad)", "Ubicación")}
                >
                  <div className="contact-icon">📍</div>
                  <div>
                    <span className="contact-label">Ubicación (Clic para copiar)</span>
                    <span className="contact-value">Medellín - Colombia (Barrio La Libertad)</span>
                  </div>
                </div>

              </div>
            </article>
          </section>

          {/* Tarjeta lateral con llamada a acción rápida */}
          <aside className="sidebar">
            <div className="widget card-section" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h4 className="section-label" style={{ marginBottom: '1rem' }}>REDES PROFESIONALES</h4>
              <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '1rem' }}>Explora mi código</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Revisa los repositorios de mis proyectos en C#, ASP.NET Core, bases de datos y configuraciones de redes en GitHub.
              </p>
              
              <button
                className="btnPrimary"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                onClick={() => window.open("https://github.com/andresc1029", "_blank")}
              >
                <img src={GithubIcon} alt="GitHub" className="icon" />
                Ver Perfil de GitHub
              </button>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

export default Contacto;

