import React from 'react'
import './styles/sectioncharacteristic.css'
import monitoring from './assets_landingPage/Icon-monitoring.png'
import widget from './assets_landingPage/widget.png'
import best_performance from './assets_landingPage/Icon-perfonmance.png'

function SectionCharacteristic(){
    return(
        <React.Fragment>
            <section>
                    <h1 className="section-title">CARACTERISTICAS</h1>
                <div>
                    <div className="content-characteristic">
                        <p>Aprende todo acerca del cuidado de las uñas, limpieza y desinfección de herramientas, los distintos tipos de limas, lámparas y productos seguros para trabajar.</p>
                    </div>

                    <div className="cards">

                        <div>
                            <img src={monitoring} alt="monitoring" />
                            <h4>Decoración y técnicas de esculpido.</h4>
                            <p>Aprende a esculpir uñas en acrílico y todo sobre manicura.</p>
                        </div>

                        <div>
                            <img src={widget} alt="widget" />
                            <h4>Uñas esculturales</h4>
                            <p>Aprende sobre uñas esculturales y acabado stiletto.</p>
                        </div>

                        <div>
                            <img src={best_performance} alt="best_perfomance" />
                            <h4>Semipermanente</h4>
                            <p>Esmaltado en gel semipermanente, esculpido de uñas.</p>
                        </div>

                    </div>
                </div>
            </section>
    
        </React.Fragment>
    )
}


export default SectionCharacteristic; 