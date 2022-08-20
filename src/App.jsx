// import React,{Fragment} from 'react'
//import logo from './logo.svg';
import React, { useState } from 'react';
//import './App.css';
//import PrimerComponente from './Components/primerComponente.jsx';
// import Props from './Components/Props';
// import State from './Components/State';
// import EstilosTradicionales from './Components/EstilosTradicionales';
// import EstilosEnLinea from './Components/EstilosEnLinea';
// import EstilosEnModulo from './Components/EstilosEnModulo/EstilosEnModulo';
// import EstilosConStyled from './Components/EstilosConStyled';
//import Refs from './Components/Refs';
//import CicloVidaComponentes from './Components/CicloVidaComponentes';
//import Hooks from './Components/Hooks';
//import Formularios from './Components/Formularios';
//import Eventos from './Components/Eventos';
//import RenderizadoCondicional from './Components/RenderizadoCondicional';
//import SpreadOperator from './Components/SpreadOperator';
//import IterandoArraysYObjetos from './Components/IterandoArraysYObjetos';
//import IterarKeys from './Components/IterarKeys';
//import Padre from './Components/IterandoComponentes/Padre';
//import ComunicacionEntreComponentes1 from './Components/ComunicacionEntreComponentes1';
//import ComunicacionEntreComponentes2 from './Components/ComunicacionEntreComponentes2';
//import Fetch from './Components/Fetch';
//import Axios from './Components/Axios';
import Padre from './Components/Rutas/Padre';



//Esto es un componente funcional
//Trabajo modular en Javascript
function App() {

  // const [estado, setEstado]=useState(false)

  // const estadoComponente=()=>(
  //   setEstado(true)
  // )

  // const hijosLlamaPadre=()=>{
  //   console.log('Llamando a padre desde el componente hijo')
  // }

  // const llamandoAHermano=()=>{
  //   setEstado(true)
  // }

  return (
   //Es posible usar Fragment para meter en un contenedor lo que queramos
      <>
      {/* <PrimerComponente/> */}
      {/* <Props nombre="Laura"/> */}
      {/* <State/> */}
      {/* <EstilosTradicionales/> */}
      {/* <EstilosEnLinea/> */}
      {/* <EstilosEnModulo/> */}
      {/* <EstilosConStyled/> */}
      {/* <Refs/> */}
      {/* <CicloVidaComponentes/> */}
      {/* <Hooks/> */}
      {/* <Formularios/> */}
      {/* <Eventos/> */}
      {/* <RenderizadoCondicional/> */}
      {/* <SpreadOperator/> */}
      {/* <IterandoArraysYObjetos/> */}
      {/* <IterarKeys/> */}
      {/* <Padre/> */}
      {/* <ComunicacionEntreComponentes1 llamaAHermano2={llamandoAHermano} llamaPadre={hijosLlamaPadre} cambioEstado={estado}/>
      <ComunicacionEntreComponentes2 nuevoEstado={estado}/> */}

      {/* <button onClick={estadoComponente}>Pulsa aquí</button> */}  
      {/* <Fetch/> */}

      {/* <Axios/> */}
      <Padre/>
      </>
  );
}

export default App;
