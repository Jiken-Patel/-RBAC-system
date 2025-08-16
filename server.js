require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./models');
// const authRoutes = require('./routes/auth_routes');
// const userRoutes = require('./routes/user_routes');
 const logger = require('./utils/logger');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

//app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
  });
});


