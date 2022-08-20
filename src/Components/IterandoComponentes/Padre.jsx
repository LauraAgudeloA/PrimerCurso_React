import React from 'react'
import { Hijo } from './Hijo'

const Padre = () => {

    const nombres = ['Laura', 'Lina', 'Salomé']

    return (
        <>
            <ul>{nombres.map(nombre => (

                <Hijo nombreLista={nombre} />
            ))}
            </ul>
        </>
    )
}

export default Padre