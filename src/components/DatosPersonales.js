import React from 'react'
import Git from "./Imagenes/Git.ico";
import Facebook from "./Imagenes/Facebook.png";
import Perfil from "./Imagenes/Perfil2.jpeg";



const DatosPersonales = () => {
    return (
        <section>

            
            <div id="articulo">
                <h1>Victor Manuel Cancino Guillen</h1>
                <p>Victor Manuel Cancino Guillen, +52 9631958495·
                    <a href="mailto:victokeychao125@email.com">  victokeychao125@email.com</a></p>
                <p> Mi nombre es Victor Manuel Cancino Guillen cuento con la experiencia en la programacion web para proporcionar un conocimiento sólida para
                    resúmenes de alto nivel en una institucion dentro de las aulas. Los enfoques de la programacion web fomentan el conocimiento requerido para el
                    desarrollo de paginas o aplicaciones web mediante HTM5, CSS, Java Script y Bootstrap.</p>

                <div>
                    <img src={Perfil} alt="Perfil" width="500" height="400" />
                </div>

                <div id="Lado">
                <br></br><br></br><h1>Direccion</h1>
                    <h4>Comitan De Dominguez, Chiapas, Mexico</h4>
                    <div>Boulevard Belisario Domínguez S,N° exterior 100 Barrio Nicalocok, 30068 Comitán de Domínguez, Chis, Mexico</div>
                </div>

                <div id="Lado">
                    <br></br><h2>Mi Github y Mi Facebook</h2>
                    <a href="https://github.com/VictorM2001" target="blank"><img src={Git} alt="Git" width="50" height="50" /></a> <p></p>
                    <a href="https://www.facebook.com/profile.php?id=100014520075597" target="blank"><img src={Facebook} alt="Git" width="50" height="50" /></a>
                </div>

            </div>

        </section>


    )
}
export default DatosPersonales
