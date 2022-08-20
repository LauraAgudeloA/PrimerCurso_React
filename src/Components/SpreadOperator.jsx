import React from 'react'

const SpreadOperator = () => {

    const animalesSalvajes = ['lobo', 'ciervo', 'jabali', 'vibora']
    const animalesDomesticos = ['perro', 'gato', 'hamster', 'pajaro']
    //Une los array
    const animales = [...animalesSalvajes, ...animalesDomesticos]
    //console.log(animales)

    const modelosEuropeas={
        Alemania:'Dina',
        Francia:'Cristine',
        España:'Carmen'
    }
    const modelosAfricanas={
        Senegal:'Sonia',
        Sudafrica:'Carmele',
        Sudan:'Sandra'
    }
    //Une los objetos
    const modelos={...modelosEuropeas,...modelosAfricanas}
    console.log(modelos)

    return (
        <>
        </>
    )
}

export default SpreadOperator