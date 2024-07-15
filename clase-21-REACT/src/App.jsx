import React from 'react'
import {nombre, persona} from './funciones'
import { Button } from './components/Boton'
import Carta from './components/Carta'
import RowArticle from './components/RowArticle'
import sumar,{restar} from './variables'
//import matematicas from './matematicas' NO ESTÁ FUNCIONANDO


/* 
Los archivos .jsx permiten la sintaxis JSX (html)
*/

/* 
function App() {

  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
} 
*/
console.log('Sumar desde variables: '+sumar(8,8));
console.log('Restar desde variables: '+restar(8,5));


const App = () => {

  //console.log('Suma: '+ matematicas.sumar(5,6) + ' Resta:' + matematicas.restar(100,48))

  console.log(persona)
  let nombreUsuario = 'Chewbacca'
  const obtenerDato = () => 'R2-D2'
  return (
    <>
      <div>
        <h1>Hola {nombreUsuario}</h1>
        <Button texto={'Boton matar a Vader'}/>
        <Carta/>
      </div>
      <div>
        <h1>Hola {obtenerDato()}</h1>
        <Button texto={'Boton revivir a Vader'}/>
      </div>
      <RowArticle
      titulo={'Lift-off: The MDN Curriculum launch'}
      fecha={'4 months ago'}
      direccion_autor={'developer.mozilla.org'}
      />
      <RowArticle
      titulo={"Baseline's evolution MDN"}
      fecha={'7 months ago'}
      direccion_autor={'developer.mozilla.org'}
      />
      <RowArticle
      titulo={'Introducing the MDN Playground: Bring your code to life!'}
      fecha={'a year ago'}
      direccion_autor={'developer.mozilla.org'}
      />
        
    </>
  )
}

export default App


/* 
Las funciones que retornan HTML/JSX se llamaran como Componentes
los componentes es buena practica declararlos con mayuscula
Los componentes solo pueden retornar 1 elemento padre
*/

/* 
el fragmento (<></>) nos permite hacer una etiqueta padre que al instanciarse/invocarse el componente se desechara
*/
