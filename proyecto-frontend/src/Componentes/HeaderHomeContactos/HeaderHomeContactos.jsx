import React from 'react'
import './HeaderHomeContactos.css'
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";


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
                <div className='flex-inferior'>
                    <div className='input-buscador'>
                        <label htmlFor="nombre"></label>
                        <input
                            type="search"
                            placeholder="Buscar"
                        />
                    </div>
                    <button className='btn-enviar' type='submit'><IoIosSend /></button>
                </div>
            </nav>
        </header>
    )
}

export default HeaderHomeContactos 