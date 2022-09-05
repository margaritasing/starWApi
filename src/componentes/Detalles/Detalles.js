import React from 'react'
import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Detalles.css'

const Detalles = () => {

    const [starW, setStarW] = useState(null)
    

    let query = new URLSearchParams(window.location.search);
    let id = query.get('id')


    useEffect(() => {       
        const endPoint = `https://akabab.github.io/starwars-api/api/id/${id}.json`              
        axios.get(endPoint).then(response =>{
            const movieData = response.data;
            console.log(movieData)
            setStarW(movieData)
        })
        .catch(error =>{
            alert("Error", "Hubo un error", "error")
        })      
        }, [id])


     
   const Capitalize = (str) => { 
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


 


  return (
    <>
    <div className="row text-white detalle-container my-3" style={{margin:"0px"}}>
    { starW &&
        <>
        <h2>{Capitalize(starW.name)} </h2>
        <div className="col-4">
            <img src={starW.image} style={{borderRadius:"20px"}}  className="img-fluid" alt="poster"/>
        </div>
        <div className="col-4">    
            {starW.bornLocation ? <h5>Nacimiento: {Capitalize(starW.bornLocation)} </h5> : <h5></h5> }             
            { starW.homeworld ? <h5>Residencia: {starW.homeworld} </h5>: <h5></h5> }
            
             <h5>Estatura: {starW.height}</h5>
             <h5>Genero: {Capitalize(starW.gender)} </h5>
             {starW.cybernetics ? <h5> Partes Mecanicas: {Capitalize(starW.cybernetics) } </h5>:<h5></h5> }
             
             <h5> Muerte a los: {starW.died } años </h5>
             { starW.diedLocation ? <h5> Lugar de Fallecimiento: {Capitalize(starW.diedLocation) } </h5>: <h5></h5> }
             
             
             
        </div>
       
            <div className="col-4">  
            {starW.affiliations ? 
                <div>
                <h5>Aliado: </h5>
                <ul style={{ listStyleType:"none"  }}>
                {starW.affiliations.map(oneGenre => <li key={oneGenre.id}>{oneGenre}</li>)}               
            </ul>             
            </div>      
                
              :
              <div>
                <h5>Aliados: </h5>
                
                <h6>{starW.affiliations}</h6>
              
                </div>  
        }

        {starW.masters  ? 
            <div>
            <div>
                <h5>Maestros: </h5>
                <h6 > {starW.masters},  </h6>
            </div>
            </div>
          :
           <div>
           {starW.masters ?
            <>
            <h5>Maestros: </h5>
           <ul style={{ listStyleType:"none"  }}>
               {starW.masters.map(maestro => <li key={maestro.id}>{maestro}</li>)}               
           </ul>
            </>
            :
            <h6></h6>

        }
           
      </div>

          

        }

        {starW.apprentices ? 
            <div>
                <h5>Alumnos (as): </h5>
                <ul style={{ listStyleType:"none"  }}>
                {starW.apprentices.map(alumno => <li key={alumno.id}>{alumno}</li>)}               
                </ul>           
            </div>:
            <div></div>
        }
                  
          
             
            
             
        </div>


       
        
        </>    
        } 
        </div>      
    </>
  )
  
  
}

export default Detalles