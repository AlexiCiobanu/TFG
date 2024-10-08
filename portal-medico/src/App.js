// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import Articles from './Articles';
import Contact from './Contact';
import Register from './Register'; 
import Services from './Services';  
import CitaMedica from './CitaMedica'; // Importar nuevo componente
import ConsultasEspecializadas from './ConsultasEspecializadas'; // Importar nuevo componente

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-container">
          <div className="sidebar">
            <h3>Opciones</h3>
            <ul>
              <li><a href="/cita-medica">Cita Médica Online</a></li>
              <li><a href="/consultas-especializadas">Consultas Especializadas</a></li>
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/services" element={<Services />} />  
              <Route path="/cita-medica" element={<CitaMedica />} /> {/* Ruta para Cita Médica */}
              <Route path="/consultas-especializadas" element={<ConsultasEspecializadas />} /> {/* Ruta para Consultas Especializadas */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
