// src/Register.js
import React, { useState } from 'react';
import './Register.css';

const TIPO_USUARIO_OPTIONS = [
  { value: 'paciente', label: 'Paciente' },
  { value: 'medico', label: 'Médico' },
];

function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState(TIPO_USUARIO_OPTIONS[0].value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, password, tipo_usuario: tipoUsuario }),
      });

      if (response.ok) {
        alert('Usuario registrado correctamente');
      } else {
        alert('Error en el registro: ' + response.statusText);
      }
    } catch (error) {
      alert('Error de red: ' + error.message);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
      <h2>Únete a nosotros</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={({ target: { value } }) => setNombre(value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            required
          />
        </div>
        <div>
          <label>Tipo de Usuario:</label>
          <select value={tipoUsuario} onChange={({ target: { value } }) => setTipoUsuario(value)}>
            {TIPO_USUARIO_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="button-container">
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;