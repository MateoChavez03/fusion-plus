import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import Fuelle from './Fuelle';
import About  from './About';
import Methodology from './Methodology';
import './index.css'
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Nosotros = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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