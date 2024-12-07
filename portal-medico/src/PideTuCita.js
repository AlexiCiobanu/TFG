import React, { useState } from 'react';
import './PideTuCita.css';

function PideTuCita() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [nombre, setNombre] = useState(''); // Estado para el nombre del usuario

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí se envía la cita al servidor
    const response = await fetch('http://localhost:5000/pide-cita', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre, // Utiliza el estado donde guardaste el nombre
        email: email, // Utiliza el estado donde guardaste el correo electrónico
        fecha: date,
        hora: time,
        tipo_consulta: consultationType,
        especialidad: specialty,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Cita creada con ID: ${data.id}`); // Asegúrate de que la sintaxis esté correcta
    } else {
      alert('Error al crear la cita');
    }
  };

  return (
    <div className="pide-tu-cita-container">
      <h2>Pide tu Cita</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        {/* Campo de correo electrónico añadido */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="consultation-type">Tipo de Consulta:</label>
          <select
            id="consultation-type"
            value={consultationType}
            onChange={(e) => {
              setConsultationType(e.target.value);
              // Reinicia la especialidad si el tipo de consulta cambia
              if (e.target.value !== 'consulta especializada') {
                setSpecialty('');
              }
            }}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="consulta general">Consulta General</option>
            <option value="consulta especializada">Consulta Especializada</option>
            <option value="chequeo medico">Chequeo Médico</option>
            <option value="asesoramiento sobre salud">Asesoramiento sobre Salud</option>
          </select>
        </div>

        {/* Menú desplegable para especialidades */}
        {consultationType === 'consulta especializada' && (
          <div className="form-group">
            <label htmlFor="specialty">Especialidad:</label>
            <select
              id="specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            >
              <option value="">Selecciona una especialidad</option>
              <option value="digestivo">Digestivo</option>
              <option value="cardiologia">Cardiología</option>
              <option value="neumologia">Neumología</option>
              <option value="dermatologia">Dermatología</option>
              <option value="traumatologia">Traumatología</option>
              <option value="pediatria">Pediatría</option>
            </select>
          </div>
        )}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default PideTuCita;
