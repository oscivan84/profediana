import React from 'react'
import { Link } from 'react-router-dom'
import logoTemporal from './assets_landingPage/Subtract.png'
import './styles/header.css'

function Header (){
    return(
        <header className="header">
        <div className="container-header">
        <div className="content_logo">
            <img src={logoTemporal} alt="logo-temporal" /> 
            
            </div>
            <nav className="nav">
                <a>Productos</a>
                
                <a>Blog</a>
            </nav>

            <div className="sesion">

            {/* Boton para ir a ingresar con una cuenta existente  */}
            <Link to="/session/signin">
            <a className="sing-in" href="/session/signin">Entrar</a>
            </Link>

            {/* Boton para crear una cuenta  */}
            <Link to="/session/signup">
                    <a className="sing-up" href="/session/signup"><span>Registro</span></a>
            </Link>

            </div>
                
            </div>

        </header>

    )
}

export default Header;