import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container"> {/* Nuevo contenedor central */}
      <div className="contact-card">
        <h2 className="heading">Formulario de Contacto</h2>
        <form>
          <div className="input-div">
            <input type="text" placeholder="Nombre" required />
          </div>
          <div className="input-div">
            <input type="email" placeholder="Correo Electrónico" required />
          </div>
          <div className="input-div">
            <input type="text" placeholder="Asunto" required />
          </div>
          <div className="input-div">
            <textarea placeholder="Mensaje" rows="5" required></textarea>
          </div>
          <div className="button-div">
            <button type="submit" className="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
