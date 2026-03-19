import React from 'react'

function App() {
  const proyectos = [
    {
      titulo: "Ejercicios de Lógica Python",
      desc: "Colección de scripts y notebooks con resolución de algoritmos.",
      link: "https://github.com/JesusGaAl/Python_Ejercicios"
    },
    {
      titulo: "Base de Datos Py",
      desc: "Sistema de gestión de datos desarrollado en Python.",
      link: "https://github.com/JesusGaAl/proyecto_database_py"
    }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <h1>Mi Portafolio - JesusGaAl</h1>
      <p>Ingeniero de Sistemas en formación | Querétaro, México</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
        {proyectos.map((proy, i) => (
          <div key={i} style={{ border: '1px solid #333', padding: '20px', borderRadius: '10px', backgroundColor: '#1e1e1e' }}>
            <h3>{proy.titulo}</h3>
            <p>{proy.desc}</p>
            <a href={proy.link} target="_blank" style={{ color: '#646cff', textDecoration: 'none', fontWeight: 'bold' }}>
              Ver Código en GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App