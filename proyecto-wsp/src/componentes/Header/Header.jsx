import React from 'react'
import { useParams } from 'react-router-dom'
import { BsArrowLeftShort, BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineVideocam, MdOutlinePhone } from "react-icons/md";
import './Header.css'
import DATA from '../../data/data-contactos.json'

const Header = ( ) => {

  const { contactoID } = useParams();
  const contacto = DATA.find((contacto) => contacto.id === parseInt(contactoID));


    return (
        <header className='contenedor-header'>
            <nav className='contenedor-nav'>
                <div className='contenedor-izquierda'>
                    <button className='flecha'><BsArrowLeftShort /></button>
                    {/* Mostrar imagen del contacto */}
                    <img className='contenedor-img' src={contacto.thumbnail} alt='Imagen de contacto' />
                    {/* Mostrar nombre del contacto */}
                    <p>{contacto.nombre || 'Nombre no disponible'}</p>
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

export default Header
