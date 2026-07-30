import './Redes.css';

const Redes = () => {
  return (
    <div className="layout-claro">
      {/* 1. HERO SUPERIOR CON FONDO AZUL CIELO Y ONDA */}
      <header className="hero-cielo">
        <div className="hero-content">
          <span className="badge-redes">Infraestructura & Servidores</span>
          <h1>Implementación de Entorno Corporativo</h1>
          <p>
            Diseño, configuración y despliegue de una arquitectura de red local simulada utilizando 
            <strong> Windows Server 2022</strong>, centralizando identidades y servicios.
          </p>
        </div>
        
        {/* Onda divisora SVG */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path 
              fill="#ffffff" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z">
            </path>
          </svg>
        </div>
      </header>

      {/* 2. CONTENIDO PRINCIPAL EN DOS COLUMNAS (Estilo Josh Comeau) */}
      <main className="main-content">
        <div className="content-grid">
          
          {/* COLUMNA IZQUIERDA: Artículos / Servicios Desplegados */}
          <section className="feed-section">
            
            {/* Topología Cisco */}
            <article className="post-card">
              <h4 className="section-label">TOPOLOGÍA Y REDES</h4>
              <h2>Enrutamiento y Segmentación (Cisco)</h2>
              
              <p className="post-excerpt">
                Diseño previo de la red utilizando equipos y simuladores Cisco, estableciendo la conectividad 
                base mediante enrutamiento estático/dinámico y segmentación para garantizar la comunicación fluida entre el servidor y los clientes.
              </p>
              <ul className="feature-list">
                <li>✓ Configuración de interfaces y rutas.</li>
                <li>✓ Control de tráfico base para el entorno corporativo.</li>
                <li>✓ Implementación de adaptadores puente (Bridge).</li>
              </ul>
            </article>

            {/* Active Directory & DNS */}
            <article className="post-card">
              <h4 className="section-label">DIRECTORIO ACTIVO</h4>
              <h2>Active Directory & DNS</h2>
           
              <p className="post-excerpt">
                Creación y gestión de un nuevo bosque y dominio local (<code>.local</code>), configurando Zonas de Búsqueda Directa y uniendo equipos cliente Windows 10 Pro al dominio.
              </p>
            </article>

            {/* DHCP & IIS */}
            <article className="post-card">
              <h4 className="section-label">SERVICIOS WEB Y RED</h4>
              <h2>Servidor DHCP & Web Server (IIS)</h2>
            
              <p className="post-excerpt">
                Configuración de un nuevo Scope IPv4 para asignación de IPs e instalación de roles Web Server integrados con .NET Core 8.0 mediante Application Pools.
              </p>
            </article>

            {/* Mail Server */}
            <article className="post-card">
              <h4 className="section-label">COMUNICACIÓN</h4>
              <h2>Servidor de Correo Local</h2>
             
              <p className="post-excerpt">
                Implementación de hMailServer vinculado al dominio DNS local, apertura de puertos en Windows Defender Firewall y pruebas con Thunderbird.
              </p>
            </article>

            {/* Bloque de Descarga integrado */}
            <div className="cta-documentacion">
              <h3>¿Quieres ver el proceso detallado?</h3>
              <p>Descarga la documentación técnica completa con capturas de pantalla y el paso a paso.</p>
              <a href="/documentos/ServiciosWindowsSv.pdf" download="PracticaRedesYcomunicacion.pdf" className="btn-descarga">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Descargar Documentación Técnica
              </a>
            </div>

          </section>

          {/* COLUMNA DERECHA: Sidebar con Categorías y Tecnologías */}
          <aside className="sidebar">
            <div className="widget">
              <h4 className="section-label">TECNOLOGÍAS CLAVE</h4>
              <div className="tags-container">
                <span className="pill-tag">Windows Server 2022</span>
                <span className="pill-tag">Windows 10 Pro</span>
                <span className="pill-tag">IIS (.NET 8.0)</span>
                <span className="pill-tag">hMailServer</span>
                <span className="pill-tag">Cisco Packet Tracer</span>
                <span className="pill-tag">Active Directory</span>
              </div>
            </div>

            <div className="widget mt-4">
            
              <ul className="sidebar-links">
                <li><a href="#topologia">→ Topología y Enrutamiento Cisco</a></li>
                <li><a href="#ad">→ Configuración de Active Directory</a></li>
                <li><a href="#iis">→ Despliegue Web en IIS (.NET 8)</a></li>
                <li><a href="#correo">→ Servidor de Correo hMailServer</a></li>
              </ul>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default Redes;