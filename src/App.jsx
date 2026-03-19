import React from 'react'
import './App.css' // Importante, crearemos este archivo

function App() {
  const proyectos = [
    {
      titulo: "Lógica Python y Jupyter",
      desc: "Resolución crítica de algoritmos complejos de manipulación de datos y lógica avanzada. Incluye notebooks documentados para análisis profundo.",
      link: "https://github.com/JesusGaAl/Python_Ejercicios",
      techs: ["Python 3", "Jupyter", "Algorithm Design"]
    },
    {
      titulo: "Base de Datos Py v1.0",
      desc: "Arquitectura y despliegue de un sistema de gestión de datos estructurado. Integra lógica de backend y manejo eficiente de consultas.",
      link: "https://github.com/JesusGaAl/proyecto_database_py",
      techs: ["Python", "SQL", "Database Architecture"]
    }
  ];

  return (
    <div className="portfolio-container">
      {/* --- HEADER --- */}
      <header className="portfolio-header">
        <h1 className="neon-text-cyan">JESUSGAAL | PORTFOLIO</h1>
        <p className="neon-text-magenta">INGENIERO DE SISTEMAS EN FORMACIÓN | QUERÉTARO, MÉXICO</p>
      </header>

      {/* --- SOBRE MÍ --- */}
      <section className="about-section">
        <h2 className="neon-text-cyan border-glow">Sobre Mí</h2>
        <div className="about-content border-glow-content">
          <p>
            Apasionado Ingeniero de Sistemas enfocado en la fusión de la eficiencia técnica y la experiencia de usuario. 
            Domino el backend con <span className="highlight-python">Python</span> para manipulación de datos y diseño de lógica, 
            y el frontend con <span className="highlight-react">React</span> para interfaces de usuario modernas y responsivas. 
            Cuento con experiencia práctica en despliegue continuo (<span className="highlight-render">CI/CD en Render</span>), 
            manejo de versiones con <span className="highlight-git">Git</span>, y gestión de infraestructura como código (<span className="highlight-docker">Docker</span>).
          </p>
        </div>
      </section>

      {/* --- PROYECTOS --- */}
      <section className="projects-section">
        <h2 className="neon-text-cyan border-glow">Proyectos Destacados</h2>
        <div className="projects-grid">
          {proyectos.map((proy, i) => (
            <div key={i} className="project-card border-glow-card">
              <h3 className="neon-text-magenta">{proy.titulo}</h3>
              <p className="project-desc">{proy.desc}</p>
              <div className="tech-stack">
                {proy.techs.map(tech => (
                  <span key={tech} className="tech-badge neon-border">{tech}</span>
                ))}
              </div>
              <a href={proy.link} target="_blank" rel="noopener noreferrer" className="neon-button-green">
                Ver Código en GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="portfolio-footer">
        <p>&copy; 2026 Jesús GaAl | Link en CV verificado | Desplegado en Render Free Tier.</p>
      </footer>
    </div>
  )
}

export default App