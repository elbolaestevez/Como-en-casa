const Cartas = require("./Cartas");
const Users = require("./Users");
const Pedido = require("./Pedido");
const Admins = require("./Admins");
const Pago = require("./Pago");

// La relacion

Users.hasMany(Pedido, { as: "orden" });
Pedido.belongsTo(Users, { as: "orden" });

Pedido.belongsToMany(Cartas, { through: "comida" });
Cartas.belongsToMany(Pedido, { through: "comida" });

Users.hasMany(Pago);
Pago.belongsTo(Users);

// Admins.belongsTo(Users,{as:"adminUser"})

module.exports = { Cartas, Users, Pedido, Admins, Pago };
