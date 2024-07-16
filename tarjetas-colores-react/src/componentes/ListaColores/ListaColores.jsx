import React from 'react'
import './ListaColores.css'

const ListaColores = (props) => {
    const colores = props.colores

    return (

        <div>

            {colores.map((color) => {
                return (
                    <div className='contenedor-colores'>
                        <a href="#" className='caja-color' style={{backgroundColor: color}}></a>
                        <a href="#" className='caja-color' style={{backgroundColor: color}}></a>
                        <a href="#" className='caja-color' style={{backgroundColor: color}}></a>
                        <a href="#" className='caja-color' style={{backgroundColor: color}}></a>
                    </div>
                )
            })}

        </div>
    )
}

export default ListaColores