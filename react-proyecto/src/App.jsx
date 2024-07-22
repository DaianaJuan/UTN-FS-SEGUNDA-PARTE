import React from 'react'
import { chat } from './data.js'
import ListaChat from './componentes/ListaChat/ListaChat'
import './style.css'


function App() {

  return (
    <>
      <ListaChat mensajes={chat}/>
    </>
  )
}

export default App
