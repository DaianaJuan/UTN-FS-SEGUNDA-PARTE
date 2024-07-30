import React from 'react'
import ListaContactos from '../../componentes/ListaContactos/ListaContactos'
import { contactos } from '../../data/data-contactos'

const Home = () => {
    return (
        <div>
            <ListaContactos contactos={contactos}/>
        </div>
    )
}

export default Home