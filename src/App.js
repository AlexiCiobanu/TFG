// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Articles from './Articles';
import Contact from './Contact';
import Register from './Register';
import Services from './Services';
import CitaMedica from './CitaMedica';
import ConsultasEspecializadas from './ConsultasEspecializadas';
import PideTuCita from './PideTuCita';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import AreaPrivadaPaciente from './AreaPrivadaPaciente';
import AreaPrivadaMedico from './AreaPrivadaMedico';
// Importar los componentes adicionales
import SobreNosotros from './SobreNosotros';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import ConsejosDeSalud from './ConsejosDeSalud'; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* Botones de autenticación */}
        <div className="auth-buttons">
          <Link to="/login" className="voltage-button">
            <button>Iniciar Sesión</button>
          </Link>
          <Link to="/register" className="voltage-button">
            <button>Registrarse</button>
          </Link>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Contenedor principal con Sidebar y contenido */}
        <div className="main-container" style={{ display: 'flex' }}>
          <Sidebar />
          <div className="content" style={{ flex: 1, padding: '1rem' }}>
            <Routes>
              {/* Rutas principales */}
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<Services />} />

              {/* Rutas para los botones adicionales */}
              <Route path="/cita-medica" element={<CitaMedica />} />
              <Route path="/consultas-especializadas" element={<ConsultasEspecializadas />} />
              <Route path="/pide-tu-cita" element={<PrivateRoute><PideTuCita /></PrivateRoute>} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/faq" element={<PreguntasFrecuentes />} />
              <Route path="/salud" element={<ConsejosDeSalud />} />

              {/* Rutas privadas */}
              <Route path="/area-privada-paciente" element={<PrivateRoute><AreaPrivadaPaciente /></PrivateRoute>} />
              <Route path="/area-privada-medico" element={<PrivateRoute><AreaPrivadaMedico /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
