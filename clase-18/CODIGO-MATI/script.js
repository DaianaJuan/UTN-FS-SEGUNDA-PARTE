
/* 
Renderizar un carrito:

Un array de items llamado carrito
Cada item tiene el sig formato
object: 
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$


Cada item mostrado en HTML va a tener este formato

Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}



Por debajo del div dobnde renderizamos el carrito, crear en HTML un span que este vacio
Llamar dicho span por JS y cambiar el texto para que diga: TOTAL: ${precio total}

Crear una funcion llamada renderizarCarrito(carrito) y ejecutara toda la logica de crear la plantilla y mostrarla en HTML
*/
const carrito = [
    {
        nombre: 'Ford Raptor',
        id: 1,
        precio: 100000,
        cantidad: 1,
        thumbnail: "https://plan-gobierno.org/wp-content/uploads/2023/11/plan-nacional-Ford-raptor-plan-gobierno--1024x574.png"
    },
    {
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        cantidad: 5,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
    },
    {
        nombre: 'Chevrolet Corsa',
        id: 3,
        precio: 5000,
        cantidad: 1,
        thumbnail: "https://tn.com.ar/resizer/XG9qKmPd0i1gjxTICwTjk6e_ECA=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/UVDAHVBKNRUK45MWPX22I3D2UA.jpg"
    }
]

/* Ejercicio 1: */



const renderizarCarrito = (carrito) =>{
    const carritoHTML = document.getElementById("carrito")
    const totalHTML = document.getElementById('total')

    let total = 0
    let plantillaCarrito = ''
    for (const item of carrito){
        total = total + (item.precio * item.cantidad)
        plantillaCarrito = plantillaCarrito + `
        <div>
            <h3> ${item.nombre} #${item.id} </h3>
            <img width = '100px' src="${item.thumbnail}"/>
            <br>
            <span> PRECIO UNITARIO:${item.precio} x ${item.cantidad}</span>
            <br>
            <span> TOTAL:${item.precio * item.cantidad} </span>
        </div>
        <hr>
        `
    }
    
    carritoHTML.innerHTML = plantillaCarrito
    totalHTML.innerText = 'TOTAL: $' + total
}

renderizarCarrito(carrito)


/* 
Crear una funcion llamada eliminarItemPorId que va a recibir un id
Y debera buscar en el array carrito y eliminar al item con el id recibido, PERO OJO, solamente vamos a eliminar si la cantidad es 1
SINO deberemos reducir la cantidad en 1 

EJEMPLO:

eliminarItemPorId(2)
Busca a la toyota y como tiene 5 de cantidad, cambia el 5 por 1 menos, es decir 4
Al finalizar invocaremos nuevamente a renderizar carrito


eliminarItemPorId(3)
Busca a el corsa y como tiene 1 de cantidad elimina el item del carrito
Al finalizar invocaremos nuevamente a renderizar carrito
*/

/* Find nos permite buscar un elemento en un array de objetos 
Si lo encuentra retorna dicho objeto, sino retornara un undefined

Crear la funcion llamada agregarItemAlCarrito(item)
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

const buscarItemPorId = (id) =>{
    for(const item of carrito) {
        if(item.id === id){
            return item
        }
    }
}

const buscarPosicionItemPorId = (id) =>{
    for(let i = 0; i < carrito.length; i = i + 1){
        const item = carrito[i]
        if(item.id === id){
            return i
        }
    }
}



const eliminarItemPorId = (id) =>{
    /* const itemBuscado = carrito.find((item) => {
        return item.id === id
    }) */

    /* const itemBuscado = buscarItemPorId(id) */
    const itemBuscado = carrito.find((item) => item.id === id)
    if(itemBuscado){
        if(itemBuscado.cantidad === 1){
            //Logica para eliminar item
            const posicionItem = carrito.findIndex((item) => item.id === id)
            carrito.splice(posicionItem, 1)
        }
        else{
            //Logica para decrementar en 1 la cantidad
            itemBuscado.cantidad = itemBuscado.cantidad - 1
        }
        renderizarCarrito(carrito)
    }
    else{
        console.error('Error: item con id inexistente')
    }
    

    console.log(itemBuscado)
}


const agregarItemAlCarrito = (producto) => {
    const itemBuscado = carrito.find((item) => item.id === producto.id)
    if(itemBuscado){
        /* Logica para incrementar la cantidad */
        itemBuscado.cantidad = itemBuscado.cantidad + 1
        /* 
        Proceso interno: String(itemBuscado) + 1
                        '[Object object]' + 1
                        '[Object object]1'
        */
        /* Sugar syntax */
      /*   itemBuscado.cantidad += 1 */
    } else {
        /* Logica para agregar el producto al carrito */
        producto.cantidad = 1
        carrito.push(producto)
        
    }
    renderizarCarrito(carrito)
    /* SIEMPRE QUE MODIFIQUE MI CARRITO DEBO RE-RENDERIZAR */
    
}

agregarItemAlCarrito({
    nombre: 'Honda Civic',
    id: 20,
    precio: 25000,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})


/* eliminarItemPorId(1) */



const users = [
    {
        nombre: 'pepe',
        id: 1
    },
    {
        nombre: 'juan',
        id: 2
    },
    {
        nombre: 'maria',
        id: 3
    }
]


// const find = (array, callback) =>{
//     for(const element of array){
//         /* callback va a retornar o verdadero o false */
//         if(callback(element)){
//             return element
//         }
//     }
//     return undefined
// }

// const usuarioBuscado = find(users, (user) => {
//     return user.id == 3
// } )

// console.log(usuarioBuscado)