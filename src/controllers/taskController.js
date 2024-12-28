const Task = require('../models/Task');

exports.createTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            const error = new Error('El campo "title" es obligatorio.');
            error.statusCode = 400;
            throw error;
        }

        const task = new Task({ title, description });
        await task.save();

        res.status(201).json(task);
    } catch (error) {
        next(error);// Pasa el error al middleware de manejo de errores

    }
};

exports.getTasks = async (req, res, next) => {
    try {
        const { completed } = req.query;

        const filter = completed !== undefined ? { completed: completed === 'true' } : {};

        const tasks = await Task.find(filter);

        res.status(200).json(tasks);
    } catch (error) {
        next(error); 
    }
};

exports.getTaskById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(id);

        if (!task) {
            const error = new Error('Tarea no encontrada.');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json(task);
    } catch (error) {
        next(error); 
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const task = await Task.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!task) {
            const error = new Error('Tarea no encontrada.');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json(task);
    } catch (error) {
        next(error); 
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            const error = new Error('Tarea no encontrada.');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ message: 'Tarea eliminada correctamente.' });
    } catch (error) {
        next(error); 
    }
};
