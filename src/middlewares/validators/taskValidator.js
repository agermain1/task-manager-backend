const { body, query, param, validationResult } = require('express-validator');

exports.validateCreateTask = [
    body('title')
        .notEmpty().withMessage('El campo "title" es obligatorio.')
        .isString().withMessage('El campo "title" debe ser un texto.'),
    body('description')
        .optional()
        .isString().withMessage('El campo "description" debe ser un texto.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

exports.validateGetTasks = [
    query('completed')
        .optional()
        .isBoolean().withMessage('El campo "completed" debe ser true o false.')
        .toBoolean(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

exports.validateTaskId = [
    param('id')
        .isMongoId().withMessage('El parámetro "id" debe ser un ID válido de MongoDB.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

exports.validateUpdateTask = [
    body('title')
        .optional()
        .isString().withMessage('El campo "title" debe ser un texto.'),
    body('description')
        .optional()
        .isString().withMessage('El campo "description" debe ser un texto.'),
    body('completed')
        .optional()
        .isBoolean().withMessage('El campo "completed" debe ser true o false.')
        .toBoolean(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
