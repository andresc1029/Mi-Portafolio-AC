import "../App.css";
import "./DesarrolloWeb.css";
import JwtCodeImg from "../assets/jwt.png"; 
import GithubIcon from "../assets/iconos/InconoGitHub.png";

function DesarrolloWeb() {
  return (
    <div className="layout-claro">
      {/* 1. HERO SUPERIOR FONDO AZUL Y SEPARACION */}
      <header className="hero-cielo">
        <div className="hero-content">
          <span className="badge-redes">Proyecto Destacado</span>
          <h1>La Cúpula</h1>
          <p>
            Aplicación web desarrollada en ASP.NET Core (C#) con arquitectura
            desacoplada (Cliente y API REST) orientada a la resolución interactiva y
            seguimiento de ejercicios matemáticos.
          </p>

          <div className="project-buttons" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <button
              className="btnSecondary"
              onClick={() =>
                window.open(
                  "https://github.com/andresc1029/ApiMatematicas",
                  "_blank"
                )
              }
            >
              <img src={GithubIcon} alt="GitHub" className="icon" />
              Repositorio API
            </button>

            <button
              className="btnSecondary"
              onClick={() =>
                window.open(
                  "https://github.com/andresc1029/WebMatematica",
                  "_blank"
                )
              }
            >
              <img src={GithubIcon} alt="GitHub" className="icon" />
              Repositorio Web
            </button>
          </div>
        </div>

        {/* Onda SVG divisora */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path 
              fill="#ffffff" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
            </path>
          </svg>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL EN DOS COLUMNAS */}
      <main className="main-content">
        <div className="content-grid">
          
          {/* uncionalidades Principales y Código */}
          <section className="feed-section">
            
            {/*  Cliente */}
            <article className="post-card">
              <h4 className="section-label">CLIENTE / FRONTEND</h4>
              <h2>Web App interactiva</h2>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>✓ Login de usuarios autenticado mediante tokens JWT.</li>
                <li>✓ Validación en tiempo real de respuestas matemáticas.</li>
                <li>✓ Generación aleatoria de ejercicios consumiendo la API REST.</li>
                <li>✓ Persistencia del estado en el navegador vía LocalStorage.</li>
                <li>✓ Interfaz totalmente responsiva y feedback inmediato (Correcto / Incorrecto).</li>
              </ul>
            </article>

            {/*  API REST */}
            <article className="post-card">
              <h4 className="section-label">BACKEND / API REST</h4>
              <h2>Gestión de Usuarios y Seguridad</h2>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>✓ <strong>Gestión de Usuarios:</strong> Registro con validación de duplicados, roles (Admin/Usuario) y desactivación de cuentas.</li>
                <li>✓ <strong>Recuperación:</strong> Envío de correos SMTP automatizados con MailKit.</li>
                <li>✓ <strong>Seguridad:</strong> Autenticación JWT, contraseñas hasheadas con BCrypt y políticas CORS configuradas.</li>
                <li>✓ <strong>Rachas:</strong> Seguimiento en tiempo real del progreso de aprendizaje del estudiante.</li>
              </ul>
            </article>

            {/*  Cloud & Base de Datos */}
            <article className="post-card">
              <h4 className="section-label">INFRAESTRUCTURA DE DATOS</h4>
              <h2>Base de Datos en la Nube</h2>
              <p className="post-excerpt">
                Inicialmente diseñada en SQL Server con migración mediante <strong>Entity Framework Code First</strong>. Actualmente se encuentra desplegada en la nube utilizando <strong>Supabase (PostgreSQL)</strong> para garantizar persistencia accesible y de alta disponibilidad para los usuarios y sus rachas desde la API REST.
              </p>
            </article>

            {/* Código JWT */}
            <article className="post-card" style={{ borderBottom: 'none' }}>
              <h4 className="section-label">SEGURIDAD BACKEND</h4>
              <h2>Implementación de Autenticación JWT en C#</h2>
              <p className="post-excerpt">
                Vista previa del controlador de inicio de sesión y la estrategia de generación de tokens utilizando Claims y llaves simétricas:
              </p>
              <div className="code-preview-container" style={{ marginTop: '1.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <img
                  src={JwtCodeImg}
                  alt="Código C# Autenticación JWT"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            </article>

          </section>

          {/* Sidebar con Tecnologías y Estructura */}
          <aside className="sidebar">
            
            {/* Widget de Stack */}
            <div className="widget card-section" style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h4 className="section-label" style={{ marginBottom: '1rem' }}>TECNOLOGÍAS CLAVE</h4>
              <div className="tags-container">
                <span className="pill-tag">ASP.NET Core 8</span>
                <span className="pill-tag">C#</span>
                <span className="pill-tag">Entity Framework</span>
                <span className="pill-tag">Supabase</span>
                <span className="pill-tag">SQL Server</span>
                <span className="pill-tag">JWT</span>
                <span className="pill-tag">MailKit</span>
                <span className="pill-tag">Strategy Pattern</span>
              </div>
            </div>

            {/* Widget de Estructura de la API */}
            <div className="widget card-section mt-4" style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', marginTop: '1.5rem' }}>
              <h4 className="section-label" style={{ marginBottom: '1rem' }}>ESTRUCTURA DE LA API</h4>
              <pre className="folder-tree" style={{ fontSize: '0.85rem', color: '#334155', background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', overflowX: 'auto' }}>
{`┣ Clases
┣ Controllers
┣ Data
┣ DTOs
┣ JSON
┣ Models
┣ Strategies
┣ Services
┣ Program.cs
┣ appsettings.json
┗ ApiMatematicas.csproj`}
              </pre>
            </div>

          </aside>

        </div>
      </main>
    </div>
  );
}

export default DesarrolloWeb;