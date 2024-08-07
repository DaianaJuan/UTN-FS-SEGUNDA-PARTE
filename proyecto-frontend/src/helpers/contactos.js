import { contactos } from "../data/contactosData";

/**
 * Devuelve el contacto con el id especificado.
 *
 * @param {number} id - El id del contacto a buscar.
 * @return {Object | undefined} El objeto de contacto con el id especificado o undefined si no se encuentra.
 */

export const obtenerContactoPorId = (id) => {
    const contactoPorId = obtenerContactoPorId()
    return contactoPorId.find((contacto) => contacto.id_autor === Number(id))
}

/* GUARDAR CONTACTOS EN LOCAL STORAGE*/ 

const guardarContacto = (contactos) => {
    const contactos_JSON = JSON.stringify(contactos)
    localStorage.setItem("contactos", contactos_JSON)
}
/**
 * Obtiene la lista de contactos del almacenamiento local. Si no hay contactos almacenados, guarda los 
 * contactos iniciales y los devuelve.
 *
 * @return {Array} La lista de contactos
 */
export const obtenerContactos = () => {
    const contactos_guardados = localStorage.getItem("contactos")
    
    if(contactos_guardados){
        //si hay contactos guardados, los devuelvo
        return JSON.parse(contactos_guardados)
    }
    else{
        //si no hay contactos guardados, guardo los contactos iniciales
        guardarContacto(contactos)
        return contactos
    }
    
}

/* CREAR CONTACTO, GUARDAR CONTACTO EN LOCAL STORAGE Y RETORNAR CONTACTOS */

const crearContacto = (nuevo_contacto) => {
    const lista_contactos = obtenerContactos()
    lista_contactos.push(nuevo_contacto)
    guardarContacto(lista_contactos)
}

/* OBTENER CONTACTO POR NOMBRE */

export const obtenerContactoPorNombre = (nombre) => {
    const lista_contactos = obtenerContactos();
    const contactos_filtrados = lista_contactos.filter((contacto) =>
        contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
    )
    return contactos_filtrados;
}























//COSAS NUEVAS PARA MI----------------------------------------------------------------------------------------

//Busqué información para poder generar la hora y fecha del envío de un nuevo mensaje.
//Al principio usé new Date().toLocaleString(), pero queria formatearlo para que sea como en wsp real.
//La funcion usa 12hs (ES) y agrega a. m. o p. m. En el condicional muestro si el mensaje se envio en el dia,
//se muestra hoy, si fue el día anterior, muestra ayer y si el mensaje es mas antiguo, muestra la fecha, y la
//hora se muestra siempre

/**
 * Formatea una fecha dada en una representación de cadena basada en si es hoy, ayer o cualquier otra fecha.
 *
 * @param {Date} fecha - La fecha a formatear.
 * @return {string} La fecha formateada como una cadena. Si la fecha es hoy, devuelve "hoy {hora}:{minuto}".
 * Si la fecha es ayer, devuelve "ayer {hora}:{minuto}".
 * De lo contrario, devuelve "{día}/{mes}/{año} {hora}:{minuto}".
 */

export const formatearFecha = (fecha) => {
    const fechaMensaje = new Date(fecha);
    const fechaActual = new Date();
    
    const esHoy = fechaMensaje.toDateString() === fechaActual.toDateString();
    
    const fechaAyer = new Date(fechaActual);
    fechaAyer.setDate(fechaAyer.getDate() - 1);
    const esAyer = fechaMensaje.toDateString() === fechaAyer.toDateString();

    const opcionesHora = { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };

    const hora = fechaMensaje.toLocaleTimeString('es-ES', opcionesHora);

    if (esHoy) {
        return `hoy ${hora}`;
    } else if (esAyer) {
        return `ayer ${hora}`;
    } else {
        return fechaMensaje.toLocaleString('es-ES', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    }
};
