// import React,{Fragment} from 'react'
import logo from './logo.svg';
import './App.css';
//import PrimerComponente from './Components/primerComponente.jsx';
// import Props from './Components/Props';
// import State from './Components/State';
// import EstilosTradicionales from './Components/EstilosTradicionales';
// import EstilosEnLinea from './Components/EstilosEnLinea';
// import EstilosEnModulo from './Components/EstilosEnModulo/EstilosEnModulo';
import EstilosConStyled from './Components/EstilosConStyled';

//Esto es un componente funcional
//Trabajo modular en Javascript
function App() {
  return (
   //Es posible usar Fragment para meter en un contenedor lo que queramos
      <>
      {/* <PrimerComponente/> */}
      {/* <Props nombre="Laura"/> */}
      {/* <State/> */}
      {/* <EstilosTradicionales/> */}
      {/* <EstilosEnLinea/> */}
      {/* <EstilosEnModulo/> */}
      <EstilosConStyled/>
      </>
  );
}

export default App;
