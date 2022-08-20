import React from 'react'

const IterarKeys = () => {

    const animal = {
        nombre:'coco',
        especie:'delfin',
        edad:5,
        acuario:'Valencia',
        administrador:'Marcello'
    }
    //Llaves: nombre
    //Valor:Coco
    const key=Object.keys(animal)

    return (
        <>
            <ul>
                {key.map(k=>(
                    <li>{k}: {animal[k]}</li>
                ))}
            </ul>
        </>
    )
}

export default IterarKeys