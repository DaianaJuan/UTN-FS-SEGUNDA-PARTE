import React from 'react'
import { ProductList } from '../../Components'
import { productos } from '../../data/productsData'
import logo from '../../assets/star_wars.jpg'

const Home = () => {
    return (
        <div>
            <h1>Elige nuestros productos <img src={logo} alt="" style={{width:'80px'}}/></h1>
            <ProductList productos={productos}/>
        </div>
    )
}

export default Home