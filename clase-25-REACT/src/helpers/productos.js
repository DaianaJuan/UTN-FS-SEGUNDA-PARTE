import { productos } from "../data/productsData";

//creo una funcion: la fx recibe un id y va a devolver el producto en particular
export const obtenerProductoPorId = (id) => {
    return productos.find((producto) => Number(producto.id) === Number(id));
};
