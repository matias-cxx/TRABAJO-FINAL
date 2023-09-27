const express = require('express');
const router = express.Router();

// Importa el controlador de posts
const postController = require('../controllers/postController');

// Ruta para mostrar el formulario de creación de posts
router.get('/crear_post', postController.mostrarFormularioCrearPost);

// Ruta para procesar el envío de un nuevo post
router.post('/crear_post', postController.crearPost);

// Otras rutas relacionadas con los posts...

module.exports = router;
