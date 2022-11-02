const Cartas = require("./Cartas");
const Users = require("./Users");
const Pedido = require("./Pedido");
const Admins = require("./Admins");
const Pago = require("./Pago");

// La relacion

Users.belongsToMany(Pedido, { through: "orden" });
//Relacion Pedido con Cartas
Pedido.belongsToMany(Cartas, { through: "comida" });
Cartas.belongsToMany(Pedido, { through: "comida" });
// Admins.belongsTo(Users,{as:"adminUser"})

module.exports = { Cartas, Users, Pedido, Admins, Pago };
