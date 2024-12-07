import React, { useEffect } from 'react';
import './Notification.css';

function Notification({ message, type, onClose, duration = 5000 }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
    }
  }, [message, onClose, duration]);

  if (!message) return null; // No muestra nada si no hay mensaje

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

export default Notification;
