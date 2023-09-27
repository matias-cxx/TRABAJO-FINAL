
const { Post } = require('../sequelize');

const postController = {
  mostrarFormularioCrearPost: (req, res) => {
    res.render('formulario_creacion_post');
  },

  crearPost: async (req, res) => {
    const { titulo, contenido, imagen, fecha } = req.body;

    try {
      const nuevoPost = await Post.create({
        titulo,
        contenido,
        imagen,
        fecha
      });

      res.redirect('/'); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear el post');
    }
  },

  mostrarListaDePosts: async (req, res) => {
    try {
      const posts = await Post.findAll(); 
      res.render('lista_de_posts', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar la lista de posts');
    }
  },

  

  mostrarDetallesDelPost: async (req, res) => {
    const postId = req.params.id;

    try {
      const post = await Post.findByPk(postId); 
      if (!post) {
        res.status(404).send('Post no encontrado');
        return;
      }

      res.render('detalles_del_post', { post });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar los detalles del post');
    }
  },

  

  eliminarPost: async (req, res) => {
    const postId = req.params.id;

    try {
      const post = await Post.findByPk(postId); 
      if (!post) {
        res.status(404).send('Post no encontrado');
        return;
      }

      await post.destroy(); 
      res.redirect('/'); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al eliminar el post');
    }
  }
};

module.exports = postController;
