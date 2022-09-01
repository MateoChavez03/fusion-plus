import Content from './Content'
import './index.css'


const Servicios = () => {
  return (
    <main className='divContainer row'> 
      <div className='serviciosBanner col-12 row'>
        <h1><span>NUESTROS</span> SERVICIOS</h1>
        <p>Conocé todos los servicios con los que trabajamos.</p>        
      </div>   
      <Content/>       
    </main>
  )
}

export default Servicios