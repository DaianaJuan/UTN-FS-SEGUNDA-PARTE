import React, { useEffect } from 'react'
import icono from '../../assets/star_wars.jpg'
import { useGlobalContext } from '../../Context/GlobalContext'
import './Home.css'
import ProductList from '../../Components/ProductList/ProductList'


const Home = () => {
    const { productos, logout, handleChangeSearchTerm, searchTerm } = useGlobalContext()
    



    return (
        <div>

            <div className='imageContainer'>
                <img src="/imagenes/leia.jpg" alt="" />
            </div>
            <input onChange={handleChangeSearchTerm} value={searchTerm} />
            <h1>Elige nuestros productos <img src={icono} alt="" style={{width:'70px'}} /></h1>
            <ProductList productos={productos}/>
        </div>
    )
}

export default Home
