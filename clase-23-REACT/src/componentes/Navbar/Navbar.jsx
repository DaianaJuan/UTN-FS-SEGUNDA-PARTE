import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import ButtonCrearProducto from '../ButtonCrearProducto/ButtonCrearProducto'

const Navbar = (props) => {
    const { userData } = props
    const { logged, isAdmin, lang } = userData

    return (
        <nav className='contenedor-nav'>
            <img src="#" alt="Logo" />
            <p>Home</p>
            <p>Lenguaje: {lang}</p>
            <div>
                {logged ? (
                    <div>
                        <span>isAdmin?: </span>
                        {isAdmin ? <ButtonCrearProducto /> : 'No'}
                    </div>
                ) : (
                    <Button />
                )}
            </div>
        </nav>
    )
}

export default Navbar