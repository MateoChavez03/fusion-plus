import React from 'react';
import Banner from './Banner';
import Fuelle from './Fuelle';
import About  from './About';
import Methodology from './Methodology';
import './index.css'
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Nosotros = () => {
  return (
    <main className='divContainer row'>
      <Whatsapp/>
      <Banner/>
      <Fuelle/>
      <About/>
      <Methodology/>       
    </main>
  )
}

export default Nosotros