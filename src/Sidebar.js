// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

// Importar los componentes adicionales
import SobreNosotros from './SobreNosotros';
import PreguntasFrecuentes from './PreguntasFrecuentes';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Opciones</h3>
      <ul>
        <li><Link to="/cita-medica">Cita Médica Online</Link></li>
        <li><Link to="/consultas-especializadas">Consultas Especializadas</Link></li>
        <li><Link to="/pide-tu-cita" className="pide-cita-button">Pide tu cita</Link></li>
        <li><Link to="/faq">Preguntas Frecuentes</Link></li>
        <li><Link to="/salud">Consejos de Salud</Link></li>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
