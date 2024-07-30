import { contactos } from "../data/data-contactos";


//creo una funcion: la fx recibe un id y va a devolver el producto en particular
export const obtenerContactoPorId = (id) => {
    return contactos.find((contacto) => Number(contacto.id) === Number(id));
};