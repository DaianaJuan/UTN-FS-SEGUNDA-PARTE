### Calculadora

## Funcionalidades:

-Login
    -Solicitar un email
    -Solicitar un password

-Calcular Operaciones
    -Operaciones Disponibles:
    1) +
    2) -

-Historial
    -agregarAlHistorial
    -mostrarHistorial/renderizarHistorial

## Utilidades:

-Validaciones:
    -numero
    -password
    -email
    -operacionesCalculadora

## Reglas:

Los ejercicios se pueden resolver de muchas formas
Si crees necesario usar funciones, las podes usar
Cumplir en la medida de lo posible con el principio: DRY, KISS

ESTO ESTA MAL:
function a(n){
    return abc-z
}
let v = '1.1.1'


## RECOMENDACIONES:

Una funcion la usamos para evitar re-escribir logica o separar logica 


## Login

Debo tener una funcion llamada login que active toda la logica del login

logica de login:

Vamos a solicitar al usuario un email
Validarermos que el email sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')

Vamos a solictar al usuario una password 
validar que tenga mas de 6 caracteres, que tenga almenos 1 mayuscula y que no sea '' o null

Si todo esta correcto dira por alerta('Usuario {email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:

login() //retorna  el usuario {
    email: 'value@gmail.com',
    password: 'Pepe123'
}

!==


## Calculadora de operaciones

Crear una funcion llamada calculadora() que de inicio a la sig logica
-Operaciones Disponibles:
    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera:
'El resultado de {numero1} {operacion} {numero2} es {resultado}
