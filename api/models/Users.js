const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {
  //Metodo de Instancia para hacer el hash
  hashGen(contraseña, salt) {
    return bcrypt.hash(contraseña, salt);
  }

  //Metodo de Instancia para validar la contraseña
  // Mi this aca es user
  validateContraseña(contraseña) {
    return this.hashGen(contraseña, this.salt).then(
      (hash) => hash === this.contraseña
    );
  }
}

Users.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    direccion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefono: {
      type: Sequelize.STRING,
    },
    contraseña: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    }, // Acumulado es el dinero q fue gastando el usuario en total, para aplicarle alguna promocion al llegar a determinado valor.
    acumulado: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    // Solo puede ser tipo: User o tipo:Admin, el admin es capaz de modificar todo, un solo admin o muchos, tienen todos los permisos.
    tipo: {
      type: Sequelize.STRING,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);
//Creo el salt, para poder despues con mi funcion hashGen hashear la contraseña llamando a la funcion.Luego asigo ese hash a dicha contraseña

Users.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync(10);
  user.salt = salt;
  return user
    .hashGen(user.contraseña, salt)
    .then((hash) => (user.contraseña = hash));
});

module.exports = Users;
