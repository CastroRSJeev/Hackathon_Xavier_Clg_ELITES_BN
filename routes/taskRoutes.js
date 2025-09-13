const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// CRUD routes
router.post('/', taskController.createTask);        // Create task
router.get('/', taskController.getAllTasks);       // Get all tasks
router.get('/:id', taskController.getTaskById);    // Get task by ID
router.put('/:id', taskController.updateTask);     // Update task
router.delete('/:id', taskController.deleteTask);  // Delete task

module.exports = router;
