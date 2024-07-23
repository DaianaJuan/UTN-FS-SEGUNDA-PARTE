import React, { useState } from 'react'
import ListaCartaColor from './componentes/ListaCartaColor/ListaCartaColor'
import { tarjetas } from './data'
import Counter from './componentes/Counter/Counter'
import FormuCartaColor from './componentes/FormuCartaColor/FormuCartaColor'

/* EVENTOS (si escribo 'on' me aparece la lista de eventos) - 
ESTADOS: es la informacion actual de mi pág.
UN ESTADO ES INMUTABLE (NO VA A CAMBIAR DE VALOR)
Si queremos modificar el valor de un estado debemos hacerlo con la funcion setter.
Si uso la funcion setter donde se creo el estado se re-renderizara y los componentes
hijos.
*/


function App() {

  /* useState es una función que nos trae un array con dos valores
  Estructura: [ valorDelEstado, fnParaCambiarValor ]
  Desestructurar array:
  */
  const [contador, setContador] = useState(0)
  const cuandoHagoCickEnBotonMas = () => {
    setContador(contador + 1)
  }

  const cuandoHagoClickEnBotonMenos = () => {
    setContador(contador - 1)
  }

  const [colorCardList, setColorCardList] = useState(tarjetas)

  /*
  TAREA:
  1) Crear el botón para decrementar
  2) El decrementador no puede ser menos de 0
  3) Si el contador es 10 que no se muestre el boton <button>+<button/> y
  mostrar un span que diga que no se puede incrementar mas de 10
  'DISABLED Y HIDDEN'
  <button onClick={ cuandoHagoClickEnBotonMenos } disabled={contador === 0}>-</button>
  <span style={{color:'red'}}>{contador}</span>
  <span hidden={contador!=10}>Has llegado al límete</span>
  <button onClick={ cuandoHagoCickEnBotonMas } hidden={contador === 10}>+</button>

  4) Crear un componente llamado Counter que recibirá una prop llamada limit.
  El limit será el número límete que tendrá el contador (ya no será siempre 10)
  <Counter limit={3}/>

  FORMULARIO
  */

  
  
  const handleSubmit = (evento, formValues) => {
    evento.preventDeFault()
    console.log('enviado', formValues)
    const colors = []
    for(let i = 1; i <= 4; i++){
      colors.push(formValues['color_'+i])
    }
    setColorCardList([...tarjetas, {colores: colors, likes: 0, id: 5, fecha: formValues.time}])
  }

  return (
    <>
      <ListaCartaColor cartaColor={tarjetas} />

      {
        contador < 10
          ? <button onClick={cuandoHagoCickEnBotonMas}>+</button>
          : <span>No se puede incrementar mas</span>
      }
      <span style={{ color: 'red' }}>{contador}</span>
      {
        <button onClick={cuandoHagoClickEnBotonMenos} disabled={contador === 0}>-</button>
      }

      <Counter limit={3} />

      <FormuCartaColor handleSubmit={handleSubmit}/>



    </>
  )
}

export default App
