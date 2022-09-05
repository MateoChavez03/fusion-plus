import React from 'react';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import BannerLanding from '../../components/BannerLanding/BannerLandingContacto';
import ContactForm from '../../components/ContactForm';
import './index.css';

const Contacto = () => {
  return (
    <main className='divContainer contacto row'>
      <Whatsapp />
      <BannerLanding />
      <div className='contactoLanding col-12 row d-flex'>
        <h2> ¿EMPRENDES? </h2>
        <p>
        Perfecto, <span className='boldSpan'>estamos en la misma.</span> Escribinos que presupuestamos sin cargo y con opciones de planes, <span className='borderSpan'>¿OPCIONES? </span> 
        ¡Si, <span className='boldSpan'>todo lo adaptamos</span> a las necesidades de tu emprendimiento y más!
        </p>
      </div>
      <hr className='line'/>
      <ContactForm />
      <div className='contactoInfo col-12 row'>
        <p className='textStyle1'> TAMBIEN PODES MANDARNOS UN EMAIL </p>
        <p className='textStyle2'> estudiofusionplus@gmail.com </p>
        <p className='textStyle1'> O ESCRIBIRNOS AL WHATSAPP </p>
        <p className='textStyle2'> +54 9 221 680 6935 </p>
      </div>
      <p className='contactoEndBanner'> <span> SIEMPRE VAMOS A BUSCAR </span> UN PLUS EN TODO PARA TU CRECIMIENTO</p>
    </main>
  )
}

export default Contacto