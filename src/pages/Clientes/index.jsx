import React from 'react';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import BannerLanding from '../../components/BannerLanding/BannerLandingClientes';
import ComentariosClientes from '../../components/ComentariosClientes';
import './index.css';

const Clientes = () => {
  return (
    <main className='divContainer clientes row'>
      <BannerLanding />
      <Whatsapp />
      <div className='clientesLanding col-12 d-flex flex-column flex-lg-row align-items-center my-lg-5'>
        <div>
          <p>
            Siempre colaborando con el <span>progreso de nuestros clientes. </span>
            Nuestro objetivo es siempre pensar e inspirar estrategias y soluciones que apoyen y resuelvan los desafios de crecimiento.
            Aquel emprendedor que ve a las redes sociales como una herramienta primordial para el desarrollo de su marca/servicio/producto. Y que tenga la necesidad de crecimiento.
          </p>
          <p>
            Trabajamos de forma constante con 8/10 clientes de diversos rubros (cosmética natural, inmobiliaria, gimnasio, comercios) lo que demuestra la <span>versatilidad que tenemos como equipo. </span>
            Y con la posibilidad concreta de que el cliente crezca.
          </p>
        </div>
        <img className='clientesLandingImg' src="/images/clientesLanding.png" alt="Landing clientes" />
      </div>
      <ComentariosClientes />
      <p className='clientesEndBanner'> <span className='cita'> "La calidad en un producto o servicio no es lo que tú pones, sino </span>LO QUE EL CLIENTE OBTIENE." <span className='autor'>Peter Ducker</span></p>
    </main>
  )
}

export default Clientes