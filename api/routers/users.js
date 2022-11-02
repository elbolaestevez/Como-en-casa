const router = require("express").Router();
const Users = require("../models/Users");

//Creo un Usuario

// obtengo

router.post("/register", (req, res) => {
  Users.create(req.body)
    .then((usuario) => res.send(usuario))
    .catch((error) => console.log(error));
});

module.exports = router;
