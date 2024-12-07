// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Importa el CSS para el formulario de inicio de sesión

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para el inicio de sesión
    console.log("Iniciando sesión con:", { email, password });
  };

  return (
    <div className="login-container">
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
        <p className="signin">¿No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
        <p className="forgot-password"><a href="#">¿Olvidaste tu contraseña? Pulsa aquí</a></p>
        <button className="google-login">Iniciar Sesión con Google</button>
      </form>
    </div>
  );
}

export default Login;
