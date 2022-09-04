import servicios from "./servicios"

const Servicio = ({servicio, imagen}) => {
  return (
    <div className="serviciosContainer col-12 row">
      
      <div className='servicio col-12 row'>
        {imagen === 'l' && <img src={`/images/${servicios[servicio].image}.png`} alt={servicios[servicio].alt} className='servicioImg col-12 col-md-4'/>}        
        <div className='servicioInfo col-12 col-md-8 row'>
          <div>
            <h2 className="servicioTitle">{servicios[servicio].title}</h2>
            <p className="servicioP">{servicios[servicio].description}</p>
          </div>
          <div className="servicioBtns">
            <a href={`https://wa.me/+5492216806935?text=${servicios[servicio].message}`} rel="noreferrer" target="_blank">                                
              <button className="servicioBtn">CONTRATAR SERVICIO</button>
            </a>
            {/* <button className="servicioBtn">MÁS INFORMACIÓN</button> */}
          </div>
        </div>  
        {imagen === 'r' && <img src={`/images/${servicios[servicio].image}.png`} alt={servicios[servicio].alt} className='servicioImg col-12 col-md-4'/>}
      </div>

    </div>
  )
}

export default Servicio