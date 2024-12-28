require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errors/errorHandler');
const taskRoutes = require('./routes/taskRoutes');
const setupSwagger = require('./config/swagger'); 

const app = express();

const cors = require('cors');

// Habilita CORS para todas las rutas
app.use(cors());


// Middleware para parsear JSON
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Configuración de Swagger
setupSwagger(app);

// Rutas
app.use('/api', taskRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
