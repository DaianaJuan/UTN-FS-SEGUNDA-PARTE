import React, { useState } from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import './FooterChat.css'

/**
 * Un componente funcional que renderiza un pie de página de chat con un campo de texto y un botón de envío.
 *
 * @param {object} formMensaje - El estado actual del formulario de mensaje.
 * @param {function} setFormMensaje - Una función para actualizar el estado del formulario de mensaje.
 * @param {function} handleSubmit - Una función para manejar la presentación del formulario.
 * @return {JSX.Element} El elemento JSX que representa el pie de página del chat.
 */
const FooterChat = ({  formMensaje, setFormMensaje, handleSubmit}) => {

    /**
     * Actualiza el estado del formulario de mensaje según el cambio en el campo de texto.
     *
     * @param {object} e - El evento de cambio en el campo de texto.
     * @return {void}
     */
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

