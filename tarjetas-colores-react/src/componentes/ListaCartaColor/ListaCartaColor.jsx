import React from 'react'
import CartaColor from '../CartaColor/CartaColor'
import './ListaCartaColor.css'

const ListaCartaColor = (props /* TIPO DE DATO PROPS: OBJETO*/) => {
    const cartaColor = props.cartaColor  /*Puedo eliminar la const cartaColor y pasar el valor directamente
    al mapeo: props.cartaColor.map((tarjeta) => {...}) */
    return (

        <section className='seccion-tarjetas'>

            {cartaColor.map((tarjeta) => {
                return (
                        <CartaColor   
                            likes={tarjeta.likes} 
                            colores={tarjeta.colores}
                            fecha={tarjeta.fecha}
                            key={tarjeta.id}
                        />
                )
            })}

        </section>
    
    )
}

export default ListaCartaColor