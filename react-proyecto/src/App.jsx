import React, {useState} from 'react'
import { chat } from './data.js'
import ListaChat from './componentes/ListaChat/ListaChat'
import './style.css'
import Footer from './componentes/Footer/Footer.jsx'
import Header from './componentes/Header/Header.jsx'


function App() {

  const [listaMensajes, setlistaMensajes] = useState(chat)
  const [formMensaje, setFormMensaje] = useState({contenido: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevoMensaje = {
      autor: 'Yo', 
      contenido: formMensaje.contenido,
      fecha: '14:15 p m', 
      estado: 'entregado', 
      id: listaMensajes.length + 1
    }
    setlistaMensajes([...listaMensajes, nuevoMensaje])
    setFormMensaje({contenido: ''})
  }

  return (
    <>
      <Header/>
      <ListaChat mensajes={listaMensajes}/>
      <Footer formMensaje={formMensaje} setFormMensaje={setFormMensaje} handleSubmit={handleSubmit}/>
    </>
  )
}

export default App
