import React from 'react'
import './Mensajes.css'


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

                                        ? <span className='estadoVisto'><i class="bi bi-check2-all"></i></span>
                                        : <span className='estadoNoVisto'><i class="bi bi-check2-all"></i></span>
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

                                        ? <span className='estadoVisto'><i class="bi bi-check2-all"></i></span>
                                        : <span className='estadoNoVisto'><i class="bi bi-check2-all"></i></span>
                                }
                            </div>
                        </div>

                }
            </div>
        </>
    )

}





export default Mensajes