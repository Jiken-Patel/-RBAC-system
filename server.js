const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const userRoutes = require('./routes/user_routes');
const authRoutes = require('./routes/auth_routes');

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = process.env.PORT || 5000;

//routes
app.use('/api/users', userRoutes);  
app.use('/api/auth', authRoutes);

db.sync()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection failed:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

