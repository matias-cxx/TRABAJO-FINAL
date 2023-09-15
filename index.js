
const express = require('express');

const app = express();

// Importa las rutas de posts
const postRoutes = require('./routes/postRoutes');

// Utiliza las rutas de posts
app.use('/', postRoutes);

// Otros middlewares y configuraciones...
// Middleware para parsear el body de las solicitudes
app.use(express.urlencoded({ extended: true }));

// Configura el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rutas de posts
app.use('/', postRoutes);

// Inicio del  servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
const Post = require('Post'); // Importa el modelo de Post

// Sincroniza el modelo con la base de datos
Post.sync()
  .then(() => {
    console.log('Modelo de Post sincronizado con la base de datos.');
  })
  .catch(error => {
    console.error('Error al sincronizar el modelo de Post:', error);
  });
