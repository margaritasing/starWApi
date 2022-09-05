import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import CardHome from './componentes/CardPrincipal/CardHome'; 
import Detalles from './componentes/Detalles/Detalles';
import Header from './componentes/Header/Header';


function App() {
  return (
    <>
    <Header/>
    <div className="container">
    <Routes>
    <Route exact path='/' element={<CardHome />} />   
    <Route  path='/detalle' element={<Detalles />} />          
    </Routes>
    </div>
    </>
    );
}

export default App;
