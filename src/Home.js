import React from 'react';
import './Home.css'; // Asegúrate de que estás usando un archivo CSS para esta página si es necesario
import './Orb.css';  // Asegúrate de importar los estilos del orb
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Home() {
  const navigate = useNavigate(); // Hook para la navegación

  const handleDiscoverMore = () => {
    navigate('/services'); // Redirige a la página de servicios
  };

  return (
    <div className="container">
      <h2>Bienvenido a Nuestro Portal Médico</h2>
      <p>
        Brindamos atención médica online de alta calidad, ofreciendo un acceso rápido y conveniente a consultas con médicos especializados. 
        Nuestro objetivo es cuidar de tu salud y bienestar desde la comodidad de tu hogar.
      </p>
      
      <h3>Características Destacadas</h3>
      <ul>
        <li>📅 Consultas Médicas Online: Programa una cita con un médico sin salir de casa.</li>
        <li>🩺 Especialistas Disponibles: Accede a una variedad de especialistas en diferentes áreas.</li>
        <li>💬 Asesoramiento Personalizado: Recibe orientación médica adaptada a tus necesidades.</li>
        <li>📊 Seguimiento Continuo: Monitorea tu salud con consultas regulares y seguimiento personalizado.</li>
      </ul>

      <h3>Testimonios</h3>
      <blockquote>
        <p>
          "El servicio es excelente y muy conveniente. Pude ver a un médico sin salir de casa y recibí atención de primera." - Juan P.
        </p>
      </blockquote>
      <blockquote>
        <p>
          "Me encanta la facilidad de hacer una cita online. ¡Recomiendo este servicio a todos!" - Maria S.
        </p>
      </blockquote>

      <h3>Estadísticas</h3>
      <ul>
        <li>✔️ Más de 500 consultas realizadas</li>
        <li>✔️ 95% de satisfacción de nuestros pacientes</li>
        <li>✔️ Más de 20 médicos especializados en línea</li>
      </ul>

      <button className="discover-button" onClick={handleDiscoverMore}>
        Descubre Más
      </button>

      {/* Aquí va el Orb */}
      <div className="orb-container">
        <div className="orb"></div>
      </div>
    </div>
  );
}

export default Home;
