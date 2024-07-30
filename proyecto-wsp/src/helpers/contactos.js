import DATA from '../data/data-contactos.json'


//creo una funcion: la fx recibe un id y va a devolver el producto en particular
export const obtenerContactoPorId = (id) => {
    return DATA.find((contacto) => Number(contacto.id) === Number(id));
};