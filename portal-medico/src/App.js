// src/App.js
import React from 'react';
import './App.css';
import './Sidebar.css'; // Asegúrate de que Sidebar.css está importado
import Navbar from './Navbar';
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

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-buttons">
          <Link to="/login" className="voltage-button">
            <button>Iniciar Sesión</button>
          </Link>
          <Link to="/register" className="voltage-button">
            <button>Registrarse</button>
          </Link>
        </div>
        <Navbar />
        <div className="main-container">
          <div className="sidebar">
            <h3>Opciones</h3>
            <ul>
              <li><Link to="/cita-medica">Cita Médica Online</Link></li>
              <li><Link to="/consultas-especializadas">Consultas Especializadas</Link></li>
              <li><Link to="/pide-tu-cita" className="pide-cita-button">Pide tu cita</Link></li>
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<Services />} />  
              <Route path="/cita-medica" element={<CitaMedica />} />
              <Route path="/consultas-especializadas" element={<ConsultasEspecializadas />} />
              <Route path="/pide-tu-cita" element={<PideTuCita />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
