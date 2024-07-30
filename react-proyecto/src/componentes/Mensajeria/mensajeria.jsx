import React, { useState } from 'react'
import { chat } from '../../data.js'
import ListaChat from '../ListaChat/ListaChat.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import './mensajeria.css'


function Mensajeria() {

    const [listaMensajes, setlistaMensajes] = useState(chat)
    const [formMensaje, setFormMensaje] = useState({ contenido: '' })

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
        setFormMensaje({ contenido: '' })
    }

    return (
        <div className='contenedor-mensajeria'>
            <Header />
            <ListaChat mensajes={listaMensajes} />
            <Footer formMensaje={formMensaje} setFormMensaje={setFormMensaje} handleSubmit={handleSubmit} />
        </div>
    )
}

export default Mensajeria