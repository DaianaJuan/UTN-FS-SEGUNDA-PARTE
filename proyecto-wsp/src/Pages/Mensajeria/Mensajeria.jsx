import React, {useState} from 'react'
import ListaChat from '../../componentes/ListaChat/ListaChat'
import DATA from '../../data/data-contactos.json'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'



const Mensajeria = () => {
    const [listaMensajes, setlistaMensajes] = useState(DATA)
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