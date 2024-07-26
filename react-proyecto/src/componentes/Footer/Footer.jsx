
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import './../../data.js'
import './Footer.css'

const Footer = ({ formMensaje, setFormMensaje, handleSubmit }) => {

    const handleChangeFormValue = (e) => {
        const { name, value } = e.target
        setFormMensaje({ ...formMensaje, [name]: value })
    }

    return (

        <form className='contenedor-footer' onSubmit={handleSubmit}>
            <div className='contenedor-izquierda'>
                <a href="#"><MdOutlineEmojiEmotions /></a>
                <input type='text' name="contenido" id="input-mensaje" onChange={handleChangeFormValue} value={formMensaje.contenido} placeholder='Mensaje'></input>
                <a href='#'><BsPaperclip /></a>
                <a href='#'><MdOutlineCameraAlt /></a>
            </div>
            <button className='btn-enviar' type='submit'><IoIosSend /></button>
        </form>

    )
}

export default Footer