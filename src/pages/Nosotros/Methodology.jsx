import { useState } from "react";
import Content from "./Content";
/* import paperBg from "../../assets/paperBg.png"; */


const Methodology = () => {  
  const [activeBtn, setActiveBtn] = useState('valores')
  const [visible, setVisible] = useState(1)
  

  const changeActiveBtn = (e) => {
    setVisible(0)     
    setTimeout(() => {
      setActiveBtn(e.target.id)
      setVisible(1)      
    }, 500);

  }

  return (
    <div className='methodologyContainer col-12 row' /* style={{backgroundImage: `url(${paperBg})`, WebkitBackgroundSize: 'cover'}} */>
      <div className="mthBtns col-12 row">   
        {/* BOTONERA */}       
        {activeBtn === 'valores' 
          ? <button className='mthBtn col-4' id='valores' onClick={changeActiveBtn} style={{backgroundColor:'#E0FD05'}}>Valores</button>
          : <button className='mthBtn col-4' id='valores' onClick={changeActiveBtn}>Valores</button>
        }        
        {activeBtn === 'metodologia' 
          ? <button className='mthBtn col-4' id='metodologia' onClick={changeActiveBtn} style={{backgroundColor:'#E0FD05'}}>Metodología de Trabajo</button>
          : <button className='mthBtn col-4' id='metodologia' onClick={changeActiveBtn}>Metodología de Trabajo</button>
        }        
        {activeBtn === 'propositos' 
          ? <button className='mthBtn col-4' id='propositos' style={{backgroundColor:'#E0FD05'}}>Propósitos</button>
          : <button className='mthBtn col-4' id='propositos' onClick={changeActiveBtn} >Propósitos</button>
        }  


      </div>
        {/* CONTENIDO */}
        <div id="contentContainer" style={{opacity: `${visible}`}}><Content content={activeBtn}/></div>
        

    </div>
  )
}

export default Methodology