import "../App.css";
import "./Sistemas.css";

import ModeloEstrellaImg from "../assets/ModeloEstrella.PNG"; 

function Sistemas() {
  return (
    <div className="layout-claro">
      <header className="hero-cielo">
        <div className="hero-content">
          <span className="badge-redes">Análisis y Procesamiento de Datos</span>
          <h1>Plataforma Analítica E-Commerce</h1>
          <p>
            Proyecto de procesamiento y modelado de datos para e-commerce. Implementación de la 
            arquitectura Medallion (Bronze, Silver, Gold) en Databricks con PySpark, 
            diseño de modelo relacional en estrella y visualización de indicadores clave en Power BI.
          </p>

          <div className="project-buttons" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
          <a
            href={`${import.meta.env.BASE_URL}documentos/Gold.pbix`}
            download="Gold.pbix"
            className="btnSecondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
               Descargar Presentación / Informe PDF
            </a>
          </div>
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

      <main className="main-content">
        <div className="content-grid">
          
          {/* seccion izquierda  */}
          <section className="feed-section">
            
            {/*  Medallion */}
            <article className="post-card">
              <h4 className="section-label">ARQUITECTURA DE DATOS</h4>
              <h2>Pipeline Medallion (Bronze, Silver, Gold)</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div>
                  <strong style={{ display: 'block', color: '#1e293b', marginBottom: '0.2rem' }}>Capa Bronze</strong>
                  <p style={{ margin: 0, color: '#475569', lineHeight: '1.5' }}>Ingesta de los datos transaccionales crudos del e-commerce.</p>
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#1e293b', marginBottom: '0.2rem' }}>Capa Silver</strong>
                  <p style={{ margin: 0, color: '#475569', lineHeight: '1.5' }}>Limpieza, estandarización de esquemas y eliminación de inconsistencias usando PySpark en Databricks.</p>
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#1e293b', marginBottom: '0.2rem' }}>Capa Gold</strong>
                  <p style={{ margin: 0, color: '#475569', lineHeight: '1.5' }}>Estructuración de datos procesados e información lista para alimentar reportes de negocio.</p>
                </div>
              </div>
            </article>

            {/* Modelado Dimensional */}
            <article className="post-card">
              <h4 className="section-label">DISEÑO DE DATOS</h4>
              <h2>Modelo en Estrella (Star Schema)</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div>
                  <strong style={{ display: 'block', color: '#1e293b', marginBottom: '0.2rem' }}>Tabla de Hechos</strong>
                  <p style={{ margin: 0, color: '#475569', lineHeight: '1.5' }}>Registro central de métricas de pedidos, precios, fletes y puntajes de calificación.</p>
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#1e293b', marginBottom: '0.2rem' }}>Tablas Dimensionales</strong>
                  <p style={{ margin: 0, color: '#475569', lineHeight: '1.5' }}>Desglose por vendedores, productos, ubicación geográfica, tiempo y métodos de pago.</p>
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#1e293b', marginBottom: '0.2rem' }}>Tabla de Medidas</strong>
                  <p style={{ margin: 0, color: '#475569', lineHeight: '1.5' }}>Organización de cálculos DAX personalizados para el análisis analítico.</p>
                </div>
              </div>
            </article>

            {/* Power BI */}
            <article className="post-card">
              <h4 className="section-label">BUSINESS INTELLIGENCE</h4>
              <h2>Visualización e Indicadores en Power BI</h2>
              <p className="post-excerpt">
                Importación y conexión del modelo de datos estructurado hacia Power BI para la construcción de reportes interactivos, analizando ventas por región, desempeño de vendedores y canales de pago.
              </p>
            </article>

            {/* Imag Modelo Estrella */}
            <article className="post-card" style={{ borderBottom: 'none' }}>
              <h4 className="section-label">DIAGRAMA RELACIONAL</h4>
              <h2>Esquema del Modelo Estrella</h2>
              <p className="post-excerpt">
                Estructura visual de las tablas de hechos y dimensiones interconectadas en Power BI:
              </p>
              <div className="code-preview-container" style={{ marginTop: '1.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <img
                  src={ModeloEstrellaImg}
                  alt="Modelo Estrella E-commerce Power BI"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            </article>

          </section>

          {/* derecha*/}
          <aside className="sidebar">
            
          
            <div className="widget card-section" style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h4 className="section-label" style={{ marginBottom: '1rem' }}>TECNOLOGÍAS CLAVE</h4>
              <div className="tags-container">
                <span className="pill-tag">Databricks</span>
                <span className="pill-tag">PySpark</span>
                <span className="pill-tag">SQL</span>
                <span className="pill-tag">Power BI</span>
                <span className="pill-tag">DAX</span>
                <span className="pill-tag">Star Schema</span>
                <span className="pill-tag">Medallion</span>
              </div>
            </div>

            

          </aside>

        </div>
      </main>
    </div>
  );
}

export default Sistemas;