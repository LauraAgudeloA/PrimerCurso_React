import React, { useState } from 'react'

const RenderizadoCondicional = () => {

    const [nombre, setNombre] = useState(null)
    const [apellido, setApellido] = useState(null)
    const [email, setEmail] = useState(null)
    const [contrasena, setContrasena] = useState(null)


    const nombreRegex = /^[a-zA-Z]{3,16}$/
    const emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
    const apellidoRegex = /^[a-zA-Z]{3,16}$/
    const contrasenaRegex = /^[a-z0-9_-]{6,18}$/


    const valorNombre = (nombreValidar) => {
        if (nombreValidar.trim()) {
            if (nombreRegex.test(nombreValidar)) {
                setNombre(true)
            } else {
                setNombre(false)
            }
        }
    }

    const valorApellido = (apellidoValidar) => {
        if (apellidoValidar.trim()) {
            if (apellidoRegex.test(apellidoValidar)) {
                setApellido(true)
            } else {
                setApellido(false)
            }
        }
    }

    const valorEmail = (emailValidar) => {
        if (emailValidar.trim()) {
            if (emailRegex.test(emailValidar)) {
                setEmail(true)
            } else {
                setEmail(false)
            }
        }
    }

    const valorContrasena = (cpntrasenaValidar) => {
        if (cpntrasenaValidar.trim()) {
            if (contrasenaRegex.test(cpntrasenaValidar)) {
                setContrasena(true)
            } else {
                setContrasena(false)
            }
        }
    }


    const enviar = (e) => {
        e.preventDefault()
        if (nombre === true &&
            apellido === true &&
            email === true &&
            contrasena === true) {
            console.log('Los datos han sido validados correctamente')
        } else {
            console.log('Envia los datos correctamente y no dejes ningún campo vacio')
        }

        setTimeout(() => { window.location.reload() }, 5000)
    }


    return (
        <>
            <form onSubmit={e => enviar(e)}>
                <h3>Escribe Nombre:</h3>
                {nombre === false ? <h4>Escriba su nombre correctamente</h4> : null}
                <input type="text" onChange={e => valorNombre(e.target.value)} />
                <h3>Escribe Apellido:</h3>
                {apellido === false ? <h4>Escriba su apellido correctamente</h4> : null}
                <input type="text" onChange={e => valorApellido(e.target.value)} />
                <h3>Escribe Email:</h3>
                {email === false ? <h4>Escriba su email correctamente</h4> : null}
                <input type="email" onChange={e => valorEmail(e.target.value)} />
                <h3>Escribe Contraseña:</h3>
                {contrasena === false ? <h4>Escriba su contraseña correctamente</h4> : null}
                <input type="password" onChange={e => valorContrasena(e.target.value)} /> <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default RenderizadoCondicional