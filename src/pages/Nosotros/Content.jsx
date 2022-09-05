import valores from "../../assets/valores.png";
import metodologia from "../../assets/metodologia.png";
import proposito from "../../assets/proposito.png";

const Content = ({content}) => {

  return (
    <>
      {
      content === 'valores' && 
        <div className="contentContainer col-12">
          <p className="contentP"> <span>Nuestros valores</span> guían la manera en la que nos relacionamos con clientes, proveedores/as y equipo. Hablan de nuestra identidad y de nuestra manera de ver el mundo.</p>
          <p className="contentP"><span>Crear, generar, tomar riesgos, emprender.</span> ¡es por ahí!. En la relación con el cliente ponemos todos nuestros recursos para hacer contenido y estrategias de calidad. Buscamos un diferencial con creatividad y siempre poniendo un plus.</p>
          <img className='contentImg' src={valores} alt='valores'></img>
        </div>
      }
      {
      content === 'metodologia' && 
        <div className="contentContainer col-12">
          <p className="contentP"> <span>Es 100% original y personalizable</span> ya que nos adaptamos a las necesidades de tu servicio/producto/emprendimiento. Generamos una idea que se identifique con vos y que se destaque del resto. Siempre <span>con creatividad</span>, al tope con las tendencias del momento y <span>poniendo un plus.</span></p>          
          <img className='contentImg' src={metodologia} alt='metodologia'></img>
        </div>
      }
      {
      content === 'propositos' && 
        <div className="contentContainer col-12">
          <p className="contentP"> La esencia del estudio es de <span>emprender 100%, y no de quedarse.</span>Por eso en el estereotipo ideal de cliente encontramos al emprendedor que ve a las redes sociales como una herramienta primordial para el desarrollo de su marca/servicio/producto, y que, además, tenga la necesidad de crecimiento.Consideramos que resolver problemas difíciles requiere del mejor talento.</p>          
          <img className='contentImg' src={proposito} alt='proposito'></img>
        </div>
      }
    </>
  )
}

export default Content