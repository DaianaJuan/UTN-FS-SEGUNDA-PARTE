import React from 'react'
import { Link } from 'react-router-dom'
import Mensajes from '../Mensajes/Mensajes'

const Contactos = ({ contacto }) => {

    const { 
        nombre,
        thumbnail,
        ultima_conexion,
        id,
        mensajes
    } = contacto

    
    return (
        <Link to={`/mensajeria/${id}`}>
            <img src={thumbnail}/>
            <p>{nombre}</p>
            <span>{ultima_conexion}</span>
        </Link>
    )
}

export default Contactos