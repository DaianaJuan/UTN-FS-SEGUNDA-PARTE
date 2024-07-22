import React from 'react'
import './ListaChat.css'
import Mensajes from '../Mensajes/Mensajes'

const ListaChat = (props) => {
    const { mensajes } = props
    return (
        <div className='contenedor-padre'>
            {mensajes.map((mensaje) => {
                return (
                    <Mensajes
                        autor={mensaje.autor}
                        contenido={mensaje.contenido}
                        fecha={mensaje.fecha}
                        estado={mensaje.estado}
                        key={mensaje.id}
                    />
                )
            })}
        </div>
    )
}

export default ListaChat