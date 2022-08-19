import React from 'react'
const foco = () => console.log('estoy en foco')
const blur = () => console.log('No estoy en foco')
const change = () => console.log('he cambiado')
const click = () => console.log('me has clickeado')
const dobleClick = () => alert(' me has clickeado dos veces')
const pulsarTecla = () => console.log('me estas pulsando')

const Eventos = () => {
  return (
    <>
      <form>
        <input onBlur={blur}
          onFocus={foco} type="text"
          onChange={change}
          onKeyDown={pulsarTecla} />


      </form>
      <button onClick={click}
        onDoubleClick={dobleClick}>Pulsame</button>


    </>
  )
}

export default Eventos