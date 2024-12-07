import React from 'react';

function CerrarSesion() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Cerrar Sesión
    </button>
  );
}

export default CerrarSesion;
