const express = require("express");
const router = express.Router();
const { Carrito, Users, Cartas } = require("../models");

// me crea un producto en el carrito
router.post("/", async (req, res) => {
  try {
    const { email, idcarta, detalle } = req.body;

    const usuario = await Users.findOne({
      where: { email },
    });

    const carta = await Cartas.findOne({
      where: { id: idcarta },
    });
    console.log(detalle);
    const carrito = await Carrito.create({ detalle: detalle });

    await carrito.setAuthor(usuario);
    await carrito.addCartas(carta);
    res.send(carrito);
  } catch (error) {
    console.log(error);
  }
});
//me trae todos lo del carrito
router.get("/", (req, res) => {
  Carrito.findAll({ include: [{ model: Users, as: "author" }, "cartas"] })
    .then((carritos) => res.status(200).send(carritos))
    .catch((err) => res.status(400).send(err));
});

// me trae el carrito de un usuario

router.get("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await Users.findOne({
      where: { email },
    });

    const usuariocarrito = await Carrito.findAll({
      where: {
        authorId: user.id,
      },
      include: [{ model: Users, as: "author" }, "cartas"],
    });
    res.send(usuariocarrito);
  } catch (error) {
    console.log(error);
  }
});

//me elimina un producto del carrito

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  Carrito.destroy({ where: { id } })
    .then(() => res.send("Producto eliminado"))
    .catch((err) => res.status(400).send(err));
});

//eliminar todo el carrito de un usuario
router.delete("/deleteall/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await Users.findOne({
      where: { email },
    });
    const usuariocarrito = await Carrito.destroy({
      where: {
        authorId: user.id,
      },
      include: [{ model: Users, as: "author" }, "cartas"],
    });
    res.send("se elimino");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
