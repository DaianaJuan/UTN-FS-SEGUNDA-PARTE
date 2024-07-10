/* Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1
*/
/*

*/


const carritoDeLibrosRBA = [
    {
        nombre: 'Platón',
        id: 2,
        cantidad: 4,
        precio: 15000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_618711-MLA40132064351_122019-F.webp'
    },
    {
        nombre: 'Aristóteles',
        id: 3,
        cantidad: 3,
        precio: 8000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_921488-MLA45929389291_052021-F.webp'
    },
    {
        nombre: 'William James',
        id: 4,
        cantidad: 2,
        precio: 13000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_603356-MLA43558501776_092020-F.webp'
    },
    {
        nombre: 'Freud',
        id: 1,
        cantidad: 7,
        precio: 17000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_662981-MLA74479055094_022024-O.webp'
    },
    {
        nombre: 'Nietzsche',
        id: 7,
        cantidad: 4,
        precio: 8000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_945838-MLA41177215528_032020-F.webp'
    },
    {
        nombre: 'Kant',
        id: 12,
        cantidad: 8,
        precio: 10000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_831395-MLA50684886003_072022-F.webp'
    },
    {
        nombre: 'Heráclito y Parménides',
        id: 9,
        cantidad: 1,
        precio: 5000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_944676-MLA41177495539_032020-F.webp'
    }
]

//console.log(carritoDeLibrosRBA)

const mostrarCarrito = (carrito) => {
    const carritoHTML = document.getElementById('carrito')
    const totalHTML = document.getElementById('total')
    let total = 0
    let plantillaFuncionMostrar = ''
    for(const libro of carrito){
        total += (libro.precio * libro.cantidad)
        plantillaFuncionMostrar = plantillaFuncionMostrar + `
        <div>
            <h3>Nombre: ${libro.nombre}</h3>
            <p>ID ${libro.id}</p>
            <p>Cantidad: ${libro.cantidad}</p>
            <br/>
            <img width ='200px' src= "${libro.thumbnail}"/>
            <br/>
            <span>Precio unitario: $${libro.precio} x ${libro.cantidad}</span>
        </div>
        <hr/>
        `
    }
    carritoHTML.innerHTML = plantillaFuncionMostrar
    totalHTML.innerText = 'TOTAL: $' + total
}

mostrarCarrito(carritoDeLibrosRBA)

//Buscar si en carrito ya existe un elemento con ese id
const agregarItemAlCarrito = (producto) => {
    const idBuscado = carritoDeLibrosRBA.find((item) => item.id === producto.id) //retorna el objeto o undefined
    if(idBuscado){
        //SI existe unicamente incrementaran su cantidad en 1
        idBuscado.cantidad += 1
        }
        else{
        //SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada 
        //cantidad y con el valor 1
        producto.cantidad = 1
        carritoDeLibrosRBA.push(producto)
        }
        //siempre que modifique mi carrito tengo que re-renderizar
        mostrarCarrito(carritoDeLibrosRBA)
}

agregarItemAlCarrito({
    nombre: 'Estudio en Escarlata - Arthur Conan Doyle',
    id: 23,
    precio: 50000,
    thumbnail: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/698752.jpg"
})

