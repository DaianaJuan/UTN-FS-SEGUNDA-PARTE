/* 
JS es un lenguaje interpretado por V8engine
Js es un lenguaje case sensitive
*/
/* 
alert('hola mundo') */


//Tipos de datos:


/* 
PRIMITIVOS:

string => para representar texto
'hola', 'pepe', "hola mundo", '3', `1`

boolean => para representar estados booleano
true false

number => para representar datos numericos
1 -1 1.1 NaN Infinity

null => para representar nulidad
null

undefined => para representar el estado indefinido
undefined
*/


/*
Constructores
Number() => transformar un dato a numero
String() => transformar un dato a string
Boolean() => transformar un dato a boolean
*/


//Operadores Aritmeticos:


/* 
Devuelven string
+ => concatenacion (ocurre cuando HAY un o mas datos string)


Devuelven numeros
+ => suma
- => resta
* => multiplicacion
/ => division
% => resto de la division
*/

/* 
1 + true
subproceso: 1 + Number(true)
subproceso: 1 + 1 = 2

true + true
Number(true) + Number(true)
1 + 1 = 2
*/

/* 
1 + '1'
String(1) + '1'
'1' + '1' = '11'


null + 'juan' 'nulljuan'


5 + true = 6

null + undefined = 
Number(null) + Number(undefined)
0 + NaN = NaN


'700000' + 10000
'70000010000'

Number('700000') + 10000 = 

'700000' - 10000



9 + 0 number 9

0 + false //number 0

false * null //number  0

'' + 0 //string  '0'

'pepe' * 3 //number NaN

undefined - null + 'pepe' //string

(undefined - null) + 'pepe'
NaN + 'pepe' 
String(NaN) + 'pepe'
'NaN' + 'pepe' = 'NaNpepe'
*/



//Comparadores SIEMPRE DEVUELVEN BOOLEAN


/*

== igualdad
=== igualdad de valor y tipo de dato (estricta igualdad)
!= diferencia
!== estricta diferencia 
>
<
>=
<=

Excepciones:
null solo es igual a null o undefined
NaN no es igual a NINGUN OTRO DATO, en caso de querer comparar con NaN debemos usar la funcion isNaN()
*/


/* 
Valores thurty y falsy:
Para saber si un valor es thurty o falsy debemos pasarlo a boolean
Boolean(valor_a_verificar) // true o false



Falsy:
''
0
-0
NaN
false
undefined
null

*/



/* 
NaN == NaN false
8 == NaN boolean false
5 == '5' booelan true
1 === Boolean('1')  boolean false
3 + '' === '3' boolean true

*/