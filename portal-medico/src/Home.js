import React from 'react';
import './Home.css'; // Asegúrate de que estás usando un archivo CSS para esta página si es necesario
import './Orb.css';  // Asegúrate de importar los estilos del orb

function Home() {
  return (
    <div className="container">
      <h2>Bienvenido a Nuestro Portal Médico</h2>
      <p>Aquí puedes explorar los artículos médicos y ponerte en contacto con nosotros.</p>
      <button className="discover-button">Descubre Más</button>

      {/* Aquí va el Orb */}
      <div className="orb-container">
        <div className="orb"></div>
      </div>
    </div>
  );
}

export default Home;
