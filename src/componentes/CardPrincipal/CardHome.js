import React, {useEffect, useState} from 'react';
import {Link }  from 'react-router-dom';
import './CardHome.css'
import axios from 'axios';
import { actionType } from '../../reducer/reducer';
import { useStateValue } from "../../reducer/StateProvider";



const CardHome = (props) => {

  const [{ character } ]=useStateValue();

  

   /*  const [starW, setStarW] = useState([]);

    const resData = () =>{
        const endPoint = 'https://akabab.github.io/starwars-api/api/all.json'
        axios.get(endPoint)
        .then( response => {
            setStarW(response.data)
        })
    }

    useEffect(() => {
     resData()
    }, []) */


    
   const Capitalize = (str) => { 
      return str.charAt(0).toUpperCase() + str.slice(1);
    }








  return (
    <div className="row my-2 mx-2">
  {character.map((prueba) => (
        <div className="col-3" key={prueba.id}>
        <div className="card my-2">
             <img src={prueba.image}  className="card-img-top" alt="..."/> 
             <button className="favorito"
             onClick={props.addOrRemoveFromFavs} 
             data-movie-id={prueba.id}>🖤
             </button>           
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