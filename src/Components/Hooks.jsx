import React, { useState, useEffect } from "react";

const Hooks = () => {

    const[color, setColor] = useState('yellow')
    const[contador, setContador]=useState(0)

    useEffect(()=>{
        let intervalo=setInterval(()=>{
            setContador(contador+1)
        },1000)
        return()=>{
            clearInterval(intervalo)
        }
    },[contador])

    const fondo = {
        with: '100%',
        height: '1000px',
        backgroundColor: color
    }

    const cambioColor=()=> {
        if(color)
        setColor('orangered')
        if(color === 'orangered')
        setColor('blue')
    }

    return (
        <>
            <div style={fondo} className="container">
                <button onClick={cambioColor}>Cambiar color</button>
            <h1>Contador: {contador}</h1>
            </div>
        </>
    )
}

export default Hooks