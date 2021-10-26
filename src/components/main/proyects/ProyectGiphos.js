import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCodeBranch,
  faExternalLinkAlt

} from '@fortawesome/free-solid-svg-icons';

const ProyectGiphos = () => {
    return(
        <div className="proyect proyect-giphos">
            <img src="./images/giphos.jpg" alt="imagen de proyecto" className="giphos"></img>
            <div className="proyect-info">
                <h3>GIPHOS</h3>
                <p>Sitio web para realizar la búsqueda de tus GIFs favoritos. Giphy API Rest. Proyecto realizado con tecnologias HTML, CSS, JAVASCRIPT y librería REACT JS</p>
                <div className="div-icon-proyect">
                    <a href="https://github.com/maxmferreyra/gyphos"><FontAwesomeIcon icon={faCodeBranch}/></a>
                    <a href="https://maxmferreyra.github.io/gyphos/"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                </div>  
            </div>
                    
        </div>
    )
}

export default ProyectGiphos