//LOCALSTORAGE Y SSESIONSTORAGE

//let nombre = prompt('Ingrese su nombre')

localStorage.setItem('username', nombre)

//JSON javascript obect notation (una forma de escribir objetos)

//string escrito como objeto

'{"nombre": "pepe"}'

//JSON tiene 2 funciones

//1) parse permite transformar un string con notacion de objetos a un objeto

console.log(JSON.parse('{"nombre": "pepe"}'))

//2) stringify

const producto = {
    nombre: 'tv samsing',
    precio: 700
}

let stringConNotacionDeObjeto = JSON.stringify(producto)

console.log(stringConNotacionDeObjeto)

/**
 * Mejorar la funcion login para que el objeto retornado lo guarde en el logalstorage
 */