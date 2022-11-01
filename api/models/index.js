const Cartas = require("./Cartas");
const Users = require("./Users");
const Pedido = require("./Pedido");
const Admins = require("./Admins");
const Pago = require("./Pago");

// La relacion

Users.belongsToMany(Pedido, { through: "orden" });
Pedido.belongsToMany(Cartas, { through: "comida" });
// Admins.belongsTo(Users,{as:"adminUser"})

module.exports = { Cartas, Users, Pedido, Admins, Pago };
