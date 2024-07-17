import React from 'react'
import ListaCartaColor from './componentes/ListaCartaColor/ListaCartaColor'
import { tarjetas } from './data'


function App() {

  return (
    <>
      <ListaCartaColor cartaColor={tarjetas}/>
    </>
  )
}

export default App
