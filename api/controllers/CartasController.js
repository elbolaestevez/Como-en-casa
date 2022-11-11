const { Cartas } = require("../models");

const getallcartas = (req, res) => {
  Cartas.findAll()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
};

const postcarta = (req, res) => {
  const producto = req.body;

  Cartas.create(producto)

    .then((productofinal) => {
      res.status(201).send(productofinal);
    })
    .catch((err) => console.log(err));
};

const getonecarta = (req, res) => {
  Cartas.findOne({
    where: { id: req.params.id },
  })
    .then((producto) => res.status(200).send(producto))
    .catch((err) => res.status(400).send(err));
};
const editonecarta = (req, res) => {
  const id = req.params.id;
  Cartas.findByPk(id)
    .then((producto) => producto.update(req.body))
    .then((productoUpdated) => res.send(productoUpdated))
    .catch((err) => res.status(400).send(err));
};
const deleteonecarta = (req, res) => {
  const id = req.params.id;
  Cartas.destroy({ where: { id } })
    .then(() => res.send("Producto eliminado"))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  getallcartas,
  postcarta,
  getonecarta,
  editonecarta,
  deleteonecarta,
};
