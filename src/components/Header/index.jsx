import { NavLink } from "react-router-dom"
import hamburger from "../../assets/hamburger.svg"
import React, { useEffect, useState } from "react"
import "./index.css"


const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [opacity, setOpacity] = useState(1)


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)  
      setNavbarOpen(false)   
      setOpacity(1)
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const handleClick = () => {
    if (navbarOpen) {
      setOpacity(0)
      setTimeout(() => {
        setNavbarOpen(false)
      }, 300)
    } else {      
      setOpacity(0) 
      setNavbarOpen(true) 
      setTimeout(() => {
        setOpacity(1) 
      }, 1)    
      
    }
  }

  return (
    <div className="col-12 d-flex flex-row justify-content-between px-5" id="header">
      <div className="text-start d-flex align-items-center headerLogo">fusion +</div>
      {windowSize < 765 &&
      <div className="hamburger d-flex align-items-center">
        <img className="hamburgerIcon" height={20} src={hamburger} alt="hamburger" onClick={handleClick}/>        
      </div>}
      {navbarOpen === false & windowSize < 765
        ? 
          <></>
        :         
          <div className="navbar d-flex justify-content-center justify-content-md-end align-items-center" style={{ opacity:opacity }}>
            <NavLink to="/"  className="navItem" onClick={handleClick}>Nosotros</NavLink>
            <NavLink to="/servicios"  className="navItem" onClick={handleClick}>Servicios</NavLink>
            <NavLink to="/clientes"  className="navItem" onClick={handleClick}>Clientes</NavLink>
            <NavLink to="/webinar"  className="navItem" onClick={handleClick}>Webinar</NavLink>
            <NavLink to="/contacto"  className="navItem" onClick={handleClick}>Contacto</NavLink>
          </div>
      }
    </div> 
  )
}

export default Header