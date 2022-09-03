import React from 'react';
import './index.css';

const ContactForm = () => {
  return (
    <div className='ContactForm row col-12'>
        <h3>¡CONTACTANOS!</h3>
        <p> Completa el formulario para ponerte en contacto con nosotros. En breve recibirás una respuesta por parte de nuestro equipo. Respetamos tu privacidad. Nunca compartiremos tus datos con terceros. </p>
        <form action="">
            <div className='d-flex justify-content-center'>
                <div className='inputs d-flex flex-column justify-content-between m-4'>
                    <input className='d-inline-block' type="text" placeholder='Tu Nombre'/>
                    <input className='d-inline-block' type="email" placeholder='Tu e-mail' name="" id="" />
                    <input className='d-inline-block' type="number" placeholder='Tu teléfono' name="" id="" />
                </div>
                <textarea className='consulta m-4' placeholder='Contanos, ¿en qué podemos ayudarte?' name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='submitBtn' type='button'> ENVIAR MENSAJE </button>
        </form>
    </div>
  )
}

export default ContactForm