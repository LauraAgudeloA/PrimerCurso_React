import React,{createRef} from 'react'

const Refs = () => {
    const cambioColor = createRef()

    const cambioColorTexto=()=>{
        if (cambioColor.current.style.color==='black') {
            cambioColor.current.style.color='blue'
        }else{
            cambioColor.current.style.color='black'
        }
    }

  return (
    <>
        <h1 ref={cambioColor}>Soy un titulo y cambio de color</h1>
        <button onClick={cambioColorTexto}>Cambiar color</button>
    </>
  )
}

export default Refs