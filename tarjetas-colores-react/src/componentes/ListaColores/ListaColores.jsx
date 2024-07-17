import React from 'react'
import './ListaColores.css'


const ListaColores = (props) => {
    const colores = props.colores

    return (

        <div className='contenedor-colores'>

            {colores.map((color, index) => {
                return (
                        <a key={color + index} href="#" className='caja-color' style={{ backgroundColor: color }}></a>
                )
            })}

        </div>
    )
}

export default ListaColores