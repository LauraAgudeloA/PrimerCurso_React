import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import Componente3 from "./Componente3";

import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

const Padre = () => {
  return (
    <>
        <BrowserRouter>
        <Route path="/" component={Componente1}></Route>
        </BrowserRouter>
    </>
  )
}

export default Padre