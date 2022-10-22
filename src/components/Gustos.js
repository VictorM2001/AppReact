import React from 'react'

import Fut1 from "./Imagenes/Futbol1.jpg";
import Fut2 from "./Imagenes/Futbol2.jpg";
import Fut3 from "./Imagenes/Futbol3.jpg";
import Fut4 from "./Imagenes/Futbol4.jpg";
import Anime1 from "./Imagenes/Anime1.jpg";
import Anime2 from "./Imagenes/Anime2.jpg";
import Anime3 from "./Imagenes/Anime3.jpg";
import Anime4 from "./Imagenes/Anime4.jpg";
import Juegos1 from "./Imagenes/juegos1.jpeg";
import Juegos2 from "./Imagenes/juegos2.jpg";
import Juegos3 from "./Imagenes/juegos3.jpg";
import Juegos4 from "./Imagenes/Juegos4.jpg";
import Juegos5 from "./Imagenes/juegos5.jpg";




const Gustos = () => {
    return (
        <section >
        <br></br><section id="articulo">
            <h1>Jugar Futbol</h1><br></br>
        </section><br></br>
        
        <div id="articulo">
            <div>
                <img src={Fut1} alt="Messi Vs CR7" width="500" height="400" />
                <img src={Fut2} alt="Ronaldinho1" width="500" height="400" />
            </div>
            <div>
                <img src={Fut3} alt="Ronaldinho2" width="500" height="400" />
                <img src={Fut4} alt="Ronaldinho3" width="500" height="400" />
            </div> <br></br><br></br>
        </div>

            <br></br><section id="articulo"> 
            <h1>Ver Animes</h1><br></br>
            </section><br></br>

            <div id="articulo">
                <div>
                    <img src={Anime1} alt="Naruto1" width="500" height="400" />
                    <img src={Anime2} alt="Naruto2" width="500" height="400" />
                </div>
                <div>
                    <img src={Anime3} alt="Dragon Ball Z1" width="500" height="400" />
                    <img src={Anime4} alt="Dragon Ball Z2" width="500" height="400" />
                </div><br></br><br></br>
            </div>

            <br></br><section id="articulo"> 
            <h1>Jugar Videojuegos</h1><br></br>
            </section><br></br>

            <div id="articulo">
                <div>
                    <img src={Juegos1} alt="GTA SA" width="500" height="400" />
                    <img src={Juegos2} alt="GEARTS 5" width="500" height="400" />
                </div>
                <div>
                    <img src={Juegos3} alt="HALO 5" width="500" height="400" />
                    <img src={Juegos4} alt="FIFA 19" width="500" height="400" />
                </div>
                <div>
                    <img src={Juegos5} alt="" width="1000" height="500" />
                </div>
            </div><br></br> <br></br>

        </section>

    )
}
export default Gustos