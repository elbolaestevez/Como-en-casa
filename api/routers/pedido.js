const express = require("express");
const router = express.Router();
const { Pedido, Users, Cartas } = require("../models");

// me crea un producto en el pedido
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
    const pedido = await Pedido.create({ detalle: detalle });

    await pedido.setOrdenfinalizada(usuario);
    await pedido.addCartas(carta);
    res.send(pedido);
  } catch (error) {
    console.log(error);
  }
});
//me trae todos los pedidos
router.get("/", (req, res) => {
  Pedido.findAll({
    include: [{ model: Users, as: "ordenfinalizada" }, "cartas"],
  })
    .then((carritos) => res.status(200).send(carritos))
    .catch((err) => res.status(400).send(err));
});

// me trae el pedido de un usuario

router.get("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await Users.findOne({
      where: { email },
    });

    const usuariopedido = await Pedido.findAll({
      where: {
        authorId: user.id,
      },
      include: [{ model: Users, as: "ordenfinalizada" }, "cartas"],
    });
    res.send(usuariopedido);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  Carrito.destroy({ where: { id } })
    .then(() => res.send("Producto eliminado"))
    .catch((err) => res.status(400).send(err));
});
//me edita el campo comprado a true

router.put("/editarcomprado/:email", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Users.findOne({
      where: { email },
    });
    const usuariopedido = await Pedido.update(
      { comprado: "si" },
      {
        returning: true,
        plain: true,
        where: {
          ordenfinalizadaId: user.id,
        },

        include: [{ model: Users, as: "ordenfinalizada" }, "cartas"],
      }
    );

    // const usuariopedido = await Pedido.findAll({
    //   where: {
    //     ordenfinalizadaId: user.id,
    //   },
    //   include: [{ model: Users, as: "ordenfinalizada" }, "cartas"],
    // });

    // let updatepedido = (usuariopedido[0].dataValues.comprado = "si");

    // await updatepedido.save();

    res.status(200).send("se ha modificado");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
