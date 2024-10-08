import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de tener tus estilos aquí

function Navbar() {
  const location = useLocation(); // Obtenemos la ruta actual

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/articles' ? 'active' : ''}`}>
            <Link to="/articles">Artículos Médicos</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact">Contacto</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/register' ? 'active' : ''}`}>
            <Link to="/register">Registro</Link>
          </li>
          <li className={`navbar-item ${location.pathname.startsWith('/services') ? '' : ''}`}>
            <Link to="/services">Servicios Médicos</Link>
            <ul className="dropdown">
              <li>
                <Link to="/services/general-consultation" className={location.pathname === '/services/general-consultation' ? 'active' : ''}>Consulta General</Link>
              </li>
              <li>
                <Link to="/services/health-checkup" className={location.pathname === '/services/health-checkup' ? 'active' : ''}>Chequeo Médico</Link>
              </li>
              <li>
                <Link to="/services/health-advice" className={location.pathname === '/services/health-advice' ? 'active' : ''}>Asesoramiento sobre salud</Link>
              </li>
              <li>
                <Link to="/services/medical-test" className={location.pathname === '/services/medical-test' ? 'active' : ''}>Test Médico</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
