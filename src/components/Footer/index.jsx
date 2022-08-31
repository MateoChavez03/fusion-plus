import React from 'react';
import './index.css';

import { FaBehance, FaInstagram, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer' className='d-flex flex-row justify-content-between align-items-center p-5 '>
      <div className='d-flex flex-column align-items-start'>
        <p className='pb-1 info'>La Plata.</p>
        <p className='info'>Ciudad de Buenos Aires</p>
        <p className='py-1 info'>Argentina.</p>
        <p className='pt-4 info align-self-end'>© 2022 FUSION + Todos los derechos reservados.</p>
      </div>
{/*       <div className='align-self-end footerLogo'>
        fusion +
      </div> */}
      <div className='d-flex flex-column align-items-end'>
        <p className='pb-2 info'>estudiofusionplus@gmail.com</p>
        <p className='py-1 info'>+54 9 2216806935</p>
        <div className='pt-4'>
          <FaInstagram size={32} className='mx-2' />
          <FaBehance size={32} className='mx-2'/>
          <FaFacebookF size={32} className='ms-2'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer