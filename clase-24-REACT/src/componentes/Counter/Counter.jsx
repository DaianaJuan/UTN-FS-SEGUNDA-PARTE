
import React, { useState }  from 'react'

const Counter = ({ limit }) => {
    const [contador, setContador] = useState(0)
    const handleClickAddButton = () => {
        if (contador < limit) {
            setContador(contador + 1)
        }
    }
    const handeClickRemoveButton = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <div>
            {contador > 0
                ? <button onClick={handeClickRemoveButton}>-</button>
                : <button></button>
            }
            <span style={{color: 'blueviolet'}}>{contador}</span>
            {contador >= limit
                ? <span>no se puede incrementar mas de {limit}</span>
                : <button onClick={handleClickAddButton}>+</button>
            }
        </div>
    )
}
export default Counter