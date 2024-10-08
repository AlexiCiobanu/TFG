// src/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Asegúrate de tener tu archivo CSS aquí

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Opciones</h2>
      <ul>
        <li><a href="/appointments">Cita Médica Online</a></li>
        <li><a href="/specialized-consultations">Consultas Especializadas</a></li>
        {/* Puedes añadir más botones aquí según necesites */}
      </ul>
    </div>
  );
}

export default Sidebar;
