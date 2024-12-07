import React from 'react';
import CerrarSesion from './CerrarSesion';
import './AreaPrivada.css'; // Estilos comunes para áreas privadas

function AreaPrivadaMedico() {
  return (
    <div className="area-privada-container">
      <header className="area-privada-header">
        <h1>Área Privada del Médico</h1>
        <CerrarSesion />
      </header>
      <main className="area-privada-content">
        <h2>Bienvenido, Médico</h2>
        <p>Aquí puedes gestionar tus citas, consultar información y realizar otras tareas.</p>
        {/* Puedes añadir más funcionalidades específicas para médicos aquí */}
      </main>
    </div>
  );
}

export default AreaPrivadaMedico;
