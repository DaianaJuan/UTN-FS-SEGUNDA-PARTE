import React from 'react'
import CartaColor from '../CartaColor/CartaColor'

const ListaCartaColor = (props /* TIPO DE DATO PROPS: OBJETO*/) => {
    const cartaColor = props.cartaColor  /*Puedo eliminar la const cartaColor y pasar el valor directamente
    al mapeo: props.cartaColor.map((tarjeta) => {...}) */
    return (

        <div className='contenedor-tarjeta'>

            {cartaColor.map((tarjeta) => {
                return (
                        <CartaColor   
                            likes={tarjeta.likes} 
                            colores={props.colores}
                            fecha={tarjeta.fecha}
                            key={tarjeta.id}
                        />
                )
            })}

        </div>
    
    )
}

export default ListaCartaColor