import React, { useEffect, useState } from 'react'
import Mensajes from '../Mensajes/Mensajes'
import { useParams } from 'react-router-dom'
import dataContactos from '../../data/data-contactos.json'

const ListaChat = () => {

    const {contactoId} = useParams()

    const [mensajes, setMensajes] = useState([])

    useEffect(() => {
        const contacto = dataContactos.find(contacto => contacto.id === Number(contactoId));
        setMensajes(contacto.mensajes)
    },[]);

    
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