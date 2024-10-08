const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000; // Puedes cambiar este puerto si es necesario

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto si tienes un usuario diferente
    password: 'Superman123!', // Reemplaza con tu contraseña
    database: 'portal_medico',
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos como ID ' + connection.threadId);
});

// Definir una ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor en funcionamiento');
});

// Ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {
    const { nombre, email, password, tipo_usuario } = req.body;

    // Aquí puedes agregar lógica de validación si lo necesitas

    // Inserta el nuevo usuario en la base de datos
    connection.query(
        'INSERT INTO usuarios (nombre, email, password, tipo_usuario) VALUES (?, ?, ?, ?)',
        [nombre, email, password, tipo_usuario],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Error en el registro' });
            }
            return res.status(201).json({ message: 'Usuario registrado correctamente' });
        }
    );
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
