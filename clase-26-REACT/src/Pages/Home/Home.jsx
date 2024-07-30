import React from 'react'
import { ProductList } from '../../Components'
import logo from '../../assets/star_wars.jpg'
import { obtenerProductos } from '../../helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'

const Home = () => {
    const {productos} = useGlobalContext()
    


    return (
        <div>
            <h1>Elige nuestros productos <img src={logo} alt="" style={{width:'80px'}}/></h1>
            <ProductList productos={productos}/>
        </div>
    )
}


export default Home

