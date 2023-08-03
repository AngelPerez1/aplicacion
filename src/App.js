import { useState } from 'react';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {

  return (
    <div className="aplicacion-tareas">
      <div className='frecodecamp-logo-contenedor'>
        <img
          src= {freeCodeCampLogo}
          className='freecodecamp-logo'/>
      </div>
      <div className='tareas-lista-principal' >
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;