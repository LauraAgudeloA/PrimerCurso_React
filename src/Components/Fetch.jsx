import React from 'react'
import { useState, useEffect } from 'react'

//Peticiones a APIS externas para hacer uso de ellas en la app
const Fetch = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const cargarUsuarios = async () => {
            //await es esperar para que no salga error al solicitar la petición http
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            //Actualizar el array con la data obtenida en formato json
            setUsers(data)
            console.log(data)
        }
        cargarUsuarios()
    }, [])

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id} style={{paddingBottom:"1rem"}}>
                        Nombre: {user.name}<br/>
                        Apellido: {user.username}<br/>
                        Email: {user.email}<br/>
                        Teléfono: {user.phone}<br/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Fetch