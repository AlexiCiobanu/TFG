// src/Sidebar.js (o donde esté tu componente de Sidebar)
import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Opciones</h3>
      <ul>
        <li><Link to="/cita-medica">Cita Médica Online</Link></li>
        <li><Link to="/consultas-especializadas">Consultas Especializadas</Link></li>
        <li><Link to="/pide-tu-cita" className="pide-cita-button">Pide tu cita</Link></li> {/* Botón para pedir cita */}
      </ul>
    </div>
  );
}

export default Sidebar;
