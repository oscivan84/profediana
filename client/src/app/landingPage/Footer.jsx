import React from 'react'
import './styles/footer.css'
import iconFacebook from './assets_landingPage/icon/facebook.png'
import iconInstagram from './assets_landingPage/icon/instagram.png'
import iconTwitter from './assets_landingPage/icon/twitter.png'

export default function Footer(){
    return(
        <React.Fragment>
            <footer className="footer">
                <div className="__footer">
                    <div>
                        <h1>PROFEDIANA</h1>
                    </div>

                    <nav>
                        <a>Sede Principal</a>
                        <a>Calle 23 # 56-56 Barrio </a>
                        <a>Bogota Colombia</a>
                        <a>Contactanos</a>
                    </nav>

                    <nav>
                        <a href="www.facebook.com" target="_blank"><img src={iconFacebook} alt="icono de facebook" /></a>
                        <a href="www.instagram.com"><img src={iconInstagram} alt="icono de instagram" /></a>
                        <a href="www.twitter.com"><img src={iconTwitter} alt="icono de twitter" /></a>
                    </nav>

                </div>
            </footer>
        </React.Fragment>
    )
}