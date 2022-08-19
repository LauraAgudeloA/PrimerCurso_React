import React, { useState } from 'react'

const Formularios = () => {

    const [nombre, setNombre] = useState(false)
    const [apellido, setApellido] = useState(false)
    const [email, setEmail] = useState(false)
    const [contrasena, setContrasena] = useState(false)


    const nombreRegex=/^[a-zA-Z]{3,16}$/
    const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
    const apellidoRegex=/^[a-zA-Z]{3,16}$/
    const contrasenaRegex=/^[a-z0-9_-]{6,18}$/   


    const valorNombre=(nombreValidar)=>{
        if(nombreValidar.trim()){
          if(nombreRegex.test(nombreValidar)){
              setNombre(true)
          }
        }
    }
    
    const valorApellido=(apellidoValidar)=>{
        if(apellidoValidar.trim()){
            if(apellidoRegex.test(apellidoValidar)){
                setApellido(true)
            }
        }
    }
    
    const valorEmail=(emailValidar)=>{
         if(emailValidar.trim()){
             if(emailRegex.test(emailValidar)){
                 setEmail(true)
             }
         }
    }
    
    const valorContrasena=(cpntrasenaValidar)=>{
         if(cpntrasenaValidar.trim()){
             if(contrasenaRegex.test(cpntrasenaValidar)){
                 setContrasena(true)
             }
         }
    }


    const enviar=(e)=>{
        e.preventDefault()
        if(nombre===true && 
            apellido===true &&
            email===true && 
            contrasena===true){
                alert('Los datos han sido validados correctamente')
            }else{
                alert('Envia los datos correctamente y no dejes ningún campo vacio')
            } 
   
            setTimeout(()=>{window.location.reload()},5000)
    }


    return (
        <>
            <form onSubmit={e=>enviar(e)}>
                <h3>Escribe Nombre:</h3>
                <input type="text" onChange={e=>valorNombre(e.target.value)}/>
                <h3>Escribe Apellido:</h3>
                <input type="text" onChange={e=>valorApellido(e.target.value)}/>
                <h3>Escribe Email:</h3>
                <input type="email" onChange={e=>valorEmail(e.target.value)}/>
                <h3>Escribe Contraseña:</h3>
                <input type="password" onChange={e=>valorContrasena(e.target.value)}/> <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Formularios