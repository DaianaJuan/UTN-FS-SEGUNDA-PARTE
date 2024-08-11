import React, { useEffect, useState } from 'react'
import ListaContactos from '../../Componentes/ListaContactos/ListaContactos'
import { obtenerContactos } from '../../helpers/contactos'
import HeaderHomeContactos from '../../Componentes/HeaderHomeContactos/HeaderHomeContactos'
import FooterHomeContactos from '../../Componentes/FooterHomeContactos/FooterHomeContactos'
import './HomeContactos.css'
import { contactos } from '../../data/contactosData'



const HomeContactos = () => {
    
    return (
        <>
            <HeaderHomeContactos />
            <ListaContactos contactos={contactos} />
            <FooterHomeContactos />
        </>
    )
}

export default HomeContactos