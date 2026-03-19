import React from 'react'
import './App.css'

function App() {
  const proyectos = [
    {
      titulo: "Python Logic & Jupyter Analysis",
      desc: "Implementación de algoritmos de optimización y estructuras de datos complejas. Documentado en entornos de investigación computacional.",
      link: "https://github.com/JesusGaAl/Python_Ejercicios",
      badge: "Backend"
    },
    {
      titulo: "Database Management System",
      desc: "Desarrollo de arquitectura de persistencia de datos. Enfoque en integridad referencial y eficiencia de consultas en Python.",
      link: "https://github.com/JesusGaAl/proyecto_database_py",
      badge: "Infrastructure"
    }
  ];

  return (
    <div className="vercel-layout">
      {/* --- HERO SECTION --- */}
      <header className="hero">
        <nav className="nav-minimal">
          <span>JesusGaAl</span>
          <a href="https://github.com/JesusGaAl" target="_blank">GitHub</a>
        </nav>
        
        <div className="hero-content">
          <h1 className="tracking-in-expand">Desarrollador de Software</h1>
          <p className="subtitle">
            Especializado en el desarrollo de software robusto con <strong>React</strong> y <strong>Python</strong>. 
            Enfoque en arquitectura limpia y despliegue escalable.
          </p>
          <div className="hero-cta">
            <a href="#proyectos" className="btn-primary">Ver Proyectos</a>
            <a href="mailto:tu-correo@ejemplo.com" className="btn-secondary">Contacto</a>
          </div>
        </div>
      </header>

      {/* --- SOBRE MÍ (Minimal) --- */}
      <section className="section-container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="about-text">
          Desarrollador con mentalidad de ingeniería. Mi trabajo se centra en resolver problemas complejos 
          mediante código eficiente. Domino el ciclo de vida del software: desde la lógica en 
          <strong> Python</strong> hasta la interfaz de usuario en <strong>React</strong>, 
          gestionando la infraestructura con <strong>Docker</strong> y despliegue continuo en <strong>Render</strong>.
        </p>
      </section>

      {/* --- PROYECTOS (Vercel Style Grid) --- */}
      <section id="proyectos" className="section-container">
        <h2 className="section-title">Proyectos Seleccionados</h2>
        <div className="projects-grid">
          {proyectos.map((proy, i) => (
            <a key={i} href={proy.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="card-header">
                <span className="badge">{proy.badge}</span>
                <svg className="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </div>
              <h3>{proy.titulo}</h3>
              <p>{proy.desc}</p>
              <span className="card-footer">github.com/JesusGaAl →</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 JesusGaAl. Built with React & Vite. Hosted on Render.</p>
      </footer>
    </div>
  )
}

export default App