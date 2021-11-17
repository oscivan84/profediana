import React from 'react'
import {
    Button
} from '@material-ui/core'
import { Link }from 'react-router-dom'
import imageMain from './assets_landingPage/main-screen.png'
import rectangle from './assets_landingPage/Rectangle2.png'
import './styles/sectionmain.css'

function SectionMain (){
    return(
        <React.Fragment>
        <section className="section-one">
        <div className="__section-one">
            <div className="text-section-one">
                <h1>Diplomado en Manicure</h1>
                <p>Aprende las técnicas de belleza para uñas y gana dinero haciéndolo.</p>
                <Link to="/formulario/registro">
                <Button className="section-one-button" variant="contained">Registro Alumno</Button>
                </Link>
            </div>



            </div>

        <section className="section-two">
            <img src={imageMain} alt="img-main" />
        </section>

        </section>
        <img className="wavy-one" src={rectangle} alt="rectangulo" />

        </React.Fragment>

    )
}

export default SectionMain;