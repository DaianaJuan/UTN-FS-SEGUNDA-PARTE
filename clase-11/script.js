/* Operadores Logicos */

/* 
! NOT => negacion (devuelve el valor opuesto booleano del dato)

|| OR => o logico
Si el primer valor es un truly devuelve el primer valor
Sino devuelve el segundo valor



&& AND => y logico
Si el primer valor el un truly devuelve el segundo valor
Sino devuelve el primero


*/
/* 
falsy:
false
0
''
-0
null
NaN
undefined
*/


/* 
!(0 * null) //true

!('' - 1)  //false

!NaN //true
*/

/* 
let resultado = '' || 0
console.log(resultado) */

/* 
quiero dejar pasar a alguien que tenga mas de 18 años o tenga mas de 100000

edad = 28
dinero = 100

condicion = edad > 18 || dinero > 100000

condicion = true || false

condicion = true



edad = 10
dinero = 1000000

condicion = edad > 18 || dinero > 100000

condicion = false || true

condicion = true



edad = 10
dinero = 10

condicion = edad > 18 || dinero > 100000

condicion = false || false

condicion = false (es el segundo false)


Si el usuario tiene nombre o email lo registro

nombre = 'pepe'
email = ''

condicion = nombre  || email

condicion = 'pepe'

nombre = ''
email = 'pepe@gmail.com'

condicion = nombre  || email

condicion = 'pepe@gmail.com'



nombre = ''
email = ''

condicion = nombre  || email

condicion = ''


nombre_usuario = solicitarNombre() || 'unknown'


*/

/* 
Si dejo pasar al usuario si tiene mas de 18 y mas de 6000

edad = 70
dinero = 90000

codicion = edad >= 18 && dinero > 6000 

            true  && true

            true


edad = 10
dinero = 90000

condicion = edad >= 18 && dinero > 6000 

condicion = false


edad = 60
dinero = 900

condicion = edad >= 18 && dinero > 6000 

condicion = dinero > 6000 
condicion = false


TABLAS DE LA VERDAD:

OR
true || true = true
false || true = true
true || false = true
false || false = false

AND
true && true = true
false && true = false
true && false = false
false && false = false
*/



/* 

!(NaN == NaN) || 'pepe'   = true

'pepe' * 1 + '' && 0 
NaN + '' && 0 
"NaN" && 0  = 0
*/


/* 
    9 * '9' * null || 'pepe' && 'juan'      JS lo lee asi:   ((((9 * '9') * null) || 'pepe' )&& 'juan')

    81 * null || 'pepe' && 'juan'

    0 || 'pepe' && 'juan'

    'pepe' && 'juan' = 'juan'


    (!'pepe') || (!'juan')

    false || false
*/


/* 
!('' + 0 - 0 * !null + false) && 'juan' || 'pepe' || 'maria' = 

    'juan' || 'pepe' || 'maria'

    'juan'



ESTA MAL
!false || true && false
true || true && false
true && false = false

ORDEN => NOT, AND, OR

CASO CORRECTO
!false || (true && false)

true || false

true
*/


/* 
Variables

Sintaxis

<tipo_variable> identificador = dato
*/


//VAR

//El valor por defecto implicito es undefined
//Tiene hoisting


/* //declaracion
//inicializar la variable (implicito)
var edad

//inicializar la variable (explicito)
var nombre = 'pepe'

//Re asignacion
edad = 90 */







/* 
//HOISTING
var apellido = undefined //esto lo hace JS por detras

console.log(apellido)


apellido = 'suarez'

console.log(apellido) 
*/

/* 
var nombre

nombre = 'pepe'


console.log(nombre) */

/* 
VAR ES5

Tiene Hoisting? SI
Tiene valor implicito en undefined? SI
Se puede reasignar? SI
Se puede redeclarar? SI
*/

//LET

/* 
LET ES6+ (EcmaScript 6)

Tiene Hoisting? NO
Tiene valor implicito en undefined? SI
Se puede reasignar? SI
Se puede redeclarar? NO (por el momento)
*/
/* 
//Declarando e inicializando mi variable de manera implicita
let edad 

//Declarando e inicializando mi variable de manera explicita
let nombre = 'pepe'


nombre = 'juan'

console.log(nombre)

 */



