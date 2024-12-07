import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token'); // Verifica si hay un token guardado

  if (!token) {
    // Si no hay token, redirige al inicio de sesión
    return <Navigate to="/login" />;
  }

  // Si hay token, muestra el contenido protegido
  return children;
}

export default PrivateRoute;
