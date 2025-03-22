const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log('MySQL connected'))
    .catch((err) => console.error('Database connection error:', err));

module.exports = sequelize;
