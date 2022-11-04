const Cartas = require("./Cartas");
const Users = require("./Users");
const Pedido = require("./Pedido");
const Admins = require("./Admins");
const Pago = require("./Pago");
const Carrito = require("./Carrito");

// La relacion

Users.hasMany(Pedido, { as: "orden" });
Pedido.belongsTo(Users, { as: "orden" });

Carrito.belongsToMany(Cartas, { through: "comida" });
Cartas.belongsToMany(Carrito, { through: "comida" });

Carrito.belongsTo(Users, { as: "author" });

Users.hasMany(Pago);
Pago.belongsTo(Users);

// Admins.belongsTo(Users,{as:"adminUser"})

module.exports = { Cartas, Users, Pedido, Admins, Pago, Carrito };
