/* WHILE,
el bucle while repite un bloque de codigo mientras se cumpla x condicion

*/

/* 
let numero = prompt('ingrese un numero')

while(!numero || isNaN(numero)){
    alert('NO ingresaste un dato numerico')
    numero = prompt('Ingresa un dato numerico por favor')
}

 */
/* 
Solicitar un string al usuario y validar que sea un string valido
Casos invalidos:
''
null
number (cualquier tipo de number excepto el NaN)
*/

//KISS = keep it simple
/* let nomb = prompt('Ingrese su nombre')
while(!nomb || !isNaN(nomb)){
    alert('Error de dato')
    nomb = prompt('Ingrese su nombre')
} */

/* let texto = prompt ('ingrese una palabra')
while( !texto || !isNaN(texto)){
    alert('no ingreso un dato valido')
    texto = prompt ('ingrese una palabra')
} */



//FOR
/* Es un bucle que usamos cuando queremos repetir un bloque de codigo una determinada cantidad de veces */


/* Di por consola 50 hola mundo */

//DRY = dont repeat yourself
/* 
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo') 
*/
//  inicio          ;   limite      ; ritmo de actualizacion
/* for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
    console.log('Hola mundo ' + iterador)
}  */


/* Solicitar 1 nombre y mostarlo por alerta 3 veces

*/

/* for(let i = 1; i <= 3 ; i = i + 1) {
    let nombre = prompt('Ingrese un nombre: ')
    alert(nombre)
} */


/*  */

/* Solicitar 3 nombres y al final mostarlos en lista
lista de nombre:
-pepe
-juan
-ezequiel
*/
/* 
let listaDeNombres = 'Lista de nombres: '
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    let nombre = prompt('Ingrese un nombre')
    listaDeNombres = listaDeNombres + '\n' +  nombre
}

alert(listaDeNombres) */

/* 
vamos a solicitar un numero 3 veces al finalizar mostrar el resultado de la sumatoria entre los 3 numeros

EJ:
3
3
2
Resultado: 8
*/

/* 
camelCase = listaDeNumeros
snake_case = lista_de_numeros

español = snake_case
ingles = camelCase
*/
/* let listaDeNumeros = ''
let sumaNumeros = 0
for (let i = 1 ; i <= 3 ; i = i + 1) {
    let numero = Number(prompt("Escribir un numero"))
    listaDeNumeros = listaDeNumeros + "\n" + numero
    sumaNumeros = sumaNumeros + numero
}
alert(listaDeNumeros)
alert(sumaNumeros) */


/* 
vamos a solicitar al usuario una cantidadDeRepeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario, al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
validar que el numero ingresado sea un numero, en caso de que no volver a solicitarlo
validar que la cantidadDeRepeticiones ingresada sea un numero, en caso de que no volver a solicitarlo

 */

/* let cantidadDeRepeticiones = prompt("Cuántas números sumamos?: ")
let suma = 0
while (!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)) {
    alert("Dato no válido")
    cantidadDeRepeticiones = prompt("Ingrese un dato numérico: ")
}
for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    numero = prompt("Ingrese un número: ")
    while (!numero || isNaN(numero)) {
        alert("Dato no válido")
        numero = prompt("Ingrese un dato numérico")
    }
    suma = suma + Number(numero)
}
alert("El resultado es: " + suma) */

//FUNCIONES

//Declarar una funcion
/* function saludar(nombre, apellido){
    alert('Hola a ' + nombre + ' ' + apellido)
} */


//invocar mi funcion
/* saludar('pepe', 'suarez')
saludar('juan', 'maranga') */

//f(x) = 2x + 1
//f(x = 3) = 2 . 3 + 1 = 
//f(x = 4) = 2 . 4 + 1

/* 
Crear una funcion llamada sumar, que reciba dos numeros y muestre por consola el resultadod de la suma de ambos numeros
*/
/* function sumar(numero1, numero2) {
    let suma = numero1 + numero2
    console.log(suma)
} */

/* 
Crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio

valor * 0.21


ej: calcularIva(100) => console: 21

*/
/* function calcularIva(importe){
    return importe * 0.21
}

let iva = calcularIva(100)

alert(iva)
console.log(iva)

alert(calcularIva(200)) */


function solicitarYValidarNumero (){
    let numero = prompt('ingrese un numero')
    while (!numero || isNaN(numero)) {
        alert("El dato debe ser un numero")
        numero = prompt("Ingrese el numero: ")
    }
    return Number(numero)
}



let cantidadDeRepeticiones = solicitarYValidarNumero()
let suma = 0

for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    let numero = solicitarYValidarNumero()
    suma = suma + numero
}
alert("El resultado es: " + suma) 