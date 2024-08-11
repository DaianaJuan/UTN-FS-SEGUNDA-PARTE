import React from 'react'
import './FooterHomeContactos.css'
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaGalacticRepublic } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { FaRebel } from "react-icons/fa";
const FooterHomeContactos = () => {
    return (
        <footer className='footer-home'>
            <div className='contenedor-botones'>
                <button><BsChatSquareTextFill /><br />Chats</button>
                <button><FaGalacticRepublic /><br />República</button>
                <button><FaRebel /><br />Rebeldes</button>
                <button><MdOutlinePhone /><br />Llamadas</button>
            </div>
        </footer>
    )
}

export default FooterHomeContactos