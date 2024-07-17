import React from 'react'
import ColorCard from '../ColorCard/ColorCard'



const ColorCardList = (props) => {
    
    return (
        <div className='contenedor-tarjeta'>

            {props.tarjetas.map((tarjeta) => {
                return (
                        <ColorCard   
                            likes={tarjeta.likes} 
                            color={props.color}
                            fecha={tarjeta.fecha}
                            key={tarjeta.id}
                        />
                )
            })}

        </div>
    )
}

export default ColorCardList