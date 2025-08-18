const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const authMiddleware = require('../middlewares/auth_middleware');
const roleMiddleware = require('../middlewares/role_middleware');

// Get all users (admin only)
router.get('/', authMiddleware, roleMiddleware(['admin']), userController.getAllUsers);

// Get own profile
router.get('/me', authMiddleware, userController.getCurrentUser);

// Update own profile
router.put('/me', authMiddleware, userController.updateCurrentUser);

// Delete any user (admin only)
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), userController.deleteUser);

module.exports = router;
