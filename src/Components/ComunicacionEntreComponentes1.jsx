import React from 'react'

const ComunicacionEntreComponentes1 = (props) => {
    //comunicacion padre a hijo
    if (props.cambioEstado===true) {
       console.log('El estado ha cambiado a verdadero') 
    }

    const llama=()=>{
        //Comunicacion hijo a padre
        //por medio de las props llama a una funcion
        props.llamaPadre()
    }

    const llamaHermano=()=>{
        //Comunicacion entre hermanos
        props.llamaAHermano2()
    }

  return (
    <>
    <button onClick={llama}> Llama a padre</button>
    <button onClick={llamaHermano}> Llama a hermano</button>
    </>
  )
}

export default ComunicacionEntreComponentes1