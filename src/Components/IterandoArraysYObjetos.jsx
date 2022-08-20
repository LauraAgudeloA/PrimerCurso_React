import React from 'react'

const IterandoArraysYObjetos = () => {
    
    const animales = ['perro', 'gato', 'hamster', 'pajaro']
  
    const personas=[
        {
            id:0,
            nombre:'Laura',
            puesto:'Developer'
        },
        {
            id:1,
            nombre:'Salomé',
            puesto:'Administradora'
        },
        {
            id:2,
            nombre:'Lina',
            puesto:'Bailarina'
        }
    ]

    return (
    <>
    <h1>Array</h1>
    <ul>
        {animales.map(animal=>(
            <li>{animal}</li>
        ))}
    </ul>
    <br />
    <h1>Objetos</h1>
    <ul>{personas.map(persona=>(
        <li key={persona.id}>
            Id: {persona.id}<br />
            Nombre: {persona.nombre}<br />
            Cargo: {persona.puesto}
        </li>
    ))}</ul>
    
    </>
  )
}

export default IterandoArraysYObjetos