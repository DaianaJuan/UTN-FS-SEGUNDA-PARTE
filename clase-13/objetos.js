let usuario = {
    'nombre': 'Maria',
    'apellido': 'Olivares',
    'edad': 33,
    'mejor amigo': {
        "nombre": 'juan'
    }
};

console.log(usuario);
console.log('Hola '+ usuario['mejor amigo']["nombre"]);

/*CREAR UN OBJETO QUE TENGA LAS SIGUIENTES PROPIEDADES:

PRECIO: NUMBER,
NOMBRE: STRING,
MARCA: STRING,
ID: NUMBER,
DESCRIPCION: STRING
*/ 

const producto = {
    'precio': 25000,
    'nombre': 'Auriculares',
    'marca': 'Motorola',
    'id': 123,
    'descripcion': 'Auriculares alámbricos, color negro'
}
console.log(producto);

//abreviatura es sin comillas

const productoDos = {
    precio: 800,
    nombre: 'Chicles',
    marca: 'beldent',
    id: 1234,
    descripcion: 'beldent infinit con fresh sparks, blueberry, cero azucar, 7 unidades'
}
console.log(productoDos);

//NOTACION DE CORCHETES
console.log('El nombre del producto es ' + producto['nombre']);

const user = {
    name: 'Victor',
    lastname: 'Perez',
    'user preference': {
        theme: 'Dark',
        lang: 'Spanish'
    },
    'user info': {
        'created_at': '18/09/2005',
        'adress': 'Avenida Siempre Viva 1282',
        tel: '+22 5558-2342'
    }
};

/*
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:  \nModo: {theme}  \nLengiaje: {lang}'
'El usuario {nombre} {lastname} creo su cuenta en la fecha {created_at} vive en {adress} y su telefono es: {tel}
*/

console.log('El usuario ' + user['name'] + ' ' + user['lastname'] +
' tiene las preferencias de usuario en:  \nModo: ' + user['user preference']['theme'] + 
'\nLengiaje: '+ user['user preference']['lang'] )

console.log('El usuario: '+ user['name'] + ' ' + user['lastname'] + ' ,creo su cuenta en la fecha: ' +
user['user info']['created_at'] + ' ,y vive en ',
'\n'+user['user info']['adress'] + '. Su telefono es ' + user['user info']['tel'])

//TEMPLATE STRINGS (FORMA ABREVIADA Y MEJOR)
//PASAR LOS MENSAJES DE CONSOLA A TEMPLATE STRINGS

console.log(`
El usuario ${user['name']} ${user['lastname']}, tiene las preferencias de usuario en:
-Modo: ${user['user preference']['theme']}
-Lenguaje: ${user['user preference']['lang']}
`);

console.log(`
El usuario ${user['name']} ${user['lastname']}, creó su cuenta en la fecha: ${user['user info']['created_at']}.
Vive en ${user['user info']['adress']}, y su número telefónico es: ${user['user info']['tel']}.
`)

//CREAR NUEVA PROPIEDAD Y CAMBIAR EL VALOR DE UNA PROPIEDAD

user['name'] = 'Dai';
user['isAdmin'] = false;

//FORMA ABREVIADA - NOTACIÓN DE PUNTOS

user.lastname = 'Zahzú'
user.isAdmin = true

//Pasar nuestro mensaje a notacion de puntos

console.log(`
El usuario ${user.name} ${user.lastname}, tiene las preferencias de usuario en:
-Modo: ${user['user preference'].theme}
-Lenguaje: ${user['user preference'].lang}
`);

console.log(`
El usuario ${user.name} ${user.lastname}, creó su cuenta en la fecha: ${user['user info'].created_at}.
Vive en ${user['user info'].adress}, y su número telefónico es: ${user['user info'].tel}.
`)

/*
crear una function llamada calcularIva(precio, tipoDeFactura)

tipoDeFactura 'A', 'B', 'C'
En el caso de si la factura es C o B el precio tendrá el iva incluido
Ejemplo
calcularIva(100, 'C' || 'B')
{
    precio: 121,
    iva: 21,
    precioConIva: 121,
    factura: C | B
}
En el caso de si la factura es A el precio tendrá el iva discriminar
Ejemplo
{
    precio: 100,
    iva: 21,
    precioConIva: 121,
    factura: A
}
 */

/*const calcularIva = (precio, tipoDeFactura) => {
    let conIva = precio * 0.21
    let iva = 21
    
    if(tipoDeFactura == 'b' || tipoDeFactura == 'c'){
        return {
            precio: conIva,
            iva: 21,
            precioConIva: precio + conIva,
            factura: tipoDeFactura
        }
    }else{
        return {
            precio: precio,
            iva: 21,
            precioConIva: precio + conIva,
            factura: tipoDeFactura
        }
    }

}*/

const calcularIva = (precio, tipo_factura) => {
    let iva = precio * 0.21

    const resultado = {
        precio: precio,
        iva: iva,
        precioConIva: precio + iva,
        factura: tipo_factura
    }
    if (tipo_factura == 'C' || tipo_factura == 'B'){
        resultado.precio = precio + iva
    }
    
    return resultado
}

console.log(calcularIva(1000, 'A'))
console.log(calcularIva(1000, 'B'))
