import React from 'react'

import Formacion from "./Imagenes/Formacion.png";
import Prescolar1 from "./Imagenes/Prescolar1.jpeg";
import Prescolar2 from "./Imagenes/Prescolar2.jpeg";
import Primaria from "./Imagenes/Primaria.jpg";
import Telesecundaria1 from "./Imagenes/Telesecundaria1.jpg";
import Telesecundaria2 from "./Imagenes/Telesecundaria2.png";
import Cobach from "./Imagenes/Cobach.jpg";
import Tec1 from "./Imagenes/Tec1.jpg";
import Tec2 from "./Imagenes/Tec2.jpg";
import Tec3 from "./Imagenes/Tec3.jpg";
import Tec4 from "./Imagenes/Tec4.jpg";

const DatosEscolares = () => {
    return (
        <section>

            <section id="articulo">
                <h2>Formacion Academica</h2>
                <img src={Formacion} alt="Formacion" width="200" height="200" />
            </section>

            <div id="articulo">
                <br></br><br></br><h3>Prescolar infantil Jose Maria Morelos y Pavon</h3><br></br>
                <img src={Prescolar1} alt="Prescolar1" width="500" height="400" />
                <img src={Prescolar2} alt="Prescolar2" width="500" height="400" /><br></br><br></br>

            </div>

            <div id="articulo">
                <br></br><br></br><h3>Primaria Jose Maria Morelos y Pavon</h3><br></br>
                <img src={Primaria} alt="Primaria" width="1000" height="500" /><br></br><br></br>
            </div>

            <div id="articulo">
                <br></br><br></br><h3>Telesecundaria 1053 Jose Maria Morelos y Pavon</h3><br></br>
                <img src={Telesecundaria1} alt="Telesecundaria1" width="500" height="400" />
                <img src={Telesecundaria2} alt="Telesecundaria2" width="500" height="400" /><br></br><br></br>
            </div>

            <div id="articulo">
            <br></br><h3>Cobach Plantel 262 Chihuahua</h3>
            <p>Especialidad en informatica: Diseño Grafico, Hojas de Calculo Y paginas Web en HTML.</p><br></br>
                <img src={Cobach} alt="Cobach" width="500" height="400" /><br></br><br></br>
            </div>

            <div id="articulo">
            <br></br><br></br><h3>Instituto Tecnilogico de Comitan</h3>
                <div>Carrera: Ingenieria en Sistemas Computacionales</div>
                <p>Especialidad: Desarrollo y Gestion de Entornos Web ISIE-DGW-2021.</p>
                <img src={Tec1} alt="Tec1" width="500" height="400" />
                <img src={Tec2} alt="Tec2" width="500" height="400" />
                <img src={Tec3} alt="Tec3" width="500" height="400" />
                <img src={Tec4} alt="Tec4" width="500" height="400" /><br></br><br></br><br></br>
            </div>
        </section>
    )
}
export default DatosEscolares
