import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineVideocam } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import './Header.css'

const Header = () => {
    return (
        <header className='contenedor-header'>
            <nav className='contenedor-nav'>
                <div className='contenedor-izquierda'>
                    <button className='flecha'><BsArrowLeftShort /></button>
                    <div className='contenedor-img'>
                        <img src='https://i.pinimg.com/564x/30/8d/41/308d41f7dce7d4f6ce96e77fc8f90c2b.jpg'></img>
                    </div>
                    <p>Anakin Skywalker</p>
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