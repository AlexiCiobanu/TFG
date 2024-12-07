import React from 'react';
import CerrarSesion from './CerrarSesion';
import './AreaPrivada.css'; // Estilos comunes para áreas privadas

function AreaPrivadaPaciente() {
  return (
    <div className="area-privada-container">
      <header className="area-privada-header">
        <h1>Área Privada del Paciente</h1>
        <CerrarSesion />
      </header>
      <main className="area-privada-content">
        <h2>Bienvenido, Paciente</h2>
        <p>Aquí puedes gestionar tus citas, consultar información y realizar otras tareas.</p>
        {/* Puedes añadir más funcionalidades específicas para pacientes aquí */}
      </main>
    </div>
  );
}

export default AreaPrivadaPaciente;
