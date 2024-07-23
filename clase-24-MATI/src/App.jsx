import React, { useState } from 'react'
import { ColorCardForm, ColorCardList } from './components'
import { colorCardList } from './data'



function App() {

  /* 
  Reglas de oro:
  UN ESTADO ES INMUTABLE
  Si queremos modificar el valor de un estado debemos hacerlo con la funcion Setter
  Si uso la funcion setter el componente donde se creo el estado se re-renderizara y los componentes hijos
  */

  /* 
  useState es una funcion que nos trae un array con dos valores
  Estructura: [valorDelEstado, fnParaCambiarValor]
  */
  const [contador, setContador] = useState(0)
  const [colorCardLista, setColorCardLista] = useState(colorCardList)


  const handleClickAddButton = () => {
    if (contador < 10){
      setContador(contador + 1)
    }
  }
  const handleClickRemoveButton = () => {
    if (contador > 0){
      setContador(contador - 1)
    }
  }


  /* 
  1)Crear el boton para decrementar 
  
  2)El decrementador no puede ser menos de 0

  3)Si el contador es 10 que no se muestre el boton de <button>+</button> y se muestre un <span>no se puede incrementar mas de 10</span>

  4)
  Crear un componente llamado Counter que recibira una prop llamada limit
  El limit sera el numero limite que tendra el contador (ya no sera siempre 10)
  <Counter limit={3}/>

  */
  
  const handleSubmit = (e, formValues) => {
    e.preventDefault()
    console.log('enviado', formValues)
    const colors =[]
    for(let i = 1; i < 4; i = i + 1){
      colors.push(formValues['color_' + i])

    }
    setColorCardLista([...colorCardLista, {colors: colors, likes: 0, id: 5, time: formValues.time}])
  }
  
  return (
    <>
    <ColorCardList colorCardList={colorCardLista}/>


    <button onClick={handleClickRemoveButton} disabled={contador === 0}>-</button>
    <span>{contador}</span>
    <span hidden={contador != 10}>Has llegado al limite</span>
    <button onClick={handleClickAddButton} hidden={contador === 10}>+</button>

    <ColorCardForm handleSubmit={handleSubmit}/>
    </>
  )
}

export default App