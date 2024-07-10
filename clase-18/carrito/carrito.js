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
        nombre: 'El Banquete . Criton. Apología De Sócrates - Platón',
        id: 5,
        precio: 4600,
        cantidad: 1,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_917138-MLA50058818768_052022-F.webp'
    },
    {
        nombre: 'Crimen Y Castigo - Fiódor Dostoyevski',
        id: 9,
        precio: 32400,
        cantidad: 5,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_908171-MLA69360213498_052023-F.webp'
    },
    {
        nombre: 'Un Mundo Feliz - Aldous Huxley',
        id: 2,
        precio: 15041,
        cantidad: 23,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_658325-MLA45290046909_032021-F.webp'
    },
    {
        nombre: 'Cumbres Borrascosas - Emily Brontë',
        id: 47,
        precio: 33396,
        cantidad: 9,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_839438-MLA42456704736_072020-F.webp'
    },
    {
        nombre: 'Madame Bovary - Gustave Flaubert',
        id: 12,
        precio: 22500,
        cantidad: 32,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_631017-MLM41669012389_052020-F.webp'
    },
    
]


/*
let plantillaCarrito = ''

    for(const libro of carrito){
        plantillaCarrito = plantillaCarrito + `
        <div>
            <h3>Nombre: ${libro.nombre}, ID: ${libro.id}</h3>
            <img width='100px' src="${libro.img}"/>
            <span>Precio unitario: $${libro.precio} x ${libro.cantidad} unidades</span>
            <span>Total: $${libro.precio * libro.cantidad}<span/>
        </div>
        <span>TOTAL: $${libro.precio * libro.cantidad}</span>
        `
    }
    carritoHTML.innerHTML = plantillaCarrito
*/


const renderizarCarrito = (carrito) => {
    const carritoHTML = document.getElementById('carrito')
    const totalHTML = document.getElementById('total')
    let total = 0
    let plantillaFuncionRenderizar = ''
    for(const producto of carrito){
        total = total + (producto.precio * producto.cantidad)
        plantillaFuncionRenderizar = plantillaFuncionRenderizar + `
        <div>
            <h3>Nombre: ${producto.nombre}, ID: ${producto.id}</h3>
            <img width='100px' src="${producto.img}"/>
            <br/>
            <span>Precio unitario: $${producto.precio} x ${producto.cantidad} unidades</span>
            <br/>
            <span>Total: $${producto.precio * producto.cantidad}<span/>
        </div>
        <hr/>
        `
    }
    carritoHTML.innerHTML = plantillaFuncionRenderizar
    totalHTML.innerText = 'TOTAL: $' + total  
}

renderizarCarrito(carrito)

/*
crear una funcion llamada eliminarItemPorId que va a recibir un id
y deberá buscar en el array carrito y eliminar al item con el id recibido, PERO OJO,
solamente vamos a eliminar si la cantidad es 1
SINO deberemos reducir la cantidad en 1

EJEMPLO:

eliminarItemPorId(2)
Busca a la toyota y como tiene 5 de cantidad, cambia el 5 por 1 menos, es decir 4
Al finalizar invocaremos nuevamente a renderizarCarrito
*/

/* FIND nos permite buscar un elemento en un array de objetos 
si lo encuentra, retornara dicho objeto, sino retornara un undefined.

    FINDINDEX nos permite buscar y devolver la posicion del item en un array
    de objetos
*/

const elimarItemPorId = (id) => {
    const itemBuscado = carrito.find((item) => item.id === id)
    /*
    const itemBuscado = carrito.find((item) => {   
        return item.id === id
    })
    */
    if(itemBuscado){
        if(itemBuscado.cantidad === 1){
            //Logica para eliminar item
            const posicionItemDelProducto = carrito.findIndex((item) => item.id === id)
            carrito.splice(posicionItemDelProducto, 1)
        }
        else{
            //Logica para decrementar en 1 la cantidad
            itemBuscado.cantidad -= 1
        }
        renderizarCarrito(carrito) //rerenderizacion
    }
    else{
        console.error('Error, item con id inexistente')
    }
    console.log(itemBuscado)
}
//elimarItemPorId(5)


//Buscar si en carrito ya existe un elemento con ese id
const agregarItemAlCarrito = (producto) => {
    const idBuscado = carrito.find((item) => item.id === producto.id) //retorna el objeto o undefined
    if(idBuscado){
        //SI existe unicamente incrementaran su cantidad en 1
        idBuscado.cantidad += 1
        }
        else{
        //SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada 
        //cantidad y con el valor 1
        producto.cantidad = 1
        carrito.push(producto)
        }
        //siempre que modifique mi carrito tengo que re-renderizar
        renderizarCarrito(carrito)
}

agregarItemAlCarrito(99)

agregarItemAlCarrito = {
    nombre: 'Estudio en Escarlata - Arthur Conan Doyle',
    id: 2,
    precio: 50000,
    thumbnail: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/698752.jpg"
}




