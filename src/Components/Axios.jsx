import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Axios = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const cargarUsuarios = async () => {
            const res = await axios('https://jsonplaceholder.typicode.com/users')
            console.log(res.data)
            setUsers(res.data)
        }
        cargarUsuarios()
    }, [])

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id} style={{ paddingBottom: "1rem" }}>
                        Nombre: {user.name}<br />
                        Apellido: {user.username}<br />
                        Email: {user.email}<br />
                        Teléfono: {user.phone}<br />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Axios