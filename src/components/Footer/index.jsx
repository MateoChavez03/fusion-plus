import React from 'react';
import './index.css';

import { FaBehance, FaInstagram, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
      <footer id='footer' className='d-flex flex-column flex-sm-row justify-content-between align-items-center px-5'>
        <div className='d-flex flex-column align-items-center mt-5 mt-sm-0 align-items-sm-start'>
          <p className='pb-1 info'>La Plata.</p>
          <p className='info'>Ciudad de Buenos Aires</p>
          <p className='py-1 info'>Argentina.</p>
          <p className='pt-4 info'>© 2022 FUSION + Todos los derechos reservados.</p>
        </div>
        <div className='d-flex flex-column align-items-center mt-5 mt-sm-0 align-items-sm-end'>
          <p className='pb-3 info'>estudiofusionplus@gmail.com</p>
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