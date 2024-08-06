import React from 'react'
import { Link } from 'react-router-dom'
import './Contactos.css'

const Contactos = ({ contacto }) => {


    /**
     * Renderiza un componente de contacto con la información del contacto proporcionada.
     *
     * @param {Object} contacto - El objeto de contacto que contiene la información del contacto.
     * @param {string} contacto.nombre - El nombre del contacto.
     * @param {string} contacto.thumbnail - La URL de la imagen en miniatura del contacto.
     * @param {string} contacto.ultima_conexion - La última hora de conexión del contacto.
     * @param {string} contacto.id_autor - El ID del autor del contacto.
     * @return {JSX.Element} El componente de contacto.
     */

    //desestructurando contacto para acceder a sus propiedades y poder llamarlas.

    const {
        nombre,
        thumbnail,
        ultima_conexion,
        id_autor,
        mensajes,
    } = contacto

    //englobo el componente en un Link para poder redireccionar a la ruta del chat. Entonces, cuando el usuario haga
    //click en alguna propiedad de dicho contacto, lo llevará al chat de ese contacto en particular.

    const ultimoMensaje = mensajes.at(-1) //busco el ultimo mensaje del contacto usando el metodo .at() en arrays.

    return (
        <section className='cont-contacto'>
            <Link to={'/chat/' + id_autor} className='contacto-link'>
                <div className='cont-img'>
                    <img src={thumbnail} />
                </div>
                <div className='flex-info-contacto'>
                    <div className='info-contacto'>
                        <h2 className='nombre-contacto'>{nombre}</h2>
                        <span className='ultima-conexion'>{ultima_conexion}</span>
                    </div>
                    <span className='ultimo-mensaje'>{ultimoMensaje.contenido}</span>
                </div>
            </Link>
        </section>
    )
}

export default Contactos

