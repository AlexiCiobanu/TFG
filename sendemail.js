const nodemailer = require('nodemailer');

// Configuración del transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Cambia según tu proveedor de correo (Gmail, Outlook, etc.)
    auth: {
        user: 'infoportalmedico@gmail.com', // Reemplaza con tu dirección de correo
        pass: 'qgag tblg hidz fodg' // Contraseña o app password
    }
});

// Función para enviar correos
const sendConfirmationEmail = async (email, fecha, hora, especialista) => {
    try {
        // Convertir la fecha y hora a un formato legible
        const fechaObj = new Date(fecha);
        const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fechaObj.toLocaleDateString('es-ES', opcionesFecha);

        const mensajePersonalizado = `
            <h1>Confirmación de Cita</h1>
            <p>Gracias por reservar tu cita en nuestro portal médico.</p>
            <p><strong>Fecha:</strong> ${fechaFormateada}</p>
            <p><strong>Hora:</strong> ${hora}</p>
            <p><strong>Especialista:</strong> ${especialista}</p>
            <br>
            <p>El día <strong>${fechaFormateada}</strong> a las <strong>${hora}</strong>, tendrás la reunión con el especialista de tu elección a través de una videollamada.</p>
        `;

        const message = {
            from: '"Portal Médico" <infoportalmedico@gmail.com>',
            to: email,
            subject: 'Confirmación de tu cita médica',
            html: mensajePersonalizado,
        };

        await transporter.sendMail(message);
        console.log('Correo enviado exitosamente a:', email);
    } catch (error) {
        console.error('Error al enviar el correo:', error.message);
        throw new Error('No se pudo enviar el correo de confirmación');
    }
};
