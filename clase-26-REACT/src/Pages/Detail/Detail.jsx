import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { obtenerProductoPorId, obtenerProductos, eliminarProductoPorId } from '../../helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'

const Detail = () => {

    /* useParams es una funcion que retorna un objeto con los parámetros de búsqueda */
    const parametros = useParams()
    const {handleDeleteProduct} = useGlobalContext()
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
            <button onClick={() =>handleDeleteProduct(id)}>Eliminar</button>
        </div>
    )
}

export default Detail