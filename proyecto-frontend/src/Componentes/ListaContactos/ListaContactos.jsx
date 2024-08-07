import React from 'react'
import Contactos from '../Contactos/Contactos'
import './ListaContactos.css'
import { obtenerContactos } from '../../helpers/contactos'

const ListaContactos = ({ contactos }) => {

    const lista_contactos = obtenerContactos()
    console.log(lista_contactos)

    /**
     * Renderiza una lista de contactos.
     * Para poder renderizar la lista de contactos (array) uso el método .map(), funcion que recibe una callback.
     * La callback se ejecuta una vez por cada elemento del array.
     * El resultado es un nuevo array con los elementos renderizados.
     *
     * @param {Object[]} contactos - El array de contactos a renderizar.
     * @return {JSX.Element} La lista de contactos renderizada.
     */
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