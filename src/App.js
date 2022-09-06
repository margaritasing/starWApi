import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import CardHome from './componentes/CardPrincipal/CardHome'; 
import Detalles from './componentes/Detalles/Detalles';
import Header from './componentes/Header/Header';
import axios from 'axios';
import { actionType } from './reducer/reducer';
import { useStateValue } from "./reducer/StateProvider";
import Favoritos from './componentes/Favoritos/Favoritos';




function App() {

  const [ character, dispatch]=useStateValue()
 

  useEffect(() => {       
    const endPoint = 'https://akabab.github.io/starwars-api/api/all.json';
    axios.get(endPoint).then(response =>{
        dispatch({
          type: actionType.CHARACTERDB,
          character:response.data
        })       
    })
    .catch(error =>{
        alert("Hubo un error")
    })
  
    }, [])

    

    /* ***************************************************** */

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favInLocal = localStorage.getItem('favo');
       
        if (favInLocal !== null) {
          const favsArrays = JSON.parse(favInLocal);
         
          setFavoritos(favsArrays);        
        }
    }, [])
    

  const addOrRemoveFromFavs=  e =>{

    const favMovie = localStorage.getItem('favo');

    let tempMoviesInFavs;
  
    if (favMovie === null) {
      tempMoviesInFavs = []    
    }else{    
      tempMoviesInFavs = JSON.parse(favMovie)
    }


    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const name =  parent.querySelector('h5').innerText;
    const species =  parent.querySelector('p').innerText;
    const movieData = {
      imgURL, name, species,
      id:btn.id
    }

    console.log(movieData)

    let movieIsInArray = tempMoviesInFavs.find(oneMovie =>{
      return oneMovie.name === movieData.name
    }) 

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);      
      localStorage.setItem('favo', JSON.stringify(tempMoviesInFavs));
      setFavoritos(tempMoviesInFavs);
      alert("Se agrego la pelicula a favoritos");             
    } else {
        let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.name !== movieData.name
      })

      localStorage.setItem('favo', JSON.stringify(moviesLeft));
      setFavoritos(moviesLeft);
      alert("Se elimino la pelicula de favoritos");
    } 
 
  }





    


 




  return (
    <>
    <BrowserRouter>
      <Header favoritos={favoritos}/>
      <div className="container">
        <Routes>
        <Route exact path='/' element={<CardHome  addOrRemoveFromFavs={addOrRemoveFromFavs} />} />   
        <Route  path='/detalle' element={<Detalles />} />   
        <Route path='/favoritos' element={<Favoritos favoritos={favoritos} addOrRemoveFromFavs={addOrRemoveFromFavs} /> }   />    
        </Routes>
      </div>
    </BrowserRouter>
    </>
    
    
    
    
  
    );
}

export default App;
