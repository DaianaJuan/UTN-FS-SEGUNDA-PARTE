import React from 'react'
import ListaColores from '../ListaColores/ListaColores'
import './CartaColor.css'


const CartaColor = (props /*OBJETO*/) => {
    const colores = props.colores /*ARRAY DE STRINGS*/
    const fecha = props.fecha /*STRING*/
    const likes = props.likes /*NUMBER*/
    return (
        <section className='seccion-tarjetas'>
            <div className='contenedor-padre'>
                <div className='contenedor-colores'>
                    <ListaColores colores = {colores}/>
                </div>
                <div className='contenedor-inferior'>
                    <button><i className="bi bi-heart"></i> {likes}</button>
                    <span className='texto'>{fecha}</span>
                </div>    
            </div>
        </section>
    )
}

export default CartaColor