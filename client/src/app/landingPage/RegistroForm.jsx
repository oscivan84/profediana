import { lab } from 'color'
import React from 'react'
import './styles/registroform.css'



export default function RegistroForm(){
    return(
        <section className="content-register">

        <div className="content-form">
            <form className="form">
            <h1>FORMULARIO DE REGISTRO</h1>
            <lavel>
            <lavel>
                <label>Nombre:</label>
                </lavel>               
                <input className="input-global" type="text" required />

                <label>Apellido:</label>
                <input className="input-global" type="text" required />
                </lavel>
                <label>Tipo Documento Identidad:</label>
                <select>
                    <option>Tarjeta de identidad</option>
                    <option>Cedula</option>
                    <option>Cedula extranjera</option>
                </select>

                <label>Número de Documento:</label>
                <input className="input-global" type="number" placeholder="0000000000" required  />

                <label>Fecha de Nacimiento:</label>
                <input className="input-global" type="date" required  />

                <label>Lugar de Nacimiento:</label>
                <input className="input-global" type="text" required />

                <label>Nacionalidad:</label>
                <input className="input-global" type="text" required />

                <label>Dirección de Residencia:</label>
                <input className="input-global" type="text" required />

                <label>Barrio:</label>
                <input className="input-global" type="text" required />

                <label>Teléfono Fijo:</label>
                <input className="input-global" type="number" required />

                <label>Teléfono Movil:</label>
                <input className="input-global" type="number" required />

                <label>Correo Electrónico:</label>
                <input className="input-global" type="email" required />

                <label>Nivel Académico:</label>
                <select>
                    <option>Primaria</option>
                    <option>Bachillerato</option>
                    <option>Tecnico</option>
                    <option>Profesional</option>
                    <option>Otro</option>
                </select>

                <label>Estado Civil:</label>
                <input className="input-global" type="text" required />

                <label>Con quien vive:</label>
                <input className="input-global" type="text" required />
                
                <label>Eps:</label>
                <input className="input-global" type="text" required />

                <label>Tipo Afiliacion:</label>
                <select>
                    <option>Cotizante</option>
                    <option>Beneficiario</option>
                </select>

                <hr/>
                
                <label className="label-compromiso">Compromiso del estudiante</label>
                <input className="input-compromiso" type="file" required />

                
                <label className="label-checkbox">Acepto el manejo de mis datos <input type="checkbox" required /></label>

                <button type="submit">
                    Enviar Formulario
                </button>

            </form>
        </div>


        </section>
    )
}