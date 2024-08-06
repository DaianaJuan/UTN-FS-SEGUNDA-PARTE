import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineVideocam } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import './HeaderChat.css'
import { Link, useParams } from 'react-router-dom';
import { obtenerContactoPorId } from '../../helpers/contactos'

const HeaderChat = () => {

    const { id } = useParams();  // Obtenemos el ID del contacto desde la URL
    const contacto = obtenerContactoPorId(id);  // Obtenemos el contacto por su ID


    return (
        <header className='contenedor-header'>
            <nav className='contenedor-nav'>
                <div className='contenedor-izquierda'>
                    <Link to='/' className='flecha'><BsArrowLeftShort /></Link>
                    <div className='contenedor-img'>
                        <img src={contacto.thumbnail}></img>
                    </div>
                    <p className='nombre'>{contacto.nombre}</p>
                </div>
                <div className='contenedor-derecha'>
                    <button><MdOutlineVideocam /></button>
                    <button><MdOutlinePhone /></button>
                    <button><BsThreeDotsVertical /></button>
                </div>
            </nav>
        </header>
    )
}

export default HeaderChat