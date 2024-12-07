const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendConfirmationEmail = require('./sendemail');

const app = express();
const PORT = 5000;

// Middleware para CORS
app.use(cors({
  origin: 'http://localhost:3000', // Dominio del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Otros middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Superman123!',
  database: 'portal_medico',
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    process.exit(1); // Finaliza la ejecución si no hay conexión
  }
  console.log('Conexión exitosa a la base de datos');
});

// Middleware: Verificar Token
function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Token no proporcionado' });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, 'super_secreto', (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido o expirado' });

    req.user = user;
    next();
  });
}

// Middleware: Verificar Rol
function verificarRol(rolesPermitidos) {
  return (req, res, next) => {
    const { tipo_usuario } = req.user;
    if (!rolesPermitidos.includes(tipo_usuario)) {
      return res.status(403).json({ message: 'Acceso denegado: rol no autorizado' });
    }
    next();
  };
}

// Rutas
app.get('/', (req, res) => res.send('Servidor en funcionamiento'));

// Login de usuario
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [results] = await connection.promise().query('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (results.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign(
      { id: user.id, email: user.email, tipo_usuario: user.tipo_usuario },
      'super_secreto',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
      tipo_usuario: user.tipo_usuario,
    });
  } catch (error) {
    console.error('Error en login:', error.message);
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
});
app.post('/register', async (req, res) => {
  const { nombre, email, password, tipo_usuario } = req.body;

  try {
    // Lógica de registro en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);
    await connection.promise().query(
      'INSERT INTO usuarios (nombre, email, password, tipo_usuario) VALUES (?, ?, ?, ?)',
      [nombre, email, hashedPassword, tipo_usuario || 'paciente']
    );
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error en registro:', error.message);
    res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
  }
});
// Crear una cita
app.post('/pide-cita', async (req, res) => {
  const { nombre, email, fecha, hora, tipo_consulta, especialidad } = req.body;

  try {
    const [results] = await connection.promise().query(
      'INSERT INTO citas (nombre, email, fecha, hora, tipo_consulta, especialidad) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, email, fecha, hora, tipo_consulta, especialidad]
    );

    await sendConfirmationEmail(email, fecha, hora, especialidad || 'General');

    res.status(201).json({ message: 'Cita creada correctamente y correo enviado', id: results.insertId });
  } catch (error) {
    console.error('Error en creación de cita:', error.message);
    res.status(500).json({ message: 'Error al crear la cita', error: error.message });
  }
});

// Listar citas (protegida)
app.get('/citas', verificarToken, async (req, res) => {
  const { email, fecha } = req.query;

  let query = 'SELECT * FROM citas';
  const params = [];

  if (email && fecha) {
    query += ' WHERE email = ? AND fecha = ?';
    params.push(email, fecha);
  } else if (email) {
    query += ' WHERE email = ?';
    params.push(email);
  } else if (fecha) {
    query += ' WHERE fecha = ?';
    params.push(fecha);
  }

  try {
    const [results] = await connection.promise().query(query, params);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error al obtener citas:', error.message);
    res.status(500).json({ message: 'Error al obtener las citas', error: error.message });
  }
});

// Área privada del paciente
app.get('/paciente/citas', verificarToken, verificarRol(['paciente']), async (req, res) => {
  try {
    const [results] = await connection.promise().query('SELECT * FROM citas WHERE email = ?', [req.user.email]);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error al obtener citas del paciente:', error.message);
    res.status(500).json({ message: 'Error al obtener citas', error: error.message });
  }
});

// Área privada del médico
app.get('/medico/citas', verificarToken, verificarRol(['medico']), async (req, res) => {
  try {
    const [results] = await connection.promise().query('SELECT * FROM citas WHERE especialidad = ?', [req.user.especialidad]);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error al obtener citas del médico:', error.message);
    res.status(500).json({ message: 'Error al obtener citas', error: error.message });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
