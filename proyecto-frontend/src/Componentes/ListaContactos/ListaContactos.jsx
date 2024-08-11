import React from 'react'
import Contactos from '../Contactos/Contactos'
import './ListaContactos.css'
import { obtenerContactoPorId, obtenerContactos } from '../../helpers/contactos';
import { useParams } from 'react-router-dom';


const ListaContactos = ({ contactos }) => {
    const lista_contactos = obtenerContactos()

    const { id } = useParams();
    const contacto = obtenerContactoPorId(id);

    return (
        <main className='cont-contactos'>
            {
                contactos.map((contacto) => {
                    return (
                        <Contactos contacto={contacto} key={contacto.id_autor} />
                    )
                })
            }
        </main>
    )
}

export default ListaContactos