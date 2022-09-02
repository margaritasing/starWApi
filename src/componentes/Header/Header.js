import React from 'react'
import {Link } from 'react-router-dom'

/* import Buscador from './Buscador'; */

const Header = () => {
  

  return (
    <>
      

    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div className="container-fluid">            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">            
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                <Link to="/listado" className="nav-link" >Listado</Link>                    
                <Link to="/favoritos" className="nav-link" >Favoritos</Link>  
                <Link to="/banderas" className="nav-link" >Banderas</Link>   
                <span className='d-flex text-white align-items-center'>       
             
                
  </span>                      
            </div>
        </div>
   
     </div>
</nav>

    
    
    
    
    
    </>  

  )
}

export default Header