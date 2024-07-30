import React, { useEffect, useState } from 'react'
import Mensajes from '../Mensajes/Mensajes'
import { useParams } from 'react-router-dom'
import DATA from '../../data/data-contactos.json'

const ListaChat = () => {
    const { contactoID } = useParams()
    const [mensajes, setMensajes] = useState([])

    useEffect(() => {
        const contacto = DATA.find(contacto => contacto.id === Number(contactoID));
        if (contacto) {
            setMensajes(contacto.mensajes);
        } else {
            setMensajes([]);
        }
    }, [contactoID]); 


    return (
        <div className='contenedor-padre'>
            {mensajes.map((mensaje) => (
                <Mensajes
                    autor={mensaje.autor}
                    contenido={mensaje.contenido}
                    fecha={mensaje.fecha}
                    estado={mensaje.estado}
                    key={mensaje.id}
                />
            ))}
        </div>
    )
}

export default ListaChat
