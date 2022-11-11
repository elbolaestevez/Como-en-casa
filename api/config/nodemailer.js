const nodemailer = require("nodemailer");
// contaseña = hvuohenorlkmtxeq

enviarEmail = async (email) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587, //465
    // secure: true,
    auth: {
      user: "comoencasa.p5@gmail.com",
      pass: "hvuohenorlkmtxeq",
    },
  };

  const mensaje = {
    from: "comoencasa.p5@gmail.com",
    to: email, //aca el mail del usuario
    subject: "Compra en Como En Casa",
    text: "Gracias por tu compra",
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);

  console.log(info);
};

// enviarEmail();

module.exports = enviarEmail;
