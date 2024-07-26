import React from 'react'
import './Mensajes.css'
import { BsCheck2All } from "react-icons/bs";





const Mensajes = ({ autor, contenido, fecha, estado }) => {

    return (

        <>
            <div className='contenedor-mensaje'>

                {
                    autor === 'Yo'

                        ? <div className='mensaje-yo'>
                            <p className='autor'><strong>{autor}</strong></p>
                            <p className='texto'>{contenido}</p>

                            <div className='contenedor-estado'>
                                <span className='fecha'>{fecha}</span>

                                {
                                    estado === 'visto'

                                        ? <span className='estadoVisto'><BsCheck2All /></span>
                                        : <span className='estadoNoVisto'><BsCheck2All /></span>
                                }

                            </div>
                        </div>
                        : <div className='contenedor-mensaje-otro'>

                            <p className='autor'><strong>{autor}</strong></p>
                            <p className='texto'>{contenido}</p>

                            <div className='contenedor-estado'>
                                <span className='fecha'>{fecha}</span>

                                {
                                    estado === 'visto'

                                        ? <span className='estadoVisto'><BsCheck2All /></span>
                                        : <span className='estadoNoVisto'><BsCheck2All /></span>
                                }
                            </div>
                        </div>

                }
            </div>
        </>
    )

}





export default Mensajes