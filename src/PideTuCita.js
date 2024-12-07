import React, { useState, useEffect } from 'react';
import './PideTuCita.css';

function PideTuCita() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [citas, setCitas] = useState([]); // Estado para almacenar citas del usuario

  // Obtener citas del usuario al cargar el componente
  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('Debes iniciar sesión primero');
          window.location.href = '/login';
          return;
        }

        const response = await fetch('http://localhost:5000/paciente/citas', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCitas(data); // Guardar citas en el estado
        } else {
          alert('No se pudieron cargar las citas');
        }
      } catch (error) {
        alert('Error de red al cargar las citas: ' + error.message);
      }
    };

    fetchCitas();
  }, []);

  // Manejar envío del formulario para pedir una cita
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Debes iniciar sesión primero');
        window.location.href = '/login';
        return;
      }

      const response = await fetch('http://localhost:5000/pide-cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre,
          email,
          fecha: date,
          hora: time,
          tipo_consulta: consultationType,
          especialidad: specialty,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Cita creada con éxito. ID: ${data.id}`);
        setCitas([...citas, data]); // Agregar la nueva cita al estado
      } else {
        alert('Error al crear la cita');
      }
    } catch (error) {
      alert('Error de red: ' + error.message);
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
        <div className="form-group">
          <label htmlFor="consultation-type">Tipo de Consulta:</label>
          <select
            id="consultation-type"
            value={consultationType}
            onChange={(e) => {
              setConsultationType(e.target.value);
              // Reinicia la especialidad si cambia el tipo de consulta
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

      <h2>Mis Citas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            {cita.fecha} a las {cita.hora} - {cita.tipo_consulta} ({cita.especialidad || 'General'})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PideTuCita;
