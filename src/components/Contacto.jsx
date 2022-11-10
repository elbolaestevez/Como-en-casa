import React from 'react'
import {BsInstagram,BsFacebook, BsYoutube} from "react-icons/bs"



function Contacto() {
  return (
    <div class="contacto">
    <div class="container-contacto">
      <h2>¡Seguinos en nuestras redes sociales!</h2>
      <a href='http://instagram.com' target="_blank" className='redes'><BsInstagram/></a>     
      <a href='http://facebook.com' target="_blank" className='redes'><BsFacebook/></a>
      <a href='http://youtube.com' target="_blank" className='redes'><BsYoutube/></a>
    </div>
    </div>
  )
}

export default Contacto