//validar email. RECIBE UN VALOR Y RETORNA UN BOOBLEANO!!!!!!!!!!!

const validarEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

//validar password
//letra mayuscula

const tieneMayuscula = (contrasenia) => contrasenia.toLowerCase() !== contrasenia

const validarPassword = (password) => {
    return password.length >= 6 && tieneMaysucula(password) && password //password valida que no sea null ni 
    //un caracter vacio
}


//funcion login

const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    email = prompt('Ingrese su E-mail');
    while(!validarEmail(email)){
        email = prompt('El dato ingresado es incorrecto. Ingrese su E-mail');
    };
    usuario.email = email

    password = prompt('Ingrese su contraseña');
    while(!validarPassword){
        password = prompt('La contraseña ingresada es incorrecta. Ingrese su contraseña');
    };
    usuario.password = password

    alert(`Usuario ${usuario.email} registrado`)

    return usuario;

}

//login()

//CALLBACK ES PASAR UNA FUNCION POR UN PARAMETRO

const verificarOperacion = (operacion) => '+' || '-'

const verificarNumero = (numero) => numero && !isNaN(numero)

const calculadora = () => {

}