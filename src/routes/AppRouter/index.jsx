import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Nosotros from '../../pages/Nosotros';
import Servicios from '../../pages/Servicios';
import Clientes from '../../pages/Clientes';
import Contacto from '../../pages/Contacto';
import Webinar from '../../pages/Webinar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Nosotros />}> </Route>
        <Route path='/Servicios' element={<Servicios />}> </Route>
        <Route path='/Clientes' element={<Clientes />}> </Route>
        <Route path='/Contacto' element={<Contacto />}> </Route>
        <Route path='/Webinar' element={<Webinar />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter