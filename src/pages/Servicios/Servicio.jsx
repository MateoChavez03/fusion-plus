import servicios from "./servicios"

const Servicio = ({servicio, imagen}) => {
  return (
    <div className="serviciosContainer col-12 row">
      
      <div className='servicio col-12 row'>
        {imagen === 'l' && <img src={`/images/${servicios[servicio].image}.png`} alt={servicios[servicio].alt} className='servicioImg col-4'/>}        
        <div className='servicioInfo col-8 row'>
          <div>
            <h2 className="servicioTitle">{servicios[servicio].title}</h2>
            <p className="servicioP">{servicios[servicio].description}</p>
          </div>
          <div className="servicioBtns">
            <button className="servicioBtn">CONTRATAR SERVICIO</button>
            <button className="servicioBtn">MÁS INFORMACIÓN</button>
          </div>
        </div>  
        {imagen === 'r' && <img src={`/images/${servicios[servicio].image}.png`} alt={servicios[servicio].alt} className='servicioImg col-4'/>}
      </div>

    </div>
  )
}

export default Servicio