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
                    <img className='contenedor-img' src='https://i.pinimg.com/236x/11/b8/b5/11b8b55ea257834073cb365f68ad245d.jpg'></img>
                    <p>Pepe</p>
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