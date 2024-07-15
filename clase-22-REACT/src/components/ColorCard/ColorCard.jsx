import './ColorCard.css'
import React from 'react'


const ColorCard = (props) => {
    return (
        
        <div className='contenedor-padre'>
            <div className='contenedor-colores'>
                <a href="#" className='caja-color' style={{backgroundColor: '#17153B', display: 'block'}}></a>
                <a href="#" className='caja-color' style={{backgroundColor: '#2E236C', display: 'block'}}></a>
                <a href="#" className='caja-color' style={{backgroundColor: '#433D8B', display: 'block'}}></a>
                <a href="#" className='caja-color' style={{backgroundColor: '#C8ACD6', display: 'block'}}></a>
            </div>
            <div className='contenedor-inferior'>
                <button><i className="bi bi-heart"></i> {props.likes}</button>
                <span className='texto'>{props.fecha}</span>
            </div>
            
        </div>
        
    )
}

export default ColorCard

