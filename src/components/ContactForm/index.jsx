import React from 'react';
import './index.css';

const ContactForm = () => {
  return (
    <div className='ContactForm row col-12'>
        <h3>¡CONTACTANOS!</h3>
        <p> Completa el formulario para ponerte en contacto con nosotros. En breve recibirás una respuesta por parte de nuestro equipo. Respetamos tu privacidad. Nunca compartiremos tus datos con terceros. </p>
        <form className='form'>
            <div className='d-flex flex-column flex-lg-row justify-content-center align-content-center form'>
                <div className='inputs d-flex flex-column justify-content-between m-lg-4'>
                    <input className='d-inline-block my-1 my-lg-0' type="text" placeholder='Tu Nombre'/>
                    <input className='d-inline-block my-1 my-lg-0' type="email" placeholder='Tu e-mail' name="" id="" />
                    <input className='d-inline-block my-1 my-lg-0' type="number" placeholder='Tu teléfono' name="" id="" />
                </div>
                <textarea className='consulta my-1 m-lg-4' placeholder='Contanos, ¿en qué podemos ayudarte?' name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='submitBtn' type='button'> ENVIAR MENSAJE </button>
        </form>
    </div>
  )
}

export default ContactForm