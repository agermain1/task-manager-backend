const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

/**
 * Configuración de Swagger
 * @param {Express} app - La instancia de Express.
 */
const setupSwagger = (app) => {
    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Task Manager API',
                version: '1.0.0',
                description: 'API para gestionar tareas',
            },
            servers: [
                {
                    url: 'http://localhost:4000', // Cambiar si usas un entorno diferente
                },
            ],
        },
        apis: ['./src/routes/*.js'], // Ruta donde se encuentran tus archivos de rutas
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
};

module.exports = setupSwagger;
