import React, {useEffect, useState} from 'react';
import {Link }  from 'react-router-dom';
import axios from 'axios';


const CardHome = () => {

    const [starW, setStarW] = useState([]);

    const resData = () =>{
        const endPoint = 'https://akabab.github.io/starwars-api/api/all.json'
        axios.get(endPoint)
        .then( response => {
            setStarW(response.data)
        })
    }

    useEffect(() => {
     resData()
    }, [])


    
   const Capitalize = (str) => { 
      return str.charAt(0).toUpperCase() + str.slice(1);
    }








  return (
    <div className="row my-2 mx-2">
  {starW.map((prueba) => (
        <div className="col-3" key={prueba.id}>
        <div className="card my-2" style={{ borderRadius:"20px"}}>
             <img src={prueba.image} style={{height:"300px", borderRadius:"20px"}} className="card-img-top" alt="..."/> 
           
           <div className="card-body text-center">
              <h5 className="card-title">{Capitalize(prueba.name)}</h5>
              <p className="card-text">{Capitalize(prueba.species)}</p>
              <Link to={`/detalle?id=${prueba.id}`} className="btn btn-dark" >View details</Link>
          </div>
        </div>     
      </div>
    ))

    }
  </div>
  )
}

export default CardHome