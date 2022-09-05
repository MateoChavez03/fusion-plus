import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import BannerLanding from '../../components/BannerLanding/BannerLandingWebinars';
import './index.css';

const Webinar = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className='divContainer webinar row'>
      <Whatsapp />
      <BannerLanding />
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
        <a href="https://wa.me/+5492216806935?text=Hola,%20buen%20día.%20Me%20gustaría%20anotarme%20para%20los%20futuros%20Webinars%20de%20Fusión%20Plus." rel="noreferrer" target="_blank" className='joinList'>UNIRME A LISTA DE DIFUSIÓN</a>
      </div>
    </main>
  )
}

export default Webinar