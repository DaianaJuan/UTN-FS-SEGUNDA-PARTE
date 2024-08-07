import React from 'react'
import ListaContactos from '../../Componentes/ListaContactos/ListaContactos'
import { contactos } from '../../data/contactosData'
import HeaderHomeContactos from '../../Componentes/HeaderHomeContactos/HeaderHomeContactos'
import FooterHomeContactos from '../../Componentes/FooterHomeContactos/FooterHomeContactos'


const HomeContactos = () => {

    
    return (
        <>
            <HeaderHomeContactos />
            <ListaContactos contactos={contactos} />
            <FooterHomeContactos/>
        </>
    )
}

export default HomeContactos