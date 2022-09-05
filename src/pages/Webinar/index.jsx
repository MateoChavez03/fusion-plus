import React from 'react';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import BannerLanding from '../../components/BannerLanding/BannerLandingWebinars';
import './index.css';

const Webinar = () => {
  return (
    <main className='divContainer webinar row'>
      <Whatsapp/>
      <BannerLanding/>
      <div className='webinarLanding col-12 row d-flex'>
        <h2> PROXIMAMENTE MAS INFO </h2>
        <div> 
          <p> 
            Estamos trabajando para traerte <span> los mejores webinars. </span> 
            Trabajando con diferentes especialistas para poder generar contenido de calidad.
          </p>
          <p>
            Si querés ser el primero en enterarte cuanto esten disponible los diferentes webinar, unite a nuestra lista de difusión. 
          </p>
        </div>
        <a href="https://wa.me/+5492216806935" rel="noreferrer" target="_blank" className='joinList'>UNIRME A LISTA DE DIFUSIÓN</a>
      </div>
    </main>
  )
}

export default Webinar