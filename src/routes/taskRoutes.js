const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const { validateCreateTask, validateGetTasks, validateTaskId, validateUpdateTask } = require('../middlewares/validators/taskValidator');
const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crea una nueva tarea.
 *     description: Crea una nueva tarea con título obligatorio y descripción opcional.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Nueva tarea"
 *               description:
 *                 type: string
 *                 example: "Descripción de la tarea"
 *     responses:
 *       201:
 *         description: Tarea creada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "60d1f1a0b8f3b30c8cfa5d77"
 *                 title:
 *                   type: string
 *                   example: "Nueva tarea"
 *                 description:
 *                   type: string
 *                   example: "Descripción de la tarea"
 *                 completed:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: El campo "title" es obligatorio.
 */
router.post('/tasks', validateCreateTask, createTask);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Devuelve la lista de tareas.
 *     description: Devuelve todas las tareas, con opción de filtrado por estado (completed o pending).
 *     parameters:
 *       - in: query
 *         name: completed
 *         required: false
 *         schema:
 *           type: boolean
 *           example: true
 *     responses:
 *       200:
 *         description: Lista de tareas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   completed:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   __v:
 *                     type: integer
 */
router.get('/tasks', validateGetTasks, getTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Devuelve una tarea específica por ID.
 *     description: Devuelve los detalles de una tarea especificada por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea.
 *         schema:
 *           type: string
 *           example: "60d1f1a0b8f3b30c8cfa5d77"
 *     responses:
 *       200:
 *         description: Detalles de la tarea.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Tarea no encontrada.
 */
router.get('/tasks/:id', validateTaskId, getTaskById);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualiza los detalles de una tarea.
 *     description: Permite actualizar los campos de una tarea existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a actualizar.
 *         schema:
 *           type: string
 *           example: "60d1f1a0b8f3b30c8cfa5d77"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarea actualizada correctamente.
 *       404:
 *         description: Tarea no encontrada.
 */
router.put('/tasks/:id', validateTaskId, validateUpdateTask, updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Elimina una tarea.
 *     description: Elimina una tarea específica por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a eliminar.
 *         schema:
 *           type: string
 *           example: "60d1f1a0b8f3b30c8cfa5d77"
 *     responses:
 *       200:
 *         description: Tarea eliminada correctamente.
 *       404:
 *         description: Tarea no encontrada.
 */
router.delete('/tasks/:id', validateTaskId, deleteTask);

module.exports = router;
