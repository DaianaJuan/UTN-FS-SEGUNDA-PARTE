import React from 'react'
import ListaContactos from '../../Componentes/ListaContactos/ListaContactos'
import { contactos } from '../../data/contactosData'

const HomeContactos = () => {
    return (
        <>
            <ListaContactos contactos={contactos} />
        </>
    )
}

export default HomeContactos