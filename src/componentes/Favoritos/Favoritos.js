import React from 'react';
import { Link, Navigate } from "react-router-dom";

const Favoritos = (props) => {

  console.log(props)

      return (
        <>
       
        <h2 className='text-white'>Favoritos</h2>
          <div className="row my-2 mx-2">
          {!props.favoritos.length && <div className='col-12 text-danger'>No Hay Nada en Favoritos</div> }
              {
                  props.favoritos.map( (oneMovie, index) => {
                    return(
                      
                            <div className="col-3" key={index}>
                              <div className="card my-2">
                                <img src={oneMovie.imgURL} style={{height:"300px"}} className="card-img-top" alt="..."/>
                               <button className="favorito"
                                  onClick={props.addOrRemoveFromFavs}
                                  data-movie-id={oneMovie.id}>🖤
                                </button>
                                <div className="card-body text-center" style={{height:"220px"}}>
                                    <h5 className="card-title">{oneMovie.name}</h5>
                                    <p className="card-text">{oneMovie.species}...</p>
                                   
                                    <Link to={`/detalle?id=${oneMovie.id}`} className="btn btn-dark" >View details</Link>
                                  </div>
                              </div>     
                            </div>           
                        
                    )
                  })
              }             
        </div>
        
        
        </>

      )
}

export default Favoritos 