import React from 'react'
import Contactos from '../Contactos/Contactos'

const ListaContactos = ({contactos}) => {

    
    return (
        <div>
            {
                contactos.map((contacto) => {
                    return (
                        <Contactos contacto={contacto} key={contacto.id}/>
                    )
                })
            }
        </div>
    )
}

export default ListaContactos