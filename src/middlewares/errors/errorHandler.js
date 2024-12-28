const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Error interno del servidor.';

    if (err.name === 'CastError' || err.name === 'ValidationError') {
        statusCode = 400;
        message = 'Datos inválidos.';
    }

    res.status(statusCode).json({
        error: {
            message,
            details: err.details || null,
        },
    });
};

module.exports = errorHandler;
