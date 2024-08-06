import React from 'react'
import './HeaderHomeContactos.css'
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const HeaderHomeContactos = () => {


    return (
        <header className='contenedor-header-home'>
            <nav>
                <div className='flex-superior'>
                    <h1 className='nombre-app'>StarWars <br />Chat</h1>
                    <div className='contenedor-icons'>
                        <button><MdOutlineCameraAlt /></button>
                        <button><BsThreeDotsVertical /></button>
                    </div>
                </div>
                <div className='input-buscador'>
                    <input type="text" placeholder="Buscar" />
                </div>
            </nav>
        </header>
    )
}

export default HeaderHomeContactos