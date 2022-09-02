import React, {useEffect, useState} from 'react';
import axios from 'axios'


const CardHome = () => {

    const [starW, setStarW] = useState([]);

    const resData = () =>{
        
    }








  return (
    <div className="row my-2 mx-2">
    <div className="col-3">
    <div className="card my-2">
     {/*    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} style={{height:"300px"}} className="card-img-top" alt="..."/> */}
       
       <div className="card-body text-center">
          <h5 className="card-title">hola</h5>
          <p className="card-text">hola</p>
        { /*  <Link to="" className="btn btn-dark" >View details</Link> */}
      </div>
    </div>     
  </div> 
  </div>
  )
}

export default CardHome