//CONST

/* 
CONST ES6+ (EcmaScript 6)

Tiene Hoisting? NO
Tiene valor implicito en undefined? NO
Se puede reasignar? NO
Se puede redeclarar? NO
*/


/* 
const nombre = 'pepe'

console.log(nombre)
 */


/* 
//NO SE HACE
nombre = 'juan'

console.log(nombre)
 */

/* 
Scope y block (bloques y alcance)
*/



//Crear un bloque de codigo
//Var tiene alcance o scope global
/* {
    var nombre = 'pepe'
    console.log(nombre)
}
console.log(nombre) */


/* //let en este caso tiene un alcance local
{
    let nombre = 'pepe'
    console.log(nombre)
}
//esto va a dar error
console.log(nombre) */

/* //scope global
let nombre = 'juan'
{
    //scope local
    let nombre = 'pepe'
    console.log(nombre)
}

console.log(nombre)  */


/* //scope global
var nombre = 'juan'
{
    //scope global
    var nombre = 'pepe'
    console.log(nombre)
}

console.log(nombre)  */

/* 
//scope global
let nombre = 'juan'
{
    //scope global
    nombre = 'pepe'
    console.log(nombre)
}

console.log(nombre) */


/* let precio = 2000

{
    let precio = 20
    {
        let precio = 90
    }
}


var precio_1 = 2000

{
    var precio_2 = 20
} */

/* let total = 0

{
    total = total + 20
}

console.log(total) */


/* let nombre = 'pepe'

{
    let nombre = 'juan'
    {
        let nombre = 'maria'
    }
    console.log(nombre)
}

console.log(nombre) */


/* let nombre = 'pedro'
console.log(nombre)
{
    let nombre = 'alexis'
    {
        let nombre = 'juan'
        console.log(nombre)
    }
    console.log(nombre)
    {
        nombre = 'damian'
        console.log(nombre)
    }

    console.log(nombre)
}
console.log(nombre)
 */

/* 
pedro
juan
alexis
damian
damian
pedro
*/

//IF (Condicionar)

/* si el usuario se llama pepe lo dejo pasar */

/*
Sintaxis:
if(condicion){
    bloque de codigo
}

if verifica que la condicion sea un thruly
else se ejecuta cuando la condicion del if sea falsy

ELSE DEBE IR LUEGO DEL CIERRE DEL BLOQUE DEL IF
*/

/* let nombre = 'manuel'

if(nombre === 'pepe'){
    console.log('te dejo pasar')
}
else{
    console.log('no te dejo pasar')
}
 */


/* let email = prompt('ingresa tu email')
console.log(email)
if(email){
    console.log('Correcto')
}
else{
    console.log('ERROR: mail ingresado incorrectamente')
} */



/* 
solicitar al usuario una edad y un lenguaje favorito

Si su edad es mayor a 16 y su lenguaje favortio es 'JS' 
mostrar por consola 'Bienvenido al desarrollo web frontend'
mostrar por consola 'No se puede ser perfecto en todo'
*/
/* 
let edad = prompt('Ingresa tu edad')
let lenguaje_fav = prompt('Ingresa tu lenguaje Favorito')
if(edad > 16 && lenguaje_fav === 'JS'){
    console.log('Bienvenido al desarrollo web frontend')
}else{
    console.log('No se puede ser perfecto en todo')
} */




/* 
solicitar al usuario una edad y un lenguaje favorito

Si su edad es mayor a 16 y su lenguaje favortio es 'JS' 
mostrar por consola 'Bienvenido al desarrollo web frontend'
Si su edad es mayor a 14 y su lenguaje favorito es 'PHP'
mostrar por consola 'Bienvenido al desarrollo web backend'
Sino
mostrar por consola 'No se puede ser perfecto en todo'
*/


let edad = prompt('Ingresa tu edad')
let lenguaje_fav = prompt('Ingresa tu lenguaje Favorito')
if(edad > 16 && lenguaje_fav === 'JS'){
    console.log('Bienvenido al desarrollo web frontend')
}
else if(edad > 14 && lenguaje_fav == 'PHP'){
    console.log('Bienvenido al desarrollo web backend')
}
else{
    console.log('No se puede ser perfecto en todo')
} 