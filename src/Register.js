import React, { useState } from 'react';
import './Register.css';
import Notification from './Notification'; // Importa el componente de notificación

const TIPO_USUARIO_OPTIONS = [
  { value: 'paciente', label: 'Paciente' },
  { value: 'medico', label: 'Médico' },
];

function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState(TIPO_USUARIO_OPTIONS[0].value);
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, password, tipo_usuario: tipoUsuario }),
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({ message: 'Registro exitoso, por favor inicia sesión.', type: 'success' });
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000); // Redirige al login después de 3 segundos
      } else {
        setNotification({ message: data.message || 'Error al registrarse', type: 'error' });
      }
    } catch (error) {
      setNotification({ message: 'Error de red: ' + error.message, type: 'error' });
    }
  };

  return (
    <div className="register-container">
      {/* Muestra la notificación si existe un mensaje */}
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
        duration={5000}
      />
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="title">Únete a nosotros</h2>
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
          <button type="submit" className="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
