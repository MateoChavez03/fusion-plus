import React from 'react';
import './index.css';

const ComentariosClientes = () => {
  return (
    <div className='col-12 row comentariosClientes'>
      <h2>HABLAN <span>POR NOSOTROS</span></h2>
      <hr className='line2'/>
      <p className='comentariosClientesText'>Clientes de las potenciales empresas con las que trabajamos, nos comparten su testimonio. Con sus comentarios nos identificamos y eso nos llena de orgullo.</p>
      <div className='clientesImgContainer d-flex row align-items-center justify-content-evenly'>
        <div className='firstRow d-flex row flex-column flex-lg-row align-items-center justify-content-evenly'>
          <p className='firstClient d-flex'>"Comercio de muchos años sin redes. Al principio de la pandemia salimos a la cancha con un e-commerce e Instagram, se estableció la marca y actualmente nuestro sitio tiene más de 300 productos".</p>
          <p className='secondClient d-flex'>"Nos gusta el estilo y la permanente búsqueda de diferenciarnos del rubro. Como dice Alejo: 'Darle una vuelta de tuerca y no caer en la de todos'."</p>
          <p className='thirdClient d-flex'>"Siempre buscan llevar al próximo nivel nuestro emprendimiento. Es muy groso eso, tenemos un nivel de exposición impensado."</p>
        </div>
        <div className='secondRow d-flex flex-column flex-lg-row align-items-center justify-content-evenly'>
          <p className='fourthClient'></p>
          <p className='fifthClient'></p>
          <p className='sixthClient'></p>
        </div>
      </div>
    </div>
  )
}

export default ComentariosClientes