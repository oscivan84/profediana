import React from 'react'
import './styles/sectionprices.css'


function SectionPrices(){
    return(
        <React.Fragment>

        <section className="tabla-main">
            <h1>PLANES DE PRECIOS</h1>
            <span className="tabla-main-p">Consulte los planes para 2022 y los precios estimados aquí. Puede ver los precios finales e inscribirse.</span>

            <div class="contenedor-tabla">
                <div class="tabla">
                    <h1>Diplomado Manicura</h1>
                    <span>5 Meses</span>
                    <hr/>
                    <h3>290.000 <sup>$</sup></h3>
                    <p>Por mes</p>
                    <a href="" class="boton">Comenzar</a>
                </div>

                <div class="tabla">
                    <h1>Decoracion y dibujo</h1>
                    <span>10 Meses</span>
                    <hr/>
                    <h1>2450000 <sup>$</sup></h1>
                    <p>Por mes</p>
                    <a href="" class="boton">Comenzar</a>
                </div>

                <div class="tabla-estandar">
                    <h1>Decorado full tecnicas</h1>
                    <span>15 Meses</span>
                    <hr/>
                    <h1>200000 <sup>$</sup></h1>
                    <p>Por mes</p>
                    <a href="" class="boton-estandar">Comenzar</a>
                </div>

                </div>

                <hr className="hr-footer" />

        </section>

            
    
        </React.Fragment>
    )
}


export default SectionPrices; 