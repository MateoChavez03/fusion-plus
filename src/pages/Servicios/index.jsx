import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Content from './Content'
import './index.css'
import Whatsapp from '../../components/Whatsapp/Whatsapp';


const Servicios = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className='divContainer row'> 
      <Whatsapp/>
      <div className='serviciosBanner col-12 row'>
        <h1><span>NUESTROS</span> SERVICIOS</h1>
        <p>Conocé todos los servicios con los que trabajamos.</p>        
      </div>   
      <Content/>       
    </main>
  )
}

export default Servicios