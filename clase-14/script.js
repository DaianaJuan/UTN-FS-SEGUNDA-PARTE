//ARRAYS
//Es una lista de elementos ordenados
//Es una buena practica declararlos como una constante

const nombres = ['Juan', 'Sofía', 'Mariel', 'Lara']

console.log(nombres);

console.log(typeof nombres);

console.log(nombres[1]) //Sofía

console.log('Tengo '+ nombres.length + ' nombres');


//METODOS DE ARRAYS

//.push() nos permite agregar un elemento al final del array y devuelve la nueva longitud. 
//Se puede agregar mas de un elemento. Modifica al array original (MUTABLES)
nombres.push('María');
console.log(nombres);

//.unshift() agregar un elemento al principio del array y devuelve la nueva longitud. 
//Modifica al array original (MUTABLES)
nombres.unshift('Elena');
console.log(nombres);

//.pop() elimina el ultimo elemento y lo retorna
//nombres.pop();
//console.log(nombres);
let ultimoElemento = nombres.pop();
console.log(ultimoElemento);
console.log(nombres);

//.shift() elimina el primer elemento y lo retorna
//nombres.shift();
//console.log(nombres);
let primerElemento = nombres.shift();
console.log(primerElemento);
console.log(nombres);

//.indexOf() solo funciona con arrays de strings. Devuelve la posicion de un string en el array
let positionDeMariel = nombres.indexOf('Mariel');
console.log('La posicion de Mariel es: ' + positionDeMariel);

//.splice() o empalmar. recibe 3 parámetros. 1) el primer parametro es obligatorio, desde que posicion 
//quiero empezar a eliminar elementos. 2) cantidad de elementos que quiero eliminar desde esa posicion.
//splice siempre retorna un array. 3) tambien se pueden agregar elementos

nombres.splice(positionDeMariel, 2)
console.log(nombres);

const nombres2 = ['María', 'Pedro', 'Leonel', 'Ezequiel', 'Elías']

let posicionDeEze = nombres2.indexOf('Ezequiel');
console.log('La posicion de Ezequiel es: '+ posicionDeEze);

const listaDeEliminados = nombres2.splice(posicionDeEze, 0, 'Lucas')

console.log(nombres2);
console.log('La lista de eliminados es: ',listaDeEliminados);

//.includes() funciona para saber si un elemento esta en el array y solo funciona con arrays de strings y devuelve
//un booleano

let estaIncluido = nombres2.includes('María');
console.log('El elemento María está incluido??? ' + estaIncluido);

//BUCLES PARA RECORRER EL ARRAY

for(let i = 0; i < nombres2.length; i++){
    console.log('Hola '+ nombres2[i]);
};

//quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres de cada nombre
//al finalizar el recorrido la sumatoria final de caracteres

let sumatoriaTotal = 0
for(let i = 0; i < nombres2.length; i++){

    console.log('Cantidad de caracteres de '+ nombres2[i] + ' es: '+ nombres2[i].length)
    sumatoriaTotal += nombres2[i].length

}
console.log('La sumatoria total de caracteres es: ' + sumatoriaTotal);

//FOR OF

for(let nombre of nombres3){
    console.log(nombre)
};

//Dado el siguiente array, crear un segundo array llamado mayusculas que solo contenga las las palabras en mayusculas

const estaEnMinuscula = (str) =>{
    return str == str.toLowerCase()
} 

const tieneMaysucula = (str) =>{
    return !estaEnMinuscula(str)
} 

const array = ['pepe', 'lucas', 'PEDRO', 'JuaN', 'pepeSito'] 
const mayusculas = [];

for (let nombre of array) {
    if (tieneMaysucula(nombre)) {
        mayusculas.push(nombre)
    }
} 

console.log(mayusculas);

//ARRAY DE OBJETOS

const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */

const samsung = []
for(const producto of productos){
    if(producto.marca === 'samsung'){
        samsung.push(producto)
    }
}
console.log(samsung)

