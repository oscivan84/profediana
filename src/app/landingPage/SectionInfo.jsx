import React from 'react'
import './styles/sectioninfo.css'
import img_one from './assets_landingPage/screen-01.png'
import img_two from './assets_landingPage/screen-02.png'
import img_three from './assets_landingPage/screen-03.png'
import rectangle from './assets_landingPage/Rectangle.png'

function SectionInfo(){
    return(
        <React.Fragment>
            <section className="section_info">

                    <div className="info_one">
                    <div className="content-text-two">
                    <h1 className="section-title">Uñas shellac</h1>
                    <p> Este tipo de técnica es ideal para aquellas personas con uñas medio largas o largas. Son una mezcla entre esmalte y gel. En este caso, la manicura no queda tan gruesa pero la resistencia es mayor y el resultado parece más natural.    </p>
                    </div>
                    <img src={img_one} alt="Informes y notificaciones de tus actualizaciones" />
                    </div>

                    <div className="info_two">
                    <img src={img_two} alt="Totalmente personalizable para tus necesidades" />
                    <div className="content-text-two">
                    <h1 className="section-title">Metodología de estudio</h1>
                    <p>Trabajamos con una metodología de estudio totalmente flexible que permite compaginar el aprendizaje con la vida laboral y personal.</p>
                    </div>
                    </div>

                    <div className="info_one">
                    <div className="content-text-two">
                    <h1 className="section-title">Acreditaciones y certificaciones</h1>
                    <p>Nuestros alumnos buscan formación académica de calidad y acreditada. Por ello, colaboramos con algunas instituciones y organizaciones que avalan y certifican la calidad de los contenidos de nuestros cursos online y a distancia.</p>
                    </div>
                    <img src={img_three} alt="Plantillas de tablero predefinidas" />
                    </div>
                
            </section>
            <img className="wavy" src={rectangle} alt="rectangulo" />

    
        </React.Fragment> 
    )
}


export default SectionInfo; 