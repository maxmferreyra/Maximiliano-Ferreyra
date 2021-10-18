import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCodeBranch,
  faExternalLinkAlt

} from '@fortawesome/free-solid-svg-icons';

const ProyectHotel = () => {
    return(
        <div className="proyect">
            <img  className="img-hotel" src="./images/simulador-hoteles.jpg" alt="imagen de proyecto"></img>
            <div className="proyect-info">
                <h3>SIMULADOR DE RESERVA DE HOTELES</h3>
                <p>Sitio web dinámico donde a través de filtros puede seleccionar el hotel que desea reservar. Proyecto realizado con tecnologias HTML, CSS, JAVASCRIPT y librería REACT JS.</p> 
                <div className="div-icon-proyect">
                    <a href="https://github.com/maxmferreyra/hotel-simulator-react"><FontAwesomeIcon icon={faCodeBranch}/></a>
                    <a href="https://maxmferreyra.github.io/hotel-simulator-react/"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                </div>   
            </div>
            
        </div>
    )
}

export default ProyectHotel