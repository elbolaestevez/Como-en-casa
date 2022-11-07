const Cartas = require("./Cartas");
const Users = require("./Users");
const Pedido = require("./Pedido");
const Comentarios = require("./Comentarios");
const Pago = require("./Pago");
const Carrito = require("./Carrito");

//relacion carrito con usuario y cartas
Carrito.belongsToMany(Cartas, { through: "comida" });
Cartas.belongsToMany(Carrito, { through: "comida" });

Carrito.belongsTo(Users, { as: "author" });

//relacion comentarios con Carta y usuario
Comentarios.belongsTo(Cartas, { as: "review" });

Comentarios.belongsToMany(Users, { through: "resenia" });
Users.belongsToMany(Comentarios, { through: "resenia" });

//relacion Pedido con usuario y Carta
Pedido.belongsToMany(Cartas, { through: "orden" });
Cartas.belongsToMany(Pedido, { through: "orden" });

Pedido.belongsTo(Users, { as: "ordenfinalizada" });

//relacion usuario con pago
Users.hasMany(Pago);
Pago.belongsTo(Users);

module.exports = { Cartas, Users, Pedido, Pago, Carrito, Comentarios };
