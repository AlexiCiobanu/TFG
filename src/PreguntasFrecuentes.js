import React from 'react';
import './PreguntasFrecuentes.css';

function PreguntasFrecuentes() {
  return (
    <div className="preguntas-frecuentes-container">
      <h2>Preguntas Frecuentes</h2>
      <p>
        Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
      </p>

      <div className="pregunta">
        <h3>1. ¿Qué servicios médicos ofrecen?</h3>
        <p>
          Ofrecemos consultas médicas online, citas con especialistas, seguimiento
          de enfermedades crónicas, y orientación médica general.
        </p>
      </div>

      <div className="pregunta">
        <h3>2. ¿Cómo puedo agendar una cita médica?</h3>
        <p>
          Puedes agendar tu cita médica directamente a través de nuestra plataforma
          en la sección "Pide tu cita". Solo necesitas registrarte, elegir el médico
          o servicio que necesitas, y seleccionar una fecha disponible.
        </p>
      </div>

      <div className="pregunta">
        <h3>3. ¿Qué tipo de especialistas están disponibles?</h3>
        <p>
          Contamos con médicos especialistas en cardiología, dermatología, pediatría,
          ginecología, psiquiatría, y otras áreas médicas.
        </p>
      </div>

      <div className="pregunta">
        <h3>4. ¿Las consultas son confidenciales?</h3>
        <p>
          Sí, todas nuestras consultas son completamente confidenciales y cumplen con
          las normativas de protección de datos y privacidad.
        </p>
      </div>

      <div className="pregunta">
        <h3>5. ¿Qué pasa si necesito medicamentos?</h3>
        <p>
          Si el médico lo considera necesario, puede emitir una receta electrónica
          que podrás descargar y presentar en tu farmacia más cercana.
        </p>
      </div>

      <div className="pregunta">
        <h3>6. ¿Puedo hacer consultas desde el extranjero?</h3>
        <p>
          Sí, nuestra plataforma está disponible desde cualquier lugar con acceso a
          internet. Sin embargo, los servicios pueden estar sujetos a regulaciones
          locales.
        </p>
      </div>

      <div className="pregunta">
        <h3>7. ¿Cuál es el costo de una consulta médica?</h3>
        <p>
          Los costos varían dependiendo del tipo de consulta y del especialista.
          Puedes ver los precios exactos al seleccionar el servicio en la plataforma.
        </p>
      </div>

      <div className="pregunta">
        <h3>8. ¿Qué hago si tengo problemas técnicos?</h3>
        <p>
          Si encuentras algún problema técnico, puedes contactarnos a través del
          formulario de contacto en la sección "Contacto" o enviarnos un correo a
          infoportalmedico@portalmedico.com.
        </p>
      </div>

      <div className="pregunta">
        <h3>9. ¿Es necesario registrarme para utilizar el servicio?</h3>
        <p>
          Sí, el registro es necesario para garantizar la privacidad de tus datos y
          brindarte una experiencia personalizada.
        </p>
      </div>

      <div className="pregunta">
        <h3>10. ¿Puedo cancelar o reprogramar una cita?</h3>
        <p>
          Sí, puedes cancelar o reprogramar tu cita desde tu cuenta en la sección "Mis
          citas". Te recomendamos hacerlo con al menos 24 horas de anticipación.
        </p>
      </div>
    </div>
  );
}

export default PreguntasFrecuentes;
