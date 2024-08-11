import React, { useState } from 'react'
import ListaMensajes from '../../Componentes/ListaMensajes/ListaMensajes'
import FooterChat from '../../Componentes/FooterChat/FooterChat'
import { formatearFecha } from '../../helpers/contactos'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom'
import { obtenerContactoPorId } from '../../helpers/contactos'
import './Chat.css'
import HeaderChat from '../../Componentes/HeaderChat/HeaderChat'


const Chat = () => {

    const { id } = useParams()
    const contacto = obtenerContactoPorId(id)


    const [listaMensajes, setlistaMensajes] = useState(contacto.mensajes)
    const [formMensaje, setFormMensaje] = useState({ contenido: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        const nuevoMensaje = {
            autor: 'Yo',
            contenido: formMensaje.contenido,
            fecha: formatearFecha(new Date()),
            estado: 'entregado',
            id: uuidv4(),
        }
        setlistaMensajes([...listaMensajes, nuevoMensaje])
        setFormMensaje({ contenido: '' })
    }
    return (
        <main className='contenedor-chat'>
            <HeaderChat/>
            <ListaMensajes mensajes={listaMensajes}/>
            <FooterChat formMensaje={formMensaje} setFormMensaje={setFormMensaje} handleSubmit={handleSubmit} />
        </main>
    )
}

export default Chat