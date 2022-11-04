import React from "react";
import { SiGooglemaps } from "react-icons/si";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_menu">
        <div className="footer_direccion">
          <iframe
            title="GoogleMaps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15884.673818245026!2d-73.35906865000001!3d5.54202195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1667446714525!5m2!1ses!2sco"
            width="400"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div>
            <p>
              <SiGooglemaps /> Calle falsa 123
            </p>
            <p>
              <BsFillTelephoneFill /> +54 911445533
            </p>
          </div>
        </div>
        <div className="footer_datos">
          <h3>Developer</h3>
          <div>
            <p>
              <div>Rafael Mojica</div>
              <a href="https://www.linkedin.com/in/rafamojica/">
                <BsLinkedin />
              </a>
              <a href="https://github.com/RafaMojica">
                <BsGithub />
              </a>
              <a href="https://www.facebook.com/RafaelMojica27">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/tartaruga_nago/">
                <BsInstagram />
              </a>
            </p>
            <p>
              <div>Lucas Haendel</div>
              <a href="https://www.linkedin.com/in/lucashaendel/">
                <BsLinkedin />
              </a>
              <a href="https://github.com/lucashaendel">
                <BsGithub />
              </a>
              <a href="https://www.facebook.com/Lucas.p.haendel">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com">
                <BsInstagram />
              </a>
            </p>
            <p>
              <div>Carmela Cacabelos </div>
              <a href="https://www.linkedin.com/in/carmela-cacabelos-46b80123b/">
                <BsLinkedin />
              </a>
              <a href="https://github.com/carmelis">
                <BsGithub />
              </a>
              <a href="https://www.facebook.com/carmela.cacabelos/">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/carmelaesturo/ ">
                <BsInstagram />
              </a>
            </p>
            <p>
              <div>Santiago Estevez </div>
              <a href="http://linkedin.com/in/santiago-estevez-a04298139">
                <BsLinkedin />
              </a>
              <a href="https://github.com/elbolaestevez">
                <BsGithub />
              </a>
              <a href="https://www.facebook.com">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/santiestevez93/">
                <BsInstagram />
              </a>
            </p>
            <p>
              <div>Juan M. Perez </div>
              <a href="https://www.linkedin.com/in/juan-martin-perez-2ba243246/">
                <BsLinkedin />
              </a>
              <a href="https://github.com/juan-ma526">
                <BsGithub />
              </a>
              <a href="https://www.facebook.com">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/juan_ma526/">
                <BsInstagram />
              </a>
            </p>
            <p>
              <div>Javier Paiva</div>
              <a href="https://www.linkedin.com/in/javier-paiva/">
                <BsLinkedin />
              </a>
              <a href="https://github.com/javi970">
                <BsGithub />
              </a>
              <a href="https://www.facebook.com/javierlautaro.paiva">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/k0re._">
                <BsInstagram />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>©Derechos Reservados - 2022</p>
      </div>
    </div>
  );
}

export default Footer;
