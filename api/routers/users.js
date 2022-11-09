const router = require('express').Router();
const Users = require('../models/Users');
const { generateToken } = require('../config/token');
const validateUser = require('../middleware/auth');

//Creo un Usuario

router.post('/register', (req, res) => {
  Users.create(req.body)
    .then((usuario) => res.status(201).send(usuario))
    .catch((error) => console.log(error));
});

//Logeo un Usuario

router.post('/login', (req, res) => {
  const { email, contraseña } = req.body;
  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.send(401);
    // valido la contraseña, si es false no esta en la base de datos, mando error 401, sino procedo
    user
      .validateContraseña(contraseña)
      .then((isValid) => {
        if (!isValid) return res.send(401);
        //Procedo si la contraseña es valida
        let payload = {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          tipo: user.tipo,
          superAdmin: user.superAdmin,
          acumulado: user.acumulado,
          tipo: user.tipo,
        };
        // genero el token con el payload creado
        let token = generateToken(payload);
        // se lo envio a la cookie
        res.cookie('token', token);
        //mando como respuesta el payload creado
        res.send(payload);
      })
      .catch((error) => console.log(error));
  });
});

//En esta routa obtenemos el payload del usuario si estamos logeados

router.get('/secret', validateUser, (req, res) => {
  res.send(req.user);
});

// ruta que nos mantiene el login en caso de cerrar la pagina

router.get('/me', validateUser, (req, res) => {
  res.send(req.user);
});

// Limpiamos la cookie a la que le dimos nombre token

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.sendStatus(204);
});

//Rutas para Admin

//Modificar un Usuario

router.put('/:id', (req, res) => {
  const id = req.params.id;
  Users.findByPk(id)
    .then((usuario) => usuario.update(req.body))
    .then((usuarioUpdated) => res.status(202).send(usuarioUpdated))
    .catch((error) => console.log(error));
});

// Borrar un Usuario

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Users.destroy({ where: { id: id } })
    .then(() => res.status(200).send('Producto Eliminado'))
    .catch((error) => console.log(error));
});

// Obtener todos los usuarios

router.get('/', (req, res) => {
  Users.findAll()
    .then((usuarios) => res.send(usuarios))
    .catch((error) => console.log(error));
});

module.exports = router;
