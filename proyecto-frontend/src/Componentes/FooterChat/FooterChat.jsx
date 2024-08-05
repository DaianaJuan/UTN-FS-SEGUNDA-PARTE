import React, { useState } from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import './FooterChat.css'


const FooterChat = ({  formMensaje, setFormMensaje, handleSubmit}) => {

    const handleChangeFormValue = (e) => {
        const { name, value } = e.target
        setFormMensaje({ ...formMensaje, [name]: value })
    }

    return (
        <form className='contenedor-footer' onSubmit={handleSubmit}>
            <div className='contenedor-izquierda'>
                <a href="#"><MdOutlineEmojiEmotions /></a>
                <input
                    type='text'
                    name='contenido'
                    id='id'
                    onChange={handleChangeFormValue}
                    value={formMensaje.contenido}
                    placeholder='Mensaje'
                    required>
                </input>
                <a href='#'><BsPaperclip /></a>
                <a href='#'><MdOutlineCameraAlt /></a>
            </div>
            <button className='btn-enviar' type='submit'><IoIosSend /></button>
        </form>
    )
}

export default FooterChat

