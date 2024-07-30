import { createContext, useContext, useState } from "react";
import { eliminarProductoPorId, obtenerProductos } from "../helpers/productos";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [productos, setProductos] = useState(obtenerProductos())
    const navigation = useNavigate()

    const handleDeleteProduct = (id) => {
        setProductos(eliminarProductoPorId(id))
        navigation('/')
    }


    return (
        <GlobalContext.Provider value={
            {
            productos: productos,
            handleDeleteProduct: handleDeleteProduct
            }
        }>
        {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

