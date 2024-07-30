import { productos } from "../data/productsData";

//creo una funcion: la fx recibe un id y va a devolver el producto en particular
/*export const obtenerProductoPorId = (id) => {
    return productos.find((producto) => Number(producto.id) === Number(id));
};*/

/* 
Una fx que se llame obtenerProductos
Va a llamar a los productos del localStorage, si no están va a cargarlos con la key 'productos'
y va a retornarlos.
Si estan, los parseara y los retornara
*/

/* 
    LOCAL STORAGE:

    .getItem(): obtiene el valor de una clave
    .setItem(): establece un valor para una clave
    .removeItem(): elimina una clave
    .clear(): elimina todos los elementos
*/
const guardarProductos = (productos) => {
    const productos_JSON = JSON.stringify(productos) //convierto el array de objetos en un string
    localStorage.setItem('productos', productos_JSON) //guardo el string en el local storage
}
/**
 * Recupera la lista de productos del almacenamiento local. Si los productos no se encuentran en el almacenamiento local,
 * se cargan desde el archivo de datos 'productos' y se guardan en el almacenamiento local para su uso futuro.
 *
 * @return {Array} Un array de objetos de productos.
 */
export const obtenerProductos = () => {

    const productos_guardados = localStorage.getItem('productos')

    if(productos_guardados){
        /* Logica si existen los productos guardados */
        return JSON.parse(productos_guardados)  //parseo el string en un array de objetos

    }
    else{
        /* Logica si no existen los productos guardados */
        guardarProductos(productos)
        return productos //retorna el array de objetos
    }
}

/* 
Tres funciones mas:
1) crearProducto() lo guarda en localStorage con la key 'productos'
2) obtenerProductoPorId(id) retorna el producto con el id especificado
3) eliminarProductoPorId(id) elimina el producto con el id especificado
*/



const crearProducto = (nuevo_producto) => {
    const lista_productos = obtenerProductos()
    lista_productos.push(nuevo_producto)
    guardarProductos(lista_productos)
}

export const obtenerProductoPorId = (id) => {
    const lista_productos = obtenerProductos()
    return lista_productos.find((producto) => Number(producto.id) === Number(id))
    
}

export const eliminarProductoPorId = (id) => {
    const lista_productos = obtenerProductos()
    const nueva_lista = lista_productos.filter((producto) => Number(producto.id) !== Number(id))
    guardarProductos(nueva_lista)
    return nueva_lista
}

/*
    El detalle del componente Detail.jsx ahora debe venir de obtenerProductoPorId(id)

    Van a crear un boton en la lista de Detail.jsx que se llamará eliminar y al hacer click
    se ejecutara la fx eliminarProductoPorId(id)

    La lista de productos que se mostrara en el componente Home.jsx sera dada a partir de 
    la funcion obtenerProductos()

    Crear una nueva screen/page/route llamada /product/new que renderizará un formulario
    donde se le solicitara al usuario informacion del producto:

    nombre: string, 
    descripción: string, mas de 10 palabras
    precio: number positivo distinto de 0, 
    stock: number positivo distinto de 0, 
    codigo: string, 
    categoria: string, 
    thumbnail: string

*/ 