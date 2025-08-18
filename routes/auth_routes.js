const express = require('express');
 const router = express.Router();
const authController = require('../controllers/auth_controller');

// Register route
router.post('/register', authController.register);  
// Login route
router.post('/login', authController.login);
// Export the router    

module.exports = router;