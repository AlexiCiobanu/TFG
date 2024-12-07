import React, { useState } from 'react';
import './Login.css';
import Notification from './Notification';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setNotification({ message: 'Inicio de sesión exitoso', type: 'success' });

        setTimeout(() => {
          if (data.tipo_usuario === 'paciente') {
            window.location.href = '/area-privada-paciente';
          } else if (data.tipo_usuario === 'medico') {
            window.location.href = '/area-privada-medico';
          }
        }, 3000); // Redirige después de 3 segundos
      } else {
        setNotification({ message: data.message || 'Error al iniciar sesión', type: 'error' });
      }
    } catch (error) {
      setNotification({ message: 'Error de red: ' + error.message, type: 'error' });
    }
  };

  return (
    <div className="login-container">
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
        duration={5000}
      />
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Iniciar Sesión</p>
        <div>
          <label>Email:</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            required
          />
        </div>
        <div className="button-container">
          <button className="submit" type="submit">Iniciar Sesión</button>
        </div>
        <p className="signin">¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
      </form>
    </div>
  );
}

export default Login;
