import { contactos } from "../data/DATA_CONTACTOS";

//creo una funcion: la fx recibe un id y va a devolver el contacto en particular
export const obtenerContactoPorId = (id) => {
    return contactos.find((contacto) => Number(contacto.id) === Number(id));
};