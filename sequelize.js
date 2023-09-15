const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('post_database', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
const sequelize = require('./sequelize.js');

// Sincroniza los modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });
