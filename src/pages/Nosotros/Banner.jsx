import celphone from "../../assets/celphone.png";

const Banner = () => {
  return (
    <div className='homeBaner col-12 row'>
    <div className='bannerText col-12 col-md-6 text-center'>
      <p className='bannerP1'>Somos #fusionestudiomas</p>
      <h1>ESTUDIO DEDICADO A SOCIAL MEDIA</h1>
      <p className='bannerP2'>La esencia del Estudio es la de emprender 100%</p>
      <p className='bannerP3'>En fusión + nos especializamos en creación y gestión de contenidos, manejo de redes sociales, creación y renovación de imagen e identidad, e-commerce, fotografía de productos, y <span>¡Mucho más!</span></p>
      <div className='bannerBtns col-12 row'>
        {/* <button className='bannerBtn1 col-5'>CONTACTANOS</button> */}
        <a href="mailto:estudiofusionplus@gmail.com" rel="noreferrer" target="_blank" className="instaBtn col-5 row"><button className='bannerBtn1 col-12'>CONTACTANOS</button></a>  
        <a href="https://www.instagram.com/fusionestudiomas/" rel="noreferrer" target="_blank" className="instaBtn col-5 row"><button className='bannerBtn2 col-12'>INSTAGRAM</button></a>  
      </div>
    </div> 
    <div className='bannerImg col-12 col-md-6 text-center row'>
      <img className='celphoneImg' src={celphone} alt='celphone'></img>
    </div> 
  </div> 
  )
}

export default Banner