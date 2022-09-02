import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import CardHome from './componentes/CardPrincipal/CardHome'; 
import Header from './componentes/Header/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route exact path='/listado' element={<CardHome />} />   
    </Routes>
    </div>
  );
}

export default App;
