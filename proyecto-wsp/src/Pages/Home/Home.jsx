import React from 'react'
import ListaContactos from '../../componentes/ListaContactos/ListaContactos'
import DATA from '../../data/data-contactos.json'

const Home = () => {
    return (
        <div>
            <ListaContactos contactos={DATA}/>
        </div>
    )
}

export default Home