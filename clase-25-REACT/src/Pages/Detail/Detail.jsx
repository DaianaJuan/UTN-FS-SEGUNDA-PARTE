import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../helpers/productos'


const Detail = () => {
    /* useParams es una funcion que retorna un objeto con los parámetros de búsqueda */
    const parametros = useParams()

    //desestructuración de las propiedades del producto
    const {
        nombre, 
        descripcion, 
        precio, 
        id, 
        stock, 
        codigo, 
        categoria, 
        thumbnail 
    } = obtenerProductoPorId(parametros.producto_id)
    

    return (
        <div>
            <h1>{nombre}</h1>
            <h3>Categoría: {categoria}</h3>
            <img src={thumbnail}/>
            <p>{descripcion}</p>
            <span><b>Unidades disponibles:</b>{stock}</span>
            <br/>
            <span><b>Codigo:</b>{codigo}</span>
            <br/>
            <span><b>ID:</b>{id}</span>
            <br/>
            <span><b>Precio: $</b>{precio}</span>
            <br/>
            <button>Comprar</button>
        </div>
    )
}

export default Detail